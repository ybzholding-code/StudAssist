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
          Les prépas-bac avec <span className="sa-gradient-text">STUDASSIST</span>
        </>
      }
      intro="Chez STUDASSIST, nous accompagnons les élèves dans une préparation rigoureuse et personnalisée du Baccalauréat, en combinant maîtrise des méthodes, entraînement ciblé et suivi individualisé. Notre objectif : transformer chaque épreuve en levier de réussite et d'admission dans les formations post-bac les plus exigeantes."
      heroImage="/hero-bac-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      accent="blue"
      highlights={[
        { value: "17.2", label: "Moyenne obtenue" },
        { value: "94%", label: "Mention Bien / TB" },
        { value: "2–4", label: "Élèves par groupe" },
      ]}
      modulesTitle="Maîtriser les épreuves, optimiser ses résultats et sécuriser son orientation"
      modulesSubtitle="Des préparations ciblées pour chaque épreuve du Baccalauréat."
      modules={[
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/open-book.png" alt="Français" />,
          title: "Bac de Français",
          description: "Une épreuve clé dans le parcours académique et l'orientation. Maîtrise de la dissertation, du commentaire et de l'oral.",
          points: ["Méthodologie écrit & oral", "Œuvres intégrales au programme", "Simulations régulières"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/test-tube.png" alt="Spécialités" />,
          title: "Épreuves de Spécialités",
          description: "Coefficient 16 au total — le principal levier de performance au Bac et un rôle déterminant dans les candidatures post-bac.",
          points: ["Toutes spécialités générales & STMG", "Annales et simulations", "Contrôle continu inclus"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/brain.png" alt="Philosophie" />,
          title: "Bac de Philosophie",
          description: "Structurer sa pensée, maîtriser la méthode et développer une argumentation solide pour viser la mention.",
          points: ["Dissertation & explication de texte", "Références philosophiques", "Entraînement progressif"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/microphone.png" alt="Grand Oral" />,
          title: "Grand Oral",
          description: "Structurer son discours, gagner en assurance et se démarquer face au jury. Une épreuve au cœur de l'orientation.",
          points: ["Construction de la question", "Coaching posture & expression", "Simulations individuelles"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/conference-call.png" alt="Enseignants" />,
          title: "Enseignants experts",
          description: "Des professeurs spécialisés par matière, certains anciens correcteurs du Bac, maîtrisant les attendus et les critères d'évaluation.",
          points: ["Connaissance précise des attendus", "Corrections détaillées", "Retours personnalisés"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/trophy.png" alt="Résultats" />,
          title: "Stratégie orientée résultats",
          description: "Une approche stratégique alignée avec l'orientation post-bac pour optimiser chaque coefficient et sécuriser l'admission.",
          points: ["Priorisation par coefficient", "Suivi de progression", "Cohérence avec Parcoursup"],
        },
      ]}
      whyPoints={[
        { title: "Professeurs-examinateurs", body: "Nos intervenants connaissent parfaitement les exigences du Bac nouvelle formule et les critères d'évaluation." },
        { title: "Simulations en conditions réelles", body: "Bacs blancs écrits et oraux pour réduire le stress et optimiser la performance le jour J." },
        { title: "Corrections détaillées et personnalisées", body: "Chaque copie est annotée avec des pistes concrètes de progression et des axes d'amélioration." },
        { title: "Approche stratégique et orientation", body: "Nous alignons la préparation avec le projet d'orientation post-bac pour maximiser les opportunités d'admission." },
      ]}
      ctaLabel="Réserver un cours découverte"
      ctaHref="https://wa.me/212669495996"
      faqTitle="Prépas Bac : vos questions"
      faqItems={buildFaq("soutien", "method")}
    />
  );
}
