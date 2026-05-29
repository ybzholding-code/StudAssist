import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "ielts", label: "IELTS & TOEFL", href: "/certifications/ielts-toefl" },
  { key: "tcf", label: "TCF & DALF", href: "/certifications/tcf-dalf" },
  { key: "dele", label: "DELE", href: "/certifications/dele" },
];

export default function CertificationsDele() {
  return (
    <OrientationLevelPage
      eyebrow="Certifications · DELE"
      accent="gold"
      title={<>Prépa <span className="text-brand-teal">DELE</span></>}
      subtitle="Valider son niveau d'espagnol pour étudier et évoluer à l'international"
      intro={[
        "Le DELE (Diploma de Español como Lengua Extranjera) est une certification officielle délivrée par l'Institut Cervantes, reconnue à l'international. Il permet d'attester d'un niveau d'espagnol et constitue un atout important dans les candidatures académiques, notamment en Espagne et dans de nombreuses universités internationales.",
        "Chez STUDASSIST, nous accompagnons les élèves dans une préparation structurée et ciblée, avec un objectif clair : atteindre le niveau requis en fonction de leur projet.",
      ]}
      heroImage="/hero-certif-new.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="DELE"
      enjeuxEyebrow="Comprendre les enjeux"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les enjeux du DELE",
        lead: "Le DELE évalue la capacité à utiliser l'espagnol dans des contextes académiques et professionnels :",
        bullets: [
          "Compréhension écrite et orale",
          "Expression écrite et orale",
          "Exigences spécifiques selon les niveaux (B1, B2, C1…)",
          "Niveau B2 généralement requis pour les études supérieures",
          "Les formations les plus sélectives peuvent exiger un niveau C1",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/university.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      sections={[
        {
          title: "Un atout pour les candidatures internationales",
          paragraphs: [
            "Le DELE permet de valoriser un dossier académique et d'élargir ses opportunités : accès à des universités en Espagne, programmes internationaux, parcours bilingues ou trilingues.",
            "Il constitue également un élément différenciant dans un parcours académique.",
          ],
        },
        {
          title: "Une préparation structurée et personnalisée",
          paragraphs: [
            "La préparation débute par un test de niveau, permettant d'évaluer les compétences de l'élève et de définir un plan de progression adapté.",
            "Nous proposons un accompagnement flexible : en petits groupes de 4 élèves maximum pour garantir une progression efficace et un suivi de qualité, ou en format individuel pour répondre à des besoins spécifiques. Selon les objectifs et les échéances, la préparation peut s'inscrire dans la durée ou se concentrer sous forme de sessions intensives pendant les vacances scolaires.",
          ],
        },
        {
          title: "Une méthodologie adaptée aux exigences du DELE",
          paragraphs: [
            "Notre approche repose sur une préparation complète aux différentes épreuves. Les élèves travaillent la compréhension de documents, la structuration de leurs productions écrites et leur aisance à l'oral.",
            "Des entraînements réguliers et des mises en situation permettent de se familiariser avec les exigences du test et de progresser efficacement.",
          ],
        },
        {
          title: "Développer un espagnol académique et opérationnel",
          paragraphs: [
            "Au-delà de la préparation à l'examen, nous accompagnons les élèves dans le développement d'un espagnol structuré, précis et fluide. Ils apprennent à argumenter, à organiser leurs idées et à s'exprimer avec clarté, à l'écrit comme à l'oral.",
            "Cette approche leur permet non seulement de réussir le DELE, mais aussi de s'intégrer dans un environnement académique hispanophone.",
          ],
        },
        {
          title: "Une préparation intégrée au projet d'orientation",
          paragraphs: [
            "Chez STUDASSIST, la préparation au DELE s'inscrit dans une démarche globale d'orientation. Elle est directement liée au projet d'études de l'élève, aux destinations envisagées et aux établissements ciblés.",
            "Cela permet de définir un niveau objectif cohérent avec les ambitions académiques.",
          ],
        },
        {
          title: "Un accompagnement dans la durée",
          paragraphs: [
            "Nous accompagnons les élèves tout au long de leur préparation, en leur proposant des supports complémentaires et un suivi régulier. L'objectif est de sécuriser leur progression et de les préparer dans les meilleures conditions à l'examen.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cette préparation ?",
        groups: [{
          title: "Élèves et étudiants",
          bullets: [
            "souhaitant obtenir un diplôme officiel d'espagnol,",
            "visant des études en Espagne ou dans un environnement hispanophone,",
            "cherchant à valoriser leur profil avec une certification internationale,",
            "recherchant un accompagnement structuré et adapté à leur niveau.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Diagnostic initial et plan de progression personnalisé",
          "Groupes de 4 max ou format individuel",
          "Préparation complète aux 4 compétences linguistiques",
          "Entraînements et mises en situation format DELE",
          "+6 ans d'expérience — 100% de nos élèves décrochent le top 3 de leur choix",
          "Préparation intégrée au projet d'orientation",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/language.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez accompagner votre enfant dans sa préparation au DELE ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["concours", "international"]}
      prev={{ label: "TCF & DALF", to: "/certifications/tcf-dalf" }}
    />
  );
}
