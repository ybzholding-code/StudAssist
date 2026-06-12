import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "ielts", label: "IELTS & TOEFL", href: "/certifications/ielts-toefl" },
  { key: "tcf", label: "TCF & DALF", href: "/certifications/tcf-dalf" },
  { key: "dele", label: "DELE", href: "/certifications/dele" },
];

export default function CertificationsIelts() {
  return (
    <OrientationLevelPage
      eyebrow="Certifications de langues · IELTS-TOEFL"
      accent="gold"
      title={<>Prépa <span className="text-brand-teal">IELTS & TOEFL</span></>}
      subtitle="Atteindre le score requis et valider son niveau pour les études à l'international"
      intro={[
        "Les tests IELTS et TOEFL sont aujourd'hui incontournables pour intégrer des universités et grandes écoles à l'international. Ils permettent d'attester d'un niveau d'anglais académique et constituent une étape clé dans de nombreux processus de candidature.",
        "Chez STUDASSIST, nous accompagnons les élèves dans une préparation ciblée et stratégique, avec un objectif clair : atteindre le score requis pour intégrer les formations visées.",
      ]}
      heroImage="/hero-certif-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Programmer mon test initial de niveau"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="IELTS & TOEFL"
      enjeuxEyebrow="Les enjeux & attendus"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les attendus des tests de certifications d'anglais",
        lead: "Les certifications IELTS et TOEFL évaluent la capacité à utiliser l'anglais dans un environnement académique international. Les candidats sont testés sur quatre compétences essentielles, qui constituent le socle de toute préparation efficace. Chez STUDASSIST, nous préparons les élèves à chacune de ces épreuves à travers des entraînements ciblés, des simulations et des méthodes spécifiques permettant d'optimiser leur score global.",
        bullets: [
          "Reading – Compréhension écrite — Les candidats doivent lire et analyser différents types de textes académiques afin d'en comprendre les idées principales, les arguments et les informations clés.",
          "Listening – Compréhension orale — Cette épreuve évalue la capacité à comprendre des conversations, des conférences ou des présentations en anglais dans différents contextes.",
          "Writing – Expression écrite — Les candidats doivent rédiger des textes structurés, argumentés et adaptés aux attentes académiques de l'examen.",
          "Speaking – Expression orale — Cette épreuve mesure la capacité à communiquer avec fluidité, à exprimer ses idées clairement et à interagir dans un anglais naturel et précis.",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/chat.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
        ],
      }}

      sections={[
        {
          title: "Pourquoi passer une certification d'anglais et quel score viser ?",
          paragraphs: [
            "IELTS, TOEFL ou encore TOEIC : faire le bon choix — Le choix du test dépend directement du projet de l'élève. L'IELTS est aujourd'hui le plus demandé par les universités internationales, tandis que le TOEFL est particulièrement répandu pour les candidatures aux États-Unis. Le TOEIC, quant à lui, s'inscrit davantage dans un cadre professionnel. Chez STUDASSIST, nous guidons les élèves dans ce choix afin de garantir la cohérence entre leur certification et leurs objectifs académiques.",
            "Un enjeu déterminant pour les candidatures — Le score obtenu constitue un véritable levier dans un dossier. Il permet non seulement de valider un niveau linguistique, mais aussi de renforcer la crédibilité de la candidature et d'accéder à des formations plus sélectives. Dans certains cas, il peut également conditionner l'obtention de bourses. Chaque établissement fixe ses propres exigences. Un score IELTS de 6.0 à 6.5 ou un score TOEFL de 80 à 90 est généralement demandé pour de nombreuses formations universitaires. Les programmes plus sélectifs exigent souvent un score IELTS de 7.0 à 7.5 ou un score TOEFL supérieur à 100. Certaines universités de premier plan peuvent demander des résultats encore plus élevés, notamment pour les formations les plus compétitives. Chez STUDASSIST, nous aidons chaque élève à définir un objectif de score cohérent avec son projet d'études, les établissements visés et son niveau initial. Notre accompagnement permet ainsi de construire une stratégie réaliste et adaptée afin de maximiser les chances d'admission.",
          ],
        },
        {
          title: "Une préparation stratégique et personnalisée avec une méthodologie orientée performance",
          paragraphs: [
            "Une préparation structurée et personnalisée — Chez STUDASSIST, chaque élève débute par un test de niveau, permettant d'évaluer précisément ses compétences et de définir un plan de travail adapté. La préparation peut se faire en petits groupes de 8 élèves maximum, favorisant l'échange et la progression, ou en format individuel, pour les élèves nécessitant un accompagnement spécifique ou souhaitant accélérer leur progression. Nous proposons également des séances hebdomadaires, pour une progression régulière, et des stages intensifs pendant les vacances scolaires à raison de 20h de cours, pour optimiser les résultats en vue d'échéances proches. Cette flexibilité permet d'adapter la préparation au rythme, aux objectifs et aux échéances de chaque élève.",
            "Une méthodologie orientée score — Notre approche repose sur une parfaite maîtrise des formats d'épreuves et des attentes des correcteurs. Chaque section du test fait l'objet d'un travail spécifique, avec des stratégies adaptées, des entraînements ciblés et des mises en situation en conditions réelles. L'objectif est clair : optimiser le score en maximisant la performance dans chaque partie de l'examen.",
          ],
        },
        {
          title: "L'approche STUDASSIST dans la préparation des certifications d'anglais",
          paragraphs: [
            "Développer des compétences académiques solides — Au-delà des techniques d'examen, nous accompagnons les élèves dans le développement de compétences durables : compréhension de textes complexes, structuration de la pensée à l'écrit, aisance à l'oral et enrichissement du vocabulaire académique. Chaque élève bénéficie de retours personnalisés, lui permettant d'identifier ses axes d'amélioration et de progresser efficacement.",
            "Une préparation intégrée au projet d'orientation — Chez STUDASSIST, la préparation à l'IELTS ou au TOEFL s'inscrit dans une démarche globale. Elle est directement liée au projet d'orientation de l'élève, aux destinations envisagées et aux établissements ciblés. Cette approche permet de définir des objectifs de score pertinents et cohérents avec les ambitions académiques de l'élève.",
          ],
        },
        {
          title: "Un accompagnement en continu avec des professeurs expérimentés",
          paragraphs: [
            "Un encadrement par des professeurs experts des certifications internationales — Les élèves sont accompagnés par des enseignants spécialisés dans la préparation des certifications d'anglais internationales. Leur parfaite maîtrise des formats IELTS et TOEFL leur permet d'identifier rapidement les axes de progression de chaque candidat et de mettre en place des stratégies adaptées aux objectifs visés. Au-delà du travail linguistique, ils accompagnent les élèves dans l'acquisition des méthodes, des réflexes et des techniques indispensables pour performer dans chacune des épreuves et atteindre le score cible.",
            "Un accompagnement dans la durée — La préparation ne s'arrête pas aux séances. Nous restons en contact avec nos élèves, leur proposons des ressources complémentaires et les accompagnons jusqu'au passage du test, afin de sécuriser leur progression.",
          ],
        },
        {
          title: "À qui s'adresse la préparation des certifications d'anglais ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves, étudiants et jeunes diplômés souhaitant valider leur niveau d'anglais dans le cadre d'un projet académique ou professionnel à l'international.",
          ],
          bullets: [
            "Intégrer une université ou une grande école à l'étranger",
            "Préparer une candidature dans le cadre d'un Bachelor, Master, MBA ou programme d'échange international",
            "Atteindre un score spécifique exigé par un établissement",
            "Renforcer leur dossier de candidature et maximiser leurs chances d'admission",
            "Développer leurs compétences en anglais académique",
            "Acquérir les méthodes et stratégies propres à l'IELTS ou au TOEFL",
            "Préparer un projet d'études à l'international dans le cadre d'un accompagnement en orientation",
            "Gagner en confiance avant le passage de l'examen",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation des tests IELTS & TOEFL ?",
        bullets: [
          "Un diagnostic initial précis avec un plan de progression personnalisé",
          "Une méthodologie concentrée sur l'optimisation du score",
          "Des petits groupes à effectif réduit (8 élèves max) avec un suivi personnalisé",
          "Des entraînements et simulations en conditions réelles",
          "Une préparation intégrée au projet d'orientation",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez maximiser vos chances de réussite à l'IELTS ou au TOEFL ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "https://wa.me/212669495996",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["certifications"]}
      faqTitle="FAQ – Certifications de langues"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux certifications."
      next={{ label: "TCF & DALF", to: "/certifications/tcf-dalf" }}
    />
  );
}
