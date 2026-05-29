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
          Attester de son niveau pour intégrer les <span className="sa-gradient-text">meilleures formations</span>
        </>
      }
      intro="Les certifications de langues constituent une étape clé dans les candidatures académiques. Elles permettent de valider un niveau linguistique et de répondre aux exigences des établissements en France et à l'international. Chez STUDASSIST, nous préparons les élèves aux différentes certifications grâce à une approche structurée, ciblée et adaptée à leurs objectifs."
      heroImage="/hero-certif-new.png"
      accent="gold"
      highlights={[
        { value: "+6 ans", label: "D'expérience" },
        { value: "100%", label: "Admis top 3 choix" },
        { value: "8 max", label: "Élèves par groupe" },
      ]}
      modulesTitle="Anglais | Français | Espagnol"
      modulesSubtitle="Des préparations ciblées pour chaque certification linguistique."
      modules={[
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/globe.png" alt="IELTS TOEFL" />,
          title: "Prépa IELTS & TOEFL",
          description: "Atteindre le score requis et valider son niveau pour les études à l'international.",
          points: ["Listening, Reading, Writing, Speaking", "Méthodologie orientée score", "Simulations en conditions réelles"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/open-book.png" alt="TCF DALF" />,
          title: "Prépa TCF & DALF",
          description: "Attester de son niveau de français pour étudier, s'installer ou évoluer en France.",
          points: ["Expression orale et écrite", "Compréhension académique", "Préparation Campus France"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/language.png" alt="DELE" />,
          title: "Prépa DELE",
          description: "Valider son niveau d'espagnol pour étudier et évoluer à l'international.",
          points: ["Certification officielle Cervantes", "Tous niveaux B1 à C1", "Préparation structurée"],
        },
      ]}
      whyPoints={[
        { title: "Diagnostic de niveau précis", body: "Un test initial pour identifier les compétences et définir un plan de progression adapté." },
        { title: "Méthodologie orientée score", body: "Maîtrise des formats, stratégies de réponse et simulations en conditions réelles." },
        { title: "Enseignants spécialisés", body: "Des intervenants maîtrisant parfaitement les exigences de chaque certification." },
        { title: "Accompagnement dans la durée", body: "Suivi continu, contenus complémentaires et accompagnement jusqu'au passage du test." },
      ]}
      ctaLabel="Réserver un cours découverte"
      ctaHref="https://wa.me/212669495996"
      faqTitle="Certifications & langues : vos questions"
      faqItems={buildFaq("concours", "international")}
    />
  );
}
