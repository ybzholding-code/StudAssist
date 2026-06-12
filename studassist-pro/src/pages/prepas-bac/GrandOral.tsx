import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "francais", label: "Bac de Français", href: "/prepas-bac/francais" },
  { key: "specialites", label: "Bac de Spécialités", href: "/prepas-bac/specialites" },
  { key: "philo", label: "Bac de Philo", href: "/prepas-bac/philo" },
  { key: "grand-oral", label: "Grand Oral", href: "/prepas-bac/grand-oral" },
];

export default function PrepasBacGrandOral() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Bac · Grand-oral"
      accent="blue"
      title={<>Prépas Bac – <span className="text-brand-teal">Grand Oral</span></>}
      subtitle="Structurer son discours, gagner en assurance et se démarquer face au jury"
      intro={[
        "Le Grand Oral du Baccalauréat est une épreuve singulière, à la croisée des compétences académiques et des qualités personnelles. Elle évalue à la fois la maîtrise des connaissances, la capacité à structurer une réflexion et l'aisance à l'oral.",
        "Chez STUDASSIST, nous accompagnons les élèves dans une préparation complète et exigeante, afin de transformer cette épreuve en véritable opportunité de se distinguer.",
      ]}
      heroImage="/hero-bac-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver une séance découverte"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Grand Oral"
      enjeuxEyebrow="Les enjeux du Grand Oral"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les enjeux du Grand Oral",
        lead: "Le Grand Oral permet aux élèves de démontrer leurs connaissances, leur capacité à argumenter et leur aptitude à prendre la parole avec assurance.",
        bullets: [
          "Développer son aisance à l'oral — Apprendre à s'exprimer avec clarté, confiance et conviction devant un jury.",
          "Structurer sa pensée et son argumentation — Construire un raisonnement cohérent, défendre ses idées et répondre aux questions avec pertinence.",
          "Valoriser son projet d'orientation — Présenter la cohérence de son parcours, ses centres d'intérêt et ses ambitions pour l'après-bac.",
          "Acquérir une compétence utile pour l'avenir — Prise de parole, persuasion et communication sont des compétences clés pour les études supérieures et la vie professionnelle.",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/microphone.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/diploma.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
        ],
      }}

      sections={[
        {
          title: "Le Grand Oral, qu'est-ce que c'est ?",
          paragraphs: [
            "Comprendre les attendus du Grand Oral — Le Grand Oral repose sur la présentation d'une question préparée par l'élève, en lien avec ses spécialités. L'épreuve se déroule en trois temps : une présentation argumentée, un échange avec le jury, une discussion autour du projet d'orientation. Au-delà du contenu, le jury évalue la clarté du discours, la capacité à argumenter, la posture et la qualité de l'expression.",
            "Une épreuve au cœur de l'orientation — Le Grand Oral est directement lié au projet d'avenir de l'élève. Il permet de mettre en valeur ses centres d'intérêt, sa capacité de réflexion et la cohérence de son parcours. C'est une opportunité unique de démontrer sa capacité à prendre du recul, la pertinence de son projet et sa maturité intellectuelle. Ces compétences sont particulièrement valorisées dans les entretiens d'admission, notamment pour les écoles de commerce, les universités internationales ou les formations sélectives.",
            "Une compétence clé pour l'avenir et l'opportunité unique de se démarquer — Au-delà du Baccalauréat, le Grand Oral développe des compétences essentielles : prise de parole en public, structuration de la pensée, et capacité à convaincre. Ces compétences seront déterminantes dans les études supérieures et la vie professionnelle. Bien préparé, le Grand Oral devient un véritable avantage. Il permet à l'élève de sortir du cadre purement académique pour montrer sa personnalité, son engagement et sa capacité à défendre ses idées. Chez STUDASSIST, nous transformons cette épreuve en levier de différenciation.",
          ],
        },
        {
          title: "L'approche STUDASSIST dans la préparation du Grand Oral",
          paragraphs: [
            "Développer l'aisance à l'oral et la capacité à convaincre — Chez STUDASSIST, nous accompagnons les élèves dans le choix de leurs questions et la construction de problématiques pertinentes. Nous les aidons à structurer un discours clair et cohérent, avec une attention particulière portée à l'introduction, aux transitions et à la conclusion. Nous travaillons également l'aisance à l'oral : posture, gestion du stress et qualité d'expression. Des simulations régulières permettent de progresser rapidement et de gagner en confiance. Enfin, les élèves sont préparés à l'échange avec le jury, afin de défendre leurs idées avec précision, s'adapter aux questions et développer une argumentation convaincante.",
          ],
        },
        {
          title: "Une préparation adaptée pour chaque profil et encadrée par des enseignants experts",
          paragraphs: [
            "Un encadrement personnalisé et exigeant — Les élèves sont accompagnés exclusivement en format individuel, en présentiel ou à distance, afin de garantir un suivi précis et entièrement adapté à leur profil. Ce format permet un travail approfondi sur la prise de parole, des retours personnalisés à chaque étape et une progression rapide, en phase avec les exigences de l'épreuve.",
            "Un accompagnement assuré par des enseignants experts — Les élèves sont accompagnés par des professeurs maîtrisant parfaitement les attentes et les critères d'évaluation du Grand Oral. Ils guident les élèves dans le choix de leurs questions, la structuration de leur présentation, la préparation des échanges avec le jury et le développement de leur aisance à l'oral. Leur expertise permet d'apporter des conseils concrets, des retours personnalisés et un niveau d'exigence adapté aux ambitions de chaque élève.",
          ],
        },
        {
          title: "À qui s'adresse la préparation du Grand Oral ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves de Terminale souhaitant gagner en confiance, développer leurs compétences orales et aborder l'épreuve avec méthode et sérénité.",
          ],
          bullets: [
            "Structurer efficacement leur présentation",
            "Développer leur aisance à l'oral",
            "Apprendre à gérer leur stress face à un jury",
            "Construire une argumentation solide et convaincante",
            "Valoriser leur projet d'orientation",
            "Préparer des formations sélectives nécessitant des entretiens",
            "Développer des compétences utiles pour les études supérieures et la vie professionnelle",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation du Grand Oral ?",
        bullets: [
          "Un accompagnement exclusivement individuel avec un travail approfondi sur les points forts et les axes d'amélioration",
          "Un accompagnement méthodique : choix de la question, construction du plan, argumentation et préparation des échanges avec le jury",
          "Un travail approfondi sur la prise de parole : voix, posture, gestion du stress, regard, rythme et impact du discours",
          "Des simulations régulières avec retours personnalisés afin de préparer l'élève aux attentes du jury",
          "Une préparation alignée avec le projet d'orientation post-bac",
          "Un travail sur le développement de compétences essentielles pour les études supérieures et la vie professionnelle",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez être accompagné(e) vers une réussite impactante au Grand Oral ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver une séance découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-bac"]}
      faqTitle="FAQ – Préparation au Baccalauréat"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux épreuves du Bac."
      prev={{ label: "Bac de Philo", to: "/prepas-bac/philo" }}
    />
  );
}
