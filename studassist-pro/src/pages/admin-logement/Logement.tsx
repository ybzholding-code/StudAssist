import { Link } from "react-router-dom";
import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "demarches", label: "Démarches administratives", href: "/admin-logement/demarches" },
  { key: "logement", label: "Logement étudiant", href: "/admin-logement/logement" },
];

export default function AdminLogementPage() {
  return (
    <OrientationLevelPage
      eyebrow="ADMINISTRATIF & LOGEMENT"
      accent="blue"
      title={<>Accompagnement à la recherche de{" "}<span className="text-brand-teal">Logement étudiant</span> à l'international</>}
      subtitle="Trouver un logement adapté pour bien démarrer son parcours"
      intro={[
        "La recherche de logement constitue une étape clé dans un projet d'études, notamment à l'étranger. Elle implique de nombreux critères — budget, localisation, type de logement — et peut rapidement devenir complexe pour les élèves et leurs familles.",
        "Chez STUDASSIST, nous proposons un accompagnement structuré permettant de trouver un logement adapté, sécurisé et en cohérence avec le projet de l'élève. Cet accompagnement s'inscrit dans la continuité du projet d'études construit avec l'élève, depuis l'orientation et l'admission jusqu'à son installation dans le pays de destination.",
      ]}
      heroImage="/hero-admin-logement.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver un rendez-vous pour définir mon besoin"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Accompagnement à la recherche de logement étudiant"
      enjeuxEyebrow="Les enjeux"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Le logement étudiant : une étape clé de l'installation à l'international",
        lead: "Le choix du logement influence directement la qualité de vie, l'intégration et les conditions de réussite de l'étudiant tout au long de son parcours académique. La recherche de logement à l'étranger peut toutefois s'avérer complexe et chronophage. Entre la sélection des biens, la constitution du dossier locataire, les échanges à distance avec les propriétaires et les spécificités du marché local, un accompagnement méthodique permet de sécuriser chaque étape, d'éviter les mauvaises surprises et d'aborder son installation en toute sérénité.",
        bullets: [
          "Définir une stratégie efficace : Identifier les critères essentiels pour cibler rapidement les logements adaptés au budget ainsi qu'au projet d'études.",
          "Constituer un dossier convaincant : Préparer un dossier complet, solide et réactif pour maximiser les chances d'obtenir le logement souhaité.",
          "Rechercher en toute sécurité : Éviter les arnaques et sécuriser chaque étape de la recherche grâce à un accompagnement fiable.",
          "Bien démarrer sa vie étudiante : Choisir un logement propice à l'autonomie de l'étudiant, son bien-être et sa réussite académique.",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/marker.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
          "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
        ],
      }}

      sections={[
        {
          title: "Bien définir ses besoins et construire un dossier locataire solide qui puisse mettre en confiance le bailleur",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un accompagnement dès la définition du besoin</span>,
            <span>Chaque recherche débute par un <strong className="font-extrabold text-brand-darkblue">rendez-vous préalable</strong>, au cours duquel nous définissons précisément les critères du logement. Nous prenons en compte le <strong className="font-extrabold text-brand-darkblue">budget, la localisation, le type de logement</strong> (studio, appartement, résidence étudiante) ainsi que les préférences de l'élève et de sa famille. Cette étape permet de cadrer la recherche et de garantir sa pertinence.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Constitution d'un dossier locataire solide</span>,
            <span>Une fois le cadrage effectué, nous accompagnons l'élève et sa famille dans la constitution d'un <strong className="font-extrabold text-brand-darkblue">dossier locataire complet et structuré</strong>. Cela inclut la préparation des documents, des justificatifs de moyens, des garanties et de l'ensemble des éléments nécessaires pour rassurer les propriétaires. Un dossier solide permet de <strong className="font-extrabold text-brand-darkblue">mettre en confiance les bailleurs</strong> et d'augmenter significativement les chances que la candidature de l'élève soit retenue.</span>,
            <span>Cette étape est particulièrement importante pour les <strong className="font-extrabold text-brand-darkblue">étudiants internationaux</strong>, qui doivent souvent apporter davantage de garanties afin de rassurer les bailleurs. Nous accompagnons les familles dans la présentation des <strong className="font-extrabold text-brand-darkblue">justificatifs financiers, des garants</strong> et de l'ensemble des éléments permettant de renforcer la crédibilité du dossier locataire.</span>,
          ],
        },
        {
          title: "Une recherche ciblée pour un accompagnement efficace dans le choix final du logement",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Une recherche ciblée et encadrée</span>,
            <span>Une fois les critères validés, notre équipe se charge de la recherche de manière active. Nous mobilisons notre <strong className="font-extrabold text-brand-darkblue">réseau d'agences partenaires</strong> et des recherches directes, afin d'identifier des opportunités correspondant aux attentes définies. L'objectif est de proposer des biens <strong className="font-extrabold text-brand-darkblue">adaptés, fiables et disponibles</strong> dans les délais.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Organisation des visites et sélection du logement</span>,
            <span>Selon la situation de l'élève, nous adaptons notre accompagnement :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>lorsque l'élève est déjà sur place, nous organisons des <strong className="font-extrabold text-brand-darkblue">visites physiques</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>dans le cas contraire, nous transmettons des <strong className="font-extrabold text-brand-darkblue">photos et vidéos détaillées</strong>, permettant de faciliter la prise de décision à distance.</span></li>
            </ul>,
            <span>Nous accompagnons les familles dans l'analyse des biens proposés afin de <strong className="font-extrabold text-brand-darkblue">sécuriser leur choix</strong>.</span>,
          ],
        },
        {
          title: "Un accompagnement jusqu'à l'installation de l'étudiant",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un accompagnement jusqu'à la signature</span>,
            <span>Notre intervention se poursuit jusqu'à la finalisation du projet. Nous accompagnons l'élève et sa famille dans les différentes étapes, jusqu'à la <strong className="font-extrabold text-brand-darkblue">signature du contrat de bail</strong>, en veillant à la compréhension des engagements et des conditions.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un facteur clé de réussite</span>,
            <span>Un <strong className="font-extrabold text-brand-darkblue">logement adapté</strong> permet à l'élève de démarrer son parcours dans de bonnes conditions. Il contribue à son <strong className="font-extrabold text-brand-darkblue">intégration, à sa sérénité</strong> et à sa capacité à se concentrer pleinement sur ses études.</span>,
          ],
        },
        {
          title: "À qui s'adresse notre accompagnement à la recherche de logement étudiant ?",
          paragraphs: [
            <span>Cet accompagnement s'adresse aux <strong className="font-extrabold text-brand-darkblue">élèves, étudiants et familles</strong> souhaitant sécuriser la recherche d'un logement dans le cadre d'un projet d'études à l'étranger. Il est particulièrement adapté :</span>,
          ],
          bullets: [
            "Aux étudiants admis dans une université ou une grande école à l'international ;",
            "Aux familles ne disposant pas de réseau ou de relais sur place ;",
            "Aux étudiants recherchant un logement adapté à leur budget et à leur mode de vie ;",
            "Aux candidats souhaitant éviter les erreurs, les mauvaises surprises ou les arnaques ;",
            "Aux familles recherchant un accompagnement structuré jusqu'à la signature du bail ;",
            "Aux étudiants souhaitant s'installer dans les meilleures conditions avant leur rentrée universitaire.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST dans la recherche de logement étudiant ?",
        bullets: [
          "Une expertise de plusieurs destinations étudiantes depuis plus de 7 ans",
          "Un réseau de partenaires et de solutions fiables dans les principales destinations",
          "Un accompagnement personnalisé adapté aux contraintes de chaque projet",
          "La constitution d'un dossier locataire solide et convaincant",
          "Un accompagnement de A à Z jusqu'à la signature du bail",
          "Un levier de réussite pour les études à travers une installation réussie",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/key.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez être accompagné dans votre recherche de logement étudiant ?",
        primaryLabel: "Réserver un rendez-vous pour définir mon besoin",
        primaryHref: "/contact",
        secondaryLabel: "Nous écrire",
        secondaryHref: "/contact",
      }}

      faqKeys={["admin-logement"]}
      faqTitle="FAQ – Démarches administratives et logement étudiant à l'étranger"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur les démarches administratives et le logement étudiant."
      prev={{ label: "Démarches administratives", to: "/admin-logement/demarches" }}
    />
  );
}
