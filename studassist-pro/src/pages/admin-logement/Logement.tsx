import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "demarches", label: "Démarches administratives", href: "/admin-logement/demarches" },
  { key: "logement", label: "Logement étudiant", href: "/admin-logement/logement" },
];

export default function AdminLogementPage() {
  return (
    <OrientationLevelPage
      eyebrow="ADMINISTRATIF & LOGEMENT"
      accent="blue"
      title={<>Accompagnement à la recherche de{" "}<span className="text-brand-teal">Logement étudiant</span> à l'international</>}
      subtitle="Trouver un logement adapté pour bien démarrer son parcours"
      intro={[
        "La recherche de logement constitue une étape clé dans un projet d'études, notamment à l'étranger. Elle implique de nombreux critères — budget, localisation, type de logement — et peut rapidement devenir complexe pour les élèves et leurs familles.",
        "Chez STUDASSIST, nous proposons un accompagnement structuré permettant de trouver un logement adapté, sécurisé et en cohérence avec le projet de l'élève. Cet accompagnement s'inscrit dans la continuité du projet d'études construit avec l'élève, depuis l'orientation et l'admission jusqu'à son installation dans le pays de destination.",
      ]}
      heroImage="/hero-admin-logement.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver un rendez-vous pour définir mon besoin"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Accompagnement à la recherche de logement étudiant"
      enjeuxEyebrow="Les enjeux"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Le logement étudiant : une étape clé de l'installation à l'international",
        lead: "Le choix du logement influence directement la qualité de vie, l'intégration et les conditions de réussite de l'étudiant tout au long de son parcours académique. La recherche de logement à l'étranger peut toutefois s'avérer complexe et chronophage. Entre la sélection des biens, la constitution du dossier locataire, les échanges à distance avec les propriétaires et les spécificités du marché local, un accompagnement méthodique permet de sécuriser chaque étape, d'éviter les mauvaises surprises et d'aborder son installation en toute sérénité.",
        bullets: [
          "Définir une stratégie de recherche adaptée : trouver le bon logement implique de concilier proximité du lieu d'études, budget, confort et qualité de vie. Il est également essentiel de définir des critères cohérents avec les réalités du marché immobilier local afin d'orienter efficacement les recherches et maximiser les chances de trouver un logement adapté",
          "Constituer un dossier locataire solide : dans les villes étudiantes les plus demandées, les logements se louent rapidement. Disposer d'un dossier complet, structuré et rassurant permet de réagir rapidement, de mettre en confiance les propriétaires et d'augmenter significativement ses chances d'obtenir le logement souhaité",
          "Sécuriser sa recherche : distance, méconnaissance du marché local et risques d'arnaques rendent indispensable une recherche rigoureuse et encadrée",
          "Créer un environnement favorable à la réussite : un logement adapté contribue à l'autonomie, au bien-être et à la réussite académique de l'étudiant",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/marker.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
          "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
        ],
      }}

      sections={[
        {
          title: "Bien définir ses besoins et construire un dossier locataire solide qui puisse mettre en confiance le bailleur",
          paragraphs: [
            "Un accompagnement dès la définition du besoin — Chaque recherche débute par un rendez-vous préalable, au cours duquel nous définissons précisément les critères du logement. Nous prenons en compte le budget, la localisation, le type de logement (studio, appartement, résidence étudiante) ainsi que les préférences de l'élève et de sa famille. Cette étape permet de cadrer la recherche et de garantir sa pertinence.",
            "Constitution d'un dossier locataire solide — Une fois le cadrage effectué, nous accompagnons l'élève et sa famille dans la constitution d'un dossier locataire complet et structuré. Cela inclut la préparation des documents, des justificatifs de moyens, des garanties et de l'ensemble des éléments nécessaires pour rassurer les propriétaires. Un dossier solide permet de mettre en confiance les bailleurs et d'augmenter significativement les chances que la candidature de l'élève soit retenue.",
            "Cette étape est particulièrement importante pour les étudiants internationaux, qui doivent souvent apporter davantage de garanties afin de rassurer les bailleurs. Nous accompagnons les familles dans la présentation des justificatifs financiers, des garants et de l'ensemble des éléments permettant de renforcer la crédibilité du dossier locataire.",
          ],
        },
        {
          title: "Une recherche ciblée pour un accompagnement efficace dans le choix final du logement",
          paragraphs: [
            "Une recherche ciblée et encadrée — Une fois les critères validés, notre équipe se charge de la recherche de manière active. Nous mobilisons à la fois notre réseau d'agences partenaires et des recherches directes, afin d'identifier des opportunités correspondant aux attentes définies. L'objectif est de proposer des biens adaptés, fiables et disponibles dans les délais.",
            "Organisation des visites et sélection du logement — Selon la situation de l'élève, nous adaptons notre accompagnement. Lorsque l'élève est déjà sur place, nous organisons des visites physiques. Dans le cas contraire, nous transmettons des photos et vidéos détaillées, permettant de faciliter la prise de décision à distance. Nous accompagnons les familles dans l'analyse des biens proposés afin de sécuriser leur choix.",
          ],
        },
        {
          title: "Un accompagnement jusqu'à l'installation de l'étudiant",
          paragraphs: [
            "Un accompagnement jusqu'à la signature — Notre intervention se poursuit jusqu'à la finalisation du projet. Nous accompagnons l'élève et sa famille dans les différentes étapes, jusqu'à la signature du contrat de bail, en veillant à la compréhension des engagements et des conditions.",
            "Un facteur clé de réussite — Un logement adapté permet à l'élève de démarrer son parcours dans de bonnes conditions. Il contribue à son intégration, à sa sérénité et à sa capacité à se concentrer pleinement sur ses études.",
          ],
        },
        {
          title: "À qui s'adresse notre accompagnement à la recherche de logement étudiant ?",
          paragraphs: [
            "Cet accompagnement s'adresse aux élèves, étudiants et familles souhaitant sécuriser la recherche d'un logement dans le cadre d'un projet d'études à l'étranger.",
          ],
          bullets: [
            "Aux étudiants admis dans une université ou une grande école à l'international",
            "Aux familles ne disposant pas de réseau ou de relais sur place",
            "Aux étudiants recherchant un logement adapté à leur budget et à leur mode de vie",
            "Aux candidats souhaitant éviter les erreurs, les mauvaises surprises ou les arnaques",
            "Aux familles recherchant un accompagnement structuré jusqu'à la signature du bail",
            "Aux étudiants souhaitant s'installer dans les meilleures conditions avant leur rentrée universitaire",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST dans la recherche de logement étudiant ?",
        bullets: [
          "Une expertise de plusieurs destinations étudiantes depuis plus de 7 ans",
          "Un réseau de partenaires et de solutions fiables dans les principales destinations",
          "Un accompagnement personnalisé adapté aux contraintes de chaque projet",
          "La constitution d'un dossier locataire solide et convaincant",
          "Un accompagnement de A à Z jusqu'à la signature du bail",
          "Un levier de réussite pour les études à travers une installation réussie",
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
        body: "Vous souhaitez être accompagné dans votre recherche de logement étudiant ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Nous écrire",
        secondaryHref: "/contact",
      }}

      faqKeys={["admin-logement"]}
      faqTitle="FAQ – Démarches administratives et logement étudiant à l'étranger"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur les démarches administratives et le logement étudiant."
      prev={{ label: "Démarches administratives", to: "/admin-logement/demarches" }}
    />
  );
}
