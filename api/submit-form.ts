import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || "";

interface FormPayload {
  // Identity
  nom: string;
  prenom: string;
  tel: string;
  email?: string;
  // Context
  role?: string;
  intent?: string;
  niveau?: string;
  systeme?: string;
  // Options
  matieres?: string[];
  prepas?: string[];
  certifications?: string[];
  disponibilites?: string[];
  message?: string;
  // Meta
  source?: string;
}

function buildEmailHtml(data: FormPayload): string {
  const fullName = `${data.prenom || ""} ${data.nom || ""}`.trim();
  const roleLabel = data.role === "eleve" ? "Élève" : data.role === "parent" ? "Parent" : data.role || "—";
  const intentLabel =
    data.intent === "cours"
      ? "Réserver un cours découverte"
      : data.intent === "orientation"
      ? "Réserver une séance d'orientation"
      : data.intent || "—";

  const row = (label: string, value: string) =>
    value && value !== "—"
      ? `<tr>
          <td style="padding:10px 16px;font-size:13px;color:#6B7280;font-weight:600;white-space:nowrap;vertical-align:top;width:160px;">${label}</td>
          <td style="padding:10px 16px;font-size:14px;color:#111827;font-weight:500;border-left:2px solid #F3F4F6;">${value}</td>
        </tr>`
      : "";

  const tagList = (items?: string[]) =>
    items && items.length > 0
      ? items
          .map(
            (i) =>
              `<span style="display:inline-block;background:#EEF9F7;color:#1BB79D;border:1px solid #C6EDE7;border-radius:99px;padding:3px 12px;font-size:12px;font-weight:600;margin:2px 3px 2px 0;">${i}</span>`
          )
          .join("")
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
    row("Rôle", roleLabel);

  const requestRows =
    row("Demande", intentLabel) +
    row("Niveau académique", data.niveau || "—") +
    row("Système scolaire", data.systeme || "—");

  const optionsSections =
    section(
      "Matières souhaitées",
      tagList(data.matieres)
        ? `<div style="margin-top:4px;">${tagList(data.matieres)}</div>`
        : ""
    ) +
    section(
      "Prépas concours",
      tagList(data.prepas)
        ? `<div style="margin-top:4px;">${tagList(data.prepas)}</div>`
        : ""
    ) +
    section(
      "Certifications",
      tagList(data.certifications)
        ? `<div style="margin-top:4px;">${tagList(data.certifications)}</div>`
        : ""
    ) +
    section(
      "Disponibilités",
      tagList(data.disponibilites)
        ? `<div style="margin-top:4px;">${tagList(data.disponibilites)}</div>`
        : ""
    );

  const messageSection = data.message
    ? section(
        "Message du client",
        `<div style="background:#F9FAFB;border-left:3px solid #1BB79D;border-radius:0 8px 8px 0;padding:14px 16px;font-size:14px;color:#374151;line-height:1.6;font-style:italic;">"${data.message}"</div>`
      )
    : "";

  const sourceSection = data.source
    ? section("Source", `<span style="font-size:13px;color:#6B7280;">${data.source}</span>`)
    : "";

  const now = new Date().toLocaleString("fr-FR", {
    timeZone: "Africa/Casablanca",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouvelle demande — STUDASSIST</title>
</head>
<body style="margin:0;padding:0;background:#F0F4F8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F0F4F8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#0B1F5C 0%,#1B2E80 60%,#1BB79D 100%);border-radius:20px 20px 0 0;padding:36px 40px 32px;">
              <div style="display:flex;align-items:center;gap:16px;">
                <div style="background:rgba(255,255,255,0.12);border-radius:12px;padding:10px 14px;display:inline-block;">
                  <span style="font-size:22px;font-weight:900;color:white;letter-spacing:-1px;">S</span>
                </div>
                <div>
                  <p style="margin:0;font-size:11px;font-weight:800;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.6);">Nouvelle demande</p>
                  <p style="margin:4px 0 0;font-size:20px;font-weight:800;color:white;letter-spacing:-0.5px;">STUDASSIST</p>
                </div>
              </div>
              <div style="margin-top:28px;background:rgba(255,255,255,0.1);border-radius:12px;padding:16px 20px;display:inline-block;">
                <p style="margin:0;font-size:26px;font-weight:800;color:white;letter-spacing:-0.5px;">${fullName || "Nouveau contact"}</p>
                <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.75);font-weight:500;">${intentLabel}</p>
              </div>
              <p style="margin:16px 0 0;font-size:11px;color:rgba(255,255,255,0.5);">Reçu le ${now}</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:white;padding:36px 40px;">

              <!-- Urgency banner -->
              <div style="background:#FFF8F0;border:1px solid #FDE68A;border-radius:10px;padding:14px 18px;margin-bottom:28px;display:flex;align-items:center;gap:10px;">
                <span style="font-size:18px;">📬</span>
                <p style="margin:0;font-size:13px;font-weight:600;color:#92400E;">Ce client attend votre retour — contactez-le rapidement pour maximiser la conversion.</p>
              </div>

              ${tableSection("Informations de contact", contactRows)}
              ${tableSection("Demande", requestRows)}
              ${optionsSections}
              ${messageSection}
              ${sourceSection}

            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background:#F9FAFB;border-top:1px solid #F3F4F6;padding:28px 40px;text-align:center;">
              <p style="margin:0 0 16px;font-size:13px;color:#6B7280;">Appelez directement ce client :</p>
              <a href="tel:${data.tel || ""}" style="display:inline-block;background:linear-gradient(135deg,#0B1F5C,#1BB79D);color:white;text-decoration:none;font-size:14px;font-weight:800;padding:14px 32px;border-radius:99px;letter-spacing:0.05em;">
                📞 ${data.tel || "—"}
              </a>
              ${
                data.email
                  ? `<br/><a href="mailto:${data.email}" style="display:inline-block;margin-top:12px;color:#1BB79D;font-size:13px;font-weight:600;text-decoration:none;">${data.email}</a>`
                  : ""
              }
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#0B1F5C;border-radius:0 0 20px 20px;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:0.1em;">STUDASSIST — hello@studassist.ma — www.studassist.ma</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function appendToSheet(data: FormPayload) {
  if (!APPS_SCRIPT_URL) {
    console.warn("GOOGLE_APPS_SCRIPT_URL not configured — skipping sheet append");
    return;
  }

  const response = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    redirect: "follow", // Apps Script redirects on POST
  });

  if (!response.ok) {
    throw new Error(`Apps Script returned ${response.status}: ${await response.text()}`);
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(`Apps Script error: ${result.error || "Unknown error"}`);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const data: FormPayload = req.body;

  if (!data.nom && !data.prenom && !data.tel) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const fullName = `${data.prenom || ""} ${data.nom || ""}`.trim();
  const intentLabel =
    data.intent === "cours"
      ? "Cours découverte"
      : data.intent === "orientation"
      ? "Séance d'orientation"
      : "Nouvelle demande";

  try {
    // 1. Send email via Resend
    // NOTE: Using onboarding@resend.dev until studassist.ma is verified in Resend.
    // Once verified, change to: "STUDASSIST <hello@studassist.ma>"
    const emailResult = await resend.emails.send({
      from: "STUDASSIST <onboarding@resend.dev>",
      to: ["hello@studassist.ma"],
      replyTo: data.email ? [data.email] : undefined,
      subject: `📚 ${intentLabel} — ${fullName}`,
      html: buildEmailHtml(data),
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
    }

    // 2. Append to Google Sheets via Apps Script (non-blocking — don't fail if not configured)
    try {
      await appendToSheet(data);
    } catch (sheetErr) {
      console.error("Google Sheets error:", sheetErr);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("submit-form error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
