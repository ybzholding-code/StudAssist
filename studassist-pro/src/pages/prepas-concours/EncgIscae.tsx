import OrientationLevelPage from "../../components/OrientationLevelPage";
import { waLink } from "../../lib/utils";


const WHATSAPP_MSG_EncgIscae ="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation aux concours ENCG & ISCAE."

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

export default function PrepaConcoursEncgIscae() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · ENCG-ISCAE"
      accent="pink"
      title={<>Prépa Concours <span className="text-brand-teal">ENCG & ISCAE</span></>}
      subtitle="Intégrer les meilleures écoles de commerce au Maroc"
      intro={[
        <>
          Les concours <strong className="font-semibold text-brand-darkblue">ENCG</strong> et <strong className="font-semibold text-brand-darkblue">ISCAE</strong> constituent les principales voies d'accès aux <strong className="font-semibold text-brand-darkblue">écoles de commerce publiques les plus sélectives au Maroc</strong>. Ils permettent d'intégrer des formations reconnues pour leur exigence académique et leur forte employabilité.
        </>,
        <>
          Ces concours sont compétitifs et demandent une préparation spécifique, alliant maîtrise des fondamentaux, rapidité d'exécution et méthodologie. Chez <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong>, nous proposons une préparation structurée et intensive, permettant aux élèves de maximiser leurs chances d'admission.
        </>,
      ]}
      heroImage="/prepas-concours.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      whatsappMessage={WHATSAPP_MSG_EncgIscae}
      heroBadge="+6 ans d'expérience — 100 % d'admission dans le top 3 des écoles chaque année"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="ENCG & ISCAE"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les enjeux et exigences des concours ENCG & ISCAE",
        lead: "Les concours ENCG et ISCAE ne visent pas uniquement à mesurer le niveau académique des candidats. Ils cherchent à identifier des profils capables de raisonner efficacement, d'analyser des situations complexes et de performer dans un environnement compétitif. Leur réussite repose sur une combinaison de connaissances, de méthode et d'esprit concours.",
        bullets: [
          "Le raisonnement logique et mathématique",
          "Les capacités d'analyse et de compréhension",
          "La culture générale",
          "La maîtrise du français et de l'anglais",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation ciblée avec une méthodologie orientée performance",
          paragraphs: [
            <span className="block font-semibold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un enjeu déterminant pour l'orientation</span>,
            <span>L'accès à ces écoles repose sur un niveau élevé de performance. Les résultats obtenus conditionnent directement les possibilités d'intégration et la qualité des parcours académiques accessibles. Une préparation rigoureuse permet de se positionner efficacement dans un environnement très concurrentiel.</span>,

            <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation intensive et ciblée</span>,
            <span>Chez <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong>, nous organisons des <strong className="font-semibold text-brand-darkblue">sessions intensives</strong>, principalement pendant les vacances scolaires, afin de permettre aux élèves de se concentrer pleinement sur leur préparation. Les groupes sont limités à <strong className="font-semibold text-brand-darkblue">10 élèves maximum</strong>, garantissant un encadrement exigeant et une progression rapide. Les plannings sont adaptés en fonction des échéances et des disponibilités.</span>,

            <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une méthodologie orientée performance</span>,
            <span>Notre préparation repose sur une approche concrète et efficace :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>travail sur les typologies d'épreuves ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>exercices d'application ciblés ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>entraînements progressifs ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>concours blancs en conditions réelles.</span></li>
            </ul>,
            <span>Cette méthode permet de développer des automatismes et d'optimiser la gestion du temps.</span>,
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation de ces concours",
          paragraphs: [
            <span className="block font-semibold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Développer un véritable esprit concours</span>,
            <span>Au-delà de la maîtrise des exercices types, nous accompagnons les élèves dans le développement d'un <strong className="font-semibold text-brand-darkblue">véritable esprit concours</strong>. Réussir ces épreuves implique de savoir se positionner face aux autres candidats. Nous travaillons ainsi sur des dimensions clés : gestion du temps, gestion du stress, stratégies de réponse et capacité à prioriser pour optimiser son score. L'objectif est clair : permettre à chaque élève de performer dans un environnement compétitif.</span>,

            <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une dynamique de groupe stimulante</span>,
            <span>Les sessions en petits groupes favorisent une <strong className="font-semibold text-brand-darkblue">dynamique collective de travail</strong>, dans laquelle les élèves progressent ensemble. Nous encourageons l'échange, le challenge et l'entraide, afin de créer un environnement propice à la progression et à l'excellence.</span>,
          ],
        },
        {
          title: "Un accompagnement en continu par des enseignants experts des épreuves",
          paragraphs: [
            <span className="block font-semibold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un accompagnement qui se prolonge dans le temps</span>,
            <span>Chez <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong>, la préparation ne s'arrête pas à la fin des sessions. Nous restons en contact avec nos élèves, leur fournissons des contenus d'entraînement complémentaires et restons disponibles pour les accompagner jusqu'aux échéances. Les élèves peuvent également revenir s'entraîner à tout moment dans notre espace.</span>,

            <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un encadrement par des enseignants expérimentés</span>,
            <span>Les élèves sont accompagnés par des enseignants spécialisés, maîtrisant parfaitement les exigences des concours ENCG et ISCAE. Leur accompagnement permet d'apporter des méthodes efficaces, des explications claires et un suivi personnalisé.</span>,
          ],
        },
        {
          title: "À qui s'adresse la préparation des concours ENCG & ISCAE ?",
          paragraphs: [
            <span>Cette préparation s'adresse aux élèves ambitieux souhaitant intégrer les meilleures écoles de commerce publiques du Maroc et construire un parcours académique d'excellence. Elle est conçue pour les candidats qui souhaitent :</span>,
          ],
          bullets: [
            "Accéder à des formations sélectives reconnues pour leur qualité académique",
            "Structurer efficacement leur préparation aux concours",
            "Développer leurs capacités de raisonnement, d'analyse et de prise de décision",
            "Renforcer leur confiance face à des épreuves exigeantes",
            "Apprendre à gérer leur temps et optimiser leur performance",
            "Se démarquer dans un environnement fortement concurrentiel",
            "Construire un projet d'études cohérent avec leurs ambitions professionnelles",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation des concours ENCG & ISCAE ?",
        bullets: [
          "Une parfaite maîtrise des épreuves ENCG & ISCAE et de leurs spécificités grâce à des enseignants experts",
          "Une préparation orientée score avec des stratégies de performances éprouvées et un véritable esprit concours",
          "Des petits groupes à effectif réduit (10 élèves max) avec un suivi personnalisé",
          "Des concours blancs en conditions réelles pour développer les bons réflexes et automatismes",
          "+7 ans d'expertise et des résultats reconnus",
          "100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez performer aux concours ENCG & ISCAE ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: waLink(WHATSAPP_MSG_EncgIscae),
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Commerce SESAME & ACCÈS", to: "/prepa-concours-sesame-acces" }}
      next={{ label: "Ingé Avenir – Geipi – Puissance Alpha", to: "/prepa-concours-avenir-geipi-puissance-alpha" }}
    />
  );
}
