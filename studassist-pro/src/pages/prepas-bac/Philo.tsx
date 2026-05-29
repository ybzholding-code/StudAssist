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
      heroImage="/hero-bac-new.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Bac de Philo"
      enjeuxEyebrow="Comprendre les exigences"
      whyChooseEyebrow="Une épreuve pour se démarquer"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les exigences de l'épreuve de philosophie",
        lead: "L'épreuve repose sur deux types de sujets : la dissertation et l'explication de texte. Elle évalue :",
        bullets: [
          "La capacité à problématiser une question",
          "La construction d'un raisonnement structuré",
          "La mobilisation de références pertinentes",
          "La qualité de la réflexion et la rigueur de la démonstration",
          "Un coefficient significatif qui peut faire la différence pour la mention",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      sections={[
        {
          title: "Maîtriser les fondamentaux de la réflexion",
          paragraphs: [
            "La préparation repose sur l'acquisition des fondamentaux : comprendre les notions du programme (liberté, vérité, justice, bonheur, conscience…), apprendre à problématiser un sujet, structurer une dissertation et analyser un texte philosophique avec rigueur.",
            "Nous accompagnons les élèves dans le développement de leur capacité à penser de manière autonome, à organiser leurs idées et à produire un raisonnement cohérent.",
          ],
        },
        {
          title: "Une méthodologie claire et progressive",
          paragraphs: [
            "La réussite en philosophie repose avant tout sur la méthode. Nous proposons un accompagnement structuré permettant aux élèves de construire des plans clairs et efficaces, éviter les hors-sujets, maîtriser l'introduction et la conclusion et développer une argumentation progressive et pertinente.",
            "Des entraînements réguliers sur des sujets types et des bacs blancs permettent d'ancrer les bons réflexes et de gagner en confiance.",
          ],
        },
        {
          title: "Mobiliser les références avec pertinence",
          paragraphs: [
            "La philosophie ne consiste pas à réciter un cours, mais à mobiliser des références de manière intelligente. Nous aidons les élèves à comprendre les grandes pensées philosophiques (Descartes, Kant, Nietzsche, Rousseau…) et à les intégrer dans leurs raisonnements de manière pertinente et nuancée.",
          ],
        },
        {
          title: "Un encadrement exigeant et personnalisé",
          paragraphs: [
            "Les élèves sont accompagnés par des enseignants spécialisés, maîtrisant parfaitement les exigences du Bac de philosophie. Les séances sont proposées en petits groupes de 2 à 4 élèves maximum ou en format individuel, afin de garantir un suivi précis et adapté à chaque profil.",
          ],
        },
        {
          title: "Une préparation alignée avec la réussite globale",
          paragraphs: [
            "La préparation à la philosophie s'inscrit dans une logique globale. Elle permet de renforcer des compétences essentielles — analyse, argumentation, expression — qui seront déterminantes pour les études supérieures et les processus de sélection des établissements post-bac.",
            "Bien préparée, la philosophie devient une opportunité de se distinguer. Une copie structurée, claire et réfléchie peut faire la différence dans les résultats finaux et valoriser le profil de l'élève.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse la prépa Bac de Philosophie ?",
        groups: [{
          title: "Élèves de Terminale",
          bullets: [
            "redoutant l'épreuve de philosophie,",
            "souhaitant acquérir une méthodologie solide en dissertation,",
            "ayant besoin de comprendre les notions et de structurer leur pensée,",
            "visant une note élevée pour la mention,",
            "cherchant à se démarquer avec une copie de qualité.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le Bac de Philo ?",
        bullets: [
          "Des enseignants spécialisés maîtrisant les exigences de l'épreuve",
          "Une méthodologie claire : problématisation, plan, argumentation",
          "Un travail progressif sur les notions et les références",
          "Des entraînements réguliers et des bacs blancs",
          "Des groupes restreints (2 à 4 max) ou format individuel",
          "Une compétence clé développée pour l'avenir académique",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez être accompagné vers une réussite solide en philosophie ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["soutien", "method"]}
      prev={{ label: "Bac de Spécialités", to: "/prepas-bac/specialites" }}
      next={{ label: "Grand Oral", to: "/prepas-bac/grand-oral" }}
    />
  );
}
