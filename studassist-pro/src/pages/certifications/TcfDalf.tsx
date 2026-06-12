import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "ielts", label: "IELTS & TOEFL", href: "/certifications/ielts-toefl" },
  { key: "tcf", label: "TCF & DALF", href: "/certifications/tcf-dalf" },
  { key: "dele", label: "DELE", href: "/certifications/dele" },
];

export default function CertificationsTcfDalf() {
  return (
    <OrientationLevelPage
      eyebrow="Certifications de langues · TCF-DALF"
      accent="gold"
      title={<>Prépa <span className="text-brand-teal">TCF & DALF</span></>}
      subtitle="Attester de son niveau de français pour étudier ou s'installer en France"
      intro={[
        "Les certifications TCF et DALF sont des références incontournables pour toute démarche académique ou administrative en France. Elles permettent d'attester officiellement d'un niveau de français et sont exigées dans de nombreux contextes : candidatures universitaires, procédures Campus France, ou projets d'expatriation.",
        "Ces examens sont généralement requis pour tout élève issu d'un système non francophone, notamment les élèves ne provenant pas du système français ou belge, souhaitant poursuivre leurs études en France. Chez STUDASSIST, nous accompagnons les élèves et étudiants dans une préparation ciblée et structurée, avec un objectif clair : atteindre le niveau requis en fonction de leur projet.",
      ]}
      heroImage="/hero-certif-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Programmer mon test initial de niveau"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="TCF & DALF"
      enjeuxEyebrow="Les enjeux & attendus"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les attendus des tests de certifications de français",
        lead: "Les certifications TCF et DALF mesurent la capacité à comprendre et utiliser le français dans des situations académiques et professionnelles. Elles évaluent quatre compétences fondamentales. Selon la certification préparée et le niveau visé, le contenu et le niveau d'exigence des épreuves peuvent varier. Notre accompagnement permet de développer chacune de ces compétences tout en maîtrisant les attentes spécifiques des examinateurs.",
        bullets: [
          "Compréhension écrite — Lire et analyser différents types de documents en français.",
          "Compréhension orale — Comprendre des échanges, débats, conférences et situations de communication variées.",
          "Expression écrite — Produire des textes clairs, structurés et adaptés au contexte demandé.",
          "Expression orale — Communiquer avec aisance, argumenter et défendre un point de vue en français.",
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
          title: "Pourquoi passer une certification de français et quel score viser ?",
          paragraphs: [
            "Comprendre les différences entre TCF et DALF — Le TCF (Test de Connaissance du Français) est un test standardisé, souvent requis dans le cadre des démarches Campus France. Il permet d'obtenir un score correspondant à un niveau (B1, B2, C1…). Le DALF (Diplôme Approfondi de Langue Française) est un diplôme officiel, généralement exigé pour des projets académiques ou professionnels plus avancés, notamment aux niveaux C1 et C2. Le choix entre ces deux certifications dépend directement du projet de l'élève, de ses délais et des exigences des établissements visés.",
            "Un enjeu clé pour les candidatures en France — Le niveau de français constitue un élément déterminant dans un dossier. Il conditionne l'accès aux formations, la crédibilité du projet et la capacité à suivre des cours dans un environnement académique exigeant. Un niveau B2 est souvent requis pour les études supérieures, tandis que les formations les plus sélectives peuvent exiger un niveau C1.",
          ],
        },
        {
          title: "Une préparation stratégique et personnalisée avec une méthodologie orientée performance",
          paragraphs: [
            "Une préparation structurée et personnalisée — La préparation débute par un test de niveau, permettant d'évaluer précisément les compétences de l'élève et de définir un plan de progression adapté. Nous proposons ensuite un accompagnement flexible, qui peut se faire en petits groupes de 4 élèves maximum, afin de favoriser la progression, les interactions et la qualité du suivi, ou en format individuel pour les élèves nécessitant un accompagnement spécifique. La préparation s'organise en fonction des objectifs et des échéances : elle peut s'inscrire dans la durée à travers des séances régulières, ou prendre la forme de sessions intensives pendant les vacances scolaires pour accélérer la montée en niveau.",
            "Une méthodologie adaptée aux exigences des épreuves — Les épreuves du TCF et du DALF évaluent la compréhension et l'expression, à l'écrit comme à l'oral, dans des contextes académiques et formels. Notre approche repose sur un travail approfondi de la compréhension de documents, de la structuration des réponses écrites et du développement de l'aisance à l'oral. Les élèves sont entraînés sur des formats proches de l'examen, avec des mises en situation et des retours personnalisés.",
          ],
        },
        {
          title: "L'approche STUDASSIST dans la préparation des certifications de français",
          paragraphs: [
            "Développer un français académique solide — Au-delà de la préparation à l'examen, nous accompagnons les élèves dans le développement d'un français structuré et précis. Cela inclut la capacité à argumenter, à organiser sa pensée, à rédiger de manière claire et à s'exprimer avec fluidité dans un contexte académique. Cette approche permet non seulement de réussir la certification, mais aussi de mieux s'intégrer dans un parcours d'études en France.",
            "Une préparation intégrée au projet d'orientation — Chez STUDASSIST, la préparation au TCF ou au DALF s'inscrit dans une démarche globale. Elle est directement liée au projet d'études, aux établissements visés et aux exigences des procédures d'admission, notamment via Campus France. Cela permet de fixer des objectifs réalistes et cohérents, en fonction du calendrier et du niveau attendu.",
          ],
        },
        {
          title: "Un accompagnement en continu avec des professeurs expérimentés",
          paragraphs: [
            "Un encadrement par des professeurs experts des certifications de français — Les élèves sont accompagnés par des enseignants spécialisés dans l'enseignement du français et la préparation aux certifications officielles. Leur parfaite connaissance des exigences du TCF et du DALF leur permet d'identifier rapidement les axes de progression de chaque candidat et de proposer un accompagnement adapté à son niveau et à ses objectifs. Au-delà de la préparation aux épreuves, ils accompagnent les élèves dans le développement d'un français académique solide, indispensable pour réussir leurs études dans un environnement francophone.",
            "Un accompagnement dans la durée — Nous accompagnons les élèves tout au long de leur préparation, en leur proposant des supports complémentaires, un suivi régulier et des ajustements en fonction de leur progression. L'objectif est de sécuriser leur montée en niveau et de les préparer dans les meilleures conditions à l'examen.",
          ],
        },
        {
          title: "À qui s'adresse la préparation des certifications de français ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves, étudiants et jeunes diplômés souhaitant certifier officiellement leur niveau de français dans le cadre d'un projet académique, professionnel ou d'installation en France.",
          ],
          bullets: [
            "Intégrer une université ou une grande école en France",
            "Préparer une candidature dans le cadre d'une procédure Campus France",
            "Atteindre le niveau linguistique exigé par un établissement ou une formation sélective",
            "Renforcer leur dossier académique et sécuriser leur projet d'études",
            "Développer leur maîtrise du français écrit et oral dans un contexte académique",
            "Acquérir les méthodes spécifiques aux épreuves du TCF ou du DALF",
            "Préparer un projet d'études à l'étranger dans le cadre d'un accompagnement en orientation",
            "Gagner en confiance avant le passage de l'examen",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation des tests TCF & DALF ?",
        bullets: [
          "Un diagnostic initial précis avec un plan de progression personnalisé",
          "Une méthodologie concentrée sur l'optimisation du score",
          "Des petits groupes à effectif réduit (4 élèves max) avec un suivi personnalisé",
          "Des entraînements et simulations en conditions réelles",
          "Une préparation intégrée au projet d'orientation et aux pré-requis de Campus France",
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
        body: "Vous souhaitez accompagner votre enfant dans sa préparation au TCF ou au DALF ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["certifications"]}
      faqTitle="FAQ – Certifications de langues"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux certifications."
      prev={{ label: "IELTS & TOEFL", to: "/certifications/ielts-toefl" }}
      next={{ label: "DELE", to: "/certifications/dele" }}
    />
  );
}
