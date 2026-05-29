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
        "Les Écoles Nationales d'Architecture (ENA) au Maroc forment les futurs architectes à travers un cursus exigeant, alliant créativité, rigueur et réflexion. L'accès à ces écoles se fait via un concours sélectif, qui évalue autant les capacités académiques que le potentiel créatif des candidats.",
        "Chez STUDASSIST, nous proposons une préparation spécifique, permettant aux élèves de développer les compétences attendues et de maximiser leurs chances d'admission.",
      ]}
      heroImage="/hero-concours-new.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Architecture ENA"
      enjeuxEyebrow="Comprendre les exigences"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les exigences du concours ENA",
        lead: "Le concours d'entrée en architecture évalue :",
        bullets: [
          "Les capacités de raisonnement",
          "La culture générale",
          "La sensibilité artistique",
          "La capacité à représenter et à imaginer",
          "Les épreuves graphiques (élément souvent déterminant)",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/paint-palette.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/pencil.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation structurée et adaptée",
          paragraphs: [
            "Les élèves sont accompagnés en petits groupes de 8 maximum, favorisant un suivi personnalisé et une progression rapide. Nous veillons à créer une dynamique de groupe stimulante, basée sur l'échange, l'inspiration et l'entraide.",
            "Notre accompagnement combine des séances régulières pour développer les bases en dessin et en réflexion, et des stages intensifs pendant les vacances pour s'entraîner en conditions proches du concours.",
          ],
        },
        {
          title: "Une méthodologie orientée progression",
          paragraphs: [
            "Notre préparation repose sur : exercices de dessin d'observation, travail sur la composition et l'espace, développement de la créativité et entraînements sur sujets type concours.",
            "Cette méthode permet de développer à la fois technique et confiance. La préparation doit idéalement être anticipée dès la Seconde ou Première.",
          ],
        },
        {
          title: "Développer un regard et une démarche",
          paragraphs: [
            "Réussir le concours ENA ne consiste pas uniquement à bien dessiner. Nous accompagnons les élèves dans le développement de leur capacité à observer et analyser, structurer une idée, exprimer une intention et défendre une proposition.",
            "L'objectif est de construire une véritable démarche créative.",
          ],
        },
        {
          title: "Une dynamique de groupe inspirante",
          paragraphs: [
            "Les élèves évoluent dans un environnement stimulant, où ils peuvent échanger leurs idées, s'inspirer les uns des autres et progresser ensemble. Cette dynamique favorise la créativité et l'engagement.",
          ],
        },
        {
          title: "Un accompagnement qui se prolonge dans le temps",
          paragraphs: [
            "Nous accompagnons les élèves dans la durée. Nous restons en contact, proposons des exercices complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent venir s'entraîner à tout moment dans notre espace.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cette préparation ?",
        groups: [{
          title: "Élèves intéressés par l'architecture",
          bullets: [
            "préparant le concours des Écoles Nationales d'Architecture (ENA),",
            "ayant un intérêt marqué pour l'architecture, le design ou l'art,",
            "souhaitant développer leurs compétences graphiques et créatives,",
            "en classe de Seconde, Première ou Terminale.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Préparation spécifique à la croisée de l'académique et du créatif",
          "Développement du potentiel artistique et de la démarche créative",
          "Groupes limités à 8 élèves maximum",
          "Intervenants expérimentés connaissant les exigences du concours",
          "+6 ans d'expérience dans la préparation",
          "100% de nos élèves admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/paint-palette.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez maximiser vos chances d'admission en architecture au Maroc ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["concours", "orientation"]}
      prev={{ label: "Sciences Po", to: "/prepa-sciences-po" }}
    />
  );
}
