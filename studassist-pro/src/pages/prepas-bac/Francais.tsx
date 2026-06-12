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
        <>L'épreuve anticipée du <strong>Baccalauréat de Français</strong> constitue une étape <strong>déterminante</strong> du parcours scolaire. Passée en classe de Première, elle comprend une épreuve écrite et une épreuve orale, chacune avec un <strong>coefficient significatif</strong>, et contribue directement à la réussite globale au Baccalauréat.</>,
        <>Au-delà de l'examen, elle joue un rôle <strong>structurant</strong> dans la construction du <strong>dossier académique</strong>. Les compétences qu'elle mobilise — rigueur, capacité d'analyse, qualité de l'expression et structuration de la pensée — sont particulièrement valorisées dans les candidatures aux établissements d'enseignement supérieur, en France, au Maroc comme à l'international.</>,
        <>Chez STUDASSIST, la préparation au Bac de Français s'inscrit dans une <strong>démarche globale</strong> : permettre à l'élève de maîtriser les fondamentaux, d'optimiser ses résultats et de renforcer la qualité de son dossier dans une logique d'<strong>orientation stratégique</strong>.</>,
      ]}
      heroImage="/hero-bac-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver une séance découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="PRÉPARATION AU BAC DE FRANÇAIS"
      enjeuxEyebrow="Les enjeux du bac de français"
      whyChooseEyebrow="Pourquoi choisir STUDASSIST ?"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Un levier de réussite pour le lycée et les études supérieures",
        lead: "Le Bac de Français joue un rôle central dans la réussite scolaire et la préparation de l'après-bac. Au-delà de la note obtenue, il permet de développer des compétences particulièrement recherchées dans l'enseignement supérieur et les formations sélectives.",
        bullets: [
          "Maîtriser l'expression écrite",
          "Construire un dossier solide",
          "Préparer la Terminale",
          "Développer sa confiance",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/diploma.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      sections={[
        {
          title: "Le bac de français : qu'est-ce que c'est ?",
          paragraphs: [
            "Comprendre les exigences du Bac de Français — Le Bac de Français repose sur deux épreuves complémentaires : une épreuve écrite, où l'élève choisit entre commentaire de texte, dissertation ou, selon la filière, contraction de texte et essai ; une épreuve orale, composée d'une explication de texte suivie d'un entretien autour d'une œuvre étudiée.",
            "Ces épreuves évaluent à la fois la capacité d'analyse et d'interprétation, la qualité de l'expression écrite et orale, la maîtrise des méthodes, et la culture littéraire ainsi que la capacité à argumenter. L'épreuve écrite se déroule généralement au mois de juin, suivie de l'oral organisé à partir de la fin juin.",
            "Un programme exigeant et structurant — Le programme officiel du Bac de Français s'articule autour de quatre grands objets d'étude : la poésie du XIXe au XXIe siècle, la littérature d'idées du XVIe au XVIIIe siècle, le roman et le récit du Moyen Âge au XXIe siècle, le théâtre du XVIIe au XXIe siècle. Chaque objet d'étude est associé à une œuvre et à un parcours permettant de la situer dans son contexte historique et littéraire. Les élèves doivent ainsi développer une compréhension approfondie des grands courants, des auteurs majeurs et des enjeux littéraires, en mobilisant des références culturelles solides.",
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation du bac de français",
          paragraphs: [
            "Maîtriser les fondamentaux pour réussir — Chez STUDASSIST, la préparation repose sur une conviction forte : la réussite passe par la maîtrise des fondamentaux. Nous accompagnons les élèves dans : la compréhension des logiques de raisonnement et d'argumentation, la maîtrise des mouvements littéraires et des figures de style, l'assimilation des objets d'étude au programme (roman, théâtre, poésie, littérature d'idées), l'acquisition de références culturelles solides à travers l'étude des œuvres au programme. Ce travail de fond permet de donner de la profondeur aux analyses et de valoriser les copies.",
            "Une préparation complète : écrit et oral — À l'écrit, les élèves apprennent à structurer une dissertation, construire un commentaire précis et développer une argumentation claire. Un travail approfondi est mené sur la méthodologie, la construction des plans et la qualité de l'expression. Pour les élèves de la filière STMG, la préparation est spécifiquement adaptée aux exigences de l'épreuve, avec un travail approfondi sur la contraction de texte et l'essai (épreuve de synthèse), ainsi que sur la capacité à restituer et structurer efficacement les idées. À l'oral, nous préparons les élèves à analyser un texte, à structurer leur prise de parole et à interagir avec le jury avec assurance. Des entraînements réguliers permettent de gagner en fluidité, en clarté et en confiance.",
          ],
        },
        {
          title: "Une préparation adaptée pour chaque profil et encadrée par des enseignants experts",
          paragraphs: [
            "Une méthodologie progressive et orientée résultats — La préparation s'appuie sur une progression structurée : acquisition des méthodes fondamentales, entraînement sur des sujets types et annales, corrections détaillées, simulations en conditions réelles. Cette approche permet d'ancrer les bons réflexes et d'optimiser la gestion du temps et du stress le jour de l'examen.",
            "Un encadrement par des enseignants experts — Les élèves sont accompagnés par nos professeurs expérimentés, spécialisés dans l'enseignement du français et les exigences du Baccalauréat. Certains d'entre eux ont été correcteurs d'épreuves, ce qui leur permet de transmettre une compréhension précise des attentes du jury et des critères d'évaluation.",
            "Une préparation adaptée à chaque profil — Les séances sont proposées en petits groupes de 2 à 4 élèves maximum ou en format individuel, afin de garantir un suivi personnalisé. Cet accompagnement s'adresse aussi bien aux élèves souhaitant consolider leurs bases qu'à ceux disposant d'un bon niveau et visant l'excellence.",
          ],
        },
        {
          title: "À qui s'adresse la préparation du Bac de Français ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves de Première qui souhaitent : consolider leurs connaissances sur les œuvres et objets d'étude au programme ; renforcer leur maîtrise des méthodes de la dissertation, du commentaire de texte ou de la contraction de texte et de l'essai ; développer leurs capacités d'analyse, d'argumentation et de rédaction ; gagner en aisance et en confiance pour l'épreuve orale ; approfondir leur culture littéraire et enrichir leurs références ; préparer efficacement les épreuves écrites et orales du Baccalauréat ; viser une excellente note et valoriser leur dossier académique ; acquérir des méthodes de travail utiles pour la Terminale, le Grand Oral et les études supérieures.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Une préparation rigoureuse et des enseignants experts et anciens correcteurs du Bac",
          "Un format flexible et personnalisé avec des groupes restreints (2 à 4 élèves) ou un suivi individuel en fonction du besoin",
          "Une méthodologie orientée progression : méthodes, annales, et simulations pour gagner en efficacité, en confiance et en autonomie",
          "Une parfaite maîtrise des attentes du programme, des épreuves et des critères d'évaluation",
          "Une préparation qui s'inscrit dans une logique de réussite au lycée, d'orientation et de préparation des études supérieures",
          "Un levier de réussite académique et de valorisation du dossier post-bac",
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

      faqKeys={["prepas-bac"]}
      faqTitle="Préparation au Baccalauréat : questions fréquentes"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux épreuves du Bac."
      next={{ label: "Bac de Spécialités", to: "/prepas-bac/specialites" }}
    />
  );
}
