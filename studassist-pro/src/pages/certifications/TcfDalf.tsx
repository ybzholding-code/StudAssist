import { Link } from "react-router-dom";
import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "ielts", label: "IELTS & TOEFL", href: "/certifications/ielts-toefl" },
  { key: "tcf", label: "TCF & DALF", href: "/certifications/tcf-dalf" },
  { key: "dele", label: "DELE", href: "/certifications/dele" },
];

export default function CertificationsTcfDalf() {
  return (
    <OrientationLevelPage
      eyebrow="Certifications de langues · TCF-DALF"
      accent="gold"
      title={<>Prépa <span className="text-brand-teal">TCF & DALF</span></>}
      subtitle="Attester de son niveau de français pour étudier ou s'installer en France"
      intro={[
        "Les certifications TCF et DALF sont des références incontournables pour toute démarche académique ou administrative en France. Elles permettent d'attester officiellement d'un niveau de français et sont exigées dans de nombreux contextes : candidatures universitaires, procédures Campus France, ou projets d'expatriation.",
        "Ces examens sont généralement requis pour tout élève issu d'un système non francophone, notamment les élèves ne provenant pas du système français ou belge, souhaitant poursuivre leurs études en France. Chez STUDASSIST, nous accompagnons les élèves et étudiants dans une préparation ciblée et structurée, avec un objectif clair : atteindre le niveau requis en fonction de leur projet.",
      ]}
      heroImage="/hero-certif-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Programmer mon test initial de niveau"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="TCF & DALF"
      enjeuxEyebrow="Les enjeux & attendus"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Comprendre les attendus des tests de certifications de français",
        lead: "Les certifications TCF et DALF mesurent la capacité à comprendre et utiliser le français dans des situations académiques et professionnelles. Elles évaluent quatre compétences fondamentales. Selon la certification préparée et le niveau visé, le contenu et le niveau d'exigence des épreuves peuvent varier. Notre accompagnement permet de développer chacune de ces compétences tout en maîtrisant les attentes spécifiques des examinateurs.",
        bullets: [
          "Compréhension écrite — Lire et analyser différents types de documents en français.",
          "Compréhension orale — Comprendre des échanges, débats, conférences et situations de communication variées.",
          "Expression écrite — Produire des textes clairs, structurés et adaptés au contexte demandé.",
          "Expression orale — Communiquer avec aisance, argumenter et défendre un point de vue en français.",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=1BB79D",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
        ],
      }}

      sections={[
        {
          title: "Pourquoi passer une certification de français et quel score viser ?",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Comprendre les différences entre TCF et DALF</span>,
            <span>Le <strong className="font-extrabold text-brand-darkblue">TCF</strong> (Test de Connaissance du Français) est un test standardisé, souvent requis dans le cadre des démarches <strong className="font-extrabold text-brand-darkblue">Campus France</strong>. Il permet d'obtenir un score correspondant à un niveau (B1, B2, C1…). Le <strong className="font-extrabold text-brand-darkblue">DALF</strong> (Diplôme Approfondi de Langue Française) est un diplôme officiel, généralement exigé pour des projets académiques ou professionnels plus avancés, notamment aux niveaux <strong className="font-extrabold text-brand-darkblue">C1 et C2</strong>. Le choix entre ces deux certifications dépend directement du projet de l'élève, de ses délais et des exigences des établissements visés.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un enjeu clé pour les candidatures en France</span>,
            <span>Le niveau de français constitue un élément <strong className="font-extrabold text-brand-darkblue">déterminant</strong> dans un dossier. Il conditionne l'accès aux formations, la crédibilité du projet et la capacité à suivre des cours dans un environnement académique exigeant. Un niveau <strong className="font-extrabold text-brand-darkblue">B2</strong> est souvent requis pour les études supérieures, tandis que les formations les plus sélectives peuvent exiger un niveau <strong className="font-extrabold text-brand-darkblue">C1</strong>.</span>,
          ],
        },
        {
          title: "Une préparation stratégique et personnalisée avec une méthodologie orientée performance",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Une préparation structurée et personnalisée</span>,
            <span>La préparation débute par un <strong className="font-extrabold text-brand-darkblue">test de niveau</strong>, permettant d'évaluer précisément les compétences de l'élève et de définir un plan de progression adapté. Nous proposons ensuite un accompagnement flexible :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>en <strong className="font-extrabold text-brand-darkblue">petits groupes de 4 élèves maximum</strong>, afin de favoriser la progression, les interactions et la qualité du suivi ;</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>en <strong className="font-extrabold text-brand-darkblue">format individuel</strong> pour les élèves nécessitant un accompagnement spécifique.</span></li>
            </ul>,
            <span>La préparation s'organise en fonction des objectifs et des échéances : à travers des <strong className="font-extrabold text-brand-darkblue">séances régulières</strong>, ou sous forme de <strong className="font-extrabold text-brand-darkblue">sessions intensives pendant les vacances scolaires</strong> pour accélérer la montée en niveau.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une méthodologie adaptée aux exigences des épreuves</span>,
            <span>Les épreuves du TCF et du DALF évaluent la compréhension et l'expression, à l'écrit comme à l'oral, dans des contextes académiques et formels. Notre approche repose sur un travail approfondi de la <strong className="font-extrabold text-brand-darkblue">compréhension de documents</strong>, de la <strong className="font-extrabold text-brand-darkblue">structuration des réponses écrites</strong> et du développement de l'<strong className="font-extrabold text-brand-darkblue">aisance à l'oral</strong>. Les élèves sont entraînés sur des formats proches de l'examen, avec des mises en situation et des <strong className="font-extrabold text-brand-darkblue">retours personnalisés</strong>.</span>,
          ],
        },
        {
          title: "L'approche STUDASSIST dans la préparation des certifications de français",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Développer un français académique solide</span>,
            <span>Au-delà de la préparation à l'examen, nous accompagnons les élèves dans le développement d'un <strong className="font-extrabold text-brand-darkblue">français structuré et précis</strong>. Cela inclut la capacité à argumenter, à organiser sa pensée, à rédiger de manière claire et à s'exprimer avec fluidité dans un <strong className="font-extrabold text-brand-darkblue">contexte académique</strong>. Cette approche permet non seulement de réussir la certification, mais aussi de mieux s'intégrer dans un parcours d'études en France.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation intégrée au projet d'orientation</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, la préparation au TCF ou au DALF s'inscrit dans une <strong className="font-extrabold text-brand-darkblue">démarche globale</strong>, intégrant notre <Link to="/orientation/terminale" className="text-brand-darkblue font-black underline underline-offset-2">accompagnement en orientation scolaire</Link>. Elle est directement liée au projet d'études, aux établissements visés et aux exigences des procédures d'admission, notamment via <strong className="font-extrabold text-brand-darkblue">Campus France</strong>. Cela permet de fixer des objectifs réalistes et cohérents, en fonction du calendrier et du niveau attendu.</span>,
          ],
        },
        {
          title: "Un accompagnement en continu avec des professeurs expérimentés",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un encadrement par des professeurs experts des certifications de français</span>,
            <span>Les élèves sont accompagnés par des <strong className="font-extrabold text-brand-darkblue">enseignants spécialisés</strong> dans l'enseignement du français et la préparation aux certifications officielles. Leur parfaite connaissance des exigences du TCF et du DALF leur permet d'identifier rapidement les <strong className="font-extrabold text-brand-darkblue">axes de progression</strong> de chaque candidat et de proposer un accompagnement adapté.</span>,
            <span>Au-delà de la préparation aux épreuves, ils accompagnent les élèves dans le développement d'un <strong className="font-extrabold text-brand-darkblue">français académique solide</strong>, indispensable pour réussir leurs études dans un environnement francophone.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement dans la durée</span>,
            <span>Nous accompagnons les élèves tout au long de leur préparation, en leur proposant des <strong className="font-extrabold text-brand-darkblue">supports complémentaires</strong>, un suivi régulier et des ajustements en fonction de leur progression. L'objectif est de sécuriser leur <strong className="font-extrabold text-brand-darkblue">montée en niveau</strong> et de les préparer dans les meilleures conditions à l'examen.</span>,
          ],
        },
        {
          title: "À qui s'adresse la préparation des certifications de français ?",
          paragraphs: [
            <span>Cette préparation s'adresse aux <strong className="font-extrabold text-brand-darkblue">élèves, étudiants et jeunes diplômés</strong> souhaitant certifier officiellement leur niveau de français dans le cadre d'un projet académique, professionnel ou d'installation en France. Elle est particulièrement adaptée aux candidats qui souhaitent :</span>,
          ],
          bullets: [
            "Intégrer une université ou une grande école en France ;",
            "Préparer une candidature dans le cadre d'une procédure Campus France ;",
            "Atteindre le niveau linguistique exigé par un établissement ou une formation sélective ;",
            "Renforcer leur dossier académique et sécuriser leur projet d'études ;",
            "Développer leur maîtrise du français écrit et oral dans un contexte académique ;",
            "Acquérir les méthodes spécifiques aux épreuves du TCF ou du DALF ;",
            "Préparer un projet d'études à l'étranger dans le cadre d'un accompagnement en orientation ;",
            "Gagner en confiance avant le passage de l'examen.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la préparation des tests TCF & DALF ?",
        bullets: [
          "Un diagnostic initial précis avec un plan de progression personnalisé",
          "Une méthodologie concentrée sur l'optimisation du score",
          "Des petits groupes à effectif réduit (4 élèves max) avec un suivi personnalisé",
          "Des entraînements et simulations en conditions réelles",
          "Une préparation intégrée au projet d'orientation et aux pré-requis de Campus France",
          "+7 ans d'expertise et des résultats reconnus — 100% de nos élèves sont admis dans le top 3 de leurs choix",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/group.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez maximiser votre score au TCF ou au DALF ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["certifications"]}
      faqTitle="FAQ – Certifications de langues"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux certifications."
      prev={{ label: "IELTS & TOEFL", to: "/certifications/ielts-toefl" }}
      next={{ label: "DELE", to: "/certifications/dele" }}
    />
  );
}
