import ServicePage from "../components/ServicePage";
import { buildFaq } from "../data/faq";

const Icon3D = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-9 h-9 drop-shadow-sm" />
);

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
      heroImage="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=900&q=80"
      accent="blue"
      highlights={[
        { value: "20+", label: "Destinations" },
        { value: "3–7j", label: "Délai logement" },
        { value: "100%", label: "Étudiants placés" },
      ]}
      modules={[
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/passport.png" alt="Visa" />,
          title: "Dossier Visa & Études",
          description: "Constitution et suivi du dossier étudiant : Campus France, VISA D, attestations, prise de RDV consulat.",
          points: ["Conseil sur les pièces", "Relecture du dossier", "Préparation à l'entretien"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/home.png" alt="Logement" />,
          title: "Logement étudiant",
          description: "Recherche de logement ciblée selon le budget, la ville et la durée — résidence, colocation, studio.",
          points: ["Sélection de biens", "Dossier locataire", "Signature du bail"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/bank-card-back-side.png" alt="Banque" />,
          title: "Compte bancaire & RIB",
          description: "Ouverture à distance ou sur place d'un compte bancaire étudiant adapté.",
          points: ["Partenaires bancaires", "Dossier facilité", "Carte internationale"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/shield.png" alt="Assurance" />,
          title: "Assurance & Sécurité sociale",
          description: "Mutuelle étudiante, assurance habitation, responsabilité civile : toutes les couvertures nécessaires.",
          points: ["Comparatif assurances", "Inscription SS étudiante", "Attestations officielles"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/document.png" alt="Admin" />,
          title: "Démarches administratives",
          description: "OFII, préfecture, CAF, CROUS : nous vous guidons pour ne rien rater des échéances.",
          points: ["Checklist personnalisée", "Rappels automatiques", "Support à distance"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/key.png" alt="Accueil" />,
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
