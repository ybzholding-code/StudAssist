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
      heroImage="/hero-reorientation-new.png"
      heroContainerAspectRatio="aspect-[4/3]"
      heroImageClassName="!object-contain bg-gray-50"
      heroCtaLabel="Réserver un rendez-vous de 1er contact"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur l'accompagnement en réorientation académique."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      sections={[
        {
          title: "Comprendre avant de réorienter pour repositionner le projet avec méthode",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Comprendre avant de réorienter</span>,
            <span>Une réorientation réussie commence par une <strong className="font-extrabold text-brand-darkblue">analyse approfondie du parcours initial</strong>. Nous prenons le temps d’étudier le cursus suivi, les résultats obtenus, les compétences développées, les expériences vécues et les difficultés rencontrées.</span>,
            <span>Au-delà de ce premier diagnostic académique, nous réalisons également un travail approfondi sur <strong className="font-extrabold text-brand-darkblue">qui est réellement l’étudiant</strong> : ses aspirations, ses centres d’intérêt, ses forces, ses axes de progression et sa personnalité.</span>,
            <span>Cette approche globale nous permet de dépasser la simple notion d’insatisfaction pour construire un <strong className="font-extrabold text-brand-darkblue">repositionnement stratégique du projet d’orientation</strong>, aligné à la fois avec le potentiel réel de l’étudiant et ses ambitions personnelles.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Repositionner le projet avec méthode</span>,
            <span>À partir de cette analyse complète, nous accompagnons l’étudiant dans la construction d’un <strong className="font-extrabold text-brand-darkblue">nouveau projet académique</strong>. Nous clarifions les objectifs, explorons les filières alternatives et sélectionnons des établissements adaptés au profil et aux ambitions.</span>,
          ],
          callout: "La réorientation n’est jamais traitée comme un simple changement de direction. Elle est pensée comme une reconstruction cohérente, intégrant l’expérience déjà acquise et visant une trajectoire plus alignée avec le potentiel de l’étudiant.",
        },
        {
          title: "Aligner le niveau académique avec le nouveau cap et reconstruire des candidatures convaincantes",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Aligner le niveau académique avec le nouveau cap</span>,
            <>
              Lorsque le projet l’exige, nous intégrons un accompagnement académique complémentaire. Cela peut inclure une{" "}
              <Link to="/soutien-scolaire" className="text-brand-darkblue font-black underline underline-offset-2">remise à niveau</Link>{" "}
              dans certaines matières, une{" "}
              <Link to="/prepas-concours" className="text-brand-darkblue font-black underline underline-offset-2">préparation à des concours</Link>{" "}
              spécifiques ou des{" "}
              <Link to="/certifications" className="text-brand-darkblue font-black underline underline-offset-2">certifications de langues</Link>
              , selon les exigences des formations visées.
            </>,
            <span>Cette étape permet de <strong className="font-extrabold text-brand-darkblue">sécuriser la transition</strong> et d’aborder la nouvelle orientation avec un <strong className="font-extrabold text-brand-darkblue">socle académique solide</strong>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Reconstruire des candidatures convaincantes</span>,
            <span>La réorientation nécessite souvent d’expliquer son parcours avec clarté et maturité. Nous accompagnons les étudiants dans la <strong className="font-extrabold text-brand-darkblue">constitution des dossiers</strong>, la rédaction de <strong className="font-extrabold text-brand-darkblue">lettres de motivation cohérentes</strong> et la structuration d’un discours valorisant le chemin parcouru.</span>,
            <span>Une attention particulière est portée à la <strong className="font-extrabold text-brand-darkblue">narration du projet</strong> : il s’agit de transformer une bifurcation en preuve de réflexion, d’évolution et de détermination.</span>,
            <span>Les étudiants sont également préparés aux <strong className="font-extrabold text-brand-darkblue">entretiens</strong> à travers des simulations et un travail approfondi sur la posture, la confiance et la cohérence du discours.</span>,
          ],
        },
        {
          title: "Une expertise globale au service d’un accompagnement humain",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Une expertise nationale et internationale</span>,
            "Pour les projets au Maroc comme à l’étranger, nous mettons à profit notre expérience et notre maîtrise des procédures de candidatures, sur plateformes officielles ou hors plateformes. Nous accompagnons les étudiants vers plus de 25 destinations, en construisant des stratégies adaptées à chaque contexte académique.",
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement humain et rassurant</span>,
            <span>La réorientation est souvent une période sensible, marquée par des interrogations personnelles et parfois une <strong className="font-extrabold text-brand-darkblue">perte de confiance</strong>.</span>,
            <span>Chez STUDASSIST, nous accordons une place centrale à <strong className="font-extrabold text-brand-darkblue">l’écoute, la pédagogie et l’accompagnement humain</strong>, afin de transformer cette transition en expérience constructive et structurante.</span>,
            <span>Nous travaillons en lien direct avec l’étudiant — et, lorsque cela est pertinent, avec sa famille — afin d’assurer un <strong className="font-extrabold text-brand-darkblue">cadre transparent et sécurisant</strong> tout au long du processus.</span>,
          ],
        },
        {
          title: "À qui s’adresse la réorientation ?",
          paragraphs: [
            <span>Notre accompagnement s’adresse aux <strong className="font-extrabold text-brand-darkblue">lycéens souhaitant changer de filière</strong>, aux <strong className="font-extrabold text-brand-darkblue">étudiants post-bac</strong> remettant en question leur premier choix, ainsi qu’aux <strong className="font-extrabold text-brand-darkblue">titulaires de Bac+3</strong> désireux de repositionner leur trajectoire académique. Plus largement, il concerne toute personne souhaitant redonner du sens à son parcours et construire une orientation plus alignée avec son potentiel.</span>,
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
