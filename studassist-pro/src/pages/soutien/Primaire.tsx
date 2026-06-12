import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "primaire", label: "Primaire", href: "/soutien/primaire" },
  { key: "college", label: "Collège", href: "/soutien/college" },
  { key: "brevet", label: "Prépa Brevet", href: "/soutien/brevet" },
  { key: "lycee", label: "Lycée", href: "/soutien/lycee" },
  { key: "superieur", label: "Supérieur", href: "/soutien/superieur" },
  { key: "stages", label: "Stages de vacances", href: "/soutien/stages" },
];

export default function SoutienPrimaire() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Primaire"
      accent="pink"
      title={<>Accompagnement scolaire au <span className="text-brand-teal">primaire</span></>}
      subtitle="Poser des bases solides, apprendre avec plaisir et développer le potentiel global"
      intro={[
        "Les premières années de scolarité sont fondatrices. C'est au primaire que se construisent les apprentissages essentiels, la confiance en soi et la relation à l'apprentissage.",
        "Chez STUDASSIST, le soutien scolaire au primaire repose sur une approche globale et équilibrée, combinant renforcement académique structuré et ateliers de brain training, afin d'accompagner chaque enfant dans toutes les dimensions de son développement, quel que soit son système scolaire.",
      ]}
      heroImage="/soutien-college.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 65%"
      heroCtaLabel="Réserver un cours découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Accompagnement scolaire au primaire"
      enjeuxEyebrow="Une approche en deux volets"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Une approche en deux volets complémentaires",
        lead: "Combinant un soutien scolaire académique structuré et des ateliers de brain training.",
        bullets: [
          "Consolider les acquis essentiels",
          "Installer de bonnes méthodes de travail",
          "Sécuriser les apprentissages",
          "Stimuler les capacités cognitives par le brain training",
          "Accompagner les enfants en difficulté comme ceux visant l'excellence",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      sections={[
        {
          title: "Un soutien scolaire académique structuré",
          paragraphs: [
            "Nous accompagnons les élèves du primaire dans les matières fondamentales, en adaptant nos contenus et nos méthodes aux programmes et systèmes scolaires (français, marocain, bilingue ou international).",
            "Cet accompagnement vise à : consolider les acquis essentiels, installer de bonnes méthodes de travail, sécuriser les apprentissages, accompagner aussi bien les enfants en difficulté que ceux disposant d'un bon niveau et souhaitant aller plus loin.",
          ],
        },
        {
          title: "Des ateliers de brain training intégrés au parcours",
          paragraphs: [
            "En complément du soutien scolaire académique, nous proposons des ateliers de brain training intégrés, conçus pour stimuler les capacités cognitives et favoriser l'apprentissage par l'expérience et le plaisir. Ces ateliers font partie intégrante de notre approche du soutien scolaire au primaire.",
            "Ils incluent notamment : Calcul mental au soroban (concentration et logique), Théâtre en langue étrangère (expression orale et confiance), Ateliers Montessori (mathématiques, histoire-géographie, sciences, lecture, écriture), Ateliers de robotique (pensée logique et créative), Cours d'échecs (stratégie et prise de décision), Ateliers artistiques (créativité et expression personnelle).",
          ],
        },
        {
          title: "Une pédagogie ludique et structurée",
          paragraphs: [
            "Chez STUDASSIST, apprendre doit rester une expérience positive. Nos séances, qu'elles soient académiques ou issues du brain training, intègrent une dimension ludique, interactive et engageante, tout en respectant un cadre structuré et exigeant.",
            "Cette approche permet : d'apprendre avec plaisir, de renforcer la motivation et la curiosité, de développer des compétences transversales essentielles, de favoriser une progression durable.",
          ],
        },
        {
          title: "Une méthodologie adaptée aux plus jeunes",
          paragraphs: [
            "Le soutien scolaire au primaire est proposé en petits groupes de 2 à 4 enfants maximum, garantissant : une attention individualisée, un respect du rythme de chacun, une dynamique de groupe bienveillante.",
            "Nos enseignants adaptent leurs approches pédagogiques, leurs supports et leurs exigences au système scolaire suivi, tout en maintenant des standards de qualité élevés.",
          ],
        },
        {
          title: "Un suivi rassurant pour les familles",
          paragraphs: [
            "Les familles bénéficient d'un suivi régulier et transparent, leur permettant de comprendre les progrès réalisés et les axes de développement de leur enfant.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse le soutien scolaire au primaire ?",
        groups: [{
          title: "Ce service s'adresse aux enfants",
          bullets: [
            "ayant besoin de consolider leurs apprentissages,",
            "rencontrant des difficultés ponctuelles,",
            "disposant d'un bon niveau et souhaitant développer leur potentiel,",
            "scolarisés dans des systèmes français, marocains, bilingues ou internationaux,",
            "dont les familles recherchent un accompagnement global, structuré et épanouissant.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le soutien scolaire au primaire ?",
        bullets: [
          "Une approche globale associant académique et brain training",
          "Une pédagogie ludique et structurée",
          "Des groupes très restreints (2 à 4 maximum)",
          "Des enseignants expérimentés et multi-systèmes",
          "Un suivi rassurant pour les familles",
          "Une vision long terme du parcours scolaire",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/handshake.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Apprendre avec plaisir, structurer les bases et révéler le potentiel dès le plus jeune âge. Vous souhaitez mettre en place un accompagnement scolaire adapté, exigeant et compatible avec le système scolaire ainsi que le rythme d'apprentissage de votre enfant ?",
        primaryLabel: "Réserver un cours découverte",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        secondaryHref: "/contact",
      }}

      faqKeys={["primaire"]}
      faqTitle="Soutien scolaire primaire : questions fréquentes"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur l'accompagnement au primaire."
      next={{ label: "Collège", to: "/soutien/college" }}
    />
  );
}
