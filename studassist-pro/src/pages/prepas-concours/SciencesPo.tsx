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

export default function PrepaSciences() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · Sciences-Po"
      accent="pink"
      title={<>Prépa Concours <span className="text-brand-teal">Sciences Po</span> (Réseau IEP)</>}
      subtitle="Réussir les épreuves et intégrer les Instituts d'Études Politiques"
      intro={[
        "Les Instituts d'Études Politiques (IEP), communément appelés Sciences Po, comptent parmi les formations les plus sélectives en sciences humaines et sociales. Le concours commun du réseau Sciences Po permet d'intégrer plusieurs IEP en France, reconnus pour la qualité de leur enseignement et leurs débouchés dans les domaines de la politique, de l'économie, du droit ou des relations internationales.",
        "Ces concours exigent une préparation rigoureuse, combinant maîtrise académique, culture générale et capacité d'analyse. Chez STUDASSIST, nous proposons une préparation au concours structurée et exigeante, permettant aux élèves de maximiser leurs chances d'admission. Cet accompagnement peut être complété par notre service d'orientation, afin de construire un dossier de candidature solide et cohérent.",
      ]}
      heroImage="/prepas-concours.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation au concours Sciences Po (réseau IEP)."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Sciences Po"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux du concours des IEP",
        lead: "Le concours Sciences Po (IEP) est conçu pour identifier des candidats capables de comprendre les grands enjeux contemporains, d'exercer leur esprit critique et de construire une réflexion argumentée. Sa réussite repose sur un équilibre entre culture générale, analyse, méthode et excellence rédactionnelle.",
        bullets: [
          "Capacité d'analyse et de réflexion : les épreuves évaluent l'aptitude à comprendre des problématiques complexes, développer une pensée structurée et construire une argumentation solide",
          "Culture générale et compréhension du monde contemporain : les candidats doivent démontrer leur connaissance des grands enjeux politiques, économiques, sociaux et internationaux",
          "Excellence rédactionnelle : la qualité de l'expression écrite, la clarté du raisonnement et la maîtrise de la dissertation sont déterminantes",
          "Sélectivité de l'admission : l'accès aux IEP est particulièrement compétitif et nécessite une préparation rigoureuse ainsi qu'une forte régularité dans le travail",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
        ],
      }}

      sections={[
        {
          title: "Comprendre les exigences du concours Sciences Po (IEP)",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Dissertation de questions contemporaines</span>,
            <span>Les candidats doivent traiter un sujet portant sur les grandes thématiques du programme (ex : le corps, l'alimentation, les frontières, l'environnement, le pouvoir…). Attendus :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>construire une <strong className="font-extrabold text-brand-darkblue">réflexion structurée</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>mobiliser des <strong className="font-extrabold text-brand-darkblue">références variées</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>développer une <strong className="font-extrabold text-brand-darkblue">argumentation claire et nuancée</strong>.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Épreuve d'histoire</span>,
            <span>Elle repose généralement sur un programme précis (ex : monde contemporain depuis 1945). Attendus :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>maîtrise des <strong className="font-extrabold text-brand-darkblue">repères chronologiques</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>compréhension des <strong className="font-extrabold text-brand-darkblue">grands enjeux géopolitiques</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>capacité d'<strong className="font-extrabold text-brand-darkblue">analyse historique</strong>.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Épreuve de langue (anglais le plus souvent)</span>,
            <span>Compréhension de texte, expression écrite, parfois traduction. Attendus : démontrer un niveau <strong className="font-extrabold text-brand-darkblue">solide, structuré et précis</strong>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une bibliographie essentielle à maîtriser</span>,
            <span>La réussite au concours repose en grande partie sur la capacité à <strong className="font-extrabold text-brand-darkblue">mobiliser des références pertinentes</strong>. Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous guidons les élèves dans la construction d'une <strong className="font-extrabold text-brand-darkblue">bibliographie stratégique</strong>, adaptée au niveau et aux objectifs. Elle inclut notamment :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des ouvrages de référence en sciences sociales ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des essais contemporains ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des lectures d'actualité (revues, presse internationale) ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des contenus sélectionnés pour enrichir la culture générale.</span></li>
            </ul>,
            <span>L'objectif n'est pas de lire beaucoup, mais de <strong className="font-extrabold text-brand-darkblue">lire intelligemment et d'exploiter efficacement ses connaissances</strong>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un enjeu stratégique pour l'orientation</span>,
            <span>Les IEP offrent de nombreuses opportunités de <strong className="font-extrabold text-brand-darkblue">mobilité internationale</strong> et ouvrent l'accès à des parcours académiques particulièrement diversifiés, dans les domaines des affaires publiques, des relations internationales, de l'économie, du droit et du journalisme. La sélectivité du concours impose une préparation exigeante et anticipée, que nous pouvons compléter par un <Link to="/orientation/terminale" className="text-brand-darkblue font-black underline underline-offset-2">accompagnement en orientation</Link>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Quel profil pour réussir ?</span>,
            <span>Les élèves admis présentent généralement :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>un <strong className="font-extrabold text-brand-darkblue">excellent niveau rédactionnel</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>une forte <strong className="font-extrabold text-brand-darkblue">capacité d'analyse</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>une bonne <strong className="font-extrabold text-brand-darkblue">culture générale</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>un intérêt marqué pour l'<strong className="font-extrabold text-brand-darkblue">actualité</strong>.</span></li>
            </ul>,
          ],
        },
        {
          title: "Une préparation progressive pour développer méthode, culture générale et esprit concours",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Quand commencer à se préparer ?</span>,
            <span>La préparation au concours Sciences Po doit être <strong className="font-extrabold text-brand-darkblue">anticipée</strong>. Idéalement dès la classe de <strong className="font-extrabold text-brand-darkblue">Première</strong>, pour développer la culture générale, puis en <strong className="font-extrabold text-brand-darkblue">Terminale</strong>, pour s'entraîner intensivement aux épreuves.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation structurée et adaptée</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous proposons une préparation exigeante et progressive. Les élèves sont accompagnés en <strong className="font-extrabold text-brand-darkblue">petits groupes de 4 maximum</strong>, permettant un suivi personnalisé et une progression rapide. Nous favorisons une <strong className="font-extrabold text-brand-darkblue">dynamique de groupe intellectuelle</strong>, basée sur le débat, l'échange et l'émulation. Notre accompagnement combine :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <strong className="font-extrabold text-brand-darkblue">séances hebdomadaires</strong>, pour développer les compétences analytiques et rédactionnelles sur le long terme ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <strong className="font-extrabold text-brand-darkblue">stages intensifs</strong>, pour s'entraîner en conditions réelles.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Le contenu de notre préparation repose sur :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des entraînements à la <strong className="font-extrabold text-brand-darkblue">dissertation</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>la méthodologie de structuration des idées ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>l'analyse de sujets d'actualité ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des entraînements réguliers et <strong className="font-extrabold text-brand-darkblue">concours blancs</strong>.</span></li>
            </ul>,
          ],
        },
        {
          title: "Un accompagnement expert pour réussir le concours et construire son dossier",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Développer un véritable esprit concours</span>,
            <span>Réussir Sciences Po nécessite de <strong className="font-extrabold text-brand-darkblue">se démarquer</strong>. Nous accompagnons les élèves dans le développement de leur <strong className="font-extrabold text-brand-darkblue">capacité à argumenter</strong>, dans la structuration de leur pensée, dans la <strong className="font-extrabold text-brand-darkblue">gestion du temps</strong> et dans la prise de position.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement qui se prolonge dans le temps</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous assurons un suivi dans la durée. Nous restons en contact avec nos élèves et restons disponibles jusqu'aux échéances. Notre <Link to="/orientation/terminale" className="text-brand-darkblue font-black underline underline-offset-2">accompagnement en orientation</Link> permet également de renforcer le dossier Parcoursup grâce à un travail approfondi sur le <strong className="font-extrabold text-brand-darkblue">projet de formation motivé</strong>, les activités et centres d'intérêt ainsi que la cohérence globale de la candidature. Ces éléments jouent un <strong className="font-extrabold text-brand-darkblue">rôle déterminant</strong> dans l'évaluation des candidats, au-delà des seules performances aux épreuves écrites.</span>,
          ],
        },
        {
          title: "À qui s'adresse la préparation du concours des IEP ?",
          paragraphs: [
            <span>Cette préparation s'adresse aux élèves de <strong className="font-extrabold text-brand-darkblue">Première et de Terminale</strong> souhaitant intégrer un Institut d'Études Politiques et développer les compétences académiques, méthodologiques et intellectuelles attendues lors du concours. Elle est particulièrement adaptée aux élèves qui souhaitent :</span>,
          ],
          bullets: [
            "Construire un projet d'études ambitieux dans les sciences politiques, les relations internationales, le droit, l'économie ou le journalisme ;",
            "Développer leur culture générale et leur compréhension du monde contemporain ;",
            "S'intéresser à l'actualité, aux enjeux de société et aux grandes questions contemporaines ;",
            "Renforcer leurs capacités d'analyse, de réflexion et d'argumentation ;",
            "Améliorer leur niveau rédactionnel et leur maîtrise de la dissertation ;",
            "Acquérir les méthodes spécifiques attendues aux épreuves du concours ;",
            "Structurer efficacement leur préparation sur le long terme ;",
            "Construire un dossier Parcoursup solide et cohérent ;",
            "Maximiser leurs chances d'intégrer l'un des IEP du réseau Sciences Po.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le concours des IEP ?",
        bullets: [
          "Une préparation intellectuelle exigeante avec le développement de méthodes, de capacités d'analyse, de réflexion et d'argumentation",
          "Une bibliographie stratégique pour une culture générale construite intelligemment",
          "Des petits groupes à effectif réduit (4 élèves max) avec un suivi personnalisé",
          "Une parfaite maîtrise des épreuves du concours IEP et de leurs spécificités grâce à des enseignants experts dans les matières littéraires",
          "Un accompagnement global — dossier de candidature cohérent & valorisant + concours",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez optimiser vos chances de réussite au concours Sciences Po ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Médecine Belgique", to: "/prepa-medecine-belgique" }}
      next={{ label: "Architecture ENA", to: "/prepa-architecture-ena" }}
    />
  );
}
