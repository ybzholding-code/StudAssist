import ServicePage from "../components/ServicePage";
import { buildFaq } from "../data/faq";

const Icon3D = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-9 h-9 drop-shadow-sm" />
);

export default function OrientationScolaire() {
  return (
    <ServicePage
      eyebrow="Orientation scolaire"
      title={
        <>
          Orientation scolaire &amp; <span className="sa-gradient-text">candidatures</span>
        </>
      }
      intro="Chez STUDASSIST, nous accompagnons élèves et étudiants du lycée au Master pour des choix éclairés et stratégiques. Analyse de profil, vision long terme et accompagnement personnalisé : nous transformons l'orientation en levier de réussite."
      heroImage="/hero-orientation-general.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center"
      accent="pink"
      highlights={[
        { value: "+500", label: "Élèves orientés / an" },
        { value: "97%", label: "Familles satisfaites" },
        { value: "+25", label: "Destinations" },
      ]}
      modules={[
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/compass.png" alt="Profiling" />,
          title: "Profiling personnalisé",
          description: "Un diagnostic complet du profil, des aspirations et des contraintes de l'élève et de sa famille.",
          points: ["Bilan de compétences", "Test d'orientation", "Entretien approfondi"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/goal.png" alt="Stratégie" />,
          title: "Stratégie sur mesure",
          description: "Choix des spécialités, cap sur les filières, short-list d'écoles — chaque décision est argumentée.",
          points: ["Choix des spécialités", "Short-list d'écoles", "Plan d'action long terme"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/document.png" alt="Candidatures" />,
          title: "Candidatures optimisées",
          description: "Dossiers Parcoursup, lettres de motivation, CV, projet professionnel — tout est travaillé avec nous.",
          points: ["Dossier Parcoursup", "Lettres de motivation", "Projet professionnel"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/microphone.png" alt="Oraux" />,
          title: "Préparation aux oraux",
          description: "Coaching individuel pour les entretiens de motivation, oraux de concours et Grand Oral du Bac.",
          points: ["Simulations filmées", "Coaching posture & voix", "Argumentation structurée"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/globe.png" alt="International" />,
          title: "Études à l'international",
          description: "Accompagnement complet pour les candidatures aux universités et grandes écoles à l'étranger.",
          points: ["+25 destinations", "Dossiers internationaux", "Certifications de langues"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/home.png" alt="Installation" />,
          title: "Installation facilitée",
          description: "Visas, logement, compte bancaire et assurance : nous gérons toutes les démarches administratives.",
          points: ["Dossier Visa", "Logement étudiant", "Démarches admin"],
        },
      ]}
      whyPoints={[
        { title: "Méthode éprouvée", body: "Une approche structurée, des conseillers formés en interne et une vision long terme qui place l'élève au centre du parcours." },
        { title: "Conseillers experts", body: "Des professionnels de l'orientation qui connaissent les filières, les écoles et les critères de sélection." },
        { title: "Suivi continu", body: "Un accompagnement sur la durée, avec des points réguliers et une adaptation permanente de la stratégie." },
        { title: "Réseau & insight", body: "L'accès à des alumni et retours terrain d'étudiants déjà admis dans les meilleures écoles." },
      ]}
      modulesTitle="Un accompagnement complet de l'orientation aux candidatures"
      ctaLabel="Réserver ma séance découverte"
      faqTitle="Orientation scolaire : vos questions"
      faqItems={buildFaq("orientation", "method")}
    />
  );
}
