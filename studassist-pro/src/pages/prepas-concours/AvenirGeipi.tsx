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
      eyebrow="PRÉPAS CONCOURS - AVENIR - GEIPI POLYTECH - PUISSANCE ALPHA"
      accent="pink"
      title={<>Prépa Concours des <span className="text-brand-teal">Écoles d'Ingénieurs en France</span></>}
      subtitle="Réussir les concours et intégrer les meilleures écoles d'ingénieurs post-bac"
      intro={[
        "Les concours Avenir, Geipi Polytech et Puissance Alpha constituent les principales voies d'accès aux écoles d'ingénieurs post-bac en France. Ils permettent d'intégrer des établissements reconnus tels que EPITA, ESILV, ECE, ESIGELEC, les écoles du réseau Polytech ou encore CY Tech.",
        "Ces concours sont sélectifs et nécessitent une préparation rigoureuse, combinant maîtrise des fondamentaux scientifiques, méthodologie et gestion du temps. Chez STUDASSIST, nous proposons une préparation structurée et intensive, permettant aux élèves de maximiser leurs performances et leurs chances d'admission.",
      ]}
      heroImage="/hero-sat-gmat.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Ingé France"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux et exigences des concours GEIPI Polytech - Puissance Alpha - Avenir - Advance",
        lead: "Les concours d'ingénieurs post-bac reposent sur des épreuves écrites, généralement sous forme de QCM. Ces épreuves qui demandent précision, rapidité et rigueur, ainsi qu'une bonne compréhension des consignes, sont conçues pour évaluer :",
        bullets: [
          "Les compétences en mathématiques",
          "Les connaissances en physique-chimie",
          "Le raisonnement logique",
          "La capacité à résoudre des problèmes rapidement",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/calculator.png",
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation ciblée avec une méthodologie orientée performance",
          paragraphs: [
            "Un enjeu stratégique pour l'orientation — Les résultats obtenus à ces concours jouent un rôle déterminant dans l'accès aux écoles d'ingénieurs. Ils s'inscrivent dans une évaluation globale du dossier, incluant les notes de contrôle continu, les appréciations scolaires, mais aussi les activités & centres d'intérêts et les lettres de motivation dans le cadre du projet d'orientation scolaire. Une préparation efficace permet de sécuriser son admission et de viser les écoles les plus sélectives.",
            "Une préparation intensive et ciblée — Chez STUDASSIST, nous organisons des sessions intensives, principalement pendant les vacances scolaires, afin de permettre aux élèves de se concentrer pleinement sur leur préparation. Les groupes sont limités à 8 élèves maximum, garantissant un encadrement exigeant et une progression rapide. Les plannings sont adaptés en fonction des échéances et des disponibilités.",
            "Une méthodologie orientée performance — Notre préparation repose sur une approche concrète et efficace : travail approfondi des fondamentaux scientifiques, exercices d'application ciblés, entraînements progressifs et concours blancs en conditions réelles. Cette approche permet de renforcer la maîtrise des notions tout en développant rapidité et efficacité. Elle présente également un avantage stratégique : les exercices d'approfondissement scientifique travaillés dans le cadre de la préparation aux concours contribuent directement à la réussite aux épreuves de spécialité du Baccalauréat, notamment en mathématiques et en physique-chimie. Les élèves consolident ainsi leur niveau académique tout en se préparant efficacement aux concours.",
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation de ces concours",
          paragraphs: [
            "Développer un véritable esprit concours — Au-delà des connaissances, la réussite à ces concours repose sur la capacité à performer dans un environnement exigeant. Nous accompagnons les élèves dans le développement d'un esprit concours, en travaillant sur la gestion du temps, la gestion du stress, les stratégies de réponse et la capacité à prioriser les exercices. L'objectif est de maximiser le score et de faire la différence face aux autres candidats.",
            "Une dynamique de groupe stimulante — Les sessions en petits groupes permettent de créer une dynamique collective de travail, favorisant l'entraide, le challenge et la progression. Les élèves évoluent dans un environnement stimulant, propice à la performance.",
          ],
        },
        {
          title: "Un accompagnement en continu par des enseignants experts des épreuves",
          paragraphs: [
            "Un accompagnement qui se prolonge dans le temps — Chez STUDASSIST, la préparation ne s'arrête pas à la fin des sessions. Nous restons en contact avec nos élèves, leur fournissons des contenus d'entraînements complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent également revenir s'entraîner à tout moment dans notre espace.",
            "Un encadrement par des enseignants spécialisés — Les élèves sont accompagnés par des enseignants spécialisés en mathématiques et en sciences, maîtrisant parfaitement les exigences des concours d'ingénieurs. Leur accompagnement permet d'apporter rigueur, méthode et efficacité.",
          ],
        },
        {
          title: "À qui s'adresse la préparation des concours d'écoles d'ingénieurs post-bac en France ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves de Terminale souhaitant intégrer les principales écoles d'ingénieurs post-bac en France via les concours Avenir, Geipi Polytech, Puissance Alpha ou Advance.",
          ],
          bullets: [
            "Intégrer une école d'ingénieurs reconnue en France",
            "Renforcer leurs compétences en mathématiques, physique-chimie et raisonnement logique",
            "Développer les méthodes et les réflexes attendus dans les concours scientifiques",
            "Améliorer leur rapidité d'exécution et leur gestion du temps",
            "Se préparer efficacement à des épreuves sélectives et compétitives",
            "Consolider leur niveau dans les spécialités scientifiques du Baccalauréat",
            "Développer un véritable esprit concours et apprendre à performer sous pression",
            "Maximiser leurs chances d'admission dans les écoles les plus recherchées",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Une parfaite maîtrise des épreuves scientifiques et de leurs spécificités grâce à des enseignants experts",
          "Une préparation orientée score avec des stratégies de performances éprouvées et un véritable esprit concours",
          "Des petits groupes à effectif réduit (10 élèves max) avec un suivi personnalisé",
          "Des concours blancs en conditions réelles pour développer les bons réflexes et automatismes",
          "Une préparation à la fois utile pour les concours blancs et pour les révisions des épreuves du baccalauréat",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
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

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Commerce ENCG & ISCAE", to: "/prepa-concours-encg-iscae" }}
      next={{ label: "Ingé UM6P", to: "/prepa-concours-um6p" }}
    />
  );
}
