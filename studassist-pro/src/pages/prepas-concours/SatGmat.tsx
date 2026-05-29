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
      heroImage="/hero-concours-new.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="SAT & GMAT"
      enjeuxEyebrow="Comprendre les enjeux"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les enjeux du SAT et du GMAT",
        lead: "Ces tests ne mesurent pas uniquement les connaissances, mais surtout :",
        bullets: [
          "Le raisonnement logique",
          "Les compétences en mathématiques",
          "La maîtrise de l'anglais académique",
          "La capacité à travailler sous contrainte de temps",
          "Un score élevé = avantage décisif pour les admissions internationales",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/calculator.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation individualisée et adaptée à chaque profil",
          paragraphs: [
            "Nous privilégions un accompagnement en format individuel, en présentiel ou à distance. Chaque programme est construit sur mesure, en fonction du niveau initial, du score cible, des échéances et des axes de progression.",
            "Ce format permet un travail ciblé, des ajustements continus et une progression plus rapide.",
          ],
        },
        {
          title: "Une méthodologie orientée score",
          paragraphs: [
            "Notre approche repose sur : maîtrise des formats spécifiques des tests, travail ciblé sur chaque section (math, verbal, logique), stratégies de résolution rapide et simulations en conditions réelles.",
            "L'objectif est clair : optimiser le score, et non simplement progresser.",
          ],
        },
        {
          title: "Développer un véritable esprit de performance",
          paragraphs: [
            "Le SAT et le GMAT sont des tests de performance. Nous développons : gestion du temps, stratégie de réponse, priorisation des questions et gestion du stress.",
            "L'objectif est de maximiser le nombre de points obtenus dans un temps limité.",
          ],
        },
        {
          title: "Une préparation complémentaire en anglais académique",
          paragraphs: [
            "La maîtrise de l'anglais est centrale. Nous accompagnons les élèves dans : compréhension de textes complexes, analyse grammaticale et vocabulaire académique.",
            "Nous préparons également aux tests complémentaires tels que IELTS ou TOEFL, souvent requis dans les candidatures internationales.",
          ],
        },
        {
          title: "Un accompagnement qui se prolonge dans le temps",
          paragraphs: [
            "La préparation ne s'arrête pas à la fin des sessions. Nous restons en contact, fournissons des contenus d'entraînement complémentaires et accompagnons jusqu'aux échéances. Les élèves peuvent revenir s'entraîner à tout moment dans notre espace.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cette préparation ?",
        groups: [{
          title: "Élèves et étudiants",
          bullets: [
            "visant des universités internationales (SAT) ou des programmes MBA/MiM (GMAT),",
            "souhaitant atteindre un score compétitif pour se démarquer,",
            "recherchant un accompagnement individuel et sur mesure,",
            "ayant besoin de renforcer leur anglais académique en parallèle.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Accompagnement 100% individuel et sur mesure",
          "Une méthodologie orientée optimisation du score",
          "Simulations en conditions réelles",
          "Préparation complémentaire en anglais académique",
          "+6 ans d'expérience dans la préparation",
          "100% de nos élèves admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/video-call.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez maximiser vos chances de réussite aux tests SAT ou GMAT pour décrocher une admission dans les meilleures universités ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["concours", "orientation"]}
      next={{ label: "Commerce SESAME & ACCÈS", to: "/prepa-concours-sesame-acces" }}
    />
  );
}
