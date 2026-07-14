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

export default function PrepaConcoursUm6p() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · UM6P"
      accent="pink"
      title={<>Prépa Admission <span className="text-brand-teal">Ingénieur UM6P</span></>}
      subtitle="Réussir les épreuves de sélection et intégrer une université d'excellence"
      intro={[
        "L'Université Mohammed VI Polytechnique (UM6P) propose des programmes d'ingénierie d'excellence, accessibles dès le post-bac à travers un processus de sélection exigeant. Contrairement aux concours classiques, l'admission repose sur une approche globale combinant dossier académique, épreuves écrites et entretien de personnalité.",
        "L'UM6P recherche des profils capables de raisonner, d'analyser et de s'adapter à des situations nouvelles, dans un environnement académique inspiré des standards internationaux. Chez STUDASSIST, nous proposons une préparation spécifique, adaptée à cette logique de sélection.",
      ]}
      heroImage="/prepas-concours.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation à l'admission en ingénierie à l'UM6P."
      heroBadge="+6 ans d'expérience — 100 % d'admission dans le top 3 des écoles chaque année"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Ingé UM6P"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les enjeux et exigences de la sélection UM6P",
        lead: "Le processus de sélection de l'UM6P repose généralement sur une étude du dossier académique, des épreuves écrites et un entretien de motivation. L'objectif de ces épreuves n'est pas uniquement de tester les connaissances, mais la capacité du candidat à réfléchir et à s'adapter. Elles évaluent principalement :",
        bullets: [
          "Dossier académique : Construire une candidature crédible — L'UM6P évalue la qualité du parcours scolaire, la régularité des résultats et la cohérence du projet.",
          "Épreuves écrites : Développer les bons réflexes — Les tests mesurent la logique, l'analyse, la résolution de problèmes, la rapidité de raisonnement et la capacité d'adaptation à une situation inédite.",
          "Entretien de motivation : Savoir convaincre — Présenter clairement son parcours, défendre la cohérence de son projet et démontrer sa motivation.",
          "Potentiel de réussite : Révéler son potentiel — L'UM6P recherche des profils curieux, autonomes et capables d'évoluer dans un environnement académique exigeant.",
        ],
        icons: [
          "https://img.icons8.com/?size=100&id=si97Y20Dacut&format=png&color=000000",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/?size=100&id=TDweCFuioxNi&format=png&color=000000",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
        ],
      }}

      sections={[
        {
          title: "Une sélection fondée sur le profil",
          paragraphs: [
            <span>L'UM6P accorde une <strong className="font-extrabold text-brand-darkblue">importance particulière à la qualité du profil</strong> du candidat. Les <strong className="font-extrabold text-brand-darkblue">résultats académiques</strong>, la <strong className="font-extrabold text-brand-darkblue">capacité de réflexion</strong>, la curiosité intellectuelle et la <strong className="font-extrabold text-brand-darkblue">cohérence du projet</strong> sont autant d'éléments déterminants que nous construisons dans le cadre de l'<Link to="/orientation/terminale" className="text-brand-darkblue font-black underline underline-offset-2">accompagnement en orientation</Link>.</span>,
            <span>Une préparation efficace permet de <strong className="font-extrabold text-brand-darkblue">structurer son profil</strong> et de se positionner de manière pertinente.</span>,
          ],
        },
        {
          title: "Une préparation ciblée et orientée performance dans un véritable esprit de sélection",
          paragraphs: [
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous proposons une <strong className="font-extrabold text-brand-darkblue">préparation spécifique à l'UM6P</strong>, adaptée à la nature des épreuves. Nos sessions permettent de travailler :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>le <strong className="font-extrabold text-brand-darkblue">raisonnement logique</strong> et les tests psychotechniques ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>la <strong className="font-extrabold text-brand-darkblue">résolution de problèmes</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>la <strong className="font-extrabold text-brand-darkblue">rapidité d'analyse</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>la <strong className="font-extrabold text-brand-darkblue">gestion du temps</strong>.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Notre approche repose sur :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des exercices ciblés inspirés des formats de sélection ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des entraînements progressifs ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des mises en situation en temps limité.</span></li>
            </ul>,
            <span>L'objectif est de développer des <strong className="font-extrabold text-brand-darkblue">réflexes de rapidité, de logique et d'efficacité</strong>. Pour leur permettre de se démarquer, nous accompagnons les élèves dans le développement de leur capacité à :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>raisonner rapidement ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>prioriser les questions ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>gérer le stress ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>optimiser leur performance.</span></li>
            </ul>,
          ],
        },
        {
          title: "Préparer l'entretien et valoriser son profil",
          paragraphs: [
            <span>L'<strong className="font-extrabold text-brand-darkblue">entretien</strong> constitue une <strong className="font-extrabold text-brand-darkblue">étape clé</strong> du processus de sélection. Nous accompagnons les élèves dans :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>la structuration de leur discours ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>la présentation de leur parcours ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>la mise en cohérence de leur projet.</span></li>
            </ul>,
            <span>Des <strong className="font-extrabold text-brand-darkblue">simulations</strong> permettent de gagner en assurance et en clarté.</span>,
          ],
        },
        {
          title: "À qui s'adresse la préparation du dossier UM6P ?",
          paragraphs: [
            <span>Cette préparation s'adresse aux élèves de <strong className="font-extrabold text-brand-darkblue">Terminale</strong> souhaitant intégrer les programmes d'ingénierie de l'<strong className="font-extrabold text-brand-darkblue">UM6P</strong> et optimiser leur candidature dans le cadre d'un processus de sélection exigeant et multidimensionnel.</span>,
            <span>Elle est particulièrement adaptée aux élèves qui souhaitent :</span>,
          ],
          bullets: [
            "Valoriser leur dossier académique et renforcer leur candidature ;",
            "Développer leurs capacités de raisonnement logique et d'analyse ;",
            "Se préparer aux épreuves de sélection et aux tests psychotechniques ;",
            "Structurer un projet académique cohérent et ambitieux ;",
            "Préparer efficacement leur entretien de motivation ;",
            "Gagner en confiance dans la présentation de leur parcours et de leurs objectifs ;",
            "Intégrer une université d'excellence inspirée des standards internationaux ;",
            "Maximiser leurs chances d'admission dans l'un des programmes les plus sélectifs du Maroc.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la sélection UM6P ?",
        bullets: [
          "Une approche adaptée à la logique de sélection de l'UM6P",
          "Une préparation spécifique aux tests de raisonnement",
          "Une logique globale pour construire un dossier solide - académique, méthodologique et humaine",
          "Des simulations d'entretien pour gagner en assurance",
          "Des experts de l'orientation et des admissions sélectives avec une parfaite maîtrise des stratégies de candidatures",
          "+7 ans d'expertise et des résultats reconnus - 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez optimiser vos chances d'intégrer l'UM6P ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Ingé Avenir – Geipi – Puissance Alpha", to: "/prepa-concours-avenir-geipi-puissance-alpha" }}
      next={{ label: "Médecine Maroc", to: "/prepa-medecine-maroc" }}
    />
  );
}
