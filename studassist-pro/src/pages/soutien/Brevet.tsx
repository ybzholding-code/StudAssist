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

export default function SoutienBrevet() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Brevet"
      accent="pink"
      title={<>Préparation au Diplôme National du <span className="text-brand-teal">Brevet</span></>}
      subtitle="Aborder la première échéance officielle avec méthode et sérénité"
      intro={[
        "Le Diplôme National du Brevet constitue la première évaluation officielle du parcours scolaire. Il marque une étape clé avant l'entrée au lycée et nécessite une préparation spécifique, au-delà du travail effectué en classe.",
        "Chez STUDASSIST, la prépa Brevet s'adresse aux élèves de 4ᵉ et de 3ᵉ, quels que soient leur niveau et leur système scolaire.",
      ]}
      heroImage="/soutien-scolaire-main.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 65%"
      heroCtaLabel="Réserver un cours découverte"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation au Diplôme National du Brevet."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Prépa Brevet"
      enjeuxEyebrow="Les enjeux"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les enjeux du Brevet",
        lead: "Une préparation structurée permet d'aborder l'examen avec confiance, méthode et sérénité. La réussite du Brevet repose sur :",
        bullets: [
          "La maîtrise des fondamentaux",
          "La compréhension des attendus officiels",
          "La méthodologie des épreuves",
          "La gestion du temps et du stress",
          "La préparation à l'oral",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/microphone.png",
        ],
      }}

      sections={[
        {
          title: "Une préparation ciblée et progressive dispensée par des professeurs expérimentés",
          paragraphs: [
            "Notre accompagnement repose sur une préparation ciblée et progressive, encadrée par des professeurs expérimentés, habitués à préparer les élèves à cet examen et maîtrisant parfaitement ses exigences.",
            "Des professeurs qui connaissent l'examen de l'intérieur — La plupart de nos enseignants ont également exercé en tant que correcteurs du Diplôme National du Brevet, ce qui leur permet de transmettre aux élèves une lecture précise des attentes officielles, des critères d'évaluation et des erreurs fréquentes.",
            "La préparation inclut : révisions approfondies des matières évaluées ; entraînements sur sujets types et annales ; travail méthodologique sur les épreuves écrites ; préparation à l'oral du Brevet (présentation, argumentation, posture).",
            "Cette expertise terrain permet un travail ciblé sur la compréhension des consignes, la structuration des réponses et l'optimisation des points à chaque épreuve.",
          ],
        },
        {
          title: "Des formats flexibles, pensés pour la réussite",
          paragraphs: [
            "Des groupes jusqu'à 8 élèves — La prépa Brevet est proposée en groupes de travail pouvant aller jusqu'à 8 élèves, afin de favoriser l'émulation tout en conservant un cadre structuré.",
            "Des volumes horaires modulables — Les volumes horaires sont adaptés en fonction du niveau, des objectifs et des besoins spécifiques de chaque élève.",
            "Des plannings adaptés aux disponibilités — Les plannings sont construits selon les disponibilités du groupe, permettant une organisation fluide et compatible avec la scolarité de chacun.",
            "Cette flexibilité garantit un accompagnement réaliste, progressif et efficace, sans surcharge inutile.",
          ],
        },
        {
          title: "Une méthodologie adaptée à chaque élève et une continuité naturelle avec le soutien scolaire",
          paragraphs: [
            <span><span className="font-bold text-brand-darkblue text-[15px]">Une continuité directe avec le soutien scolaire</span> — La prépa Brevet STUDASSIST s'inscrit dans une continuité directe avec le{" "}<Link to="/soutien/college" className="text-brand-teal font-semibold hover:underline">soutien scolaire au collège</Link> : consolidation des bases tout au long de l'année, intensification du travail à l'approche de l'examen, accompagnement progressif et sans rupture. Chaque élève avance à son rythme, dans une logique de progression maîtrisée.</span>,
            "Une méthodologie adaptée à chaque élève — Nos enseignants adaptent les contenus, les méthodes et le rythme de travail au niveau réel de chaque élève et au système scolaire suivi (français, marocain, bilingue ou international), tout en maintenant un haut niveau d'exigence académique.",
          ],
        },
        {
          title: "À qui s'adresse la prépa Brevet ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves : souhaitant sécuriser la réussite du Brevet ; manquant de méthode ou de confiance ; disposant d'un bon niveau et visant un excellent résultat ; préparant une entrée au lycée sereine et structurée.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour la prépa Brevet ?",
        bullets: [
          "Une préparation structurée et progressive",
          "Des professeurs expérimentés, pour la plupart anciens correcteurs du Brevet",
          "Des groupes jusqu'à 8 élèves, favorisant dynamique et encadrement",
          "Des volumes horaires modulables selon les besoins",
          "Des plannings adaptés aux disponibilités des élèves",
          "Un suivi rigoureux, une vision long terme au-delà de l'examen",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez mettre en place une préparation efficace pour le Brevet ?",
        primaryLabel: "Découvrir la prochaine édition de notre prépa Brevet",
        primaryHref: "/contact",
        secondaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        secondaryHref: "/contact",
      }}

      faqKeys={["soutien", "method"]}
      faqTitle="Prépa Brevet : questions fréquentes"
      prev={{ label: "Collège", to: "/soutien/college" }}
      next={{ label: "Lycée", to: "/soutien/lycee" }}
    />
  );
}
