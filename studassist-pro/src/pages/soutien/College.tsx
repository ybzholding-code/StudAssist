import { Link } from "react-router-dom";
import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "primaire", label: "Primaire", href: "/soutien/primaire" },
  { key: "college", label: "Collège", href: "/soutien/college" },
  { key: "brevet", label: "Prépa Brevet", href: "/soutien/brevet" },
  { key: "lycee", label: "Lycée", href: "/soutien/lycee" },
  { key: "superieur", label: "Supérieur", href: "/soutien/superieur" },
  { key: "stages", label: "Stages de vacances", href: "/soutien/stages" },
];

export default function SoutienCollege() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Collège"
      accent="pink"
      title={<>Soutien scolaire au <span className="text-brand-teal">collège</span></>}
      subtitle="Consolider les acquis, structurer la méthode et préparer l'entrée au lycée"
      intro={[
        "Le collège est une période charnière du parcours scolaire. Les exigences académiques augmentent, le rythme s'intensifie et l'élève doit progressivement gagner en autonomie, en organisation et en méthode.",
        "Chez STUDASSIST, nous proposons un soutien scolaire au collège structuré, exigeant et personnalisé, pensé aussi bien pour accompagner les élèves rencontrant des difficultés que pour ceux disposant déjà d'un bon niveau et souhaitant viser l'excellence, quel que soit leur système scolaire.",
      ]}
      heroImage="/soutien-scolaire-main.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 65%"
      heroCtaLabel="Réserver un cours découverte"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur le soutien scolaire au collège."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Soutien Collège"
      enjeuxEyebrow="Les enjeux du collège"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux du collège",
        lead: "Les années de collège sont déterminantes pour la suite du parcours scolaire. Sans accompagnement adapté, les lacunes ou le manque de méthode peuvent fragiliser l'entrée au lycée. C'est à ce stade que se construisent durablement :",
        bullets: [
          "Les fondamentaux académiques (français, mathématiques, sciences)",
          "Les méthodes de travail (organisation, régularité, autonomie)",
          "La confiance en soi face aux apprentissages",
          "Les premières bases de la réflexion d'orientation",
          "La préparation progressive du Brevet",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/medal.png",
        ],
      }}

      sections={[
        {
          title: "Une approche globale pour un accompagnement académique structuré",
          paragraphs: [
            <span>Notre soutien scolaire au collège repose sur une <strong className="font-extrabold text-brand-darkblue">approche globale</strong>, qui va bien au-delà de l'aide aux devoirs.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un diagnostic initial approfondi</span>,
            <span>Chaque élève bénéficie d'une <strong className="font-extrabold text-brand-darkblue">évaluation complète</strong> de son niveau académique, de ses méthodes de travail et de ses besoins spécifiques, <strong className="font-extrabold text-brand-darkblue">en tenant compte du système scolaire suivi</strong> (français, marocain, bilingue ou international).</span>,
            <span>Ce diagnostic permet de définir des <strong className="font-extrabold text-brand-darkblue">priorités claires</strong> et un plan d'accompagnement cohérent, réaliste et adapté.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement académique structuré</span>,
            <span>Nous intervenons sur les matières clés du collège :</span>,
          ],
          bullets: [
            "français,",
            "mathématiques,",
            "sciences,",
            "histoire-géographie,",
          ],
          extraParagraphs: [
            <span>en <strong className="font-extrabold text-brand-darkblue">nous adaptant aux programmes, aux méthodes et aux exigences propres à chaque système scolaire</strong>. L'objectif est double : <strong className="font-extrabold text-brand-darkblue">améliorer les résultats</strong> et <strong className="font-extrabold text-brand-darkblue">installer des bases solides pour préparer l'entrée au lycée</strong>, quel que soit le parcours académique de l'élève.</span>,
          ],
        },
        {
          title: "Une méthodologie de soutien scolaire différenciée avec un suivi régulier et structurant",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Les atouts de notre méthodologie différenciée</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, le soutien scolaire au collège repose sur une <strong className="font-extrabold text-brand-darkblue">pédagogie différenciée</strong>, déployée en <strong className="font-extrabold text-brand-darkblue">petits groupes de 2 à 4 élèves maximum</strong>, avec des <strong className="font-extrabold text-brand-darkblue">niveaux hétérogènes maîtrisés</strong>.</span>,
            <span>Ce format permet :</span>,
          ],
          bullets: [
            "de renforcer l'autonomie de l'élève,",
            "de favoriser l'effet d'imitation positive,",
            "de stimuler une dynamique de travail structurante,",
            "tout en garantissant un suivi individualisé, adapté à l'avancement réel de chaque élève.",
          ],
          extraParagraphs: [
            <span>Nos enseignants ajustent en permanence leurs approches pédagogiques en fonction de l'avancement de l'élève en classe, et leurs contenus <strong className="font-extrabold text-brand-darkblue">en fonction du système scolaire suivi</strong>, tout en maintenant un <strong className="font-extrabold text-brand-darkblue">haut niveau d'exigence académique</strong> et une progression mesurable.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un suivi régulier et structurant</span>,
            <span>Le soutien scolaire STUDASSIST repose sur un <strong className="font-extrabold text-brand-darkblue">suivi continu et rigoureux</strong> :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>évaluation régulière des progrès,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>ajustement des objectifs et des méthodes,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>envois réguliers de rapports pédagogiques,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>échanges constants avec l'élève et sa famille.</span></li>
            </ul>,
            <span>Ce pilotage permet d'anticiper les difficultés, de maintenir la motivation et d'assurer une <strong className="font-extrabold text-brand-darkblue">cohérence durable entre le travail scolaire et le travail à la maison</strong>.</span>,
          ],
        },
        {
          title: "Un accompagnement qui prépare aussi le Brevet",
          paragraphs: [
            <span>Au collège, le soutien scolaire ne se limite pas à l'amélioration des résultats au quotidien. Il constitue également une <strong className="font-extrabold text-brand-darkblue">préparation progressive et stratégique au Diplôme National du Brevet</strong>, première échéance officielle du parcours scolaire.</span>,
            <>
              Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, le soutien scolaire s'inscrit naturellement dans une <strong className="font-extrabold text-brand-darkblue">logique de continuité avec notre{" "}<Link to="/soutien/brevet" className="text-brand-darkblue font-black underline underline-offset-2">préparation au Brevet</Link></strong>, afin d'assurer une parfaite cohérence entre le travail de fond et les exigences de l'examen.
            </>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Préparation au Diplôme National du Brevet</span>,
            <span>À partir de la <strong className="font-extrabold text-brand-darkblue">4ᵉ</strong>, et plus particulièrement en <strong className="font-extrabold text-brand-darkblue">3ᵉ</strong>, l'accompagnement peut être complété par une{" "}<Link to="/soutien/brevet" className="text-brand-darkblue font-black underline underline-offset-2">préparation spécifique au Brevet</Link>, incluant :</span>,
          ],
          bullets: [
            "la consolidation des fondamentaux dans les matières évaluées,",
            "le travail approfondi sur la méthodologie des épreuves écrites,",
            "l'entraînement à la gestion du temps et du stress,",
            "la préparation à l'oral du Brevet (présentation, argumentation, posture).",
          ],
          callout: "Le soutien scolaire permet d'installer la régularité et la méthode, tandis que la prépa Brevet vise la maîtrise des attendus officiels et la performance le jour de l'examen.",
        },
        {
          title: "À qui s'adresse le soutien scolaire au collège ?",
          paragraphs: [
            <span>Notre soutien scolaire s'adresse aux élèves :</span>,
          ],
          bullets: [
            "rencontrant des difficultés ponctuelles ou durables,",
            "manquant de méthode et d'organisation,",
            "ayant besoin de reprendre confiance,",
            "souhaitant consolider leurs bases en vue du lycée,",
            "ayant déjà un bon niveau scolaire et souhaitant viser l'excellence, approfondir leurs connaissances et structurer des méthodes de travail solides,",
            "scolarisés dans des systèmes français, marocains, bilingues ou internationaux,",
            "recherchant un accompagnement exigeant, structuré et adaptable, aligné avec leurs ambitions.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le soutien scolaire au collège ?",
        bullets: [
          "Une approche globale, au-delà du simple soutien aux devoirs",
          "Des groupes très restreints (2 à 4 élèves maximum)",
          "Des enseignants expérimentés, certifiés et multi-systèmes et issus de différents systèmes éducatifs",
          "Une méthodologie différenciée et structurée",
          "Un suivi rigoureux et transparent avec les familles",
          "Une vision long terme, orientée réussite du brevet",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/handshake.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

      ctaBanner={{
        title: "Un cadre maîtrisé, quelle que soit la voie scolaire suivie.",
        body: "Vous souhaitez mettre en place un soutien scolaire adapté, exigeant et compatible avec le système scolaire de votre enfant ?",
        primaryLabel: "Réserver un cours découverte",
        primaryHref: "/contact",
        secondaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        secondaryHref: "/contact",
      }}

      faqKeys={["soutien", "method"]}
      faqTitle="Soutien scolaire au collège : questions fréquentes"
      prev={{ label: "Primaire", to: "/soutien/primaire" }}
      next={{ label: "Prépa Brevet", to: "/soutien/brevet" }}
    />
  );
}
