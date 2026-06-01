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

export default function PrepaConcoursSesameAcces() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · SESAME-ACCÈS"
      accent="pink"
      title={<>Prépa Concours <span className="text-brand-teal">SESAME & ACCÈS</span></>}
      subtitle="Intégrer les meilleures écoles de commerce post-bac en France"
      intro={[
        "Les concours SESAME et ACCÈS constituent les principales voies d'accès aux écoles de commerce post-bac en France. Ils permettent d'intégrer des établissements reconnus, tels que l'ESSEC Global BBA, l'EM Lyon, l'IESEG, l'ESSCA, ou encore KEDGE, SKEMA et NEOMA.",
        "Ces concours sont exigeants et sélectifs. Ils évaluent à la fois les capacités de raisonnement, la maîtrise de l'anglais, la compréhension et la méthodologie. Chez STUDASSIST, nous proposons une préparation structurée et intensive, permettant aux élèves de maîtriser les épreuves et de maximiser leurs chances d'admission.",
      ]}
      heroImage="/hero-concours-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="SESAME & ACCÈS"
      enjeuxEyebrow="Comprendre les exigences"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les exigences des concours",
        lead: "Les concours SESAME et ACCÈS reposent sur des épreuves écrites conçues pour évaluer :",
        bullets: [
          "Le raisonnement logique et numérique",
          "La compréhension et l'analyse de textes",
          "La capacité de synthèse",
          "Le niveau d'anglais",
          "Rapidité, précision et maîtrise des formats",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation intensive et ciblée",
          paragraphs: [
            "Nous organisons des sessions intensives, principalement pendant les vacances scolaires, afin de permettre aux élèves de se concentrer pleinement sur leur préparation. Les groupes sont limités à 8 élèves maximum, garantissant un encadrement de qualité et une progression rapide.",
            "Les plannings sont adaptés en fonction des échéances et des disponibilités de nos élèves.",
          ],
        },
        {
          title: "Une méthodologie orientée performance",
          paragraphs: [
            "Notre préparation repose sur une approche concrète et efficace : travail sur les typologies d'épreuves, exercices d'application ciblés, entraînements progressifs et concours blancs en conditions réelles.",
            "Cette méthode permet de développer des automatismes et d'optimiser la gestion du temps.",
          ],
        },
        {
          title: "Développer un véritable esprit concours",
          paragraphs: [
            "Au-delà de la maîtrise des exercices types, nous accompagnons les élèves dans le développement d'un véritable esprit concours qui leur servira pour toute la suite de leur cursus supérieur.",
            "Nous travaillons sur la gestion du temps, la gestion du stress, les stratégies de réponse et la capacité à prioriser pour optimiser son score. L'objectif est de permettre à chaque élève de performer face aux autres candidats.",
          ],
        },
        {
          title: "Une dynamique de groupe stimulante",
          paragraphs: [
            "Les sessions en petits groupes permettent de créer une véritable dynamique collective. Nous encourageons une approche collaborative, où les élèves échangent, se challengent et s'améliorent mutuellement, favorisant une progression plus rapide et durable.",
          ],
        },
        {
          title: "Un accompagnement qui se prolonge dans le temps",
          paragraphs: [
            "La préparation ne s'arrête pas à la fin des sessions. Nous restons en contact avec nos élèves, leur fournissons des contenus d'entraînement complémentaires et restons disponibles pour les accompagner jusqu'aux échéances. Les élèves peuvent également revenir s'entraîner à tout moment dans notre espace.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cette préparation ?",
        groups: [{
          title: "Élèves de Terminale",
          bullets: [
            "visant les écoles de commerce post-bac en France (ESSEC BBA, EM Lyon, IESEG, ESSCA, KEDGE, SKEMA, NEOMA),",
            "souhaitant maîtriser les formats SESAME et ACCÈS,",
            "cherchant à développer un esprit concours,",
            "recherchant un encadrement intensif et stratégique.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Une maîtrise fine des épreuves SESAME & ACCÈS",
          "Une approche orientée performance et optimisation du score",
          "Groupes limités à 8 élèves maximum",
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
        body: "Vous souhaitez performer aux concours SESAME & ACCÈS ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["concours", "orientation"]}
      prev={{ label: "SAT / GMAT", to: "/prepa-sat-gmat" }}
      next={{ label: "Commerce ENCG & ISCAE", to: "/prepa-concours-encg-iscae" }}
    />
  );
}
