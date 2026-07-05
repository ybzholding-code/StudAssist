import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "primaire", label: "Primaire", href: "/soutien/primaire" },
  { key: "college", label: "Collège", href: "/soutien/college" },
  { key: "brevet", label: "Prépa Brevet", href: "/soutien/brevet" },
  { key: "lycee", label: "Lycée", href: "/soutien/lycee" },
  { key: "superieur", label: "Supérieur", href: "/soutien/superieur" },
  { key: "stages", label: "Stages de vacances", href: "/soutien/stages" },
];

export default function SoutienSuperieur() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Supérieur"
      accent="pink"
      title={<>Soutien scolaire dans le <span className="text-brand-teal">supérieur</span></>}
      subtitle="Réussir sa première année post-bac avec méthode, accompagnement et exigence"
      intro={[
        "La première année d'études supérieures constitue souvent un tournant décisif. Nouveaux rythmes, programmes plus complexes, autonomie accrue, méthodes de travail différentes : beaucoup d'étudiants se retrouvent déstabilisés, même lorsqu'ils avaient un bon niveau au lycée.",
        "Chez STUDASSIST, nous proposons un soutien scolaire individuel en visioconférence, spécifiquement conçu pour accompagner les étudiants de première année post-bac confrontés à ces nouvelles exigences.",
      ]}
      heroImage="/soutien-superieur-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 65%"
      heroCtaLabel="Réserver un cours découverte"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur le soutien scolaire dans le supérieur."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Soutien Supérieur"
      enjeuxEyebrow="Les enjeux du supérieur"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux de la 1ère année post-bac",
        lead: "La réussite dans le supérieur ne dépend pas uniquement des connaissances, mais aussi de la capacité à :",
        bullets: [
          "S'adapter à des méthodes de travail universitaires",
          "Gérer un volume important de contenu",
          "Comprendre des notions plus abstraites ou techniques",
          "Organiser son temps et ses priorités",
          "Maintenir motivation et régularité",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      sections={[
        {
          title: "Une approche personnalisée et ciblée pour un accompagnement individualisé",
          paragraphs: [
            "Notre soutien scolaire post-bac repose sur une approche personnalisée et ciblée, pensée pour répondre aux besoins spécifiques de chaque étudiant.",
            "Un accompagnement 100 % individuel, en visioconférence — Toutes nos séances sont proposées en format individuel, à distance, permettant : une flexibilité totale d'organisation ; un suivi personnalisé ; un travail en profondeur sur les difficultés propres à chaque étudiant.",
            "Un professeur adapté à chaque profil — Chez STUDASSIST, nous sélectionnons le professeur en fonction du parcours, de la filière et des besoins précis de l'étudiant. L'objectif est de créer un binôme pédagogique efficace afin de : combler les lacunes identifiées ; clarifier les notions complexes ; structurer les méthodes de travail ; accompagner l'étudiant vers une autonomie durable.",
          ],
        },
        {
          title: "Une méthodologie centrée sur la compréhension et le coaching pour la réussite de l'année",
          paragraphs: [
            "Une approche centrée sur la compréhension et la méthode — Au-delà du contenu académique, notre accompagnement vise à transmettre : des méthodes de travail adaptées au supérieur ; une meilleure organisation personnelle ; des techniques de révision efficaces ; une lecture stratégique des cours et des attentes des enseignants. Cette approche permet à l'étudiant de reprendre le contrôle de ses études et de progresser durablement.",
            "Un soutien pensé pour la réussite de l'année — Chaque accompagnement débute par un diagnostic rapide afin d'identifier : les matières problématiques ; les lacunes de compréhension ; les difficultés méthodologiques. Un plan de travail personnalisé est ensuite mis en place, avec des objectifs clairs et évolutifs.",
          ],
        },
        {
          title: "Une vision globale du parcours académique",
          paragraphs: [
            "Un accompagnement qui inclut orientation et réorientation — La première année d'études supérieures est aussi, pour beaucoup d'étudiants, un temps de questionnement. Certains découvrent que la filière choisie ne correspond pas pleinement à leurs attentes, à leurs capacités ou à leur projet professionnel. Chez STUDASSIST, le soutien scolaire post-bac peut être complété par un accompagnement en orientation ou réorientation, afin d'aider l'étudiant à : prendre du recul sur son parcours ; clarifier ses aspirations ; identifier des alternatives réalistes et cohérentes ; construire un nouveau projet académique, au Maroc ou à l'international. Cette approche permet de transformer une difficulté académique en opportunité de repositionnement, dans une logique structurée et rassurante.",
            "Un accompagnement qui prépare également les prochaines étapes du parcours académique — Pour certains étudiants, la 1ère année post-bac ne constitue pas seulement un défi académique. Elle marque également le début d'une réflexion sur la suite du parcours : spécialisation, poursuite d'études, mobilité internationale ou admission en Master. Chez STUDASSIST, notre accompagnement peut évoluer au fil des besoins de l'étudiant. Selon les objectifs envisagés, nous pouvons notamment accompagner les étudiants dans : la réflexion sur leur orientation et leur projet professionnel ; la préparation d'une candidature en Master ou en MSc ; la construction d'un dossier académique solide ; la préparation aux certifications de langues (IELTS, TOEFL, TOEIC) ; la préparation aux tests d'admission (GMAT, TAGE MAGE) ; les projets d'études à l'international. Cette continuité d'accompagnement permet aux étudiants de développer simultanément leurs performances académiques et leur stratégie d'évolution à moyen terme.",
          ],
        },
        {
          title: "À qui s'adresse le soutien scolaire dans le supérieur ?",
          paragraphs: [
            "Ce service s'adresse aux étudiants de 1ère année post-bac : rencontrant des difficultés dans certaines matières ; ayant du mal à s'adapter aux méthodes du supérieur ; souhaitant reprendre confiance ; désirant sécuriser la validation de leur année ; envisageant une orientation ou une réorientation ; recherchant un accompagnement individualisé, flexible et exigeant.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le soutien scolaire post-bac ?",
        bullets: [
          "Un accompagnement 100 % individuel qui se veut humain, structuré et orienté résultats",
          "Des séances en visioconférence, accessibles partout",
          "Un professeur spécialisé sélectionné selon le profil de l'étudiant",
          "Une approche centrée sur la compréhension et la méthode",
          "Une prise en compte possible de l'orientation ou réorientation",
          "Une vision globale du parcours académique pour l'accès au master",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/student-male.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez mettre en place un soutien scolaire personnalisé pour réussir votre première année post-bac ou repenser votre orientation ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Nous contacter",
        secondaryHref: "/contact",
      }}

      faqKeys={["superieur"]}
      faqTitle="Soutien scolaire dans le supérieur : questions fréquentes"
      faqSubtitle="Les réponses aux questions que les étudiants et familles nous posent le plus souvent sur l'accompagnement dans le supérieur."
      prev={{ label: "Lycée", to: "/soutien/lycee" }}
      next={{ label: "Stages de vacances", to: "/soutien/stages" }}
    />
  );
}
