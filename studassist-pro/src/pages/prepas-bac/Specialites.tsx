import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "francais", label: "Bac de Français", href: "/prepas-bac/francais" },
  { key: "specialites", label: "Bac de Spécialités", href: "/prepas-bac/specialites" },
  { key: "philo", label: "Bac de Philo", href: "/prepas-bac/philo" },
  { key: "grand-oral", label: "Grand Oral", href: "/prepas-bac/grand-oral" },
];

export default function PrepasBacSpecialites() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Bac · Spécialités"
      accent="blue"
      title={<>Prépa Bac – Épreuves de <span className="text-brand-teal">spécialités</span></>}
      subtitle="Performer sur les matières clés et sécuriser son orientation"
      intro={[
        "Les épreuves de spécialités du Baccalauréat occupent une place centrale dans le parcours de Terminale. Avec un coefficient élevé (16 au total), elles constituent le principal levier de performance au Bac et jouent un rôle déterminant dans les candidatures post-bac.",
        "Chez STUDASSIST, nous proposons une préparation structurée, exigeante et orientée résultats, permettant aux élèves de maîtriser les attendus, d'optimiser leurs performances et de renforcer leur dossier académique.",
      ]}
      heroImage="/hero-bac-new.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Bac de Spécialités"
      enjeuxEyebrow="Comprendre le fonctionnement"
      whyChooseEyebrow="Pourquoi choisir STUDASSIST ?"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre le fonctionnement des épreuves de spécialités",
        lead: "Le Bac général repose sur un système progressif : trois spécialités en Première, deux conservées en Terminale pour les épreuves finales.",
        bullets: [
          "Épreuves généralement en mars, intégrées aux dossiers Parcoursup",
          "Épreuves écrites mobilisant connaissances approfondies et raisonnement structuré",
          "Contrôle continu : part significative de la note finale",
          "Les résultats conditionnent l'accès aux filières sélectives",
          "Un levier déterminant pour l'orientation post-bac",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation sur mesure, adaptée à chaque spécialité",
          paragraphs: [
            "Nous adaptons notre accompagnement aux exigences spécifiques de chaque discipline. Nous intervenons sur les spécialités proposées dans les établissements français au Maroc : Mathématiques, Physique-Chimie, SVT, SES, HGGSP, NSI, mais également HLP, LLCER, LLCA, AMC, Sciences de l'Ingénieur ou encore les spécialités artistiques.",
            "Chaque matière nécessite une approche spécifique, combinant maîtrise des notions, méthodologie adaptée et entraînement ciblé.",
          ],
        },
        {
          title: "Une préparation également adaptée au Bac STMG",
          paragraphs: [
            "Nous accompagnons également les élèves préparant un Baccalauréat STMG, dont les épreuves répondent à des exigences spécifiques. Les spécialités en STMG — management, sciences de gestion, droit-économie — évaluent la capacité à analyser des situations concrètes, mobiliser des notions théoriques et structurer une argumentation claire.",
            "Notre accompagnement est adapté à ces enjeux, avec un travail ciblé sur l'analyse de cas, la structuration des réponses et la mobilisation pertinente des connaissances.",
          ],
        },
        {
          title: "Une méthodologie rigoureuse et progressive",
          paragraphs: [
            "Notre préparation repose sur une progression structurée, pensée pour maximiser les résultats. Les élèves consolident d'abord les notions essentielles, avant de travailler sur des sujets types et des annales. Ils apprennent à adopter les méthodes attendues par les correcteurs et s'entraînent régulièrement en conditions réelles.",
            "Cette approche permet de développer des automatismes, d'optimiser la gestion du temps et d'améliorer la précision des réponses.",
          ],
        },
        {
          title: "Un encadrement par des enseignants experts",
          paragraphs: [
            "Les élèves sont accompagnés par des professeurs spécialisés par matière, disposant d'une parfaite maîtrise des programmes et des exigences du Baccalauréat. Leur accompagnement permet de clarifier les notions complexes, d'adopter les bons réflexes méthodologiques et d'élever le niveau d'exigence.",
          ],
        },
        {
          title: "Une préparation alignée avec le projet d'orientation",
          paragraphs: [
            "Chez STUDASSIST, la préparation aux spécialités s'inscrit dans une logique globale. Nous veillons à aligner les matières travaillées, les objectifs académiques et les exigences des formations visées, afin d'optimiser à la fois les résultats et les opportunités d'admission.",
            "Les séances sont proposées en petits groupes de 2 à 4 élèves maximum, favorisant un suivi individualisé et une progression rapide. Un accompagnement individuel peut également être mis en place. Les cours sont accessibles en présentiel à Casablanca ou à distance.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse la prépa Spécialités ?",
        groups: [{
          title: "Élèves de Terminale",
          bullets: [
            "préparant les épreuves de spécialités du Baccalauréat (voie générale ou STMG),",
            "souhaitant maximiser leur note pour Parcoursup (coefficient 16),",
            "ayant besoin d'un cadre méthodologique rigoureux,",
            "visant une mention Bien ou Très Bien,",
            "recherchant un accompagnement aligné avec leur projet d'orientation.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Une préparation rigoureuse et des enseignants experts par matière",
          "Des groupes restreints (2 à 4 max) ou format individuel",
          "Toutes spécialités couvertes (générales et STMG)",
          "Contrôle continu intégré dans l'accompagnement",
          "Une approche stratégique alignée avec l'orientation post-bac",
          "Présentiel à Casablanca ou à distance",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/video-call.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez accompagner votre enfant vers une réussite solide et stratégique aux épreuves de spécialités ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["soutien", "method"]}
      prev={{ label: "Bac de Français", to: "/prepas-bac/francais" }}
      next={{ label: "Bac de Philo", to: "/prepas-bac/philo" }}
    />
  );
}
