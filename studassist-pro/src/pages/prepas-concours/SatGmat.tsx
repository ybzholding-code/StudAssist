import { Link } from "react-router-dom";
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

export default function PrepaSatGmat() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · SAT-GMAT"
      accent="pink"
      title={<>Prépa <span className="text-brand-teal">SAT & GMAT</span></>}
      subtitle="Atteindre les scores requis et intégrer les meilleures universités internationales"
      intro={[
        "Les tests SAT et GMAT constituent des éléments clés dans les processus d'admission des universités et grandes écoles à l'international. Ils sont utilisés pour évaluer les capacités académiques, le raisonnement et la rigueur des candidats dans un environnement hautement compétitif.",
        "Chez STUDASSIST, nous proposons des préparations structurées et stratégiques, permettant aux élèves et étudiants d'atteindre des scores compétitifs et de maximiser leurs chances d'admission.",
      ]}
      heroImage="/prepas-concours.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation aux tests SAT & GMAT."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="SAT & GMAT"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les enjeux du SAT et du GMAT",
        lead: <>
          Le <strong className="font-extrabold text-brand-darkblue">SAT</strong> s'adresse principalement aux élèves de lycée souhaitant intégrer une université internationale, notamment aux États-Unis.<br />
          Le <strong className="font-extrabold text-brand-darkblue">GMAT</strong> concerne les étudiants visant des programmes de haut niveau, tels que les Masters en management (MiM) ou les MBA.<br />
          Ces tests s'inscrivent dans une logique de sélection globale, aux côtés du{" "}<Link to="/orientation/master" className="text-brand-darkblue font-black underline underline-offset-2">dossier académique, des lettres de motivation et des entretiens</Link>. Ils ne mesurent pas uniquement les connaissances, mais surtout :
        </>,
        bullets: [
          "Le raisonnement logique",
          "Les compétences en mathématiques",
          "La maîtrise de l'anglais académique",
          "La capacité à travailler sous contrainte de temps",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/calculator.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation ciblée avec une méthodologie orientée performance",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un levier déterminant pour les admissions internationales</span>,
            <span>Un score élevé au SAT ou au GMAT constitue un <strong className="font-extrabold text-brand-darkblue">avantage décisif</strong> dans les candidatures. Il permet de :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>se démarquer dans un processus de sélection international ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>renforcer la crédibilité du dossier ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>accéder à des universités et programmes plus sélectifs.</span></li>
            </ul>,
            <span>Dans certains cas, il peut également ouvrir l'accès à des <strong className="font-extrabold text-brand-darkblue">bourses</strong>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation individualisée et adaptée à chaque profil</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous privilégions un <strong className="font-extrabold text-brand-darkblue">accompagnement en format individuel</strong>, en présentiel ou à distance, afin de nous adapter précisément au niveau, aux objectifs et au rythme de chaque élève. Chaque programme est construit sur mesure, en fonction :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>du niveau initial ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>du score cible ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des échéances ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des axes de progression.</span></li>
            </ul>,
            <span>Ce format permet un <strong className="font-extrabold text-brand-darkblue">travail ciblé</strong>, des <strong className="font-extrabold text-brand-darkblue">ajustements continus</strong> et une <strong className="font-extrabold text-brand-darkblue">progression plus rapide</strong>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une méthodologie orientée score</span>,
            <span>Notre approche repose sur une préparation concrète et efficace :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>maîtrise des formats spécifiques des tests ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>travail ciblé sur chaque section (math, verbal, logique) ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>stratégies de résolution rapide ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span><strong className="font-extrabold text-brand-darkblue">simulations en conditions réelles</strong>.</span></li>
            </ul>,
            <span>L'objectif est clair : <strong className="font-extrabold text-brand-darkblue">optimiser le score</strong>, et non simplement progresser.</span>,
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation de ces tests",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Développer un véritable esprit de performance</span>,
            <span>Le SAT et le GMAT sont des <strong className="font-extrabold text-brand-darkblue">tests de performance</strong>. Nous accompagnons les élèves dans le développement de réflexes essentiels :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>gestion du temps ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>stratégie de réponse ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>priorisation des questions ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>gestion du stress.</span></li>
            </ul>,
            <span>L'objectif est de <strong className="font-extrabold text-brand-darkblue">maximiser le nombre de points obtenus</strong> dans un temps limité.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation complémentaire en anglais académique</span>,
            <span>La maîtrise de l'anglais est <strong className="font-extrabold text-brand-darkblue">centrale</strong> dans ces tests. Nous accompagnons les élèves dans le développement de leurs compétences linguistiques, notamment :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>compréhension de textes complexes ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>analyse grammaticale ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>vocabulaire académique.</span></li>
            </ul>,
            <span>Nous préparons également les élèves aux tests complémentaires tels que{" "}<Link to="/certifications/ielts-toefl" className="text-brand-darkblue font-black underline underline-offset-2">IELTS ou TOEFL</Link>, souvent requis dans les candidatures internationales.</span>,
          ],
        },
        {
          title: "Un accompagnement en continu par des enseignants experts de ces tests",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un accompagnement assuré par des enseignants experts des tests internationaux</span>,
            <span>Les candidats sont accompagnés par des enseignants <strong className="font-extrabold text-brand-darkblue">maîtrisant parfaitement les exigences, les formats et les stratégies</strong> propres au SAT et au GMAT. Grâce à leur expertise, ils sont en mesure d'identifier rapidement les axes de progression de chaque candidat, de proposer des méthodes de travail adaptées et d'optimiser efficacement les performances sur chaque section du test.</span>,
            <span>Leur accompagnement ne se limite pas aux contenus académiques : ils transmettent également les <strong className="font-extrabold text-brand-darkblue">stratégies de gestion du temps</strong>, les <strong className="font-extrabold text-brand-darkblue">techniques de résolution rapide</strong> et les réflexes indispensables pour performer dans un environnement hautement compétitif.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement qui se prolonge dans le temps</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, la préparation ne s'arrête pas à la fin des sessions. Nous restons en contact avec nos élèves, leur fournissons des contenus d'entraînement complémentaires et les accompagnons jusqu'aux échéances. Les élèves peuvent également revenir s'entraîner à tout moment dans notre espace.</span>,
          ],
        },
        {
          title: "À qui s'adressent les préparations SAT & GMAT ?",
          paragraphs: [
            <span>Ces préparations s'adressent aux élèves et étudiants souhaitant intégrer des <strong className="font-extrabold text-brand-darkblue">universités ou programmes sélectifs à l'international</strong> et ayant besoin d'obtenir un <strong className="font-extrabold text-brand-darkblue">score compétitif</strong> au SAT ou au GMAT.</span>,
            <span>Elles sont particulièrement adaptées aux candidats qui souhaitent :</span>,
          ],
          bullets: [
            "Préparer une candidature dans une université internationale, notamment aux États-Unis ;",
            "Intégrer un Bachelor, un Master en Management (MiM) ou un MBA de haut niveau ;",
            "Atteindre un score cible dans le cadre d'un projet d'études à l'étranger ;",
            "Renforcer leur dossier académique et se démarquer dans un processus de sélection international ;",
            "Développer leurs compétences en raisonnement logique, mathématiques et anglais académique ;",
            "Acquérir les méthodes et stratégies spécifiques aux tests standardisés ;",
            "Maximiser leurs chances d'admission dans les universités et écoles les plus sélectives ;",
            "Accéder à davantage d'opportunités académiques et, dans certains cas, à des bourses d'études.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation du SAT & GMAT ?",
        bullets: [
          "Un accompagnement 100% individuel et sur mesure",
          "Une préparation orientée score avec des stratégies de performances éprouvées",
          "Une parfaite maîtrise des formats des tests et de leurs spécificités",
          "Une préparation complémentaire et renforcée en anglais académique",
          "+7 ans d'expertise et des résultats reconnus",
          "100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez maximiser vos chances de réussite aux tests SAT ou GMAT pour décrocher une admission dans les meilleures universités ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      next={{ label: "Commerce SESAME & ACCÈS", to: "/prepa-concours-sesame-acces" }}
    />
  );
}
