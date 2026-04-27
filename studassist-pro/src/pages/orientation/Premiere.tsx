import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationPremiere() {
  return (
    <OrientationLevelPage
      eyebrow="Lycée · Première"
      accent="blue"
      title={<>Orientation scolaire <span className="sa-gradient-text">en Première</span>.</>}
      subtitle="Anticiper, structurer et préparer la Terminale avec une longueur d'avance."
      intro={[
        "La classe de Première est une année clé dans la construction du projet post-bac. C'est le moment où se précisent les intérêts, où les résultats prennent davantage de poids, et où s'opèrent des choix structurants — notamment celui de la spécialité à abandonner en vue de la Terminale.",
        "Chez STUDASSIST, nous accompagnons les élèves de Première et leurs familles dans une démarche d'orientation anticipée et stratégique, afin de poser dès maintenant les bases d'un projet solide et d'aborder la Terminale avec clarté, méthode et sérénité.",
      ]}
      heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Pourquoi travailler l'orientation dès la Première ?",
        lead: "Contrairement aux idées reçues, l'orientation ne commence pas en Terminale. La Première est le moment idéal pour prendre de l'avance.",
        bullets: [
          "Mieux comprendre le profil de l'élève",
          "Clarifier ses centres d'intérêt et ses aspirations",
          "Explorer différentes pistes de filières",
          "Faire un choix éclairé de la spécialité à conserver en Terminale",
          "Renforcer les matières clés et structurer les méthodes de travail",
          "Anticiper les exigences futures pour éviter les décisions précipitées",
        ],
      }}

      sections={[
        {
          title: "Une approche globale et personnalisée",
          paragraphs: [
            "Chez STUDASSIST, l'orientation en Première repose sur une vision long terme du parcours académique. Notre accompagnement combine analyse approfondie du profil, réflexion sur les projets d'études possibles, accompagnement dans le choix des spécialités, structuration des objectifs, et mise en place d'un plan d'action académique — le tout soutenu par un accompagnement humain de l'élève et de sa famille.",
          ],
        },
        {
          title: "Un diagnostic approfondi et un profiling global",
          paragraphs: [
            "Chaque accompagnement débute par un entretien familial initial, permettant d'aligner les attentes des parents et les aspirations de l'élève.",
            "Nous réalisons ensuite des entretiens individuels de profiling, afin d'analyser le parcours scolaire, les points forts et axes de progression, les méthodes de travail, les expériences extrascolaires, la personnalité et les ambitions de l'élève.",
          ],
          callout: "Ce travail permet de construire une lecture globale du profil, bien au-delà des résultats, et de poser les fondations d'un projet d'orientation réaliste et ambitieux.",
        },
        {
          title: "Choisir la spécialité en cohérence avec le projet d'études",
          paragraphs: [
            "La Première est marquée par le choix de la spécialité à abandonner pour la Terminale — une décision déterminante pour l'accès à certaines filières post-bac.",
            "Chez STUDASSIST, nous accompagnons l'élève et sa famille dans cette réflexion, en tenant compte :",
          ],
          bullets: [
            "Du projet d'études envisagé",
            "Des exigences des formations ciblées",
            "Du niveau réel de l'élève dans chaque spécialité",
            "De ses appétences et capacités",
          ],
          callout: "L'objectif : un choix stratégique, aligné à la fois avec le potentiel de l'élève et les attendus des établissements.",
        },
        {
          title: "Définir les objectifs et bâtir un plan d'action",
          paragraphs: [
            "À partir du profiling et des choix de spécialités, nous accompagnons l'élève et sa famille afin de clarifier les objectifs académiques, structurer les priorités, identifier les compétences à renforcer et établir une première short-list d'écoles et de formations.",
            "Cette short-list anticipée sert de repère stratégique : elle permet à l'élève de visualiser ses objectifs, de comprendre les exigences des établissements visés et d'adapter son travail scolaire en conséquence.",
          ],
          bullets: [
            "Consolider les acquis",
            "Renforcer les matières stratégiques",
            "Améliorer les méthodes de travail",
            "Préparer progressivement les exigences de la Terminale",
          ],
          callout: "L'objectif : permettre à l'élève d'aborder sa dernière année de lycée avec une véritable longueur d'avance.",
        },
        {
          title: "Un accompagnement académique aligné avec le projet",
          paragraphs: [
            "Lorsque nécessaire, nous intégrons directement du soutien scolaire ciblé, une préparation progressive aux futures échéances (Bac, concours, certifications de langues), et une structuration des méthodes de travail.",
          ],
          callout: "Cette approche permet d'aligner dès la Première le niveau académique de l'élève avec ses ambitions d'orientation.",
        },
        {
          title: "Un tiers de confiance entre l'élève et sa famille",
          paragraphs: [
            "L'adolescence est souvent une période de questionnements et parfois d'hésitations. STUDASSIST agit comme un tiers de confiance, facilitant un dialogue serein entre l'élève et ses parents, afin d'aboutir à des décisions éclairées et partagées.",
            "L'orientation est un parcours de plus en plus complexe. Nous accompagnons également les parents en leur apportant clarté, structure et visibilité, leur permettant d'anticiper les choix importants plutôt que de les subir.",
          ],
        },
        {
          title: "Une ouverture progressive vers l'international",
          paragraphs: [
            "Pour les élèves envisageant des études à l'étranger, nous amorçons dès la Première une réflexion sur les destinations possibles, les prérequis académiques et linguistiques, et les parcours à construire.",
          ],
          callout: "Cette anticipation permet de préparer en amont les profils internationaux.",
        },
        {
          title: "Un accompagnement continu et transparent",
          paragraphs: [
            "Tout au long du parcours, nous restons en contact constant avec l'élève et sa famille. Les échanges, documents et rendez-vous sont centralisés dans un espace dédié, garantissant transparence, réactivité et visibilité pour tous.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse l'orientation en Première ?",
        groups: [
          {
            title: "Aux élèves de Première qui…",
            bullets: [
              "Souhaitent clarifier leur avenir post-bac",
              "Veulent faire un choix éclairé de spécialité",
              "Désirent prendre de l'avance sur la Terminale",
              "Recherchent un accompagnement personnalisé et stratégique",
            ],
          },
          {
            title: "Aux parents qui…",
            bullets: [
              "Souhaitent être informés, guidés et rassurés",
              "Veulent anticiper les choix structurants",
              "Cherchent un cadre fiable pour accompagner leur enfant",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST dès la Première ?",
        bullets: [
          "Une orientation pensée en amont",
          "Un profiling complet de l'élève",
          "Un accompagnement dans le choix des spécialités",
          "Une short-list d'écoles construite dès la Première",
          "Un plan d'action académique personnalisé",
          "Une anticipation des exigences de Terminale",
          "Une intégration possible du soutien scolaire, concours et certifications",
          "Une vision long terme du parcours académique",
        ],
      }}

      ctaBanner={{
        title: "Préparez la Terminale avec une longueur d'avance.",
        body: "Vous souhaitez aider votre enfant à faire les bons choix dès la Première ? Parlons-en autour d'un premier rendez-vous.",
      }}

      prev={{ label: "Orientation en Seconde", to: "/orientation/seconde" }}
      next={{ label: "Orientation en Terminale", to: "/orientation/terminale" }}
    />
  );
}
