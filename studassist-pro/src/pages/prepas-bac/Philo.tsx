import OrientationLevelPage from "../../components/OrientationLevelPage";
import { waLink } from "../../lib/utils";


const WHATSAPP_MSG_Philo ="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation au Bac de Philosophie."

const LEVELS = [
  { key: "francais", label: "Bac de Français", href: "/prepas-bac/francais" },
  { key: "specialites", label: "Bac de Spécialités", href: "/prepas-bac/specialites" },
  { key: "philo", label: "Bac de Philo", href: "/prepas-bac/philo" },
  { key: "grand-oral", label: "Grand Oral", href: "/prepas-bac/grand-oral" },
];

export default function PrepasBacPhilo() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Bac · Philo"
      accent="blue"
      title={<>Prépa Bac – <span className="text-brand-teal">Philosophie</span></>}
      subtitle="Structurer sa pensée, maîtriser la méthode et développer une argumentation solide"
      intro={[
        <>
          L'épreuve de <strong className="font-semibold text-brand-darkblue">philosophie du Baccalauréat</strong> constitue un moment clé de l'année de Terminale. Elle exige des compétences spécifiques : capacité d'analyse, rigueur du raisonnement et maîtrise de l'expression écrite.
        </>,
        <>
          Chez <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong>, nous proposons une préparation exigeante et structurée, permettant aux élèves de comprendre les attentes de l'épreuve, d'acquérir une méthodologie solide et de développer une réflexion claire et argumentée.
        </>,
      ]}
      heroImage="/prepas-bac-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver un cours découverte"
      whatsappMessage={WHATSAPP_MSG_Philo}
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Bac de Philo"
      enjeuxEyebrow="Les enjeux de l'épreuve de philosophie"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Un levier de réussite pour le bac et l'accès aux études supérieures",
        lead: "La philosophie est bien plus qu'une simple épreuve du Baccalauréat. Elle mobilise des compétences essentielles qui seront utiles tout au long des études supérieures et de la vie professionnelle.",
        bullets: [
          "Développer son esprit critique: La philosophie apprend à analyser, questionner et construire un raisonnement rigoureux face à des problématiques complexes.",
          "Optimiser sa performance au Baccalauréat: Grâce à son coefficient significatif, l'épreuve de philosophie peut avoir un impact important sur la note finale et l'obtention d'une mention.",
          "Maîtriser l'art de l'argumentation: La dissertation et l'explication de texte évaluent la capacité à structurer sa pensée, défendre un point de vue et construire une démonstration convaincante.",
          "Préparer les études supérieures: Les compétences développées en philosophie — analyse, réflexion, expression écrite et autonomie intellectuelle — sont particulièrement valorisées dans l'enseignement supérieur.",
        ],
        icons: [
          "https://img.icons8.com/?size=100&id=4prjBhjIN59x&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=OlDzEETWpjI7&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=sy9tMN9SEkLP&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=qZ3IKpKF9Cun&format=png&color=000000",
        ],
      }}

      sections={[
          {
            title: "Le Bac de philosophie, qu'est-ce que c'est ?",
            paragraphs: [
              <span className="block font-semibold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Comprendre les exigences de l'épreuve de philosophie</span>,
              <span>L'épreuve de philosophie repose sur deux types de sujets : la dissertation et l'explication de texte. Elle évalue la capacité de l'élève à problématiser une question, construire un raisonnement structuré et mobiliser des références pertinentes pour soutenir son argumentation.</span>,
              <span>Au-delà des connaissances, c'est la qualité de la réflexion et la rigueur de la démonstration qui sont valorisées.</span>,

              <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une épreuve à fort impact académique</span>,
              <span>Avec un coefficient significatif, la philosophie peut faire la différence dans l'obtention d'une mention. Elle constitue également un marqueur important dans le dossier académique, en particulier pour les formations valorisant les capacités d'analyse, de réflexion et d'expression.</span>,
              <span>Une copie claire, structurée et argumentée reflète un profil académique solide et mature.</span>,

              <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une épreuve pour se démarquer</span>,
              <span>La philosophie est souvent perçue comme une matière difficile. Bien préparée, elle devient au contraire une opportunité de se distinguer. Une copie structurée, claire et réfléchie peut faire la différence dans les résultats finaux et valoriser le profil de l'élève.</span>,
            ],
          },
          {
            title: "L'approche de STUDASSIST dans la préparation de l'épreuve de philosophie",
            paragraphs: [
              <span className="block font-semibold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Maîtriser les fondamentaux de la réflexion</span>,
              <span>Chez <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong>, la préparation repose sur l'acquisition des fondamentaux :</span>,
              <ul className="space-y-2 mt-2 ml-1">
                <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>comprendre les notions du programme (liberté, vérité, justice, bonheur, conscience…) ;</span></li>
                <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>apprendre à problématiser un sujet ;</span></li>
                <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>structurer une dissertation ;</span></li>
                <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>analyser un texte philosophique avec rigueur.</span></li>
              </ul>,
              <span>Nous accompagnons les élèves dans le développement de leur capacité à <strong className="font-semibold text-brand-darkblue">penser de manière autonome</strong>, à organiser leurs idées et à produire un raisonnement cohérent.</span>,

              <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une méthodologie claire et progressive</span>,
              <span>La réussite en philosophie repose avant tout sur la <strong className="font-semibold text-brand-darkblue">méthode</strong>. Nous proposons un accompagnement structuré, permettant aux élèves de :</span>,
              <ul className="space-y-2 mt-2 ml-1">
                <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>construire des plans clairs et efficaces ;</span></li>
                <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>éviter les hors-sujets ;</span></li>
                <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>maîtriser l'introduction et la conclusion ;</span></li>
                <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>développer une argumentation progressive et pertinente.</span></li>
              </ul>,
              <span>Des entraînements réguliers sur des sujets types et des <strong className="font-semibold text-brand-darkblue">bacs blancs</strong> permettent d'ancrer les bons réflexes et de gagner en confiance.</span>,

              <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Mobiliser les références avec pertinence</span>,
              <span>La philosophie ne consiste pas à réciter un cours, mais à mobiliser des références de manière intelligente. Nous aidons les élèves à comprendre les grandes pensées philosophiques (Descartes, Kant, Nietzsche, Rousseau…) et à les intégrer dans leurs raisonnements de manière <strong className="font-semibold text-brand-darkblue">pertinente et nuancée</strong>.</span>,
            ],
          },
          {
            title: "Une préparation adaptée pour chaque profil et encadrée par des enseignants experts",
            paragraphs: [
              <span className="block font-semibold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un encadrement exigeant et personnalisé</span>,
              <span>Les élèves sont accompagnés par des <strong className="font-semibold text-brand-darkblue">enseignants spécialisés</strong>, maîtrisant parfaitement les exigences du Bac de philosophie. Les séances sont proposées en petits groupes de 2 à 4 élèves maximum ou en format individuel, afin de garantir un suivi précis et adapté à chaque profil.</span>,

              <span className="block font-semibold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation alignée avec la réussite globale</span>,
              <span>Chez <strong className="font-semibold text-brand-darkblue">STUDASSIST</strong>, la préparation à la philosophie s'inscrit dans une logique globale. Elle permet de renforcer des compétences essentielles — <strong className="font-semibold text-brand-darkblue">analyse, argumentation, expression</strong> — qui seront déterminantes pour les études supérieures et les processus de sélection des établissements post-bac.</span>,
            ],
          },
          {
            title: "À qui s'adresse la préparation du Bac de philosophie ?",
            paragraphs: [
              "Cette préparation s'adresse aux élèves de Terminale souhaitant acquérir une méthodologie solide, renforcer leurs capacités de réflexion et aborder l'épreuve avec davantage de confiance.",
            ],
            bullets: [
              "Comprendre les notions et auteurs au programme",
              "Apprendre à problématiser un sujet et construire une dissertation",
              "Maîtriser la méthode de l'explication de texte",
              "Développer une argumentation claire, structurée et pertinente",
              "Gagner en confiance face à une matière souvent perçue comme complexe",
              "Viser une excellente note au Baccalauréat",
              "Renforcer leurs compétences d'analyse et d'expression pour les études supérieures",
            ],
          },
        ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le Bac de Philo ?",
        bullets: [
          "Des enseignants spécialisés maîtrisant les exigences de l'épreuve",
          "Une approche centrée sur la réflexion et la méthode : apprendre à raisonner, argumenter et structurer les pensées",
          "Un travail progressif sur les notions, les références, et la qualité de la rédaction",
          "Des entraînements réguliers et des bacs blancs avec corrections détaillées",
          "Un format flexible et personnalisé avec des groupes restreints (2 à 4 élèves) ou un suivi individuel en fonction du besoin",
          "Des compétences clés développées pour l'avenir académique : analyse, argumentation, autonomie intellectuelle et esprit critique",
        ],
        icons: [
          "https://img.icons8.com/?size=100&id=1WpD5bksxBe1&format=png&color=000000",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/?size=100&id=sy9tMN9SEkLP&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=xv9gnRfYNsNJ&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=UWNhN9bLYG1k&format=png&color=000000",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez être accompagné vers une réussite solide en philosophie ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: waLink(WHATSAPP_MSG_Philo),
      }}

      faqKeys={["prepas-bac"]}
      faqTitle="FAQ – Préparation au Baccalauréat"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux épreuves du Bac."
      prev={{ label: "Bac de Spécialités", to: "/prepas-bac/specialites" }}
      next={{ label: "Grand Oral", to: "/prepas-bac/grand-oral" }}
    />
  );
}
