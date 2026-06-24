import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "sat-gmat", label: "SAT / GMAT", href: "/prepa-sat-gmat" },
  { key: "sesame-acces", label: "SESAME & ACCÈS", href: "/prepa-concours-sesame-acces" },
  { key: "encg-iscae", label: "ENCG & ISCAE", href: "/prepa-concours-encg-iscae" },
  { key: "avenir-geipi", label: "Ingé France", href: "/prepa-concours-avenir-geipi-puissance-alpha" },
  { key: "um6p", label: "Ingé UM6P", href: "/prepa-concours-um6p" },
  { key: "medecine-maroc", label: "Médecine Maroc", href: "/prepa-medecine-maroc" },
  { key: "medecine-belgique", label: "Médecine Belgique", href: "/prepa-medecine-belgique" },
  { key: "sciences-po", label: "Sciences Po", href: "/prepa-sciences-po" },
  { key: "architecture", label: "Architecture ENA", href: "/prepa-architecture-ena" },
];

export default function PrepaArchitecture() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · Architecture"
      accent="pink"
      title={<>Prépa Concours <span className="text-brand-teal">Architecture ENA</span></>}
      subtitle="Réussir le concours et intégrer les Écoles Nationales d'Architecture au Maroc"
      intro={[
        "Les Écoles Nationales d'Architecture (ENA) forment les futurs architectes appelés à concevoir les espaces, bâtiments et villes de demain, à travers un cursus exigeant, alliant créativité, rigueur et réflexion.",
        "L'accès à ces écoles se fait via un concours sélectif, qui évalue autant les capacités académiques que le potentiel créatif des candidats. Chez STUDASSIST, nous proposons une préparation spécifique, permettant aux élèves de développer les compétences attendues et de maximiser leurs chances d'admission.",
      ]}
      heroImage="/hero-sat-gmat.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Architecture ENA"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux et exigences du concours ENA",
        lead: "Le concours d'entrée en architecture repose sur une sélection qui se distingue des concours classiques. Une part importante du concours repose sur les épreuves graphiques, qui constituent souvent un élément déterminant.",
        bullets: [
          "Créativité et sens artistique : le concours valorise la capacité à imaginer, créer et développer un regard personnel sur son environnement",
          "Expression graphique : les épreuves évaluent la capacité à représenter des idées, observer avec précision et communiquer visuellement",
          "Analyse et réflexion : les candidats doivent démontrer leur aptitude à observer, comprendre et structurer une réflexion pertinente",
          "Sélectivité de l'admission : l'accès aux Écoles Nationales d'Architecture est compétitif et nécessite une préparation spécifique pour se démarquer",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/paint-palette.png",
          "https://img.icons8.com/3d-fluency/94/pencil.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
        ],
      }}

      sections={[
        {
          title: "Une sélection fondée à la fois sur la motivation, le potentiel créatif et le niveau académique",
          paragraphs: [
            "Comprendre les épreuves du concours — Le concours d'entrée en architecture repose sur des épreuves qui se distinguent des concours classiques. Il évalue à la fois les capacités de raisonnement, la culture générale, la sensibilité artistique et la capacité à représenter et à imaginer. Une part importante du concours repose sur les épreuves graphiques, qui constituent souvent un élément déterminant.",
            "Épreuves graphiques — Les candidats sont évalués sur leur capacité à observer, représenter et composer visuellement. Attendus : dessin d'observation, composition graphique, représentation spatiale et expression visuelle personnelle.",
            "Épreuves écrites — Elles portent généralement sur la culture générale, la réflexion architecturale et la capacité d'analyse. Attendus : structurer une réflexion, mobiliser des références pertinentes, démontrer une compréhension de l'environnement bâti et des enjeux contemporains.",
            "Quel profil pour réussir ? — Les élèves admis présentent généralement : une sensibilité artistique et un intérêt marqué pour l'architecture, le design ou l'art, une capacité d'observation et de représentation, de la créativité et une aptitude à imaginer des espaces, de la rigueur et de la régularité dans le travail. La capacité à développer un regard personnel et une démarche créative est déterminante.",
            "Un enjeu stratégique pour l'orientation — Intégrer une École Nationale d'Architecture constitue un choix académique structurant, ouvrant la voie à des carrières dans l'architecture, l'urbanisme, le design d'espace ou le paysage. La sélectivité du concours impose une préparation exigeante et anticipée. La préparation doit idéalement être anticipée dès la Seconde ou Première.",
          ],
        },
        {
          title: "Une préparation progressive pour développer son potentiel créatif",
          paragraphs: [
            "Quand commencer à se préparer ? — La préparation au concours ENA doit être anticipée. Idéalement dès la classe de Seconde ou Première, pour développer les bases en dessin et en réflexion, puis en Terminale, pour s'entraîner intensivement aux épreuves. Commencer tôt permet d'acquérir les bons automatismes et de construire progressivement une démarche créative personnelle.",
            "Une préparation structurée et adaptée — Chez STUDASSIST, nous proposons une préparation spécifique au concours ENA. Les élèves sont accompagnés en petits groupes de 8 maximum, favorisant un suivi personnalisé et une progression rapide. Nous veillons à créer une dynamique de groupe stimulante, basée sur l'échange, l'inspiration et l'entraide. Notre accompagnement combine : des séances régulières pour développer les bases en dessin, en composition et en réflexion, et des stages intensifs pendant les vacances pour s'entraîner en conditions proches du concours.",
            "Une méthodologie orientée progression — Notre préparation repose sur : exercices de dessin d'observation, travail sur la composition et l'espace, développement de la créativité, entraînements sur sujets type concours et simulations en conditions réelles. Cette méthode permet de développer à la fois technique, confiance et démarche créative.",
          ],
        },
        {
          title: "Un accompagnement continu et dynamique par des enseignants experts des épreuves",
          paragraphs: [
            "Développer un regard et une démarche — Réussir le concours ENA ne consiste pas uniquement à bien dessiner. Nous accompagnons les élèves dans le développement de leur capacité à observer et analyser, structurer une idée, exprimer une intention et défendre une proposition. L'objectif est de construire une véritable démarche créative.",
            "Une dynamique de groupe inspirante — Les élèves évoluent dans un environnement stimulant, où ils peuvent échanger leurs idées, s'inspirer les uns des autres et progresser ensemble. Cette dynamique favorise la créativité et l'engagement.",
            "Un accompagnement qui se prolonge dans le temps — Chez STUDASSIST, nous accompagnons les élèves dans la durée. Nous restons en contact, proposons des exercices complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent venir s'entraîner à tout moment dans notre espace. Les élèves sont accompagnés par des intervenants expérimentés, maîtrisant parfaitement les exigences du concours ENA.",
          ],
        },
        {
          title: "À qui s'adresse la préparation du concours ENA ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves de Seconde, Première et Terminale souhaitant intégrer une École Nationale d'Architecture et développer les compétences créatives, graphiques et analytiques attendues lors du concours.",
          ],
          bullets: [
            "Construire un projet d'études en architecture solide et cohérent",
            "Confirmer leur intérêt pour l'architecture, le design ou l'urbanisme",
            "Développer leurs compétences en dessin d'observation et en composition graphique",
            "Renforcer leur sensibilité artistique et leur capacité d'expression visuelle",
            "Acquérir les méthodes spécifiques attendues aux épreuves du concours",
            "Structurer efficacement leur préparation sur le long terme",
            "Développer un regard personnel et une démarche créative",
            "Maximiser leurs chances d'intégrer l'une des Écoles Nationales d'Architecture",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le concours ENA ?",
        bullets: [
          "Une préparation spécifique à la croisée de l'académique et du créatif",
          "Des petits groupes à effectif réduit (8 élèves max) avec un suivi personnalisé",
          "Des intervenants expérimentés maîtrisant parfaitement les exigences du concours",
          "Un travail approfondi et progressif sur les épreuves graphiques : dessin d'observation, composition, représentation et expression visuelle",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/paint-palette.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/pencil.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez maximiser vos chances d'admission en architecture au Maroc ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Sciences Po", to: "/prepa-sciences-po" }}
    />
  );
}
