import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationSeconde() {
  return (
    <OrientationLevelPage
      eyebrow="Lycée · Seconde"
      accent="gold"
      title={<>Orientation scolaire <span className="sa-gradient-text">en Seconde</span>.</>}
      subtitle="Explorer, choisir ses spécialités et poser les bases d'un projet cohérent."
      intro={[
        "La classe de Seconde marque une étape déterminante : c'est l'année du choix des trois spécialités de Première, un choix structurant qui conditionne progressivement l'accès à certaines filières post-bac.",
        "Chez STUDASSIST, nous accompagnons les élèves de Seconde et leurs familles dans une démarche d'orientation anticipée, réfléchie et évolutive, afin de construire un projet cohérent tout en conservant la souplesse nécessaire à l'évolution naturelle de l'élève.",
      ]}
      heroImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Pourquoi travailler l'orientation dès la Seconde ?",
        lead: "L'orientation ne doit pas être subie au moment des échéances. La Seconde est l'année idéale pour anticiper, comprendre et choisir.",
        bullets: [
          "Mieux comprendre le profil de l'élève et identifier ses points forts et axes de progression",
          "Explorer différents domaines d'études et secteurs professionnels",
          "Préparer le choix stratégique des trois spécialités de Première",
          "Éviter les choix guidés uniquement par l'influence extérieure ou les tendances du moment",
          "Poser les bases d'un projet pré-orienté mais adaptable",
          "Donner du sens au travail scolaire et renforcer la motivation",
        ],
      }}

      sections={[
        {
          title: "Donner du sens au parcours scolaire",
          paragraphs: [
            "L'orientation en Seconde permet à l'élève de conscientiser son avenir et de mieux comprendre le lien entre ses choix actuels et ses opportunités futures.",
            "En se projetant progressivement dans un projet d'études, l'élève donne du sens à son travail scolaire. Cette prise de conscience agit comme un véritable levier de motivation, favorisant un engagement plus fort en classe, une meilleure implication personnelle et, très souvent, une amélioration des résultats.",
          ],
        },
        {
          title: "Une approche progressive et évolutive",
          paragraphs: [
            "En Seconde, l'objectif n'est pas de figer un projet définitif. Nous construisons avec l'élève un pré-projet d'orientation, qui sert de boussole.",
          ],
          bullets: [
            "Orienter les choix de spécialités",
            "Structurer le travail scolaire",
            "Développer certaines compétences clés",
            "Anticiper les exigences futures",
          ],
          callout: "Ce projet reste volontairement ouvert et adaptable, afin de s'ajuster à la maturation, aux résultats et aux aspirations évolutives de l'élève.",
        },
        {
          title: "Un diagnostic approfondi et un profiling global",
          paragraphs: [
            "L'accompagnement débute par un entretien familial initial, permettant d'aligner attentes parentales et aspirations de l'élève.",
            "Nous réalisons ensuite des entretiens individuels de profiling afin d'analyser le parcours scolaire, les matières de prédilection, les centres d'intérêt, la personnalité, ainsi que les capacités d'analyse et d'engagement de l'élève.",
            "Ce travail permet de construire une lecture globale du profil, indispensable pour guider les premiers choix structurants.",
          ],
        },
        {
          title: "Choisir les trois spécialités de manière stratégique",
          paragraphs: [
            "Le choix des trois spécialités de Première est une décision clé. Chez STUDASSIST, nous accompagnons cette réflexion en tenant compte :",
          ],
          bullets: [
            "Du pré-projet d'orientation envisagé",
            "Des exigences des filières post-bac potentielles",
            "Du niveau réel de l'élève dans chaque matière",
            "De son potentiel de progression",
          ],
          callout: "L'objectif : un choix cohérent, ambitieux mais réaliste, en gardant des options ouvertes pour la suite du parcours.",
        },
        {
          title: "Définir un cap et poser un plan d'action long terme",
          paragraphs: [
            "À partir du diagnostic et du choix des spécialités, nous aidons l'élève à clarifier ses premières intentions d'orientation, structurer ses priorités académiques, identifier les matières à consolider et développer des méthodes de travail solides.",
            "Nous mettons en place un plan d'action personnalisé visant à renforcer les fondamentaux, améliorer l'organisation et l'autonomie, et préparer progressivement les exigences de la Première.",
            "Lorsque nécessaire, nous intégrons du soutien scolaire ciblé avec un travail approfondi sur la méthodologie et un renforcement des matières stratégiques en lien avec le projet envisagé.",
          ],
        },
        {
          title: "Un tiers de confiance entre l'élève et sa famille",
          paragraphs: [
            "Le choix des spécialités peut être source d'interrogations et parfois de divergences. STUDASSIST agit comme un tiers de confiance, facilitant un dialogue serein et structuré entre l'élève et ses parents.",
            "Les réformes du lycée et la diversité des parcours rendent les choix plus complexes. Nous accompagnons également les parents en leur apportant une compréhension claire des implications des spécialités, une vision long terme des parcours possibles, et un cadre structuré pour accompagner leur enfant sans pression excessive.",
          ],
        },
        {
          title: "Une ouverture progressive vers l'international",
          paragraphs: [
            "Pour les élèves envisageant des études à l'étranger, nous amorçons dès la Seconde une réflexion sur les parcours académiques adaptés, les exigences linguistiques futures, ainsi que les choix stratégiques à effectuer dès le lycée.",
            "Lorsque nécessaire, nous intégrons dans le programme une préparation aux certifications de langues pour anticiper au mieux les exigences du projet d'orientation de l'élève.",
          ],
          callout: "Cette anticipation permet de préparer un profil compétitif pour les meilleures universités internationales sur le long terme.",
        },
        {
          title: "Un accompagnement continu et transparent",
          paragraphs: [
            "Tout au long du parcours, nous restons en contact avec l'élève et sa famille. Les échanges et documents sont centralisés dans un espace dédié, garantissant transparence et continuité.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse l'orientation en Seconde ?",
        groups: [
          {
            title: "Aux élèves de Seconde qui…",
            bullets: [
              "Souhaitent choisir leurs spécialités de manière réfléchie",
              "Veulent explorer différents domaines d'études",
              "Désirent construire un projet progressif et évolutif",
              "Recherchent un accompagnement structuré et personnalisé",
            ],
          },
          {
            title: "Aux parents qui…",
            bullets: [
              "Souhaitent être informés et rassurés face aux choix de spécialités",
              "Veulent comprendre l'impact de ces décisions sur le post-bac",
              "Recherchent un cadre structuré pour accompagner leur enfant",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST dès la Seconde ?",
        bullets: [
          "Une orientation anticipée et évolutive",
          "Un profiling complet de l'élève",
          "Un accompagnement stratégique dans le choix des spécialités",
          "Un plan d'action académique personnalisé",
          "Une vision long terme du parcours",
          "Une intégration du renforcement scolaire et linguistique",
          "Un accompagnement humain, structuré et rassurant",
        ],
      }}

      ctaBanner={{
        title: "Accompagnez le choix stratégique des spécialités.",
        body: "Vous souhaitez aider votre enfant à poser les bases d'un projet d'avenir cohérent ? Parlons-en.",
      }}

      next={{ label: "Orientation en Première", to: "/orientation/premiere" }}
    />
  );
}
