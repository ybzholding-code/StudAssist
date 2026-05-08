import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationReorientation() {
  return (
    <OrientationLevelPage
      eyebrow="Transition · Réorientation"
      accent="coral"
      title={<>Réorientation <span className="text-brand-teal">académique</span></>}
      subtitle="Transformer un premier choix en nouveau départ stratégique."
      intro={[
        "Changer d'orientation n'est pas un échec — c'est une meilleure compréhension de soi.",
        "STUDASSIST structure votre réorientation avec méthode, au Maroc comme à l'international.",
      ]}
      heroImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"

      sections={[
        {
          title: "Comprendre avant de réorienter",
          paragraphs: [
            "Analyse du parcours initial, des compétences développées et du profil profond de l'étudiant.",
          ],
          callout: "Dépasser l'insatisfaction pour construire un repositionnement stratégique.",
        },
        {
          title: "Repositionner le projet",
          paragraphs: [
            "Clarification des objectifs, exploration des filières alternatives et sélection d'établissements adaptés.",
          ],
        },
        {
          title: "Remise à niveau si nécessaire",
          paragraphs: [
            "Accompagnement académique complémentaire, concours et certifications pour sécuriser la transition.",
          ],
        },
        {
          title: "Candidatures convaincantes",
          paragraphs: [
            "Narration du parcours, lettres de motivation et simulations d'entretiens — transformer une bifurcation en preuve de maturité.",
          ],
        },
        {
          title: "Expertise Maroc & international",
          paragraphs: [
            "+25 destinations, procédures plateformes et hors plateformes, stratégies adaptées à chaque contexte.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse la réorientation ?",
        groups: [
          {
            title: "Publics concernés",
            bullets: [
              "Lycéens souhaitant changer de filière",
              "Étudiants post-bac remettant en question leur choix",
              "Bac+3 voulant repositionner leur trajectoire",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi STUDASSIST pour se réorienter ?",
        bullets: [
          "Diagnostic complet du parcours initial",
          "Repositionnement stratégique et personnalisé",
          "Coaching sur la narration du parcours",
          "Accompagnement candidatures et entretiens",
          "Expertise Maroc et +25 destinations",
        ],
      }}

      ctaBanner={{
        title: "Transformons une transition en nouveau départ.",
        body: "Accompagnement avec méthode et bienveillance pour votre réorientation.",
      }}

      prev={{ label: "Orientation Master", to: "/orientation/master" }}
    />
  );
}
