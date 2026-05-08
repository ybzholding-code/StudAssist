import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationPremiere() {
  return (
    <OrientationLevelPage
      eyebrow="Lycée · Première"
      accent="blue"
      title={<>Orientation scolaire <span className="text-brand-teal">en Première</span></>}
      subtitle="Structurer le projet post-bac et préparer la Terminale avec une longueur d'avance."
      intro={[
        "La Première est l'année où se précisent les choix — notamment la spécialité à abandonner. Les résultats prennent du poids.",
        "STUDASSIST aide à poser les bases d'un projet solide pour aborder la Terminale avec clarté.",
      ]}
      heroImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Pourquoi anticiper dès la Première ?",
        lead: "L'orientation ne commence pas en Terminale. La Première est le moment idéal pour prendre de l'avance.",
        bullets: [
          "Clarifier centres d'intérêt et aspirations",
          "Choisir la spécialité à conserver de manière éclairée",
          "Renforcer les matières stratégiques",
          "Anticiper les exigences post-bac",
        ],
      }}

      sections={[
        {
          title: "Profiling et diagnostic complet",
          paragraphs: [
            "Entretien familial + profiling individuel pour construire une lecture globale au-delà des résultats.",
          ],
          callout: "Des fondations solides pour un projet réaliste et ambitieux.",
        },
        {
          title: "Choix de la spécialité à conserver",
          bullets: [
            "Projet d'études envisagé",
            "Exigences des formations ciblées",
            "Niveau réel et appétences de l'élève",
          ],
          callout: "Un choix stratégique, aligné avec le potentiel et les attendus des établissements.",
        },
        {
          title: "Short-list d'écoles anticipée",
          paragraphs: [
            "Nous établissons une première short-list de formations pour donner un cap et adapter le travail scolaire en conséquence.",
          ],
          bullets: [
            "Consolider les acquis",
            "Renforcer les matières stratégiques",
            "Préparer les exigences de Terminale",
          ],
        },
        {
          title: "Soutien académique intégré",
          paragraphs: [
            "Soutien scolaire ciblé, préparation aux concours et certifications de langues — alignés avec le projet d'orientation.",
          ],
        },
        {
          title: "Ouverture internationale",
          paragraphs: [
            "Réflexion sur les destinations, prérequis linguistiques et parcours à construire pour les profils internationaux.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse ce programme ?",
        groups: [
          {
            title: "Élèves de Première",
            bullets: [
              "Clarifier l'avenir post-bac",
              "Faire un choix éclairé de spécialité",
              "Prendre de l'avance sur la Terminale",
            ],
          },
          {
            title: "Parents",
            bullets: [
              "Être informés et rassurés",
              "Anticiper les choix structurants",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi STUDASSIST dès la Première ?",
        bullets: [
          "Orientation pensée en amont",
          "Short-list d'écoles dès la Première",
          "Plan d'action académique personnalisé",
          "Anticipation des exigences de Terminale",
          "Vision long terme du parcours",
        ],
      }}

      ctaBanner={{
        title: "Préparez la Terminale avec une longueur d'avance.",
        body: "Aidez votre enfant à faire les bons choix dès maintenant.",
      }}

      prev={{ label: "Orientation en Seconde", to: "/orientation/seconde" }}
      next={{ label: "Orientation en Terminale", to: "/orientation/terminale" }}
    />
  );
}
