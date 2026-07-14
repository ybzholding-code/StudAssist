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
        "La Terminale marque une étape déterminante dans le parcours d'un élève.",
        "C'est l'année où les choix deviennent concrets, où les candidatures s'organisent, et où se dessinent les premières trajectoires académiques et professionnelles.",
        "Chez STUDASSIST, nous accompagnons les élèves de Terminale et leurs familles dans une démarche d'orientation globale, structurée et stratégique, afin de transformer cette période charnière en véritable levier de réussite, au Maroc comme à l'international.",
      ]}
      heroImage="/orientation-terminale.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center"
      heroCtaLabel="Réserver un rendez-vous de 1er contact"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur l'accompagnement en orientation scolaire pour la classe de Terminale."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      enjeuxEyebrow="Les enjeux de la Terminale"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Pourquoi se faire accompagner par des professionnels pour son orientation en Terminale ?",
        lead: "S'orienter ne consiste pas simplement à choisir une formation. Il s'agit de bâtir un projet d'avenir cohérent, différenciant et parfaitement préparé. Chez STUDASSIST, l'orientation est pensée comme un projet à part entière, piloté avec méthode, rigueur et humanité.",
        bullets: [
          "Projet d'études sur mesure: Définir un projet ambitieux et aligné avec le profil et les aspirations de l'élève.",
          "Dossier solide et différenciant: Construire un dossier percutant pour les formations sélectives.",
          "Maîtrise des candidatures: Maîtriser des procédures de plus en plus complexes pour éviter le stress, les incertitudes et les décisions prises par défaut.",
          "Anticipation des concours et certifications: Mettre en place un plan d'action structuré de manière à atteindre les objectifs visés.",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
        ],
      }}

      sections={[
        {
          title: "Un diagnostic approfondi et un profiling global permettant de construire d'un projet post-bac sur mesure",
          paragraphs: [
            <span>Chaque accompagnement débute par un <strong className="font-extrabold text-brand-darkblue">entretien familial initial</strong>, permettant d'aligner visions et objectifs, de recueillir les attentes des parents et d'écouter les aspirations de l'élève.</span>,
            <span>Nous poursuivons ensuite avec des <strong className="font-extrabold text-brand-darkblue">entretiens individuels de profiling</strong>, durant lesquels nous analysons le parcours académique, les méthodes de travail, les expériences extrascolaires, les centres d'intérêt, la personnalité et les ambitions du futur bachelier.</span>,
            <span>Ce travail approfondi nous permet de construire un <strong className="font-extrabold text-brand-darkblue">profil global de l'élève</strong>, allant bien au-delà des notes et de constituer le socle de la stratégie d'orientation : il nous permet de structurer et valoriser le dossier, de mettre en avant les forces distinctives de l'élève et de bâtir une candidature attractive auprès des établissements les plus exigeants.</span>,
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-6 mb-2 uppercase tracking-tight">Construction d'un projet post-bac sur mesure</strong>,
            <span>À partir du profiling, nous accompagnons l'élève dans :</span>,
          ],
          bullets: [
            "la clarification de ses objectifs,",
            "l'identification des filières et établissements adaptés,",
            "la définition d'une short-list cohérente et ambitieuse,",
            "l'élaboration d'une stratégie de candidatures personnalisée.",
          ],
          callout: "Chaque projet est pensé comme une véritable stratégie d'admission, et non comme une simple accumulation de choix.",
        },
        {
          title: "Un accompagnement académique et administratif ouvert sur l'international et aligné avec les objectifs d'orientation",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Alignement du niveau réel de l'élève avec les ambitions de son projet post-bac</span>,
            <span>Lorsque nécessaire, nous intégrons directement au parcours :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>du <Link to="/soutien-scolaire" className="text-brand-darkblue font-black underline underline-offset-2">soutien scolaire ciblé</Link> pour renforcer certaines matières clés,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <Link to="/prepas-concours" className="text-brand-darkblue font-black underline underline-offset-2">préparations aux concours</Link> pour les filières sélectives,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>des <Link to="/certifications" className="text-brand-darkblue font-black underline underline-offset-2">préparations aux certifications de langues</Link>, anticipées selon les exigences des établissements visés.</span></li>
            </ul>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Accompagnement aux candidatures et aux admissions</span>,
            <span>Nous accompagnons nos élèves à chaque étape :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>constitution et optimisation des dossiers,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>rédaction des lettres de motivation et des essays,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>préparation des CV et formulaires,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>envoi des candidatures,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>préparation des entretiens d'admission via des mises en situations et des simulations filmées,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>suivi des réponses de candidatures et ajustement de la stratégie si nécessaire afin de sécuriser plusieurs options.</span></li>
            </ul>,
            <strong className="block text-brand-darkblue font-extrabold text-sm mt-6 mb-2 uppercase tracking-tight">Une expertise internationale éprouvée</strong>,
            <span>STUDASSIST accompagne les projets d'études à l'étranger vers <strong className="font-extrabold text-brand-darkblue">plus de 25 destinations dans le monde</strong>. Fort de <strong className="font-extrabold text-brand-darkblue">7 années d'expérience</strong>, nous maîtrisons l'ensemble des processus de candidatures, sur plateformes officielles comme hors plateformes.</span>,
            <>
              Notre accompagnement international inclut la définition du projet d'orientation et le choix des destinations, la gestion et le suivi des candidatures, les{" "}
              <Link to="/admin-logement" className="text-brand-darkblue font-black underline underline-offset-2">démarches administratives</Link>{" "}
              et l'aide à l'<Link to="/admin-logement" className="text-brand-darkblue font-black underline underline-offset-2">installation à l'étranger</Link>.
            </>,
          ],
          callout: "Chaque projet est construit de manière personnalisée, selon le profil de l'élève et les exigences propres à chaque destination.",
        },
        {
          title: "Un tiers de confiance entre l'élève et sa famille pensé afin de libérer du temps pour l'essentiel",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un tiers de confiance entre l'élève et ses parents</span>,
            <span>L'adolescence est souvent une période sensible, où les choix d'orientation peuvent susciter incompréhensions ou tensions. STUDASSIST agit comme un <strong className="font-extrabold text-brand-darkblue">tiers de confiance</strong>, facilitant un dialogue serein entre l'élève et ses parents.</span>,

            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement pensé aussi pour les parents</span>,
            <span>L'orientation post-bac est aujourd'hui un parcours complexe, marqué par une multiplicité de formations, de procédures et d'enjeux académiques. Chez <strong className="font-extrabold text-brand-darkblue">STUDASSIST</strong>, notre accompagnement s'adresse également aux parents, qui bénéficient d'un cadre structuré pour être <strong className="font-extrabold text-brand-darkblue">informés, guidés et rassurés</strong> à chaque étape. Nous apportons une lecture claire des parcours possibles, des exigences des établissements et des réalités du marché des études supérieures, afin de permettre aux familles de prendre des décisions sereines, fondées sur des éléments concrets et une vision long terme.</span>,

            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement qui libère du temps pour l'essentiel</span>,
            <span>En prenant en charge l'ensemble du processus d'orientation et de candidatures, STUDASSIST représente un <strong className="font-extrabold text-brand-darkblue">gain de temps considérable</strong> pour les familles. L'élève peut ainsi se concentrer pleinement sur ses priorités académiques — <strong className="font-extrabold text-brand-darkblue">préparation du baccalauréat, concours, certifications et échéances importantes</strong> — tandis que les parents sont libérés d'une charge administrative lourde et chronophage.</span>,

            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un accompagnement continu et transparent</span>,
            <span>Tout au long du parcours, nous restons en contact constant avec l'élève et sa famille. Les documents, rendez-vous et échanges sont centralisés dans un <strong className="font-extrabold text-brand-darkblue">espace de communication dédié</strong>, garantissant transparence, réactivité et visibilité complète pour toutes les parties.</span>,
          ],
        },
        {
          title: "À qui s'adresse l'orientation en Terminale ?",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Aux élèves de Terminale qui :</span>,
          ],
          bullets: [
            "hésitent sur leur avenir post-bac,",
            "visent des filières sélectives,",
            "souhaitent étudier au Maroc ou à l'international,",
            "recherchent un accompagnement stratégique et personnalisé,",
            "souhaitent sécuriser leur parcours académique.",
          ],
          extraParagraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Aux parents qui :</span>,
            <ul className="space-y-2 mt-2 ml-1">
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>souhaitent être <strong className="font-extrabold text-brand-darkblue">encadrés, informés et rassurés</strong> face à la complexité des parcours post-bac,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>recherchent un cadre structuré pour accompagner leur enfant dans ses choix,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>veulent s'appuyer sur une expertise fiable pour prendre des décisions éclairées,</span></li>
              <li className="flex gap-2.5 items-start"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" /><span>souhaitent gagner du temps et réduire la charge mentale liée aux démarches d'orientation et de candidatures.</span></li>
            </ul>,
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi être accompagnés par STUDASSIST en Terminale ?",
        bullets: [
          "Une approche globale et structurée avec une stratégie de candidature personnalisée et pilotée de A à Z dans une vision long terme du parcours académique",
          "Une expertise Maroc & international couvrant +25 destinations",
          "Une maîtrise complète des procédures plateformes et hors plateforme",
          "Un soutien scolaire, de la préparation de concours et des certifications de langues intégrés au parcours",
          "Un accompagnement humain, bienveillant, rigoureux et transparent",
          "Un gain de temps considérable pour l'élève et sa famille",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/handshake.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez être accompagnés dans la construction d'un projet post-bac solide et ambitieux ? Réservez votre rendez-vous de premier contact pour obtenir une évaluation de profil et tracer ensemble une stratégie d'admissions post-bac.",
        primaryLabel: "Prendre rendez-vous avec un consultant STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Contacter un consultant STUDASSIST",
        secondaryHref: "/contact",
      }}

      faqKeys={["orientation"]}
      prev={{ label: "Orientation en Première", to: "/orientation/premiere" }}
      next={{ label: "Réorientation académique", to: "/orientation/reorientation" }}
    />
  );
}
