import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import Busboy from "busboy";

// ─── Separate Resend instance for Talent Acquisition ─────────────────────────
const resend = new Resend(process.env.RESEND_TALENT_API_KEY);

// ─── Types ────────────────────────────────────────────────────────────────────
interface CandidaturePayload {
  nom: string;
  prenom: string;
  tel: string;
  email: string;
  profil: string; // "professeur" | "consultant" | "support"
  // Professeur fields
  matieres?: string[];
  systemes?: string[];
  niveaux?: string[];
  experience?: string;
  // Consultant / Support fields
  domaines?: string;
  experienceDetail?: string;
  fonctionDomaine?: string;
  // Motivation
  motivation?: string;
  messageComplementaire?: string;
}

interface AttachedFile {
  filename: string;
  content: Buffer;
  mimeType: string;
}

// ─── Multipart parser ─────────────────────────────────────────────────────────
function parseMultipart(req: VercelRequest): Promise<{ fields: Record<string, string>; files: Record<string, AttachedFile> }> {
  return new Promise((resolve, reject) => {
    const bb = Busboy({ headers: req.headers as Record<string, string> });
    const fields: Record<string, string> = {};
    const files: Record<string, AttachedFile> = {};

    bb.on("field", (name, val) => {
      fields[name] = val;
    });

    bb.on("file", (name, stream, info) => {
      const chunks: Buffer[] = [];
      stream.on("data", (chunk: Buffer) => chunks.push(chunk));
      stream.on("end", () => {
        files[name] = {
          filename: info.filename,
          content: Buffer.concat(chunks),
          mimeType: info.mimeType,
        };
      });
    });

    bb.on("finish", () => resolve({ fields, files }));
    bb.on("error", reject);

    if (req.pipe) {
      (req as any).pipe(bb);
    } else {
      reject(new Error("Request is not a readable stream"));
    }
  });
}

