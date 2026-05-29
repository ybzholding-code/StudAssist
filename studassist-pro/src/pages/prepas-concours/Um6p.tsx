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
      heroImage="/hero-concours-new.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Ingé UM6P"
      enjeuxEyebrow="Comprendre la sélection"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les exigences de la sélection UM6P",
        lead: "Le processus de sélection repose sur plusieurs étapes et évalue principalement :",
        bullets: [
          "Le raisonnement logique",
          "Les capacités d'analyse",
          "La résolution de problèmes",
          "La compréhension rapide",
          "La qualité du profil global (dossier + entretien)",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation ciblée et orientée performance",
          paragraphs: [
            "Nous proposons une préparation spécifique à l'UM6P, adaptée à la nature des épreuves : raisonnement logique et tests psychotechniques, résolution de problèmes, rapidité d'analyse et gestion du temps.",
            "Notre approche repose sur des exercices ciblés inspirés des formats de sélection, des entraînements progressifs et des mises en situation en temps limité.",
          ],
        },
        {
          title: "Développer un véritable esprit de sélection",
          paragraphs: [
            "L'objectif est de développer des réflexes de rapidité, de logique et d'efficacité. Nous accompagnons les élèves dans le développement de leur capacité à raisonner rapidement, prioriser les questions, gérer le stress et optimiser leur performance.",
          ],
        },
        {
          title: "Préparer l'entretien et valoriser son profil",
          paragraphs: [
            "L'entretien constitue une étape clé du processus de sélection. Nous accompagnons les élèves dans la structuration de leur discours, la présentation de leur parcours et la mise en cohérence de leur projet.",
            "Des simulations permettent de gagner en assurance et en clarté.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cette préparation ?",
        groups: [{
          title: "Élèves visant l'UM6P",
          bullets: [
            "souhaitant intégrer les programmes d'ingénierie de l'UM6P,",
            "ayant un bon profil académique et souhaitant se démarquer,",
            "cherchant à maîtriser les épreuves de raisonnement et psychotechniques,",
            "recherchant un accompagnement pour l'entretien de personnalité.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Une préparation spécifique au processus de sélection UM6P",
          "Travail sur les épreuves + structuration du profil + entretien",
          "Une logique globale : académique, méthodologique et humaine",
          "Des simulations d'entretien pour gagner en assurance",
          "+6 ans d'expérience dans la préparation",
          "100% de nos élèves admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/university.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
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

      faqKeys={["concours", "orientation"]}
      prev={{ label: "Ingé Avenir – Geipi – Puissance Alpha", to: "/prepa-concours-avenir-geipi-puissance-alpha" }}
      next={{ label: "Médecine Maroc", to: "/prepa-medecine-maroc" }}
    />
  );
}
