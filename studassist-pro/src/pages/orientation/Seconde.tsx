import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationSeconde() {
  return (
    <OrientationLevelPage
      eyebrow="Lycée · Seconde"
      accent="gold"
      title={<>Orientation scolaire <span className="text-brand-teal">en Seconde</span></>}
      subtitle="Anticiper le choix des spécialités et poser les bases d'un projet d'études cohérent."
      intro={[
        "La classe de Seconde marque une étape déterminante : c'est l'année du choix des trois spécialités de Première, un choix structurant qui conditionne progressivement l'accès aux filières post-bac les plus exigeantes.",
        "Chez STUDASSIST, nous accompagnons les élèves de Seconde et leurs familles dans une démarche d'orientation anticipée et évolutive, pour construire un projet progressif tout en conservant la souplesse nécessaire à la maturation naturelle de l'élève.",
      ]}
      heroImage="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Pourquoi agir dès la Seconde ?",
        lead: "L'orientation ne doit pas être subie au moment des échéances. La Seconde est l'année idéale pour anticiper, comprendre et poser les premières fondations d'un parcours réussi.",
        bullets: [
          "Identifier les points forts, centres d'intérêt et axes de progression de l'élève",
          "Explorer les différents domaines d'études et secteurs professionnels",
          "Préparer le choix stratégique des trois spécialités de Première",
          "Donner du sens au travail scolaire et renforcer la motivation par la projection",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
        ],
      }}

      sections={[
        {
          title: "Construire un pré-projet d'orientation évolutif",
          paragraphs: [
            "En Seconde, l'objectif n'est pas de figer un projet définitif. Nous construisons avec l'élève un pré-projet d'orientation qui sert de boussole — un cadre souple qui oriente les choix sans les enfermer.",
            "Ce pré-projet permet de structurer les décisions à court terme tout en préservant une flexibilité indispensable à cet âge, afin de s'ajuster à la maturation, aux résultats et aux aspirations évolutives de l'élève.",
          ],
          bullets: [
            "Orienter les choix de spécialités en cohérence avec le projet",
            "Structurer le travail scolaire autour d'objectifs concrets",
            "Anticiper les exigences futures des filières visées",
          ],
          callout: "Le projet reste volontairement ouvert et adaptable. C'est une boussole, pas un carcan.",
        },
        {
          title: "Profiling approfondi et diagnostic global",
          paragraphs: [
            "L'accompagnement débute par un entretien familial permettant d'aligner attentes parentales et aspirations de l'élève. Nous réalisons ensuite des entretiens individuels de profiling pour analyser le parcours scolaire, les matières de prédilection, les centres d'intérêt, la personnalité et les capacités d'engagement.",
            "Ce travail permet de construire une lecture globale du profil — bien au-delà des notes — indispensable pour guider les premiers choix structurants avec pertinence et ambition.",
          ],
        },
        {
          title: "Choix stratégique des trois spécialités",
          paragraphs: [
            "Le choix des spécialités est une décision clé de la Seconde. Nous accompagnons cette réflexion en tenant compte du pré-projet d'orientation, des exigences des filières post-bac ciblées, du niveau réel de l'élève et de son potentiel de progression dans chaque matière.",
          ],
          bullets: [
            "Analyse des prérequis par filière et par école",
            "Évaluation du potentiel de progression dans chaque matière",
            "Stratégie d'options ouvertes pour préserver les possibilités",
          ],
          callout: "L'objectif : un choix cohérent et ambitieux, sans refermer prématurément les portes.",
        },
        {
          title: "Plan d'action académique personnalisé",
          paragraphs: [
            "À partir du diagnostic, nous établissons un plan d'action sur mesure : renforcement des fondamentaux, développement de méthodes de travail efficaces et, lorsque nécessaire, soutien scolaire ciblé dans les matières stratégiques liées au projet envisagé.",
            "Ce plan vise à préparer progressivement l'élève aux exigences de la Première et à développer son autonomie de travail.",
          ],
        },
        {
          title: "Ouverture progressive vers l'international",
          paragraphs: [
            "Pour les élèves envisageant des études à l'étranger, nous amorçons dès la Seconde une réflexion sur les parcours académiques adaptés, les exigences linguistiques futures et les certifications de langues à anticiper.",
            "Cette anticipation permet de préparer un profil compétitif sur le long terme pour les meilleures universités internationales.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse ce programme ?",
        groups: [
          {
            title: "Élèves de Seconde",
            bullets: [
              "Qui souhaitent choisir leurs spécialités de manière réfléchie et stratégique",
              "Qui veulent explorer différents domaines d'études avant de s'engager",
              "Qui recherchent un accompagnement structuré pour donner du sens à leur parcours",
            ],
          },
          {
            title: "Parents",
            bullets: [
              "Qui veulent comprendre l'impact des spécialités sur les choix post-bac",
              "Qui recherchent un cadre fiable pour accompagner leur enfant sereinement",
              "Qui souhaitent anticiper plutôt que subir les échéances d'orientation",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi STUDASSIST dès la Seconde ?",
        bullets: [
          "Une orientation anticipée, pensée en amont des échéances",
          "Un profiling complet et personnalisé de chaque élève",
          "Un accompagnement stratégique dans le choix des spécialités",
          "Un plan d'action académique adapté au profil et au projet",
          "Une vision long terme intégrant les exigences du post-bac",
          "Un soutien scolaire et linguistique intégré si nécessaire",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/telescope.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
        ],
      }}

      ctaBanner={{
        title: "Accompagnez le choix stratégique des spécialités.",
        body: "Votre enfant entre en Seconde ou doit choisir ses spécialités ? Parlons-en lors d'un premier rendez-vous sans engagement.",
      }}

      next={{ label: "Orientation en Première", to: "/orientation/premiere" }}
    />
  );
}
