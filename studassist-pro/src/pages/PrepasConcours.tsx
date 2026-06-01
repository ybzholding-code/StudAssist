import ServicePage from "../components/ServicePage";
import { buildFaq } from "../data/faq";

const Icon3D = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-9 h-9 drop-shadow-sm" />
);

export default function PrepasConcours() {
  return (
    <ServicePage
      eyebrow="Prépas concours"
      title={
        <>
          Intégrer les formations les plus <span className="sa-gradient-text">sélectives</span>
        </>
      }
      intro="Les concours d'accès aux grandes écoles et universités exigent bien plus que des connaissances académiques. Ils requièrent méthode, rigueur et capacité à performer dans un environnement compétitif. Chez STUDASSIST, nous accompagnons nos élèves dans des préparations complètes, alliant maîtrise des épreuves, stratégies de performances et développement d'un véritable esprit concours."
      heroImage="/hero-concours-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      accent="pink"
      highlights={[
        { value: "+6 ans", label: "D'expérience" },
        { value: "100%", label: "Admis top 3 choix" },
        { value: "8 max", label: "Élèves par groupe" },
      ]}
      modulesTitle="Commerce | Ingénieur | Médecine | Architecture | International"
      modulesSubtitle="Des préparations stratégiques et exigeantes pour chaque concours."
      modules={[
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/briefcase.png" alt="SESAME ACCÈS" />,
          title: "Commerce SESAME & ACCÈS",
          description: "Intégrer les meilleures écoles de commerce post-bac en France : ESSEC BBA, EM Lyon, IESEG, ESSCA, KEDGE, SKEMA, NEOMA.",
          points: ["Raisonnement logique & synthèse", "Anglais & méthodologie", "Concours blancs en conditions réelles"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/bar-chart.png" alt="ENCG ISCAE" />,
          title: "Commerce ENCG & ISCAE",
          description: "Intégrer les meilleures écoles de commerce publiques au Maroc grâce à une préparation intensive et stratégique.",
          points: ["Raisonnement logique & mathématique", "Culture générale & langues", "Groupes de 10 max"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/rocket.png" alt="Ingénieurs France" />,
          title: "Ingé Avenir – Geipi – Puissance Alpha",
          description: "Réussir les concours d'ingénieurs post-bac en France : EPITA, ESILV, ECE, réseau Polytech, CY Tech.",
          points: ["Maths & Physique-Chimie", "QCM et résolution rapide", "Esprit concours"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/university.png" alt="UM6P" />,
          title: "Ingé UM6P",
          description: "Réussir la sélection et intégrer les programmes d'ingénierie d'excellence de l'UM6P.",
          points: ["Raisonnement logique & psychotechnique", "Entretien de personnalité", "Structuration du profil"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/goal.png" alt="SAT GMAT" />,
          title: "SAT & GMAT",
          description: "Atteindre les scores requis pour les meilleures universités internationales et programmes MBA.",
          points: ["Math, Verbal, Logique", "Format individuel sur mesure", "Stratégie d'optimisation du score"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/stethoscope.png" alt="Médecine" />,
          title: "Médecine Maroc & Belgique",
          description: "Préparation aux concours et examens d'entrée des facultés de médecine au Maroc et en Belgique.",
          points: ["Sciences fondamentales", "Concours blancs chronométrés", "Préparation dès la 1ère"],
        },
      ]}
      whyPoints={[
        { title: "Esprit concours", body: "Nous développons la capacité à performer dans un environnement compétitif : gestion du temps, du stress et stratégies de réponse." },
        { title: "Enseignants spécialisés concours", body: "Des intervenants maîtrisant parfaitement les exigences de chaque concours et les critères d'évaluation." },
        { title: "100% admis dans le top 3", body: "Depuis plus de 6 ans, chaque année, 100% de nos élèves sont admis dans le top 3 de leurs choix." },
        { title: "Accompagnement dans la durée", body: "La préparation ne s'arrête pas : contenus complémentaires, entraînement libre dans nos espaces et suivi jusqu'aux échéances." },
      ]}
      ctaLabel="Réserver un cours découverte"
      ctaHref="https://wa.me/212669495996"
      faqTitle="Prépas Concours : vos questions"
      faqItems={buildFaq("concours", "orientation")}
    />
  );
}
