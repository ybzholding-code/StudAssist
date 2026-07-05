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

export default function PrepaArchitecture() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · Architecture"
      accent="pink"
      title={<>Prépa Concours <span className="text-brand-teal">Architecture ENA</span></>}
      subtitle="Réussir le concours et intégrer les Écoles Nationales d'Architecture au Maroc"
      intro={[
        "Les Écoles Nationales d'Architecture (ENA) forment les futurs architectes appelés à concevoir les espaces, bâtiments et villes de demain, à travers un cursus exigeant, alliant créativité, rigueur et réflexion.",
        "L'accès à ces écoles se fait via un concours sélectif, qui évalue autant les capacités académiques que le potentiel créatif des candidats. Chez STUDASSIST, nous proposons une préparation spécifique, permettant aux élèves de développer les compétences attendues et de maximiser leurs chances d'admission.",
      ]}
      heroImage="/prepas-concours.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation au concours Architecture ENA."
      heroBadge="+7 ans d'expérience — 100 % d'admission dans le top 3 des écoles chaque année"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Architecture ENA"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux et exigences du concours ENA",
        lead: "Le concours d'entrée en architecture repose sur une sélection qui se distingue des concours classiques. Une part importante du concours repose sur les épreuves graphiques, qui constituent souvent un élément déterminant.",
        bullets: [
          "Créativité et sens artistique : le concours valorise la capacité à imaginer, créer et développer un regard personnel sur son environnement",
          "Expression graphique : les épreuves évaluent la capacité à représenter des idées, observer avec précision et communiquer visuellement",
          "Analyse et réflexion : les candidats doivent démontrer leur aptitude à observer, comprendre et structurer une réflexion pertinente",
          "Sélectivité de l'admission : l'accès aux Écoles Nationales d'Architecture est compétitif et nécessite une préparation spécifique pour se démarquer",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/paint-palette.png",
          "https://img.icons8.com/3d-fluency/94/pencil.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
        ],
      }}

      sections={[
        {
          title: "Une sélection fondée à la fois sur la motivation, le potentiel créatif et le niveau académique",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Comprendre les épreuves du concours</span>,
            <span>Le concours d'entrée en architecture repose sur des épreuves qui se distinguent des concours classiques. Il évalue à la fois les <strong className="font-extrabold text-brand-darkblue">capacités de raisonnement</strong>, la <strong className="font-extrabold text-brand-darkblue">culture générale</strong>, la <strong className="font-extrabold text-brand-darkblue">sensibilité artistique</strong> et la capacité à représenter et à imaginer. Une part importante du concours repose sur les <strong className="font-extrabold text-brand-darkblue">épreuves graphiques</strong>, qui constituent souvent un élément déterminant.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Épreuves graphiques</span>,
            <span>Les candidats sont évalués sur leur capacité à <strong className="font-extrabold text-brand-darkblue">observer, représenter et composer visuellement</strong>. Attendus :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>dessin d'observation ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>composition graphique ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>représentation spatiale ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>expression visuelle personnelle.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Épreuves écrites</span>,
            <span>Elles portent généralement sur la <strong className="font-extrabold text-brand-darkblue">culture générale</strong>, la réflexion architecturale et la capacité d'analyse. Attendus :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>structurer une réflexion ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>mobiliser des références pertinentes ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>démontrer une compréhension de l'<strong className="font-extrabold text-brand-darkblue">environnement bâti</strong> et des enjeux contemporains.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Quel profil pour réussir ?</span>,
            <span>Les élèves admis présentent généralement :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>une <strong className="font-extrabold text-brand-darkblue">sensibilité artistique</strong> et un intérêt marqué pour l'architecture, le design ou l'art ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>une <strong className="font-extrabold text-brand-darkblue">capacité d'observation</strong> et de représentation ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>de la <strong className="font-extrabold text-brand-darkblue">créativité</strong> et une aptitude à imaginer des espaces ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>de la <strong className="font-extrabold text-brand-darkblue">rigueur et de la régularité</strong> dans le travail.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un enjeu stratégique pour l'orientation</span>,
            <span>Intégrer une École Nationale d'Architecture constitue un <strong className="font-extrabold text-brand-darkblue">choix académique structurant</strong>, ouvrant la voie à des carrières dans l'architecture, l'urbanisme, le design d'espace ou le paysage. Cette démarche peut être complétée par un <Link to="/orientation/terminale" className="text-brand-darkblue font-black underline underline-offset-2">accompagnement en orientation</Link> dès la Seconde ou la Première.</span>,
          ],
        },
        {
          title: "Une préparation progressive pour développer son potentiel créatif",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Quand commencer à se préparer ?</span>,
            <span>La préparation au concours ENA doit être <strong className="font-extrabold text-brand-darkblue">anticipée</strong>. Idéalement dès la classe de <strong className="font-extrabold text-brand-darkblue">Seconde ou Première</strong>, pour développer les bases en dessin et en réflexion, puis en <strong className="font-extrabold text-brand-darkblue">Terminale</strong>, pour s'entraîner intensivement aux épreuves. Commencer tôt permet d'acquérir les bons automatismes et de construire progressivement une <strong className="font-extrabold text-brand-darkblue">démarche créative personnelle</strong>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation structurée et adaptée</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous proposons une préparation spécifique au concours ENA. Les élèves sont accompagnés en <strong className="font-extrabold text-brand-darkblue">petits groupes de 8 maximum</strong>, favorisant un suivi personnalisé et une progression rapide. Nous veillons à créer une <strong className="font-extrabold text-brand-darkblue">dynamique de groupe stimulante</strong>, basée sur l'échange, l'inspiration et l'entraide.</span>,
            <span>Notre accompagnement combine :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <strong className="font-extrabold text-brand-darkblue">séances régulières</strong> pour développer les bases en dessin, en composition et en réflexion ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <strong className="font-extrabold text-brand-darkblue">stages intensifs pendant les vacances</strong> pour s'entraîner en conditions proches du concours.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une méthodologie orientée progression</span>,
            <span>Notre préparation repose sur :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>exercices de <strong className="font-extrabold text-brand-darkblue">dessin d'observation</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>travail sur la <strong className="font-extrabold text-brand-darkblue">composition et l'espace</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>développement de la <strong className="font-extrabold text-brand-darkblue">créativité</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>entraînements sur sujets type concours et <strong className="font-extrabold text-brand-darkblue">simulations en conditions réelles</strong>.</span></li>
            </ul>,
            <span>Cette méthode permet de développer à la fois <strong className="font-extrabold text-brand-darkblue">technique, confiance et démarche créative</strong>.</span>,
          ],
        },
        {
          title: "Un accompagnement continu et dynamique par des enseignants experts des épreuves",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Développer un regard et une démarche</span>,
            <span>Réussir le concours ENA ne consiste pas uniquement à bien dessiner. Nous accompagnons les élèves dans le développement de leur capacité à :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span><strong className="font-extrabold text-brand-darkblue">observer et analyser</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>structurer une idée ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>exprimer une intention ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>défendre une proposition.</span></li>
            </ul>,
            <span>L'objectif est de construire une <strong className="font-extrabold text-brand-darkblue">véritable démarche créative</strong>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une dynamique de groupe inspirante</span>,
            <span>Les élèves évoluent dans un <strong className="font-extrabold text-brand-darkblue">environnement stimulant</strong>, où ils peuvent échanger leurs idées, s'inspirer les uns des autres et progresser ensemble. Cette dynamique favorise la <strong className="font-extrabold text-brand-darkblue">créativité</strong> et l'engagement.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement qui se prolonge dans le temps</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous accompagnons les élèves dans la durée. Nous restons en contact, proposons des exercices complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent venir s'entraîner à tout moment dans notre espace, accompagnés par des <strong className="font-extrabold text-brand-darkblue">intervenants expérimentés</strong> maîtrisant parfaitement les exigences du concours ENA.</span>,
          ],
        },
        {
          title: "À qui s'adresse la préparation du concours ENA ?",
          paragraphs: [
            <span>Cette préparation s'adresse aux élèves de <strong className="font-extrabold text-brand-darkblue">Seconde, Première et Terminale</strong> souhaitant intégrer une École Nationale d'Architecture et développer les compétences créatives, graphiques et analytiques attendues lors du concours. Elle est particulièrement adaptée aux élèves qui souhaitent :</span>,
          ],
          bullets: [
            "Construire un projet d'études en architecture solide et cohérent ;",
            "Confirmer leur intérêt pour l'architecture, le design ou l'urbanisme ;",
            "Développer leurs compétences en dessin d'observation et en composition graphique ;",
            "Renforcer leur sensibilité artistique et leur capacité d'expression visuelle ;",
            "Acquérir les méthodes spécifiques attendues aux épreuves du concours ;",
            "Structurer efficacement leur préparation sur le long terme ;",
            "Développer un regard personnel et une démarche créative ;",
            "Maximiser leurs chances d'intégrer l'une des Écoles Nationales d'Architecture.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le concours ENA ?",
        bullets: [
          "Une préparation spécifique à la croisée de l'académique et du créatif",
          "Développement du potentiel artistique de la démarche créative",
          "Des petits groupes à effectif réduit (8 élèves max) avec un suivi personnalisé",
          "Des intervenants expérimentés maîtrisant parfaitement les exigences du concours",
          "Un travail approfondi et progressif sur les épreuves graphiques — dessin d'observation, composition, représentation et expression visuelle",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/paint-palette.png",
          "https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/pencil.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez maximiser vos chances d'admission en architecture au Maroc ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Sciences Po", to: "/prepa-sciences-po" }}
    />
  );
}
