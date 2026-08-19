import { Link } from "react-router-dom";
import OrientationLevelPage from "../../components/OrientationLevelPage";
import { waLink } from "../../lib/utils";


const WHATSAPP_MSG_SesameAcces ="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation aux concours SESAME & ACCÈS (écoles de commerce post-bac en France)."

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

export default function PrepaConcoursSesameAcces() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · SESAME-ACCÈS"
      accent="pink"
      title={<>Prépa Concours <span className="text-brand-teal">SESAME & ACCÈS</span></>}
      subtitle="Intégrer les meilleures écoles de commerce post-bac en France"
      intro={[
        <>
          Les concours <strong className="font-semibold text-brand-darkblue">SESAME</strong> et <strong className="font-semibold text-brand-darkblue">ACCÈS</strong> constituent les principales voies d'accès aux <strong className="font-semibold text-brand-darkblue">écoles de commerce post-bac en France</strong>. Ils permettent d'intégrer des établissements reconnus, tels que l'ESSEC Global BBA, l'EM Lyon, l'IESEG, l'ESSCA, ou encore KEDGE, SKEMA et NEOMA.
        </>,
        <>
          Ces concours sont exigeants et sélectifs. Ils évaluent à la fois les capacités de raisonnement, la maîtrise de l'anglais, la compréhension et la méthodologie. Chez <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong>, nous proposons une préparation structurée et intensive, permettant aux élèves de maîtriser les épreuves et de maximiser leurs chances d'admission.
        </>,
      ]}
      heroImage="/prepas-concours.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      whatsappMessage={WHATSAPP_MSG_SesameAcces}
      heroBadge="+6 ans d'expérience — 100 % d'admission dans le top 3 des écoles chaque année"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="SESAME & ACCÈS"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les enjeux et exigences des concours SESAME & ACCÈS",
        lead: "Les concours SESAME et ACCÈS reposent sur des épreuves qui demandent rapidité, précision et maîtrise des formats, ce qui nécessite une préparation spécifique. Ces épreuves écrites sont conçues pour évaluer :",
        bullets: [
          "Le raisonnement logique, les compétences numériques et informatiques",
          "La compréhension, l'analyse de texte et la capacité de synthèse",
          "La culture générale et la connaissance des enjeux contemporains",
          "Les capacités à défendre ses idées et ses motivations à l'oral",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
        ],
      }}

            sections={[
        {
          title: "Une préparation ciblée avec une méthodologie orientée performance",
          paragraphs: [
            <span className="block font-semibold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un enjeu stratégique pour l'orientation</span>,
            <span>Les résultats obtenus à ces concours jouent un rôle déterminant dans l'accès aux écoles de commerce. Ils s'inscrivent dans une évaluation globale du profil de l'élève, incluant le dossier académique et les entretiens de motivation pour lesquels nos candidats peuvent être aidés à travers notre <Link to="/orientation/terminale" className="text-brand-darkblue font-black underline underline-offset-2">accompagnement en orientation</Link>. Une préparation complète et rigoureuse permet non seulement de réussir les épreuves, mais aussi de renforcer la cohérence du projet d'orientation.</span>,

            <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation intensive et ciblée</span>,
            <span>Chez <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong>, nous organisons des <strong className="font-semibold text-brand-darkblue">sessions intensives</strong>, principalement pendant les vacances scolaires, afin de permettre aux élèves de se concentrer pleinement sur leur préparation. Les groupes sont limités à <strong className="font-semibold text-brand-darkblue">8 élèves maximum</strong>, garantissant un encadrement de qualité et une progression rapide. Les plannings sont adaptés en fonction des échéances et des disponibilités de nos élèves.</span>,

            <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une méthodologie orientée performance</span>,
            <span>Notre préparation repose sur une approche concrète et efficace :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>travail sur les typologies d'épreuves ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>exercices d'application ciblés ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>entraînements progressifs ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span><strong className="font-semibold text-brand-darkblue">concours blancs en conditions réelles</strong>.</span></li>
            </ul>,
            <span>Cette méthode permet de développer des automatismes et d'optimiser la gestion du temps.</span>,
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation de ces concours",
          paragraphs: [
            <span className="block font-semibold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Développer un véritable esprit concours</span>,
            <span>Au-delà de la maîtrise des exercices types, nous accompagnons les élèves dans le développement d'un <strong className="font-semibold text-brand-darkblue">véritable esprit concours</strong> qui leur servira pour toute la suite de leur cursus supérieur. Réussir ces épreuves ne consiste pas uniquement à savoir répondre aux questions, mais à être capable de <strong className="font-semibold text-brand-darkblue">se démarquer dans un environnement compétitif</strong>. Nous travaillons ainsi sur des dimensions essentielles telles que la gestion du temps, la gestion du stress, les stratégies de réponse et la capacité à prioriser pour optimiser son score. L'objectif est de permettre à chaque élève de performer face aux autres candidats, et non simplement de réussir l'épreuve.</span>,

            <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une dynamique de groupe stimulante</span>,
            <span>Les sessions en petits groupes permettent de créer une <strong className="font-semibold text-brand-darkblue">véritable dynamique collective</strong>, dans laquelle les élèves progressent ensemble. Nous encourageons une approche collaborative, où les élèves échangent, se challengent et s'améliorent mutuellement, favorisant ainsi une progression plus rapide et durable.</span>,
          ],
        },
        {
          title: "Un accompagnement en continu par des enseignants experts des épreuves",
          paragraphs: [
            <span className="block font-semibold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un accompagnement qui se prolonge dans le temps</span>,
            <span>Chez <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong>, la préparation ne s'arrête pas à la fin des sessions. Nous restons en contact avec nos élèves, leur fournissons des contenus d'entraînement complémentaires et restons disponibles pour les accompagner jusqu'aux échéances. Les élèves peuvent également revenir s'entraîner à tout moment dans notre espace, afin de continuer à progresser dans un cadre structuré et stimulant.</span>,

            <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un encadrement par des enseignants expérimentés</span>,
            <span>Les élèves sont accompagnés par des enseignants spécialisés, maîtrisant parfaitement les exigences des concours SESAME et ACCÈS. Leur accompagnement permet d'apporter des explications claires, des méthodes efficaces et un suivi personnalisé.</span>,
          ],
        },
        {
          title: "À qui s'adresse la préparation des concours SESAME & ACCÈS ?",
          paragraphs: [
            <span>Les concours SESAME et ACCÈS ne sont pas réservés aux élèves excellents en mathématiques ou disposant d'un parcours particulier. Ils récompensent avant tout les candidats capables de mobiliser des compétences variées : logique, analyse, rapidité, maîtrise de l'anglais et méthodologie. Une préparation adaptée permet souvent de faire une différence significative dans les résultats obtenus.</span>,
            <span>Notre préparation s'adresse aux élèves de Terminale souhaitant intégrer une école de commerce post-bac en France via les concours SESAME ou ACCÈS. Elle est particulièrement adaptée aux élèves qui souhaitent :</span>,
          ],
          bullets: [
            "Intégrer des écoles telles que l'ESSEC Global BBA, l'EM Lyon, l'IESEG, l'ESSCA, KEDGE, SKEMA ou NEOMA",
            "Développer leurs compétences en logique, raisonnement et résolution de problèmes",
            "Renforcer leur niveau d'anglais et leur maîtrise des épreuves écrites",
            "Acquérir les méthodes spécifiques attendues dans les concours SESAME et ACCÈS",
            "Améliorer leur rapidité d'exécution et leur gestion du temps",
            "Développer un véritable esprit concours et apprendre à performer dans un environnement sélectif",
            "Maximiser leurs chances d'admission dans les écoles de commerce les plus recherchées",
            "Construire un projet d'orientation cohérent en lien avec leurs ambitions académiques et professionnelles",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation des concours Sésame & Accès ?",
        bullets: [
          "Une parfaite maîtrise des épreuves SESAME - ACCÈS et de leurs spécificités grâce à des enseignants experts",
          "Une préparation orientée score avec des stratégies de performances éprouvées et un véritable esprit concours",
          "Des petits groupes à effectif réduit (8 élèves max) avec un suivi personnalisé",
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
        body: "Vous souhaitez performer aux concours SESAME & ACCÈS ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: waLink(WHATSAPP_MSG_SesameAcces),
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "SAT / GMAT", to: "/prepa-sat-gmat" }}
      next={{ label: "Commerce ENCG & ISCAE", to: "/prepa-concours-encg-iscae" }}
    />
  );
}