// ─── Email HTML builder ───────────────────────────────────────────────────────
function buildCandidatureEmailHtml(data: CandidaturePayload, cvFilename?: string, lettreFilename?: string): string {
  const fullName = `${data.prenom || ""} ${data.nom || ""}`.trim();

  const profilLabel =
    data.profil === "professeur"
      ? "Professeur"
      : data.profil === "consultant"
      ? "Consultant(e) en orientation"
      : data.profil === "support"
      ? "Fonction support"
      : data.profil || "—";

  const now = new Date().toLocaleString("fr-FR", {
    timeZone: "Africa/Casablanca",
    dateStyle: "full",
    timeStyle: "short",
  });

  const row = (label: string, value: string) =>
    value && value !== "—"
      ? `<tr>
          <td style="padding:10px 16px;font-size:13px;color:#6B7280;font-weight:600;white-space:nowrap;vertical-align:top;width:170px;">${label}</td>
          <td style="padding:10px 16px;font-size:14px;color:#111827;font-weight:500;border-left:2px solid #F3F4F6;">${value}</td>
        </tr>`
      : "";

  const tagList = (items?: string[]) =>
    items && items.length > 0
      ? `<div style="margin-top:4px;">${items
          .map((i) => `<span style="display:inline-block;background:#EEF9F7;color:#1BB79D;border:1px solid #C6EDE7;border-radius:99px;padding:3px 12px;font-size:12px;font-weight:600;margin:2px 3px 2px 0;">${i}</span>`)
          .join("")}</div>`
      : "";

  const section = (title: string, content: string) =>
    content
      ? `<div style="margin-bottom:24px;">
          <p style="font-size:11px;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;color:#9CA3AF;margin:0 0 10px 0;">${title}</p>
          ${content}
        </div>`
      : "";

  const tableSection = (title: string, rows: string) =>
    rows
      ? section(
          title,
          `<table style="width:100%;border-collapse:collapse;background:#FAFAFA;border-radius:12px;overflow:hidden;border:1px solid #F3F4F6;">
            ${rows}
          </table>`
        )
      : "";

  const contactRows =
    row("Nom complet", fullName) +
    row("Téléphone", data.tel || "—") +
    row("Email", data.email || "—") +
    row("Profil", profilLabel);

  // Profile-specific detail rows
  let profileRows = "";
  if (data.profil === "professeur") {
    profileRows =
      row("Expérience", data.experience || "—");
  } else if (data.profil === "consultant") {
    profileRows =
      row("Domaines d'expertise", data.domaines || "—") +
      row("Expérience", data.experienceDetail || "—");
  } else if (data.profil === "support") {
    profileRows =
      row("Fonction / Domaine", data.fonctionDomaine || "—") +
      row("Expérience", data.experience || "—");
  }

  const motivationSection = data.motivation
    ? section(
        "Motivation",
        `<div style="background:#F9FAFB;border-left:3px solid #1BB79D;border-radius:0 8px 8px 0;padding:14px 16px;font-size:14px;color:#374151;line-height:1.6;font-style:italic;">"${data.motivation}"</div>`
      )
    : "";

  const complementaireSection = data.messageComplementaire
    ? section(
        "Message complémentaire",
        `<div style="background:#F9FAFB;border-left:3px solid #1BB79D;border-radius:0 8px 8px 0;padding:14px 16px;font-size:14px;color:#374151;line-height:1.6;font-style:italic;">"${data.messageComplementaire}"</div>`
      )
    : "";

  const documentsSection = section(
    "Documents joints",
    `<table style="width:100%;border-collapse:collapse;background:#FAFAFA;border-radius:12px;overflow:hidden;border:1px solid #F3F4F6;">
      ${row("CV", cvFilename ? `📎 ${cvFilename}` : "Non fourni")}
      ${row("Lettre de motivation", lettreFilename ? `📎 ${lettreFilename}` : "Non fournie")}
    </table>`
  );

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouvelle candidature — STUDASSIST</title>
</head>
<body style="margin:0;padding:0;background:#F0F4F8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F0F4F8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#0B1F5C 0%,#1B2E80 60%,#EE5C5F 100%);border-radius:20px 20px 0 0;padding:36px 40px 32px;">
              <div style="display:flex;align-items:center;gap:16px;">
                <div style="background:rgba(255,255,255,0.12);border-radius:12px;padding:10px 14px;display:inline-block;">
                  <span style="font-size:22px;font-weight:900;color:white;letter-spacing:-1px;">S</span>
                </div>
                <div>
                  <p style="margin:0;font-size:11px;font-weight:800;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.6);">Nouvelle candidature</p>
                  <p style="margin:4px 0 0;font-size:20px;font-weight:800;color:white;letter-spacing:-0.5px;">STUDASSIST — Talent Acquisition</p>
                </div>
              </div>
              <div style="margin-top:28px;background:rgba(255,255,255,0.1);border-radius:12px;padding:16px 20px;display:inline-block;">
                <p style="margin:0;font-size:26px;font-weight:800;color:white;letter-spacing:-0.5px;">${fullName || "Candidat"}</p>
                <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.75);font-weight:500;">${profilLabel}</p>
              </div>
              <p style="margin:16px 0 0;font-size:11px;color:rgba(255,255,255,0.5);">Reçue le ${now}</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:white;padding:36px 40px;">

              <!-- Banner -->
              <div style="background:#FFF0F0;border:1px solid #FECACA;border-radius:10px;padding:14px 18px;margin-bottom:28px;">
                <p style="margin:0;font-size:13px;font-weight:600;color:#991B1B;">📋 Nouvelle candidature reçue — Merci d'étudier ce profil avec attention.</p>
              </div>

              ${tableSection("Informations du candidat", contactRows)}
              ${data.profil === "professeur" && (data.matieres?.length || data.systemes?.length || data.niveaux?.length)
                ? section("Profil enseignant",
                    (data.matieres?.length ? `<p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.1em;">Matières</p>${tagList(data.matieres)}` : "") +
                    (data.systemes?.length ? `<p style="margin:12px 0 6px;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.1em;">Systèmes scolaires</p>${tagList(data.systemes)}` : "") +
                    (data.niveaux?.length ? `<p style="margin:12px 0 6px;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.1em;">Niveaux</p>${tagList(data.niveaux)}` : "")
                  )
                : ""}
              ${tableSection("Détails du profil", profileRows)}
              ${motivationSection}
              ${complementaireSection}
              ${documentsSection}

            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background:#F9FAFB;border-top:1px solid #F3F4F6;padding:28px 40px;text-align:center;">
              <p style="margin:0 0 16px;font-size:13px;color:#6B7280;">Répondre directement au candidat :</p>
              <a href="mailto:${data.email}" style="display:inline-block;background:linear-gradient(135deg,#0B1F5C,#EE5C5F);color:white;text-decoration:none;font-size:14px;font-weight:800;padding:14px 32px;border-radius:99px;letter-spacing:0.05em;">
                ✉️ ${data.email}
              </a>
              <br/>
              <a href="tel:${data.tel}" style="display:inline-block;margin-top:12px;color:#1BB79D;font-size:13px;font-weight:600;text-decoration:none;">📞 ${data.tel}</a>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#0B1F5C;border-radius:0 0 20px 20px;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:0.1em;">STUDASSIST — talentacquisition@studassist.ma — www.studassist.ma</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}


