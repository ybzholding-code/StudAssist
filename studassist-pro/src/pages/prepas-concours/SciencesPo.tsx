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

export default function PrepaSciences() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · Sciences-Po"
      accent="pink"
      title={<>Prépa Concours <span className="text-brand-teal">Sciences Po</span> (Réseau IEP)</>}
      subtitle="Réussir les épreuves et intégrer les Instituts d'Études Politiques"
      intro={[
        "Les Instituts d'Études Politiques (IEP), communément appelés Sciences Po, comptent parmi les formations les plus sélectives en sciences humaines et sociales. Le concours commun du réseau Sciences Po permet d'intégrer plusieurs IEP en France, reconnus pour la qualité de leur enseignement et leurs débouchés dans les domaines de la politique, de l'économie, du droit ou des relations internationales.",
        "Ces concours exigent une préparation rigoureuse, combinant maîtrise académique, culture générale et capacité d'analyse. Chez STUDASSIST, nous proposons une préparation au concours structurée et exigeante, permettant aux élèves de maximiser leurs chances d'admission. Cet accompagnement peut être complété par notre service d'orientation, afin de construire un dossier de candidature solide et cohérent.",
      ]}
      heroImage="/hero-sat-gmat.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Sciences Po"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux du concours des IEP",
        lead: "Le concours du réseau Sciences Po repose sur des épreuves écrites exigeantes, qui évaluent la capacité des candidats à analyser, structurer et argumenter.",
        bullets: [
          "Capacité d'analyse et de réflexion : les épreuves évaluent l'aptitude à comprendre des problématiques complexes, développer une pensée structurée et construire une argumentation solide",
          "Culture générale et compréhension du monde contemporain : les candidats doivent démontrer leur connaissance des grands enjeux politiques, économiques, sociaux et internationaux",
          "Excellence rédactionnelle : la qualité de l'expression écrite, la clarté du raisonnement et la maîtrise de la dissertation sont déterminantes",
          "Sélectivité de l'admission : l'accès aux IEP est particulièrement compétitif et nécessite une préparation rigoureuse ainsi qu'une forte régularité dans le travail",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
        ],
      }}

      sections={[
        {
          title: "Comprendre les exigences du concours Sciences Po (IEP)",
          paragraphs: [
            "Comprendre les épreuves du concours — Le concours du réseau Sciences Po repose sur des épreuves écrites exigeantes, qui évaluent la capacité des candidats à analyser, structurer et argumenter.",
            "Dissertation de questions contemporaines — Les candidats doivent traiter un sujet portant sur les grandes thématiques du programme (ex : le corps, l'alimentation, les frontières, l'environnement, le pouvoir…). Attendus : construire une réflexion structurée, mobiliser des références variées, développer une argumentation claire et nuancée.",
            "Épreuve d'histoire — Elle repose généralement sur un programme précis (ex : monde contemporain depuis 1945). Attendus : maîtrise des repères chronologiques, compréhension des grands enjeux géopolitiques, capacité d'analyse historique.",
            "Épreuve de langue (anglais le plus souvent) — Compréhension de texte, expression écrite, parfois traduction. Attendus : démontrer un niveau solide, structuré et précis.",
            "Une bibliographie essentielle à maîtriser — La réussite au concours repose en grande partie sur la capacité à mobiliser des références pertinentes. Chez STUDASSIST, nous guidons les élèves dans la construction d'une bibliographie stratégique, adaptée au niveau et aux objectifs. Elle inclut notamment : des ouvrages de référence en sciences sociales, des essais contemporains, des lectures d'actualité (revues, presse internationale) et des contenus sélectionnés pour enrichir la culture générale. L'objectif n'est pas de lire beaucoup, mais de lire intelligemment et d'exploiter efficacement ses connaissances.",
            "Un enjeu stratégique pour l'orientation — Les IEP offrent de nombreuses opportunités de mobilité internationale et ouvrent l'accès à des parcours académiques particulièrement diversifiés. Intégrer l'une de ces écoles constitue un choix académique structurant, ouvrant la voie à des carrières dans des domaines variés : affaires publiques, relations internationales, économie, droit, journalisme. La sélectivité du concours impose une préparation exigeante et anticipée.",
            "Quel profil pour réussir ? — Les élèves admis présentent généralement : un excellent niveau rédactionnel, une forte capacité d'analyse, une bonne culture générale et un intérêt marqué pour l'actualité. La capacité à structurer une pensée et à mobiliser des références pertinentes est déterminante.",
          ],
        },
        {
          title: "Une préparation progressive pour développer méthode, culture générale et esprit concours",
          paragraphs: [
            "Quand commencer à se préparer ? — La préparation au concours Sciences Po doit être anticipée. Idéalement dès la classe de Première, pour développer la culture générale, puis en Terminale, pour s'entraîner intensivement aux épreuves.",
            "Une préparation structurée et adaptée autour d'une méthodologie orientée performance — Chez STUDASSIST, nous proposons une préparation exigeante et progressive. Les élèves sont accompagnés en petits groupes de 4 maximum, permettant un suivi personnalisé et une progression rapide. Nous favorisons une dynamique de groupe intellectuelle, basée sur le débat, l'échange et l'émulation. Notre accompagnement combine à la fois : des séances hebdomadaires, pour développer les compétences analytiques et rédactionnelles sur le long terme, et des stages intensifs, pour s'entraîner en conditions réelles.",
            "Le contenu de notre préparation repose sur : des entraînements à la dissertation, la méthodologie de structuration des idées, l'analyse de sujets d'actualité, et des entraînements réguliers et concours blancs.",
          ],
        },
        {
          title: "Un accompagnement expert pour réussir le concours et construire son dossier",
          paragraphs: [
            "Développer un véritable esprit concours — Réussir Sciences Po nécessite de se démarquer. Nous accompagnons les élèves dans le développement de leur capacité à argumenter, dans la structuration de leur pensée, dans la gestion du temps et dans la prise de position.",
            "Un accompagnement qui se prolonge dans le temps — Chez STUDASSIST, nous assurons un suivi dans la durée. Nous restons en contact avec nos élèves, leur fournissons des contenus complémentaires et restons disponibles jusqu'aux échéances. Notre accompagnement en orientation permet également de renforcer le dossier Parcoursup grâce à un travail approfondi sur le projet de formation motivé, les activités et centres d'intérêt ainsi que la cohérence globale de la candidature. Ces éléments jouent un rôle déterminant dans l'évaluation des candidats, au-delà des seules performances aux épreuves écrites.",
          ],
        },
        {
          title: "À qui s'adresse la préparation du concours des IEP ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves de Première et de Terminale souhaitant intégrer un Institut d'Études Politiques (Sciences Po) et développer les compétences académiques, méthodologiques et intellectuelles attendues lors du concours.",
          ],
          bullets: [
            "Construire un projet d'études ambitieux dans les domaines des sciences politiques, des relations internationales, du droit, de l'économie ou du journalisme",
            "Développer leur culture générale et leur compréhension du monde contemporain",
            "S'intéresser à l'actualité, aux enjeux de société et aux grandes questions contemporaines",
            "Renforcer leurs capacités d'analyse, de réflexion et d'argumentation",
            "Améliorer leur niveau rédactionnel et leur maîtrise de la dissertation",
            "Acquérir les méthodes spécifiques attendues aux épreuves du concours",
            "Structurer efficacement leur préparation sur le long terme",
            "Construire un dossier Parcoursup solide et cohérent",
            "Maximiser leurs chances d'intégrer l'un des IEP du réseau Sciences Po",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le concours des IEP ?",
        bullets: [
          "Une préparation intellectuelle exigeante avec le développement de méthodes, de capacités d'analyse, de réflexion et d'argumentation",
          "Une bibliographie stratégique pour une culture générale construite intelligemment",
          "Des petits groupes à effectif réduit (4 élèves max) avec un suivi personnalisé",
          "Une parfaite maîtrise des épreuves du concours IEP et de leurs spécificités grâce à des enseignants experts dans les matières littéraires",
          "Un accompagnement global : dossier de candidature cohérent & valorisant + concours",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez optimiser vos chances de réussite au concours Sciences Po ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Médecine Belgique", to: "/prepa-medecine-belgique" }}
      next={{ label: "Architecture ENA", to: "/prepa-architecture-ena" }}
    />
  );
}
