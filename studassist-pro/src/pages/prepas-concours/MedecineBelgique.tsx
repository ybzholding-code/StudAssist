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

export default function PrepaMedecineBelgique() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · Médecine-Belgique"
      accent="pink"
      title={<>Prépa <span className="text-brand-teal">Médecine Belgique</span></>}
      subtitle="Intégrer la médecine en Belgique"
      intro={[
        "Les études de médecine en Belgique attirent chaque année de nombreux étudiants internationaux, en raison de la qualité de l'enseignement et de l'accès direct aux études médicales après le baccalauréat. Cependant, l'accès est strictement encadré et très sélectif, notamment pour les étudiants non-résidents.",
        "Chez STUDASSIST, nous proposons un accompagnement structuré et stratégique, permettant aux élèves de comprendre les exigences du système belge et de maximiser leurs chances d'admission.",
      ]}
      heroImage="/hero-sat-gmat.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Médecine Belgique"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux et exigences du concours de médecine en Belgique",
        lead: "Réussir l'admission en médecine en Belgique ne dépend pas uniquement des résultats scolaires. Les candidats doivent démontrer de solides connaissances scientifiques, une capacité de raisonnement efficace et une aptitude à performer dans un environnement particulièrement sélectif.",
        bullets: [
          "Maîtrise des connaissances scientifiques : démontrer une solide compréhension de la biologie, de la chimie et de la physique",
          "Capacité de raisonnement : analyser rapidement des situations complexes et mobiliser ses connaissances de manière pertinente",
          "Gestion du temps : répondre efficacement à un volume important de questions dans un temps limité",
          "Sélectivité de l'admission : se démarquer dans un processus d'accès particulièrement compétitif pour les étudiants non-résidents",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
        ],
      }}

      sections={[
        {
          title: "Comprendre le système de sélection des études de médecine en Belgique",
          paragraphs: [
            "Un examen exigeant et structurant — L'examen d'entrée en médecine en Belgique évalue à la fois : les connaissances scientifiques (biologie, chimie, physique…), les capacités de raisonnement, la compréhension et l'analyse, et les compétences en communication. Il ne s'agit pas uniquement d'un test académique, mais d'une évaluation globale du profil du candidat.",
            "Le processus d'admission en Belgique — L'accès aux études de médecine en Belgique repose sur un processus spécifique, différent des systèmes français ou marocain. Pour les étudiants non-résidents, l'admission est soumise à plusieurs étapes : dépôt de candidature, participation à un tirage au sort (quota non-résidents défini à chaque année universitaire) et réussite d'un examen d'entrée obligatoire qui constitue l'étape clé du processus.",
            "Quel profil pour réussir ? — Les étudiants admis présentent généralement un profil académique solide et régulier. La réussite à cet examen repose sur : un bon niveau en sciences (biologie, chimie, physique), une capacité de raisonnement et d'analyse, de la rigueur et de la régularité dans le travail, et une forte motivation pour les études médicales. Au-delà des résultats scolaires, la capacité à travailler efficacement sous pression et à structurer ses réponses est déterminante.",
            "Un enjeu déterminant pour le projet d'études — L'accès aux études de médecine en Belgique représente une opportunité stratégique pour de nombreux élèves. Cependant, la sélectivité du processus impose une préparation rigoureuse et anticipée. Une bonne préparation permet de sécuriser ses chances de réussite, mieux appréhender les exigences de l'examen et structurer son projet d'études. Elle constitue également une occasion de confirmer la cohérence de son projet d'orientation, de s'assurer que les études médicales correspondent réellement à ses aspirations et de construire un parcours aligné avec ses objectifs académiques et professionnels. Enfin, les études de médecine en Belgique impliquent plusieurs démarches administratives spécifiques, notamment la demande d'équivalence du baccalauréat et le respect d'un calendrier précis de candidature. Notre accompagnement permet également d'anticiper ces étapes afin d'aborder sereinement l'ensemble du processus d'admission.",
          ],
        },
        {
          title: "Une préparation ciblée avec une méthodologie orientée performance",
          paragraphs: [
            "Quand commencer à se préparer ? — La préparation à la médecine en Belgique doit être anticipée. Idéalement dès la classe de Première, pour consolider les bases scientifiques, puis en Terminale, pour intensifier les entraînements et se préparer sereinement à l'examen. Commencer tôt permet d'acquérir les bons automatismes, de progresser sereinement et d'aborder l'examen avec confiance.",
            "Une préparation structurée et adaptée — Chez STUDASSIST, nous proposons une préparation qui s'inscrit dans la durée, tout en s'adaptant aux échéances des élèves à travers : des séances hebdomadaires régulières, permettant de consolider progressivement les bases scientifiques et de travailler en profondeur, et des stages intensifs pendant les vacances scolaires, pour accélérer la progression et s'entraîner en conditions proches de l'examen. Cette double approche permet d'allier continuité, rigueur et montée en puissance à l'approche des épreuves.",
            "Une méthodologie orientée performance — Notre préparation repose sur une approche structurée : révision des fondamentaux scientifiques, exercices d'application ciblés, entraînements progressifs et simulations en conditions réelles. Cette méthode permet de développer rigueur, rapidité et efficacité.",
          ],
        },
        {
          title: "Un accompagnement en continu par des enseignants experts des épreuves",
          paragraphs: [
            "Un accompagnement qui se prolonge dans le temps — Chez STUDASSIST, la préparation ne s'arrête pas à la fin des sessions. Nous restons en contact avec nos élèves, leur fournissons des contenus complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent également revenir s'entraîner à tout moment dans notre espace.",
            "Un encadrement par des enseignants spécialisés — Les élèves sont accompagnés par des enseignants spécialisés en matières scientifiques, maîtrisant parfaitement les exigences de l'examen d'entrée en médecine en Belgique.",
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation du concours de médecine en Belgique",
          paragraphs: [
            "Développer un véritable esprit concours — La réussite à l'examen d'entrée repose autant sur les connaissances que sur la capacité à performer. Nous accompagnons les élèves dans le développement de leur : gestion du temps, gestion du stress, stratégie de réponse et capacité à prioriser. L'objectif est de maximiser les performances le jour de l'épreuve.",
            "Une dynamique de groupe stimulante — Les élèves sont accompagnés en petits groupes de 8 maximum, afin de garantir un encadrement de qualité, un suivi précis et une progression rapide. Nous veillons à créer une véritable dynamique de groupe, fondée sur l'entraide, l'échange et le dépassement collectif. Les élèves évoluent dans un environnement exigeant et bienveillant, où l'entraide et le challenge permettent à chacun de progresser durablement.",
          ],
        },
        {
          title: "À qui s'adresse la préparation du concours de médecine en Belgique ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves de Première et de Terminale souhaitant intégrer des études de médecine en Belgique et anticiper les différentes étapes du processus d'admission.",
          ],
          bullets: [
            "Construire un projet d'études médicales solide et cohérent",
            "Confirmer leur intérêt pour les études de médecine et s'assurer que cette voie correspond réellement à leurs aspirations",
            "Renforcer leurs connaissances en biologie, chimie et physique",
            "Développer leurs capacités de raisonnement et d'analyse",
            "Acquérir les méthodes attendues à l'examen d'entrée",
            "Se préparer dans un cadre structuré et progressif",
            "Développer leur gestion du temps et leur capacité à performer sous pression",
            "Maximiser leurs chances de réussite à l'examen d'entrée",
            "Intégrer une faculté de médecine reconnue en Belgique",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation du concours de médecine en Belgique ?",
        bullets: [
          "Une parfaite maîtrise des épreuves du concours belge et de leurs spécificités grâce à des enseignants experts",
          "Une préparation orientée score avec des stratégies de performances éprouvées et un véritable esprit concours",
          "Des petits groupes à effectif réduit (8 élèves max) avec un suivi personnalisé",
          "Des concours blancs en conditions réelles pour développer les bons réflexes et automatismes",
          "Un accompagnement global : dossier + concours + démarches d'équivalence",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez optimiser vos chances de décrocher le concours de médecine en Belgique ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Médecine Maroc", to: "/prepa-medecine-maroc" }}
      next={{ label: "Sciences Po", to: "/prepa-sciences-po" }}
    />
  );
}
