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

export default function PrepaMedecineMaroc() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Concours · Médecine-Maroc"
      accent="pink"
      title={<>Prépa <span className="text-brand-teal">Médecine Maroc</span> Systèmes Public & Privé</>}
      subtitle="Réussir les sélections et intégrer les études de médecine au Maroc"
      intro={[
        "Les études de médecine au Maroc, qu'elles soient dans le secteur public ou privé, figurent parmi les parcours les plus sélectifs et exigeants. Chaque année, un grand nombre d'élèves candidats se présentent, pour un nombre de places limité.",
        "L'accès à ces formations repose sur des critères de sélection rigoureux, nécessitant une préparation sérieuse, structurée et anticipée. Chez STUDASSIST, nous accompagnons les élèves dans la préparation aux différentes voies d'accès à la médecine au Maroc.",
      ]}
      heroImage="/prepas-concours.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Prendre un rendez-vous d'informations"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation aux études de médecine au Maroc."
      heroBadge="+7 ans d'expérience — 100 % d'admission dans le top 3 des écoles chaque année"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Médecine Maroc"
      enjeuxEyebrow="Les enjeux & exigences"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux de l'admission en médecine au Maroc",
        lead: "Les études de médecine figurent parmi les filières les plus sélectives au Maroc. L'admission repose à la fois sur la qualité du dossier académique et sur la réussite aux épreuves de sélection, exigeant des candidats un haut niveau scientifique, une préparation rigoureuse et une forte capacité de travail.",
        bullets: [
          "Excellence scientifique : les matières scientifiques constituent le socle de la sélection et nécessitent un haut niveau de maîtrise",
          "Performance académique : les résultats scolaires jouent un rôle déterminant dans les phases de présélection et l'évaluation du dossier",
          "Réussite au concours : les candidats doivent démontrer leur capacité à performer dans un environnement compétitif et sous contrainte de temps",
          "Sélectivité de l'admission : chaque année, un nombre important de candidats se présente pour un nombre limité de places",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/test-tube.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/rocket.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
        ],
      }}

      sections={[
        {
          title: "Comprendre le système de sélection des études de médecine au Maroc",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Médecine publique</span>,
            <span>L'accès aux facultés de médecine publiques repose sur une <strong className="font-extrabold text-brand-darkblue">sélection en deux étapes</strong> :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>une <strong className="font-extrabold text-brand-darkblue">présélection sur dossier</strong>, basée sur les résultats académiques (notamment les matières scientifiques) ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>un <strong className="font-extrabold text-brand-darkblue">concours écrit national</strong>, généralement sous forme de QCM.</span></li>
            </ul>,
            <span>Seuls les candidats retenus à l'issue de la présélection sont autorisés à passer le concours. Cette présélection repose sur un <strong className="font-extrabold text-brand-darkblue">seuil d'admissibilité</strong>, fixé chaque année en fonction du niveau des candidats et du nombre de places disponibles. La sélection finale repose sur la <strong className="font-extrabold text-brand-darkblue">performance au concours</strong>, dans un contexte de forte compétitivité.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Médecine privée</span>,
            <span>Les universités privées proposent des processus d'admission incluant généralement :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>étude du dossier académique ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>tests écrits (sciences, logique, parfois anglais) ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>entretien de motivation.</span></li>
            </ul>,
            <span>Un <strong className="font-extrabold text-brand-darkblue">niveau académique minimum est attendu</strong>, constituant un seuil implicite de sélection. Les établissements les plus sélectifs exigent des dossiers solides, notamment dans les matières scientifiques.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un enjeu déterminant pour le projet d'études</span>,
            <span>Intégrer une faculté de médecine au Maroc nécessite un <strong className="font-extrabold text-brand-darkblue">niveau d'excellence académique</strong> et une forte capacité de travail. La <strong className="font-extrabold text-brand-darkblue">double sélection</strong> (dossier et concours) impose aux élèves d'être performants sur la durée, tout en étant capables de se démarquer le jour de l'épreuve. Elle constitue également une occasion de confirmer la cohérence du projet grâce à un <Link to="/orientation/terminale" className="text-brand-darkblue font-black underline underline-offset-2">accompagnement en orientation scolaire</Link>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Quel profil pour réussir ?</span>,
            <span>Les élèves admis présentent généralement :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>un <strong className="font-extrabold text-brand-darkblue">excellent niveau</strong> dans les matières scientifiques : Mathématiques, SVT, Physique-Chimie ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>de la <strong className="font-extrabold text-brand-darkblue">rigueur et de la régularité</strong> dans le travail ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>une forte capacité de <strong className="font-extrabold text-brand-darkblue">concentration et d'endurance</strong> ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>une <strong className="font-extrabold text-brand-darkblue">motivation claire</strong> pour les études médicales.</span></li>
            </ul>,
          ],
        },
        {
          title: "Une préparation ciblée avec une méthodologie orientée performance",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Quand commencer à se préparer ?</span>,
            <span>La préparation à la médecine doit être <strong className="font-extrabold text-brand-darkblue">anticipée</strong>. Idéalement dès la classe de <strong className="font-extrabold text-brand-darkblue">Première</strong>, pour consolider les bases scientifiques, et en <strong className="font-extrabold text-brand-darkblue">Terminale</strong>, pour optimiser les résultats et préparer activement le concours. Commencer tôt permet d'aborder les échéances avec méthode et sérénité.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation structurée et adaptée</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, nous proposons une préparation complète, adaptée aux exigences du système marocain. Les élèves sont accompagnés en <strong className="font-extrabold text-brand-darkblue">petits groupes de 8 maximum</strong>, garantissant un encadrement de qualité, un suivi précis et une progression rapide. Nous veillons à créer une <strong className="font-extrabold text-brand-darkblue">dynamique de groupe fondée sur l'entraide, le sérieux et le dépassement collectif</strong>.</span>,
            <span>Notre accompagnement combine :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <strong className="font-extrabold text-brand-darkblue">séances hebdomadaires régulières</strong> sur la durée, pour consolider les fondamentaux scientifiques et améliorer les résultats scolaires ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <strong className="font-extrabold text-brand-darkblue">stages intensifs pendant les vacances scolaires</strong>, pour se préparer efficacement au concours et s'entraîner en conditions réelles.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une méthodologie orientée performance</span>,
            <span>Notre préparation repose sur une approche structurée :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>révision approfondie des notions clés : Mathématiques, SVT et Physique-Chimie ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>exercices d'application ciblés ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>entraînements réguliers ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span><strong className="font-extrabold text-brand-darkblue">simulations de concours en conditions réelles</strong>.</span></li>
            </ul>,
            <span>Cette méthode permet d'optimiser à la fois le <strong className="font-extrabold text-brand-darkblue">dossier académique</strong> et la <strong className="font-extrabold text-brand-darkblue">performance au concours</strong>.</span>,
          ],
        },
        {
          title: "Un accompagnement en continu par des enseignants experts des épreuves",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un accompagnement qui se prolonge dans le temps</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, la préparation ne s'arrête pas à la fin des sessions. Nous restons en contact avec nos élèves, leur fournissons des contenus complémentaires et restons disponibles jusqu'aux échéances. Les élèves peuvent également venir s'entraîner à tout moment dans notre espace.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un encadrement par des enseignants spécialisés</span>,
            <span>Les élèves sont accompagnés par des enseignants <strong className="font-extrabold text-brand-darkblue">spécialisés en matières scientifiques</strong>, maîtrisant parfaitement les exigences de l'examen d'entrée en médecine au Maroc.</span>,
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation des concours de médecine au Maroc",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Développer un véritable esprit concours</span>,
            <span>La réussite à la médecine repose autant sur les <strong className="font-extrabold text-brand-darkblue">résultats scolaires</strong> que sur la capacité à <strong className="font-extrabold text-brand-darkblue">performer le jour du concours</strong>. Nous accompagnons les élèves dans le développement de leur :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>gestion du temps ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>gestion du stress ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>stratégie de réponse aux questions et QCM ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>capacité à prioriser et optimiser leur score.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une dynamique de groupe stimulante</span>,
            <span>Les élèves sont accompagnés en <strong className="font-extrabold text-brand-darkblue">petits groupes de 8 maximum</strong>, afin de garantir un encadrement de qualité. Nous veillons à créer une <strong className="font-extrabold text-brand-darkblue">véritable dynamique de groupe</strong>, fondée sur l'entraide, l'échange et le dépassement collectif. Les élèves évoluent dans un environnement exigeant et bienveillant, où l'entraide et le challenge permettent à chacun de progresser durablement.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Préparer les entretiens de la médecine privée</span>,
            <span>Pour les écoles privées, nous accompagnons également les élèves dans la structuration de leur discours et la préparation aux entretiens de motivation au travers de <strong className="font-extrabold text-brand-darkblue">simulations filmées</strong>.</span>,
          ],
        },
        {
          title: "À qui s'adresse la préparation du concours de médecine au Maroc ?",
          paragraphs: [
            <span>Cette préparation s'adresse aux élèves souhaitant intégrer les études de médecine au Maroc, dans le <strong className="font-extrabold text-brand-darkblue">secteur public ou privé</strong>. Elle est particulièrement adaptée aux élèves qui souhaitent :</span>,
          ],
          bullets: [
            "Construire un projet d'études médicales solide et cohérent ;",
            "Confirmer leur intérêt pour les études de médecine et s'assurer que cette voie correspond réellement à leurs aspirations ;",
            "Poursuivre des études de médecine exigeantes et reconnues au Maroc, tout en conservant la proximité et le soutien de leur environnement familial ;",
            "Renforcer leurs résultats en Mathématiques, SVT et Physique-Chimie ;",
            "Optimiser leur dossier académique en vue des présélections ;",
            "Se préparer efficacement aux concours d'admission ;",
            "Développer leurs capacités de raisonnement et leur gestion du temps ;",
            "Préparer les entretiens de motivation des établissements privés ;",
            "Acquérir une méthode de travail rigoureuse et durable ;",
            "Maximiser leurs chances d'intégrer la faculté de médecine de leur choix.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation des concours de médecine au Maroc ?",
        bullets: [
          "Une parfaite maîtrise des épreuves scientifiques et de leurs spécificités grâce à des enseignants experts",
          "Une préparation orientée score avec des stratégies de performances éprouvées et un véritable esprit concours",
          "Des petits groupes à effectif réduit (10 élèves max) avec un suivi personnalisé",
          "Des concours blancs en conditions réelles pour développer les bons réflexes et automatismes",
          "Un accompagnement global — dossier + concours + entretiens",
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
        body: "Vous souhaitez optimiser vos chances d'admission en médecine au Maroc ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-concours"]}
      faqTitle="FAQ – Préparation aux concours"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux concours."
      prev={{ label: "Ingé UM6P", to: "/prepa-concours-um6p" }}
      next={{ label: "Médecine Belgique", to: "/prepa-medecine-belgique" }}
    />
  );
}
