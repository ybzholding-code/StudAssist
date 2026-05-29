import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "demarches", label: "Démarches administratives", href: "/admin-logement/demarches" },
  { key: "logement", label: "Logement étudiant", href: "/admin-logement/logement" },
];

export default function AdminDemarches() {
  return (
    <OrientationLevelPage
      eyebrow="Admin & Logement · Démarches"
      accent="blue"
      title={<>Démarches administratives <span className="text-brand-teal">d'installation étudiante</span></>}
      subtitle="Sécuriser chaque étape de l'expatriation étudiante"
      intro={[
        "Les démarches administratives constituent une étape essentielle dans un projet d'études à l'international. Elles interviennent une fois l'admission confirmée et l'établissement d'enseignement supérieur définitivement choisi.",
        "Souvent complexes et chronophages, elles peuvent générer du stress pour les élèves et leurs familles. Chez STUDASSIST, nous proposons un accompagnement structuré permettant de cadrer, anticiper et sécuriser l'ensemble des démarches d'expatriation.",
      ]}
      heroImage="/hero-admin-new.png"
      heroCtaLabel="Prendre rendez-vous"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Démarches administratives"
      enjeuxEyebrow="Un accompagnement après l'admission"
      whyChooseEyebrow="+7 ans d'expérience — 100% de dossiers sécurisés"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Un cadrage global des démarches",
        lead: "Nous identifions et organisons l'ensemble des étapes nécessaires à l'installation de l'étudiant à l'étranger :",
        bullets: [
          "Démarches de visa étudiant et titre de séjour",
          "Affiliation à la sécurité sociale et à une mutuelle santé",
          "Ouverture d'un compte bancaire à l'étranger",
          "Formalités administratives liées à l'installation",
          "Vision claire, structurée et anticipée de toutes les étapes",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/passport.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
          "https://img.icons8.com/3d-fluency/94/bank-card-back-side.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
        ],
      }}

      sections={[
        {
          title: "Un accompagnement déclenché après l'admission",
          paragraphs: [
            "Notre intervention débute une fois le projet académique validé. À partir de ce moment, nous réalisons un cadrage complet des démarches administratives à effectuer, en fonction du pays de destination, du statut de l'étudiant et des exigences locales.",
          ],
        },
        {
          title: "Un accompagnement opérationnel de A à Z",
          paragraphs: [
            "Au-delà du cadrage, nous accompagnons concrètement les élèves et leurs familles dans la réalisation de chaque démarche. Nous intervenons notamment sur : la collecte et la vérification des documents, les démarches en ligne, le suivi des dossiers administratifs et la coordination avec les différentes institutions.",
            "Nous prenons également en charge les démarches nécessaires au Maroc, telles que : la légalisation de documents, l'apostille et la traduction officielle. L'objectif est de simplifier chaque étape et d'éviter toute erreur ou retard.",
          ],
        },
        {
          title: "Un gain de temps et de sérénité",
          paragraphs: [
            "Cet accompagnement permet aux élèves et à leurs familles de se décharger des contraintes administratives. Ils peuvent ainsi se concentrer pleinement sur leur rentrée et aborder le début de leur parcours universitaire dans les meilleures conditions.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cet accompagnement ?",
        groups: [{
          title: "Élèves et familles",
          bullets: [
            "ayant obtenu une admission dans un établissement à l'étranger,",
            "devant effectuer des démarches de visa, sécurité sociale, compte bancaire,",
            "souhaitant un accompagnement opérationnel et structuré,",
            "recherchant un interlocuteur unique pour piloter l'ensemble du processus.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "+7 ans d'expérience dans l'accompagnement administratif étudiant",
          "Une équipe professionnelle, rigoureuse et à l'écoute",
          "Un pilotage efficace de chaque étape du processus",
          "Anticipation des contraintes et prévention des erreurs",
          "Un accompagnement fiable et serein de A à Z",
          "Permettre aux élèves de se concentrer pleinement sur leur rentrée",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
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
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Nous contacter",
        secondaryHref: "/contact",
      }}

      faqKeys={["international", "orientation"]}
      next={{ label: "Logement étudiant", to: "/admin-logement/logement" }}
    />
  );
}
