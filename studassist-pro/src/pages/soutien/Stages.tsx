import OrientationLevelPage from "../../components/OrientationLevelPage";
import { waLink } from "../../lib/utils";


const WHATSAPP_MSG_Stages ="Bonjour STUDASSIST, je souhaite obtenir des informations sur les stages de vacances."


const LEVELS = [
  { key: "primaire", label: "Primaire", href: "/soutien/primaire" },
  { key: "college", label: "Collège", href: "/soutien/college" },
  { key: "brevet", label: "Prépa Brevet", href: "/soutien/brevet" },
  { key: "lycee", label: "Lycée", href: "/soutien/lycee" },
  { key: "superieur", label: "Supérieur", href: "/soutien/superieur" },
  { key: "stages", label: "Stages de vacances", href: "/soutien/stages" },
];

export default function SoutienStages() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Stages"
      accent="pink"
      title={<>Stages de <span className="text-brand-teal">vacances</span> STUDASSIST</>}
      subtitle="Consolider les acquis, combler les lacunes et préparer la rentrée avec une longueur d'avance"
      intro={[
        "Les vacances scolaires représentent une opportunité idéale pour faire le point, renforcer les apprentissages et aborder la rentrée suivante dans les meilleures conditions.",
        <>
          Chez <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong>, nos <strong className="font-semibold text-brand-darkblue">stages de vacances</strong> sont conçus comme des <strong className="font-semibold text-brand-darkblue">modules intensifs et structurés</strong>, permettant aux élèves de progresser efficacement tout en conservant un rythme équilibré. Ils s'adressent aux élèves du <strong className="font-semibold text-brand-darkblue">primaire, collège et lycée</strong>, quels que soient leur niveau et leur système scolaire.
        </>,
      ]}
      heroImage="/soutien-scolaire-main.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 65%"
      heroCtaLabel="Réserver un cours découverte"
      whatsappMessage={WHATSAPP_MSG_Stages}
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Stages de vacances"
      enjeuxEyebrow="Les avantages des stages de vacances"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Un format clair et efficace",
        lead: "Chaque stage est organisé sur 5 jours, à raison de 2 heures de cours par jour et par matière, soit un total de 10 heures de formation. Ce format permet :",
        bullets: [
          "Un diagnostic rapide en début de stage",
          "Une immersion progressive, sans surcharge",
          "Un travail ciblé sur les notions essentielles",
          "Une réelle continuité pédagogique sur la semaine",
          "Un bilan personnalisé en fin de stage",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

            sections={[
        {
          title: "Un stage personnalisé pour répondre aux besoins de chaque élève",
          paragraphs: [
            <span>Chaque élève aborde les vacances avec des besoins différents. Certains souhaitent combler des lacunes, d'autres consolider leurs acquis, préparer un changement de niveau ou approfondir certaines matières pour viser l'excellence.</span>,
            <span>C'est pourquoi chaque stage débute par un <strong className="font-semibold text-brand-darkblue">diagnostic pédagogique</strong> permettant d'identifier précisément les points forts, les difficultés et les objectifs de progression de l'élève. À partir de ce bilan, un programme de travail personnalisé est mis en place afin de concentrer les efforts sur les notions réellement prioritaires.</span>,
            <span>Les stages <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong> sont organisés en groupes de seulement <strong className="font-semibold text-brand-darkblue">2 à 4 élèves</strong> afin de garantir une attention individualisée, une forte interaction avec l'enseignant et une adaptation permanente au niveau de chacun.</span>,
          ],
        },
        {
          title: "Consolider les acquis, combler les lacunes et retrouver confiance",
          paragraphs: [
            <span>Les vacances constituent un moment privilégié pour prendre du recul sur l'année scolaire et renforcer les apprentissages dans un cadre plus serein.</span>,
            <span>Les stages permettent notamment de :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>identifier et combler les lacunes accumulées ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>consolider les fondamentaux ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>renforcer la méthodologie ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>améliorer la compréhension des notions clés ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>retrouver confiance dans les matières importantes.</span></li>
            </ul>,
            <span>Grâce à un travail ciblé et progressif, les élèves repartent sur des bases plus solides et développent davantage d'autonomie dans leur travail.</span>,
          ],
        },
        {
          title: "Préparer la rentrée avec une longueur d'avance",
          paragraphs: [
            <span>Les stages de vacances ne servent pas uniquement à rattraper un retard. Ils permettent également d'anticiper les exigences du niveau suivant et d'aborder la rentrée avec davantage de sérénité.</span>,
            <span>Selon l'âge et le parcours de l'élève, les stages peuvent contribuer à :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>préparer l'entrée au collège ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>anticiper l'entrée au lycée ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>renforcer les matières stratégiques ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>préparer le choix des spécialités ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>aborder plus sereinement le Brevet ou le Baccalauréat ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>découvrir certaines notions du programme à venir.</span></li>
            </ul>,
            <span>Cette approche permet de réduire le stress lié aux changements de niveau tout en développant la confiance et la motivation.</span>,
          ],
        },
        {
          title: "Une méthodologie STUDASSIST orientée progression",
          paragraphs: [
            <span>Chaque stage est organisé sur <strong className="font-semibold text-brand-darkblue">5 jours</strong> à raison de <strong className="font-semibold text-brand-darkblue">2 heures par jour et par matière</strong>, soit un total de <strong className="font-semibold text-brand-darkblue">10 heures d'accompagnement</strong>. Ce format intensif mais équilibré favorise une immersion progressive et une réelle continuité pédagogique sur la semaine.</span>,
            <span>En fin de stage, un <strong className="font-semibold text-brand-darkblue">bilan personnalisé</strong> est réalisé afin de mesurer les progrès accomplis, les notions consolidées et les axes de travail à poursuivre.</span>,
            <span>Nos enseignants adaptent leur pédagogie aux systèmes scolaires marocain, français, bilingue et international tout en maintenant un haut niveau d'exigence académique. L'objectif n'est pas seulement de progresser pendant les vacances, mais de développer des méthodes de travail et des réflexes qui accompagneront l'élève tout au long de sa scolarité.</span>,
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour les stages de vacances ?",
        bullets: [
          "Un format clair : 10h sur 5 jours",
          "Des groupes très restreints (2 à 4 élèves maximum)",
          "Un suivi individualisé",
          "Des enseignants expérimentés et certifiés",
          "Une adaptation à tous les systèmes scolaires",
          "Une méthodologie structurée et orientée progression",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez inscrire votre enfant à un stage de vacances STUDASSIST ?",
        primaryLabel: "Découvrir les prochains stages",
        primaryHref: "/contact",
        secondaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        secondaryHref: waLink(WHATSAPP_MSG_Stages),
      }}

      faqKeys={["soutien", "method"]}
      faqTitle="Stages de vacances : questions fréquentes"
      prev={{ label: "Supérieur", to: "/soutien/superieur" }}
    />
  );
}
