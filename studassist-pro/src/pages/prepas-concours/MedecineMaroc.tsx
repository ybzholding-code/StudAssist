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

export default function PrepaMedecineMaroc() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · Médecine-Maroc"
      accent="pink"
      title={<>Prépa <span className="text-brand-teal">Médecine Maroc</span> (Public & Privé)</>}
      subtitle="Réussir les sélections et intégrer les études de médecine au Maroc"
      intro={[
        "Les études de médecine au Maroc, qu'elles soient dans le secteur public ou privé, figurent parmi les parcours les plus sélectifs et exigeants. Chaque année, un grand nombre d'élèves candidats se présentent, pour un nombre de places limité.",
        "L'accès à ces formations repose sur des critères de sélection rigoureux, nécessitant une préparation sérieuse, structurée et anticipée. Chez STUDASSIST, nous accompagnons les élèves dans la préparation aux différentes voies d'accès à la médecine au Maroc.",
      ]}
      heroImage="/hero-concours-new.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Médecine Maroc"
      enjeuxEyebrow="Comprendre les voies d'accès"
      whyChooseEyebrow="+6 ans d'expérience — 100% d'admission top 3"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les voies d'accès à la médecine au Maroc",
        lead: "L'accès aux études de médecine repose sur des processus distincts selon le secteur :",
        bullets: [
          "Public : présélection sur dossier + concours écrit national (QCM)",
          "Privé : dossier + tests écrits (sciences, logique) + entretien de motivation",
          "Un excellent niveau en sciences : Maths, SVT, Physique-Chimie",
          "Rigueur et régularité dans le travail",
          "Préparation idéalement dès la classe de Première",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/university.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation structurée et adaptée",
          paragraphs: [
            "Les élèves sont accompagnés en petits groupes de 8 maximum. Nous veillons à créer une dynamique de groupe fondée sur l'entraide, le sérieux et le dépassement collectif.",
            "Notre accompagnement combine des séances hebdomadaires régulières pour consolider les fondamentaux scientifiques et des stages intensifs pendant les vacances scolaires pour se préparer en conditions réelles.",
          ],
        },
        {
          title: "Une méthodologie orientée performance",
          paragraphs: [
            "Notre préparation repose sur : révision approfondie des notions clés (Maths, SVT, Physique-Chimie), exercices d'application ciblés, entraînements réguliers et simulations de concours en conditions réelles.",
            "Cette méthode permet d'optimiser à la fois le dossier académique et la performance au concours.",
          ],
        },
        {
          title: "Développer un véritable esprit concours",
          paragraphs: [
            "La réussite repose autant sur les résultats scolaires que sur la capacité à performer le jour du concours. Nous travaillons sur la gestion du temps, du stress, les stratégies de réponse aux QCM et la capacité à prioriser et optimiser le score.",
          ],
        },
        {
          title: "Préparer les entretiens de la médecine privée",
          paragraphs: [
            "Pour les écoles privées, nous accompagnons les élèves dans la structuration de leur discours quant à leur projet professionnel et la préparation aux entretiens de motivation au travers de simulations filmées.",
          ],
        },
        {
          title: "Un accompagnement qui se prolonge dans le temps",
          paragraphs: [
            "La préparation ne s'arrête pas à la fin des sessions. Nous restons en contact, fournissons des contenus complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent venir s'entraîner à tout moment dans notre espace.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse cette préparation ?",
        groups: [{
          title: "Élèves visant la médecine au Maroc",
          bullets: [
            "préparant le concours des facultés de médecine publiques,",
            "candidats aux universités privées de médecine,",
            "en classe de Première ou Terminale scientifique,",
            "recherchant un accompagnement structuré sur la durée.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Un accompagnement complet : dossier + concours + entretiens",
          "Groupes limités à 8 élèves maximum",
          "Des simulations de concours en conditions réelles",
          "Préparation dès la 1ère pour anticiper sereinement",
          "+6 ans d'expérience dans la préparation",
          "100% de nos élèves admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/stethoscope.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez optimiser vos chances d'admission en médecine au Maroc ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["concours", "orientation"]}
      prev={{ label: "Ingé UM6P", to: "/prepa-concours-um6p" }}
      next={{ label: "Médecine Belgique", to: "/prepa-medecine-belgique" }}
    />
  );
}
