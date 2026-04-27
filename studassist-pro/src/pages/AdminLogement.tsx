import { FileText, Home, Plane, CreditCard, Shield, Key } from "@/src/components/ui/icons";
import ServicePage from "../components/ServicePage";
import { buildFaq } from "../data/faq";

export default function AdminLogement() {
  return (
    <ServicePage
      eyebrow="Admin & Logement"
      title={
        <>
          Votre installation à l'étranger,<br />
          <span className="sa-gradient-text">en toute sérénité.</span>
        </>
      }
      intro="Visa, compte bancaire, assurance, logement étudiant, démarches administratives : notre équipe pluridisciplinaire gère les contraintes d'installation pour que l'étudiant se concentre uniquement sur ses études."
      heroImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80"
      accent="blue"
      highlights={[
        { value: "20+", label: "Destinations" },
        { value: "3–7j", label: "Délai logement" },
        { value: "100%", label: "Étudiants placés" },
      ]}
      modules={[
        {
          icon: <Plane size={22} />,
          title: "Dossier Visa & Études",
          description: "Constitution et suivi du dossier étudiant : Campus France, VISA D, attestations, prise de RDV consulat.",
          points: ["Conseil sur les pièces", "Relecture du dossier", "Préparation à l'entretien"],
        },
        {
          icon: <Home size={22} />,
          title: "Logement étudiant",
          description: "Recherche de logement ciblée selon le budget, la ville et la durée — résidence, colocation, studio.",
          points: ["Sélection de biens", "Dossier locataire", "Signature du bail"],
        },
        {
          icon: <CreditCard size={22} />,
          title: "Compte bancaire & RIB",
          description: "Ouverture à distance ou sur place d'un compte bancaire étudiant adapté.",
          points: ["Partenaires bancaires", "Dossier facilité", "Carte internationale"],
        },
        {
          icon: <Shield size={22} />,
          title: "Assurance & Sécurité sociale",
          description: "Mutuelle étudiante, assurance habitation, responsabilité civile : toutes les couvertures nécessaires.",
          points: ["Comparatif assurances", "Inscription SS étudiante", "Attestations officielles"],
        },
        {
          icon: <FileText size={22} />,
          title: "Démarches administratives",
          description: "OFII, préfecture, CAF, CROUS : nous vous guidons pour ne rien rater des échéances.",
          points: ["Checklist personnalisée", "Rappels automatiques", "Support à distance"],
        },
        {
          icon: <Key size={22} />,
          title: "Accueil sur place",
          description: "Un référent sur place pour l'arrivée, la remise des clés et les premiers pas dans la ville d'études.",
          points: ["Accueil aéroport", "Orientation quartier", "Support les 2 premiers mois"],
        },
      ]}
      whyPoints={[
        { title: "Un seul interlocuteur", body: "Un conseiller dédié qui pilote l'ensemble des démarches de A à Z." },
        { title: "Délais garantis", body: "Logement, visa, compte : nous nous engageons sur des jalons clairs." },
        { title: "Réseau local", body: "Des partenaires logements, banques et assurances dans chaque destination." },
        { title: "Sérénité famille", body: "Parents et étudiants informés à chaque étape — plus de stress, plus d'urgence." },
      ]}
      modulesTitle="Un accompagnement complet à l'installation"
      faqTitle="Admin & Logement : vos questions"
      faqItems={buildFaq("international", "orientation")}
    />
  );
}
