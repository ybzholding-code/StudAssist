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
          Le soutien scolaire avec <span className="sa-gradient-text">STUDASSIST</span>
        </>
      }
      intro="Chez STUDASSIST, le soutien scolaire s'adresse aussi bien aux élèves rencontrant des difficultés qu'à ceux disposant d'un bon niveau académique et souhaitant viser l'excellence. Notre méthodologie différenciée, déployée en petits groupes de 2 à 4 élèves maximum, permet un accompagnement rigoureux, personnalisé et orienté vers une progression durable et structurée, inscrite dans une logique de long terme."
      heroImage="/soutien-college.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 65%"
      accent="pink"
      highlights={[
        { value: "+12", label: "Années d'expérience" },
        { value: "98%", label: "Satisfaction parents" },
        { value: "2–4", label: "Élèves par groupe" },
      ]}
      modulesTitle="Structurer, consolider et viser l'excellence à chaque étape"
      modulesSubtitle="Des parcours adaptés à chaque profil, à chaque niveau, à chaque ambition."
      modules={[
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/conference-call.png" alt="Primaire" />,
          title: "Primaire (CP – CM2)",
          description: "Poser des bases solides, apprendre avec plaisir et développer le potentiel global grâce à une approche combinant renforcement académique et brain training.",
          points: ["Lecture, écriture, calcul", "Brain Training & ateliers Montessori", "Pédagogie ludique et structurée"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/open-book.png" alt="Collège" />,
          title: "Collège (6e – 3e)",
          description: "Consolider les acquis, structurer la méthode et préparer l'entrée au lycée avec une approche globale bien au-delà de l'aide aux devoirs.",
          points: ["Toutes matières, tous systèmes", "Méthodologie différenciée", "Préparation progressive au Brevet"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/trophy.png" alt="Lycée" />,
          title: "Lycée (2nde – Terminale)",
          description: "Optimiser les performances, viser l'excellence et sécuriser l'orientation post-bac avec un accompagnement stratégique.",
          points: ["Tronc commun & spécialités", "Prépa Bac & Grand Oral", "Cohérence dossier Parcoursup"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/goal.png" alt="Supérieur" />,
          title: "Supérieur (1re année post-bac)",
          description: "Réussir sa première année post-bac avec un accompagnement 100 % individuel en visioconférence, adapté aux exigences du supérieur.",
          points: ["Cours individuels en visio", "Méthodologie universitaire", "Orientation & réorientation"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/calendar.png" alt="Stages" />,
          title: "Stages de vacances",
          description: "Consolider les acquis, combler les lacunes et préparer la rentrée avec une longueur d'avance grâce à des modules intensifs de 10h sur 5 jours.",
          points: ["10h sur 5 jours par matière", "Groupes de 2 à 4 élèves", "Diagnostic et bilan personnalisé"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/medal.png" alt="Brevet" />,
          title: "Prépa Brevet",
          description: "Aborder la première échéance officielle avec méthode et sérénité, encadré par des professeurs expérimentés, pour la plupart anciens correcteurs.",
          points: ["Révisions structurées & annales", "Groupes jusqu'à 8 élèves", "Préparation écrit + oral"],
        },
      ]}
      whyPoints={[
        { title: "Diagnostic initial approfondi", body: "Chaque accompagnement débute par une évaluation complète du niveau, des méthodes de travail et des objectifs, en tenant compte du système scolaire suivi." },
        { title: "Enseignants expérimentés et multi-systèmes", body: "Des professeurs certifiés, maîtrisant les programmes français, marocains, bilingues et internationaux." },
        { title: "Méthodologie différenciée", body: "Petits groupes de 2 à 4, pédagogie adaptée au profil de chaque élève, émulation et suivi individualisé." },
        { title: "Suivi rigoureux et transparent", body: "Rapports pédagogiques réguliers, ajustement des objectifs et échanges constants avec les familles." },
      ]}
      ctaLabel="Réserver un cours découverte"
      ctaHref="https://wa.me/212669495996"
      faqTitle="Soutien scolaire : vos questions"
      faqItems={buildFaq("soutien", "method")}
    />
  );
}
