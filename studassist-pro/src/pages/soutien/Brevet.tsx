import { Link } from "react-router-dom";
import OrientationLevelPage from "../../components/OrientationLevelPage";
import { waLink } from "../../lib/utils";


const WHATSAPP_MSG_Brevet ="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation au Diplôme National du Brevet."

const LEVELS = [
  { key: "primaire", label: "Primaire", href: "/soutien/primaire" },
  { key: "college", label: "Collège", href: "/soutien/college" },
  { key: "brevet", label: "Prépa Brevet", href: "/soutien/brevet" },
  { key: "lycee", label: "Lycée", href: "/soutien/lycee" },
  { key: "superieur", label: "Supérieur", href: "/soutien/superieur" },
  { key: "stages", label: "Stages de vacances", href: "/soutien/stages" },
];

export default function SoutienBrevet() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Brevet"
      accent="pink"
      title={<>Préparation au Diplôme National du <span className="text-brand-teal">Brevet</span></>}
      subtitle="Aborder la première échéance officielle avec méthode et sérénité"
      intro={[
        <>
          Le Diplôme National du Brevet constitue la première évaluation officielle du parcours scolaire. Il marque une étape clé avant l'entrée au lycée et nécessite une <strong className="font-semibold text-brand-darkblue">préparation spécifique</strong>, au-delà du travail effectué en classe.
        </>,
        <>
          Chez <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong>, la <strong className="font-semibold text-brand-darkblue">prépa Brevet</strong> s'adresse aux élèves de <strong className="font-semibold text-brand-darkblue">4ᵉ et de 3ᵉ</strong>, quels que soient leur niveau et leur système scolaire.
        </>,
      ]}
      heroImage="/soutien-scolaire-main.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 65%"
      heroCtaLabel="Réserver un cours découverte"
      whatsappMessage={WHATSAPP_MSG_Brevet}
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Prépa Brevet"
      enjeuxEyebrow="Les enjeux"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux du Brevet",
        lead: "Une préparation structurée permet d'aborder l'examen avec confiance, méthode et sérénité. La réussite du Brevet repose sur :",
        bullets: [
          "La maîtrise des fondamentaux",
          "La compréhension des attendus officiels",
          "La méthodologie des épreuves",
          "La gestion du temps et du stress",
          "La préparation à l'oral",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
        ],
      }}

            sections={[
        {
          title: "Une préparation ciblée et progressive dispensée par des professeurs expérimentés",
          paragraphs: [
            <span>Notre accompagnement repose sur une <strong className="font-semibold text-brand-darkblue">préparation ciblée et progressive</strong>, encadrée par des <strong className="font-semibold text-brand-darkblue">professeurs expérimentés</strong>, habitués à préparer les élèves à cet examen et maîtrisant parfaitement ses exigences.</span>,
            <span>La plupart de nos enseignants ont également exercé en tant que <strong className="font-semibold text-brand-darkblue">correcteurs du Diplôme National du Brevet</strong>, ce qui leur permet de transmettre aux élèves une lecture précise des attentes officielles, des critères d'évaluation et des erreurs fréquentes.</span>,
            <span>La préparation inclut :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>révisions approfondies des matières évaluées ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>entraînements sur <strong className="font-semibold text-brand-darkblue">sujets types et annales</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>travail méthodologique sur les épreuves écrites ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>préparation à l'<strong className="font-semibold text-brand-darkblue">oral du Brevet</strong> (présentation, argumentation, posture).</span></li>
            </ul>,
            <span>Cette expertise terrain permet un travail ciblé sur la compréhension des consignes, la structuration des réponses et l'optimisation des points à chaque épreuve.</span>,
          ],
        },
        {
          title: "Des formats flexibles, pensés pour la réussite",
          paragraphs: [
            <span>La prépa Brevet est proposée en <strong className="font-semibold text-brand-darkblue">groupes de travail pouvant aller jusqu'à 8 élèves</strong>, afin de favoriser l'émulation tout en conservant un cadre structuré.</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>Les <strong className="font-semibold text-brand-darkblue">volumes horaires sont adaptés</strong> en fonction du niveau, des objectifs et des besoins spécifiques de chaque élève.</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>Les <strong className="font-semibold text-brand-darkblue">plannings sont construits selon les disponibilités du groupe</strong>, permettant une organisation fluide et compatible avec la scolarité de chacun.</span></li>
            </ul>,
            <span>Cette flexibilité garantit un accompagnement <strong className="font-semibold text-brand-darkblue">réaliste, progressif et efficace</strong>, sans surcharge inutile.</span>,
          ],
        },
        {
          title: "Une méthodologie adaptée à chaque élève incluant une continuité naturelle avec le soutien scolaire",
          paragraphs: [
            <span>La prépa Brevet STUDASSIST s'inscrit dans une <strong className="font-semibold text-brand-darkblue">continuité directe avec le</strong>{" "}<Link to="/soutien/college" className="text-brand-teal font-semibold hover:underline">soutien scolaire</Link> :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>consolidation des bases tout au long de l'année ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>intensification du travail à l'approche de l'examen ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>accompagnement progressif et sans rupture.</span></li>
            </ul>,
            <span>Chaque élève avance à son rythme, dans une logique de <strong className="font-semibold text-brand-darkblue">progression maîtrisée</strong>.</span>,

            <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une méthodologie adaptée à chaque élève</span>,
            <span>Nos enseignants adaptent les contenus, les méthodes et le rythme de travail <strong className="font-semibold text-brand-darkblue">au niveau réel de chaque élève</strong> et au système scolaire suivi (français, marocain, bilingue ou international), tout en maintenant un <strong className="font-semibold text-brand-darkblue">haut niveau d'exigence académique</strong>.</span>,
          ],
        },
        {
          title: "À qui s'adresse la prépa Brevet ?",
          paragraphs: [
            <span>Cette préparation s'adresse aux élèves :</span>,
          ],
          bullets: [
            "Souhaitant sécuriser la réussite du Brevet",
            "Manquant de méthode ou de confiance",
            "Disposant d'un bon niveau et visant un excellent résultat",
            "Préparant une entrée au lycée sereine et structurée",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la prépa Brevet ?",
        bullets: [
          "Une préparation structurée et progressive",
          "Des professeurs expérimentés, pour la plupart anciens correcteurs du Brevet",
          "Des groupes jusqu'à 8 élèves, favorisant dynamique et encadrement",
          "Des volumes horaires modulables selon les besoins",
          "Des plannings adaptés aux disponibilités des élèves",
          "Un suivi rigoureux, une vision long terme au-delà de l'examen",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez mettre en place une préparation efficace pour le Brevet ?",
        primaryLabel: "Découvrir la prochaine édition de notre prépa Brevet",
        primaryHref: "/contact",
        secondaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        secondaryHref: waLink(WHATSAPP_MSG_Brevet),
      }}

      faqKeys={["soutien", "method"]}
      faqTitle="Prépa Brevet : questions fréquentes"
      prev={{ label: "Collège", to: "/soutien/college" }}
      next={{ label: "Lycée", to: "/soutien/lycee" }}
    />
  );
}
