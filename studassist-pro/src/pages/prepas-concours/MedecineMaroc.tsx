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

export default function PrepaMedecineMaroc() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · Médecine-Maroc"
      accent="pink"
      title={<>Prépa <span className="text-brand-teal">Médecine Maroc</span> Systèmes Public & Privé</>}
      subtitle="Réussir les sélections et intégrer les études de médecine au Maroc"
      intro={[
        "Les études de médecine au Maroc, qu'elles soient dans le secteur public ou privé, figurent parmi les parcours les plus sélectifs et exigeants. Chaque année, un grand nombre d'élèves candidats se présentent, pour un nombre de places limité.",
        "L'accès à ces formations repose sur des critères de sélection rigoureux, nécessitant une préparation sérieuse, structurée et anticipée. Chez STUDASSIST, nous accompagnons les élèves dans la préparation aux différentes voies d'accès à la médecine au Maroc.",
      ]}
      heroImage="/hero-sat-gmat.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Médecine Maroc"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux de l'admission en médecine au Maroc",
        lead: "Les études de médecine figurent parmi les filières les plus sélectives au Maroc. L'admission repose à la fois sur la qualité du dossier académique et sur la réussite aux épreuves de sélection, exigeant des candidats un haut niveau scientifique, une préparation rigoureuse et une forte capacité de travail.",
        bullets: [
          "Excellence scientifique : les matières scientifiques constituent le socle de la sélection et nécessitent un haut niveau de maîtrise",
          "Performance académique : les résultats scolaires jouent un rôle déterminant dans les phases de présélection et l'évaluation du dossier",
          "Réussite au concours : les candidats doivent démontrer leur capacité à performer dans un environnement compétitif et sous contrainte de temps",
          "Sélectivité de l'admission : chaque année, un nombre important de candidats se présente pour un nombre limité de places",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
        ],
      }}

      sections={[
        {
          title: "Comprendre le système de sélection des études de médecine au Maroc",
          paragraphs: [
            "Médecine publique — L'accès aux facultés de médecine publiques repose sur une sélection en deux étapes : une présélection sur dossier, basée sur les résultats académiques (notamment les matières scientifiques), puis un concours écrit national, généralement sous forme de QCM. Seuls les candidats retenus à l'issue de la présélection sont autorisés à passer le concours. Cette présélection repose sur un seuil d'admissibilité, fixé chaque année en fonction du niveau des candidats et du nombre de places disponibles. La sélection finale repose sur la performance au concours, dans un contexte de forte compétitivité.",
            "Médecine privée — Les universités privées de médecine au Maroc proposent des processus d'admission incluant généralement : étude du dossier académique, tests écrits (sciences, logique, parfois anglais) et entretien de motivation. Ces processus demandent une préparation spécifique, à la fois académique et méthodologique. Là aussi, un niveau académique minimum est attendu, constituant un seuil implicite de sélection. Les établissements les plus sélectifs exigent des dossiers solides, notamment dans les matières scientifiques.",
            "Un enjeu déterminant pour le projet d'études — Intégrer une faculté de médecine au Maroc nécessite un niveau d'excellence académique et une forte capacité de travail. La double sélection (dossier et concours) impose aux élèves d'être performants sur la durée, tout en étant capables de se démarquer le jour de l'épreuve. Une préparation structurée permet d'optimiser ses résultats académiques, de réussir les différentes étapes de sélection et de sécuriser son admission. Elle constitue également une occasion de confirmer la cohérence de son projet d'orientation, de s'assurer que les études médicales correspondent réellement à ses aspirations et de construire un parcours aligné avec ses objectifs académiques et professionnels.",
            "Quel profil pour réussir ? — Les élèves admis présentent généralement : un excellent niveau dans les matières scientifiques (Mathématiques, SVT, Physique-Chimie), de la rigueur et de la régularité dans le travail, une forte capacité de concentration et d'endurance, une motivation claire pour les études médicales. La capacité à maintenir un haut niveau de performance dans le temps, tout en se préparant efficacement au concours, est déterminante.",
          ],
        },
        {
          title: "Une préparation ciblée avec une méthodologie orientée performance",
          paragraphs: [
            "Quand commencer à se préparer ? — La préparation à la médecine doit être anticipée. Idéalement dès la classe de Première, pour consolider les bases scientifiques, et en Terminale, pour optimiser les résultats et préparer activement le concours. Commencer tôt permet d'aborder les échéances avec méthode et sérénité.",
            "Une préparation structurée et adaptée — Chez STUDASSIST, nous proposons une préparation complète, adaptée aux exigences du système marocain. Les élèves sont accompagnés en petits groupes de 8 maximum, garantissant un encadrement de qualité, un suivi précis et une progression rapide. Nous veillons à créer une dynamique de groupe fondée sur l'entraide, le sérieux et le dépassement collectif. Notre accompagnement combine : des séances hebdomadaires régulières sur la durée, pour consolider les fondamentaux scientifiques et améliorer les résultats scolaires, et des stages intensifs pendant les vacances scolaires, pour se préparer efficacement au concours et s'entraîner en conditions réelles.",
            "Une méthodologie orientée performance — Notre préparation repose sur une approche structurée : révision approfondie des notions clés (Mathématiques, SVT et Physique-Chimie), exercices d'application ciblés, entraînements réguliers et simulations de concours en conditions réelles. Cette méthode permet d'optimiser à la fois le dossier académique et la performance au concours.",
          ],
        },
        {
          title: "Un accompagnement en continu par des enseignants experts des épreuves",
          paragraphs: [
            "Un accompagnement qui se prolonge dans le temps — Chez STUDASSIST, la préparation ne s'arrête pas à la fin des sessions. Nous restons en contact avec nos élèves, leur fournissons des contenus complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent également venir s'entraîner à tout moment dans notre espace.",
            "Un encadrement par des enseignants spécialisés — Les élèves sont accompagnés par des enseignants spécialisés en matières scientifiques, maîtrisant parfaitement les exigences de l'examen d'entrée en médecine au Maroc.",
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation des concours de médecine au Maroc",
          paragraphs: [
            "Développer un véritable esprit concours — La réussite à la médecine repose autant sur les résultats scolaires que sur la capacité à performer le jour du concours. Nous accompagnons les élèves dans le développement de leur : gestion du temps, gestion du stress, stratégie de réponse aux questions et QCM, capacité à prioriser et optimiser leur score.",
            "Une dynamique de groupe stimulante — Les élèves sont accompagnés en petits groupes de 8 maximum, afin de garantir un encadrement de qualité, un suivi précis et une progression rapide. Nous veillons à créer une véritable dynamique de groupe, fondée sur l'entraide, l'échange et le dépassement collectif. Les élèves évoluent dans un environnement exigeant et bienveillant, où l'entraide et le challenge permettent à chacun de progresser durablement.",
            "Préparer les entretiens de la médecine privée — Pour les écoles privées, nous accompagnons également les élèves dans la structuration de leur discours quant à leur projet professionnel et la préparation aux entretiens de motivation au travers de simulations filmées.",
          ],
        },
        {
          title: "À qui s'adresse la préparation du concours de médecine au Maroc ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves souhaitant intégrer les études de médecine au Maroc, dans le secteur public ou privé. Elle est particulièrement adaptée aux élèves qui souhaitent :",
          ],
          bullets: [
            "Construire un projet d'études médicales solide et cohérent",
            "Confirmer leur intérêt pour les études de médecine et s'assurer que cette voie correspond réellement à leurs aspirations",
            "Poursuivre des études de médecine exigeantes et reconnues au Maroc, tout en conservant la proximité et le soutien de leur environnement familial",
            "Renforcer leurs résultats en Mathématiques, SVT et Physique-Chimie",
            "Optimiser leur dossier académique en vue des présélections",
            "Se préparer efficacement aux concours d'admission",
            "Développer leurs capacités de raisonnement et leur gestion du temps",
            "Préparer les entretiens de motivation des établissements privés",
            "Acquérir une méthode de travail rigoureuse et durable",
            "Maximiser leurs chances d'intégrer la faculté de médecine de leur choix",
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
          "Un accompagnement global : dossier + concours + entretiens",
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
        body: "Vous souhaitez optimiser vos chances d'admission en médecine au Maroc ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Ingé UM6P", to: "/prepa-concours-um6p" }}
      next={{ label: "Médecine Belgique", to: "/prepa-medecine-belgique" }}
    />
  );
}
