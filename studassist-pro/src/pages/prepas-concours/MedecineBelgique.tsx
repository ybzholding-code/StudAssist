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
      subtitle="Réussir la sélection et intégrer des études de médecine en Belgique"
      intro={[
        "Les études de médecine en Belgique attirent chaque année de nombreux étudiants internationaux, en raison de la qualité de l'enseignement et de l'accès direct aux études médicales après le baccalauréat. Cependant, l'accès est strictement encadré et très sélectif, notamment pour les étudiants non-résidents.",
        "Chez STUDASSIST, nous proposons un accompagnement structuré et stratégique, permettant aux élèves de comprendre les exigences du système belge et de maximiser leurs chances d'admission.",
      ]}
      heroImage="/hero-concours-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Médecine Belgique"
      enjeuxEyebrow="Comprendre le système d'admission"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre le système d'admission en Belgique",
        lead: "L'accès aux études de médecine en Belgique repose sur un processus spécifique pour les non-résidents :",
        bullets: [
          "Dépôt de candidature + tirage au sort (quota non-résidents)",
          "Réussite d'un examen d'entrée obligatoire (étape clé)",
          "Évaluation : biologie, chimie, physique, raisonnement, communication",
          "Une évaluation globale du profil, pas uniquement académique",
          "Préparation idéalement dès la classe de Première",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/medal.png",
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation structurée et adaptée",
          paragraphs: [
            "Notre préparation s'inscrit dans la durée, avec des séances hebdomadaires régulières permettant de consolider progressivement les bases scientifiques et des stages intensifs pendant les vacances scolaires pour accélérer la progression.",
            "Cette double approche permet d'allier continuité, rigueur et montée en puissance à l'approche des épreuves.",
          ],
        },
        {
          title: "Une méthodologie orientée performance",
          paragraphs: [
            "Notre préparation repose sur : révision des fondamentaux scientifiques, exercices d'application ciblés, entraînements progressifs et simulations en conditions réelles.",
            "Cette méthode permet de développer rigueur, rapidité et efficacité.",
          ],
        },
        {
          title: "Développer un véritable esprit concours",
          paragraphs: [
            "La réussite à l'examen d'entrée repose autant sur les connaissances que sur la capacité à performer. Nous accompagnons les élèves dans le développement de leur gestion du temps, gestion du stress, stratégie de réponse et capacité à prioriser.",
            "L'objectif est de maximiser les performances le jour de l'épreuve.",
          ],
        },
        {
          title: "Une dynamique de groupe stimulante",
          paragraphs: [
            "Les élèves sont accompagnés en petits groupes de 8 maximum. Nous veillons à créer une véritable dynamique de groupe, fondée sur l'entraide, l'échange et le dépassement collectif. Les élèves évoluent dans un environnement exigeant et bienveillant.",
          ],
        },
        {
          title: "Un accompagnement qui se prolonge dans le temps",
          paragraphs: [
            "La préparation ne s'arrête pas à la fin des sessions. Nous restons en contact, fournissons des contenus complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent également revenir s'entraîner à tout moment dans notre espace.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cette préparation ?",
        groups: [{
          title: "Élèves visant la médecine en Belgique",
          bullets: [
            "préparant l'examen d'entrée en médecine en Belgique,",
            "en classe de Première ou Terminale scientifique,",
            "ayant un bon niveau en sciences et souhaitant se préparer efficacement,",
            "recherchant un accompagnement structuré et anticipé.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Compréhension du système + préparation aux épreuves + performance",
          "Séances hebdomadaires + stages intensifs vacances",
          "Groupes limités à 8 élèves maximum",
          "Des simulations en conditions réelles de l'examen",
          "+6 ans d'expérience dans la préparation",
          "100% de nos élèves admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/stethoscope.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
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

      faqKeys={["concours", "orientation"]}
      prev={{ label: "Médecine Maroc", to: "/prepa-medecine-maroc" }}
      next={{ label: "Sciences Po", to: "/prepa-sciences-po" }}
    />
  );
}
