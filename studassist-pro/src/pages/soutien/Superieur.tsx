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

export default function SoutienSuperieur() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Supérieur"
      accent="pink"
      title={<>Soutien scolaire dans le <span className="text-brand-teal">supérieur</span></>}
      subtitle="Réussir sa première année post-bac avec méthode, accompagnement et exigence"
      intro={[
        "La première année d'études supérieures constitue souvent un tournant décisif. Nouveaux rythmes, programmes plus complexes, autonomie accrue, méthodes de travail différentes : beaucoup d'étudiants se retrouvent déstabilisés, même lorsqu'ils avaient un bon niveau au lycée.",
        "Chez STUDASSIST, nous proposons un soutien scolaire individuel en visioconférence, spécifiquement conçu pour accompagner les étudiants de première année post-bac confrontés à ces nouvelles exigences.",
      ]}
      heroImage="/soutien-superieur-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 65%"
      heroCtaLabel="Réserver un cours découverte"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur le soutien scolaire dans le supérieur."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Soutien Supérieur"
      enjeuxEyebrow="Les enjeux du supérieur"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux de la 1ère année post-bac",
        lead: "La réussite dans le supérieur ne dépend pas uniquement des connaissances, mais aussi de la capacité à :",
        bullets: [
          "S'adapter à des méthodes de travail universitaires",
          "Gérer un volume important de contenu",
          "Comprendre des notions plus abstraites ou techniques",
          "Organiser son temps et ses priorités",
          "Maintenir motivation et régularité",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      sections={[
        {
          title: "Une approche personnalisée et ciblée pour un accompagnement individualisé",
          paragraphs: [
            <span>Notre soutien scolaire post-bac repose sur une <strong className="font-extrabold text-brand-darkblue">approche personnalisée et ciblée</strong>, pensée pour répondre aux besoins spécifiques de chaque étudiant.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement 100 % individuel, en visioconférence</span>,
            <span>Toutes nos séances sont proposées en <strong className="font-extrabold text-brand-darkblue">format individuel</strong>, à distance, permettant :</span>,
            <span>• Une flexibilité totale d'organisation</span>,
            <span>• Un suivi personnalisé</span>,
            <span>• Un travail en profondeur sur les difficultés propres à chaque étudiant</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un professeur adapté à chaque profil</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous sélectionnons le professeur <strong className="font-extrabold text-brand-darkblue">en fonction du parcours, de la filière et des besoins précis de l'étudiant</strong>.</span>,
            <span>L'objectif est de créer un binôme pédagogique efficace afin de :</span>,
            <span>• Combler les lacunes identifiées</span>,
            <span>• Clarifier les notions complexes</span>,
            <span>• Structurer les méthodes de travail</span>,
            <span>• Accompagner l'étudiant vers une <strong className="font-extrabold text-brand-darkblue">autonomie durable</strong></span>,
          ],
        },
        {
          title: "Une méthodologie centrée sur la compréhension et le coaching pour la réussite de l'année",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Une approche centrée sur la compréhension et la méthode</span>,
            <span>Au-delà du contenu académique, notre accompagnement vise à transmettre :</span>,
            <span>• Des <strong className="font-extrabold text-brand-darkblue">méthodes de travail adaptées au supérieur</strong></span>,
            <span>• Une meilleure organisation personnelle</span>,
            <span>• Des techniques de révision efficaces</span>,
            <span>• Une lecture stratégique des cours et des attentes des enseignants</span>,
            <span>Cette approche permet à l'étudiant de <strong className="font-extrabold text-brand-darkblue">reprendre le contrôle de ses études</strong> et de progresser durablement.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un soutien pensé pour la réussite de l'année</span>,
            <span>Chaque accompagnement débute par un <strong className="font-extrabold text-brand-darkblue">diagnostic rapide</strong> afin d'identifier :</span>,
            <span>• Les matières problématiques</span>,
            <span>• Les lacunes de compréhension</span>,
            <span>• Les difficultés méthodologiques</span>,
            <span>Un plan de travail personnalisé est ensuite mis en place, avec des objectifs clairs et évolutifs.</span>,
          ],
        },
        {
          title: "Une vision globale du parcours académique",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un accompagnement qui inclut orientation et réorientation</span>,
            <span>La première année d'études supérieures est aussi, pour beaucoup d'étudiants, un temps de questionnement. Certains découvrent que la filière choisie ne correspond pas pleinement à leurs attentes, à leurs capacités ou à leur projet professionnel.</span>,
            <>
              Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, le soutien scolaire post-bac peut être complété par un accompagnement en{" "}
              <Link to="/orientation" className="text-brand-darkblue font-black underline underline-offset-2">orientation</Link> ou{" "}
              <Link to="/orientation/reorientation" className="text-brand-darkblue font-black underline underline-offset-2">réorientation</Link>, afin d'aider l'étudiant à :
            </>,
            <span>• Prendre du recul sur son parcours</span>,
            <span>• Clarifier ses aspirations</span>,
            <span>• Identifier des alternatives réalistes et cohérentes</span>,
            <span>• Construire un nouveau projet académique, au Maroc ou à l'international</span>,
            <span>Cette approche permet de transformer une difficulté académique en <strong className="font-extrabold text-brand-darkblue">opportunité de repositionnement</strong>, dans une logique structurée et rassurante.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement qui prépare également les prochaines étapes du parcours académique</span>,
            <span>Pour certains étudiants, la première année post-bac ne constitue pas seulement un défi académique. Elle marque également le début d'une réflexion sur la suite de leur parcours : spécialisation, poursuite d'études, mobilité internationale ou admission en Master.</span>,
            <span>Chez STUDASSIST, notre accompagnement peut évoluer au fil des besoins de l'étudiant afin de l'aider à préparer sereinement les prochaines étapes de son projet académique.</span>,
            <span>Selon les objectifs envisagés, nous pouvons notamment accompagner les étudiants dans :</span>,
            <span>• La réflexion sur leur orientation et leur projet professionnel</span>,
            <>• La préparation d'une <Link to="/orientation/master" className="text-brand-darkblue font-black underline underline-offset-2">candidature en Master ou en MSc</Link></>,
            <span>• La construction d'un dossier académique solide</span>,
            <>• La préparation aux <Link to="/certifications/ielts-toeic-toefl" className="text-brand-darkblue font-black underline underline-offset-2">certifications de langues</Link> telles que l'IELTS, le TOEFL ou le TOEIC</>,
            <>• La préparation aux tests d'admission comme <Link to="/prepas-concours/sat-gmat" className="text-brand-darkblue font-black underline underline-offset-2">le GMAT ou le TAGE MAGE</Link></>,
            <span>• Les projets d'études à l'international</span>,
            <span>Cette continuité d'accompagnement permet aux étudiants de développer simultanément leurs performances académiques et leur stratégie d'évolution à moyen terme.</span>,
          ],
        },
        {
          title: "À qui s'adresse le soutien scolaire dans le supérieur ?",
          paragraphs: [
            <span>Ce service s'adresse aux étudiants de première année post-bac :</span>,
            <span>• Rencontrant des difficultés dans certaines matières</span>,
            <span>• Ayant du mal à s'adapter aux méthodes du supérieur</span>,
            <span>• Souhaitant reprendre confiance</span>,
            <span>• Désirant sécuriser la validation de leur année</span>,
            <span>• Envisageant une orientation ou une réorientation</span>,
            <span>• Recherchant un accompagnement individualisé, flexible et exigeant</span>,
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le soutien scolaire post-bac ?",
        bullets: [
          "Un accompagnement 100 % individuel qui se veut humain, structuré et orienté résultats",
          "Des séances en visioconférence, accessibles partout",
          "Un professeur spécialisé sélectionné selon le profil de l'étudiant",
          "Une approche centrée sur la compréhension et la méthode",
          "Une prise en compte possible de l'orientation ou réorientation",
          "Une vision globale du parcours académique pour l'accès au master",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/student-male.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez mettre en place un soutien scolaire personnalisé pour réussir votre première année post-bac ou repenser votre orientation ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Nous contacter",
        secondaryHref: "/contact",
      }}

      faqKeys={["superieur"]}
      faqTitle="Soutien scolaire dans le supérieur : questions fréquentes"
      faqSubtitle="Les réponses aux questions que les étudiants et familles nous posent le plus souvent sur l'accompagnement dans le supérieur."
      prev={{ label: "Lycée", to: "/soutien/lycee" }}
      next={{ label: "Stages de vacances", to: "/soutien/stages" }}
    />
  );
}
