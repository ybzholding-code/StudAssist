import OrientationLevelPage from "../../components/OrientationLevelPage";
import { Link } from "react-router-dom";

export default function OrientationPremiere() {
  return (
    <OrientationLevelPage
      eyebrow="Lycée · Première"
      accent="blue"
      title={<>Orientation scolaire <span className="text-brand-teal">en Première</span></>}
      subtitle="La classe de Première est une année clé dans la construction du projet post-bac."
      intro={[
        "La classe de Première est une année clé dans la construction du projet post-bac.",
        "C’est le moment où se précisent les intérêts, où les résultats prennent davantage de poids, et où s’opèrent des choix structurants, notamment celui de la spécialité à abandonner en vue de la Terminale.",
        "Chez STUDASSIST, nous accompagnons les élèves de Première et leurs familles dans une démarche d’orientation anticipée et stratégique, afin de poser dès maintenant les bases d’un projet solide et d’aborder la Terminale avec clarté, méthode et sérénité.",
      ]}
      heroImage="/hero-orientation-general.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center"
      heroCtaLabel="Réserver un rendez-vous de 1er contact"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      enjeuxEyebrow="Les enjeux de l’orientation en première"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Pourquoi anticiper dès la Première ?",
        lead: "Contrairement aux idées reçues, l’orientation ne commence pas en Terminale. La Première est le moment d’anticiper son orientation post-bac afin d’éviter les décisions précipitées et de construire un projet progressif, réfléchi et cohérent.",
        bullets: [
          "Mieux comprendre le profil de l’élève, clarifier ses centres d’intérêt et ses aspirations",
          "Explorer différentes pistes de filières et prendre conscience des champs de possibilités post-bac",
          "Faire un choix éclairé de la spécialité à conserver en Terminale",
          "Renforcer les matières clés et structurer les méthodes de travail pour le dossier post-bac",
          "Conscientiser son avenir pour donner du sens au travail scolaire et renforcer la motivation",
          "Anticiper les exigences futures en termes de langues, de concours et de compétences",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      sections={[
        {
          title: "Un diagnostic approfondi permettant de choisir la spécialité à abandonner de manière stratégique",
          paragraphs: [
            <strong className="block text-brand-darkblue font-extrabold text-sm mb-1">Une démarche progressive et structurée</strong>,
            "En Première, l’objectif est de consolider le parcours scolaire tout en préparant activement la Terminale.",
            "Nous réalisons un diagnostic complet et un profiling individuel de l’élève afin d’analyser ses forces académiques, sa personnalité et ses aspirations.",
            "Ce travail permet de guider avec méthode et sérénité l’une des décisions clés de l’année : le choix stratégique de la spécialité à abandonner en vue de la Terminale.",
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-4 mb-1">Un choix de spécialité aligné avec les ambitions</strong>,
            "Chez STUDASSIST, nous accompagnons cette décision cruciale en croisant :",
          ],
          bullets: [
            "les attendus et prérequis des filières d’études supérieures visées,",
            "les forces académiques réelles et les points d'appui de l’élève,",
            "son niveau de motivation et ses aspirations à long terme.",
          ],
          callout: "Un choix stratégique pour maximiser la qualité du dossier scolaire et sécuriser le parcours post-bac.",
        },
        {
          title: "Définir un cap et poser un plan d’action qui s’inscrit sur le long terme avec une ouverture vers l’international",
          paragraphs: [
            <strong className="block text-brand-darkblue font-extrabold text-sm mb-1">Poser un plan d’action et anticiper les objectifs</strong>,
            "Dès la classe de Première, nous aidons l’élève à se projeter concrètement en établissant une première short-list de formations et d’établissements cibles.",
            "Cette anticipation donne du sens à son travail quotidien et lui permet d'adapter son investissement scolaire aux exigences des filières visées.",
            "Nous mettons en place un plan d'action personnalisé visant à :",
            <ul className="list-disc pl-5 space-y-1 my-2 text-gray-500 text-sm">
              <li>renforcer la méthodologie de travail et l’autonomie,</li>
              <li>consolider le niveau académique dans les disciplines clés,</li>
              <li>préparer sereinement la transition vers les exigences de la Terminale.</li>
            </ul>,
            <span>
              Lorsque requis, nous intégrons du{" "}
              <Link to="/soutien-scolaire" className="text-brand-darkblue font-black underline underline-offset-2">
                soutien scolaire
              </Link>{" "}
              ciblé pour maximiser le dossier académique (dossier de Première et épreuves anticipées du Bac).
            </span>,
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-4 mb-1">Ouverture vers l'international</strong>,
            <span>
              Pour les projets d'études à l'étranger, nous amorçons la réflexion sur les prérequis et les calendriers d'admission spécifiques (inscriptions anticipées, certifications de langues). Nous intégrons au programme la préparation aux{" "}
              <Link to="/certifications" className="text-brand-darkblue font-black underline underline-offset-2">
                certifications de langues
              </Link>{" "}
              (IELTS, TOEFL, Cambridge) indispensables pour les universités internationales.
            </span>,
          ],
        },
        {
          title: "Un tiers de confiance entre l’élève et sa famille - Un accompagnement continu et transparent pensé aussi pour les parents",
          paragraphs: [
            <strong className="block text-brand-darkblue font-extrabold text-sm mb-1">Un rôle de médiateur expert</strong>,
            "Les décisions d'orientation en Première peuvent être génératrices de tensions ou d’incertitudes. STUDASSIST intervient comme un tiers neutre et bienveillant pour faciliter le dialogue familial autour d'arguments objectifs et constructifs.",
            "Nous permettons ainsi de construire un projet partagé par l’élève et ses parents, libéré de toute pression inutile.",
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-4 mb-1">Transparence et suivi continu</strong>,
            "Tout au long de l’accompagnement, les parents sont tenus informés des progrès de la réflexion et des étapes franchies, grâce à une communication fluide et des bilans réguliers.",
          ],
        },
        {
          title: "À qui s’adresse l’orientation en Première ?",
          paragraphs: [
            <strong className="block text-brand-darkblue font-extrabold text-sm mb-1">Aux élèves de Première qui :</strong>,
            <ul className="list-disc pl-5 space-y-1 my-2 text-gray-500 text-sm">
              <li>souhaitent clarifier et structurer leur projet d'études avec un an d'avance,</li>
              <li>veulent faire un choix de spécialité réfléchi, cohérent et stratégique,</li>
              <li>recherchent une dynamique de travail motivante pour valoriser leur dossier scolaire.</li>
            </ul>,
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-4 mb-1">Aux parents qui :</strong>,
            <ul className="list-disc pl-5 space-y-1 my-2 text-gray-500 text-sm">
              <li>désirent accompagner leur enfant sans stress face à des choix structurants,</li>
              <li>souhaitent comprendre l'impact réel des décisions de Première sur Parcoursup et le post-bac,</li>
              <li>recherchent l’expertise d'un spécialiste pour sécuriser le parcours de leur enfant.</li>
            </ul>,
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST dès la Première ?",
        bullets: [
          "Une orientation anticipée et stratégique dès la Première dans une logique humaine, structurée et rassurante",
          "Un profiling complet de l’élève pour des choix de spécialités éclairés",
          "Une short-list d’écoles construite dès la Première avec une vision stratégique et ouverte sur l’international",
          "Un plan d’action académique personnalisé et évolutif dans un esprit d’anticipation des exigences de Terminale",
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
        body: "Votre enfant est en Première et doit faire des choix décisifs ? Parlons-en lors d'un premier rendez-vous sans engagement.",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Contacter un conseiller",
        secondaryHref: "/contact",
      }}

      prev={{ label: "Orientation en Seconde", to: "/orientation/seconde" }}
      next={{ label: "Orientation en Terminale", to: "/orientation/terminale" }}
    />
  );
}
