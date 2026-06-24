import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "demarches", label: "Démarches administratives", href: "/admin-logement/demarches" },
  { key: "logement", label: "Logement étudiant", href: "/admin-logement/logement" },
];

export default function AdminDemarches() {
  return (
    <OrientationLevelPage
      eyebrow="ADMINISTRATIF & LOGEMENT"
      accent="blue"
      title={<>Démarches administratives{" "}<span className="text-brand-teal">d'installation étudiante à l'étranger</span></>}
      subtitle="Sécuriser chaque étape de l'expatriation étudiante"
      intro={[
        "Les démarches administratives constituent une étape essentielle dans un projet d'études à l'international. Elles interviennent une fois l'admission confirmée et l'établissement d'enseignement supérieur définitivement choisi.",
        "Souvent complexes et chronophages, elles peuvent générer du stress pour les élèves et leurs familles. Chez STUDASSIST, nous proposons un accompagnement structuré permettant de cadrer, anticiper et sécuriser l'ensemble des démarches d'expatriation.",
      ]}
      heroImage="/hero-admin-logement.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver un rendez-vous d'informations"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Accompagnement aux démarches administratives à l'étranger"
      enjeuxEyebrow="Les enjeux"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux des démarches administratives étudiantes à l'étranger",
        lead: "Une admission obtenue ne marque pas la fin du projet, mais le début d'une nouvelle étape. Visa, sécurité sociale, compte bancaire, logement ou formalités locales : une bonne anticipation est essentielle pour sécuriser l'installation de l'étudiant et lui permettre d'aborder sa rentrée sereinement.",
        bullets: [
          "Constituer un dossier conforme : les démarches nécessitent souvent la collecte et la préparation de nombreux documents administratifs",
          "Respecter les délais : certaines procédures doivent être engagées plusieurs semaines, voire plusieurs mois avant le départ",
          "S'adapter aux exigences du pays de destination : chaque pays possède ses propres règles, plateformes et formalités administratives",
          "Préparer une installation sereine : visa, couverture santé, banque, logement et démarches locales doivent être anticipés pour faciliter l'arrivée de l'étudiant",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/home.png",
        ],
      }}

      sections={[
        {
          title: "Un cadrage complet des démarches après l'admission",
          paragraphs: [
            "Notre intervention débute une fois le projet académique validé. À partir de ce moment, nous réalisons un cadrage complet des démarches administratives à effectuer, en fonction du pays de destination, du statut de l'étudiant et des exigences locales.",
            "Nous identifions et organisons l'ensemble des étapes nécessaires à l'installation de l'étudiant à l'étranger, notamment : les démarches de visa étudiant et titre de séjour, l'affiliation à la sécurité sociale et à une mutuelle santé, l'ouverture d'un compte bancaire à l'étranger et l'ensemble des formalités administratives liées à l'installation.",
            "Ce cadrage permet d'avoir une vision claire, structurée et anticipée de toutes les étapes.",
            "Nous accompagnons les étudiants dans leurs démarches administratives pour de nombreuses destinations d'études, notamment la France, l'Espagne, la Belgique, le Royaume-Uni, le Canada, la Suisse et d'autres pays accueillant des étudiants internationaux. Chaque accompagnement est adapté aux exigences spécifiques du pays de destination et au profil de l'étudiant.",
          ],
        },
        {
          title: "Un accompagnement opérationnel de A à Z",
          paragraphs: [
            "Une fois le cadrage accompli, nous accompagnons concrètement les élèves et leurs familles dans la réalisation de chaque démarche en mettant en place un plan d'action spécifique en fonction du besoin.",
            "Nous intervenons notamment sur : la collecte et la vérification des documents, les démarches en ligne, le suivi des dossiers administratifs et la coordination avec les différentes institutions.",
            "Nous prenons également en charge les démarches nécessaires au Maroc, telles que : la légalisation de documents, les apostilles et la traduction officielle. L'objectif est de simplifier chaque étape à l'étudiant et sa famille et d'éviter toute erreur ou retard.",
          ],
        },
        {
          title: "Aborder son installation avec sérénité",
          paragraphs: [
            "Cet accompagnement permet aux élèves et à leurs familles de se décharger des contraintes administratives. Ils peuvent ainsi se concentrer pleinement sur leur rentrée et aborder le début de leur parcours universitaire dans les meilleures conditions.",
          ],
        },
        {
          title: "À qui s'adresse notre accompagnement administratif ?",
          paragraphs: [
            "Cet accompagnement s'adresse aux élèves, étudiants et familles ayant obtenu une admission dans un établissement à l'étranger et souhaitant être guidés dans les démarches liées à leur installation.",
          ],
          bullets: [
            "Aux étudiants préparant un départ pour la France, l'Espagne, la Belgique, le Royaume-Uni, le Canada ou toute autre destination internationale",
            "Aux familles souhaitant sécuriser les démarches administratives et éviter les erreurs ou oublis",
            "Aux étudiants devant effectuer des formalités complexes de visa, titre de séjour ou équivalence de diplôme",
            "Aux candidats souhaitant gagner du temps et bénéficier d'un accompagnement structuré",
            "Aux familles recherchant un interlocuteur unique pour coordonner l'ensemble des démarches avant le départ",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST dans l'accompagnement aux démarches administratives ?",
        bullets: [
          "+7 ans d'expérience dans l'accompagnement administratif étudiant",
          "Une équipe professionnelle, rigoureuse et à l'écoute",
          "Un pilotage efficace de chaque étape du processus",
          "Une anticipation des contraintes et des délais ainsi que la prévention des erreurs",
          "Un accompagnement personnalisé, fiable et serein de A à Z",
          "Un gain de temps et d'énergie considérable pour les élèves ainsi que les parents",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez être accompagné dans les démarches administratives liées aux études à l'étranger ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Nous écrire",
        secondaryHref: "/contact",
      }}

      faqKeys={["admin-logement"]}
      faqTitle="FAQ – Démarches administratives et logement étudiant à l'étranger"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur les démarches administratives et le logement étudiant."
      next={{ label: "Logement étudiant", to: "/admin-logement/logement" }}
    />
  );
}
