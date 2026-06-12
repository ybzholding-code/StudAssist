export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  key: string;
  label: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: Record<string, FaqCategory> = {
  about: {
    key: "about",
    label: "À propos de STUDASSIST",
    items: [
      {
        q: "Qu'est-ce que STUDASSIST ?",
        a: "STUDASSIST est un cabinet de conseil dédié à l'élève et à l'étudiant, spécialisé dans le soutien scolaire, l'orientation, la préparation aux examens et l'accompagnement vers les études supérieures au Maroc et à l'international.",
      },
      {
        q: "À qui s'adresse STUDASSIST ?",
        a: "Nos services s'adressent aux élèves du primaire au lycée, ainsi qu'aux étudiants souhaitant intégrer des formations sélectives ou poursuivre leurs études à l'étranger.",
      },
      {
        q: "En quoi STUDASSIST se distingue-t-il des centres de soutien scolaire classiques ?",
        a: "STUDASSIST propose un accompagnement global et personnalisé, alliant exigence académique, méthodologie structurée, orientation stratégique et suivi individualisé sur le long terme.",
      },
    ],
  },

  method: {
    key: "method",
    label: "Méthodologie & accompagnement pédagogique",
    items: [
      {
        q: "Comment se déroule l'accompagnement chez STUDASSIST ?",
        a: "Chaque élève bénéficie d'un diagnostic initial, d'objectifs clairs et d'un suivi pédagogique régulier, adaptés à son niveau, à ses besoins et à son projet académique.",
      },
      {
        q: "Les accompagnements sont-ils personnalisés ?",
        a: "Oui. Tous nos accompagnements sont conçus sur mesure, en fonction du profil, des objectifs et du potentiel de chaque élève.",
      },
      {
        q: "Les cours sont-ils individuels ou en petits groupes ?",
        a: "Nous proposons des cours individuels ainsi que des groupes très restreints de 2 à 4 élèves maximum, afin de garantir un suivi de qualité et une progression optimale.",
      },
      {
        q: "Les enseignants de STUDASSIST sont-ils spécialisés ?",
        a: "Oui. Tous nos enseignants sont des professeurs expérimentés et spécialisés dans leur matière et leur niveau d'enseignement, avec une expérience avérée dans les systèmes français, bilingues et internationaux.",
      },
      {
        q: "Proposez-vous un suivi des progrès de l'élève ?",
        a: "Oui. Des rapports pédagogiques réguliers, accessibles via notre plateforme digitale, permettent aux familles de suivre l'évolution académique et méthodologique de l'élève.",
      },
    ],
  },

  soutien: {
    key: "soutien",
    label: "Soutien scolaire, examens et stages",
    items: [
      {
        q: "Quelles matières sont couvertes par le soutien scolaire chez STUDASSIST ?",
        a: "Nous couvrons l'ensemble des matières du collège et du lycée (systèmes français, bilingues et internationaux), ainsi que certaines matières du supérieur selon les parcours.",
      },
      {
        q: "Préparez-vous aux examens officiels ?",
        a: "Oui. Nous préparons notamment au Brevet, au Baccalauréat (épreuves de spécialités, philosophie, Grand Oral), ainsi qu'aux concours post-bac.",
      },
      {
        q: "Proposez-vous des stages intensifs pendant les vacances scolaires ?",
        a: "Oui. Des stages de vacances sont organisés pour consolider les acquis, combler les lacunes ou préparer efficacement un examen ou une échéance importante.",
      },
    ],
  },

  orientation: {
    key: "orientation",
    label: "Orientation scolaire & études supérieures",
    items: [
      {
        q: "Proposez-vous un accompagnement en orientation scolaire ?",
        a: "Oui. L'orientation est au cœur de notre expertise : choix des spécialités, choix des filières, sélection des établissements et construction d'un projet cohérent et réaliste.",
      },
      {
        q: "Accompagnez-vous les candidatures post-bac ?",
        a: "Oui. Nous accompagnons les élèves dans la constitution, l'optimisation et la gestion de leurs dossiers de candidatures au Maroc et à l'international.",
      },
      {
        q: "Aidez-vous les étudiants pour les études à l'étranger ?",
        a: "Oui. STUDASSIST accompagne les étudiants vers plus de 20 destinations d'études, de la définition du projet jusqu'aux démarches administratives.",
      },
    ],
  },

  concours: {
    key: "concours",
    label: "Certifications & concours",
    items: [
      {
        q: "Préparez-vous aux certifications de langues ?",
        a: "Oui. Nous proposons des préparations aux certifications suivantes : IELTS, TOEFL, SAT, DELF, DALF, DELE, Goethe.",
      },
      {
        q: "Proposez-vous des préparations aux concours ?",
        a: "Oui. Nous préparons aux concours des grandes écoles : écoles de commerce, d'ingénierie, d'architecture, ainsi qu'aux filières sélectives comme la médecine, la pharmacie et la dentisterie.",
      },
    ],
  },

  locations: {
    key: "locations",
    label: "Espaces & localisation",
    items: [
      {
        q: "Où se situe STUDASSIST ?",
        a: "STUDASSIST est situé à Casablanca, dans un espace de 500 m² entièrement dédié aux élèves et aux étudiants.",
      },
      {
        q: "Disposez-vous d'un espace de travail sur place ?",
        a: "Oui. Nos élèves bénéficient d'un environnement de travail premium incluant coworking étudiant, bibliothèque et espaces de détente.",
      },
    ],
  },

  organization: {
    key: "organization",
    label: "Organisation & fonctionnement",
    items: [
      {
        q: "Quels sont les horaires de travail de STUDASSIST ?",
        a: "STUDASSIST accueille les élèves du lundi au samedi, avec des horaires flexibles adaptés aux emplois du temps scolaires, en semaine après les cours et le samedi.",
      },
      {
        q: "Quels sont les jours d'ouverture de STUDASSIST ?",
        a: "Nous sommes ouverts du lundi au samedi. Des aménagements spécifiques peuvent être proposés pendant les vacances scolaires et les stages intensifs.",
      },
      {
        q: "Comment se fait la communication avec STUDASSIST ?",
        a: "La communication se fait de manière fluide et réactive via WhatsApp, téléphone ou email, selon les préférences des familles, avec des échanges réguliers et transparents.",
      },
    ],
  },

  international: {
    key: "international",
    label: "Accompagnement à distance & international",
    items: [
      {
        q: "STUDASSIST accompagne-t-il les élèves à distance, au Maroc et à l'international ?",
        a: "Oui. STUDASSIST propose un accompagnement à distance et en visioconférence, permettant de suivre les élèves partout au Maroc et dans le monde, avec le même niveau d'exigence et de qualité qu'en présentiel.",
      },
      {
        q: "STUDASSIST convient-il aux élèves internationaux ou issus de systèmes étrangers ?",
        a: "Oui. Nous accompagnons des élèves issus des systèmes français, marocains, bilingues, internationaux et anglophones.",
      },
    ],
  },

  signup: {
    key: "signup",
    label: "Inscription & premier contact",
    items: [
      {
        q: "Comment s'inscrire chez STUDASSIST ?",
        a: "Il suffit de nous contacter ou de réserver un cours découverte ou un rendez-vous d'orientation via notre site internet ou par téléphone.",
      },
      {
        q: "Proposez-vous un premier rendez-vous avant l'inscription ?",
        a: "Oui. Nous proposons un cours découverte ou une séance d'orientation, afin d'évaluer les besoins de l'élève et de proposer un accompagnement adapté.",
      },
    ],
  },

  lycee: {
    key: "lycee",
    label: "Soutien scolaire collège & lycée",
    items: [
      {
        q: "Pourquoi faire appel à un soutien scolaire au collège ou au lycée ?",
        a: "Le collège et le lycée sont des périodes où les exigences académiques augmentent progressivement. Le soutien scolaire permet de consolider les connaissances, de développer une méthode de travail efficace, de gagner en autonomie et d'aborder les examens avec davantage de confiance.",
      },
      {
        q: "Mon enfant a de bonnes notes. Le soutien scolaire peut-il malgré tout lui être utile ?",
        a: "Oui. Le soutien scolaire ne s'adresse pas uniquement aux élèves en difficulté. Il peut également aider un élève à renforcer sa méthodologie, approfondir certaines matières, préparer une filière sélective ou viser un niveau d'excellence académique.",
      },
      {
        q: "Quelles matières peuvent être accompagnées ?",
        a: "Nous accompagnons les élèves dans les principales matières du collège et du lycée, notamment les mathématiques, la physique-chimie, les SVT, le français, l'anglais, l'économie ou encore la philosophie, selon leur niveau et leurs objectifs.",
      },
      {
        q: "Travaillez-vous également sur la méthodologie et l'organisation ?",
        a: "Oui. La réussite scolaire dépend autant des connaissances que de la méthode de travail. Nous aidons les élèves à mieux s'organiser, gérer leur temps, préparer leurs évaluations, prendre des notes efficacement et développer des habitudes de travail durables.",
      },
      {
        q: "Mon enfant manque de motivation. Pouvez-vous l'aider ?",
        a: "Oui. Les difficultés scolaires sont souvent liées à une perte de confiance ou à un manque de projection dans l'avenir. Nous aidons les élèves à retrouver du sens dans leurs apprentissages en travaillant sur leurs objectifs, leurs points forts et leur projet d'orientation.",
      },
      {
        q: "Quel lien existe-t-il entre soutien scolaire et orientation ?",
        a: "Chez STUDASSIST, nous considérons que les performances académiques et l'orientation sont étroitement liées. Les choix d'études supérieures dépendent souvent du niveau de l'élève dans certaines matières, de sa méthodologie et de sa capacité à construire un dossier solide. C'est pourquoi nous accompagnons simultanément la réussite scolaire et la réflexion sur le projet d'avenir.",
      },
      {
        q: "Le soutien scolaire peut-il aider à préparer le Baccalauréat ?",
        a: "Oui. Nous accompagnons les élèves dans leurs révisions, la consolidation des notions essentielles, l'entraînement aux épreuves et la gestion du stress afin de les préparer dans les meilleures conditions aux examens officiels.",
      },
      {
        q: "Préparez-vous également les élèves aux concours et certifications ?",
        a: "Oui. Nous proposons des préparations adaptées aux concours post-bac ainsi qu'aux certifications de langues telles que l'IELTS, le TOEFL ou le TOEIC. Ces préparations reposent sur une méthodologie structurée et un entraînement progressif adapté au niveau de chaque élève.",
      },
      {
        q: "Les intervenants sont-ils formés à la méthodologie STUDASSIST ?",
        a: "Oui. Tous nos intervenants sont des enseignants certifiés qui ont l'expérience de la classe et qui ont préalablement été formés aux méthodes et aux standards d'accompagnement développés par STUDASSIST afin de garantir un suivi cohérent, structuré et personnalisé.",
      },
      {
        q: "Comment les parents sont-ils associés au suivi de leur enfant ?",
        a: "Nous accordons une place importante à la communication avec les familles. Une communication centralisée par écrit et des points réguliers permettent de suivre les progrès réalisés, d'identifier les axes d'amélioration et d'ajuster l'accompagnement en fonction des objectifs de l'élève.",
      },
    ],
  },

  primaire: {
    key: "primaire",
    label: "Soutien scolaire primaire",
    items: [
      {
        q: "Pourquoi faire appel à un soutien scolaire dès le primaire ?",
        a: "L'école primaire constitue une étape essentielle dans la construction des apprentissages. Un accompagnement précoce permet de consolider les fondamentaux en lecture, écriture, mathématiques et méthodologie afin d'éviter que les difficultés ne s'installent durablement.",
      },
      {
        q: "Quels sont les signes qui peuvent indiquer qu'un enfant a besoin d'aide ?",
        a: "Une baisse de motivation, des difficultés en lecture, un manque de concentration, des devoirs devenus source de stress ou une perte de confiance peuvent être des indicateurs qu'un accompagnement serait bénéfique.",
      },
      {
        q: "Mon enfant a de bons résultats. Le soutien scolaire peut-il quand même lui être utile ?",
        a: "Oui. Le soutien scolaire ne s'adresse pas uniquement aux enfants en difficulté. Il peut également aider à développer l'autonomie, la méthodologie, la confiance en soi et préparer sereinement l'entrée au collège.",
      },
      {
        q: "Mon enfant rencontre des difficultés en lecture. Pouvez-vous l'aider ?",
        a: "Oui. La lecture est au cœur de la réussite scolaire. Nous travaillons la fluidité, la compréhension, le vocabulaire et le plaisir de lire afin de renforcer durablement les compétences de l'enfant.",
      },
      {
        q: "Le soutien scolaire peut-il aider mon enfant à gagner en confiance ?",
        a: "Absolument. Les difficultés scolaires ont souvent un impact sur l'estime de soi. Notre accompagnement vise à valoriser les progrès, encourager les efforts et permettre à chaque enfant de retrouver confiance dans ses capacités.",
      },
      {
        q: "Qu'est-ce que le brain training ?",
        a: "Le brain training regroupe des activités destinées à développer les capacités cognitives de l'enfant : attention, mémoire, logique, concentration, créativité et résolution de problèmes. Ces compétences jouent un rôle essentiel dans la réussite scolaire.",
      },
      {
        q: "Quels types d'ateliers proposez-vous ?",
        a: "Nous proposons notamment des ateliers de calcul mental, des activités inspirées de la pédagogie Montessori, des jeux de logique, des exercices de mémoire ainsi que des ateliers d'arts plastiques favorisant la créativité et la concentration.",
      },
      {
        q: "Comment préparez-vous les élèves à l'entrée au collège ?",
        a: "Nous travaillons progressivement l'autonomie, l'organisation, la méthodologie et la consolidation des acquis fondamentaux afin d'aborder le collège avec davantage de confiance et de sérénité.",
      },
      {
        q: "Les intervenants sont-ils formés à la méthodologie STUDASSIST ?",
        a: "Oui. Tous nos intervenants sont formés aux méthodes et aux standards d'accompagnement développés par STUDASSIST afin de garantir un suivi cohérent, structuré et adapté à chaque enfant.",
      },
      {
        q: "Comment les parents sont-ils impliqués dans l'accompagnement ?",
        a: "Nous privilégions une communication régulière avec les familles afin de suivre les progrès de l'enfant, partager les observations pédagogiques et travailler ensemble à sa réussite.",
      },
    ],
  },

  superieur: {
    key: "superieur",
    label: "Soutien scolaire dans le supérieur",
    items: [
      {
        q: "Pourquoi faire appel à un accompagnement académique dans l'enseignement supérieur ?",
        a: "Les études supérieures demandent davantage d'autonomie, de rigueur et de méthode que le lycée. Un accompagnement personnalisé permet de mieux comprendre les cours, renforcer ses acquis, développer des méthodes de travail efficaces et améliorer ses performances académiques.",
      },
      {
        q: "À quels étudiants s'adresse cet accompagnement ?",
        a: "Notre accompagnement s'adresse aux étudiants en université, écoles de commerce, écoles d'ingénieurs, études de santé, BTS, Bachelor, Master ou MSc qui souhaitent surmonter des difficultés académiques, gagner en méthodologie ou préparer la suite de leur parcours.",
      },
      {
        q: "Quelles matières peuvent être accompagnées ?",
        a: "Nous proposons un accompagnement dans de nombreuses disciplines du supérieur, notamment les mathématiques, l'algèbre, les probabilités, les statistiques, la physique, la biochimie, l'informatique, l'économie, la finance, la comptabilité, le droit ou encore l'anglais académique.",
      },
      {
        q: "Travaillez-vous également la méthodologie universitaire ?",
        a: "Oui. La réussite dans le supérieur repose autant sur les connaissances que sur l'organisation personnelle. Nous aidons les étudiants à optimiser leurs méthodes de travail, leur gestion du temps, leur préparation des partiels et leur efficacité dans les révisions.",
      },
      {
        q: "J'ai validé mon année mais je rencontre encore des difficultés. Est-ce utile de poursuivre l'accompagnement ?",
        a: "Oui. De nombreux étudiants réussissent leurs examens tout en conservant certaines lacunes ou difficultés méthodologiques. Un accompagnement ciblé permet de consolider les acquis et de préparer plus sereinement les années suivantes.",
      },
      {
        q: "Chez STUDASSIST peut-on m'aider à préparer une admission en Master ou en MSc ?",
        a: "Absolument. Au-delà de la réussite académique, nous accompagnons les étudiants dans la construction de leur projet de poursuite d'études, la préparation de leurs candidatures et la valorisation de leur parcours en vue d'intégrer des Masters ou MSc sélectifs au Maroc ou à l'international.",
      },
      {
        q: "Proposez-vous une préparation au GMAT et au TAGE MAGE ?",
        a: "Oui. Nous accompagnons les étudiants dans la préparation des principaux tests d'admission utilisés par les écoles de commerce et certains programmes de Master. Nos préparations reposent sur une méthodologie structurée, des entraînements réguliers et un suivi personnalisé.",
      },
      {
        q: "Préparez-vous également les certifications de langues ?",
        a: "Oui. Nous proposons des préparations à l'IELTS et au TOEFL, souvent exigés pour les candidatures internationales, les échanges universitaires ou l'admission dans certains Masters et MSc.",
      },
      {
        q: "Quel lien existe-t-il entre soutien scolaire et orientation ?",
        a: "Chez STUDASSIST, nous considérons que la réussite académique et le projet d'études sont étroitement liés. Les performances universitaires influencent souvent les possibilités de spécialisation, de poursuite d'études et d'admission dans des formations sélectives. C'est pourquoi notre accompagnement intègre également une réflexion sur l'orientation et l'évolution du parcours académique.",
      },
      {
        q: "Les intervenants sont-ils formés à la méthodologie STUDASSIST ?",
        a: "Oui. Tous nos intervenants sont formés aux méthodes et aux standards d'accompagnement développés par STUDASSIST afin de garantir un suivi cohérent, structuré et personnalisé pour chaque étudiant.",
      },
    ],
  },

  "prepas-bac": {
    key: "prepas-bac",
    label: "Préparation au Baccalauréat",
    items: [
      {
        q: "Pourquoi suivre une préparation spécifique au Baccalauréat ?",
        a: "Les épreuves du Baccalauréat reposent sur des méthodes, des attentes et des critères d'évaluation précis. Une préparation adaptée permet de renforcer les connaissances, maîtriser les méthodologies attendues et gagner en confiance à l'approche des examens.",
      },
      {
        q: "À partir de quand est-il conseillé de commencer la préparation ?",
        a: "L'idéal est de commencer plusieurs mois avant les épreuves afin de disposer du temps nécessaire pour consolider les acquis, travailler la méthodologie et s'entraîner régulièrement. Toutefois, un accompagnement ciblé peut également être mis en place plus tard dans l'année selon les besoins de l'élève.",
      },
      {
        q: "Préparez-vous toutes les épreuves du Baccalauréat ?",
        a: "Oui. STUDASSIST accompagne les élèves dans la préparation du Bac de Français, des épreuves de spécialités, de la Philosophie et du Grand Oral, avec une approche adaptée aux spécificités de chaque examen.",
      },
      {
        q: "Mon enfant a déjà de bons résultats. Cette préparation peut-elle lui être utile ?",
        a: "Absolument. Nos accompagnements ne s'adressent pas uniquement aux élèves en difficulté. Ils permettent également aux élèves performants de renforcer leur méthodologie, viser d'excellents résultats et optimiser leur dossier pour les candidatures post-bac.",
      },
      {
        q: "Comment se déroulent les séances ?",
        a: "Les séances sont proposées en format individuel ou en petits groupes de 2 à 4 élèves maximum selon les préparations. Ce format favorise les échanges, le suivi personnalisé et une progression adaptée à chaque profil.",
      },
      {
        q: "Travaillez-vous uniquement les connaissances ou également la méthodologie ?",
        a: "La méthodologie constitue un pilier central de notre accompagnement. Nous aidons les élèves à maîtriser les méthodes de la dissertation, du commentaire de texte, de l'explication de texte, de l'argumentation ou encore de la prise de parole à l'oral.",
      },
      {
        q: "Préparez-vous également le Grand Oral ?",
        a: "Oui. Nous accompagnons les élèves dans le choix de leurs questions, la construction de leur présentation, la gestion du stress, la prise de parole et la préparation des échanges avec le jury.",
      },
      {
        q: "Quel lien existe-t-il entre la préparation au Bac et l'orientation post-bac ?",
        a: "Les résultats obtenus au Baccalauréat, les spécialités choisies ainsi que les compétences développées dans les différentes épreuves jouent un rôle important dans les candidatures aux études supérieures. Chez STUDASSIST, nous veillons à inscrire chaque préparation dans une logique globale de réussite académique et d'orientation.",
      },
      {
        q: "Les enseignants sont-ils spécialisés dans les épreuves préparées ?",
        a: "Oui. Les élèves sont accompagnés par des enseignants experts de leur discipline, maîtrisant les programmes, les attentes des examens et les critères d'évaluation du Baccalauréat.",
      },
      {
        q: "Pourquoi choisir STUDASSIST pour préparer le Baccalauréat ?",
        a: "STUDASSIST propose une approche combinant expertise académique, méthodologie, suivi personnalisé et accompagnement à l'orientation. Notre objectif est de permettre à chaque élève de maximiser ses résultats tout en développant des compétences utiles pour les études supérieures et son avenir professionnel.",
      },
    ],
  },
  "prepas-concours": {
    key: "prepas-concours",
    label: "Préparation aux concours",
    items: [
      {
        q: "Pourquoi suivre une préparation spécifique à un concours ?",
        a: "Les concours d'admission reposent sur des attentes, des méthodes et des critères de sélection particuliers. Une préparation spécifique permet d'acquérir les bons réflexes, de développer une méthodologie adaptée et d'optimiser ses performances le jour des épreuves.",
      },
      {
        q: "À partir de quand est-il conseillé de commencer la préparation ?",
        a: "Cela dépend du concours visé. Pour les concours les plus sélectifs, comme Sciences Po, les études de médecine ou l'architecture, il est souvent recommandé de commencer dès la Première afin de développer progressivement les compétences attendues. D'autres préparations peuvent être mises en place de manière plus intensive en Terminale ou pendant les vacances scolaires.",
      },
      {
        q: "Les préparations STUDASSIST s'adressent-elles uniquement aux excellents élèves ?",
        a: "Non. Nos préparations s'adressent à tous les élèves motivés et disposant d'un projet d'études cohérent. L'objectif est d'aider chaque candidat à développer son potentiel et à maximiser ses chances de réussite, quel que soit son niveau de départ.",
      },
      {
        q: "Les préparations sont-elles proposées en groupe ou en individuel ?",
        a: "Selon le concours préparé, les accompagnements peuvent être proposés en petits groupes à effectifs réduits ou en format individuel. Dans tous les cas, nous privilégions un suivi personnalisé permettant d'adapter le travail aux besoins de chaque élève.",
      },
      {
        q: "Travaillez-vous uniquement les connaissances académiques ?",
        a: "Non. La réussite à un concours repose également sur la méthodologie, la gestion du temps, les stratégies de réponse, l'organisation du travail et la capacité à performer dans un environnement sélectif. Ces dimensions font partie intégrante de nos préparations.",
      },
      {
        q: "Proposez-vous des concours blancs et des entraînements en conditions réelles ?",
        a: "Oui. Des entraînements réguliers, exercices ciblés, simulations et concours blancs permettent aux élèves de se familiariser avec les épreuves et de développer les automatismes attendus le jour du concours.",
      },
      {
        q: "Les enseignants connaissent-ils réellement les concours préparés ?",
        a: "Oui. Les élèves sont accompagnés par des enseignants et intervenants spécialisés, maîtrisant parfaitement les exigences, les formats d'épreuves et les attentes des concours qu'ils préparent.",
      },
      {
        q: "Les préparations incluent-elles un accompagnement à l'orientation ?",
        a: "Oui. Selon les besoins de l'élève, la préparation peut être complétée par un accompagnement en orientation afin de confirmer la cohérence du projet d'études, identifier les formations les plus adaptées et construire une stratégie de candidature pertinente.",
      },
      {
        q: "Pouvez-vous également accompagner la constitution des dossiers de candidature ?",
        a: "Oui. Pour certaines formations, la réussite ne dépend pas uniquement du concours. Nous pouvons accompagner les élèves dans la préparation de leur dossier de candidature, la rédaction des lettres de motivation, les rubriques Parcoursup, les entretiens de motivation ou encore certaines démarches administratives liées aux admissions.",
      },
      {
        q: "Pourquoi choisir STUDASSIST pour préparer un concours ?",
        a: "Depuis plus de 6 ans, STUDASSIST accompagne les élèves dans l'accès aux formations les plus sélectives au Maroc et à l'international. Notre approche combine préparation académique, méthodologie, orientation, stratégie de candidature et suivi personnalisé afin de maximiser les chances d'admission de chaque élève.",
      },
    ],
  },

  "admin-logement": {
    key: "admin-logement",
    label: "Démarches administratives et logement étudiant à l'étranger",
    items: [
      {
        q: "À quel moment faut-il commencer les démarches administratives après une admission ?",
        a: "Il est recommandé d'entamer les démarches dès que l'admission dans l'établissement est confirmée. Certaines procédures, comme les demandes de visa, les équivalences de diplômes ou certaines formalités administratives locales, peuvent nécessiter plusieurs semaines voire plusieurs mois de traitement.",
      },
      {
        q: "Dans quels pays STUDASSIST accompagne-t-il les étudiants ?",
        a: "Nous accompagnons les étudiants dans de nombreuses destinations d'études, notamment la France, l'Espagne, la Belgique, le Royaume-Uni, le Canada, la Suisse et d'autres pays accueillant des étudiants internationaux. L'accompagnement est adapté aux exigences spécifiques de chaque destination.",
      },
      {
        q: "Quelles démarches administratives peuvent être prises en charge ?",
        a: "Selon les besoins de l'étudiant, nous pouvons accompagner les démarches liées au visa étudiant, au titre de séjour, à l'assurance santé, à l'ouverture d'un compte bancaire, aux équivalences de diplômes, aux traductions officielles, aux apostilles et aux différentes formalités nécessaires à l'installation à l'étranger.",
      },
      {
        q: "Pourquoi se faire accompagner dans les démarches administratives ?",
        a: "Les procédures administratives varient fortement selon les pays et peuvent être complexes à appréhender lorsqu'elles sont réalisées à distance. Un accompagnement structuré permet de gagner du temps, d'éviter les erreurs et de sécuriser l'ensemble du processus avant le départ.",
      },
      {
        q: "À quel moment faut-il commencer la recherche de logement ?",
        a: "Dans les destinations les plus demandées, il est conseillé d'anticiper la recherche plusieurs mois avant la rentrée universitaire. Certains marchés étudiants sont particulièrement tendus et les logements disponibles se louent rapidement.",
      },
      {
        q: "Quels types de logements pouvez-vous aider à trouver ?",
        a: "Nous accompagnons les étudiants dans la recherche de différents types de logements : résidences étudiantes, studios, appartements individuels ou colocations, en fonction du budget, du mode de vie et des préférences de chaque étudiant.",
      },
      {
        q: "Pourquoi la constitution du dossier locataire est-elle si importante ?",
        a: "Dans de nombreux pays, les propriétaires sélectionnent les candidats sur dossier. Pour les étudiants internationaux, il est souvent nécessaire d'apporter des garanties complémentaires afin de rassurer les bailleurs. Un dossier complet et bien présenté augmente significativement les chances d'obtenir un logement.",
      },
      {
        q: "Comment sécuriser une recherche de logement à distance ?",
        a: "La recherche à distance peut exposer les étudiants à des annonces trompeuses ou à des arnaques. Nous aidons les familles à vérifier les informations, analyser les offres et sélectionner des solutions fiables afin de sécuriser leur choix.",
      },
      {
        q: "Peut-on bénéficier à la fois de l'accompagnement administratif et de l'accompagnement logement ?",
        a: "Oui. De nombreuses familles choisissent de combiner les deux services afin de bénéficier d'un accompagnement complet, depuis l'obtention de l'admission jusqu'à l'installation effective de l'étudiant dans son pays d'études.",
      },
      {
        q: "Pourquoi choisir STUDASSIST pour accompagner son installation à l'étranger ?",
        a: "Depuis plus de 7 ans, STUDASSIST accompagne les élèves et leurs familles dans leurs projets d'études à l'international. Notre approche globale nous permet d'intervenir à chaque étape du parcours : orientation, admissions, certifications de langues, démarches administratives, recherche de logement et installation. L'objectif est de sécuriser l'ensemble du projet et de permettre à l'étudiant d'aborder sa rentrée dans les meilleures conditions.",
      },
    ],
  },

  certifications: {
    key: "certifications",
    label: "Certifications de langues",
    items: [
      {
        q: "Pourquoi passer une certification de langue ?",
        a: "Les certifications de langue permettent d'attester officiellement d'un niveau linguistique auprès des universités, grandes écoles, organismes de mobilité internationale ou employeurs. Elles constituent souvent une étape indispensable dans le cadre d'un projet d'études ou de carrière à l'international.",
      },
      {
        q: "Quelle certification choisir : IELTS, TOEFL, TCF, DALF ou DELE ?",
        a: "Le choix dépend principalement de votre projet. L'IELTS et le TOEFL sont généralement requis pour les études dans des établissements anglophones. Le TCF et le DALF permettent d'attester d'un niveau de français, notamment pour les études en France. Le DELE certifie le niveau d'espagnol et est souvent demandé pour les études en Espagne. Chez STUDASSIST, nous accompagnons chaque élève dans le choix de la certification la plus adaptée à son projet.",
      },
      {
        q: "Quel niveau ou quel score faut-il obtenir ?",
        a: "Les exigences varient selon les établissements et les formations visés. À titre indicatif : IELTS : généralement entre 6.5 et 7.5 ; TOEFL : souvent entre 80 et 100+ ; TCF / DALF : niveau B2 à C1 ; DELE : niveau B2 à C1. Nous aidons chaque élève à définir un objectif réaliste et cohérent avec ses ambitions académiques.",
      },
      {
        q: "À partir de quand faut-il commencer sa préparation ?",
        a: "Plus la préparation est anticipée, meilleures sont les chances d'atteindre le niveau visé. Idéalement, il est recommandé de commencer plusieurs mois avant la date de l'examen afin de travailler progressivement les compétences évaluées et de multiplier les entraînements.",
      },
      {
        q: "Les certifications évaluent-elles uniquement le niveau de langue ?",
        a: "Non. Elles évaluent également la capacité à mobiliser ses compétences dans un format d'examen spécifique, souvent sous contrainte de temps. La réussite repose donc autant sur la maîtrise de la langue que sur la méthodologie et la connaissance des épreuves.",
      },
      {
        q: "Les préparations STUDASSIST sont-elles proposées en groupe ou en individuel ?",
        a: "Nous proposons les deux formats. Les élèves peuvent être accompagnés en petits groupes à effectifs réduits ou en format individuel, selon leurs besoins, leurs objectifs et leurs échéances.",
      },
      {
        q: "Comment évaluez-vous le niveau initial de l'élève ?",
        a: "Chaque accompagnement débute par un test de positionnement permettant d'identifier le niveau de départ, les points forts et les axes de progression. Ce diagnostic permet de construire un programme de travail personnalisé.",
      },
      {
        q: "Les certifications de langues sont-elles importantes pour les candidatures à l'international ?",
        a: "Oui. Dans de nombreux cas, elles constituent une condition d'admission indispensable. Un bon score permet également de renforcer la crédibilité d'un dossier, d'accéder à des formations plus sélectives et parfois d'obtenir des bourses.",
      },
      {
        q: "Les préparations aux certifications peuvent-elles être combinées avec un accompagnement en orientation ?",
        a: "Oui. Chez STUDASSIST, les certifications de langues s'inscrivent dans une démarche globale de construction du projet d'études. Nous pouvons accompagner les élèves dans leur orientation, le choix des établissements, la définition des objectifs de score et la préparation des candidatures.",
      },
      {
        q: "Pourquoi choisir STUDASSIST pour préparer une certification de langue ?",
        a: "Depuis plus de 6 ans, nous accompagnons les élèves dans leurs projets d'études au Maroc et à l'international et 100% d'entre eux décrochent l'une des écoles du TOP 3 de leurs choix ! Notre approche combine évaluation du niveau initial, méthodologie, entraînements ciblés, suivi personnalisé et accompagnement du projet d'études afin de maximiser les chances de réussite aux certifications et aux admissions.",
      },
    ],
  },
};

/** Helper: collect the Q&A items from one or more category keys, in order. */
export function buildFaq(...keys: (keyof typeof FAQ_CATEGORIES)[]): FaqItem[] {
  return keys.flatMap((k) => FAQ_CATEGORIES[k]?.items ?? []);
}
