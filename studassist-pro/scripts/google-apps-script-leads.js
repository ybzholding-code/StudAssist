/**
 * Google Apps Script — Deploy as Web App for STUDASSIST Lead Management
 * 
 * SETUP:
 * 1. Open the Google Sheet: https://docs.google.com/spreadsheets/d/1XhIinHKRP6e4B1Nadr5OrZ-bnzE7atN8HMQJP1HjOmg/edit
 * 2. Go to Extensions > Apps Script
 * 3. Replace the code with this file's contents
 * 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
 * 5. Copy the deployed URL into .env as GOOGLE_APPS_SCRIPT_URL
 * 
 * This script:
 * - Appends form data to the Google Sheet
 * - Sends an email notification to hello@studassist.ma via Gmail
 */

// ─── Configuration ──────────────────────────────────────────────────────
const NOTIFICATION_EMAIL = "hello@studassist.ma";
const SHEET_NAME = "Leads"; // Name of the sheet tab

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
    // Add headers
    sheet.appendRow([
      "Date", "Nom", "Prénom", "Téléphone", "Email",
      "Rôle", "Demande", "Niveau", "Système",
      "Matières", "Prépas", "Certifications", "Disponibilités",
      "Message", "Source"
    ]);
    // Bold headers
    sheet.getRange(1, 1, 1, 15).setFontWeight("bold");
  }
  
  const timestamp = data._timestamp 
    ? new Date(data._timestamp).toLocaleString("fr-FR", { timeZone: "Africa/Casablanca" })
    : new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca" });
  
  const intentLabel = data.intent === "cours" ? "Cours découverte" 
    : data.intent === "orientation" ? "Séance d'orientation"
    : data.intent === "rdv" ? "Rendez-vous d'information"
    : data.intent || "—";
  
  sheet.appendRow([
    timestamp,
    data.nom || "",
    data.prenom || "",
    data.tel || "",
    data.email || "",
    data.role || "",
    intentLabel,
    data.niveau || "",
    data.systeme || "",
    Array.isArray(data.matieres) ? data.matieres.join(", ") : (data.matieres || ""),
    Array.isArray(data.prepas) ? data.prepas.join(", ") : (data.prepas || ""),
    Array.isArray(data.certifications) ? data.certifications.join(", ") : (data.certifications || ""),
    Array.isArray(data.disponibilites) ? data.disponibilites.join(", ") : (data.disponibilites || ""),
    data.message || "",
    data.source || "",
  ]);
}

// ─── Send email notification via Gmail ──────────────────────────────────
function sendNotificationEmail(data) {
  const fullName = ((data.prenom || "") + " " + (data.nom || "")).trim();
  const intentLabel = data.intent === "cours" ? "Cours découverte" 
    : data.intent === "orientation" ? "Séance d'orientation"
    : data.intent === "rdv" ? "Rendez-vous d'information"
    : "Nouvelle demande";
  
  const subject = "🔔 " + intentLabel + " — " + (fullName || "Nouveau contact");
  
  const body = [
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "NOUVEAU LEAD STUDASSIST",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "👤 " + fullName,
    "📞 " + (data.tel || "—"),
    "📧 " + (data.email || "—"),
    "🎓 Rôle: " + (data.role === "parent" ? "Parent" : data.role === "eleve" ? "Élève" : data.role || "—"),
    "",
    "━━ DEMANDE ━━",
    "📋 Type: " + intentLabel,
    "📚 Niveau: " + (data.niveau || "—"),
    "🏫 Système: " + (data.systeme || "—"),
    "",
  ];
  
  if (data.matieres && data.matieres.length) {
    body.push("📖 Matières: " + (Array.isArray(data.matieres) ? data.matieres.join(", ") : data.matieres));
  }
  if (data.prepas && data.prepas.length) {
    body.push("🏆 Prépas: " + (Array.isArray(data.prepas) ? data.prepas.join(", ") : data.prepas));
  }
  if (data.certifications && data.certifications.length) {
    body.push("📜 Certifications: " + (Array.isArray(data.certifications) ? data.certifications.join(", ") : data.certifications));
  }
  if (data.disponibilites && data.disponibilites.length) {
    body.push("🕐 Disponibilités: " + (Array.isArray(data.disponibilites) ? data.disponibilites.join(", ") : data.disponibilites));
  }
  
  if (data.message) {
    body.push("");
    body.push("━━ MESSAGE ━━");
    body.push(data.message);
  }
  
  body.push("");
  body.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  body.push("Source: " + (data.source || "Site web"));
  body.push("Date: " + new Date().toLocaleString("fr-FR", { timeZone: "Africa/Casablanca" }));
  
  GmailApp.sendEmail(NOTIFICATION_EMAIL, subject, body.join("\n"));
}
