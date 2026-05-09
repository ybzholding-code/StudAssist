import ServicePage from "../components/ServicePage";
import { buildFaq } from "../data/faq";

const Icon3D = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-9 h-9 drop-shadow-sm" />
);

export default function PrepasBac() {
  return (
    <ServicePage
      eyebrow="Prépas Bac"
      title={
        <>
          Réussir le <span className="sa-gradient-text">Baccalauréat</span><br />
          avec méthode et ambition.
        </>
      }
      intro="Spécialités, Bac de français, Philosophie, Grand Oral : nous structurons la préparation de chaque élève pour maximiser la note finale et sécuriser l'orientation post-bac."
      heroImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=900&q=80"
      accent="blue"
      highlights={[
        { value: "17.2", label: "Moyenne obtenue" },
        { value: "94%", label: "Mention Bien / TB" },
        { value: "100%", label: "Suivi personnalisé" },
      ]}
      modules={[
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/open-book.png" alt="Français" />,
          title: "Bac de Français",
          description: "Maîtriser la dissertation, le commentaire et l'oral. Travail intensif sur les œuvres du programme.",
          points: ["Méthodologie écrit & oral", "Œuvres intégrales", "Oraux blancs réguliers"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/test-tube.png" alt="Sciences" />,
          title: "Spécialités scientifiques",
          description: "Maths, Physique-Chimie, SVT, NSI, SI : exigence de contenu et méthode face aux épreuves.",
          points: ["Fiches méthode", "Annales corrigées", "DS et colles"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/document.png" alt="Littéraires" />,
          title: "Spécialités littéraires & éco",
          description: "HGGSP, HLP, SES, LLCE : argumentation, dissertation et culture générale haut niveau.",
          points: ["Construction d'argument", "Culture de référence", "Rédaction académique"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/brain.png" alt="Philosophie" />,
          title: "Bac de Philosophie",
          description: "Développer la pensée critique et la technique dissertative pour viser la mention.",
          points: ["Fiches notions", "Dissertations corrigées", "Explications de texte"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/microphone.png" alt="Grand Oral" />,
          title: "Grand Oral",
          description: "Structurer son sujet, maîtriser sa posture et convaincre le jury avec assurance.",
          points: ["Construction du grand oral", "Coaching posture & voix", "Simulations filmées"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/trophy.png" alt="Stages" />,
          title: "Stages intensifs Bac",
          description: "Des stages de révisions avant chaque échéance pour consolider et rassurer.",
          points: ["Vacances scolaires", "Simulations d'examen", "Bilan individuel"],
        },
      ]}
      whyPoints={[
        { title: "Professeurs-examinateurs", body: "Nos intervenants connaissent parfaitement les exigences du Bac nouvelle formule et les critères d'évaluation." },
        { title: "Simulations sous conditions réelles", body: "Bac blancs écrits et oraux pour réduire le stress et optimiser la performance le jour J." },
        { title: "Corrections détaillées", body: "Chaque copie est annotée avec des pistes concrètes de progression." },
        { title: "Stratégie de notes", body: "Nous aidons à prioriser les efforts matière par matière pour maximiser le coefficient total." },
      ]}
      modulesTitle="Une préparation complète pour chaque épreuve"
      faqTitle="Prépas Bac : vos questions"
      faqItems={buildFaq("soutien", "method")}
    />
  );
}
