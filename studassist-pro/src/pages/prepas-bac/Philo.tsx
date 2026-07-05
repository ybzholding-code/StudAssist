import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "francais", label: "Bac de Français", href: "/prepas-bac/francais" },
  { key: "specialites", label: "Bac de Spécialités", href: "/prepas-bac/specialites" },
  { key: "philo", label: "Bac de Philo", href: "/prepas-bac/philo" },
  { key: "grand-oral", label: "Grand Oral", href: "/prepas-bac/grand-oral" },
];

export default function PrepasBacPhilo() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Bac · Philo"
      accent="blue"
      title={<>Prépa Bac – <span className="text-brand-teal">Philosophie</span></>}
      subtitle="Structurer sa pensée, maîtriser la méthode et développer une argumentation solide"
      intro={[
        "L'épreuve de philosophie du Baccalauréat constitue un moment clé de l'année de Terminale. Elle exige des compétences spécifiques : capacité d'analyse, rigueur du raisonnement et maîtrise de l'expression écrite.",
        "Chez STUDASSIST, nous proposons une préparation exigeante et structurée, permettant aux élèves de comprendre les attentes de l'épreuve, d'acquérir une méthodologie solide et de développer une réflexion claire et argumentée.",
      ]}
      heroImage="/prepas-bac-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver un cours découverte"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation au Bac de Philosophie."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Bac de Philo"
      enjeuxEyebrow="Les enjeux de l'épreuve de philosophie"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Un levier de réussite pour le bac et l'accès aux études supérieures",
        lead: "La philosophie est bien plus qu'une simple épreuve du Baccalauréat. Elle mobilise des compétences essentielles qui seront utiles tout au long des études supérieures et de la vie professionnelle.",
        bullets: [
          "Développer son esprit critique: La philosophie apprend à analyser, questionner et construire un raisonnement rigoureux face à des problématiques complexes.",
          "Optimiser sa performance au Baccalauréat: Grâce à son coefficient significatif, l'épreuve de philosophie peut avoir un impact important sur la note finale et l'obtention d'une mention.",
          "Maîtriser l'art de l'argumentation: La dissertation et l'explication de texte évaluent la capacité à structurer sa pensée, défendre un point de vue et construire une démonstration convaincante.",
          "Préparer les études supérieures: Les compétences développées en philosophie — analyse, réflexion, expression écrite et autonomie intellectuelle — sont particulièrement valorisées dans l'enseignement supérieur.",
        ],
        icons: [
          "https://img.icons8.com/?size=100&id=4prjBhjIN59x&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=OlDzEETWpjI7&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=sy9tMN9SEkLP&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=qZ3IKpKF9Cun&format=png&color=000000",
        ],
      }}

      sections={[
        {
          title: "Le Bac de philosophie, qu'est-ce que c'est ?",
          paragraphs: [
            "Comprendre les exigences de l'épreuve de philosophie — L'épreuve de philosophie repose sur deux types de sujets : la dissertation et l'explication de texte. Elle évalue la capacité de l'élève à problématiser une question, construire un raisonnement structuré et mobiliser des références pertinentes pour soutenir son argumentation. Au-delà des connaissances, c'est la qualité de la réflexion et la rigueur de la démonstration qui sont valorisées.",
            "Une épreuve à fort impact académique — Avec un coefficient significatif, la philosophie peut faire la différence dans l'obtention d'une mention. Elle constitue également un marqueur important dans le dossier académique, en particulier pour les formations valorisant les capacités d'analyse, de réflexion et d'expression. Une copie claire, structurée et argumentée reflète un profil académique solide et mature.",
            "Une épreuve pour se démarquer — La philosophie est souvent perçue comme une matière difficile. Bien préparée, elle devient au contraire une opportunité de se distinguer. Une copie structurée, claire et réfléchie peut faire la différence dans les résultats finaux et valoriser le profil de l'élève.",
          ],
        },
        {
          title: "L'approche STUDASSIST dans la préparation de l'épreuve de philosophie",
          paragraphs: [
            "Maîtriser les fondamentaux de la réflexion — Chez STUDASSIST, la préparation repose sur l'acquisition des fondamentaux : comprendre les notions du programme (liberté, vérité, justice, bonheur, conscience…), apprendre à problématiser un sujet, structurer une dissertation, analyser un texte philosophique avec rigueur. Nous accompagnons les élèves dans le développement de leur capacité à penser de manière autonome, à organiser leurs idées et à produire un raisonnement cohérent.",
            "Une méthodologie claire et progressive — La réussite en philosophie repose avant tout sur la méthode. Nous proposons un accompagnement structuré, permettant aux élèves de : construire des plans clairs et efficaces, éviter les hors-sujets, maîtriser l'introduction et la conclusion, développer une argumentation progressive et pertinente. Des entraînements réguliers sur des sujets types et des bacs blancs permettent d'ancrer les bons réflexes et de gagner en confiance.",
            "Mobiliser les références avec pertinence — La philosophie ne consiste pas à réciter un cours, mais à mobiliser des références de manière intelligente. Nous aidons les élèves à comprendre les grandes pensées philosophiques (Descartes, Kant, Nietzsche, Rousseau…) et à les intégrer dans leurs raisonnements de manière pertinente et nuancée.",
          ],
        },
        {
          title: "Une préparation adaptée pour chaque profil et encadrée par des enseignants experts",
          paragraphs: [
            "Un encadrement exigeant et personnalisé — Les élèves sont accompagnés par des enseignants spécialisés, maîtrisant parfaitement les exigences du Bac de philosophie. Les séances sont proposées en petits groupes de 2 à 4 élèves maximum ou en format individuel, afin de garantir un suivi précis et adapté à chaque profil.",
            "Une préparation alignée avec la réussite globale — Chez STUDASSIST, la préparation à la philosophie s'inscrit dans une logique globale. Elle permet de renforcer des compétences essentielles — analyse, argumentation, expression — qui seront déterminantes pour les études supérieures et les processus de sélection des établissements post-bac.",
          ],
        },
        {
          title: "À qui s'adresse la préparation du Bac de philosophie ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves de Terminale souhaitant acquérir une méthodologie solide, renforcer leurs capacités de réflexion et aborder l'épreuve avec davantage de confiance.",
          ],
          bullets: [
            "Comprendre les notions et auteurs au programme",
            "Apprendre à problématiser un sujet et construire une dissertation",
            "Maîtriser la méthode de l'explication de texte",
            "Développer une argumentation claire, structurée et pertinente",
            "Gagner en confiance face à une matière souvent perçue comme complexe",
            "Viser une excellente note au Baccalauréat",
            "Renforcer leurs compétences d'analyse et d'expression pour les études supérieures",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le Bac de Philo ?",
        bullets: [
          "Une approche centrée sur la réflexion et la méthode : apprendre à raisonner, argumenter et structurer les pensées",
          "Un travail progressif sur les notions, les références, et la qualité de la rédaction",
          "Des entraînements réguliers et des bacs blancs avec corrections détaillées",
          "Un format flexible et personnalisé avec des groupes restreints (2 à 4 élèves) ou un suivi individuel en fonction du besoin",
          "Des compétences clés développées pour l'avenir académique - analyse, argumentation, autonomie intellectuelle et esprit critique",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez être accompagné vers une réussite solide en philosophie ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-bac"]}
      faqTitle="FAQ – Préparation au Baccalauréat"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux épreuves du Bac."
      prev={{ label: "Bac de Spécialités", to: "/prepas-bac/specialites" }}
      next={{ label: "Grand Oral", to: "/prepas-bac/grand-oral" }}
    />
  );
}
