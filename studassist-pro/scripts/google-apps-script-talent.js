/**
 * Google Apps Script — Deploy as Web App for STUDASSIST Talent/Candidatures
 * 
 * SETUP:
 * 1. Open the Google Sheet: https://docs.google.com/spreadsheets/d/1lp0iDSSU-l__mygE3XmtKSKPc1pxvnNhmz7yNlh5y4k/edit
 * 2. Go to Extensions > Apps Script
 * 3. Replace the code with this file's contents
 * 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
 * 5. Copy the deployed URL into .env as TALENT_APPS_SCRIPT_URL
 * 
 * This script:
 * - Appends candidature data to the Google Sheet
 * - Sends an email notification to talentacquisition@studassist.ma via Gmail
 */

// ─── Configuration ──────────────────────────────────────────────────────
const NOTIFICATION_EMAIL = "talentacquisition@studassist.ma";
const SHEET_NAME = "Candidatures";

// ─── Web App Entry Point ────────────────────────────────────────────────
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // 1. Append to Google Sheet
    appendToSheet(data);
    
    // 2. Send email notification via Gmail
    sendNotificationEmail(data);
    
    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// ─── Append data to sheet ───────────────────────────────────────────────
function appendToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Date", "Nom", "Prénom", "Téléphone", "Email",
      "Profil", "Matières", "Systèmes", "Niveaux",
      "Expérience", "Domaines", "Fonction/Domaine",
      "Motivation", "Message complémentaire"
    ]);
    sheet.getRange(1, 1, 1, 14).setFontWeight("bold");
  }
  
  const timestamp = data._timestamp 
    ? new Date(data._timestamp).toLocaleString("fr-FR", { timeZone: "Africa/Casablanca" })
    : new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca" });
  
  const profilLabel = data.profil === "professeur" ? "Professeur" 
    : data.profil === "consultant" ? "Consultant en orientation"
    : data.profil === "support" ? "Fonction support"
    : data.profil || "—";
  
  sheet.appendRow([
    timestamp,
    data.nom || "",
    data.prenom || "",
    data.tel || "",
    data.email || "",
    profilLabel,
    Array.isArray(data.matieres) ? data.matieres.join(", ") : (data.matieres || ""),
    Array.isArray(data.systemes) ? data.systemes.join(", ") : (data.systemes || ""),
    Array.isArray(data.niveaux) ? data.niveaux.join(", ") : (data.niveaux || ""),
    data.experience || data.experienceDetail || "",
    data.domaines || "",
    data.fonctionDomaine || "",
    data.motivation || "",
    data.messageComplementaire || "",
  ]);
}

// ─── Send email notification via Gmail ──────────────────────────────────
function sendNotificationEmail(data) {
  const fullName = ((data.prenom || "") + " " + (data.nom || "")).trim();
  const profilLabel = data.profil === "professeur" ? "Professeur" 
    : data.profil === "consultant" ? "Consultant en orientation"
    : data.profil === "support" ? "Fonction support"
    : data.profil || "—";
  
  const subject = "🎯 Nouvelle candidature — " + profilLabel + " — " + (fullName || "Candidat");
  
  const body = [
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "NOUVELLE CANDIDATURE STUDASSIST",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "👤 " + fullName,
    "📞 " + (data.tel || "—"),
    "📧 " + (data.email || "—"),
    "💼 Profil: " + profilLabel,
    "",
  ];
  
  if (data.profil === "professeur") {
    if (data.matieres && data.matieres.length) {
      body.push("📖 Matières: " + (Array.isArray(data.matieres) ? data.matieres.join(", ") : data.matieres));
    }
    if (data.systemes && data.systemes.length) {
      body.push("🏫 Systèmes: " + (Array.isArray(data.systemes) ? data.systemes.join(", ") : data.systemes));
    }
    if (data.niveaux && data.niveaux.length) {
      body.push("🎓 Niveaux: " + (Array.isArray(data.niveaux) ? data.niveaux.join(", ") : data.niveaux));
    }
    if (data.experience) {
      body.push("📋 Expérience: " + data.experience);
    }
  } else if (data.profil === "consultant") {
    if (data.domaines) body.push("🎯 Domaines: " + data.domaines);
    if (data.experienceDetail) body.push("📋 Expérience: " + data.experienceDetail);
  } else if (data.profil === "support") {
    if (data.fonctionDomaine) body.push("🎯 Fonction/Domaine: " + data.fonctionDomaine);
    if (data.experience) body.push("📋 Expérience: " + data.experience);
  }
  
  if (data.motivation) {
    body.push("");
    body.push("━━ MOTIVATION ━━");
    body.push(data.motivation);
  }
  
  if (data.messageComplementaire) {
    body.push("");
    body.push("━━ MESSAGE COMPLÉMENTAIRE ━━");
    body.push(data.messageComplementaire);
  }
  
  body.push("");
  body.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  body.push("Date: " + new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca" }));
  body.push("");
  body.push("⚠️ Note: Les pièces jointes (CV, lettre) sont envoyées par email séparé via Resend.");
  
  GmailApp.sendEmail(NOTIFICATION_EMAIL, subject, body.join("\n"));
}
