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

export default function PrepaConcoursAvenirGeipi() {
  return (
    <OrientationLevelPage
      eyebrow="PRÉPAS CONCOURS - AVENIR - GEIPI POLYTECH - PUISSANCE ALPHA"
      accent="pink"
      title={<>Prépa Concours des <span className="text-brand-teal">Écoles d'Ingénieurs en France</span></>}
      subtitle="Réussir les concours et intégrer les meilleures écoles d'ingénieurs post-bac"
      intro={[
        "Les concours Avenir, Geipi Polytech et Puissance Alpha constituent les principales voies d'accès aux écoles d'ingénieurs post-bac en France. Ils permettent d'intégrer des établissements reconnus tels que EPITA, ESILV, ECE, ESIGELEC, les écoles du réseau Polytech ou encore CY Tech.",
        "Ces concours sont sélectifs et nécessitent une préparation rigoureuse, combinant maîtrise des fondamentaux scientifiques, méthodologie et gestion du temps. Chez STUDASSIST, nous proposons une préparation structurée et intensive, permettant aux élèves de maximiser leurs performances et leurs chances d'admission.",
      ]}
      heroImage="/prepas-concours.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation aux concours Avenir, GEIPI Polytech et Puissance Alpha (écoles d'ingénieurs en France)."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Ingé France"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux et exigences des concours GEIPI Polytech - Puissance Alpha - Avenir - Advance",
        lead: "Les concours d'ingénieurs post-bac reposent sur des épreuves écrites, généralement sous forme de QCM. Ces épreuves qui demandent précision, rapidité et rigueur, ainsi qu'une bonne compréhension des consignes, sont conçues pour évaluer :",
        bullets: [
          "Les compétences en mathématiques",
          "Les connaissances en physique-chimie",
          "Le raisonnement logique",
          "La capacité à résoudre des problèmes rapidement",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/calculator.png",
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation ciblée avec une méthodologie orientée performance",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un enjeu stratégique pour l'orientation</span>,
            <span>Les résultats obtenus à ces concours jouent un <strong className="font-extrabold text-brand-darkblue">rôle déterminant</strong> dans l'accès aux écoles d'ingénieurs. Ils s'inscrivent dans une <strong className="font-extrabold text-brand-darkblue">évaluation globale du dossier</strong>, incluant les notes de contrôle continu, les appréciations scolaires, mais aussi les activités & centres d'intérêts et les lettres de motivation dans le cadre du <Link to="/orientation/terminale" className="text-brand-darkblue font-black underline underline-offset-2">projet d'orientation scolaire</Link>. Une préparation efficace permet de <strong className="font-extrabold text-brand-darkblue">sécuriser son admission</strong> et de viser les écoles les plus sélectives.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation intensive et ciblée</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous organisons des <strong className="font-extrabold text-brand-darkblue">sessions intensives</strong>, principalement pendant les vacances scolaires, afin de permettre aux élèves de se concentrer pleinement sur leur préparation. Les groupes sont limités à <strong className="font-extrabold text-brand-darkblue">8 élèves maximum</strong>, garantissant un encadrement exigeant et une progression rapide. Les plannings sont adaptés en fonction des échéances et des disponibilités.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une méthodologie orientée performance</span>,
            <span>Notre préparation repose sur une approche concrète et efficace :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>travail approfondi des fondamentaux scientifiques ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>exercices d'application ciblés ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>entraînements progressifs ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span><strong className="font-extrabold text-brand-darkblue">concours blancs en conditions réelles</strong>.</span></li>
            </ul>,
            <span>Cette approche permet de renforcer la maîtrise des notions tout en développant <strong className="font-extrabold text-brand-darkblue">rapidité et efficacité</strong>. Elle présente également un avantage stratégique : les exercices d'approfondissement scientifique travaillés dans le cadre de la préparation aux concours contribuent directement à la réussite aux <Link to="/prepa-bac-specialites" className="text-brand-darkblue font-black underline underline-offset-2">épreuves de spécialité du Baccalauréat</Link>, notamment en mathématiques et en physique-chimie. Les élèves consolident ainsi leur niveau académique tout en se préparant efficacement aux concours.</span>,
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation de ces concours",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Développer un véritable esprit concours</span>,
            <span>Au-delà des connaissances, la réussite à ces concours repose sur la capacité à performer dans un environnement exigeant. Nous accompagnons les élèves dans le développement d'un <strong className="font-extrabold text-brand-darkblue">esprit concours</strong>, en travaillant sur la <strong className="font-extrabold text-brand-darkblue">gestion du temps</strong>, la <strong className="font-extrabold text-brand-darkblue">gestion du stress</strong>, les stratégies de réponse et la capacité à prioriser les exercices. L'objectif est de <strong className="font-extrabold text-brand-darkblue">maximiser le score</strong> et de faire la différence face aux autres candidats.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une dynamique de groupe stimulante</span>,
            <span>Les sessions en petits groupes permettent de créer une <strong className="font-extrabold text-brand-darkblue">dynamique collective de travail</strong>, favorisant l'entraide, le challenge et la progression. Les élèves évoluent dans un environnement stimulant, propice à la performance.</span>,
          ],
        },
        {
          title: "Un accompagnement en continu par des enseignants experts des épreuves",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un accompagnement qui se prolonge dans le temps</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, la préparation ne s'arrête pas à la fin des sessions. Nous restons en contact avec nos élèves, leur fournissons des contenus d'entraînements complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent également revenir s'entraîner à tout moment dans notre espace.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un encadrement par des enseignants spécialisés</span>,
            <span>Les élèves sont accompagnés par des enseignants <strong className="font-extrabold text-brand-darkblue">spécialisés en mathématiques et en sciences</strong>, maîtrisant parfaitement les exigences des concours d'ingénieurs. Leur accompagnement permet d'apporter <strong className="font-extrabold text-brand-darkblue">rigueur, méthode et efficacité</strong>.</span>,
          ],
        },
        {
          title: "À qui s'adresse la préparation des concours d'écoles d'ingénieurs post-bac en France ?",
          paragraphs: [
            <span>Cette préparation s'adresse aux élèves de <strong className="font-extrabold text-brand-darkblue">Terminale</strong> souhaitant intégrer les principales écoles d'ingénieurs post-bac en France via les concours <strong className="font-extrabold text-brand-darkblue">Avenir, Geipi Polytech, Puissance Alpha ou Advance</strong>.</span>,
            <span>Elle est particulièrement adaptée aux élèves qui souhaitent :</span>,
          ],
          bullets: [
            "Intégrer une école d'ingénieurs reconnue en France ;",
            "Renforcer leurs compétences en mathématiques, physique-chimie et raisonnement logique ;",
            "Développer les méthodes et les réflexes attendus dans les concours scientifiques ;",
            "Améliorer leur rapidité d'exécution et leur gestion du temps ;",
            "Se préparer efficacement à des épreuves sélectives et compétitives ;",
            "Consolider leur niveau dans les spécialités scientifiques du Baccalauréat ;",
            "Développer un véritable esprit concours et apprendre à performer sous pression ;",
            "Maximiser leurs chances d'admission dans les écoles les plus recherchées.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation des concours GEIPI POLYTECH - PUISSANCE ALPHA - AVENIR - ADVANCE ?",
        bullets: [
          "Une parfaite maîtrise des épreuves scientifiques et de leurs spécificités grâce à des enseignants experts",
          "Une préparation orientée score avec des stratégies de performances éprouvées et un véritable esprit concours",
          "Des petits groupes à effectif réduit (10 élèves max) avec un suivi personnalisé",
          "Des concours blancs en conditions réelles pour développer les bons réflexes et automatismes",
          "Une préparation à la fois utile pour les concours blancs et pour les révisions des épreuves du baccalauréat",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez performer aux concours d'ingénieurs en France ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Commerce ENCG & ISCAE", to: "/prepa-concours-encg-iscae" }}
      next={{ label: "Ingé UM6P", to: "/prepa-concours-um6p" }}
    />
  );
}
