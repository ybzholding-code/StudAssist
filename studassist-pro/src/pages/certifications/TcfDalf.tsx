import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "ielts", label: "IELTS & TOEFL", href: "/certifications/ielts-toefl" },
  { key: "tcf", label: "TCF & DALF", href: "/certifications/tcf-dalf" },
  { key: "dele", label: "DELE", href: "/certifications/dele" },
];

export default function CertificationsTcfDalf() {
  return (
    <OrientationLevelPage
      eyebrow="Certifications · TCF-DALF"
      accent="gold"
      title={<>Prépa <span className="text-brand-teal">TCF & DALF</span></>}
      subtitle="Attester de son niveau de français pour étudier, s'installer ou évoluer en France"
      intro={[
        "Les certifications TCF et DALF sont des références incontournables pour toute démarche académique ou administrative en France. Elles permettent d'attester officiellement d'un niveau de français et sont exigées dans de nombreux contextes : candidatures universitaires, procédures Campus France, ou projets d'expatriation.",
        "Ces examens sont généralement requis pour tout élève issu d'un système non francophone, notamment les élèves ne provenant pas du système français ou belge, souhaitant poursuivre leurs études en France. Chez STUDASSIST, nous accompagnons les élèves et étudiants dans une préparation ciblée et structurée, avec un objectif clair : atteindre le niveau requis en fonction de leur projet.",
      ]}
      heroImage="/hero-certif-new.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="TCF & DALF"
      enjeuxEyebrow="Comprendre les différences"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les différences entre TCF et DALF",
        lead: "Le choix entre ces deux certifications dépend directement du projet de l'élève :",
        bullets: [
          "TCF : test standardisé, souvent requis pour Campus France (score B1, B2, C1…)",
          "DALF : diplôme officiel, exigé pour des projets académiques avancés (C1, C2)",
          "Un niveau B2 est souvent requis pour les études supérieures",
          "Les formations les plus sélectives peuvent exiger un niveau C1",
          "Le choix dépend des délais, du projet et des exigences des établissements",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/medal.png",
          "https://img.icons8.com/3d-fluency/94/university.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
        ],
      }}

      sections={[
        {
          title: "Un enjeu clé pour les candidatures en France",
          paragraphs: [
            "Le niveau de français constitue un élément déterminant dans un dossier. Il conditionne l'accès aux formations, la crédibilité du projet et la capacité à suivre des cours dans un environnement académique exigeant.",
            "Un niveau B2 est souvent requis pour les études supérieures, tandis que les formations les plus sélectives peuvent exiger un niveau C1.",
          ],
        },
        {
          title: "Une préparation structurée et personnalisée",
          paragraphs: [
            "La préparation débute par un test de niveau, permettant d'évaluer précisément les compétences de l'élève et de définir un plan de progression adapté.",
            "Nous proposons un accompagnement flexible : en petits groupes de 4 élèves maximum pour favoriser la progression et les interactions, ou en format individuel pour un accompagnement spécifique. La préparation s'organise en séances régulières ou en sessions intensives pendant les vacances scolaires.",
          ],
        },
        {
          title: "Une méthodologie adaptée aux exigences des épreuves",
          paragraphs: [
            "Les épreuves du TCF et du DALF évaluent la compréhension et l'expression, à l'écrit comme à l'oral, dans des contextes académiques et formels.",
            "Notre approche repose sur un travail approfondi de la compréhension de documents, de la structuration des réponses écrites et du développement de l'aisance à l'oral. Les élèves sont entraînés sur des formats proches de l'examen, avec des mises en situation et des retours personnalisés.",
          ],
        },
        {
          title: "Développer un français académique solide",
          paragraphs: [
            "Au-delà de la préparation à l'examen, nous accompagnons les élèves dans le développement d'un français structuré et précis. Cela inclut la capacité à argumenter, à organiser sa pensée, à rédiger de manière claire et à s'exprimer avec fluidité dans un contexte académique.",
            "Cette approche permet non seulement de réussir la certification, mais aussi de mieux s'intégrer dans un parcours d'études en France.",
          ],
        },
        {
          title: "Une préparation intégrée au projet d'orientation",
          paragraphs: [
            "Chez STUDASSIST, la préparation au TCF ou au DALF s'inscrit dans une démarche globale. Elle est directement liée au projet d'études, aux établissements visés et aux exigences des procédures d'admission, notamment via Campus France.",
            "Cela permet de fixer des objectifs réalistes et cohérents, en fonction du calendrier et du niveau attendu.",
          ],
        },
        {
          title: "Un accompagnement dans la durée",
          paragraphs: [
            "Nous accompagnons les élèves tout au long de leur préparation, en leur proposant des supports complémentaires, un suivi régulier et des ajustements en fonction de leur progression. L'objectif est de sécuriser leur montée en niveau et de les préparer dans les meilleures conditions à l'examen.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cette préparation ?",
        groups: [{
          title: "Élèves et étudiants",
          bullets: [
            "préparant un dossier Campus France ou une candidature universitaire en France,",
            "issus d'un système non francophone souhaitant certifier leur niveau,",
            "visant un niveau B2 ou C1 pour des études supérieures exigeantes,",
            "recherchant un accompagnement structuré et adapté à leurs échéances.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Diagnostic initial précis et plan de progression personnalisé",
          "Groupes de 4 max ou format individuel",
          "Méthodologie adaptée aux exigences TCF & DALF",
          "Développement d'un français académique solide",
          "+6 ans d'expérience — 100% de nos élèves décrochent le top 3 de leur choix",
          "Préparation intégrée au projet d'orientation et Campus France",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
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

      faqKeys={["concours", "international"]}
      prev={{ label: "IELTS & TOEFL", to: "/certifications/ielts-toefl" }}
      next={{ label: "DELE", to: "/certifications/dele" }}
    />
  );
}
