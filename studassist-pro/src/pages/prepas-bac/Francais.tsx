import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "francais", label: "Bac de Français", href: "/prepas-bac/francais" },
  { key: "specialites", label: "Bac de Spécialités", href: "/prepas-bac/specialites" },
  { key: "philo", label: "Bac de Philo", href: "/prepas-bac/philo" },
  { key: "grand-oral", label: "Grand Oral", href: "/prepas-bac/grand-oral" },
];

export default function PrepasBacFrancais() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Bac · Français"
      accent="blue"
      title={<>Prépa Bac de <span className="text-brand-teal">Français</span></>}
      subtitle="Une épreuve clé dans le parcours académique et l'orientation"
      intro={[
        "L'épreuve anticipée du Baccalauréat de Français constitue une étape déterminante du parcours scolaire. Passée en classe de Première, elle comprend une épreuve écrite et une épreuve orale, chacune avec un coefficient significatif, et contribue directement à la réussite globale au Baccalauréat.",
        "Au-delà de l'examen, elle joue un rôle structurant dans la construction du dossier académique. Les compétences qu'elle mobilise — rigueur, capacité d'analyse, qualité de l'expression et structuration de la pensée — sont particulièrement valorisées dans les candidatures aux établissements d'enseignement supérieur, en France, au Maroc comme à l'international.",
      ]}
      heroImage="/hero-bac-new.png"
      heroCtaLabel="Réserver une séance découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Bac de Français"
      enjeuxEyebrow="Comprendre les exigences"
      whyChooseEyebrow="Pourquoi choisir STUDASSIST ?"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les exigences du Bac de Français",
        lead: "Le Bac de Français repose sur deux épreuves complémentaires évaluant des compétences clés :",
        bullets: [
          "La capacité d'analyse et d'interprétation",
          "La qualité de l'expression écrite et orale",
          "La maîtrise des méthodes (dissertation, commentaire, contraction/essai)",
          "La culture littéraire et la capacité à argumenter",
          "Un programme articulé autour de 4 objets d'étude (poésie, littérature d'idées, roman, théâtre)",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      sections={[
        {
          title: "Maîtriser les fondamentaux pour réussir",
          paragraphs: [
            "Chez STUDASSIST, la préparation repose sur une conviction forte : la réussite passe par la maîtrise des fondamentaux. Nous accompagnons les élèves dans la compréhension des logiques de raisonnement et d'argumentation, la maîtrise des mouvements littéraires et des figures de style, l'assimilation des objets d'étude au programme et l'acquisition de références culturelles solides.",
            "Ce travail de fond permet de donner de la profondeur aux analyses et de valoriser les copies.",
          ],
        },
        {
          title: "Une préparation complète : écrit et oral",
          paragraphs: [
            "À l'écrit, les élèves apprennent à structurer une dissertation, construire un commentaire précis et développer une argumentation claire. Un travail approfondi est mené sur la méthodologie, la construction des plans et la qualité de l'expression. Pour les élèves de filière STMG, la préparation est spécifiquement adaptée avec un travail sur la contraction de texte et l'essai.",
            "À l'oral, nous préparons les élèves à analyser un texte, à structurer leur prise de parole et à interagir avec le jury avec assurance. Des entraînements réguliers permettent de gagner en fluidité, en clarté et en confiance.",
          ],
        },
        {
          title: "Une méthodologie progressive et orientée résultats",
          paragraphs: [
            "La préparation s'appuie sur une progression structurée : acquisition des méthodes fondamentales, entraînement sur des sujets types et annales, corrections détaillées et simulations en conditions réelles.",
            "Cette approche permet d'ancrer les bons réflexes et d'optimiser la gestion du temps et du stress le jour de l'examen.",
          ],
        },
        {
          title: "Un encadrement par des enseignants experts",
          paragraphs: [
            "Les élèves sont accompagnés par nos professeurs expérimentés, spécialisés dans l'enseignement du français et les exigences du Baccalauréat. Certains d'entre eux ont été correcteurs d'épreuves, ce qui leur permet de transmettre une compréhension précise des attentes du jury et des critères d'évaluation.",
          ],
        },
        {
          title: "Une préparation adaptée à chaque profil",
          paragraphs: [
            "Les séances sont proposées en petits groupes de 2 à 4 élèves maximum ou en format individuel, afin de garantir un suivi personnalisé. Cet accompagnement s'adresse aussi bien aux élèves souhaitant consolider leurs bases qu'à ceux disposant d'un bon niveau et visant l'excellence.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse la prépa Bac de Français ?",
        groups: [{
          title: "Élèves de Première",
          bullets: [
            "préparant l'épreuve anticipée de français (écrit et oral),",
            "souhaitant acquérir une méthodologie solide en dissertation et commentaire,",
            "ayant besoin d'un accompagnement pour maîtriser les œuvres du programme,",
            "visant une note élevée pour valoriser leur dossier post-bac,",
            "en filière générale ou STMG.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Une préparation rigoureuse et des enseignants experts",
          "Des groupes restreints (2 à 4 max) ou format individuel",
          "Une méthodologie progressive : méthodes, annales, simulations",
          "Des enseignants anciens correcteurs du Bac",
          "Une approche stratégique alignée avec l'orientation post-bac",
          "Un levier de réussite académique et de valorisation du dossier",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez accompagner votre enfant vers une réussite solide et maîtrisée au Bac de Français ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver une séance découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["soutien", "method"]}
      next={{ label: "Bac de Spécialités", to: "/prepas-bac/specialites" }}
    />
  );
}
