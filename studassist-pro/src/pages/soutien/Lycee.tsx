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

export default function SoutienLycee() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Lycée"
      accent="pink"
      title={<>Soutien scolaire au <span className="text-brand-teal">lycée</span></>}
      subtitle="Optimiser les performances, viser l'excellence et sécuriser l'orientation post-bac"
      intro={[
        "Le lycée est une étape décisive du parcours scolaire et plus généralement de l'avenir académique de l'élève. Les exigences s'intensifient, les enjeux de notes deviennent stratégiques et les résultats obtenus ont un impact direct sur l'orientation post-bac, en France, au Maroc et à l'international.",
        "Chez STUDASSIST, nous proposons un soutien scolaire au lycée structuré, exigeant et personnalisé, destiné aussi bien aux élèves souhaitant renforcer certaines matières qu'aux lycéens disposant d'un bon niveau académique et souhaitant atteindre l'excellence, quel que soit leur système scolaire.",
      ]}
      heroImage="/soutien-lycee-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 65%"
      heroCtaLabel="Réserver un cours découverte"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur le soutien scolaire au lycée."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Soutien Lycée"
      enjeuxEyebrow="Les enjeux du lycée"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux du lycée",
        lead: "Les années de lycée conditionnent directement l'accès aux filières sélectives et aux études supérieures. Si les programmes et les modalités d'évaluation diffèrent selon les systèmes éducatifs, une constante demeure : la régularité, la méthode et la cohérence du dossier scolaire font la différence. C'est à ce stade que se jouent :",
        bullets: [
          "La maîtrise approfondie des matières",
          "La performance académique dans les matières à fort coefficient",
          "La cohérence de la moyenne générale",
          "La gestion de la charge de travail et du stress",
          "La préparation du projet d'orientation post-bac",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
        ],
      }}

      sections={[
        {
          title: "Une approche globale et un accompagnement académique exigeant",
          paragraphs: [
            <span>Notre soutien scolaire au lycée repose sur une <strong className="font-extrabold text-brand-darkblue">approche globale et stratégique</strong>, bien au-delà d'un simple renforcement académique.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un diagnostic académique et méthodologique précis</span>,
            <span>Chaque élève bénéficie d'une <strong className="font-extrabold text-brand-darkblue">évaluation approfondie</strong> de son niveau, de ses méthodes de travail, de ses <strong className="font-extrabold text-brand-darkblue">matières de spécialité</strong>, de ses <strong className="font-extrabold text-brand-darkblue">matières du tronc commun</strong> et de ses objectifs d'orientation, <strong className="font-extrabold text-brand-darkblue">en tenant compte du système scolaire suivi</strong> (français, marocain, bilingue ou international).</span>,
            <span>Ce diagnostic permet de définir un <strong className="font-extrabold text-brand-darkblue">plan d'accompagnement ciblé</strong>, aligné à la fois avec les exigences du programme et les ambitions post-bac.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement académique exigeant</span>,
            <span>Nous accompagnons les lycéens aussi bien dans leurs <strong className="font-extrabold text-brand-darkblue">matières de spécialité</strong> que dans les <strong className="font-extrabold text-brand-darkblue">matières du tronc commun</strong>, qui restent déterminantes pour la <strong className="font-extrabold text-brand-darkblue">moyenne générale</strong>, la <strong className="font-extrabold text-brand-darkblue">cohérence du dossier scolaire</strong> et la <strong className="font-extrabold text-brand-darkblue">réussite aux épreuves du bac</strong>.</span>,
            <span>Notre accompagnement s'adapte au parcours et au système scolaire de chaque élève, avec pour objectifs :</span>,
            <span>• <strong className="font-extrabold text-brand-darkblue">Optimiser les résultats</strong> dans l'ensemble des matières (tronc commun et spécialités)</span>,
            <span>• Renforcer la <strong className="font-extrabold text-brand-darkblue">compréhension en profondeur des notions clés</strong></span>,
            <span>• Développer des <strong className="font-extrabold text-brand-darkblue">méthodes de travail efficaces pour préparer l'entrée aux études supérieures</strong></span>,
            <span>• Sécuriser un <strong className="font-extrabold text-brand-darkblue">dossier académique solide et cohérent</strong>, en lien avec les projets d'orientation post-bac et les ambitions de l'élève</span>,
            <span>Chez STUDASSIST, la performance se construit autant dans l'excellence disciplinaire que dans la <strong className="font-extrabold text-brand-darkblue">maîtrise rigoureuse des fondamentaux</strong>.</span>,
          ],
        },
        {
          title: "Notre méthodologie différenciée nous permet un suivi rigoureux orienté résultats et orientation",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Une méthodologie de soutien scolaire différenciée</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, le soutien scolaire au lycée repose sur une <strong className="font-extrabold text-brand-darkblue">pédagogie différenciée</strong>, déployée en <strong className="font-extrabold text-brand-darkblue">petits groupes de 2 à 4 élèves maximum</strong>, avec des <strong className="font-extrabold text-brand-darkblue">niveaux hétérogènes maîtrisés</strong>.</span>,
            <span>Cette méthodologie permet :</span>,
            <span>• De développer l'<strong className="font-extrabold text-brand-darkblue">autonomie intellectuelle</strong> de l'élève</span>,
            <span>• De stimuler l'<strong className="font-extrabold text-brand-darkblue">émulation académique</strong> et l'apprentissage par observation</span>,
            <span>• D'encourager une <strong className="font-extrabold text-brand-darkblue">dynamique de travail structurante</strong></span>,
            <span>• Tout en garantissant un <strong className="font-extrabold text-brand-darkblue">suivi individualisé</strong>, adapté à l'avancement réel de chaque élève</span>,
            <span>Nos enseignants ajustent leurs approches pédagogiques, leurs contenus et leurs exigences <strong className="font-extrabold text-brand-darkblue">en fonction du système scolaire suivi</strong>, tout en maintenant des <strong className="font-extrabold text-brand-darkblue">standards académiques élevés</strong>, indispensables à la réussite au lycée.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un suivi rigoureux orienté résultats et orientation</span>,
            <span>Le soutien scolaire STUDASSIST s'appuie sur un <strong className="font-extrabold text-brand-darkblue">suivi continu et structuré</strong> :</span>,
            <span>• Évaluation régulière des performances par l'envoi de rapports pédagogiques réguliers</span>,
            <span>• Ajustement des objectifs académiques</span>,
            <span>• Coordination avec les objectifs d'orientation post-bac</span>,
            <span>• Échanges réguliers avec l'élève et sa famille</span>,
            <span>Ce pilotage permet d'inscrire le travail scolaire dans une <strong className="font-extrabold text-brand-darkblue">logique de progression durable</strong>, cohérente avec les projets d'études supérieures.</span>,
          ],
        },
        {
          title: "Un accompagnement qui va au-delà du soutien scolaire et qui s'inscrit sur le long terme",
          paragraphs: [
            <span>Au lycée, le soutien scolaire ne peut être envisagé isolément. Les enjeux académiques s'articulent progressivement avec la <strong className="font-extrabold text-brand-darkblue">préparation aux examens</strong>, l'<strong className="font-extrabold text-brand-darkblue">accès aux filières sélectives</strong> et la <strong className="font-extrabold text-brand-darkblue">constitution d'un dossier post-bac solide</strong>, au Maroc, en France et à l'international.</span>,
            <span>Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, le soutien scolaire s'inscrit naturellement dans une <strong className="font-extrabold text-brand-darkblue">logique de continuité</strong> avec nos autres pôles d'expertise.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Préparation au baccalauréat</span>,
            <>
              Pour les élèves de Première et de Terminale, l'accompagnement peut être complété par des <strong className="font-extrabold text-brand-darkblue">préparations ciblées au baccalauréat</strong>, notamment le{" "}
              <Link to="/prepas-bac/francais" className="text-brand-darkblue font-black underline underline-offset-2">Bac de français</Link> (écrit et oral), les{" "}
              <Link to="/prepas-bac/specialites" className="text-brand-darkblue font-black underline underline-offset-2">épreuves de spécialités</Link>, l'{" "}
              <Link to="/prepas-bac/philo" className="text-brand-darkblue font-black underline underline-offset-2">épreuve finale de philosophie</Link>, et le{" "}
              <Link to="/prepas-bac/grand-oral" className="text-brand-darkblue font-black underline underline-offset-2">Grand Oral</Link>.
            </>,
            <span>Le soutien scolaire permet de consolider les bases, tandis que les <strong className="font-extrabold text-brand-darkblue">Prépas Bac</strong> ciblent la <strong className="font-extrabold text-brand-darkblue">maîtrise des attendus, la méthodologie d'examen et la performance le jour J des épreuves du baccalauréat</strong>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Préparations aux concours et filières sélectives</span>,
            <>
              Pour les lycéens visant des <strong className="font-extrabold text-brand-darkblue">parcours d'excellence</strong>, le soutien scolaire peut être articulé avec une <strong className="font-extrabold text-brand-darkblue">préparation spécifique aux concours</strong>, notamment pour les{" "}
              <Link to="/prepas-concours/sesame-acces" className="text-brand-darkblue font-black underline underline-offset-2">écoles de commerce</Link>, les{" "}
              <Link to="/prepas-concours/avenir-geipi" className="text-brand-darkblue font-black underline underline-offset-2">écoles d'ingénieurs</Link>,{" "}
              <Link to="/prepas-concours/sciences-po" className="text-brand-darkblue font-black underline underline-offset-2">Sciences Po</Link>, les{" "}
              <Link to="/prepas-concours/architecture" className="text-brand-darkblue font-black underline underline-offset-2">écoles d'architecture</Link>, les{" "}
              <Link to="/prepas-concours/medecine-maroc" className="text-brand-darkblue font-black underline underline-offset-2">universités de médecine publiques et privées</Link>, et autres filières sélectives.
            </>,
            <span>Le travail académique est alors orienté vers la <strong className="font-extrabold text-brand-darkblue">sélectivité, la stratégie de concours et les exigences propres à chaque épreuve</strong>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Certifications de langues</span>,
            <span>Dans de nombreux parcours post-bac, les <strong className="font-extrabold text-brand-darkblue">certifications de langues</strong> constituent un critère déterminant d'admission.</span>,
            <>
              STUDASSIST propose des préparations dédiées aux certifications internationales dans plusieurs langues, telles que l'anglais avec{" "}
              <Link to="/certifications/ielts-toeic-toefl" className="text-brand-darkblue font-black underline underline-offset-2">l'IELTS, le TOEFL, et le TOEIC</Link>, le français avec le{" "}
              <Link to="/certifications/tcf-dalf" className="text-brand-darkblue font-black underline underline-offset-2">DELF et le DALF</Link>, l'espagnol avec l'examen du{" "}
              <Link to="/certifications/dele" className="text-brand-darkblue font-black underline underline-offset-2">DELE</Link>, ainsi que l'allemand avec le Goethe.
            </>,
            <span>Le soutien scolaire assure la régularité et la progression linguistique, tandis que les <strong className="font-extrabold text-brand-darkblue">préparations aux certifications</strong> visent l'<strong className="font-extrabold text-brand-darkblue">obtention des scores requis</strong>.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une logique de parcours maîtrisé</span>,
            <>
              Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, chaque accompagnement est pensé comme un <strong className="font-extrabold text-brand-darkblue">parcours évolutif et cohérent</strong>. Le soutien scolaire au lycée constitue souvent la <strong className="font-extrabold text-brand-darkblue">première étape structurante</strong>, avant d'orienter l'élève vers des préparations plus spécifiques, en fonction de son projet académique et de ses ambitions, et de l'accompagner à concrétiser son projet d'{" "}
              <Link to="/orientation" className="text-brand-darkblue font-black underline underline-offset-2">orientation post-bac</Link>.
            </>,
          ],
        },
        {
          title: "À qui s'adresse le soutien scolaire au lycée ?",
          paragraphs: [
            <span>Notre accompagnement s'adresse aux lycéens :</span>,
            <span>• Rencontrant des <strong className="font-extrabold text-brand-darkblue">difficultés ciblées</strong> dans certaines matières</span>,
            <span>• Souhaitant <strong className="font-extrabold text-brand-darkblue">améliorer significativement leurs résultats</strong></span>,
            <span>• Ayant besoin de <strong className="font-extrabold text-brand-darkblue">méthodes de travail plus efficaces</strong></span>,
            <span>• Préparant des <strong className="font-extrabold text-brand-darkblue">filières sélectives ou internationales</strong></span>,
            <span>• <strong className="font-extrabold text-brand-darkblue">Disposant déjà d'un bon niveau académique et souhaitant viser l'excellence</strong></span>,
            <span>• Scolarisés dans des <strong className="font-extrabold text-brand-darkblue">systèmes français, marocains, bilingues ou internationaux</strong></span>,
            <span>• Recherchant un <strong className="font-extrabold text-brand-darkblue">accompagnement holistique qui soit exigeant, structuré et orienté résultats</strong></span>,
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le soutien scolaire au lycée ?",
        bullets: [
          "Une approche stratégique et long terme, alignée avec les enjeux d'orientation post-bac",
          "Des groupes très restreints (2 à 4 élèves maximum)",
          "Des enseignants expérimentés, certifiés et multi-systèmes",
          "Prise en charge complète du tronc commun et spécialités",
          "Une méthodologie différenciée favorisant autonomie et performance",
          "Un suivi rigoureux et transparent",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Un cadre maîtrisé, quelle que soit la filière suivie.",
        body: "Vous souhaitez mettre en place un soutien scolaire exigeant et stratégique, tout en préparant les prochaines échéances académiques de votre enfant ?",
        primaryLabel: "Réserver un cours découverte",
        primaryHref: "/contact",
        secondaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        secondaryHref: "/contact",
      }}

      faqKeys={["lycee"]}
      faqTitle="Soutien scolaire collège & lycée : questions fréquentes"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur l'accompagnement au collège et au lycée."
      prev={{ label: "Prépa Brevet", to: "/soutien/brevet" }}
      next={{ label: "Supérieur", to: "/soutien/superieur" }}
    />
  );
}
