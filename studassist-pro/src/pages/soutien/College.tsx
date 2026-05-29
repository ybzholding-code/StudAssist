import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "primaire", label: "Primaire", href: "/soutien/primaire" },
  { key: "college", label: "Collège", href: "/soutien/college" },
  { key: "lycee", label: "Lycée", href: "/soutien/lycee" },
  { key: "superieur", label: "Supérieur", href: "/soutien/superieur" },
  { key: "stages", label: "Stages de vacances", href: "/soutien/stages" },
  { key: "brevet", label: "Prépa Brevet", href: "/soutien/brevet" },
];

export default function SoutienCollege() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Collège"
      accent="pink"
      title={<>Soutien scolaire au <span className="text-brand-teal">collège</span></>}
      subtitle="Consolider les acquis, structurer la méthode et préparer l'entrée au lycée"
      intro={[
        "Le collège est une période charnière du parcours scolaire. Les exigences académiques augmentent, le rythme s'intensifie et l'élève doit progressivement gagner en autonomie, en organisation et en méthode.",
        "Chez STUDASSIST, nous proposons un soutien scolaire au collège structuré, exigeant et personnalisé, pensé aussi bien pour accompagner les élèves rencontrant des difficultés que pour ceux disposant déjà d'un bon niveau et souhaitant viser l'excellence, quel que soit leur système scolaire.",
      ]}
      heroImage="/hero-soutien-new.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Soutien Collège"
      enjeuxEyebrow="Les enjeux du collège"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux du collège",
        lead: "Les années de collège sont déterminantes pour la suite du parcours scolaire. C'est à ce stade que se construisent durablement :",
        bullets: [
          "Les fondamentaux académiques (français, mathématiques, sciences)",
          "Les méthodes de travail (organisation, régularité, autonomie)",
          "La confiance en soi face aux apprentissages",
          "Les premières bases de la réflexion d'orientation",
          "La préparation progressive du Brevet",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/medal.png",
        ],
      }}

      sections={[
        {
          title: "Un diagnostic initial approfondi",
          paragraphs: [
            "Chaque élève bénéficie d'une évaluation complète de son niveau académique, de ses méthodes de travail et de ses besoins spécifiques, en tenant compte du système scolaire suivi (français, marocain, bilingue ou international).",
            "Ce diagnostic permet de définir des priorités claires et un plan d'accompagnement cohérent, réaliste et adapté.",
          ],
        },
        {
          title: "Un accompagnement académique structuré",
          paragraphs: [
            "Nous intervenons sur les matières clés du collège : français, mathématiques, sciences, histoire-géographie, en nous adaptant aux programmes et exigences propres à chaque système scolaire.",
            "L'objectif est double : améliorer les résultats et installer des bases solides pour préparer l'entrée au lycée, quel que soit le parcours académique de l'élève.",
          ],
        },
        {
          title: "Une méthodologie de soutien scolaire différenciée",
          paragraphs: [
            "Le soutien scolaire au collège repose sur une pédagogie différenciée, déployée en petits groupes de 2 à 4 élèves maximum, avec des niveaux hétérogènes maîtrisés.",
            "Ce format permet de renforcer l'autonomie de l'élève, de favoriser l'effet d'imitation positive, de stimuler une dynamique de travail structurante, tout en garantissant un suivi individualisé adapté à l'avancement réel de chaque élève.",
          ],
        },
        {
          title: "Un suivi régulier et structurant",
          paragraphs: [
            "Le soutien scolaire STUDASSIST repose sur un suivi continu et rigoureux : évaluation régulière des progrès, ajustement des objectifs et des méthodes, envois réguliers de rapports pédagogiques, échanges constants avec l'élève et sa famille.",
            "Ce pilotage permet d'anticiper les difficultés, de maintenir la motivation et d'assurer une cohérence durable entre le travail scolaire et le travail à la maison.",
          ],
        },
        {
          title: "Un accompagnement qui prépare aussi le Brevet",
          paragraphs: [
            "Au collège, le soutien scolaire ne se limite pas à l'amélioration des résultats au quotidien. Il constitue également une préparation progressive et stratégique au Diplôme National du Brevet, première échéance officielle du parcours scolaire.",
            "À partir de la 4ᵉ, et plus particulièrement en 3ᵉ, l'accompagnement peut être complété par une préparation spécifique au Brevet, incluant la consolidation des fondamentaux, le travail méthodologique sur les épreuves écrites, l'entraînement à la gestion du temps et la préparation à l'oral.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse le soutien scolaire au collège ?",
        groups: [{
          title: "Notre soutien scolaire s'adresse aux élèves",
          bullets: [
            "rencontrant des difficultés ponctuelles ou durables,",
            "manquant de méthode et d'organisation,",
            "ayant besoin de reprendre confiance,",
            "souhaitant consolider leurs bases en vue du lycée,",
            "ayant déjà un bon niveau et souhaitant viser l'excellence,",
            "scolarisés dans des systèmes français, marocains, bilingues ou internationaux.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le soutien scolaire au collège ?",
        bullets: [
          "Une approche globale, au-delà du simple soutien aux devoirs",
          "Des groupes très restreints (2 à 4 élèves maximum)",
          "Des enseignants expérimentés, certifiés et multi-systèmes",
          "Une méthodologie différenciée et structurée",
          "Un suivi rigoureux et transparent avec les familles",
          "Une vision long terme, orientée réussite et orientation",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/handshake.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Un cadre maîtrisé, quelle que soit la voie scolaire suivie. Vous souhaitez mettre en place un soutien scolaire adapté, exigeant et compatible avec le système scolaire de votre enfant ?",
        primaryLabel: "Réserver un cours découverte",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        secondaryHref: "/contact",
      }}

      faqKeys={["soutien", "method"]}
      prev={{ label: "Soutien Primaire", to: "/soutien/primaire" }}
      next={{ label: "Soutien Lycée", to: "/soutien/lycee" }}
    />
  );
}