// ─── Handler ──────────────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { fields, files } = await parseMultipart(req);

    // Parse array fields (sent as JSON strings from the frontend)
    const parseArrayField = (val?: string): string[] => {
      if (!val) return [];
      try { return JSON.parse(val); } catch { return []; }
    };

    const data: CandidaturePayload = {
      nom: fields.nom || "",
      prenom: fields.prenom || "",
      tel: fields.tel || "",
      email: fields.email || "",
      profil: fields.profil || "",
      matieres: parseArrayField(fields.matieres),
      systemes: parseArrayField(fields.systemes),
      niveaux: parseArrayField(fields.niveaux),
      experience: fields.experience || "",
      domaines: fields.domaines || "",
      experienceDetail: fields.experienceDetail || "",
      fonctionDomaine: fields.fonctionDomaine || "",
      motivation: fields.motivation || "",
      messageComplementaire: fields.messageComplementaire || "",
    };

    if (!data.nom || !data.prenom || !data.email || !data.tel) {
      return res.status(400).json({ error: "Champs obligatoires manquants (nom, prénom, email, téléphone)" });
    }

    const cvFile = files["cv"];
    const lettreFile = files["lettre"];

    const fullName = `${data.prenom} ${data.nom}`.trim();
    const profilLabel =
      data.profil === "professeur" ? "Professeur" :
      data.profil === "consultant" ? "Consultant en orientation" :
      data.profil === "support" ? "Fonction support" : data.profil;

    // Build attachments array for Resend
    const attachments: { filename: string; content: Buffer }[] = [];
    if (cvFile && cvFile.content.length > 0) {
      attachments.push({ filename: cvFile.filename || "CV.pdf", content: cvFile.content });
    }
    if (lettreFile && lettreFile.content.length > 0) {
      attachments.push({ filename: lettreFile.filename || "Lettre_de_motivation.pdf", content: lettreFile.content });
    }

    // Send email with CV & lettre attachments via Resend
    const emailResult = await resend.emails.send({
      from: "STUDASSIST Careers <onboarding@resend.dev>",
      to: ["talentacquisition@studassist.ma"],
      replyTo: [data.email],
      subject: `🎓 Candidature — ${profilLabel} — ${fullName}`,
      html: buildCandidatureEmailHtml(data, cvFile?.filename, lettreFile?.filename),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (emailResult.error) {
      console.error("Resend Talent error:", emailResult.error);
      return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
    }

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error("submit-candidature error:", err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
}
