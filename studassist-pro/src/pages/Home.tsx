import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowUpRight,
  Mail,
  CheckCircle2, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Star, 
  ChevronDown, 
  Rocket, 
  MessageCircle, 
  Calendar,
  ChevronRight,
  Plus,
  Compass,
  Trophy,
  Activity,
  Zap,
  FileText,
  Sparkles,
  Search,
  Target,
  Pencil,
  Play,
  Minimize,
  Maximize,
  Layout,
  Map,
  Info,
  Globe,
  UserPlus,
  Award
} from "@/src/components/ui/icons";
import Logo from "../components/Logo";
import ExpertisePoles from "../components/ExpertisePoles";
import TestimonialsSection from "../components/TestimonialsSection";
import ImageFloaters from "../components/ImageFloaters";
import { cn } from "@/src/lib/utils";

import NumberCounter from "@/src/components/ui/NumberCounter";

const RocketIllustration = () => {
  // Stable stars data
  const stars = [
    { r: 1, cy: 10, d: 1.2, dl: 0.2 },
    { r: 0.5, cy: 25, d: 1.8, dl: 0.5 },
    { r: 1.5, cy: 40, d: 1.5, dl: 0.1 },
    { r: 0.8, cy: 55, d: 1.3, dl: 0.4 },
    { r: 1.2, cy: 65, d: 1.6, dl: 0.3 },
    { r: 0.7, cy: 15, d: 1.9, dl: 0.6 },
    { r: 1.3, cy: 35, d: 1.4, dl: 0.2 },
    { r: 0.6, cy: 50, d: 1.7, dl: 0.7 },
  ];

  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-brand-teal/5 rounded-full blur-3xl scale-125 select-none" />
      
      {/* Orbital animations */}
      <div className="absolute inset-0 border-2 border-dashed border-brand-teal/10 rounded-full animate-[spin_60s_linear_infinite]" />
      <div className="absolute inset-12 border border-dashed border-brand-red/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ 
          y: [0, -15, 0],
          x: [0, 8, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10 -rotate-45"
      >
        <svg id="rocket-icon" viewBox="0 0 75 75" className="w-[180px] lg:w-[320px] drop-shadow-[0_20px_50px_rgba(104,212,248,0.3)]">
          {/* Animated Stars */}
          {stars.map((star, i) => (
            <motion.circle
              key={i}
              r={star.r}
              cy={star.cy}
              fill="#AAB7C4"
              initial={{ cx: 75, opacity: 0 }}
              animate={{ cx: [75, 75, 0, 0], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: star.d,
                repeat: Infinity,
                delay: star.dl,
                ease: "linear"
              }}
            />
          ))}
          
          {/* Rocket SVG Paths */}
          <polygon fill="#68D4F8" points="18 21 35 21 44 30 27 30"/>
          <polygon fill="#68D4F8" points="27 45 44 45 35 54 18 54"/>
          <path fill="#68D4F8" d="M30.94 47.7c-3.79-.93-6.98-2.35-9.25-4.07a14.88 14.88 0 0 0 0-12.26c2.27-1.72 5.46-3.14 9.25-4.08A14.72 14.72 0 0 1 35 37.5c0 3.98-1.55 7.59-4.06 10.2z"/>
          <path fill="#8DDEF9" d="M30.94 27.3c-3.79.93-6.98 2.35-9.25 4.07.84 1.86 1.31 3.94 1.31 6.13h12c0-3.98-1.55-7.59-4.06-10.2z"/>
          <path fill="#68D4F8" d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5c0 .77-3.49 4.4-8.94 7.37A14.83 14.83 0 0 0 59 37.5c0-2.7-.7-5.21-1.94-7.37z"/>
          <path fill="#8DDEF9" d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5h-7c0-2.7-.7-5.21-1.94-7.37z"/>
          <path fill="#ECFAFF" d="M57.06 44.87C52.94 47.12 47.7 49 42 49c-3.99 0-7.75-.47-11.06-1.3A14.72 14.72 0 0 0 35 37.5c0-3.98-1.55-7.59-4.06-10.2C34.25 26.46 38.01 26 42 26c5.7 0 10.94 1.88 15.06 4.13A14.83 14.83 0 0 1 59 37.5c0 2.7-.7 5.21-1.94 7.37z"/>
          <path fill="#FCFEFF" d="M57.06 30.13C52.94 27.88 47.7 26 42 26c-3.99 0-7.75.47-11.06 1.3A14.72 14.72 0 0 1 35 37.5h24c0-2.7-.7-5.21-1.94-7.37z"/>
          <circle cx="49.5" cy="37.5" r="3.5" fill="#68D4F8"/>
          <path fill="#8DDEF9" d="M46 37.5h7a3.5 3.5 0 0 0-7 0z"/>

          {/* Animated Flame */}
          <motion.path 
            fill="#EE4B62" 
            d="M21 37.5c0-10.04-11 0-12 0 1 0 12 10.04 12 0z"
            animate={{ 
              scaleX: [1, 1.5, 1.2, 1.6, 1],
              scaleY: [1, 1.1, 0.9, 1.2, 1],
              opacity: [1, 0.8, 1, 0.7, 1]
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "15px", originY: "37.5px" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

const faqData = [
  {
    category: "1. À propos de STUDASSIST",
    questions: [
      { q: "Qu’est-ce que STUDASSIST ?", a: "STUDASSIST est un cabinet de conseil dédié à l’élève et à l’étudiant, spécialisé dans le soutien scolaire, l’orientation, la préparation aux examens et l’accompagnement vers les études supérieures au Maroc et à l’international." },
      { q: "À qui s’adresse STUDASSIST ?", a: "Nos services s’adressent aux élèves du primaire au lycée, ainsi qu’aux étudiants souhaitant intégrer des formations sélectives ou poursuivre leurs études à l’étranger." },
      { q: "En quoi STUDASSIST se distingue-t-il des centres de soutien scolaire classiques ?", a: "STUDASSIST propose un accompagnement global et personnalisé, alliant exigence académique, méthodologie structurée, orientation stratégique et suivi individualisé sur le long terme." }
    ]
  },
  {
    category: "2. Méthodologie & accompagnement pédagogique",
    questions: [
      { q: "Comment se déroule l’accompagnement chez STUDASSIST ?", a: "Chaque élève bénéficie d’un diagnostic initial, d’objectifs clairs et d’un suivi pédagogique régulier, adaptés à son niveau, à ses besoins et à son projet académique." },
      { q: "Les accompagnements sont-ils personnalisés ?", a: "Oui. Tous nos accompagnements sont conçus sur mesure, en fonction du profil, des objectifs et du potentiel de chaque élève." },
      { q: "Les cours sont-ils individuels ou en petits groupes ?", a: "Nous proposons des cours individuels ainsi que des groupes très restreints de 2 à 4 élèves maximum, afin de garantir un suivi de qualité et une progression optimale." },
      { q: "Les enseignants de STUDASSIST sont-ils spécialisés ?", a: "Oui. Tous nos enseignants sont des professeurs expérimentés et spécialisés dans leur matière et leur niveau d’enseignement, avec une expérience avérée dans les systèmes français, bilingues et internationaux." },
      { q: "Proposez-vous un suivi des progrès de l’élève ?", a: "Oui. Des rapports pédagogiques réguliers, accessibles via notre plateforme digitale, permettent aux familles de suivre l’évolution académique et méthodologique de l’élève." }
    ]
  },
  {
    category: "3. Soutien scolaire, examens et stages",
    questions: [
      { q: "Quelles matières sont couvertes par le soutien scolaire chez STUDASSIST ?", a: "Nous couvrons l’ensemble des matières du collège et du lycée (systèmes français, bilingues et internationaux), ainsi que certaines matières du supérieur selon les parcours." },
      { q: "Préparez-vous aux examens officiels ?", a: "Oui. Nous préparons notamment au Brevet, au Baccalauréat (épreuves de spécialités, philosophie, Grand Oral), ainsi qu’aux concours post-bac." },
      { q: "Proposez-vous des stages intensifs pendant les vacances scolaires ?", a: "Oui. Des stages de vacances sont organisés pour consolider les acquis, combler les lacunes ou préparer efficacement un examen ou une échéance importante." }
    ]
  },
  {
    category: "4. Orientation scolaire & études supérieures",
    questions: [
      { q: "Proposez-vous un accompagnement en orientation scolaire ?", a: "Oui. L’orientation est au cœur de notre expertise : choix des spécialités, choix des filières, sélection des établissements et construction d’un projet cohérent et réaliste." },
      { q: "Accompagnez-vous les candidatures post-bac ?", a: "Oui. Nous accompagnons les élèves dans la constitution, l’optimisation et la gestion de leurs dossiers de candidatures au Maroc et à l’international." },
      { q: "Aidez-vous les étudiants pour les études à l’étranger ?", a: "Oui. STUDASSIST accompagne les étudiants vers plus de 20 destinations d’études, de la définition du projet jusqu’aux démarches administratives." }
    ]
  },
  {
    category: "5. Certifications & concours",
    questions: [
      { q: "Préparez-vous aux certifications de langues ?", a: "Oui. Nous proposons des préparations aux certifications suivantes : IELTS, TOEFL, SAT, DELF, DALF, DELE, Goethe." },
      { q: "Proposez-vous des préparations aux concours ?", a: "Oui. Nous préparons aux concours des grandes écoles : écoles de commerce, d’ingénierie, d’architecture, ainsi qu’aux filières sélectives comme la médecine, la pharmacie et la dentisterie." }
    ]
  },
  {
    category: "6. Espaces & localisation",
    questions: [
      { q: "Où se situe STUDASSIST ?", a: "STUDASSIST est situé à Casablanca, dans un espace de 500 m² entièrement dédié aux élèves et aux étudiants." },
      { q: "Disposez-vous d’un espace de travail sur place ?", a: "Oui. Nos élèves bénéficient d’un environnement de travail premium incluant coworking étudiant, bibliothèque et espaces de détente." }
    ]
  },
  {
    category: "7. Organisation & fonctionnement",
    questions: [
      { q: "Quels sont les horaires de travail de STUDASSIST ?", a: "STUDASSIST accueille les élèves du lundi au samedi, avec des horaires flexibles adaptés aux emplois du temps scolaires, en semaine après les cours et le samedi." },
      { q: "Quels sont les jours d’ouverture de STUDASSIST ?", a: "Nous sommes ouverts du lundi au samedi. Des aménagements spécifiques peuvent être proposés pendant les vacances scolaires et les stages intensifs." },
      { q: "Comment se fait la communication avec STUDASSIST ?", a: "La communication se fait de manière fluide et réactive via WhatsApp, téléphone ou email, selon les préférences des familles, avec des échanges réguliers et transparents." }
    ]
  },
  {
    category: "8. Accompagnement à distance & international",
    questions: [
      { q: "STUDASSIST accompagne-t-il les élèves à distance, au Maroc et à l’international ?", a: "Oui. STUDASSIST propose un accompagnement à distance et en visioconférence, permettant de suivre les élèves partout au Maroc et dans le monde, avec le même niveau d’exigence et de qualité qu’en présentiel." },
      { q: "STUDASSIST convient-il aux élèves internationaux ou issus de systèmes étrangers ?", a: "Oui. Nous accompagnons des élèves issus des systèmes français, marocains, bilingues, internationaux et anglophones." }
    ]
  },
  {
    category: "9. Inscription & premier contact",
    questions: [
      { q: "Comment s’inscrire chez STUDASSIST ?", a: "Il suffit de nous contacter ou de réserver un cours découverte ou un rendez-vous d’orientation via notre site internet ou par téléphone." },
      { q: "Proposez-vous un premier rendez-vous avant l’inscription ?", a: "Oui. Nous proposons un cours découverte ou une séance d’orientation, afin d’évaluer les besoins de l’élève et de proposer un accompagnement adapté." }
    ]
  }
];

export default function Home() {
  const [selectedCycle, setSelectedCycle] = useState("Lycée");
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [activeFaqCategory, setActiveFaqCategory] = useState(0);

  const cycles = ["Primaire", "Collège", "Lycée", "Supérieur"];
  const levelsByCycle: Record<string, string[]> = {
    "Primaire": ["Primaire"],
    "Collège": ["6ème", "5ème", "4ème", "3ème"],
    "Lycée": ["2nde", "1ère", "Terminale"],
    "Supérieur": ["PRÉPAS"]
  };

  const levelConfigs: Record<string, { title: string; subtitle: string; description: string; descriptionBold: string; links: string[]; category: string; icon: React.ReactNode }> = {
    "Primaire": {
      category: "Primaire",
      icon: <Users size={18} />,
      title: "Primaire (CP - CM2)",
      subtitle: "Construire des bases solides et développer le plaisir d’apprendre",
      description: "Le primaire est une étape fondatrice : lecture, écriture, raisonnement logique et autonomie se construisent progressivement. Chaque année consolide les acquis et prépare l’enfant à une transition sereine vers le collège.",
      descriptionBold: "Chez STUDASSIST, nous accompagnons nos élèves du primaire avec une approche ludique, bienveillante, structurée et adaptée à leur rythme d’apprentissage.",
      links: ["Soutien scolaire personnalisé", "Stages de vacances", "Brain Training (calcul mental, ateliers d’échecs, stimulation cognitive)"]
    },
    "6ème": {
      category: "Collège",
      icon: <BookOpen size={18} />,
      title: "6ème",
      subtitle: "Réussir l’entrée au collège et gagner en autonomie",
      description: "La 6ème marque une rupture importante : nouveaux enseignants, nouvelles matières, rythme plus soutenu. L’enjeu est d’aider l’élève à s’adapter sans perte de confiance.",
      descriptionBold: "STUDASSIST accompagne cette transition en renforçant les bases et en installant de bonnes méthodes de travail dès le départ.",
      links: ["Soutien scolaire", "Stages de vacances", "Cours découverte"]
    },
    "5ème": {
      category: "Collège",
      icon: <BookOpen size={18} />,
      title: "5ème",
      subtitle: "Structurer le travail et consolider les fondamentaux",
      description: "En 5ème, les exigences académiques augmentent et les connaissances s’accumulent. L’élève doit apprendre à raisonner, organiser son travail et gagner en autonomie.",
      descriptionBold: "Nous aidons nos élèves à assimiler durablement les notions clés et à adopter une méthodologie efficace.",
      links: ["Soutien scolaire", "Stages de vacances", "Cours découverte"]
    },
    "4ème": {
      category: "Collège",
      icon: <BookOpen size={18} />,
      title: "4ème",
      subtitle: "Monter en puissance et développer l’analyse",
      description: "La 4ème est une année charnière où le rythme s’intensifie et les notions deviennent plus abstraites. L’élève doit apprendre à analyser, synthétiser et gérer un volume de travail plus important.",
      descriptionBold: "STUDASSIST accompagne cette montée en exigence avec un suivi régulier et structurant.",
      links: ["Soutien scolaire", "Stages de vacances", "Cours découverte"]
    },
    "3ème": {
      category: "Collège",
      icon: <BookOpen size={18} />,
      title: "3ème",
      subtitle: "Objectif Brevet et préparation à l’orientation",
      description: "La 3ème est une année stratégique : réussite du Brevet, consolidation des acquis et premiers choix d’orientation. Un accompagnement ciblé est essentiel pour aborder le lycée avec confiance et sérénité.",
      descriptionBold: "",
      links: ["Prépa Brevet", "Soutien scolaire", "Stages de vacances", "Pré-orientation", "Cours découverte", "Rendez-vous d’orientation"]
    },
    "2nde": {
      category: "Lycée",
      icon: <GraduationCap size={18} />,
      title: "Seconde",
      subtitle: "Réussir le passage au lycée et préparer les choix de spécialités",
      description: "La Seconde est un tournant majeur : programmes beaucoup plus denses, nouvelles méthodes de travail et réflexion sur les spécialités. L’enjeu est d’acquérir rigueur, régularité et méthode tout en faisant face un grand nombre de notions à assimiler ainsi qu’aux premiers questionnements sur ses projets d’études supérieures.",
      descriptionBold: "Chez STUDASSIST nous aidons nos élèves à poser des bases solides pour la réussite au lycée et à faire des choix éclairés.",
      links: ["Soutien scolaire", "Stages de vacances", "Choix des spécialités", "Cours découverte", "Rendez-vous d’orientation"]
    },
    "1ère": {
      category: "Lycée",
      icon: <GraduationCap size={18} />,
      title: "Première",
      subtitle: "Préparer le Bac de français et sécuriser son orientation",
      description: "L’année de Première est déterminante : épreuves anticipées du bac de français, choix stratégique de la spécialité à abandonner et premières démarches d’orientation post-bac.",
      descriptionBold: "STUDASSIST accompagne ses élèves sur le plan académique et stratégique pour maximiser leurs résultats et leurs opportunités d’études supérieures.",
      links: ["Prépa Bac de français", "Soutien scolaire", "Stages de vacances", "Choix des spécialités", "Séance découverte", "Rendez-vous d’orientation", "Prépa SAT", "Prépa IELTS", "Prépa DELE", "Cours découverte"]
    },
    "Terminale": {
      category: "Lycée",
      icon: <GraduationCap size={18} />,
      title: "Terminale",
      subtitle: "Réussir le Bac et intégrer les meilleures formations",
      description: "La Terminale est une année décisive : spécialités à fort coefficient, Bac de philosophie, Grand Oral et candidatures post-bac. Chaque étape compte et chaque résultat présente un fort impact pour l’avenir de l’élève.",
      descriptionBold: "STUDASSIST propose un accompagnement global : académique, méthodologique et stratégique, pour sécuriser le dossier scolaire et optimiser les chances de réussite du projet d’orientation de l’élève.",
      links: ["Soutien scolaire", "Stages de vacances", "Prépa Bac de philo", "Prépa bac de spés", "Grand oral", "Projet d’orientation & Candidatures post-bac", "Séance découverte", "Rendez-vous d’orientation", "Prépa SAT", "Prépa IELTS", "Prépa DELE", "Cours découverte"]
    },
    "PRÉPAS": {
      category: "Supérieur",
      icon: <Rocket size={18} />,
      title: "Études supérieures",
      subtitle: "Structurer son parcours, construire une stratégie académique et accéder aux meilleures opportunités",
      description: "Les études supérieures constituent une étape déterminante dans le parcours académique. Elles impliquent des choix structurants, qu’il s’agisse d’une réorientation, d’une spécialisation ou d’une poursuite d’études à l’international.",
      descriptionBold: "Chez STUDASSIST, nous accompagnons les étudiants souhaitant optimiser leur trajectoire, renforcer leur dossier ou accéder à des formations plus sélectives, en France ou à l’international.",
      links: ["Soutien scolaire", "Réorientation", "Objectif Master", "Prépa SAT & GMAT", "Prépa IELTS & TOEFL"]
    }
  };

  const menuSections = [
    { title: "Maternelle / Primaire", items: ["Primaire"] },
    { title: "Collège", items: ["6ème", "5ème", "4ème", "3ème"] },
    { title: "Lycée", items: ["2nde", "1ère", "Terminale"] },
    { title: "Enseignement Supérieur", items: ["PRÉPAS"] }
  ];

  const levels = ["Primaire", "6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale"];

  const accentClasses: Record<string, { text: string, bg: string, border: string, shadow: string, borderLight: string }> = {
    'brand-red':      { text: 'text-sa-green',     bg: 'bg-sa-green',     border: 'border-sa-green',     shadow: 'shadow-sa-green/40',     borderLight: 'border-sa-green/10' },
    'brand-teal':     { text: 'text-sa-green',     bg: 'bg-sa-green',     border: 'border-sa-green',     shadow: 'shadow-sa-green/40',     borderLight: 'border-sa-green/10' },
    'brand-darkblue': { text: 'text-brand-darkblue', bg: 'bg-brand-darkblue', border: 'border-brand-darkblue', shadow: 'shadow-brand-darkblue/40', borderLight: 'border-brand-darkblue/10' },
  };

  const getIconForLink = (linkName: string) => {
    const name = linkName.toLowerCase();
    if (name.includes("soutien")) return <BookOpen size={14} />;
    if (name.includes("devoirs")) return <Pencil size={14} />;
    if (name.includes("calcul") || name.includes("maths")) return <Target size={14} />;
    if (name.includes("lecture") || name.includes("écrit")) return <Search size={14} />;
    if (name.includes("méthodo")) return <Layout size={14} />;
    if (name.includes("organisa")) return <Calendar size={14} />;
    if (name.includes("langues")) return <Rocket size={14} />;
    if (name.includes("physique") || name.includes("spé")) return <Activity size={14} />;
    if (name.includes("brevet") || name.includes("bac")) return <Trophy size={14} />;
    if (name.includes("orientation") || name.includes("choix")) return <Compass size={14} />;
    if (name.includes("parcoursup") || name.includes("dossier")) return <FileText size={14} />;
    if (name.includes("découverte") || name.includes("rdv")) return <Sparkles size={14} />;
    if (name.includes("stage")) return <Zap size={14} />;
    return <div className="w-1.5 h-1.5 rounded-full bg-brand-teal opacity-40"></div>;
  };

  useEffect(() => {
    if (expandedLevel) {
       document.body.style.overflow = 'hidden';
    } else {
       document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [expandedLevel]);

  const slides = [
    {
      title: <>Un avenir, ça se prépare !<br />Bienvenue chez <span className="sa-wavy sa-wavy-yellow text-sa-green">STUDASSIST</span></>,
      subtitle: "Votre partenaire réussite",
      description: "Nous vous offrons un accompagnement 360° pour vous permettre de libérer votre potentiel et atteindre vos objectifs académiques !",
      buttonText: "Découvrez-nous",
      link: "/qui-sommes-nous",
      image: "/hero-girl.webp",
      layout: 'standard',
      accent: 'brand-red',
      bgType: 'dots'
    },
    {
      title: <>ORIENTATION SCOLAIRE & <br className="hidden sm:block" />ACCOMPAGNEMENT AUX CANDIDATURES</>,
      subtitle: "Bilan d'orientation & candidatures",
      description: "Bilan d'orientation, aide aux choix des écoles, optimisation des dossiers de candidatures, préparation aux oraux, suivi des admissions… Traçons ensemble votre projet d'avenir !",
      buttonText: "Réserver mon 1er RDV",
      link: "/orientation-scolaire",
      image: "/hero-girl.webp",
      layout: 'reverse',
      accent: 'brand-teal',
      bgType: 'grid'
    },
    {
      title: "PRÉPAS-BAC",
      subtitle: "Réussir ses épreuves du bac",
      description: "Bac de Français écrit et oral, Bac de spécialités, Bac de philo, Grand Oral. Rejoignez notre programme complet pour réussir vos épreuves !",
      buttonText: "Choisir mon programme",
      link: "/prepas-bac",
      image: "/hero-girl.webp",
      layout: 'standard',
      accent: 'brand-teal',
      bgType: 'curves'
    },
    {
      title: "PRÉPAS-CONCOURS",
      subtitle: "Post-Bac & International",
      description: "Sesame, Accès, GEIPI Polytech, Avenir, Médecine Maroc, Médecine Belgique, GMAT, TAGE MAGE, SAT… Mettez toutes les chances de votre côté et décrochez vos concours avec STUDASSIST !",
      buttonText: "Choisir ma préparation",
      link: "/prepas-concours",
      image: "/hero-girl.webp",
      layout: 'reverse',
      accent: 'brand-red',
      bgType: 'abstract'
    },
    {
      title: <>CERTIFICATIONS & <br className="hidden sm:block" />TESTS DE LANGUES</>,
      subtitle: "IELTS, TOEFL, TCF, DELE…",
      description: "IELTS, TOEIC, TOEFL, DELE, TCF, DELF, DALF… Préparez-vous avec STUDASSIST pour viser les meilleures écoles internationales.",
      buttonText: "Choisir ma certification",
      link: "/certifications",
      image: "/hero-girl.webp",
      layout: 'standard',
      accent: 'brand-teal',
      bgType: 'modern'
    },
    {
      title: "ACCOMPAGNEMENT SCOLAIRE",
      subtitle: "Maths, Physique-chimie, SVT, Français…",
      description: "Maths, Physique-chimie, SVT, Français, SES, HGGSP, Philosophie… Réservez votre séance découverte pour tester notre méthodologie exclusive d'accompagnement scolaire !",
      buttonText: "Réserver mon cours découverte",
      link: "/soutien-scolaire",
      image: "/hero-girl.webp",
      layout: 'reverse',
      accent: 'brand-teal',
      bgType: 'minimal'
    },
    {
      title: <>ADMINISTRATIF & <br className="hidden sm:block" />LOGEMENT ÉTUDIANT</>,
      subtitle: "Installation à l'international",
      description: "Dossiers Visa & titre de séjour étudiant, compte bancaire à l'étranger, assurance & couverture maladie, aide à la recherche de logement étudiant… Libérez-vous de ces tracas et restez concentrés sur la réussite de vos examens.",
      buttonText: "Réserver mon RDV d'information",
      link: "/admin-logement",
      image: "/hero-girl.webp",
      layout: 'standard',
      accent: 'brand-red',
      bgType: 'service'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION — transparent so the global DecorativeBackdrop shapes (with mouse parallax) show through */}
      <section className="relative py-10 lg:py-16 overflow-hidden flex items-center min-h-[calc(100svh-120px)] lg:min-h-[calc(100svh-140px)] bg-transparent">

        <div className="container mx-auto px-6 relative z-10">
          <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Text Content - Bold, Authoritative & Clean */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/80 backdrop-blur rounded-full border border-sa-navy/10 mb-6 shadow-sm"
                  >
                    <span className="w-2 h-2 bg-sa-pink rounded-full animate-pulse" />
                    <span className="text-sa-navy font-bold text-[10px] lg:text-[11px] tracking-[0.3em] uppercase">
                      {slides[currentSlide].subtitle || "Expertise académique d'excellence"}
                    </span>
                  </motion.div>

                  <h1 className="text-[36px] sm:text-[52px] lg:text-[68px] xl:text-[76px] font-black text-sa-navy leading-[0.95] mb-6 uppercase tracking-tighter">
                    {slides[currentSlide].title}
                  </h1>

                  <p className="text-sa-ink/70 text-base lg:text-lg font-medium mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                    {slides[currentSlide].description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
                    <Link 
                      to={slides[currentSlide].link || "/contact"}
                      className={cn(
                        "group flex items-center justify-center space-x-3 px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
                        accentClasses[slides[currentSlide].accent].bg,
                        "text-white hover:scale-105 hover:-translate-y-1 active:scale-95"
                      )}
                    >
                      <span className="relative z-10">{slides[currentSlide].buttonText}</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform relative z-10" />
                    </Link>
                  </div>


                </div>

                {/* Hero Image Section — carbon copy of original studassist.ma design:
                    cut-out student photo (no frame) surrounded by floating decorative shapes */}
                <div className="order-1 lg:order-2 relative flex justify-center items-end w-full">
                  <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[600px] aspect-[4/5] mx-auto">

                    {/* Diagonal soft slash background — subtle panel behind the student */}
                    <div
                      className="absolute inset-0 bg-[#EEF4F5] rounded-[3rem] z-0 overflow-hidden"
                      style={{ clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)" }}
                    />

                    {/* Parallax decorative shapes anchored to the image */}
                    <ImageFloaters />

                    {/* ===== Cut-out student photo (no frame) ===== */}
                    <motion.img
                      key={currentSlide}
                      initial={{ scale: 0.94, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      src={slides[currentSlide].image}
                      alt="Étudiante STUDASSIST"
                      className="relative z-20 w-full h-full object-contain object-bottom drop-shadow-[0_30px_40px_rgba(28,30,70,0.15)]"
                    />

                    {/* ===== ELITE floating badge — desktop only, keeps the site's signature accent ===== */}
                    <motion.div
                      initial={{ x: 60, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                      className="hidden lg:flex absolute -bottom-6 -right-8 bg-white p-6 rounded-[2.5rem] shadow-[-20px_40px_80px_rgba(0,0,0,0.18)] z-30 border border-gray-100 items-center space-x-4"
                    >
                      <div className={cn("w-14 h-14 rounded-[1.25rem] flex items-center justify-center text-white shadow-xl transform hover:rotate-6 transition-transform shrink-0", accentClasses[slides[currentSlide].accent].bg)}>
                        <Award size={26} strokeWidth={2.2} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em] mb-1 whitespace-nowrap">Qualité certifiée</div>
                        <div className="text-base font-black text-brand-darkblue uppercase italic tracking-tight leading-none">STUDASSIST <br /> <span className="text-brand-teal">ELITE</span></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* TRUST BAR / STATS MARQUEE - Redesigned to be fully moving and combine all stats */}
      <section className="bg-brand-teal py-8 relative z-30 overflow-hidden border-y border-white/20 shadow-2xl">
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-48 bg-gradient-to-r from-brand-teal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-48 bg-gradient-to-l from-brand-teal to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[
            { icon: <UserPlus size={26} strokeWidth={2.5}  />, value: <>260<span className="text-2xl lg:text-3xl font-light ml-1.5 opacity-90">+</span></>, label: "TUTEURS EXPERTS",  theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <GraduationCap size={26} strokeWidth={2.5} />, value: <>5340<span className="text-2xl lg:text-3xl font-light ml-1.5 opacity-90">+</span></>, label: "ÉTUDIANTS", theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <BookOpen size={26} strokeWidth={2.5}  />, value: <>280<span className="text-2xl lg:text-3xl font-light ml-1.5 opacity-90">+</span></>, label: "FORMATIONS",       theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <Users size={26} strokeWidth={2.5}     />, value: <>3<span className="mx-2 text-2xl lg:text-3xl font-light opacity-90">à</span>4</>, label: "ÉLÈVES MAX / CLASSE", theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <Star size={26} strokeWidth={2.5}      />, value: <>+3.7<span className="text-xl lg:text-2xl font-bold ml-2 opacity-90 tracking-widest uppercase">Pts</span></>, label: "DE MOYENNE",   theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <Trophy size={26} strokeWidth={2.5}    />, value: <>98<span className="text-2xl lg:text-3xl font-light ml-1 opacity-90">%</span></>, label: "RÉUSSITE CONCOURS", theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <Award size={26} strokeWidth={2.5}     />, value: <>100<span className="text-2xl lg:text-3xl font-light ml-1 opacity-90">%</span></>, label: "ADMIS AU TOP 3",   theme: { text: "text-white", bg: "bg-white/15" } },
            // Second set for seamless looping
            { icon: <UserPlus size={26} strokeWidth={2.5}  />, value: <>260<span className="text-2xl lg:text-3xl font-light ml-1.5 opacity-90">+</span></>, label: "TUTEURS EXPERTS",  theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <GraduationCap size={26} strokeWidth={2.5} />, value: <>5340<span className="text-2xl lg:text-3xl font-light ml-1.5 opacity-90">+</span></>, label: "ÉTUDIANTS", theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <BookOpen size={26} strokeWidth={2.5}  />, value: <>280<span className="text-2xl lg:text-3xl font-light ml-1.5 opacity-90">+</span></>, label: "FORMATIONS",       theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <Users size={26} strokeWidth={2.5}     />, value: <>3<span className="mx-2 text-2xl lg:text-3xl font-light opacity-90">à</span>4</>, label: "ÉLÈVES MAX / CLASSE", theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <Star size={26} strokeWidth={2.5}      />, value: <>+3.7<span className="text-xl lg:text-2xl font-bold ml-2 opacity-90 tracking-widest uppercase">Pts</span></>, label: "DE MOYENNE",   theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <Trophy size={26} strokeWidth={2.5}    />, value: <>98<span className="text-2xl lg:text-3xl font-light ml-1 opacity-90">%</span></>, label: "RÉUSSITE CONCOURS", theme: { text: "text-white", bg: "bg-white/15" } },
            { icon: <Award size={26} strokeWidth={2.5}     />, value: <>100<span className="text-2xl lg:text-3xl font-light ml-1 opacity-90">%</span></>, label: "ADMIS AU TOP 3",   theme: { text: "text-white", bg: "bg-white/15" } }
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center px-10 lg:px-16 border-r border-white/20 last:border-r-0 shrink-0 group hover:bg-white/5 transition-colors duration-300 py-4 rounded-xl">
              <div className="flex flex-col items-center sm:items-start sm:flex-row sm:space-x-5">
                <div className={cn("hidden sm:flex shrink-0 items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl transition-transform duration-500 group-hover:scale-110", stat.theme.bg, stat.theme.text)}>
                  {stat.icon}
                </div>
                <div>
                  <div className={cn("flex items-baseline text-[36px] lg:text-[44px] tracking-tight font-black font-display drop-shadow-sm transition-transform duration-500 group-hover:scale-105 justify-center sm:justify-start", stat.theme.text)}>
                    {stat.value}
                  </div>
                  <div className={cn("text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.25em] leading-[1.6] w-full max-w-[140px] mt-1 opacity-90 group-hover:opacity-100 transition-opacity text-center sm:text-left", stat.theme.text)}>
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* EXPERTISE POLES — extracted, reusable across pages */}
      <ExpertisePoles />

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 bg-[#f8fbfc]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <ImageFloaters />
               <div className="relative z-20 bg-white p-4 rounded-2xl shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" 
                    alt="Why choose us" 
                    className="rounded-xl w-full h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
               </div>
               {/* Pattern overlay — rotating dashed teal ring */}
               <motion.div
                 className="absolute -top-10 -right-10 w-32 h-32 opacity-30 z-0"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
               >
                  <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="#1CB69B" strokeWidth="5" strokeDasharray="10 5"></circle></svg>
               </motion.div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-brand-darkblue mb-6">
                Pourquoi choisir <br />
                <span className="text-sa-green uppercase">STUDASSIST ?</span>
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                Chez <span className="font-bold">STUDASSIST</span>, nous offrons bien plus qu'un soutien scolaire. Nous accompagnons chaque élève avec une <span className="font-bold underline">approche globale, stratégique et personnalisée</span>, en plaçant <span className="font-bold underline">l'excellence académique</span>, l'orientation et la <span className="font-bold underline">réussite</span> au cœur de notre <span className="font-bold underline">engagement</span>. Un accompagnement 360°, pensé pour <span className="font-bold">sécuriser</span> chaque étape du parcours scolaire et universitaire de nos élèves.
              </p>

              <div className="grid grid-cols-2 gap-x-12 gap-y-10 mt-10">
                 <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-sa-navy/10 rounded-xl text-sa-navy group-hover:bg-sa-navy group-hover:text-white transition-all">
                       <Users size={24} />
                    </div>
                    <div>
                       <div className="text-3xl font-black text-sa-navy mb-1">3 à 4</div>
                       <div className="text-[10px] uppercase font-black text-sa-navy tracking-widest opacity-80 leading-tight">Élèves Maximum Par Classe</div>
                    </div>
                 </div>
                 <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-sa-green/10 rounded-xl text-sa-green group-hover:bg-sa-green group-hover:text-white transition-all">
                       <Star size={24} />
                    </div>
                    <div>
                       <div className="text-3xl font-black text-sa-green mb-1">3.7 Pts</div>
                       <div className="text-[10px] uppercase font-black text-sa-navy tracking-widest opacity-80 leading-tight">Moyenne Gagnée Sur Les Bulletins</div>
                    </div>
                 </div>
                 <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-sa-gold/10 rounded-xl text-sa-gold group-hover:bg-sa-gold group-hover:text-white transition-all">
                       <MessageCircle size={24} />
                    </div>
                    <div>
                       <div className="text-3xl font-black text-sa-gold mb-1">98%</div>
                       <div className="text-[10px] uppercase font-black text-sa-navy tracking-widest opacity-80 leading-tight">Taux De Réussite Aux Concours</div>
                    </div>
                 </div>
                 <div className="flex items-start space-x-4 group">
                    <div className="p-3 bg-sa-pink/10 rounded-xl text-sa-pink group-hover:bg-sa-pink group-hover:text-white transition-all">
                       <GraduationCap size={24} />
                    </div>
                    <div>
                       <div className="text-3xl font-black text-sa-pink mb-1">100%</div>
                       <div className="text-[10px] uppercase font-black text-sa-navy tracking-widest opacity-80 leading-tight">Admis Dans Le Top 3 Des Écoles</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAKE OFF SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Patterns for this section */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
           <svg width="100%" height="100%">
              <pattern id="pattern-rocket-v2" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-brand-darkblue" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#pattern-rocket-v2)" />
           </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="sa-eyebrow mb-5">Impact & Carrière</span>
              <h2 className="font-display text-[34px] lg:text-[52px] font-extrabold text-sa-navy leading-[1.05] mb-6 tracking-tight">
                Prêt à décoller <br />
                <span className="sa-gradient-text">pour la réussite ?</span>
              </h2>
              <p className="text-base lg:text-lg text-sa-ink/65 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Rejoignez STUDASSIST et donnez-vous les moyens de vos ambitions. Nos experts vous attendent pour construire ensemble votre parcours d'excellence.
              </p>
              <Link to="/contact" className="sa-btn-primary">
                Je planifie mon rendez-vous
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Dynamic Rocket Illustration - Stripe Inspired */}
          <RocketIllustration />
        </div>
      </section>

      {/* TESTIMONIALS — reusable section */}
      <TestimonialsSection />

      {/* FAQ SECTION */}
      <section className="py-12 lg:py-20 bg-white relative overflow-hidden flex flex-col justify-center min-h-[90vh]">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sa-green/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10 lg:mb-12">
            <h4 className="text-sa-green font-black text-[10px] uppercase tracking-[0.3em] mb-3">Questions fréquentes</h4>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-darkblue mb-4">
              Nous répondons à toutes <br />
              <span className="text-brand-teal">vos interrogations</span>
            </h2>
            <div className="w-16 h-1 lg:w-20 lg:h-1.5 bg-brand-darkblue mx-auto rounded-full" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* CATEGORY TABS */}
            <div className="w-full lg:w-1/3 lg:sticky lg:top-32 space-y-2">
              {[
                { label: "À propos", icon: <Info size={18} /> },
                { label: "Méthodologie", icon: <Zap size={18} /> },
                { label: "Soutien & Examens", icon: <BookOpen size={18} /> },
                { label: "Orientation", icon: <Compass size={18} /> },
                { label: "Certifications", icon: <Trophy size={18} /> },
                { label: "Espaces", icon: <Map size={18} /> },
                { label: "Organisation", icon: <Calendar size={18} /> },
                { label: "À distance", icon: <Globe size={18} /> },
                { label: "Inscription", icon: <UserPlus size={18} /> }
              ].map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveFaqCategory(idx);
                    setOpenFaqId(null);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 lg:p-4 rounded-xl transition-all duration-300 text-left relative overflow-hidden group",
                    activeFaqCategory === idx 
                      ? "bg-brand-darkblue text-white shadow-lg shadow-brand-darkblue/20" 
                      : "bg-white border border-gray-100 text-gray-600 hover:border-brand-teal hover:bg-brand-teal/5"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                    activeFaqCategory === idx ? "bg-brand-teal/20 text-brand-teal" : "bg-gray-50 text-gray-400 group-hover:bg-brand-teal group-hover:text-brand-teal"
                  )}>
                    {cat.icon}
                  </div>
                  <span className="font-bold text-xs lg:text-sm">{cat.label}</span>
                  {activeFaqCategory === idx && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-teal"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* QUESTIONS CONTENT */}
            <div className="flex-1 w-full min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFaqCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 lg:space-y-5"
                >
                  {(() => {
                    const category = faqData[activeFaqCategory];
                    return (
                      <>
                        <div className="mb-6 lg:mb-8">
                          <h3 className="text-2xl lg:text-3xl font-black text-brand-darkblue mb-3 leading-tight">
                            {category.category.replace(/^\d+\.\s*/, '')}
                          </h3>
                          <div className="w-10 h-1 bg-brand-teal rounded-full" />
                        </div>
                        <div className="space-y-3 lg:space-y-4">
                          {category.questions.map((faq, faqIdx) => {
                            const id = `${activeFaqCategory}-${faqIdx}`;
                            const isOpen = openFaqId === id;
                            return (
                              <motion.div 
                                key={id}
                                layout
                                className={`group border rounded-2xl lg:rounded-3xl transition-all duration-300 ${
                                  isOpen ? 'border-brand-teal bg-brand-teal/5 shadow-lg shadow-brand-teal/5' : 'border-gray-100 bg-white hover:border-gray-300'
                                }`}
                              >
                                <button 
                                  onClick={() => setOpenFaqId(isOpen ? null : id)}
                                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left focus:outline-none"
                                >
                                  <span className={`text-sm lg:text-base font-bold transition-colors duration-300 pr-6 ${
                                    isOpen ? 'text-brand-darkblue' : 'text-gray-700 group-hover:text-brand-darkblue'
                                  }`}>
                                    {faq.q}
                                  </span>
                                  <div className={`p-2 rounded-xl transition-all duration-300 shrink-0 ${
                                    isOpen ? 'bg-brand-teal text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-brand-darkblue'
                                  }`}>
                                    <ChevronDown size={20} />
                                  </div>
                                </button>
                                
                                <AnimatePresence>
                                  {isOpen && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                      <div className="px-5 pb-5 lg:px-6 lg:pb-6">
                                        <div className="h-px w-full bg-gray-100 mb-4" />
                                        <p className="text-gray-500 leading-relaxed text-[13px] lg:text-sm">
                                          {faq.a}
                                        </p>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            );
                          })}
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

            <div className="mt-12 lg:mt-16 p-8 lg:p-10 bg-brand-darkblue rounded-[2rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-white text-lg lg:text-xl font-bold mb-1 lg:mb-2">Vous avez encore des questions ?</h3>
                  <p className="text-white/60 text-sm">Nos consultants experts sont là pour vous aider à tracer votre voie.</p>
                </div>
                <Link 
                  to="/contact" 
                  className="bg-brand-teal text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-white hover:text-brand-darkblue transition-all active:scale-95 shadow-lg shadow-brand-teal/20"
                >
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
      </section>

      {/* EXPERT ADVICE SECTION */}
      <section className="py-20 bg-[#f8fbfc]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-center text-brand-darkblue mb-16 leading-tight">
            Conseils de nos <span className="text-sa-green uppercase">experts</span><br />
            & dernières actus
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { date: "15 Nov, 2023", cat: "MÉTHODES D'APPRENTISSAGE", title: "Apprendre en Jouant : L'École de Demain ?", img: "https://picsum.photos/seed/learn/400/300" },
               { date: "14 Nov, 2023", cat: "MÉTHODES D'APPRENTISSAGE", title: "Les Écrans à l'École : Fausse Bonne Idée ?", img: "https://picsum.photos/seed/screens/400/300" },
               { date: "13 Nov, 2023", cat: "ÉTUDES SUPÉRIEURES", title: "Devoirs à la Maison : Une Pratique Dépassée ?", img: "https://picsum.photos/seed/homework/400/300" },
               { date: "11 Nov, 2023", cat: "SYSTÈMES ÉDUCATIF", title: "Et Si On Réinventait L'Évaluation ?", img: "https://picsum.photos/seed/exam/400/300" }
             ].map((post, i) => (
               <div key={i} className="bg-white rounded-xl overflow-hidden shadow-soft border border-gray-50 group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                     <img src={post.img} alt={post.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                     <div className="absolute top-4 left-4 bg-brand-teal text-white px-3 py-1 rounded text-[10px] font-bold">{post.date}</div>
                  </div>
                  <div className="p-6">
                     <div className="text-[10px] font-bold text-brand-teal mb-2 uppercase tracking-widest">{post.cat}</div>
                     <h4 className="font-black text-brand-darkblue text-sm line-clamp-2 leading-snug group-hover:text-brand-teal transition">{post.title}</h4>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BAND — "Restez connectés" (teal band, student pops out) ============ */}
      <section className="relative mt-28 mb-20">
        <div className="container mx-auto px-6">
          {/* The teal band itself */}
          <div className="relative bg-brand-teal rounded-[2rem] overflow-visible">
            {/* Decorative SVG shapes (matching original site) */}
            {/* Left wavy lines */}
            <svg
              className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 w-16 lg:w-24 opacity-80 pointer-events-none"
              viewBox="0 0 80 40"
              fill="none"
            >
              <path d="M2 10 Q 12 2 22 10 T 42 10 T 62 10 T 80 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <path d="M2 22 Q 12 14 22 22 T 42 22 T 62 22 T 80 22" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <path d="M2 34 Q 12 26 22 34 T 42 34 T 62 34 T 80 34" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>

            {/* Right dot grid */}
            <svg
              className="absolute right-6 lg:right-10 top-8 w-20 lg:w-28 opacity-70 pointer-events-none"
              viewBox="0 0 80 60"
              fill="white"
            >
              {Array.from({ length: 8 }).map((_, r) =>
                Array.from({ length: 10 }).map((_, c) => (
                  <circle key={`${r}-${c}`} cx={4 + c * 8} cy={4 + r * 7} r="1.6" />
                ))
              )}
            </svg>

            {/* Right bottom curve accent */}
            <svg
              className="absolute right-0 bottom-0 w-40 lg:w-56 opacity-60 pointer-events-none"
              viewBox="0 0 160 80"
              fill="none"
            >
              <path d="M0 60 Q 60 10 160 60" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>

            {/* LEFT: Student photo — head pops ABOVE the band, shoulders start
                right at the top of the green, body fills down inside the band */}
            <div
              className="hidden lg:block absolute left-4 bottom-0 w-[380px] xl:w-[420px] pointer-events-none select-none z-20"
            >
              {/* Dashed hand-drawn ring — sits inside the teal band behind the body */}
              <motion.div
                aria-hidden
                className="absolute left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full border-2 border-dashed border-white/60"
                style={{ top: "170px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <img
                src="/cta-student.webp"
                alt="Étudiant STUDASSIST"
                className="relative z-10 block w-full h-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
              />
            </div>

            {/* Mobile-only photo placed above the band */}
            <div className="lg:hidden flex justify-center pt-8">
              <img
                src="/cta-student.webp"
                alt="Étudiant STUDASSIST"
                className="w-[220px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
              />
            </div>

            <div className="grid lg:grid-cols-[380px_1fr] items-center gap-8 lg:gap-12 px-6 lg:pr-14 lg:pl-0 pt-8 lg:pt-14 pb-10 lg:pb-14">
              {/* Spacer column on desktop to reserve room for the absolutely-positioned photo */}
              <div className="hidden lg:block" />

              {/* RIGHT: Copy + CTA */}
              <div className="relative z-10 text-white flex flex-col items-center text-center">
                <h2 className="font-display text-[32px] lg:text-[44px] font-extrabold leading-[1.05] tracking-tight mb-4">
                  Restez <span className="sa-wavy sa-wavy-yellow">connectés</span> !
                </h2>
                <p className="text-white/90 text-[15px] lg:text-base leading-relaxed max-w-xl mx-auto mb-8">
                  Que ce soit pour l'orientation scolaire, la préparation au bac, les certifications de
                  langues ou les démarches administratives, ne manquez aucune information essentielle
                  pour préparer votre avenir.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 lg:px-10 py-3.5 lg:py-4 rounded-full bg-sa-pink hover:bg-sa-pink/90 text-white font-semibold text-[14px] lg:text-[15px] tracking-wide shadow-[0_18px_35px_-12px_rgba(238,75,98,0.55)] transition-all"
                >
                  Réserver ma séance découverte <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
