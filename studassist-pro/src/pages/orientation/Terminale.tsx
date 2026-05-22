import { Link } from "react-router-dom";
import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationTerminale() {
  return (
    <OrientationLevelPage
      eyebrow="Lycée · Terminale"
      accent="pink"
      title={<>Orientation scolaire <span className="text-brand-teal">en Terminale</span></>}
      subtitle="Construire un projet post-bac clair, ambitieux et parfaitement maîtrisé"
      intro={[
        "La Terminale marque une étape déterminante dans le parcours d’un élève.",
        "C’est l’année où les choix deviennent concrets, où les candidatures s’organisent, et où se dessinent les premières trajectoires académiques et professionnelles.",
        "Chez STUDASSIST, nous accompagnons les élèves de Terminale et leurs familles dans une démarche d’orientation globale, structurée et stratégique, afin de transformer cette période charnière en véritable levier de réussite, au Maroc comme à l’international.",
      ]}
      heroImage="/hero-orientation-new.png"
      heroCtaLabel="Réserver un rendez-vous de 1er contact"
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      enjeuxEyebrow="Pourquoi se faire accompagner ?"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Pourquoi se faire accompagner par des professionnels pour son orientation en Terminale ?",
        lead: "Les enjeux de l’orientation en Terminale. S’orienter ne consiste pas simplement à choisir une formation. Il s’agit de :",
        bullets: [
          "définir un projet d’études cohérent et ambitieux,",
          "aligner les aspirations de l’élève avec les exigences académiques,",
          "construire un dossier solide et différenciant,",
          "anticiper concours et certifications,",
          "maîtriser des procédures de candidatures de plus en plus complexes.",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
        ],
      }}

      sections={[
        {
          title: "Une approche globale de l’orientation post-bac",
          paragraphs: [
            "Sans accompagnement expert, ces étapes peuvent rapidement générer stress, incertitudes ou décisions par défaut.",
            "Chez STUDASSIST, l’orientation est pensée comme un projet à part entière, piloté avec méthode, rigueur et humanité.",
            "Notre accompagnement combine :",
          ],
          bullets: [
            "analyse approfondie du profil,",
            "stratégie académique,",
            "construction des dossiers de candidature,",
            "préparation aux entretiens,",
            "suivi des admissions,",
            "accompagnement international.",
          ],
        },
        {
          title: "Un diagnostic approfondi et un profiling global permettant de construire d’un projet post-bac sur mesure",
          paragraphs: [
            "Chaque accompagnement débute par un entretien familial initial, permettant d’aligner visions et objectifs, de recueillir les attentes des parents et d’écouter les aspirations de l’élève.",
            "Nous poursuivons ensuite avec des entretiens individuels de profiling, durant lesquels nous analysons le parcours académique, les méthodes de travail, les expériences extrascolaires, les centres d’intérêt, la personnalité et les ambitions du futur bachelier.",
            "Ce travail approfondi nous permet de construire un profil global de l’élève, allant bien au-delà des notes et de constituer le socle de la stratégie d’orientation : il nous permet de structurer et valoriser le dossier, de mettre en avant les forces distinctives de l’élève et de bâtir une candidature attractive auprès des établissements les plus exigeants.",
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-6 mb-2">Construction d’un projet post-bac sur mesure :</strong>,
            "À partir du profiling, nous accompagnons l’élève dans :",
          ],
          bullets: [
            "la clarification de ses objectifs,",
            "l’identification des filières et établissements adaptés,",
            "la définition d’une short-list cohérente et ambitieuse,",
            "l’élaboration d’une stratégie de candidatures personnalisée.",
          ],
          callout: "Chaque projet est pensé comme une véritable stratégie d’admission, et non comme une simple accumulation de choix.",
        },
        {
          title: "Un accompagnement académique et administratif ouvert sur l’international et aligné avec les objectifs d’orientation",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2">Alignement du niveau réel de l’élève avec les ambitions de son projet post-bac :</span>,
            <>
              Lorsque nécessaire, nous intégrons directement au parcours du{" "}
              <Link to="/soutien-scolaire" className="text-brand-teal font-black hover:underline">
                soutien scolaire ciblé
              </Link>{" "}
              pour renforcer certaines matières clés, des{" "}
              <Link to="/prepas-concours" className="text-brand-teal font-black hover:underline">
                préparations aux concours
              </Link>{" "}
              pour les filières sélectives, et des{" "}
              <Link to="/certifications" className="text-brand-teal font-black hover:underline">
                préparations aux certifications de langues
              </Link>{" "}
              anticipées selon les exigences des établissements visés.
            </>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2">Accompagnement aux candidatures et aux admissions :</span>,
            "Nous accompagnons nos élèves à chaque étape : constitution et optimisation des dossiers, rédaction des lettres de motivation et des essays, préparation des CV et formulaires, envoi des candidatures, préparation des entretiens d’admission via des mises en situations et des simulations filmées, et suivi des réponses de candidatures et ajustement de la stratégie si nécessaire afin de sécuriser plusieurs options.",
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-6 mb-2">Une expertise internationale éprouvée :</strong>,
            <>
              STUDASSIST accompagne les projets d’études à l’étranger vers plus de 25 destinations dans le monde. Fort de 7 années d’expérience, nous maîtrisons l’ensemble des processus de candidatures, sur plateformes officielles comme hors plateformes.
            </>,
            <>
              Notre accompagnement international inclut la définition du projet d’orientation et le choix des destinations, la gestion et le suivi des candidatures, les{" "}
              <Link to="/admin-logement" className="text-brand-teal font-black hover:underline">
                démarches administratives
              </Link>{" "}
              et l’aide à l’{" "}
              <Link to="/admin-logement" className="text-brand-teal font-black hover:underline">
                installation à l’étranger
              </Link>.
            </>
          ],
          callout: "Chaque projet est construit de manière personnalisée, selon le profil de l’élève et les exigences propres à chaque destination.",
        },
        {
          title: "Un tiers de confiance entre l’élève et sa famille pensé afin de libérer du temps pour l’essentiel",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2">Un tiers de confiance entre l’élève et ses parents :</span>,
            "L’adolescence est souvent une période sensible, où les choix d’orientation peuvent susciter incompréhensions ou tensions. STUDASSIST agit comme un tiers de confiance, facilitant un dialogue serein entre l’élève et ses parents. Nous aidons à confronter les points de vue de manière constructive, sur la base d’éléments objectifs et d’une vision long terme, afin d’aboutir à des décisions éclairées et partagées.",
            
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2">Un accompagnement pensé aussi pour les parents :</span>,
            "L’orientation post-bac est aujourd’hui un parcours complexe, marqué par une multiplicité de formations, de procédures et d’enjeux académiques. Chez STUDASSIST, notre accompagnement s’adresse également aux parents, qui bénéficient d’un cadre structuré pour être informés, guidés et rassurés à chaque étape. Nous apportons une lecture claire des parcours possibles, des exigences des établissements et des réalités du marché des études supérieures, afin de permettre aux familles de prendre des décisions sereines, fondées sur des éléments concrets et une vision long terme.",
            
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2">Un accompagnement qui libère du temps pour l’essentiel :</span>,
            "En prenant en charge l’ensemble du processus d’orientation et de candidatures, STUDASSIST représente un gain de temps considérable pour les familles. L’élève peut ainsi se concentrer pleinement sur ses priorités académiques — préparation du baccalauréat, concours, certifications et échéances importantes — tandis que les parents sont libérés d’une charge administrative lourde et chronophage."
          ],
          callout: "Un accompagnement continu et transparent : tout au long du parcours, nous restons en contact constant avec l’élève et sa famille, centralisant tout dans un espace de communication dédié.",
        },
      ]}

      audience={{
        title: "À qui s’adresse l’orientation en Terminale ?",
        groups: [
          {
            title: "Aux élèves de Terminale qui :",
            bullets: [
              "hésitent sur leur avenir post-bac,",
              "visent des filières sélectives,",
              "souhaitent étudier au Maroc ou à l’international,",
              "recherchent un accompagnement stratégique et personnalisé,",
              "souhaitent sécuriser leur parcours académique.",
            ],
          },
          {
            title: "Aux parents qui :",
            bullets: [
              "souhaitent être encadrés, informés et rassurés face à la complexité des parcours post-bac,",
              "recherchent un cadre structuré pour accompagner leur enfant dans ses choix,",
              "veulent s’appuyer sur une expertise fiable pour prendre des décisions éclairées,",
              "souhaitent gagner du temps et réduire la charge mentale liée aux démarches d’orientation et de candidatures.",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST dès la Terminale ?",
        bullets: [
          "Une approche globale et structurée",
          "Un profiling complet de chaque élève",
          "Une stratégie de candidature personnalisée",
          "Une expertise Maroc & international (+25 destinations)",
          "Une maîtrise parfaites des procédures plateformes et hors plateforme",
          "Une intégration possible du soutien scolaire, concours et langues",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/school.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez être accompagnés dans la construction d’un projet post-bac solide et ambitieux pour votre enfant ?",
        primaryLabel: "Prendre rendez-vous avec un consultant STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Contacter un consultant STUDASSIST",
        secondaryHref: "https://wa.me/212669495996",
      }}

      prev={{ label: "Orientation en Première", to: "/orientation/premiere" }}
      next={{ label: "Réorientation académique", to: "/orientation/reorientation" }}
    />
  );
}
