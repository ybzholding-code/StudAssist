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

export default function PrepaMedecineBelgique() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · Médecine-Belgique"
      accent="pink"
      title={<>Prépa <span className="text-brand-teal">Médecine Belgique</span></>}
      subtitle="Intégrer la médecine en Belgique"
      intro={[
        "Les études de médecine en Belgique attirent chaque année de nombreux étudiants internationaux, en raison de la qualité de l'enseignement et de l'accès direct aux études médicales après le baccalauréat. Cependant, l'accès est strictement encadré et très sélectif, notamment pour les étudiants non-résidents.",
        "Chez STUDASSIST, nous proposons un accompagnement structuré et stratégique, permettant aux élèves de comprendre les exigences du système belge et de maximiser leurs chances d'admission.",
      ]}
      heroImage="/prepas-concours.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation aux études de médecine en Belgique."
      heroBadge="+7 ans d'expérience — 100 % d'admission dans le top 3 des écoles chaque année"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Médecine Belgique"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux et exigences du concours de médecine en Belgique",
        lead: "Réussir l'admission en médecine en Belgique ne dépend pas uniquement des résultats scolaires. Les candidats doivent démontrer de solides connaissances scientifiques, une capacité de raisonnement efficace et une aptitude à performer dans un environnement particulièrement sélectif.",
        bullets: [
          "Maîtrise des connaissances scientifiques : démontrer une solide compréhension de la biologie, de la chimie et de la physique",
          "Capacité de raisonnement : analyser rapidement des situations complexes et mobiliser ses connaissances de manière pertinente",
          "Gestion du temps : répondre efficacement à un volume important de questions dans un temps limité",
          "Sélectivité de l'admission : se démarquer dans un processus d'accès particulièrement compétitif pour les étudiants non-résidents",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
        ],
      }}

      sections={[
        {
          title: "Comprendre le système de sélection des études de médecine en Belgique",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un examen exigeant et structurant</span>,
            <span>L'examen d'entrée en médecine en Belgique évalue à la fois :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>les <strong className="font-extrabold text-brand-darkblue">connaissances scientifiques</strong> : biologie, chimie, physique… ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>les <strong className="font-extrabold text-brand-darkblue">capacités de raisonnement</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>la compréhension et l'analyse ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>les compétences en communication.</span></li>
            </ul>,
            <span>Il ne s'agit pas uniquement d'un test académique, mais d'une <strong className="font-extrabold text-brand-darkblue">évaluation globale du profil</strong> du candidat.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Le processus d'admission en Belgique</span>,
            <span>L'accès aux études de médecine en Belgique repose sur un <strong className="font-extrabold text-brand-darkblue">processus spécifique</strong>, différent des systèmes français ou marocain. Pour les étudiants non-résidents, l'admission est soumise à plusieurs étapes :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>dépôt de candidature ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>participation à un <strong className="font-extrabold text-brand-darkblue">tirage au sort</strong> (quota non-résidents défini à chaque année universitaire) ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>réussite d'un <strong className="font-extrabold text-brand-darkblue">examen d'entrée obligatoire</strong> qui constitue l'étape clé du processus.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Quel profil pour réussir ?</span>,
            <span>Les étudiants admis présentent généralement un <strong className="font-extrabold text-brand-darkblue">profil académique solide et régulier</strong>. La réussite à cet examen repose sur :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>un bon niveau en sciences : biologie, chimie, physique ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>une capacité de <strong className="font-extrabold text-brand-darkblue">raisonnement et d'analyse</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>de la <strong className="font-extrabold text-brand-darkblue">rigueur et de la régularité</strong> dans le travail ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>une <strong className="font-extrabold text-brand-darkblue">forte motivation</strong> pour les études médicales.</span></li>
            </ul>,
            <span>Au-delà des résultats scolaires, la capacité à <strong className="font-extrabold text-brand-darkblue">travailler efficacement sous pression</strong> et à structurer ses réponses est déterminante.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un enjeu déterminant pour le projet d'études</span>,
            <span>L'accès aux études de médecine en Belgique représente une <strong className="font-extrabold text-brand-darkblue">opportunité stratégique</strong> pour de nombreux élèves. La sélectivité du processus impose une préparation rigoureuse et anticipée. Cette démarche peut être complétée par un <Link to="/orientation/terminale" className="text-brand-darkblue font-black underline underline-offset-2">accompagnement en orientation scolaire</Link>.</span>,
            <span>Enfin, les études de médecine en Belgique impliquent plusieurs <Link to="/admin-logement/demarches" className="text-brand-darkblue font-black underline underline-offset-2">démarches administratives spécifiques</Link>, notamment la demande d'équivalence du baccalauréat et le respect d'un calendrier précis de candidature. Notre accompagnement permet d'anticiper ces étapes afin d'aborder sereinement l'ensemble du processus d'admission.</span>,
          ],
        },
        {
          title: "Une préparation ciblée avec une méthodologie orientée performance",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Quand commencer à se préparer ?</span>,
            <span>La préparation à la médecine en Belgique doit être <strong className="font-extrabold text-brand-darkblue">anticipée</strong>. Idéalement dès la classe de <strong className="font-extrabold text-brand-darkblue">Première</strong>, pour consolider les bases scientifiques, puis en <strong className="font-extrabold text-brand-darkblue">Terminale</strong>, pour intensifier les entraînements et se préparer sereinement à l'examen. Commencer tôt permet d'acquérir les bons automatismes et d'aborder l'examen avec confiance.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation structurée et adaptée</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous proposons une préparation qui s'inscrit dans la durée, à travers :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <strong className="font-extrabold text-brand-darkblue">séances hebdomadaires régulières</strong>, pour consolider progressivement les bases scientifiques ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <strong className="font-extrabold text-brand-darkblue">stages intensifs pendant les vacances scolaires</strong>, pour accélérer la progression et s'entraîner en conditions proches de l'examen.</span></li>
            </ul>,
            <span>Cette double approche permet d'allier <strong className="font-extrabold text-brand-darkblue">continuité, rigueur et montée en puissance</strong> à l'approche des épreuves.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une méthodologie orientée performance</span>,
            <span>Notre préparation repose sur une approche structurée :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>révision des fondamentaux scientifiques ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>exercices d'application ciblés ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>entraînements progressifs ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span><strong className="font-extrabold text-brand-darkblue">simulations en conditions réelles</strong>.</span></li>
            </ul>,
            <span>Cette méthode permet de développer <strong className="font-extrabold text-brand-darkblue">rigueur, rapidité et efficacité</strong>.</span>,
          ],
        },
        {
          title: "Un accompagnement en continu par des enseignants experts des épreuves",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un accompagnement qui se prolonge dans le temps</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, la préparation ne s'arrête pas à la fin des sessions. Nous restons en contact avec nos élèves, leur fournissons des contenus complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent également revenir s'entraîner à tout moment dans notre espace.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un encadrement par des enseignants spécialisés</span>,
            <span>Les élèves sont accompagnés par des enseignants <strong className="font-extrabold text-brand-darkblue">spécialisés en matières scientifiques</strong>, maîtrisant parfaitement les exigences de l'examen d'entrée en médecine en Belgique.</span>,
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation du concours de médecine en Belgique",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Développer un véritable esprit concours</span>,
            <span>La réussite à l'examen d'entrée repose autant sur les <strong className="font-extrabold text-brand-darkblue">connaissances</strong> que sur la capacité à <strong className="font-extrabold text-brand-darkblue">performer</strong>. Nous accompagnons les élèves dans le développement de leur :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>gestion du temps ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>gestion du stress ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>stratégie de réponse ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>capacité à prioriser.</span></li>
            </ul>,
            <span>L'objectif est de <strong className="font-extrabold text-brand-darkblue">maximiser les performances</strong> le jour de l'épreuve.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une dynamique de groupe stimulante</span>,
            <span>Les élèves sont accompagnés en <strong className="font-extrabold text-brand-darkblue">petits groupes de 8 maximum</strong>, afin de garantir un encadrement de qualité. Nous veillons à créer une <strong className="font-extrabold text-brand-darkblue">véritable dynamique de groupe</strong>, fondée sur l'entraide, l'échange et le dépassement collectif. Les élèves évoluent dans un environnement exigeant et bienveillant, où l'entraide et le challenge permettent à chacun de progresser durablement.</span>,
          ],
        },
        {
          title: "À qui s'adresse la préparation du concours de médecine en Belgique ?",
          paragraphs: [
            <span>Cette préparation s'adresse aux élèves de <strong className="font-extrabold text-brand-darkblue">Première et de Terminale</strong> souhaitant intégrer des études de médecine en Belgique et anticiper les différentes étapes du processus d'admission. Elle est particulièrement adaptée aux élèves qui souhaitent :</span>,
          ],
          bullets: [
            "Construire un projet d'études médicales solide et cohérent ;",
            "Confirmer leur intérêt pour les études de médecine et s'assurer que cette voie correspond réellement à leurs aspirations ;",
            "Renforcer leurs connaissances en biologie, chimie et physique ;",
            "Développer leurs capacités de raisonnement et d'analyse ;",
            "Acquérir les méthodes attendues à l'examen d'entrée ;",
            "Se préparer dans un cadre structuré et progressif ;",
            "Développer leur gestion du temps et leur capacité à performer sous pression ;",
            "Maximiser leurs chances de réussite à l'examen d'entrée ;",
            "Intégrer une faculté de médecine reconnue en Belgique.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation du concours de médecine en Belgique ?",
        bullets: [
          "Une parfaite maîtrise des épreuves du concours belge et de leurs spécificités grâce à des enseignants experts",
          "Une préparation orientée score avec des stratégies de performances éprouvées et un véritable esprit concours",
          "Des petits groupes à effectif réduit (8 élèves max) avec un suivi personnalisé",
          "Des concours blancs en conditions réelles pour développer les bons réflexes et automatismes",
          "Un accompagnement global — dossier + concours + démarches d'équivalence",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez optimiser vos chances de décrocher le concours de médecine en Belgique ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Médecine Maroc", to: "/prepa-medecine-maroc" }}
      next={{ label: "Sciences Po", to: "/prepa-sciences-po" }}
    />
  );
}
