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
          <td style="padding:14px 20px;font-size:11px;color:#9CA3AF;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;vertical-align:top;width:180px;border-bottom:1px solid #E5E7EB;">${label}</td>
          <td style="padding:14px 20px;font-size:14px;color:#0B1F5C;font-weight:600;border-bottom:1px solid #E5E7EB;border-left:1px solid #E5E7EB;">${value}</td>
        </tr>`
      : "";

  const tagList = (items?: string[]) =>
    items && items.length > 0
      ? `<div style="margin-top:4px;">${items
          .map((i) => `<span style="display:inline-block;background-color:#EEF9F7;color:#1BB79D;border:1px solid #C6EDE7;border-radius:99px;padding:4px 12px;font-size:12px;font-weight:600;margin:2px 4px 2px 0;">${i}</span>`)
          .join("")}</div>`
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
        `<div style="background-color:#FAFAFA;border-left:4px solid #1BB79D;border-radius:0 8px 8px 0;padding:16px 20px;font-size:14px;color:#0B1F5C;line-height:1.6;font-style:normal;font-weight:500;border-top:1px solid #E5E7EB;border-right:1px solid #E5E7EB;border-bottom:1px solid #E5E7EB;">${data.motivation}</div>`
      )
    : "";

  const complementaireSection = data.messageComplementaire
    ? section(
        "Message complémentaire",
        `<div style="background-color:#FAFAFA;border-left:4px solid #1BB79D;border-radius:0 8px 8px 0;padding:16px 20px;font-size:14px;color:#0B1F5C;line-height:1.6;font-style:normal;font-weight:500;border-top:1px solid #E5E7EB;border-right:1px solid #E5E7EB;border-bottom:1px solid #E5E7EB;">${data.messageComplementaire}</div>`
      )
    : "";

  const documentsSection = section(
    "Documents joints",
    `<table style="width:100%;border-collapse:collapse;background-color:#FAFAFA;border-radius:12px;overflow:hidden;border:1px solid #E5E7EB;">
      ${row("CV", cvFilename ? cvFilename : "Non fourni")}
      ${row("Lettre de motivation", lettreFilename ? lettreFilename : "Non fournie")}
    </table>`
  );

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouvelle candidature — STUDASSIST</title>
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
                    <img src="https://www.studassist.ma/logo-white.svg" alt="STUDASSIST" style="height:36px;width:auto;display:block;border:0;outline:none;" height="36" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0;font-size:11px;font-weight:800;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.6);line-height:1;">Nouvelle candidature</p>
                    <p style="margin:6px 0 0;font-size:22px;font-weight:800;color:#FFFFFF;letter-spacing:-0.5px;line-height:1.2;">Talent Acquisition</p>
                  </td>
                </tr>
              </table>
              
              <div style="margin-top:28px;background-color:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:20px;">
                <p style="margin:0;font-size:24px;font-weight:800;color:#FFFFFF;letter-spacing:-0.5px;line-height:1.2;">${fullName || "Candidat"}</p>
                <p style="margin:6px 0 0;font-size:14px;color:#1BB79D;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">${profilLabel}</p>
              </div>
              <p style="margin:16px 0 0;font-size:11px;color:rgba(255,255,255,0.4);line-height:1;">Reçue le ${now}</p>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background-color:#FFFFFF;padding:40px;">

              <!-- Alert Banner -->
              <div style="background-color:#FFF1F2;border-left:4px solid #F43F5E;border-radius:4px;padding:16px;margin-bottom:28px;">
                <p style="margin:0;font-size:13px;font-weight:600;color:#9F1239;line-height:1.5;">Nouvelle candidature reçue. Veuillez examiner ce profil et ses documents avec attention.</p>
              </div>

              ${tableSection("Informations du candidat", contactRows)}
              
              ${data.profil === "professeur" && (data.matieres?.length || data.systemes?.length || data.niveaux?.length)
                ? section("Profil enseignant",
                    (data.matieres?.length ? `<p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.1em;">Matières</p>${tagList(data.matieres)}` : "") +
                    (data.systemes?.length ? `<p style="margin:16px 0 6px;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.1em;">Systèmes scolaires</p>${tagList(data.systemes)}` : "") +
                    (data.niveaux?.length ? `<p style="margin:16px 0 6px;font-size:11px;font-weight:700;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.1em;">Niveaux</p>${tagList(data.niveaux)}` : "")
                  )
                : ""}
                
              ${tableSection("Détails du profil", profileRows)}
              ${motivationSection}
              ${complementaireSection}
              ${documentsSection}

            </td>
          </tr>

          <!-- CTA / Actions -->
          <tr>
            <td style="background-color:#FAFAFA;border-top:1px solid #E5E7EB;padding:36px 40px;text-align:center;">
              <p style="margin:0 0 20px;font-size:14px;color:#6B7280;font-weight:500;line-height:1.2;">Prendre contact avec le candidat :</p>
              <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
                <tr>
                  <td style="padding:0 8px;">
                    <a href="mailto:${data.email}" style="display:inline-block;background-color:#1BB79D;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:700;padding:14px 28px;border-radius:8px;letter-spacing:0.02em;">
                      Contacter par email
                    </a>
                  </td>
                  <td style="padding:0 8px;">
                    <a href="tel:${data.tel}" style="display:inline-block;background-color:#0B1F5C;color:#FFFFFF;text-decoration:none;font-size:14px;font-weight:700;padding:14px 28px;border-radius:8px;letter-spacing:0.02em;">
                      Appeler le candidat
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background-color:#0B1F5C;padding:28px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:0.1em;line-height:1.5;">STUDASSIST &bull; talentacquisition@studassist.ma &bull; www.studassist.ma</p>
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
export const config = {
  api: {
    bodyParser: false,
  },
};

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
      subject: `Candidature — ${profilLabel} — ${fullName}`,
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
