# STUDASSIST — Website Documentation

> Cabinet de conseil dédié à l'élève et à l'étudiant, spécialisé dans le soutien scolaire, l'orientation et la préparation aux études supérieures au Maroc et à l'international.

**Live:** [https://www.studassist.ma](https://www.studassist.ma)

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
4. [Environment Variables](#environment-variables)
5. [Routing & Pages](#routing--pages)
6. [Components Architecture](#components-architecture)
7. [API Routes (Serverless Functions)](#api-routes-serverless-functions)
8. [Forms & Lead Capture](#forms--lead-capture)
9. [Blog System](#blog-system)
10. [Google Sheets Integration](#google-sheets-integration)
11. [Email Notifications (Resend)](#email-notifications-resend)
12. [AI Chatbot](#ai-chatbot)
13. [Google Reviews Integration](#google-reviews-integration)
14. [SEO & Page Meta](#seo--page-meta)
15. [Deployment (Vercel)](#deployment-vercel)
16. [Adding a New Blog Post](#adding-a-new-blog-post)
17. [Adding a New Page](#adding-a-new-page)
18. [DNS & Email Setup](#dns--email-setup)
19. [Troubleshooting](#troubleshooting)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript |
| **Bundler** | Vite 6 |
| **Styling** | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| **Animations** | Motion (framer-motion successor) |
| **Routing** | React Router DOM 7 |
| **Icons** | Lucide React + React Icons |
| **Email** | Resend SDK |
| **Sheets** | Google Apps Script |
| **AI Chat** | Groq API (LLaMA) |
| **Analytics** | Vercel Analytics |
| **Hosting** | Vercel |
| **DNS** | Vercel DNS (ns1/ns2.vercel-dns.com) |

---

## Project Structure

```
studassist-pro/
├── api/                          # Vercel Serverless Functions
│   ├── submit-form.ts            # Contact/lead form handler
│   ├── submit-candidature.ts     # Talent/recruitment form handler
│   ├── google-reviews.ts         # Google Places reviews proxy
│   ├── chat.ts                   # AI chatbot API
│   └── tsconfig.json             # Separate TS config for serverless
├── public/                       # Static assets (images, fonts, favicons)
├── scripts/                      # Deployment scripts
│   ├── google-apps-script-leads.js     # Apps Script for leads sheet + Gmail
│   └── google-apps-script-talent.js    # Apps Script for talent sheet + Gmail
├── src/
│   ├── App.tsx                   # Root component with all routes
│   ├── main.tsx                  # Entry point
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Main navigation (mega menu)
│   │   │   └── Footer.tsx        # Site footer
│   │   ├── OrientationLevelPage.tsx  # Reusable template for sub-pages
│   │   ├── FAQ.tsx               # FAQ accordion component
│   │   ├── TestimonialsSection.tsx   # Google reviews carousel
│   │   ├── ExpertisePoles.tsx    # Homepage expertise grid
│   │   ├── Logo.tsx              # SVG logo component
│   │   ├── MediaFrameFloaters.tsx    # Decorative floating elements
│   │   └── ui/
│   │       ├── icons.tsx         # Re-exported icon library
│   │       ├── WhatsAppButton.tsx    # Floating WhatsApp CTA
│   │       ├── StudAssistChat.tsx    # AI chatbot widget
│   │       └── NumberCounter.tsx     # Animated number counter
│   ├── data/
│   │   ├── blogs.ts             # Blog posts data (content array)
│   │   └── faq.ts              # FAQ questions/answers by category
│   ├── hooks/
│   │   ├── useFormSubmit.ts     # Contact form submission hook
│   │   ├── useGoogleReviews.ts  # Google Places reviews hook
│   │   └── usePageMeta.ts      # Dynamic page title/description
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn, waLink)
│   └── pages/
│       ├── Home.tsx             # Homepage
│       ├── Contact.tsx          # Lead capture form
│       ├── NousRejoindre.tsx    # Recruitment/talent form
│       ├── QuiSommesNous.tsx    # About page
│       ├── OrientationScolaire.tsx   # Orientation landing
│       ├── SoutienScolaire.tsx       # Tutoring landing
│       ├── PrepasBac.tsx             # Bac prep landing
│       ├── PrepasConcours.tsx        # Concours prep landing
│       ├── Certifications.tsx        # Language certs landing
│       ├── AdminLogement.tsx         # Admin & housing landing
│       ├── Blogs.tsx                 # Blog listing page
│       ├── BlogPost.tsx              # Individual blog post page
│       ├── orientation/         # Orientation sub-pages (Seconde, Première, etc.)
│       ├── soutien/             # Tutoring sub-pages (Primaire, Collège, etc.)
│       ├── prepas-bac/          # Bac prep sub-pages (Français, Philo, etc.)
│       ├── prepas-concours/     # Concours sub-pages (UM6P, SESAME, etc.)
│       ├── certifications/      # Cert sub-pages (IELTS, TCF, DELE)
│       └── admin-logement/      # Admin sub-pages (Démarches, Logement)
├── .env                         # Environment variables (gitignored)
├── .env.example                 # Template for required env vars
├── index.html                   # HTML entry point
├── vite.config.ts               # Vite config (dev server + API proxy)
├── vercel.json                  # Vercel deployment config
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies & scripts
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** 9+

### Installation

```bash
cd studassist-pro
npm install
```

### Configure Environment

Copy the example and fill in your values:

```bash
cp .env.example .env
```

### Run Development Server

```bash
npm run dev
```

The site will be available at **http://localhost:3000**.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`.

### Type Check

```bash
npm run lint
```

---

## Environment Variables

| Variable | Purpose | Required |
|----------|---------|----------|
| `RESEND_API_KEY` | Resend API key for sending lead email notifications | Yes |
| `RESEND_TALENT_API_KEY` | Separate Resend key for talent/recruitment emails | Yes |
| `GOOGLE_APPS_SCRIPT_URL` | Web app URL for leads Google Sheet + Gmail notifications | Yes |
| `TALENT_APPS_SCRIPT_URL` | Web app URL for talent Google Sheet + Gmail notifications | Optional |
| `VITE_GOOGLE_PLACES_API_KEY` | Google Places API key (for reviews widget) | Yes |
| `VITE_GOOGLE_PLACE_ID` | Google Place ID for STUDASSIST | Yes |
| `GROQ_API_KEY` | Groq API key for the AI chatbot | Yes |

> **Note:** Variables prefixed with `VITE_` are exposed to the client-side bundle. All others are server-side only (used in API routes).

---

## Routing & Pages

All routes are defined in `src/App.tsx`. The app uses **React Router DOM v7** with a `BrowserRouter`.

### Main Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Homepage with hero, expertise, testimonials, blog preview |
| `/qui-sommes-nous` | `QuiSommesNous` | About page (team, method, values) |
| `/contact` | `Contact` | Lead capture form (multi-step) |
| `/nous-rejoindre` | `NousRejoindre` | Talent acquisition form |
| `/blogs` | `Blogs` | Blog listing grid |
| `/blogs/:slug` | `BlogPost` | Individual blog article |

### Programme Landing Pages

| Route | Component |
|-------|-----------|
| `/orientation-scolaire` | `OrientationScolaire` |
| `/soutien-scolaire` | `SoutienScolaire` |
| `/prepas-bac` | `PrepasBac` |
| `/prepas-concours` | `PrepasConcours` |
| `/certifications` | `Certifications` |
| `/admin-logement` | `AdminLogement` |

### Sub-Pages (use `OrientationLevelPage` template)

- **Orientation:** `/orientation/seconde`, `/orientation/premiere`, `/orientation/terminale`, `/orientation/reorientation`, `/orientation/master`
- **Soutien:** `/soutien/primaire`, `/soutien/college`, `/soutien/brevet`, `/soutien/lycee`, `/soutien/superieur`, `/soutien/stages`
- **Prépas Bac:** `/prepas-bac/francais`, `/prepas-bac/specialites`, `/prepas-bac/philo`, `/prepas-bac/grand-oral`
- **Prépas Concours:** `/prepa-sat-gmat`, `/prepa-concours-sesame-acces`, `/prepa-concours-encg-iscae`, `/prepa-concours-avenir-geipi-puissance-alpha`, `/prepa-concours-um6p`, `/prepa-medecine-maroc`, `/prepa-medecine-belgique`, `/prepa-sciences-po`, `/prepa-architecture-ena`
- **Certifications:** `/certifications/ielts-toefl`, `/certifications/tcf-dalf`, `/certifications/dele`
- **Admin & Logement:** `/admin-logement/demarches`, `/admin-logement/logement`

### Fallback

Any unmatched route (`*`) renders the `Home` component.

---

## Components Architecture

### `OrientationLevelPage` (Reusable Template)

The majority of sub-pages use this component. It provides a standardized layout:

1. **Hero** — eyebrow, title, subtitle, intro paragraphs, image, CTA button
2. **Enjeux** — key challenges/goals (optional)
3. **Sections** — accordion-based content blocks
4. **Audience** — who this programme targets (optional)
5. **Why Choose** — competitive advantages (optional)
6. **CTA Banner** — bottom call-to-action section
7. **FAQ** — frequently asked questions

**Props interface:** See `src/components/OrientationLevelPage.tsx` — all props are typed in `OrientationLevelPageProps`.

### Layout

- **`Navbar`** — Fixed top navigation with mega-menu dropdowns, mobile hamburger menu
- **`Footer`** — Full footer with programme links, contact info, social links
- **`DecorativeBackdrop`** — Background gradient/decorative elements
- **`ScrollToTop`** — Scrolls to top on route change (respects hash anchors)

### Shared UI

- **`FAQ`** — Collapsible FAQ section with aside
- **`TestimonialsSection`** — Google reviews carousel
- **`WhatsAppButton`** — Floating WhatsApp button (bottom-right)
- **`StudAssistChat`** — AI chatbot widget (bottom-left)
- **`MediaFrameFloaters`** — Decorative floating images

---

## API Routes (Serverless Functions)

Located in `/api/`. These are Vercel Serverless Functions that run on the server.

### `POST /api/submit-form`

Handles **contact/lead form** submissions.

**Input:** JSON body

```json
{
  "nom": "string",
  "prenom": "string",
  "tel": "string",
  "email": "string",
  "role": "parent | eleve",
  "intent": "orientation | cours | rdv | autre",
  "niveau": "string",
  "systeme": "string",
  "message": "string",
  "source": "string"
}
```

**Flow:**
1. Appends data to Google Sheet via Apps Script
2. Sends email notification to `hello@studassist.ma` via Resend
3. Returns success if at least one method works

**Response:** `{ success: true, sheet: boolean, email: boolean }`

---

### `POST /api/submit-candidature`

Handles **talent/recruitment form** submissions (multipart/form-data).

**Input:** FormData with fields + file uploads (CV, lettre de motivation)

**Flow:**
1. Parses multipart form data (fields + files)
2. Appends to talent Google Sheet via Apps Script (if configured)
3. Sends email with attachments to `talentacquisition@studassist.ma` via Resend
4. Returns success if at least one method works

---

### `GET /api/google-reviews`

Proxies Google Places API to fetch reviews (avoids CORS and hides API key).

---

### `POST /api/chat`

AI chatbot endpoint powered by Groq (LLaMA model). Accepts a conversation history and returns an AI response about STUDASSIST services.

---

## Forms & Lead Capture

### Contact Form (`/contact`)

- **Multi-step form** with validation
- Fields: nom, prénom, téléphone, email, rôle, intention, niveau, système, message
- Uses `useFormSubmit` hook → sends JSON POST to `/api/submit-form`
- On success: displays confirmation message
- All CTA buttons across the site redirect here

### Recruitment Form (`/nous-rejoindre`)

- **Tabbed form** (Professeur / Consultant / Support)
- Fields: personal info, profil, matières, systèmes, niveaux, experience, motivation
- File uploads: CV + lettre de motivation
- Sends multipart FormData POST to `/api/submit-candidature`

---

## Blog System

### How It Works

Blogs are stored as a **data array** in `src/data/blogs.ts`. Each blog post has:

```typescript
interface BlogPost {
  id: string;
  slug: string;           // URL-friendly identifier
  title: string;
  category: string;       // e.g. "ORIENTATION", "SOUTIEN SCOLAIRE"
  date: string;           // Display date
  image: string;          // Path to image in /public
  excerpt: string;        // Short description for cards
  content: string;        // Full HTML content of the article
}
```

### Pages

- **`/blogs`** — Grid of all blog posts (cards with image, title, excerpt, category badge)
- **`/blogs/:slug`** — Full article page, rendered from the `content` HTML string

### Adding a New Blog Post

1. **Add the article image** to `/public/` (e.g., `/public/image-article-6.png`)

2. **Edit `src/data/blogs.ts`** — Add a new entry to the `blogs` array:

```typescript
{
  id: "6",
  slug: "votre-slug-url-friendly",
  title: "Titre de votre article",
  category: "ORIENTATION",    // or "SOUTIEN SCOLAIRE", "PRÉPAS & CONCOURS", etc.
  date: "25 Juillet, 2026",
  image: "/image-article-6.png",
  excerpt: "Un court résumé qui apparaîtra sur les cartes du blog...",
  content: `<h2><strong>Introduction</strong></h2>
    <p>Votre contenu HTML ici...</p>
    <h2><strong>Section 1</strong></h2>
    <p>Plus de contenu...</p>
    <h2><strong>Conclusion</strong></h2>
    <p>Conclusion de l'article.</p>`
}
```

3. **Internal links in content:** Use `<a href="/orientation" class="text-sa-green font-semibold hover:underline">` for links to other pages.

4. **That's it!** The blog listing and individual post pages are automatically generated from the data array.

### Blog Content Tips

- Use `<h2><strong>Titre</strong></h2>` for section headings
- Use `<p>...</p>` for paragraphs
- Use `<ul><li>...</li></ul>` for lists
- Use `<strong>...</strong>` for bold text
- Add internal links with the class: `class="text-sa-green font-semibold hover:underline"`
- Images in content: `<img src="/your-image.png" alt="description" class="rounded-xl my-6" />`

---

## Google Sheets Integration

### Leads Sheet

- **Sheet:** [Leads Google Sheet](https://docs.google.com/spreadsheets/d/1XhIinHKRP6e4B1Nadr5OrZ-bnzE7atN8HMQJP1HjOmg/edit)
- **Apps Script:** `scripts/google-apps-script-leads.js`
- **How it works:** The API route POSTs form data as JSON to the Apps Script web app URL. The script appends a row to the sheet and optionally sends a Gmail notification.

### Talent Sheet

- **Sheet:** [Talent Google Sheet](https://docs.google.com/spreadsheets/d/1lp0iDSSU-l__mygE3XmtKSKPc1pxvnNhmz7yNlh5y4k/edit)
- **Apps Script:** `scripts/google-apps-script-talent.js`

### Deploying/Updating Apps Scripts

1. Open the Google Sheet → **Extensions → Apps Script**
2. Replace the code with the content from the corresponding `scripts/` file
3. **Deploy → Manage deployments → New deployment**
4. Type: **Web app** | Execute as: **Me** | Who has access: **Anyone**
5. Copy the deployment URL → paste into `.env` as `GOOGLE_APPS_SCRIPT_URL` or `TALENT_APPS_SCRIPT_URL`
6. Redeploy on Vercel (or push to trigger auto-deploy)

---

## Email Notifications (Resend)

### Setup

Two separate Resend accounts are used:

| Account | Email | API Key Variable | Purpose |
|---------|-------|-----------------|---------|
| Leads | `hello@studassist.ma` | `RESEND_API_KEY` | Contact form notifications |
| Talent | `talentacquisition@studassist.ma` | `RESEND_TALENT_API_KEY` | Recruitment form notifications |

### Domain Verification

The `studassist.ma` domain must be verified in each Resend account to send from `@studassist.ma` addresses. If not verified, `onboarding@resend.dev` is used as fallback.

To verify:
1. Log in to [resend.com](https://resend.com) with the account email
2. Go to **Domains** → **Add Domain** → `studassist.ma`
3. Add the provided DNS records (TXT, DKIM) to Vercel DNS
4. Click **Verify**

### Email Content

Emails are sent as HTML with the lead/candidature details formatted in a branded template. The candidature email also includes file attachments (CV, lettre de motivation).

---

## AI Chatbot

- **Widget:** `src/components/ui/StudAssistChat.tsx`
- **API:** `api/chat.ts`
- **Provider:** Groq (LLaMA model)
- **Behavior:** Answers questions about STUDASSIST services, programmes, pricing, etc.
- **Env var:** `GROQ_API_KEY`

---

## Google Reviews Integration

- **Hook:** `src/hooks/useGoogleReviews.ts`
- **API Proxy:** `api/google-reviews.ts`
- **Component:** `src/components/TestimonialsSection.tsx`
- **How it works:** The frontend calls `/api/google-reviews` which proxies the Google Places API (to hide the API key). Reviews are displayed in a carousel.

---

## SEO & Page Meta

Every page uses the `usePageMeta` hook to set:

- `<title>` — Dynamic page title
- `<meta name="description">` — SEO description
- `<link rel="canonical">` — Canonical URL

```typescript
usePageMeta({
  title: "Orientation Terminale — Accompagnement Académique",
  description: "Orientation scolaire en Terminale avec STUDASSIST...",
  canonical: "/orientation/terminale",
});
```

---

## Deployment (Vercel)

### Configuration (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

- API routes are handled by Vercel serverless functions (`/api/`)
- All other routes serve `index.html` (SPA client-side routing)

### Auto-Deploy

Push to `main` branch on GitHub → Vercel auto-deploys.

### Environment Variables on Vercel

Set all required env vars in **Vercel Dashboard → Project → Settings → Environment Variables**.

---

## Adding a New Page

### 1. Create the page component

```bash
# Example: new certification sub-page
touch src/pages/certifications/NewCert.tsx
```

### 2. Use the `OrientationLevelPage` template (recommended for programme pages)

```tsx
import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function NewCert() {
  return (
    <OrientationLevelPage
      eyebrow="NEW CERTIFICATION"
      title={<>Préparation <span className="text-brand-teal">New Cert</span></>}
      subtitle="Description courte..."
      intro={[<p key="1">Introduction paragraph...</p>]}
      heroImage="/hero-new-cert.png"
      sections={[
        {
          title: "Section 1",
          paragraphs: [<p key="1">Content...</p>],
          bullets: ["Point 1", "Point 2"],
        },
      ]}
      ctaBanner={{
        title: "Prêt à démarrer ?",
        body: "Réservez votre premier rendez-vous.",
        primaryLabel: "Prendre rendez-vous",
        primaryHref: "/contact",
      }}
      faqKeys={["certifications"]}
      hideSidebar
    />
  );
}
```

### 3. Add the route in `src/App.tsx`

```tsx
import NewCert from "./pages/certifications/NewCert";
// ...
<Route path="/certifications/new-cert" element={<NewCert />} />
```

### 4. Add to Navbar (`src/components/layout/Navbar.tsx`)

Add an entry to the relevant `subItems` array in `NAV_ITEMS`.

### 5. Add to Footer (`src/components/layout/Footer.tsx`)

Add a link entry to the relevant column in the `columns` array.

---

## DNS & Email Setup

### Current DNS (Vercel DNS)

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 (Vercel) |
| MX | @ | `ASPMX.L.GOOGLE.COM` (priority 1) |
| MX | @ | `ALT1.ASPMX.L.GOOGLE.COM` (priority 5) |
| MX | @ | `ALT2.ASPMX.L.GOOGLE.COM` (priority 5) |
| MX | @ | `ALT3.ASPMX.L.GOOGLE.COM` (priority 10) |
| MX | @ | `ALT4.ASPMX.L.GOOGLE.COM` (priority 10) |
| TXT | @ | `resend-domain-verification=...` |
| TXT | @ | `google-site-verification=...` |

### Email Addresses

- `hello@studassist.ma` — General contact (Google Workspace)
- `talentacquisition@studassist.ma` — Recruitment (Google Workspace)
- `contact@studassist.ma` — Public-facing email

---

## Troubleshooting

### Forms return 500 on production

1. Check Vercel function logs in the dashboard
2. Verify all env vars are set in Vercel project settings
3. Ensure `RESEND_API_KEY` and `RESEND_TALENT_API_KEY` are valid

### Emails not being received

1. Check MX records: `dig MX studassist.ma`
2. Verify domain in Resend dashboard
3. Check spam folder
4. View email status in Resend dashboard (Sent/Delivered/Bounced)

### Google Sheet not logging leads

1. Verify `GOOGLE_APPS_SCRIPT_URL` is set and correct
2. Test the Apps Script URL directly with `curl`:
   ```bash
   curl -X POST YOUR_APPS_SCRIPT_URL \
     -H "Content-Type: application/json" \
     -d '{"nom":"Test","prenom":"Test","email":"test@test.com"}'
   ```
3. Check the script execution logs in Apps Script editor

### Local API routes not working

The `vite.config.ts` middleware proxies API calls locally. Ensure:
- The `api/` folder exists inside `studassist-pro/`
- Dependencies (`resend`, `busboy`) are installed

### Blog post not appearing

- Ensure the blog entry is added to `src/data/blogs.ts`
- Ensure the `slug` is unique and URL-friendly (lowercase, hyphens, no spaces)
- Ensure the image exists in `/public/`

---

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | TypeScript type checking |
| `npm run clean` | Remove dist folder |

---

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint` to ensure no type errors
4. Push and create a pull request

---

*Last updated: July 2026*
