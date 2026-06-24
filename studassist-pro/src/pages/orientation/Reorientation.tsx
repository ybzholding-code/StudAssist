import { Link } from "react-router-dom";
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
      heroContainerAspectRatio="aspect-[3/2]"
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
          "Construire un nouveau projet cohérent avec les aspirations réelles et le potentiel du candidat",
          "Valoriser l'expérience acquise dans le nouveau parcours",
          "Sécuriser la transition avec un socle académique solide et une méthodologie de candidatures structurée et éprouvée",
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
          title: "Comprendre avant de réorienter pour repositionner le projet avec méthode",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2">Comprendre avant de réorienter</span>,
            "Une réorientation réussie commence par une analyse approfondie du parcours initial. Nous prenons le temps d’étudier le cursus suivi, les résultats obtenus, les compétences développées, les expériences vécues et les difficultés rencontrées.",
            "Au-delà de ce premier diagnostic académique, nous réalisons également un travail approfondi sur qui est réellement l’étudiant : ses aspirations, ses centres d’intérêt, ses forces, ses axes de progression et sa personnalité.",
            "Cette approche globale nous permet de dépasser la simple notion d’insatisfaction pour construire un repositionnement stratégique du projet d’orientation, aligné à la fois avec le potentiel réel de l’étudiant et ses ambitions personnelles.",
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2">Repositionner le projet avec méthode</span>,
            "À partir de cette analyse complète, nous accompagnons l’étudiant dans la construction d’un nouveau projet académique. Nous clarifions les objectifs, explorons les filières alternatives et sélectionnons des établissements adaptés au profil et aux ambitions.",
          ],
          callout: "La réorientation n’est jamais traitée comme un simple changement de direction. Elle est pensée comme une reconstruction cohérente, intégrant l’expérience déjà acquise et visant une trajectoire plus alignée avec le potentiel de l’étudiant.",
        },
        {
          title: "Aligner le niveau académique avec le nouveau cap et reconstruire des candidatures convaincantes",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2">Aligner le niveau académique avec le nouveau cap</span>,
            <>
              Lorsque le projet l’exige, nous intégrons un accompagnement académique complémentaire. Cela peut inclure une{" "}
              <Link to="/soutien-scolaire" className="text-brand-darkblue font-black underline underline-offset-2">remise à niveau</Link>{" "}
              dans certaines matières, une{" "}
              <Link to="/prepas-concours" className="text-brand-darkblue font-black underline underline-offset-2">préparation à des concours</Link>{" "}
              spécifiques ou des{" "}
              <Link to="/certifications" className="text-brand-darkblue font-black underline underline-offset-2">certifications de langues</Link>
              , selon les exigences des formations visées.
            </>,
            "Cette étape permet de sécuriser la transition et d’aborder la nouvelle orientation avec un socle académique solide.",
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2">Reconstruire des candidatures convaincantes</span>,
            "La réorientation nécessite souvent d’expliquer son parcours avec clarté et maturité. Nous accompagnons les étudiants dans la constitution de leurs dossiers, la rédaction de lettres de motivation cohérentes et la structuration d’un discours valorisant le chemin parcouru.",
            "Une attention particulière est portée à la narration du projet : il s’agit de transformer une bifurcation en preuve de réflexion, d’évolution et de détermination.",
            "Les étudiants sont également préparés aux entretiens à travers des simulations et un travail approfondi sur la posture, la confiance et la cohérence du discours.",
          ],
        },
        {
          title: "Une expertise globale au service d’un accompagnement humain",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2">Une expertise nationale et internationale</span>,
            "Pour les projets au Maroc comme à l’étranger, nous mettons à profit notre expérience et notre maîtrise des procédures de candidatures, sur plateformes officielles ou hors plateformes. Nous accompagnons les étudiants vers plus de 25 destinations, en construisant des stratégies adaptées à chaque contexte académique.",
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2">Un accompagnement humain et rassurant</span>,
            "La réorientation est souvent une période sensible, marquée par des interrogations personnelles et parfois une perte de confiance.",
            "Chez STUDASSIST, nous accordons une place centrale à l’écoute, à la pédagogie et à l’accompagnement humain, afin de transformer cette transition en expérience constructive et structurante.",
            "Nous travaillons en lien direct avec l’étudiant — et, lorsque cela est pertinent, avec sa famille — afin d’assurer un cadre transparent et sécurisant tout au long du processus.",
          ],
        },
        {
          title: "À qui s’adresse la réorientation ?",
          paragraphs: [
            "Notre accompagnement s’adresse aux lycéens souhaitant changer de filière, aux étudiants post-bac remettant en question leur premier choix, ainsi qu’aux titulaires de Bac+3 désireux de repositionner leur trajectoire académique. Plus largement, il concerne toute personne souhaitant redonner du sens à son parcours et construire une orientation plus alignée avec son potentiel.",
          ],
        },
      ]}

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
        secondaryHref: "/contact",
      }}

      faqKeys={["orientation"]}
      prev={{ label: "Orientation en Terminale", to: "/orientation/terminale" }}
      next={{ label: "Orientation Master", to: "/orientation/master" }}
    />
  );
}
