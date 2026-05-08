import ServicePage from "../components/ServicePage";
import { buildFaq } from "../data/faq";

const Icon3D = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-9 h-9 drop-shadow-sm" />
);

export default function Certifications() {
  return (
    <ServicePage
      eyebrow="Certifications de langues"
      title={
        <>
          Atteindre son <span className="sa-gradient-text">objectif de score</span><br />
          en anglais, français ou espagnol.
        </>
      }
      intro="IELTS, TOEFL, SAT, TCF, DALF, DELE, Goethe : un coaching linguistique précis, conçu pour franchir les paliers requis par les universités et employeurs à l'international."
      heroImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80"
      accent="gold"
      highlights={[
        { value: "+1.5", label: "Score IELTS moyen" },
        { value: "98%", label: "Objectifs atteints" },
        { value: "6", label: "Certifications proposées" },
      ]}
      modules={[
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/globe.png" alt="IELTS" />,
          title: "IELTS & TOEFL",
          description: "Préparation aux tests d'anglais académique — les plus exigés pour étudier au Royaume-Uni, aux USA ou au Canada.",
          points: ["Listening, Reading, Writing, Speaking", "Tests blancs réguliers", "Objectif B2 / C1 / C2"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/medal.png" alt="SAT" />,
          title: "SAT",
          description: "Préparation complète au Scholastic Assessment Test pour les universités américaines et internationales.",
          points: ["Math & Evidence-Based Reading/Writing", "Stratégie de temps", "Simulations officielles"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/open-book.png" alt="TCF" />,
          title: "TCF & DALF",
          description: "Certifications officielles de français — requises pour les études et démarches administratives francophones.",
          points: ["Expression orale et écrite", "Compréhension", "Entraînement intensif"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/language.png" alt="DELE" />,
          title: "DELE (Espagnol)",
          description: "Diplômes officiels d'espagnol du ministère espagnol de l'Éducation, du niveau A1 au C2.",
          points: ["Grammaire et vocabulaire", "Entraînement à l'oral", "Rédaction et compréhension"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/chat.png" alt="Goethe" />,
          title: "Goethe (Allemand)",
          description: "Certifications de l'institut Goethe pour attester d'un niveau reconnu en allemand.",
          points: ["Tous niveaux A1 à C2", "Préparation ciblée", "Tests blancs"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/star.png" alt="TOEIC" />,
          title: "TOEIC",
          description: "Test professionnel d'anglais reconnu par les entreprises et grandes écoles de commerce.",
          points: ["Listening & Reading", "Business English", "Entraînement chronométré"],
        },
      ]}
      whyPoints={[
        { title: "Diagnostic de niveau précis", body: "Un test initial pour identifier les points forts et les compétences à renforcer." },
        { title: "Plan de préparation mesurable", body: "Objectif de score, jalons hebdomadaires et simulations régulières pour suivre la progression." },
        { title: "Enseignants natifs & certifiés", body: "Des intervenants expérimentés dans la préparation des certifications internationales." },
        { title: "Flexibilité présentiel / visio", body: "En centre à Casablanca ou à distance, au même niveau d'exigence." },
      ]}
      modulesTitle="Nos préparations aux certifications de langues"
      faqTitle="Certifications & langues : vos questions"
      faqItems={buildFaq("concours", "international")}
    />
  );
}
