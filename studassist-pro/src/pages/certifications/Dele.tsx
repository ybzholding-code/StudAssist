import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "ielts", label: "IELTS & TOEFL", href: "/certifications/ielts-toefl" },
  { key: "tcf", label: "TCF & DALF", href: "/certifications/tcf-dalf" },
  { key: "dele", label: "DELE", href: "/certifications/dele" },
];

export default function CertificationsDele() {
  return (
    <OrientationLevelPage
      eyebrow="Certifications de langues · DELE"
      accent="gold"
      title={<>Prépa <span className="text-brand-teal">DELE</span></>}
      subtitle="Valider son niveau d'espagnol pour étudier et évoluer à l'international"
      intro={[
        "Le DELE (Diploma de Español como Lengua Extranjera) est une certification officielle délivrée par l'Institut Cervantes, reconnue à l'international. Il permet d'attester d'un niveau d'espagnol et constitue un atout important dans les candidatures académiques, notamment en Espagne et dans de nombreuses universités internationales.",
        "Chez STUDASSIST, nous accompagnons les élèves dans une préparation structurée et ciblée, avec un objectif clair : atteindre le niveau requis en fonction de leur projet.",
      ]}
      heroImage="/hero-certif-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Programmer mon test initial de niveau"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="DELE"
      enjeuxEyebrow="Les enjeux & attendus"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les attendus du DELE",
        lead: "Le DELE évalue la capacité à utiliser l'espagnol dans des contextes académiques, personnels et professionnels. Les candidats sont évalués sur quatre compétences complémentaires. Chez STUDASSIST, nous préparons les élèves à chacune de ces compétences grâce à des exercices ciblés, des mises en situation et des simulations inspirées des conditions réelles de l'examen.",
        bullets: [
          "Compréhension écrite — Comprendre et interpréter des textes de complexité progressive.",
          "Compréhension orale — Comprendre des conversations, présentations et contenus audio authentiques.",
          "Expression écrite — Rédiger des productions structurées, cohérentes et adaptées à la situation.",
          "Expression orale — S'exprimer avec fluidité, argumenter et interagir efficacement en espagnol.",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/chat.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
        ],
      }}

      sections={[
        {
          title: "Pourquoi passer le DELE et quel score viser ?",
          paragraphs: [
            "Un atout pour les candidatures en Espagne et à l'international — L'Espagne attire chaque année un nombre croissant d'étudiants internationaux grâce à la qualité de son enseignement supérieur, à la diversité de ses formations et à son coût souvent plus accessible que d'autres destinations européennes. Dans ce contexte, le DELE constitue un véritable avantage pour les candidats souhaitant intégrer une université espagnole ou un programme dispensé partiellement en espagnol. Il permet de démontrer sa capacité à suivre des études dans un environnement hispanophone et de renforcer significativement la crédibilité de son dossier académique.",
            "Quel niveau viser au DELE ? — Le niveau à atteindre dépend directement du projet académique de l'élève et des exigences des établissements visés. De manière générale : le niveau B1 permet de démontrer une autonomie dans les situations courantes ; le niveau B2 est généralement requis pour l'accès aux études supérieures en Espagne ; le niveau C1 est recommandé pour les formations les plus sélectives ou les cursus exigeant une excellente maîtrise de l'espagnol. Chez STUDASSIST, nous accompagnons chaque élève dans la définition d'un objectif réaliste et cohérent avec son projet d'études, les universités ciblées et son niveau initial.",
          ],
        },
        {
          title: "Une préparation stratégique et personnalisée avec une méthodologie orientée performance",
          paragraphs: [
            "Une préparation structurée et personnalisée — La préparation débute par un test de niveau, permettant d'évaluer les compétences de l'élève et de définir un plan de progression adapté. Nous proposons ensuite un accompagnement flexible, en petits groupes de 4 élèves maximum, afin de garantir une progression efficace et un suivi de qualité, ou en format individuel pour répondre à des besoins spécifiques. Selon les objectifs et les échéances, la préparation peut s'inscrire dans la durée à travers des séances régulières, ou se concentrer sous forme de sessions intensives pendant les vacances scolaires.",
            "Une méthodologie adaptée aux exigences du DELE — Notre approche repose sur une préparation complète aux différentes épreuves. Les élèves travaillent la compréhension de documents, la structuration de leurs productions écrites et leur aisance à l'oral. Des entraînements réguliers et des mises en situation permettent de se familiariser avec les exigences du test et de progresser efficacement.",
          ],
        },
        {
          title: "L'approche STUDASSIST dans la préparation du DELE",
          paragraphs: [
            "Développer un espagnol académique et opérationnel — Au-delà de la préparation à l'examen, nous accompagnons les élèves dans le développement d'un espagnol structuré, précis et fluide. Ils apprennent à argumenter, à organiser leurs idées et à s'exprimer avec clarté, à l'écrit comme à l'oral. Cette approche leur permet non seulement de réussir le DELE, mais aussi de s'intégrer dans un environnement académique hispanophone.",
            "Une préparation intégrée au projet d'orientation — Chez STUDASSIST, la préparation au DELE s'inscrit dans une démarche globale d'orientation. Elle est directement liée au projet d'études de l'élève, aux universités hispanophones envisagées, aux formations ciblées et aux exigences des procédures d'admission. Notre accompagnement permet ainsi de définir une stratégie cohérente associant choix des établissements, niveau linguistique à atteindre et construction du dossier de candidature.",
          ],
        },
        {
          title: "Un accompagnement en continu avec des professeurs expérimentés",
          paragraphs: [
            "Un encadrement par des professeurs experts de la langue espagnole — Les élèves sont accompagnés par des enseignants spécialisés dans l'enseignement de l'espagnol et la préparation aux certifications internationales. Leur parfaite connaissance des exigences du DELE leur permet d'identifier rapidement les axes de progression de chaque candidat et de mettre en place un accompagnement adapté à son niveau et à ses objectifs. Au-delà de la préparation aux épreuves, ils accompagnent les élèves dans le développement d'un espagnol académique solide, indispensable pour réussir leurs études dans un environnement hispanophone.",
            "Un accompagnement dans la durée — Nous accompagnons les élèves tout au long de leur préparation, en leur proposant des supports complémentaires et un suivi régulier. L'objectif est de sécuriser leur progression et de les préparer dans les meilleures conditions à l'examen.",
          ],
        },
        {
          title: "À qui s'adresse la préparation du DELE ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves, étudiants et jeunes diplômés souhaitant certifier officiellement leur niveau d'espagnol dans le cadre d'un projet académique ou professionnel à l'international.",
          ],
          bullets: [
            "Intégrer une université ou une grande école en Espagne",
            "Préparer une candidature dans le cadre d'un programme international",
            "Atteindre le niveau linguistique exigé par un établissement d'enseignement supérieur",
            "Renforcer leur dossier académique et maximiser leurs chances d'admission",
            "Développer leur maîtrise de l'espagnol écrit et oral dans un contexte académique",
            "Acquérir les méthodes spécifiques aux épreuves du DELE",
            "Préparer un projet d'études à l'international dans le cadre d'un accompagnement en orientation",
            "Gagner en confiance avant le passage de l'examen",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation du DELE ?",
        bullets: [
          "Un diagnostic initial précis avec un plan de progression personnalisé",
          "Une méthodologie concentrée sur l'optimisation du score",
          "Des petits groupes à effectif réduit (8 élèves max) avec un suivi personnalisé",
          "Des entraînements et simulations en conditions réelles",
          "Une préparation intégrée au projet d'orientation",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez accompagner votre enfant dans sa préparation au DELE ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["certifications"]}
      faqTitle="FAQ – Certifications de langues"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux certifications."
      prev={{ label: "TCF & DALF", to: "/certifications/tcf-dalf" }}
    />
  );
}
