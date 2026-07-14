import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "francais", label: "Bac de Français", href: "/prepas-bac/francais" },
  { key: "specialites", label: "Bac de Spécialités", href: "/prepas-bac/specialites" },
  { key: "philo", label: "Bac de Philo", href: "/prepas-bac/philo" },
  { key: "grand-oral", label: "Grand Oral", href: "/prepas-bac/grand-oral" },
];

export default function PrepasBacFrancais() {
  return (
    <OrientationLevelPage
      eyebrow="Prépas Bac · Français"
      accent="blue"
      title={<>Prépa Bac de <span className="text-brand-teal">Français</span></>}
      subtitle="Une épreuve clé dans le parcours académique et l'orientation"
      intro={[
        <>L'épreuve anticipée du <strong>Baccalauréat de Français</strong> constitue une étape <strong>déterminante</strong> du parcours scolaire. Passée en classe de Première, elle comprend une épreuve écrite et une épreuve orale, chacune avec un <strong>coefficient significatif</strong>, et contribue directement à la réussite globale au Baccalauréat.</>,
        <>Au-delà de l'examen, elle joue un rôle <strong>structurant</strong> dans la construction du <strong>dossier académique</strong>. Les compétences qu'elle mobilise — rigueur, capacité d'analyse, qualité de l'expression et structuration de la pensée — sont particulièrement valorisées dans les candidatures aux établissements d'enseignement supérieur, en France, au Maroc comme à l'international.</>,
        <>Chez STUDASSIST, la préparation au Bac de Français s'inscrit dans une <strong>démarche globale</strong> : permettre à l'élève de maîtriser les fondamentaux, d'optimiser ses résultats et de renforcer la qualité de son dossier dans une logique d'<strong>orientation stratégique</strong>.</>,
      ]}
      heroImage="/prepas-bac-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver une séance découverte"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation au Bac de Français."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="PRÉPARATION AU BAC DE FRANÇAIS"
      enjeuxEyebrow="Les enjeux du bac de français"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Un levier de réussite pour le lycée et les études supérieures",
        lead: "Le Bac de Français joue un rôle central dans la réussite scolaire et la préparation de l'après-bac. Au-delà de la note obtenue, il permet de développer des compétences particulièrement recherchées dans l'enseignement supérieur et les formations sélectives.",
        bullets: [
          "Maîtriser l'expression écrite: Développer sa capacité d'analyse, d'argumentation et de rédaction grâce aux méthodes attendues au Baccalauréat.",
          "Construire un dossier solide: Valoriser son niveau académique et renforcer son profil pour les candidatures post-bac.",
          "Préparer la Terminale: Acquérir les méthodes qui seront réutilisées en Philosophie, dans les spécialités et lors du Grand Oral.",
          "Développer sa confiance: Gagner en aisance à l'oral, structurer sa pensée et apprendre à défendre ses idées avec clarté.",
        ],
        icons: [
          "https://img.icons8.com/?size=100&id=37FAjZOSDlVk&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=qZ3IKpKF9Cun&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=TDweCFuioxNi&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=B0YxODenuYvG&format=png&color=000000",
        ],
      }}

      sections={[
        {
          title: "Le bac de français : qu'est-ce que c'est ?",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Comprendre les exigences du Bac de Français</span>,
            <span>Le Bac de Français repose sur deux épreuves complémentaires :</span>,
            <span>• Une <strong className="font-extrabold text-brand-darkblue">épreuve écrite</strong>, où l'élève choisit entre commentaire de texte, dissertation ou, selon la filière, contraction de texte et essai</span>,
            <span>• Une <strong className="font-extrabold text-brand-darkblue">épreuve orale</strong>, composée d'une explication de texte suivie d'un entretien autour d'une œuvre étudiée</span>,
            <span>Ces épreuves évaluent à la fois la capacité d'analyse et d'interprétation, la qualité de l'expression écrite et orale, la maîtrise des méthodes, et la culture littéraire ainsi que la capacité à argumenter.</span>,
            <span>L'épreuve écrite se déroule généralement au mois de juin, suivie de l'oral organisé à partir de la fin juin.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un programme exigeant et structurant</span>,
            <span>Le programme officiel du Bac de Français s'articule autour de <strong className="font-extrabold text-brand-darkblue">quatre grands objets d'étude</strong> :</span>,
            <span>• La poésie du XIXe au XXIe siècle</span>,
            <span>• La littérature d'idées du XVIe au XVIIIe siècle</span>,
            <span>• Le roman et le récit du Moyen Âge au XXIe siècle</span>,
            <span>• Le théâtre du XVIIe au XXIe siècle</span>,
            <span>Chaque objet d'étude est associé à une œuvre et à un parcours permettant de la situer dans son contexte historique et littéraire.</span>,
            <span>Les élèves doivent ainsi développer une compréhension approfondie des grands courants, des auteurs majeurs et des enjeux littéraires, en mobilisant des références culturelles solides.</span>,
          ],
        },
        {
          title: "L'approche de STUDASSIST dans la préparation du bac de français",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Maîtriser les fondamentaux pour réussir</span>,
            <span>Chez STUDASSIST, la préparation repose sur une conviction forte : la réussite passe par la maîtrise des fondamentaux.</span>,
            <span>Nous accompagnons les élèves dans :</span>,
            <span>• La compréhension des <strong className="font-extrabold text-brand-darkblue">logiques de raisonnement et d'argumentation</strong></span>,
            <span>• La maîtrise des <strong className="font-extrabold text-brand-darkblue">mouvements littéraires et des figures de style</strong></span>,
            <span>• L'assimilation des <strong className="font-extrabold text-brand-darkblue">objets d'étude au programme</strong> (roman, théâtre, poésie, littérature d'idées)</span>,
            <span>• L'acquisition de <strong className="font-extrabold text-brand-darkblue">références culturelles solides</strong> à travers l'étude des œuvres au programme</span>,
            <span>Ce travail de fond permet de donner de la profondeur aux analyses et de valoriser les copies.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation complète : écrit et oral</span>,
            <span>Notre accompagnement couvre l'ensemble des épreuves du Bac de Français.</span>,
            <span>À l'écrit, les élèves apprennent à structurer une <strong className="font-extrabold text-brand-darkblue">dissertation</strong>, construire un <strong className="font-extrabold text-brand-darkblue">commentaire</strong> précis et développer une argumentation claire. Un travail approfondi est mené sur la méthodologie, la construction des plans et la qualité de l'expression. Pour les élèves de la filière <strong className="font-extrabold text-brand-darkblue">STMG</strong>, la préparation est spécifiquement adaptée aux exigences de l'épreuve, avec un travail approfondi sur la <strong className="font-extrabold text-brand-darkblue">contraction de texte et l'essai (épreuve de synthèse)</strong>, ainsi que sur la capacité à restituer et structurer efficacement les idées.</span>,
            <span>À l'oral, nous préparons les élèves à analyser un texte, à structurer leur prise de parole et à interagir avec le jury avec assurance.</span>,
            <span>Des entraînements réguliers permettent de gagner en fluidité, en clarté et en confiance.</span>,
          ],
        },
        {
          title: "Une préparation adaptée pour chaque profil et encadrée par des enseignants experts",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Une méthodologie progressive et orientée résultats</span>,
            <span>La préparation s'appuie sur une progression structurée :</span>,
            <span>• Acquisition des méthodes fondamentales</span>,
            <span>• Entraînement sur des sujets types et annales</span>,
            <span>• Corrections détaillées</span>,
            <span>• Simulations en conditions réelles</span>,
            <span>Cette approche permet d'ancrer les bons réflexes et d'optimiser la gestion du temps et du stress le jour de l'examen.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un encadrement par des enseignants experts</span>,
            <span>Les élèves sont accompagnés par nos <strong className="font-extrabold text-brand-darkblue">professeurs expérimentés</strong>, spécialisés dans l'enseignement du français et les exigences du Baccalauréat.</span>,
            <span>Certains d'entre eux ont été <strong className="font-extrabold text-brand-darkblue">correcteurs d'épreuves</strong>, ce qui leur permet de transmettre une compréhension précise des attentes du jury et des critères d'évaluation.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une préparation adaptée à chaque profil</span>,
            <span>Les séances sont proposées en petits groupes de 2 à 4 élèves maximum ou en format individuel, afin de garantir un suivi personnalisé.</span>,
            <span>Cet accompagnement s'adresse aussi bien aux élèves souhaitant consolider leurs bases qu'à ceux disposant d'un bon niveau et visant l'excellence.</span>,
          ],
        },
        {
          title: "À qui s'adresse la préparation du Bac de Français ?",
          paragraphs: [
            <span>Cette préparation s'adresse aux élèves de Première qui souhaitent :</span>,
            <span>• Consolider leurs connaissances sur les œuvres et objets d'étude au programme</span>,
            <span>• Renforcer leur maîtrise des méthodes de la dissertation, du commentaire de texte ou de la contraction de texte et de l'essai</span>,
            <span>• Développer leurs capacités d'analyse, d'argumentation et de rédaction</span>,
            <span>• Gagner en aisance et en confiance pour l'épreuve orale</span>,
            <span>• Approfondir leur culture littéraire et enrichir leurs références</span>,
            <span>• Préparer efficacement les épreuves écrites et orales du Baccalauréat</span>,
            <span>• Viser une excellente note et valoriser leur dossier académique</span>,
            <span>• Acquérir des méthodes de travail utiles pour la Terminale, le Grand Oral et les études supérieures</span>,
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST POUR PRÉPARER LE BAC DE FRANÇAIS ?",
        bullets: [
          "Une préparation rigoureuse et des enseignants experts et anciens correcteurs du Bac",
          "Un format flexible et personnalisé avec des groupes restreints (2 à 4 élèves) ou un suivi individuel en fonction du besoin",
          "Une méthodologie orientée progression - méthodes, annales, et simulations pour gagner en efficacité, en confiance et en autonomie",
          "Une parfaite maîtrise des attentes du programme, des épreuves et des critères d'évaluation",
          "Une préparation qui s'inscrit dans une logique de réussite au lycée, d'orientation et de préparation des études supérieures",
          "Un levier de réussite académique et de valorisation du dossier post-bac",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez accompagner votre enfant vers une réussite solide et maîtrisée au Bac de Français ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver une séance découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-bac"]}
      faqTitle="Préparation au Baccalauréat : questions fréquentes"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux épreuves du Bac."
      next={{ label: "Bac de Spécialités", to: "/prepas-bac/specialites" }}
    />
  );
}
