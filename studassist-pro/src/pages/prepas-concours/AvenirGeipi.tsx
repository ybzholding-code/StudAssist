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

export default function PrepaConcoursAvenirGeipi() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · Avenir-Geipi"
      accent="pink"
      title={<>Prépa Concours <span className="text-brand-teal">Ingénieur France</span></>}
      subtitle="Réussir les concours et intégrer les meilleures écoles d'ingénieurs post-bac"
      intro={[
        "Les concours Avenir, Geipi Polytech et Puissance Alpha constituent les principales voies d'accès aux écoles d'ingénieurs post-bac en France. Ils permettent d'intégrer des établissements reconnus tels que EPITA, ESILV, ECE, ESIGELEC, les écoles du réseau Polytech ou encore CY Tech.",
        "Ces concours sont sélectifs et nécessitent une préparation rigoureuse, combinant maîtrise des fondamentaux scientifiques, méthodologie et gestion du temps. Chez STUDASSIST, nous proposons une préparation structurée et intensive, permettant aux élèves de maximiser leurs performances et leurs chances d'admission.",
      ]}
      heroImage="/hero-concours-new.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Ingé France"
      enjeuxEyebrow="Comprendre les exigences"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les exigences des concours",
        lead: "Les concours d'ingénieurs post-bac reposent sur des épreuves écrites (QCM ou exercices) conçues pour évaluer :",
        bullets: [
          "Les compétences en mathématiques",
          "Les connaissances en physique-chimie",
          "Le raisonnement logique",
          "La capacité à résoudre des problèmes rapidement",
          "Les compétences linguistiques (anglais)",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/calculator.png",
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation intensive et ciblée",
          paragraphs: [
            "Nous organisons des sessions intensives, principalement pendant les vacances scolaires. Les groupes sont limités à 8 élèves maximum, garantissant un encadrement exigeant et une progression rapide.",
            "Les plannings sont adaptés en fonction des échéances et des disponibilités.",
          ],
        },
        {
          title: "Une méthodologie orientée performance",
          paragraphs: [
            "Notre préparation repose sur : travail approfondi des fondamentaux scientifiques, exercices d'application ciblés, entraînements progressifs et concours blancs en conditions réelles.",
            "Avantage stratégique : les exercices d'approfondissement scientifiques contribuent directement à la réussite aux épreuves de spécialité du Baccalauréat, notamment en mathématiques et physique-chimie. Les élèves consolident ainsi leur niveau académique tout en se préparant efficacement aux concours.",
          ],
        },
        {
          title: "Développer un véritable esprit concours",
          paragraphs: [
            "Au-delà des connaissances, la réussite repose sur la capacité à performer dans un environnement exigeant. Nous accompagnons les élèves dans le développement d'un esprit concours : gestion du temps, gestion du stress, stratégies de réponse et capacité à prioriser les exercices.",
            "L'objectif est de maximiser le score et de faire la différence face aux autres candidats.",
          ],
        },
        {
          title: "Une dynamique de groupe stimulante",
          paragraphs: [
            "Les sessions en petits groupes permettent de créer une dynamique collective de travail, favorisant l'entraide, le challenge et la progression. Les élèves évoluent dans un environnement stimulant, propice à la performance.",
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
          title: "Élèves de Terminale",
          bullets: [
            "visant les écoles d'ingénieurs post-bac en France (Avenir, Geipi, Puissance Alpha),",
            "souhaitant renforcer leur niveau en maths et physique-chimie,",
            "cherchant à développer un esprit concours,",
            "recherchant un encadrement intensif et rigoureux.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Une maîtrise fine des épreuves Avenir, Geipi et Puissance Alpha",
          "Double bénéfice : prépa concours + prépa Bac spécialités",
          "Groupes limités à 8 élèves maximum",
          "Des concours blancs en conditions réelles",
          "+6 ans d'expérience dans la préparation",
          "100% de nos élèves admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez performer aux concours d'ingénieurs en France ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["concours", "orientation"]}
      prev={{ label: "Commerce ENCG & ISCAE", to: "/prepa-concours-encg-iscae" }}
      next={{ label: "Ingé UM6P", to: "/prepa-concours-um6p" }}
    />
  );
}
