import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  // Inject env vars to process.env for local API development
  process.env.RESEND_API_KEY = env.RESEND_API_KEY || process.env.RESEND_API_KEY || '';
  process.env.RESEND_TALENT_API_KEY = env.RESEND_TALENT_API_KEY || process.env.RESEND_TALENT_API_KEY || '';
  process.env.GOOGLE_APPS_SCRIPT_URL = env.GOOGLE_APPS_SCRIPT_URL || process.env.GOOGLE_APPS_SCRIPT_URL || '';
  process.env.TALENT_APPS_SCRIPT_URL = env.TALENT_APPS_SCRIPT_URL || process.env.TALENT_APPS_SCRIPT_URL || '';
  process.env.VITE_GOOGLE_PLACES_API_KEY = env.VITE_GOOGLE_PLACES_API_KEY || process.env.VITE_GOOGLE_PLACES_API_KEY || '';
  process.env.VITE_GOOGLE_PLACE_ID = env.VITE_GOOGLE_PLACE_ID || process.env.VITE_GOOGLE_PLACE_ID || '';
  process.env.GROQ_API_KEY = env.GROQ_API_KEY || env.VITE_GROQ_API_KEY || process.env.GROQ_API_KEY || '';

  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'api-server',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url?.split('?')[0];

            // ── /api/submit-form (JSON) ──────────────────────────────────
            if (url === '/api/submit-form' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                try {
                  const parsedBody = body ? JSON.parse(body) : {};
                  const vercelReq = { method: 'POST', body: parsedBody, query: {} };
                  const vercelRes = {
                    status(code) { res.statusCode = code; return this; },
                    json(data) { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(data)); return this; }
                  };
                  const module = await server.ssrLoadModule('./api/submit-form.ts');
                  await module.default(vercelReq, vercelRes);
                } catch (err) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message }));
                }
              });

            // ── /api/submit-candidature (multipart) ─────────────────────
            } else if (url === '/api/submit-candidature' && req.method === 'POST') {
              const chunks: Buffer[] = [];
              req.on('data', (chunk: Buffer) => chunks.push(chunk));
              req.on('end', async () => {
                try {
                  // Re-assemble a pipe-able stream from the raw body
                  const { Readable } = await import('stream');
                  const rawBody = Buffer.concat(chunks);
                  const fakeStream = new Readable();
                  fakeStream.push(rawBody);
                  fakeStream.push(null);
                  // Forward original headers so busboy can parse boundary
                  (fakeStream as any).headers = req.headers;
                  const vercelReq = fakeStream as any;
                  vercelReq.method = 'POST';
                  vercelReq.query = {};
                  const vercelRes = {
                    status(code) { res.statusCode = code; return this; },
                    json(data) { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(data)); return this; }
                  };
                  const module = await server.ssrLoadModule('./api/submit-candidature.ts');
                  await module.default(vercelReq, vercelRes);
                } catch (err) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message }));
                }
              });

            // ── /api/google-reviews (GET — proxy Google Places) ──────
            } else if (url === '/api/google-reviews' && req.method === 'GET') {
              (async () => {
                try {
                  const module = await server.ssrLoadModule('./api/google-reviews.ts');
                  const vercelReq = { method: 'GET', query: {} };
                  const vercelRes = {
                    statusCode: 200,
                    headers: {} as Record<string, string>,
                    status(code: number) { this.statusCode = code; res.statusCode = code; return this; },
                    setHeader(k: string, v: string) { this.headers[k] = v; res.setHeader(k, v); return this; },
                    json(data: any) { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(data)); return this; }
                  };
                  await module.default(vercelReq, vercelRes);
                } catch (err: any) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message }));
                }
              })();

            // ── /api/chat (POST — JSON) ──────────────────────────────────
            } else if (url === '/api/chat' && req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                try {
                  const parsedBody = body ? JSON.parse(body) : {};
                  const vercelReq = { method: 'POST', body: parsedBody, query: {} };
                  const vercelRes = {
                    status(code: number) { res.statusCode = code; return this; },
                    json(data: any) { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(data)); return this; }
                  };
                  const module = await server.ssrLoadModule('./api/chat.ts');
                  await module.default(vercelReq, vercelRes);
                } catch (err: any) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message }));
                }
              });

            } else {
              next();
            }
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      fs: {
        allow: ['..']
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
