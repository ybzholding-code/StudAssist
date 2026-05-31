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
      heroImage="/hero-reorientation.png"
      heroCtaLabel="Réserver un rendez-vous de 1er contact"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      enjeuxEyebrow="Les enjeux de la réorientation"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

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
        title: "Pourquoi choisir STUDASSIST pour se réorienter ?",
        bullets: [
          "Une orientation anticipée et stratégique pour votre réorientation dans une logique humaine, structurée et rassurante",
          "Un profiling complet de l’élève pour des choix de réorientation éclairés",
          "Une short-list d’écoles construite pour votre réorientation avec une vision stratégique et ouverte sur l’international",
          "Un plan d’action académique personnalisé et évolutif dans un esprit d’anticipation des exigences de votre nouveau parcours",
          "Une intégration possible d’un programme de renforcement scolaire, de préparation de concours et des certifications de langues",
          "Un accompagnement humain, bienveillant, rigoureux et transparent",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/school.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/medal.png",
          "https://img.icons8.com/3d-fluency/94/handshake.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous envisagez une réorientation et souhaitez être accompagné(e) avec méthode et bienveillance ? Prenons rendez-vous.",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Contacter un conseiller",
        secondaryHref: "https://wa.me/212669495996",
      }}

      prev={{ label: "Orientation en Terminale", to: "/orientation/terminale" }}
      next={{ label: "Orientation Master", to: "/orientation/master" }}
    />
  );
}
