import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationSeconde() {
  return (
    <OrientationLevelPage
      eyebrow="Lycée · Seconde"
      accent="gold"
      title={<>Orientation scolaire <span className="text-brand-teal">en Seconde</span></>}
      subtitle="Anticiper le choix des spécialités et poser les bases d'un projet cohérent."
      intro={[
        "La Seconde est l'année du choix des spécialités de Première — un moment structurant pour le parcours post-bac.",
        "STUDASSIST accompagne élèves et familles dans une démarche d'orientation anticipée et évolutive.",
      ]}
      heroImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Pourquoi agir dès la Seconde ?",
        lead: "L'orientation ne doit pas être subie. La Seconde est l'année idéale pour anticiper et choisir.",
        bullets: [
          "Identifier les points forts et centres d'intérêt de l'élève",
          "Explorer les filières et secteurs professionnels",
          "Préparer le choix stratégique des trois spécialités",
          "Donner du sens au travail scolaire et renforcer la motivation",
        ],
      }}

      sections={[
        {
          title: "Un pré-projet évolutif",
          paragraphs: [
            "Nous construisons un pré-projet d'orientation flexible — une boussole, pas un carcan.",
          ],
          bullets: [
            "Orienter les choix de spécialités",
            "Structurer le travail scolaire",
            "Anticiper les exigences futures",
          ],
          callout: "Le projet reste ouvert et adaptable à la maturation de l'élève.",
        },
        {
          title: "Profiling et diagnostic complet",
          paragraphs: [
            "Entretien familial + entretiens individuels : parcours scolaire, personnalité, centres d'intérêt et capacités d'engagement — pour une lecture globale du profil.",
          ],
        },
        {
          title: "Choix stratégique des spécialités",
          bullets: [
            "Pré-projet d'orientation envisagé",
            "Exigences des filières post-bac ciblées",
            "Niveau réel et potentiel de progression",
          ],
          callout: "Un choix cohérent et ambitieux, en gardant des options ouvertes.",
        },
        {
          title: "Plan d'action personnalisé",
          paragraphs: [
            "Renforcement des fondamentaux, méthodologie de travail et soutien scolaire ciblé si nécessaire.",
          ],
        },
        {
          title: "Ouverture internationale",
          paragraphs: [
            "Pour les profils internationaux : réflexion sur les parcours adaptés et préparation aux certifications de langues dès la Seconde.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse ce programme ?",
        groups: [
          {
            title: "Élèves de Seconde",
            bullets: [
              "Choisir ses spécialités de manière réfléchie",
              "Explorer les domaines d'études possibles",
              "Bénéficier d'un accompagnement personnalisé",
            ],
          },
          {
            title: "Parents",
            bullets: [
              "Comprendre l'impact des spécialités sur le post-bac",
              "Être guidés dans un environnement complexe",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi STUDASSIST dès la Seconde ?",
        bullets: [
          "Orientation anticipée et évolutive",
          "Profiling complet de l'élève",
          "Accompagnement stratégique pour les spécialités",
          "Plan d'action académique personnalisé",
          "Vision long terme du parcours",
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
