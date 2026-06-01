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
      title={<>Prépa Bac – <span className="text-brand-teal">Grand Oral</span></>}
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
      enjeuxEyebrow="Comprendre les enjeux"
      whyChooseEyebrow="Se démarquer face au jury"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les enjeux du Grand Oral",
        lead: "Le Grand Oral repose sur la présentation d'une question préparée par l'élève, en lien avec ses spécialités. L'épreuve se déroule en trois temps :",
        bullets: [
          "Une présentation argumentée (5 minutes)",
          "Un échange avec le jury sur le sujet",
          "Une discussion autour du projet d'orientation",
          "Le jury évalue clarté, argumentation, posture et expression",
          "Une opportunité unique de démontrer maturité et cohérence de parcours",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/microphone.png",
          "https://img.icons8.com/3d-fluency/94/chat.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
        ],
      }}

      sections={[
        {
          title: "Développer l'aisance à l'oral et la capacité à convaincre",
          paragraphs: [
            "Nous accompagnons les élèves dans le choix de leurs questions et la construction de problématiques pertinentes. Nous les aidons à structurer un discours clair et cohérent, avec une attention particulière portée à l'introduction, aux transitions et à la conclusion.",
            "Nous travaillons également l'aisance à l'oral : posture, gestion du stress et qualité d'expression. Des simulations régulières permettent de progresser rapidement et de gagner en confiance.",
          ],
        },
        {
          title: "Préparation à l'échange avec le jury",
          paragraphs: [
            "Les élèves sont préparés à l'échange avec le jury, afin de défendre leurs idées avec précision, s'adapter aux questions et développer une argumentation convaincante.",
            "Ce travail inclut la préparation de la troisième partie de l'épreuve : la discussion autour du projet d'orientation, qui permet de mettre en valeur les centres d'intérêt et la cohérence du parcours.",
          ],
        },
        {
          title: "Un encadrement personnalisé et exigeant",
          paragraphs: [
            "Les élèves sont accompagnés exclusivement en format individuel, en présentiel ou à distance, afin de garantir un suivi précis et entièrement adapté à leur profil.",
            "Ce format permet un travail approfondi sur la prise de parole, des retours personnalisés à chaque étape et une progression rapide, en phase avec les exigences de l'épreuve.",
          ],
        },
        {
          title: "Une compétence clé pour l'avenir",
          paragraphs: [
            "Au-delà du Baccalauréat, le Grand Oral développe des compétences essentielles : prise de parole en public, structuration de la pensée et capacité à convaincre. Ces compétences seront déterminantes dans les études supérieures et la vie professionnelle.",
            "Ces compétences sont particulièrement valorisées dans les entretiens d'admission, notamment pour les écoles de commerce, les universités internationales ou les formations sélectives.",
          ],
        },
        {
          title: "L'opportunité unique de se démarquer",
          paragraphs: [
            "Bien préparé, le Grand Oral devient un véritable avantage. Il permet à l'élève de sortir du cadre purement académique pour montrer sa personnalité, son engagement et sa capacité à défendre ses idées.",
            "Chez STUDASSIST, nous transformons cette épreuve en levier de différenciation.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse la prépa Grand Oral ?",
        groups: [{
          title: "Élèves de Terminale",
          bullets: [
            "préparant le Grand Oral du Baccalauréat,",
            "ayant besoin d'aide pour construire et structurer leur question,",
            "manquant d'assurance à l'oral,",
            "souhaitant un coaching individuel complet (fond et forme),",
            "voulant se démarquer face au jury et valoriser leur projet d'orientation.",
          ],
        }],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le Grand Oral ?",
        bullets: [
          "Un accompagnement exclusivement individuel",
          "Construction de la question et structuration du discours",
          "Coaching posture, stress et qualité d'expression",
          "Simulations régulières avec retours personnalisés",
          "Préparation à l'échange avec le jury et au projet d'orientation",
          "Un levier de différenciation pour les admissions post-bac",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/webcam.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez accompagner votre enfant vers une réussite impactante au Grand Oral ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver une séance découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["soutien", "method"]}
      prev={{ label: "Bac de Philo", to: "/prepas-bac/philo" }}
    />
  );
}
