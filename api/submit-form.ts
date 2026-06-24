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
          <td style="padding:14px 20px;font-size:11px;color:#9CA3AF;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;width:180px;border-bottom:1px solid #E5E7EB;">${label}</td>
          <td style="padding:14px 20px;font-size:14px;color:#0B1F5C;font-weight:600;border-bottom:1px solid #E5E7EB;border-left:1px solid #E5E7EB;">${value}</td>
        </tr>`
      : "";

  const tagList = (items?: string[]) =>
    items && items.length > 0
      ? items
          .map(
            (i) =>
              `<span style="display:inline-block;background-color:#EEF9F7;color:#1BB79D;border:1px solid #C6EDE7;border-radius:99px;padding:4px 12px;font-size:12px;font-weight:600;margin:2px 4px 2px 0;">${i}</span>`
          )
          .join("")
      : "";

  const section = (title: string, content: string) =>
    content
      ? `<div style="margin-bottom:28px;">
          <p style="font-size:11px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#9CA3AF;margin:0 0 10px 0;">${title}</p>
          ${content}
        </div>`
      : "";

  const tableSection = (title: string, rows: string) =>
    rows
      ? section(
          title,
          `<table style="width:100%;border-collapse:collapse;background-color:#FAFAFA;border-radius:12px;overflow:hidden;border:1px solid #E5E7EB;">
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
        `<div style="background-color:#FAFAFA;border-left:4px solid #1BB79D;border-radius:0 8px 8px 0;padding:16px 20px;font-size:14px;color:#0B1F5C;line-height:1.6;font-style:normal;font-weight:500;border-top:1px solid #E5E7EB;border-right:1px solid #E5E7EB;border-bottom:1px solid #E5E7EB;">${data.message}</div>`
      )
    : "";

  const sourceSection = data.source
    ? section("Source", `<span style="font-size:13px;color:#6B7280;font-weight:600;">${data.source}</span>`)
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
<body style="margin:0;padding:0;background-color:#F4F7FA;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F7FA;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border:1px solid #E5E7EB;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.03);">

          <!-- HEADER -->
          <tr>
            <td style="background-color:#0B1F5C;padding:40px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-bottom:24px;">
                    <img src="https://www.studassist.ma/logo-white.png" alt="STUDASSIST" style="height:36px;width:auto;display:block;border:0;outline:none;" height="36" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0;font-size:11px;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.6);line-height:1;">Nouvelle demande</p>
                    <p style="margin:6px 0 0;font-size:22px;font-weight:800;color:#FFFFFF;letter-spacing:-0.5px;line-height:1.2;">Lead Qualifié</p>
                  </td>
                </tr>
              </table>
              
              <div style="margin-top:28px;background-color:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:20px;">
                <p style="margin:0;font-size:24px;font-weight:800;color:#FFFFFF;letter-spacing:-0.5px;line-height:1.2;">${fullName || "Nouveau contact"}</p>
                <p style="margin:6px 0 0;font-size:14px;color:#1BB79D;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">${intentLabel}</p>
              </div>
              <p style="margin:16px 0 0;font-size:11px;color:rgba(255,255,255,0.4);line-height:1;">Reçu le ${now}</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background-color:#FFFFFF;padding:40px;">

              <!-- Alert Banner -->
              <div style="background-color:#F0FDF4;border-left:4px solid #1BB79D;border-radius:4px;padding:16px;margin-bottom:28px;">
                <p style="margin:0;font-size:13px;font-weight:600;color:#166534;line-height:1.5;">Nouveau prospect qualifié. Veuillez le recontacter sous 24 heures pour maximiser la conversion.</p>
              </div>

              ${tableSection("Informations de contact", contactRows)}
              ${tableSection("Demande", requestRows)}
              ${optionsSections}
              ${messageSection}
              ${sourceSection}

            </td>
          </tr>

          <!-- CTA / Actions -->
          <tr>
            <td style="background-color:#FAFAFA;border-top:1px solid #E5E7EB;padding:36px 40px;text-align:center;">
              <p style="margin:0 0 20px;font-size:14px;color:#6B7280;font-weight:500;line-height:1.2;">Prendre contact avec le client :</p>
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                <tr>
                  <td style="padding:0 8px;">
                    <a href="tel:${data.tel || ""}" style="display:inline-block;background-color:#1BB79D;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:700;padding:14px 28px;border-radius:8px;letter-spacing:0.02em;">
                      Appeler le client
                    </a>
                  </td>
                  ${
                    data.email
                      ? `<td style="padding:0 8px;">
                          <a href="mailto:${data.email}" style="display:inline-block;background-color:#0B1F5C;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:700;padding:14px 28px;border-radius:8px;letter-spacing:0.02em;">
                            Contacter par email
                          </a>
                        </td>`
                      : ""
                  }
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#0B1F5C;padding:28px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:0.1em;line-height:1.5;">STUDASSIST &bull; hello@studassist.ma &bull; www.studassist.ma</p>
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
      subject: `${intentLabel} — ${fullName}`,
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
