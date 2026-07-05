import { Link } from "react-router-dom";
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
          "Reading – Compréhension écrite : Les candidats doivent lire et analyser différents types de textes académiques afin d'en comprendre les idées principales, les arguments et les informations clés.",
          "Listening – Compréhension orale : Cette épreuve évalue la capacité à comprendre des conversations, des conférences ou des présentations en anglais dans différents contextes.",
          "Writing – Expression écrite : Les candidats doivent rédiger des textes structurés, argumentés et adaptés aux attentes académiques de l'examen.",
          "Speaking – Expression orale : Cette épreuve mesure la capacité à communiquer avec fluidité, à exprimer ses idées clairement et à interagir dans un anglais naturel et précis.",
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
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">IELTS, TOEFL ou encore TOEIC : faire le bon choix</span>,
            <span>Le choix du test dépend directement du <strong className="font-extrabold text-brand-darkblue">projet de l'élève</strong>. L'<strong className="font-extrabold text-brand-darkblue">IELTS</strong> est aujourd'hui le plus demandé par les universités internationales, tandis que le <strong className="font-extrabold text-brand-darkblue">TOEFL</strong> est particulièrement répandu pour les candidatures aux États-Unis. Le <strong className="font-extrabold text-brand-darkblue">TOEIC</strong>, quant à lui, s'inscrit davantage dans un cadre professionnel. Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous guidons les élèves dans ce choix afin de garantir la cohérence entre leur certification et leurs objectifs académiques.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un enjeu déterminant pour les candidatures</span>,
            <span>Le <strong className="font-extrabold text-brand-darkblue">score obtenu</strong> constitue un véritable levier dans un dossier. Il permet non seulement de valider un niveau linguistique, mais aussi de renforcer la crédibilité de la candidature et d'accéder à des formations plus sélectives. Dans certains cas, il peut également conditionner l'obtention de <strong className="font-extrabold text-brand-darkblue">bourses</strong>.</span>,
            <span>Chaque établissement fixe ses propres exigences :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>score IELTS de <strong className="font-extrabold text-brand-darkblue">6.0 à 6.5</strong> ou TOEFL de <strong className="font-extrabold text-brand-darkblue">80 à 90</strong> pour de nombreuses formations universitaires ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>IELTS de <strong className="font-extrabold text-brand-darkblue">7.0 à 7.5</strong> ou TOEFL supérieur à <strong className="font-extrabold text-brand-darkblue">100</strong> pour les programmes plus sélectifs ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des résultats encore plus élevés pour les universités de premier plan et formations les plus compétitives.</span></li>
            </ul>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous aidons chaque élève à définir un <strong className="font-extrabold text-brand-darkblue">objectif de score cohérent</strong> avec son projet d'études, les établissements visés et son niveau initial, afin de construire une stratégie réaliste et adaptée.</span>,
          ],
        },
        {
          title: "Une préparation stratégique et personnalisée avec une méthodologie orientée performance",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Une préparation structurée et personnalisée</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, chaque élève débute par un <strong className="font-extrabold text-brand-darkblue">test de niveau</strong>, permettant d'évaluer précisément ses compétences et de définir un plan de travail adapté. La préparation peut se faire :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>en <strong className="font-extrabold text-brand-darkblue">petits groupes de 8 élèves maximum</strong>, favorisant l'échange et la progression ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>en <strong className="font-extrabold text-brand-darkblue">format individuel</strong>, pour les élèves nécessitant un accompagnement spécifique ou souhaitant accélérer leur progression.</span></li>
            </ul>,
            <span>Nous proposons également :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <strong className="font-extrabold text-brand-darkblue">séances hebdomadaires</strong>, pour une progression régulière ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <strong className="font-extrabold text-brand-darkblue">stages intensifs pendant les vacances scolaires</strong> à raison de 20h de cours, pour optimiser les résultats en vue d'échéances proches.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une méthodologie orientée score</span>,
            <span>Notre approche repose sur une <strong className="font-extrabold text-brand-darkblue">parfaite maîtrise des formats d'épreuves</strong> et des attentes des correcteurs. Chaque section du test fait l'objet d'un travail spécifique, avec des stratégies adaptées, des entraînements ciblés et des mises en situation en <strong className="font-extrabold text-brand-darkblue">conditions réelles</strong>. L'objectif est clair : <strong className="font-extrabold text-brand-darkblue">optimiser le score en maximisant la performance</strong> dans chaque partie de l'examen.</span>,
          ],
        },
        {
          title: "L'approche STUDASSIST dans la préparation des certifications d'anglais",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Développer des compétences académiques solides</span>,
            <span>Au-delà des techniques d'examen, nous accompagnons les élèves dans le développement de <strong className="font-extrabold text-brand-darkblue">compétences durables</strong> :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>compréhension de textes complexes ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>structuration de la pensée à l'écrit ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>aisance à l'oral ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>enrichissement du <strong className="font-extrabold text-brand-darkblue">vocabulaire académique</strong>.</span></li>
            </ul>,
            <span>Chaque élève bénéficie de <strong className="font-extrabold text-brand-darkblue">retours personnalisés</strong>, lui permettant d'identifier ses axes d'amélioration et de progresser efficacement.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation intégrée au projet d'orientation</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, la préparation à l'IELTS ou au TOEFL s'inscrit dans une <strong className="font-extrabold text-brand-darkblue">démarche globale</strong>. Elle est directement liée au <Link to="/orientation/terminale" className="text-brand-darkblue font-black underline underline-offset-2">projet d'orientation</Link> de l'élève, aux destinations envisagées et aux établissements ciblés. Cette approche permet de définir des objectifs de score pertinents et cohérents avec les ambitions académiques de l'élève.</span>,
          ],
        },
        {
          title: "Un accompagnement en continu avec des professeurs expérimentés",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un encadrement par des professeurs experts des certifications internationales</span>,
            <span>Les élèves sont accompagnés par des <strong className="font-extrabold text-brand-darkblue">enseignants spécialisés</strong> dans la préparation des certifications d'anglais internationales. Leur parfaite maîtrise des formats IELTS et TOEFL leur permet d'identifier rapidement les axes de progression de chaque candidat et de mettre en place des <strong className="font-extrabold text-brand-darkblue">stratégies adaptées aux objectifs visés</strong>.</span>,
            <span>Au-delà du travail linguistique, ils accompagnent les élèves dans l'acquisition des <strong className="font-extrabold text-brand-darkblue">méthodes, réflexes et techniques</strong> indispensables pour performer dans chacune des épreuves et atteindre le <strong className="font-extrabold text-brand-darkblue">score cible</strong>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement dans la durée</span>,
            <span>La préparation ne s'arrête pas aux séances. Nous restons en contact avec nos élèves, leur proposons des <strong className="font-extrabold text-brand-darkblue">ressources complémentaires</strong> et les accompagnons jusqu'au <strong className="font-extrabold text-brand-darkblue">passage du test</strong>, afin de sécuriser leur progression.</span>,
          ],
        },
        {
          title: "À qui s'adresse la préparation des certifications d'anglais ?",
          paragraphs: [
            <span>Cette préparation s'adresse aux <strong className="font-extrabold text-brand-darkblue">élèves, étudiants et jeunes diplômés</strong> souhaitant valider leur niveau d'anglais dans le cadre d'un projet académique ou professionnel à l'international. Elle est particulièrement adaptée aux candidats qui souhaitent :</span>,
          ],
          bullets: [
            "Intégrer une université ou une grande école à l'étranger ;",
            "Préparer une candidature dans le cadre d'un Bachelor, Master, MBA ou programme d'échange international ;",
            "Atteindre un score spécifique exigé par un établissement ;",
            "Renforcer leur dossier de candidature et maximiser leurs chances d'admission ;",
            "Développer leurs compétences en anglais académique ;",
            "Acquérir les méthodes et stratégies propres à l'IELTS ou au TOEFL ;",
            "Préparer un projet d'études à l'international dans le cadre d'un accompagnement en orientation ;",
            "Gagner en confiance avant le passage de l'examen.",
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
        primaryHref: "/contact",
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
