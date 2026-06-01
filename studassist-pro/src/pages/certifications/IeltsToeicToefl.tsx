import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "ielts", label: "IELTS & TOEFL", href: "/certifications/ielts-toefl" },
  { key: "tcf", label: "TCF & DALF", href: "/certifications/tcf-dalf" },
  { key: "dele", label: "DELE", href: "/certifications/dele" },
];

export default function CertificationsIelts() {
  return (
    <OrientationLevelPage
      eyebrow="Certifications · IELTS-TOEFL"
      accent="gold"
      title={<>Prépa <span className="text-brand-teal">IELTS & TOEFL</span></>}
      subtitle="Atteindre le score requis et valider son niveau pour les études à l'international"
      intro={[
        "Les tests IELTS et TOEFL sont aujourd'hui incontournables pour intégrer des universités et grandes écoles à l'international. Ils permettent d'attester d'un niveau d'anglais académique et constituent une étape clé dans de nombreux processus de candidature.",
        "Chez STUDASSIST, nous accompagnons les élèves dans une préparation ciblée et stratégique, avec un objectif clair : atteindre le score requis pour intégrer les formations visées.",
      ]}
      heroImage="/hero-certif-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="IELTS & TOEFL"
      enjeuxEyebrow="Comprendre les enjeux"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les enjeux des certifications d'anglais",
        lead: "Ces tests évaluent la capacité à évoluer dans un environnement académique anglophone :",
        bullets: [
          "Compréhension écrite et orale",
          "Expression écrite et orale",
          "Maîtrise des codes académiques de la langue",
          "Capacité à performer dans un contexte d'examen exigeant",
          "Score élevé = avantage décisif pour les admissions internationales",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      sections={[
        {
          title: "IELTS, TOEFL ou TOEIC : faire le bon choix",
          paragraphs: [
            "Le choix du test dépend directement du projet de l'élève. L'IELTS est aujourd'hui le plus demandé par les universités internationales, tandis que le TOEFL est particulièrement répandu pour les candidatures aux États-Unis. Le TOEIC, quant à lui, s'inscrit davantage dans un cadre professionnel.",
            "Chez STUDASSIST, nous guidons les élèves dans ce choix afin de garantir la cohérence entre leur certification et leurs objectifs académiques.",
          ],
        },
        {
          title: "Un enjeu déterminant pour les candidatures",
          paragraphs: [
            "Le score obtenu constitue un véritable levier dans un dossier. Il permet non seulement de valider un niveau linguistique, mais aussi de renforcer la crédibilité de la candidature et d'accéder à des formations plus sélectives. Dans certains cas, il peut également conditionner l'obtention de bourses.",
            "Chaque établissement fixe ses propres exigences, généralement situées entre 6.5 et 7.5 à l'IELTS, voire davantage pour les formations les plus compétitives.",
          ],
        },
        {
          title: "Une préparation structurée et personnalisée",
          paragraphs: [
            "Chaque élève débute par un test de niveau, permettant d'évaluer précisément ses compétences et de définir un plan de travail adapté. La préparation peut se faire en petits groupes de 8 élèves maximum, favorisant l'échange et la progression, ou en format individuel pour un accompagnement spécifique.",
            "Nous proposons des séances hebdomadaires pour une progression régulière, ainsi que des stages intensifs pendant les vacances scolaires à raison de 20h de cours. Cette flexibilité permet d'adapter la préparation au rythme, aux objectifs et aux échéances de chaque élève.",
          ],
        },
        {
          title: "Une méthodologie orientée score",
          paragraphs: [
            "Notre approche repose sur une parfaite maîtrise des formats d'épreuves et des attentes des correcteurs. Chaque section du test fait l'objet d'un travail spécifique, avec des stratégies adaptées, des entraînements ciblés et des mises en situation en conditions réelles.",
            "L'objectif est clair : optimiser le score en maximisant la performance dans chaque partie de l'examen.",
          ],
        },
        {
          title: "Développer des compétences académiques solides",
          paragraphs: [
            "Au-delà des techniques d'examen, nous accompagnons les élèves dans le développement de compétences durables : compréhension de textes complexes, structuration de la pensée à l'écrit, aisance à l'oral et enrichissement du vocabulaire académique.",
            "Chaque élève bénéficie de retours personnalisés, lui permettant d'identifier ses axes d'amélioration et de progresser efficacement.",
          ],
        },
        {
          title: "Une préparation intégrée au projet d'orientation",
          paragraphs: [
            "Chez STUDASSIST, la préparation à l'IELTS ou au TOEFL s'inscrit dans une démarche globale. Elle est directement liée au projet d'orientation de l'élève, aux destinations envisagées et aux établissements ciblés.",
            "Cette approche permet de définir des objectifs de score pertinents et cohérents avec les ambitions académiques de l'élève.",
          ],
        },
        {
          title: "Un accompagnement dans la durée",
          paragraphs: [
            "La préparation ne s'arrête pas aux séances. Nous restons en contact avec nos élèves, leur proposons des ressources complémentaires et les accompagnons jusqu'au passage du test, afin de sécuriser leur progression.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cette préparation ?",
        groups: [{
          title: "Élèves et étudiants",
          bullets: [
            "ayant besoin d'un score IELTS ou TOEFL pour une admission universitaire,",
            "souhaitant certifier leur niveau d'anglais académique (B2, C1, C2),",
            "recherchant une préparation intensive avant une date d'examen,",
            "souhaitant renforcer leur anglais dans le cadre de leur projet d'orientation.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Diagnostic initial précis et plan de progression personnalisé",
          "Méthodologie orientée optimisation du score",
          "Groupes de 8 max ou format individuel",
          "Simulations en conditions réelles",
          "+6 ans d'expérience — 100% de nos élèves admis dans le top 3 de leurs choix",
          "Préparation intégrée au projet d'orientation",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez maximiser vos chances de réussite à l'IELTS ou au TOEFL ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["concours", "international"]}
      next={{ label: "TCF & DALF", to: "/certifications/tcf-dalf" }}
    />
  );
}
