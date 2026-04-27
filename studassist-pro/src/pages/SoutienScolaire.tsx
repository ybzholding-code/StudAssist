import { BookOpen, Pencil, Target, Users, Calendar, Trophy } from "@/src/components/ui/icons";
import ServicePage from "../components/ServicePage";
import { buildFaq } from "../data/faq";

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
      heroImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
      accent="pink"
      highlights={[
        { value: "+12", label: "Années d'expérience" },
        { value: "98%", label: "Satisfaction parents" },
        { value: "2–4", label: "Élèves par groupe" },
      ]}
      modules={[
        {
          icon: <Users size={22} />,
          title: "Primaire (CP – CM2)",
          description: "Construire des bases solides et développer le plaisir d'apprendre, dans une approche ludique, bienveillante et structurée.",
          points: ["Lecture, écriture, calcul", "Méthodologie et autonomie", "Brain Training & ateliers d'échecs"],
        },
        {
          icon: <BookOpen size={22} />,
          title: "Collège (6e – 3e)",
          description: "Installer de bonnes méthodes de travail, consolider les fondamentaux et sécuriser la réussite au Brevet.",
          points: ["Toutes matières", "Prépa Brevet", "Suivi personnalisé"],
        },
        {
          icon: <Trophy size={22} />,
          title: "Lycée (2nde – Terminale)",
          description: "Maîtriser les programmes denses du lycée, préparer les épreuves anticipées et optimiser son dossier Parcoursup.",
          points: ["Spécialités scientifiques & littéraires", "Prépa Bac", "Grand Oral"],
        },
        {
          icon: <Target size={22} />,
          title: "Supérieur",
          description: "Un soutien ciblé pour les étudiants en prépa, licence ou école, avec des enseignants spécialisés par filière.",
          points: ["Maths, Physique, Économie", "Méthodologie universitaire", "Préparation aux partiels"],
        },
        {
          icon: <Calendar size={22} />,
          title: "Stages de vacances",
          description: "Des stages intensifs pour combler les lacunes, anticiper le trimestre à venir ou préparer une échéance.",
          points: ["Toussaint, Noël, Printemps, Été", "Petits groupes", "Bilan personnalisé"],
        },
        {
          icon: <Pencil size={22} />,
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
