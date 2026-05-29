import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "sat-gmat", label: "SAT / GMAT", href: "/prepa-sat-gmat" },
  { key: "sesame-acces", label: "SESAME & ACCÈS", href: "/prepa-concours-sesame-acces" },
  { key: "encg-iscae", label: "ENCG & ISCAE", href: "/prepa-concours-encg-iscae" },
  { key: "avenir-geipi", label: "Ingé France", href: "/prepa-concours-avenir-geipi-puissance-alpha" },
  { key: "um6p", label: "Ingé UM6P", href: "/prepa-concours-um6p" },
  { key: "medecine-maroc", label: "Médecine Maroc", href: "/prepa-medecine-maroc" },
  { key: "medecine-belgique", label: "Médecine Belgique", href: "/prepa-medecine-belgique" },
  { key: "sciences-po", label: "Sciences Po", href: "/prepa-sciences-po" },
  { key: "architecture", label: "Architecture ENA", href: "/prepa-architecture-ena" },
];

export default function PrepaSciences() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · Sciences-Po"
      accent="pink"
      title={<>Prépa Concours <span className="text-brand-teal">Sciences Po</span> (Réseau IEP)</>}
      subtitle="Réussir les épreuves et intégrer les Instituts d'Études Politiques"
      intro={[
        "Les Instituts d'Études Politiques (IEP), communément appelés Sciences Po, comptent parmi les formations les plus sélectives en sciences humaines et sociales. Le concours commun du réseau Sciences Po permet d'intégrer plusieurs IEP en France, reconnus pour la qualité de leur enseignement et leurs débouchés.",
        "Ces concours exigent une préparation rigoureuse, combinant maîtrise académique, culture générale et capacité d'analyse. Chez STUDASSIST, nous proposons une préparation structurée et exigeante, permettant aux élèves de maximiser leurs chances d'admission.",
      ]}
      heroImage="/hero-concours-new.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Sciences Po"
      enjeuxEyebrow="Comprendre les épreuves"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les épreuves du concours",
        lead: "Le concours du réseau Sciences Po repose sur des épreuves écrites exigeantes :",
        bullets: [
          "Dissertation de questions contemporaines (réflexion structurée, références variées)",
          "Épreuve d'histoire (repères chronologiques, enjeux géopolitiques)",
          "Épreuve de langue (compréhension, expression, traduction)",
          "Capacité d'analyse, culture générale et maîtrise de l'expression écrite",
          "Maîtrise d'une bibliographie stratégique",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation structurée et adaptée",
          paragraphs: [
            "Les élèves sont accompagnés en petits groupes de 4 maximum, permettant un suivi personnalisé. Nous favorisons une dynamique de groupe intellectuelle, basée sur le débat, l'échange et l'émulation.",
            "Notre accompagnement combine des séances hebdomadaires pour développer les compétences analytiques et rédactionnelles, et des stages intensifs pour s'entraîner en conditions réelles.",
          ],
        },
        {
          title: "Une méthodologie orientée performance",
          paragraphs: [
            "Le contenu repose sur : entraînements à la dissertation, méthodologie de structuration des idées, analyse de sujets d'actualité et concours blancs.",
            "Nous guidons les élèves dans la construction d'une bibliographie stratégique : ouvrages de référence en sciences sociales, essais contemporains, presse internationale et contenus pour enrichir la culture générale.",
          ],
        },
        {
          title: "Développer un véritable esprit concours",
          paragraphs: [
            "Réussir Sciences Po nécessite de se démarquer. Nous accompagnons les élèves dans le développement de leur capacité à argumenter, la structuration de leur pensée, la gestion du temps et la prise de position.",
          ],
        },
        {
          title: "Un accompagnement qui se prolonge dans le temps",
          paragraphs: [
            "Nous assurons un suivi dans la durée. Nous restons en contact, fournissons des contenus complémentaires et restons disponibles jusqu'aux échéances.",
            "Notre accompagnement en orientation permet également de construire un dossier solide pour la candidature au réseau Sciences Po.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cette préparation ?",
        groups: [{
          title: "Élèves de Première et Terminale",
          bullets: [
            "visant le concours commun du réseau Sciences Po (IEP),",
            "ayant un excellent niveau rédactionnel et un intérêt pour l'actualité,",
            "souhaitant développer culture générale et capacité d'analyse,",
            "recherchant un encadrement intellectuellement exigeant et structuré.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Développement de la réflexion + maîtrise des méthodes + performance",
          "Groupes limités à 4 élèves maximum",
          "Bibliographie stratégique et entraînements réguliers",
          "Accompagnement en orientation pour un dossier solide",
          "+6 ans d'expérience dans la préparation",
          "100% de nos élèves admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez optimiser vos chances de réussite au concours Sciences Po ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["concours", "orientation"]}
      prev={{ label: "Médecine Belgique", to: "/prepa-medecine-belgique" }}
      next={{ label: "Architecture ENA", to: "/prepa-architecture-ena" }}
    />
  );
}
