import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationPremiere() {
  return (
    <OrientationLevelPage
      eyebrow="Lycée · Première"
      accent="blue"
      title={<>Orientation scolaire <span className="text-brand-teal">en Première</span></>}
      subtitle="Structurer le projet post-bac et préparer la Terminale avec une longueur d'avance."
      intro={[
        "La classe de Première est une année charnière : les résultats prennent davantage de poids, les intérêts se précisent et le choix de la spécialité à abandonner conditionne l'accès à certaines formations post-bac.",
        "Chez STUDASSIST, nous accompagnons les élèves de Première et leurs familles dans une démarche d'orientation anticipée et stratégique, pour poser dès maintenant les bases d'un projet solide et aborder la Terminale avec clarté et sérénité.",
      ]}
      heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Pourquoi anticiper dès la Première ?",
        lead: "Contrairement aux idées reçues, l'orientation ne commence pas en Terminale. La Première est le moment idéal pour construire un avantage décisif sur les autres candidats.",
        bullets: [
          "Clarifier les centres d'intérêt et les aspirations professionnelles",
          "Faire un choix éclairé de la spécialité à conserver en Terminale",
          "Renforcer les matières stratégiques pour le dossier post-bac",
          "Anticiper les exigences des formations sélectives",
        ],
      }}

      sections={[
        {
          title: "Profiling approfondi et vision globale",
          paragraphs: [
            "Chaque accompagnement débute par un entretien familial initial pour aligner les attentes des parents et les aspirations de l'élève. Nous poursuivons avec des entretiens individuels de profiling qui analysent le parcours académique, les méthodes de travail, la personnalité et les ambitions.",
            "Ce travail nous permet de construire une lecture globale du profil — bien au-delà des résultats scolaires — et de poser les fondations d'un projet d'orientation réaliste et ambitieux.",
          ],
          callout: "Un profil complet pour des décisions structurantes éclairées.",
        },
        {
          title: "Choix stratégique de la spécialité à conserver",
          paragraphs: [
            "La Première est marquée par le choix de la spécialité à abandonner — une décision déterminante pour l'accès à certaines filières. Nous accompagnons cette réflexion en croisant le projet d'études envisagé avec les exigences des formations ciblées et le niveau réel de l'élève.",
          ],
          bullets: [
            "Analyse des attendus des formations post-bac visées",
            "Évaluation des performances et appétences de l'élève",
            "Stratégie de maintien des options les plus porteuses",
          ],
          callout: "Un choix aligné avec le potentiel de l'élève et les exigences des établissements.",
        },
        {
          title: "Short-list d'écoles anticipée",
          paragraphs: [
            "Nous établissons dès la Première une première short-list de formations et d'établissements. Ce repère stratégique permet à l'élève de visualiser ses objectifs, comprendre les exigences et adapter son travail scolaire en conséquence.",
          ],
          bullets: [
            "Consolider les acquis dans les matières clés",
            "Renforcer les points faibles identifiés",
            "Préparer progressivement les exigences de la Terminale",
          ],
        },
        {
          title: "Accompagnement académique intégré",
          paragraphs: [
            "Lorsque nécessaire, nous intégrons directement du soutien scolaire ciblé, une préparation progressive aux futures échéances (concours, certifications de langues) et un travail de structuration des méthodes de travail.",
            "L'objectif : aligner dès la Première le niveau académique de l'élève avec ses ambitions d'orientation.",
          ],
        },
        {
          title: "Ouverture progressive vers l'international",
          paragraphs: [
            "Pour les élèves envisageant des études à l'étranger, nous amorçons une réflexion sur les destinations possibles, les prérequis académiques et linguistiques, et les parcours à construire dès maintenant pour maximiser les chances d'admission.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse ce programme ?",
        groups: [
          {
            title: "Élèves de Première",
            bullets: [
              "Qui souhaitent clarifier leur projet post-bac avec anticipation",
              "Qui veulent faire un choix éclairé de la spécialité à conserver",
              "Qui recherchent un accompagnement pour prendre de l'avance sur la Terminale",
            ],
          },
          {
            title: "Parents",
            bullets: [
              "Qui souhaitent être informés et rassurés face aux décisions structurantes",
              "Qui veulent anticiper les choix pour ne pas les subir en Terminale",
              "Qui recherchent un cadre expert pour guider leur enfant avec sérénité",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi STUDASSIST dès la Première ?",
        bullets: [
          "Une orientation pensée en amont des échéances de Terminale",
          "Un profiling complet pour des choix éclairés",
          "Une short-list d'écoles construite avec un an d'avance",
          "Un plan d'action académique personnalisé et évolutif",
          "Un soutien scolaire et concours intégré au parcours",
          "Une vision stratégique à long terme du parcours académique",
        ],
      }}

      ctaBanner={{
        title: "Préparez la Terminale avec une longueur d'avance.",
        body: "Votre enfant est en Première et doit faire des choix décisifs ? Parlons-en lors d'un premier rendez-vous sans engagement.",
      }}

      prev={{ label: "Orientation en Seconde", to: "/orientation/seconde" }}
      next={{ label: "Orientation en Terminale", to: "/orientation/terminale" }}
    />
  );
}
