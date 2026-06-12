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

export default function PrepaConcoursUm6p() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · UM6P"
      accent="pink"
      title={<>Prépa Admission <span className="text-brand-teal">Ingénieur UM6P</span></>}
      subtitle="Réussir les épreuves de sélection et intégrer une université d'excellence"
      intro={[
        "L'Université Mohammed VI Polytechnique (UM6P) propose des programmes d'ingénierie d'excellence, accessibles dès le post-bac à travers un processus de sélection exigeant. Contrairement aux concours classiques, l'admission repose sur une approche globale combinant dossier académique, épreuves écrites et entretien de personnalité.",
        "L'UM6P recherche des profils capables de raisonner, d'analyser et de s'adapter à des situations nouvelles, dans un environnement académique inspiré des standards internationaux. Chez STUDASSIST, nous proposons une préparation spécifique, adaptée à cette logique de sélection.",
      ]}
      heroImage="/hero-sat-gmat.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      heroBadge="+6 ans d'expérience — 100 % d'admission dans le top 3 des écoles chaque année"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Ingé UM6P"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les enjeux et exigences de la sélection UM6P",
        lead: "Le processus de sélection de l'UM6P repose généralement sur une étude du dossier académique, des épreuves écrites et un entretien de motivation. L'objectif de ces épreuves n'est pas uniquement de tester les connaissances, mais la capacité du candidat à réfléchir et à s'adapter. Elles évaluent principalement :",
        bullets: [
          "La qualité du profil global : étude du dossier académique & entretien",
          "Le raisonnement logique",
          "Les capacités d'analyse",
          "La résolution de problèmes",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
        ],
      }}

      sections={[
        {
          title: "Une sélection fondée sur le profil",
          paragraphs: [
            "L'UM6P accorde une importance particulière à la qualité du profil du candidat. Les résultats académiques, la capacité de réflexion, la curiosité intellectuelle et la cohérence du projet sont autant d'éléments déterminants que nous construisons dans le cadre de l'accompagnement en orientation.",
            "Une préparation efficace permet de structurer son profil et de se positionner de manière pertinente.",
          ],
        },
        {
          title: "Une préparation ciblée et orientée performance dans un véritable esprit de sélection",
          paragraphs: [
            "Chez STUDASSIST, nous proposons une préparation spécifique à l'UM6P, adaptée à la nature des épreuves. Nos sessions permettent de travailler : le raisonnement logique et les tests psychotechniques, la résolution de problèmes, la rapidité d'analyse et la gestion du temps.",
            "Notre approche repose sur : des exercices ciblés inspirés des formats de sélection, des entraînements progressifs et des mises en situation en temps limité.",
            "L'objectif est de développer des réflexes de rapidité, de logique et d'efficacité. Pour leur permettre de se démarquer, nous accompagnons les élèves dans le développement de leur capacité à : raisonner rapidement, prioriser les questions, gérer le stress et optimiser leur performance.",
          ],
        },
        {
          title: "Préparer l'entretien et valoriser son profil",
          paragraphs: [
            "L'entretien constitue une étape clé du processus de sélection. Nous accompagnons les élèves dans : la structuration de leur discours, la présentation de leur parcours et la mise en cohérence de leur projet.",
            "Des simulations permettent de gagner en assurance et en clarté.",
          ],
        },
        {
          title: "À qui s'adresse la préparation du dossier UM6P ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves de Terminale souhaitant intégrer les programmes d'ingénierie de l'UM6P et optimiser leur candidature dans le cadre d'un processus de sélection exigeant et multidimensionnel.",
          ],
          bullets: [
            "Valoriser leur dossier académique et renforcer leur candidature",
            "Développer leurs capacités de raisonnement logique et d'analyse",
            "Se préparer aux épreuves de sélection et aux tests psychotechniques",
            "Structurer un projet académique cohérent et ambitieux",
            "Préparer efficacement leur entretien de motivation",
            "Gagner en confiance dans la présentation de leur parcours et de leurs objectifs",
            "Intégrer une université d'excellence inspirée des standards internationaux",
            "Maximiser leurs chances d'admission dans l'un des programmes les plus sélectifs du Maroc",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Une approche adaptée à la logique de sélection de l'UM6P",
          "Une préparation spécifique aux tests de raisonnement",
          "Une logique globale pour construire un dossier solide : académique, méthodologique et humaine",
          "Des experts de l'orientation et des admissions sélectives avec une parfaite maîtrise des stratégies d'admission",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez optimiser vos chances d'intégrer l'UM6P ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Ingé Avenir – Geipi – Puissance Alpha", to: "/prepa-concours-avenir-geipi-puissance-alpha" }}
      next={{ label: "Médecine Maroc", to: "/prepa-medecine-maroc" }}
    />
  );
}
