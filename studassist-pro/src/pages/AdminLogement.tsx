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
          Sécuriser chaque étape pour démarrer en toute <span className="sa-gradient-text">sérénité</span>
        </>
      }
      intro="Au-delà de l'admission, un projet d'études implique de nombreuses démarches administratives et logistiques : visa, installation, logement. Chez STUDASSIST, nous accompagnons les élèves et leurs familles à chaque étape, afin de structurer les démarches, éviter les erreurs et faciliter l'installation dans les meilleures conditions."
      heroImage="/hero-admin-logement.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      accent="blue"
      highlights={[
        { value: "+7 ans", label: "D'expérience" },
        { value: "100%", label: "Dossiers sécurisés" },
        { value: "A à Z", label: "Accompagnement complet" },
      ]}
      modulesTitle="Démarches administratives | Logement étudiant"
      modulesSubtitle="Un accompagnement opérationnel pour sécuriser chaque étape de l'installation."
      modules={[
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/passport.png" alt="Démarches" />,
          title: "Démarches administratives",
          description: "Sécuriser chaque étape de l'expatriation étudiante : visa, sécurité sociale, compte bancaire, légalisations.",
          points: ["Cadrage complet des démarches", "Accompagnement opérationnel A à Z", "Suivi jusqu'à l'installation"],
        },
        {
          icon: <Icon3D src="https://img.icons8.com/3d-fluency/94/home.png" alt="Logement" />,
          title: "Logement étudiant",
          description: "Trouver un logement adapté, sécurisé et en cohérence avec le projet de l'élève.",
          points: ["Recherche ciblée et encadrée", "Dossier locataire solide", "Accompagnement jusqu'à la signature"],
        },
      ]}
      whyPoints={[
        { title: "Un accompagnement opérationnel", body: "Nous réalisons concrètement les démarches avec les familles, pas seulement du conseil." },
        { title: "+7 ans d'expérience", body: "Une équipe professionnelle, rigoureuse et à l'écoute, maîtrisant parfaitement les processus." },
        { title: "Sérénité pour les familles", body: "Les élèves et leurs familles se déchargent des contraintes pour se concentrer sur la rentrée." },
        { title: "Réseau et partenaires", body: "Des agences partenaires et contacts locaux pour sécuriser chaque étape efficacement." },
      ]}
      ctaLabel="Prendre rendez-vous"
      ctaHref="https://wa.me/212669495996"
      faqTitle="Admin & Logement : vos questions"
      faqItems={buildFaq("international", "orientation")}
    />
  );
}
