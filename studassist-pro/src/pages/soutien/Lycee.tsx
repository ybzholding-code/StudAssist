import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "primaire", label: "Primaire", href: "/soutien/primaire" },
  { key: "college", label: "Collège", href: "/soutien/college" },
  { key: "brevet", label: "Prépa Brevet", href: "/soutien/brevet" },
  { key: "lycee", label: "Lycée", href: "/soutien/lycee" },
  { key: "superieur", label: "Supérieur", href: "/soutien/superieur" },
  { key: "stages", label: "Stages de vacances", href: "/soutien/stages" },
];

export default function SoutienLycee() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Lycée"
      accent="pink"
      title={<>Soutien scolaire au <span className="text-brand-teal">lycée</span></>}
      subtitle="Optimiser les performances, viser l'excellence et sécuriser l'orientation post-bac"
      intro={[
        "Le lycée est une étape décisive du parcours scolaire et plus généralement de l'avenir académique de l'élève. Les exigences s'intensifient, les enjeux de notes deviennent stratégiques et les résultats obtenus ont un impact direct sur l'orientation post-bac, en France, au Maroc et à l'international.",
        "Chez STUDASSIST, nous proposons un soutien scolaire au lycée structuré, exigeant et personnalisé, destiné aussi bien aux élèves souhaitant renforcer certaines matières qu'aux lycéens disposant d'un bon niveau académique et souhaitant atteindre l'excellence, quel que soit leur système scolaire.",
      ]}
      heroImage="/soutien-lycee.png"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Soutien Lycée"
      enjeuxEyebrow="Les enjeux du lycée"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux du lycée",
        lead: "Les années de lycée conditionnent directement l'accès aux filières sélectives et aux études supérieures. C'est à ce stade que se jouent :",
        bullets: [
          "La maîtrise approfondie des matières",
          "La performance académique dans les matières à fort coefficient",
          "La cohérence de la moyenne générale",
          "La gestion de la charge de travail et du stress",
          "La préparation du projet d'orientation post-bac",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
        ],
      }}

      sections={[
        {
          title: "Un diagnostic académique et méthodologique précis",
          paragraphs: [
            "Chaque élève bénéficie d'une évaluation approfondie de son niveau, de ses méthodes de travail, de ses matières de spécialité, de ses matières du tronc commun et de ses objectifs d'orientation, en tenant compte du système scolaire suivi (français, marocain, bilingue ou international).",
            "Ce diagnostic permet de définir un plan d'accompagnement ciblé, aligné à la fois avec les exigences du programme et les ambitions post-bac.",
          ],
        },
        {
          title: "Un accompagnement académique exigeant",
          paragraphs: [
            "Nous accompagnons les lycéens aussi bien dans leurs matières de spécialité que dans les matières du tronc commun, qui restent déterminantes pour la moyenne générale, la cohérence du dossier scolaire et la réussite aux épreuves du bac.",
            "L'objectif : optimiser les résultats dans l'ensemble des matières, renforcer la compréhension en profondeur des notions clés, développer des méthodes de travail efficaces et sécuriser un dossier académique solide et cohérent en lien avec les projets d'orientation post-bac.",
          ],
        },
        {
          title: "Une méthodologie de soutien scolaire différenciée",
          paragraphs: [
            "Le soutien scolaire au lycée repose sur une pédagogie différenciée, déployée en petits groupes de 2 à 4 élèves maximum, avec des niveaux hétérogènes maîtrisés.",
            "Cette méthodologie permet de développer l'autonomie intellectuelle de l'élève, de stimuler l'émulation académique, d'encourager une dynamique de travail structurante, tout en garantissant un suivi individualisé adapté à l'avancement réel de chaque élève.",
          ],
        },
        {
          title: "Un suivi rigoureux orienté résultats et orientation",
          paragraphs: [
            "Le soutien scolaire STUDASSIST s'appuie sur un suivi continu et structuré : évaluation régulière des performances par l'envoi de rapports pédagogiques, ajustement des objectifs académiques, coordination avec les objectifs d'orientation post-bac et échanges réguliers avec l'élève et sa famille.",
            "Ce pilotage permet d'inscrire le travail scolaire dans une logique de progression durable, cohérente avec les projets d'études supérieures.",
          ],
        },
        {
          title: "Un accompagnement qui va au-delà du soutien scolaire",
          paragraphs: [
            "Au lycée, les enjeux académiques s'articulent progressivement avec la préparation aux examens, l'accès aux filières sélectives et la constitution d'un dossier post-bac solide. Le soutien scolaire s'inscrit naturellement dans une logique de continuité avec nos Prépas Bac (français, spécialités, philo, Grand Oral), nos Prépas Concours (commerce, ingénieurs, Sciences Po, médecine, architecture) et nos préparations aux certifications de langues (IELTS, TOEFL, TOEIC, DELF, DALF, DELE).",
            "Le soutien scolaire permet de consolider les bases, tandis que les préparations ciblées visent la maîtrise des attendus et la performance le jour J.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse le soutien scolaire au lycée ?",
        groups: [{
          title: "Notre accompagnement s'adresse aux lycéens",
          bullets: [
            "rencontrant des difficultés ciblées dans certaines matières,",
            "souhaitant améliorer significativement leurs résultats,",
            "ayant besoin de méthodes de travail plus efficaces,",
            "préparant des filières sélectives ou internationales,",
            "disposant déjà d'un bon niveau et souhaitant viser l'excellence,",
            "scolarisés dans des systèmes français, marocains, bilingues ou internationaux.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le soutien scolaire au lycée ?",
        bullets: [
          "Une approche stratégique, alignée avec les enjeux post-bac",
          "Des groupes très restreints (2 à 4 élèves maximum)",
          "Des enseignants expérimentés, certifiés et multi-systèmes",
          "Prise en charge complète tronc commun et spécialités",
          "Une méthodologie différenciée favorisant autonomie et performance",
          "Un suivi rigoureux et transparent, vision long terme",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Un cadre maîtrisé, quelle que soit la filière suivie. Vous souhaitez mettre en place un soutien scolaire exigeant et stratégique, tout en préparant les prochaines échéances académiques de votre enfant ?",
        primaryLabel: "Réserver un cours découverte",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        secondaryHref: "/contact",
      }}

      faqKeys={["soutien", "method"]}
      prev={{ label: "Prépa Brevet", to: "/soutien/brevet" }}
      next={{ label: "Supérieur", to: "/soutien/superieur" }}
    />
  );
}
