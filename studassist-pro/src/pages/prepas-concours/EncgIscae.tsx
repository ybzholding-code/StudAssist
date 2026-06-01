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

export default function PrepaConcoursEncgIscae() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · ENCG-ISCAE"
      accent="pink"
      title={<>Prépa Concours <span className="text-brand-teal">ENCG & ISCAE</span></>}
      subtitle="Intégrer les meilleures écoles de commerce au Maroc"
      intro={[
        "Les concours ENCG et ISCAE constituent les principales voies d'accès aux écoles de commerce publiques les plus sélectives au Maroc. Ils permettent d'intégrer des formations reconnues pour leur exigence académique et leur forte employabilité.",
        "Ces concours sont compétitifs et demandent une préparation spécifique, alliant maîtrise des fondamentaux, rapidité d'exécution et méthodologie. Chez STUDASSIST, nous proposons une préparation structurée et intensive, permettant aux élèves de maximiser leurs chances d'admission.",
      ]}
      heroImage="/hero-concours-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="ENCG & ISCAE"
      enjeuxEyebrow="Comprendre les exigences"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les exigences des concours",
        lead: "Les concours ENCG et ISCAE reposent sur des épreuves conçues pour évaluer :",
        bullets: [
          "Le raisonnement logique et mathématique",
          "Les capacités d'analyse et de compréhension",
          "La culture générale",
          "La maîtrise du français et de l'anglais",
          "Rigueur, rapidité et capacité d'adaptation",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation intensive et ciblée",
          paragraphs: [
            "Nous organisons des sessions intensives, principalement pendant les vacances scolaires. Les groupes sont limités à 10 élèves maximum, garantissant un encadrement exigeant et une progression rapide.",
            "Les plannings sont adaptés en fonction des échéances et des disponibilités.",
          ],
        },
        {
          title: "Une méthodologie orientée performance",
          paragraphs: [
            "Notre préparation repose sur : travail sur les typologies d'épreuves, exercices d'application ciblés, entraînements progressifs et concours blancs en conditions réelles.",
            "Cette méthode permet de développer des automatismes et d'optimiser la gestion du temps.",
          ],
        },
        {
          title: "Développer un véritable esprit concours",
          paragraphs: [
            "Au-delà de la maîtrise des exercices types, nous accompagnons les élèves dans le développement d'un véritable esprit concours. Réussir ces épreuves implique de savoir se positionner face aux autres candidats.",
            "Nous travaillons sur la gestion du temps, la gestion du stress, les stratégies de réponse et la capacité à prioriser pour optimiser son score.",
          ],
        },
        {
          title: "Une dynamique de groupe stimulante",
          paragraphs: [
            "Les sessions en petits groupes favorisent une dynamique collective de travail. Nous encourageons l'échange, le challenge et l'entraide, afin de créer un environnement propice à la progression et à l'excellence.",
          ],
        },
        {
          title: "Un accompagnement qui se prolonge dans le temps",
          paragraphs: [
            "La préparation ne s'arrête pas à la fin des sessions. Nous restons en contact, fournissons des contenus d'entraînement complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent également revenir s'entraîner à tout moment dans notre espace.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cette préparation ?",
        groups: [{
          title: "Élèves visant les écoles de commerce publiques au Maroc",
          bullets: [
            "préparant les concours ENCG et/ou ISCAE,",
            "souhaitant maîtriser les formats d'épreuves,",
            "cherchant à développer un esprit concours,",
            "recherchant un encadrement intensif et structuré.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Une maîtrise fine des épreuves ENCG & ISCAE",
          "Une approche orientée performance et stratégie",
          "Groupes limités à 10 élèves maximum",
          "Des concours blancs en conditions réelles",
          "+6 ans d'expérience dans la préparation",
          "100% de nos élèves admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez performer aux concours ENCG & ISCAE ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["concours", "orientation"]}
      prev={{ label: "Commerce SESAME & ACCÈS", to: "/prepa-concours-sesame-acces" }}
      next={{ label: "Ingé Avenir – Geipi – Puissance Alpha", to: "/prepa-concours-avenir-geipi-puissance-alpha" }}
    />
  );
}
