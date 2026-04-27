import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationReorientation() {
  return (
    <OrientationLevelPage
      eyebrow="Transition · Réorientation"
      accent="coral"
      title={<>Réorientation <span className="sa-gradient-text">académique</span>.</>}
      subtitle="Transformer un premier choix en nouveau départ stratégique."
      intro={[
        "Changer d'orientation n'est pas un échec. C'est souvent le signe d'une meilleure compréhension de soi, de ses capacités et de ses aspirations.",
        "Chez STUDASSIST, nous accompagnons les élèves et étudiants dans une démarche de réorientation structurée, personnalisée et stratégique, en tenant compte du parcours déjà engagé afin de construire un nouveau projet cohérent, assumé et porteur de sens, au Maroc comme à l'international.",
      ]}
      heroImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"

      sections={[
        {
          title: "Comprendre avant de réorienter",
          paragraphs: [
            "Une réorientation réussie commence par une analyse approfondie du parcours initial. Nous prenons le temps d'étudier le cursus suivi, les résultats obtenus, les compétences développées, les expériences vécues et les difficultés rencontrées.",
            "Au-delà de ce premier diagnostic académique, nous réalisons également un travail approfondi sur qui est réellement l'élève ou l'étudiant : ses aspirations, ses centres d'intérêt, ses forces, ses axes de progression et sa personnalité.",
          ],
          callout: "Cette approche globale nous permet de dépasser la simple notion d'insatisfaction pour construire un repositionnement stratégique du projet d'orientation, aligné à la fois avec le potentiel réel de l'étudiant et ses ambitions personnelles.",
        },
        {
          title: "Repositionner le projet avec méthode",
          paragraphs: [
            "À partir de cette analyse complète, nous accompagnons l'élève ou l'étudiant dans la construction d'un nouveau projet académique. Nous clarifions les objectifs, explorons les filières alternatives et sélectionnons des établissements adaptés au profil et aux ambitions.",
            "La réorientation n'est jamais traitée comme un simple changement de direction. Elle est pensée comme une reconstruction cohérente, intégrant l'expérience déjà acquise et visant une trajectoire plus alignée avec le potentiel de l'étudiant.",
          ],
        },
        {
          title: "Aligner le niveau académique avec le nouveau cap",
          paragraphs: [
            "Lorsque le projet l'exige, nous intégrons un accompagnement académique complémentaire. Cela peut inclure une remise à niveau dans certaines matières, une préparation à des concours spécifiques ou des certifications de langues, selon les exigences des formations visées.",
          ],
          callout: "Cette étape permet de sécuriser la transition et d'aborder la nouvelle orientation avec un socle académique solide.",
        },
        {
          title: "Reconstruire des candidatures convaincantes",
          paragraphs: [
            "La réorientation nécessite souvent d'expliquer son parcours avec clarté et maturité. Nous accompagnons les étudiants dans la constitution de leurs dossiers, la rédaction de lettres de motivation cohérentes et la structuration d'un discours valorisant le chemin parcouru.",
            "Une attention particulière est portée à la narration du projet : il s'agit de transformer une bifurcation en preuve de réflexion, d'évolution et de détermination.",
            "Les étudiants sont également préparés aux entretiens à travers des simulations et un travail approfondi sur la posture, la confiance et la cohérence du discours.",
          ],
        },
        {
          title: "Une expertise nationale et internationale",
          paragraphs: [
            "Pour les projets au Maroc comme à l'étranger, nous mettons à profit notre expérience et notre maîtrise des procédures de candidatures, sur plateformes officielles ou hors plateformes. Nous accompagnons les étudiants vers plus de 25 destinations, en construisant des stratégies adaptées à chaque contexte académique.",
          ],
        },
        {
          title: "Un accompagnement humain et rassurant",
          paragraphs: [
            "La réorientation est souvent une période sensible, marquée par des interrogations personnelles et parfois une perte de confiance.",
            "Chez STUDASSIST, nous accordons une place centrale à l'écoute, à la pédagogie et à l'accompagnement humain, afin de transformer cette transition en expérience constructive et structurante.",
            "Nous travaillons en lien direct avec l'étudiant — et, lorsque cela est pertinent, avec sa famille — afin d'assurer un cadre transparent et sécurisant tout au long du processus.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse la réorientation ?",
        groups: [
          {
            title: "Publics concernés",
            bullets: [
              "Les lycéens souhaitant changer de filière",
              "Les étudiants post-bac remettant en question leur premier choix",
              "Les titulaires de Bac+3 désireux de repositionner leur trajectoire académique",
              "Toute personne souhaitant redonner du sens à son parcours et construire une orientation plus alignée avec son potentiel",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour votre réorientation ?",
        bullets: [
          "Un diagnostic complet du parcours initial",
          "Un repositionnement stratégique et personnalisé",
          "Une remise à niveau académique si nécessaire",
          "Un coaching sur la narration du parcours",
          "Un accompagnement aux entretiens et candidatures",
          "Une expertise Maroc et +25 destinations internationales",
          "Un accompagnement humain, pédagogique et sécurisant",
        ],
      }}

      ctaBanner={{
        title: "Transformons une transition en nouveau départ.",
        body: "Vous envisagez une réorientation et souhaitez être accompagné(e) dans cette transition avec méthode et bienveillance ?",
      }}

      prev={{ label: "Orientation Master", to: "/orientation/master" }}
    />
  );
}
