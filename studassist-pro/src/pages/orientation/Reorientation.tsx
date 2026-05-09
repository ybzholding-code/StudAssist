import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationReorientation() {
  return (
    <OrientationLevelPage
      eyebrow="Transition · Réorientation"
      accent="coral"
      title={<>Réorientation <span className="text-brand-teal">académique</span></>}
      subtitle="Transformer un premier choix en nouveau départ stratégique et assumé."
      intro={[
        "Changer d'orientation n'est pas un échec. C'est souvent le signe d'une meilleure compréhension de soi, de ses capacités et de ses aspirations réelles.",
        "Chez STUDASSIST, nous accompagnons les élèves et étudiants dans une démarche de réorientation structurée et personnalisée, en tenant compte du parcours déjà engagé pour construire un nouveau projet cohérent et porteur de sens, au Maroc comme à l'international.",
      ]}
      heroImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Les enjeux d'une réorientation réussie",
        lead: "Une réorientation bien accompagnée transforme une situation d'insatisfaction en opportunité de repositionnement stratégique.",
        bullets: [
          "Comprendre les raisons profondes du besoin de changement",
          "Construire un nouveau projet cohérent avec le potentiel réel",
          "Valoriser l'expérience acquise dans le nouveau parcours",
          "Sécuriser la transition avec un socle académique solide",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/puzzle.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
        ],
      }}

      sections={[
        {
          title: "Comprendre avant de réorienter",
          paragraphs: [
            "Une réorientation réussie commence par une analyse approfondie du parcours initial : cursus suivi, résultats obtenus, compétences développées, expériences vécues et difficultés rencontrées.",
            "Au-delà du diagnostic académique, nous réalisons un travail approfondi sur les aspirations, les centres d'intérêt, les forces et la personnalité de l'élève ou de l'étudiant.",
          ],
          callout: "Cette approche globale permet de dépasser la simple insatisfaction pour construire un repositionnement stratégique aligné avec le potentiel réel.",
        },
        {
          title: "Repositionner le projet avec méthode",
          paragraphs: [
            "À partir de cette analyse complète, nous accompagnons la construction d'un nouveau projet académique : clarification des objectifs, exploration des filières alternatives et sélection d'établissements adaptés au profil et aux ambitions.",
            "La réorientation n'est jamais traitée comme un simple changement de direction. Elle est pensée comme une reconstruction cohérente, intégrant l'expérience déjà acquise et visant une trajectoire plus alignée.",
          ],
        },
        {
          title: "Aligner le niveau académique avec le nouveau cap",
          paragraphs: [
            "Lorsque le projet l'exige, nous intégrons un accompagnement académique complémentaire : remise à niveau dans certaines matières, préparation à des concours spécifiques ou certifications de langues selon les exigences des formations visées.",
          ],
          callout: "Cette étape sécurise la transition et permet d'aborder la nouvelle orientation avec un socle solide.",
        },
        {
          title: "Reconstruire des candidatures convaincantes",
          paragraphs: [
            "La réorientation nécessite d'expliquer son parcours avec clarté et maturité. Nous accompagnons la constitution des dossiers, la rédaction de lettres de motivation cohérentes et la structuration d'un discours qui valorise le chemin parcouru.",
            "Les étudiants sont également préparés aux entretiens à travers des simulations et un travail sur la posture, la confiance et la cohérence du discours.",
          ],
        },
        {
          title: "Expertise nationale et internationale",
          paragraphs: [
            "Pour les projets au Maroc comme à l'étranger, nous mettons à profit notre expérience et notre maîtrise des procédures de candidatures — sur plateformes officielles ou hors plateformes — vers plus de 25 destinations, avec des stratégies adaptées à chaque contexte académique.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse la réorientation ?",
        groups: [
          {
            title: "Publics concernés",
            bullets: [
              "Lycéens souhaitant changer de filière pour un parcours plus adapté",
              "Étudiants post-bac qui remettent en question leur premier choix d'orientation",
              "Titulaires d'un Bac+3 désireux de repositionner leur trajectoire académique",
              "Toute personne souhaitant redonner du sens à son parcours d'études",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi STUDASSIST pour se réorienter ?",
        bullets: [
          "Un diagnostic complet et objectif du parcours initial",
          "Un repositionnement stratégique et personnalisé du projet",
          "Un coaching expert sur la narration du parcours",
          "Un accompagnement complet aux candidatures et entretiens",
          "Une remise à niveau académique intégrée si nécessaire",
          "Une expertise Maroc & international couvrant +25 destinations",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
        ],
      }}

      ctaBanner={{
        title: "Transformons une transition en nouveau départ.",
        body: "Vous envisagez une réorientation et souhaitez être accompagné(e) avec méthode et bienveillance ? Prenons rendez-vous.",
      }}

      prev={{ label: "Orientation Master", to: "/orientation/master" }}
    />
  );
}
