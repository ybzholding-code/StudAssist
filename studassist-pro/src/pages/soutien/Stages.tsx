import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "primaire", label: "Primaire", href: "/soutien/primaire" },
  { key: "college", label: "Collège", href: "/soutien/college" },
  { key: "brevet", label: "Prépa Brevet", href: "/soutien/brevet" },
  { key: "lycee", label: "Lycée", href: "/soutien/lycee" },
  { key: "superieur", label: "Supérieur", href: "/soutien/superieur" },
  { key: "stages", label: "Stages de vacances", href: "/soutien/stages" },
];

export default function SoutienStages() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Stages"
      accent="pink"
      title={<>Stages de <span className="text-brand-teal">vacances</span> STUDASSIST</>}
      subtitle="Consolider les acquis, combler les lacunes et préparer la rentrée avec une longueur d'avance"
      intro={[
        "Les vacances scolaires représentent une opportunité idéale pour faire le point, renforcer les apprentissages et aborder la rentrée suivante dans les meilleures conditions.",
        "Chez STUDASSIST, nos stages de vacances sont conçus comme des modules intensifs et structurés, permettant aux élèves de progresser efficacement tout en conservant un rythme équilibré. Ils s'adressent aux élèves du primaire, collège et lycée, quels que soient leur niveau et leur système scolaire.",
      ]}
      heroImage="/soutien-stages.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Stages de vacances"
      enjeuxEyebrow="Les objectifs des stages"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Un format clair et efficace",
        lead: "Chaque stage est organisé sur 5 jours, à raison de 2 heures de cours par jour et par matière, soit un total de 10 heures de formation.",
        bullets: [
          "Une immersion progressive, sans surcharge",
          "Un travail ciblé sur les notions essentielles",
          "Une réelle continuité pédagogique sur la semaine",
          "Un diagnostic rapide en début de stage",
          "Un bilan personnalisé en fin de stage",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

      sections={[
        {
          title: "Des groupes très restreints et un suivi individualisé",
          paragraphs: [
            "Les stages de vacances STUDASSIST sont dispensés en petits groupes de 2 à 4 élèves maximum, garantissant une attention personnalisée, une adaptation permanente au niveau réel de chaque élève et un cadre propice à la concentration et à l'échange.",
            "Chaque élève bénéficie d'un suivi individualisé, même en format collectif, permettant d'ajuster les contenus et les objectifs selon ses besoins spécifiques.",
          ],
        },
        {
          title: "Faire le point sur les lacunes et consolider les acquis",
          paragraphs: [
            "Les stages de vacances permettent avant tout d'identifier et combler les lacunes accumulées, consolider les fondamentaux, reprendre confiance dans les matières clés et approfondir certains chapitres pour viser l'excellence.",
            "Un diagnostic rapide en début de stage permet de cibler précisément les axes de travail.",
          ],
        },
        {
          title: "Préparer la rentrée et garder une longueur d'avance",
          paragraphs: [
            "Au-delà du rattrapage, les stages STUDASSIST sont aussi pensés pour anticiper la rentrée suivante. Ils permettent aux élèves de se familiariser avec les notions à venir, renforcer leurs méthodes de travail, aborder le nouveau niveau avec plus de sérénité et prendre une longueur d'avance sur le programme.",
          ],
        },
        {
          title: "Une pédagogie différenciée, adaptée à chaque système scolaire",
          paragraphs: [
            "Nos enseignants adaptent leurs contenus et leur approche aux systèmes scolaires français, marocains, bilingues et internationaux, tout en maintenant un haut niveau d'exigence académique.",
            "La pédagogie différenciée permet d'accompagner aussi bien les élèves en difficulté que ceux disposant d'un bon niveau et souhaitant progresser davantage.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adressent les stages de vacances ?",
        groups: [{
          title: "Les stages STUDASSIST sont destinés aux élèves",
          bullets: [
            "souhaitant combler des lacunes,",
            "désirant consolider leurs acquis,",
            "préparant une rentrée scolaire, un changement de niveau ou une échéance importante,",
            "disposant déjà d'un bon niveau et souhaitant aller plus loin,",
            "recherchant un cadre structuré, stimulant et personnalisé pendant les vacances.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour les stages de vacances ?",
        bullets: [
          "Un format clair : 10h sur 5 jours",
          "Des groupes très restreints (2 à 4 élèves maximum)",
          "Un suivi individualisé",
          "Des enseignants expérimentés et certifiés",
          "Une adaptation à tous les systèmes scolaires",
          "Une méthodologie structurée et orientée progression",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez inscrire votre enfant à un stage de vacances STUDASSIST ?",
        primaryLabel: "Découvrir les prochains stages",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        secondaryHref: "/contact",
      }}

      faqKeys={["soutien", "method"]}
      prev={{ label: "Supérieur", to: "/soutien/superieur" }}
    />
  );
}
