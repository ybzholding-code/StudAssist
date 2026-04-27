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
};

/** Helper: collect the Q&A items from one or more category keys, in order. */
export function buildFaq(...keys: (keyof typeof FAQ_CATEGORIES)[]): FaqItem[] {
  return keys.flatMap((k) => FAQ_CATEGORIES[k]?.items ?? []);
}
