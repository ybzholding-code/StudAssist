import ServicePage from "../components/ServicePage";
import { buildFaq } from "../data/faq";

const Icon3D = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-9 h-9 drop-shadow-sm" />
);

export default function SoutienScolaire() {
  return (
    <ServicePage
      eyebrow="Soutien scolaire"
      title={
        <>
          Un accompagnement <span className="sa-gradient-text">sur mesure</span>,<br />
          du primaire au supérieur.
        </>
      }
      intro="Chez STUDASSIST, chaque élève bénéficie d'un diagnostic initial, d'objectifs clairs et d'un suivi pédagogique régulier, pensés pour consolider les bases, développer la méthode et gagner en autonomie."
      heroImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
      accent="pink"
      highlights={[
        { value: "+12", label: "Années d'expérience" },
        { value: "98%", label: "Satisfaction parents" },
        { value: "2–4", label: "Élèves par groupe" },
      ]}
      modules={[
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/conference-call.png" alt="Primaire" />,
          title: "Primaire (CP – CM2)",
          description: "Construire des bases solides et développer le plaisir d'apprendre, dans une approche ludique, bienveillante et structurée.",
          points: ["Lecture, écriture, calcul", "Méthodologie et autonomie", "Brain Training & ateliers d'échecs"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/open-book.png" alt="Collège" />,
          title: "Collège (6e – 3e)",
          description: "Installer de bonnes méthodes de travail, consolider les fondamentaux et sécuriser la réussite au Brevet.",
          points: ["Toutes matières", "Prépa Brevet", "Suivi personnalisé"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/trophy.png" alt="Lycée" />,
          title: "Lycée (2nde – Terminale)",
          description: "Maîtriser les programmes denses du lycée, préparer les épreuves anticipées et optimiser son dossier Parcoursup.",
          points: ["Spécialités scientifiques & littéraires", "Prépa Bac", "Grand Oral"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/goal.png" alt="Supérieur" />,
          title: "Supérieur",
          description: "Un soutien ciblé pour les étudiants en prépa, licence ou école, avec des enseignants spécialisés par filière.",
          points: ["Maths, Physique, Économie", "Méthodologie universitaire", "Préparation aux partiels"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/calendar.png" alt="Stages" />,
          title: "Stages de vacances",
          description: "Des stages intensifs pour combler les lacunes, anticiper le trimestre à venir ou préparer une échéance.",
          points: ["Toussaint, Noël, Printemps, Été", "Petits groupes", "Bilan personnalisé"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/medal.png" alt="Brevet" />,
          title: "Prépa Brevet",
          description: "Un programme dédié pour aborder le Brevet avec méthode, confiance et ambition.",
          points: ["Révisions structurées", "Épreuves blanches", "Coaching mental"],
        },
      ]}
      whyPoints={[
        { title: "Diagnostic initial approfondi", body: "Chaque accompagnement débute par une évaluation précise du niveau, des besoins et des objectifs de l'élève." },
        { title: "Enseignants spécialisés", body: "Des professeurs expérimentés dans les systèmes français, bilingues et internationaux." },
        { title: "Suivi digital transparent", body: "Des rapports pédagogiques réguliers accessibles aux familles via notre plateforme." },
        { title: "Petits groupes de 2 à 4", body: "Un format qui garantit l'attention individuelle tout en stimulant l'émulation collective." },
      ]}
      faqTitle="Soutien scolaire : vos questions"
      faqItems={buildFaq("soutien", "method")}
    />
  );
}
