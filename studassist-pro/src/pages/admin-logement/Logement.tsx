import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "demarches", label: "Démarches administratives", href: "/admin-logement/demarches" },
  { key: "logement", label: "Logement étudiant", href: "/admin-logement/logement" },
];

export default function AdminLogementPage() {
  return (
    <OrientationLevelPage
      eyebrow="Admin & Logement · Logement"
      accent="blue"
      title={<><span className="text-brand-teal">Logement étudiant</span> à l'international</>}
      subtitle="Trouver un logement adapté pour bien démarrer son parcours"
      intro={[
        "La recherche de logement constitue une étape clé dans un projet d'études, notamment à l'étranger. Elle implique de nombreux critères — budget, localisation, type de logement — et peut rapidement devenir complexe pour les élèves et leurs familles.",
        "Chez STUDASSIST, nous proposons un accompagnement structuré permettant de trouver un logement adapté, sécurisé et en cohérence avec le projet de l'élève.",
      ]}
      heroImage="/hero-admin-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre rendez-vous"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Logement étudiant"
      enjeuxEyebrow="Un accompagnement dès la définition du besoin"
      whyChooseEyebrow="+7 ans d'expérience — Réseau d'agences partenaires"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Un accompagnement dès la définition du besoin",
        lead: "Chaque recherche débute par un rendez-vous préalable pour définir précisément les critères :",
        bullets: [
          "Budget et contraintes financières",
          "Localisation et proximité avec l'établissement",
          "Type de logement : studio, appartement, résidence étudiante",
          "Préférences de l'élève et de sa famille",
          "Cadrage permettant une recherche pertinente et efficace",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/bank-card-back-side.png",
          "https://img.icons8.com/3d-fluency/94/marker.png",
          "https://img.icons8.com/3d-fluency/94/home.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
        ],
      }}

      sections={[
        {
          title: "Une recherche ciblée et encadrée",
          paragraphs: [
            "Une fois les critères validés, notre équipe se charge de la recherche de manière active. Nous mobilisons à la fois notre réseau d'agences partenaires et des recherches directes, afin d'identifier des opportunités correspondant aux attentes définies.",
            "L'objectif est de proposer des biens adaptés, fiables et disponibles dans les délais.",
          ],
        },
        {
          title: "Constitution d'un dossier locataire solide",
          paragraphs: [
            "Nous accompagnons l'élève et sa famille dans la constitution d'un dossier locataire complet et structuré. Cela inclut la préparation des documents, des justificatifs de moyens, des garanties et de l'ensemble des éléments nécessaires pour rassurer les propriétaires.",
            "Un dossier solide permet de mettre en confiance les bailleurs et d'augmenter significativement les chances que la candidature de l'élève soit retenue.",
          ],
        },
        {
          title: "Organisation des visites et sélection du logement",
          paragraphs: [
            "Selon la situation de l'élève, nous adaptons notre accompagnement. Lorsque l'élève est déjà sur place, nous organisons des visites physiques. Dans le cas contraire, nous transmettons des photos et vidéos détaillées, permettant de faciliter la prise de décision à distance.",
            "Nous accompagnons les familles dans l'analyse des biens proposés afin de sécuriser leur choix.",
          ],
        },
        {
          title: "Un accompagnement jusqu'à la signature",
          paragraphs: [
            "Notre intervention se poursuit jusqu'à la finalisation du projet. Nous accompagnons l'élève et sa famille dans les différentes étapes, jusqu'à la signature du contrat de bail, en veillant à la compréhension des engagements et des conditions.",
          ],
        },
        {
          title: "Un facteur clé de réussite",
          paragraphs: [
            "Un logement adapté permet à l'élève de démarrer son parcours dans de bonnes conditions. Il contribue à son intégration, à sa sérénité et à sa capacité à se concentrer pleinement sur ses études.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cet accompagnement ?",
        groups: [{
          title: "Élèves et familles",
          bullets: [
            "ayant obtenu une admission et devant trouver un logement à l'étranger,",
            "souhaitant un accompagnement structuré et personnalisé,",
            "recherchant un interlocuteur fiable pour la recherche et le dossier,",
            "voulant sécuriser leur choix avec un accompagnement jusqu'à la signature.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Une approche globale et structurée de la recherche",
          "Un réseau d'agences partenaires dans les principales destinations",
          "Un accompagnement personnalisé adapté aux contraintes de chaque projet",
          "Constitution d'un dossier locataire solide et convaincant",
          "Accompagnement jusqu'à la signature du bail",
          "Permettre à chaque élève de s'installer en toute sérénité",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/key.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez être accompagné dans la recherche de logement étudiant ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Nous contacter",
        secondaryHref: "/contact",
      }}

      faqKeys={["international", "orientation"]}
      prev={{ label: "Démarches administratives", to: "/admin-logement/demarches" }}
    />
  );
}
