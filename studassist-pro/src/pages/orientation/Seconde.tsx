import OrientationLevelPage from "../../components/OrientationLevelPage";
import { Link } from "react-router-dom";

export default function OrientationSeconde() {
  return (
    <OrientationLevelPage
      eyebrow="Lycée · Seconde"
      accent="gold"
      title={<>Orientation scolaire <span className="text-brand-teal">en Seconde</span></>}
      subtitle="Explorer, choisir ses spécialités et poser les bases d’un projet cohérent"
      intro={[
        "La classe de Seconde marque une étape déterminante : c’est l’année du choix des trois spécialités de Première, un choix structurant qui conditionne progressivement l’accès à certaines filières post-bac.",
        "Chez STUDASSIST, nous accompagnons les élèves de Seconde et leurs familles dans une démarche d’orientation anticipée, réfléchie et évolutive, afin de construire un projet cohérent tout en conservant la souplesse nécessaire à l’évolution naturelle de l’élève.",
      ]}
      heroImage="/orientation-seconde-premiere.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center"
      heroCtaLabel="Réserver un rendez-vous de 1er contact"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur l'accompagnement en orientation scolaire pour la classe de Seconde."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      enjeuxEyebrow="Les enjeux de l’orientation en seconde"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Pourquoi aborder l’orientation dès la Seconde ?",
        lead: "La Seconde constitue une étape clé dans la construction du projet d’avenir. Bien menée, la réflexion d’orientation permet à l’élève de mieux se connaître, de faire des choix éclairés et de donner progressivement du sens à son parcours scolaire.",
        bullets: [
          "Mieux se connaître pour mieux s’orienter : Identifier ses centres d’intérêt, ses motivations ainsi que ses points forts et axes de progression afin de construire un projet cohérent avec son profil.",
          "Préparer le choix stratégique des spécialités : Explorer les différentes filières d’études et secteurs professionnels pour sélectionner les spécialités les plus adaptées à ses ambitions.",
          "Construire progressivement son projet d’avenir : Découvrir les parcours possibles afin de poser les bases d’un projet pré-orienté, tout en conservant la flexibilité nécessaire pour faire évoluer ses choix.",
          "Donner du sens à ses études et gagner en motivation : Comprendre le lien entre les efforts fournis aujourd’hui et les opportunités de demain. Une prise de conscience qui favorise l’engagement scolaire.",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
          "https://img.icons8.com/3d-fluency/94/idea.png",
        ],
      }}

      sections={[
        {
          title: "Un diagnostic approfondi permettant de choisir les trois spécialités de manière stratégique dans une approche progressive et évolutive",
          paragraphs: [
            <strong className="block text-brand-darkblue font-extrabold text-sm mb-1 uppercase tracking-tight">Une approche progressive et évolutive</strong>,
            <span>En Seconde, l’objectif n’est pas de figer un <strong className="font-extrabold text-brand-darkblue">projet définitif</strong>.</span>,
            <span>Nous construisons avec l’élève un <strong className="font-extrabold text-brand-darkblue">pré-projet d’orientation</strong>, qui sert de boussole pour orienter les choix de spécialités, structurer le travail scolaire, développer certaines compétences clés, et anticiper les exigences futures.</span>,
            <span>Ce projet reste volontairement <strong className="font-extrabold text-brand-darkblue">ouvert et adaptable</strong>, afin de s’ajuster à la maturation, aux résultats et aux aspirations évolutives de l’élève.</span>,
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-4 mb-1 uppercase tracking-tight">Un diagnostic approfondi et un profiling global</strong>,
            <span>L’accompagnement débute par un <strong className="font-extrabold text-brand-darkblue">entretien familial initial</strong>, permettant d’aligner attentes parentales et aspirations de l’élève.</span>,
            <span>Nous réalisons ensuite des <strong className="font-extrabold text-brand-darkblue">entretiens individuels de profiling</strong> afin d’analyser le parcours scolaire, les matières de prédilection, les centres d’intérêt, la personnalité, ainsi que les capacités d’analyse et d’engagement de l’élève.</span>,
            <span>Ce travail permet de construire une <strong className="font-extrabold text-brand-darkblue">lecture globale du profil</strong>, indispensable pour guider les premiers choix structurants des <strong className="font-extrabold text-brand-darkblue">trois spécialités de première</strong>.</span>,
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-4 mb-1 uppercase tracking-tight">Un choix stratégique des trois spécialités</strong>,
            <span>Chez STUDASSIST, nous accompagnons cette réflexion en tenant compte :</span>,
          ],
          bullets: [
            "du pré-projet d’orientation envisagé,",
            "des exigences des filières post-bac potentielles,",
            "du niveau réel de l’élève dans chaque matière,",
            "de son potentiel de progression.",
          ],
          callout: "L’objectif est de faire un choix cohérent, ambitieux mais réalisiste, en gardant des options ouvertes pour la suite du parcours.",
        },
        {
          title: "Définir un cap et poser un plan d’action qui s’inscrit sur le long terme avec une ouverture progressive vers l’international",
          paragraphs: [
            <strong className="block text-brand-darkblue font-extrabold text-sm mb-1 uppercase tracking-tight">Poser un plan d’action et des objectifs structurés</strong>,
            <span>À partir du diagnostic et du choix des spécialités, nous aidons l’élève à :</span>,
            <ul className="list-disc pl-5 space-y-1 my-2 text-gray-500 text-sm">
              <li>clarifier ses premières intentions d’orientation,</li>
              <li>structurer ses priorités académiques,</li>
              <li>identifier les matières à consolider,</li>
              <li>développer des méthodes de travail solides.</li>
            </ul>,
            <span>Nous mettons en place un <strong className="font-extrabold text-brand-darkblue">plan d’action personnalisé</strong>, visant à :</span>,
            <ul className="list-disc pl-5 space-y-1 my-2 text-gray-500 text-sm">
              <li>renforcer les fondamentaux,</li>
              <li>améliorer l’organisation et l’autonomie,</li>
              <li>préparer progressivement les exigences de la Première.</li>
            </ul>,
            <span>
              L’objectif est d’aborder les années de spécialisation avec clarté et confiance. Lorsque nécessaire, nous intégrons du{" "}
              <Link to="/soutien-scolaire" className="text-brand-darkblue font-black underline underline-offset-2">
                soutien scolaire
              </Link>{" "}
              ciblé avec un travail approfondi sur la méthodologie et un renforcement des matières stratégiques en lien avec le projet envisagé. Cette approche permet d’aligner dès la Seconde le travail académique avec les ambitions futures.
            </span>,
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-4 mb-1 uppercase tracking-tight">Garder une ouverture sur l’international</strong>,
            <span>
              Pour les élèves envisageant des études à l’étranger, nous amorçons dès la Seconde une réflexion sur les parcours académiques adaptés, les exigences linguistiques futures ainsi que les choix stratégiques à effectuer dès le lycée. Cette anticipation permet de préparer un profil compétitif pour les meilleures universités internationales sur le long terme. Lorsque nécessaire, nous intégrons dans le programme une préparation aux{" "}
              <Link to="/certifications" className="text-brand-darkblue font-black underline underline-offset-2">
                certifications de langues
              </Link>{" "}
              pour anticiper au mieux les exigences du projet d’orientation de l’élève.
            </span>,
          ],
        },
        {
          title: "Un tiers de confiance entre l’élève et sa famille - Un accompagnement continu et transparent pensé aussi pour les parents",
          paragraphs: [
            <strong className="block text-brand-darkblue font-extrabold text-sm mb-1 uppercase tracking-tight">Nous nous positionnons comme un intermédiaire entre l’élève et ses parents</strong>,
            <span>Le choix des spécialités peut être source d’interrogations et parfois de divergences. STUDASSIST agit comme un <strong className="font-extrabold text-brand-darkblue">tiers de confiance</strong>, facilitant un dialogue serein et structuré entre l’élève et ses parents. Nous apportons une analyse objective et argumentée pour permettre une <strong className="font-extrabold text-brand-darkblue">décision partagée et éclairée</strong>.</span>,
            <span>Les réformes du lycée et la diversité des parcours rendent les choix plus complexes. Nous accompagnons également les parents en leur apportant une compréhension claire des <strong className="font-extrabold text-brand-darkblue">implications des spécialités</strong>, une vision long terme des parcours possibles, et un cadre structuré pour accompagner leur enfant sans pression excessive.</span>,
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-4 mb-1 uppercase tracking-tight">Une communication en continu, centralisée et transparente</strong>,
            <span>Tout au long du parcours, nous restons en contact avec l’élève et sa famille. Les échanges et documents sont centralisés dans un <strong className="font-extrabold text-brand-darkblue">espace dédié</strong>, garantissant <strong className="font-extrabold text-brand-darkblue">transparence et continuité</strong>.</span>,
          ],
        },
        {
          title: "À qui s’adresse l’orientation en Seconde ?",
          paragraphs: [
            <strong className="block text-brand-darkblue font-extrabold text-sm mb-1 uppercase tracking-tight">Aux élèves de Seconde qui :</strong>,
            <ul className="list-disc pl-5 space-y-1 my-2 text-gray-500 text-sm">
              <li>souhaitent choisir leurs spécialités de manière réfléchie,</li>
              <li>veulent explorer différents domaines d’études,</li>
              <li>désirent construire un projet progressif et évolutif,</li>
              <li>recherchent un accompagnement structuré et personnalisé.</li>
            </ul>,
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-4 mb-1 uppercase tracking-tight">Aux parents qui :</strong>,
            <ul className="list-disc pl-5 space-y-1 my-2 text-gray-500 text-sm">
              <li>souhaitent être informés et rassurés face aux choix de spécialités,</li>
              <li>veulent comprendre l’impact de ces décisions sur le post-bac,</li>
              <li>recherchent un cadre structuré pour accompagner leur enfant.</li>
            </ul>,
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST dès la Seconde ?",
        bullets: [
          "Une orientation anticipée et stratégique dès la Seconde dans une logique humaine, structurée et rassurante",
          "Un profiling complet de l’élève pour des choix de spécialités éclairés",
          "Une short-list d’écoles construite dès la Seconde avec une vision stratégique et ouverte sur l’international",
          "Un plan d’action académique personnalisé et évolutif dans un esprit d’anticipation des exigences de Première et de Terminale",
          "Une intégration possible d’un programme de renforcement scolaire, de préparation de concours et des certifications de langues",
          "Un accompagnement humain, bienveillant, rigoureux et transparent",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/school.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/medal.png",
          "https://img.icons8.com/3d-fluency/94/handshake.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez accompagner votre enfant dans le choix stratégique de ses spécialités et poser les bases d’un projet d’avenir cohérent ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Contacter un conseiller",
        secondaryHref: "/contact",
      }}

      next={{ label: "Orientation en Première", to: "/orientation/premiere" }}
    />
  );
}
