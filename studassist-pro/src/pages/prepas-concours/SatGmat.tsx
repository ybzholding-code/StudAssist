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

export default function PrepaSatGmat() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · SAT-GMAT"
      accent="pink"
      title={<>Prépa <span className="text-brand-teal">SAT & GMAT</span></>}
      subtitle="Atteindre les scores requis et intégrer les meilleures universités internationales"
      intro={[
        "Les tests SAT et GMAT constituent des éléments clés dans les processus d'admission des universités et grandes écoles à l'international. Ils sont utilisés pour évaluer les capacités académiques, le raisonnement et la rigueur des candidats dans un environnement hautement compétitif.",
        "Chez STUDASSIST, nous proposons des préparations structurées et stratégiques, permettant aux élèves et étudiants d'atteindre des scores compétitifs et de maximiser leurs chances d'admission.",
      ]}
      heroImage="/hero-sat-gmat.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="SAT & GMAT"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les enjeux du SAT et du GMAT",
        lead: "Le SAT s'adresse principalement aux élèves de lycée souhaitant intégrer une université internationale, notamment aux États-Unis. Le GMAT concerne les étudiants visant des programmes de haut niveau, tels que les Masters en management (MiM) ou les MBA. Ces tests qui s'inscrivent dans une logique de sélection globale, aux côtés du dossier académique, des lettres de motivation et des entretiens, ne mesurent pas uniquement les connaissances, mais surtout :",
        bullets: [
          "Le raisonnement logique",
          "Les compétences en mathématiques",
          "La maîtrise de l'anglais académique",
          "La capacité à travailler sous contrainte de temps",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/calculator.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation ciblée avec une méthodologie orientée performance",
          paragraphs: [
            "Un levier déterminant pour les admissions internationales — Un score élevé au SAT ou au GMAT constitue un avantage décisif dans les candidatures. Il permet de se démarquer dans un processus de sélection international, de renforcer la crédibilité du dossier et d'accéder à des universités et programmes plus sélectifs. Dans certains cas, il peut également ouvrir l'accès à des bourses.",
            "Une préparation individualisée et adaptée à chaque profil — Chez STUDASSIST, nous privilégions un accompagnement en format individuel, en présentiel ou à distance, afin de nous adapter précisément au niveau, aux objectifs et au rythme de chaque élève. Chaque programme est construit sur mesure, en fonction du niveau initial, du score cible, des échéances et des axes de progression. Ce format permet un travail ciblé, des ajustements continus et une progression plus rapide.",
            "Une méthodologie orientée score — Notre approche repose sur une préparation concrète et efficace : maîtrise des formats spécifiques des tests, travail ciblé sur chaque section (math, verbal, logique), stratégies de résolution rapide et simulations en conditions réelles. L'objectif est clair : optimiser le score, et non simplement progresser.",
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation de ces tests",
          paragraphs: [
            "Développer un véritable esprit de performance — Le SAT et le GMAT sont des tests de performance. Nous accompagnons les élèves dans le développement de réflexes essentiels : gestion du temps, stratégie de réponse, priorisation des questions et gestion du stress. L'objectif est de maximiser le nombre de points obtenus dans un temps limité.",
            "Une préparation complémentaire en anglais académique — La maîtrise de l'anglais est centrale dans ces tests. Nous accompagnons les élèves dans le développement de leurs compétences linguistiques, notamment : compréhension de textes complexes, analyse grammaticale et vocabulaire académique. Nous préparons également les élèves aux tests complémentaires tels que IELTS ou TOEFL, souvent requis dans les candidatures internationales.",
          ],
        },
        {
          title: "Un accompagnement en continu par des enseignants experts de ces tests",
          paragraphs: [
            "Un accompagnement assuré par des enseignants experts des tests internationaux — Les candidats sont accompagnés par des enseignants maîtrisant parfaitement les exigences, les formats et les stratégies propres au SAT et au GMAT. Grâce à leur expertise, ils sont en mesure d'identifier rapidement les axes de progression de chaque candidat, de proposer des méthodes de travail adaptées et d'optimiser efficacement les performances sur chaque section du test. Leur accompagnement ne se limite pas aux contenus académiques : ils transmettent également les stratégies de gestion du temps, les techniques de résolution rapide et les réflexes indispensables pour performer dans un environnement hautement compétitif.",
            "Un accompagnement qui se prolonge dans le temps — Chez STUDASSIST, la préparation ne s'arrête pas à la fin des sessions. Nous restons en contact avec nos élèves, leur fournissons des contenus d'entraînement complémentaires et les accompagnons jusqu'aux échéances. Les élèves peuvent également revenir s'entraîner à tout moment dans notre espace.",
          ],
        },
        {
          title: "À qui s'adressent les préparations SAT & GMAT ?",
          paragraphs: [
            "Ces préparations s'adressent aux élèves et étudiants souhaitant intégrer des universités ou programmes sélectifs à l'international et ayant besoin d'obtenir un score compétitif au SAT ou au GMAT.",
          ],
          bullets: [
            "Préparer une candidature dans une université internationale, notamment aux États-Unis",
            "Intégrer un Bachelor, un Master en Management (MiM) ou un MBA de haut niveau",
            "Atteindre un score cible dans le cadre d'un projet d'études à l'étranger",
            "Renforcer leur dossier académique et se démarquer dans un processus de sélection international",
            "Développer leurs compétences en raisonnement logique, mathématiques et anglais académique",
            "Acquérir les méthodes et stratégies spécifiques aux tests standardisés",
            "Maximiser leurs chances d'admission dans les universités et écoles les plus sélectives",
            "Accéder à davantage d'opportunités académiques et, dans certains cas, à des bourses d'études",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation du SAT & GMAT ?",
        bullets: [
          "Un accompagnement 100% individuel et sur mesure",
          "Une préparation orientée score avec des stratégies de performances éprouvées",
          "Une parfaite maîtrise des formats des tests et de leurs spécificités",
          "Une préparation complémentaire et renforcée en anglais académique",
          "+7 ans d'expertise et des résultats reconnus",
          "100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez maximiser vos chances de réussite aux tests SAT ou GMAT pour décrocher une admission dans les meilleures universités ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      next={{ label: "Commerce SESAME & ACCÈS", to: "/prepa-concours-sesame-acces" }}
    />
  );
}
