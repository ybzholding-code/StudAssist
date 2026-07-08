import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
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
  ChevronLeft,
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
import MediaFrameFloaters from "../components/MediaFrameFloaters";
import { cn } from "@/src/lib/utils";
import TrustBar from "../components/TrustBar";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { usePageMeta } from "../hooks/usePageMeta";

import NumberCounter from "@/src/components/ui/NumberCounter";
import { blogs } from "@/src/data/blogs";

const RocketIllustration = () => {
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
    <div className="relative w-[120px] h-[120px] lg:w-[160px] lg:h-[160px] flex items-center justify-center shrink-0">
      <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-[spin_60s_linear_infinite]" />
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 -rotate-45"
      >
        <svg viewBox="0 0 75 75" className="w-[80px] lg:w-[100px] drop-shadow-[0_10px_30px_rgba(104,212,248,0.4)]">
          {stars.map((star, i) => (
            <motion.circle
              key={i}
              r={star.r}
              cy={star.cy}
              fill="#AAB7C4"
              initial={{ cx: 75, opacity: 0 }}
              animate={{ cx: [75, 75, 0, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: star.d, repeat: Infinity, delay: star.dl, ease: "linear" }}
            />
          ))}
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
          <motion.path
            fill="#EE4B62"
            d="M21 37.5c0-10.04-11 0-12 0 1 0 12 10.04 12 0z"
            animate={{ scaleX: [1, 1.5, 1.2, 1.6, 1], scaleY: [1, 1.1, 0.9, 1.2, 1], opacity: [1, 0.8, 1, 0.7, 1] }}
            transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }}
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

function BlogCarousel({ blogs }: { blogs: { id: string | number; slug: string; image: string; title: string; date: string }[] }) {
  const visible = 3;
  const gap = 24;
  // Triple the items so we always have enough to loop seamlessly
  const items = [...blogs, ...blogs, ...blogs];
  const [idx, setIdx] = useState(blogs.length); // start at the middle copy
  const [animated, setAnimated] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const cardWidth = `calc((100% - ${(visible - 1) * gap}px) / ${visible})`;

  const goTo = (i: number, anim = true) => {
    setAnimated(anim);
    setIdx(i);
  };

  // After transition ends, if we've drifted outside the middle copy, snap silently
  const handleTransitionEnd = () => {
    if (idx <= 0) {
      goTo(blogs.length, false);
    } else if (idx >= blogs.length * 2) {
      goTo(blogs.length, false);
    }
  };

  const prev = () => {
    resetInterval();
    goTo(idx - 1);
  };
  const next = () => {
    resetInterval();
    goTo(idx + 1);
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => { setAnimated(true); setIdx((i) => i + 1); }, 3500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => setIdx((i) => i + 1), 3500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  // Snap without animation when looping
  useEffect(() => {
    if (!animated) {
      const t = setTimeout(() => setAnimated(true), 20);
      return () => clearTimeout(t);
    }
  }, [animated, idx]);

  const offset = `calc(-${idx} * (${cardWidth} + ${gap}px))`;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
            transform: `translateX(${offset})`,
            transition: animated ? "transform 500ms cubic-bezier(0.23,1,0.32,1)" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {items.map((post, i) => (
            <Link
              key={`${post.id}-${i}`}
              to={`/blogs/${post.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-soft border border-gray-50 group cursor-pointer flex flex-col flex-shrink-0"
              style={{ width: cardWidth }}
            >
              <div className="relative overflow-hidden bg-white flex">
                <img src={post.image} alt={post.title} className="w-full h-auto object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-[10px] font-bold text-gray-400 mb-2">{post.date}</div>
                <h4 className="font-black text-brand-darkblue text-sm line-clamp-2 leading-snug group-hover:text-brand-teal transition">{post.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <button onClick={prev} aria-label="Article précédent" className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-sa-navy hover:bg-sa-green hover:text-white hover:border-sa-green transition-all">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-1.5">
          {blogs.map((_, i) => (
            <button
              key={i}
              aria-label={`Aller à l'article ${i + 1}`}
              onClick={() => { resetInterval(); goTo(blogs.length + i); }}
              className={cn("h-2 rounded-full transition-all", ((idx - blogs.length + blogs.length * 10) % blogs.length) === i ? "bg-sa-green w-5" : "bg-gray-300 w-2")}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Article suivant" className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-sa-navy hover:bg-sa-green hover:text-white hover:border-sa-green transition-all">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  usePageMeta({
    title: "Orientation Scolaire & Accompagnement Académique au Maroc",
    description: "STUDASSIST, cabinet d'orientation scolaire et d'accompagnement académique à Casablanca. Soutien scolaire, prépa concours, prépa bac, certifications de langues. +500 élèves orientés, +25 destinations.",
    canonical: "/",
  });
  const navigate = useNavigate();
  const { submit: submitMiniForm, status: miniFormStatus } = useFormSubmit();
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
      image: "/hero-main-new2.png",
      imageOrientation: 'portrait' as const,
      showFloaters: true,
      layout: 'standard',
      accent: 'brand-red',
      bgType: 'dots',
      badge3d: "https://img.icons8.com/3d-fluency/94/guarantee.png",
      badgeLabel: "Qualité certifiée",
      badgeTitle: "STUDASSIST ELITE",
      imageScale: "1.05",
      imagePosition: "object-bottom",
      bgColor: "#FDFDFD"
    },
    {
      title: <>ORIENTATION SCOLAIRE & <br />ACCOMPAGNEMENT AUX CANDIDATURES</>,
      subtitle: "Bilan d'orientation & candidatures",
      description: "Bilan d'orientation, aide aux choix des écoles, optimisation des dossiers de candidatures, préparation aux oraux, suivi des admissions… Traçons ensemble votre projet d'avenir !",
      buttonText: "Réserver mon 1er RDV",
      link: "/orientation-scolaire",
      image: "/orientation-new2.png",
      imageOrientation: 'portrait' as const,
      showFloaters: false,
      layout: 'reverse',
      accent: 'brand-teal',
      bgType: 'grid',
      badge3d: "https://img.icons8.com/3d-fluency/94/goal.png",
      badgeLabel: "Orientation sur mesure",
      badgeTitle: "PROJET D'AVENIR",
      imageScale: "1.00",
      imagePosition: "object-bottom",
      imageTranslateX: "5%",
      imageTranslateY: "-5%",
      bgColor: "#FBFAFA"
    },
    {
      title: "PRÉPAS-BAC",
      subtitle: "Réussir ses épreuves du bac",
      description: "Bac de Français écrit et oral, Bac de spécialités, Bac de philo, Grand Oral. Rejoignez notre programme complet pour réussir vos épreuves !",
      buttonText: "Choisir mon programme",
      link: "/prepas-bac",
      image: "/prepas-bac-new2.png",
      imageOrientation: 'portrait' as const,
      showFloaters: false,
      layout: 'standard',
      accent: 'brand-teal',
      bgType: 'curves',
      badge3d: "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
      badgeLabel: "Objectif mention",
      badgeTitle: "RÉUSSITE BAC",
      imageScale: "1.00",
      imagePosition: "object-bottom",
      imageTranslateY: "-5%",
      bgColor: "#FDFDFD"
    },
    {
      title: "PRÉPAS-CONCOURS",
      subtitle: "Post-Bac & International",
      description: "Sesame, Accès, GEIPI Polytech, Avenir, Médecine Maroc, Médecine Belgique, GMAT, TAGE MAGE, SAT… Mettez toutes les chances de votre côté et décrochez vos concours avec STUDASSIST !",
      buttonText: "Choisir ma préparation",
      link: "/prepas-concours",
      image: "/prepas-concours-new2.png",
      imageOrientation: 'portrait' as const,
      showFloaters: false,
      layout: 'reverse',
      accent: 'brand-red',
      bgType: 'abstract',
      badge3d: "https://img.icons8.com/3d-fluency/94/trophy.png",
      badgeLabel: "Taux d'admission",
      badgeTitle: "85% ADMIS",
      imageScale: "1.00",
      imagePosition: "object-bottom",
      bgColor: "#FCFBFB"
    },
    {
      title: <>CERTIFICATIONS & <br />TESTS DE LANGUES</>,
      subtitle: "IELTS, TOEFL, TCF, DELE…",
      description: "IELTS, TOEIC, TOEFL, DELE, TCF, DELF, DALF… Préparez-vous avec STUDASSIST pour viser les meilleures écoles internationales.",
      buttonText: "Choisir ma certification",
      link: "/certifications",
      image: "/certifications-new2.png",
      imageOrientation: 'portrait' as const,
      showFloaters: false,
      layout: 'standard',
      accent: 'brand-teal',
      bgType: 'modern',
      badge3d: "https://img.icons8.com/3d-fluency/94/globe.png",
      badgeLabel: "Score certifié",
      badgeTitle: "IELTS & TOEFL",
      imageScale: "1.00",
      imagePosition: "object-bottom",
      bgColor: "#f9fbfa"
    },
    {
      title: "ACCOMPAGNEMENT SCOLAIRE",
      subtitle: "Maths, Physique-chimie, SVT, Français…",
      description: "Maths, Physique-chimie, SVT, Français, SES, HGGSP, Philosophie… Réservez votre séance découverte pour tester notre méthodologie exclusive d'accompagnement scolaire !",
      buttonText: "Réserver mon cours découverte",
      link: "/soutien-scolaire",
      image: "/soutien-scolaire-new2.png",
      imageOrientation: 'portrait' as const,
      showFloaters: false,
      layout: 'reverse',
      accent: 'brand-teal',
      bgType: 'minimal',
      badge3d: "https://img.icons8.com/3d-fluency/94/conference-call.png",
      badgeLabel: "Petits groupes",
      badgeTitle: "3 À 4 ÉLÈVES",
      imageScale: "1.00",
      imagePosition: "object-bottom",
      imageTranslateY: "-5%",
      bgColor: "#F9F9F9"
    },
    {
      title: <>ADMINISTRATIF & <br />LOGEMENT ÉTUDIANT</>,
      subtitle: "Installation à l'international",
      description: "Dossiers Visa & titre de séjour étudiant, compte bancaire à l'étranger, assurance & couverture maladie, aide à la recherche de logement étudiant… Libérez-vous de ces tracas et restez concentrés sur la réussite de vos examens.",
      buttonText: "Réserver mon RDV d'information",
      link: "/admin-logement",
      image: "/hero-admin-logement.png",
      imageOrientation: 'portrait' as const,
      showFloaters: false,
      layout: 'standard',
      accent: 'brand-red',
      bgType: 'service',
      badge3d: "https://img.icons8.com/3d-fluency/94/passport.png",
      badgeLabel: "Installation clé en main",
      badgeTitle: "20+ DESTINATIONS",
      imageScale: "1.05",
      imagePosition: "object-bottom",
      bgColor: "#fdfdfd"
    }
  ];

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length, currentSlide]);

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section 
        className="relative pt-4 sm:pt-6 lg:pt-10 flex flex-col min-h-[calc(100svh-80px)] h-auto lg:h-[calc(100svh-140px)] lg:max-h-[820px] xl:max-h-[900px] transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: slides[currentSlide].bgColor || '#FDFDFD' }}
      >

        <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col">
          <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-grow grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 xl:gap-16 items-stretch"
              >
                {/* Text Content - Bold, Authoritative & Clean */}
                <div className="order-2 md:order-1 flex flex-col justify-center text-center md:text-left pb-6 md:pb-10 lg:pb-16">

                  <h1 className="text-[22px] sm:text-[30px] md:text-[34px] lg:text-[40px] xl:text-[52px] 2xl:text-[60px] font-black text-sa-navy leading-[1.1] lg:leading-[1.05] mb-3 md:mb-4 lg:mb-6 uppercase tracking-tight">
                    {slides[currentSlide].title}
                  </h1>

                  <p className="text-sa-ink/70 text-sm md:text-base lg:text-lg font-medium mb-5 md:mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed font-sans">
                    {slides[currentSlide].description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 lg:gap-6">
                    <Link 
                      to={slides[currentSlide].link || "/contact"}
                      className={cn(
                        "group flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-10 py-3.5 sm:py-4 rounded-[2rem] font-black text-[10px] sm:text-xs uppercase tracking-widest sm:tracking-[0.2em] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-full text-center",
                        accentClasses[slides[currentSlide].accent].bg,
                        "text-white hover:scale-105 hover:-translate-y-1 active:scale-95"
                      )}
                    >
                      <span className="relative z-10 leading-tight">{slides[currentSlide].buttonText}</span>
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform relative z-10 shrink-0" />
                    </Link>
                  </div>


                </div>

                {/* Hero Image Section — Anchored perfectly to the bottom */}
                <div className="order-1 md:order-2 relative flex justify-center items-end w-full h-full mt-auto overflow-visible">
                  <div className="relative w-full max-w-[400px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-full flex justify-center items-end mx-auto h-[42vh] min-h-[260px] sm:h-[55vh] md:h-[60vh] lg:h-full overflow-visible">

                    {/* Parallax decorative shapes */}
                    {slides[currentSlide].showFloaters && <ImageFloaters slideIndex={currentSlide} />}

                    {/* ===== Cut-out student photo (no frame) anchored bottom ===== */}
                    <motion.img
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      src={slides[currentSlide].image}
                      alt="Étudiante STUDASSIST"
                      fetchPriority={currentSlide === 0 ? "high" : "auto"}
                      style={(() => { const tx = slides[currentSlide].imageTranslateX; const ty = slides[currentSlide].imageTranslateY; const sc = slides[currentSlide].imageScale ?? '1'; return { transform: `translateX(calc(-50% + ${tx ?? '0%'})) translateY(${ty ?? '0%'}) scale(${sc})` }; })()}
                      className="absolute bottom-0 left-1/2 h-full w-auto max-w-none object-contain object-bottom origin-bottom transition-transform duration-700 z-20"
                    />

                  </div>
                </div>
              </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg flex items-center justify-center text-sa-navy hover:bg-sa-green hover:text-white hover:border-sa-green transition-all duration-300 active:scale-90"
          aria-label="Slide précédente"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg flex items-center justify-center text-sa-navy hover:bg-sa-green hover:text-white hover:border-sa-green transition-all duration-300 active:scale-90"
          aria-label="Slide suivante"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 h-2.5 bg-sa-green' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Aller au slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <TrustBar />

      {/* EXPERTISE POLES — extracted, reusable across pages */}
      <ExpertisePoles />

      {/* WHY CHOOSE SECTION */}
      <section className="py-14 lg:py-16 bg-[#f8fbfc]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
            {/* Video column */}
            <div className="flex justify-center">
               <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] mx-auto">
                 <MediaFrameFloaters />
                 
                 {/* The Video Container (z-20) */}
                 <div className="relative z-20 bg-white p-2 rounded-[1.5rem] shadow-[0_20px_60px_rgba(28,30,70,0.10)] w-full">
                    <video
                      src="/studassist-video.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-[1.25rem] w-full aspect-[9/16] object-cover"
                    />
                 </div>
               </div>
            </div>

            {/* Text column */}
            <div>
              <div className="inline-flex items-center gap-2 text-sa-green font-black text-[10px] tracking-[0.3em] uppercase mb-4">
                <span className="w-6 h-px bg-sa-green" />
                <span>Notre engagement</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-brand-darkblue leading-tight mb-5">
                Pourquoi choisir <br />
                <span className="text-sa-green uppercase">STUDASSIST ?</span>
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-[15px]">
                Chez <span className="font-semibold text-sa-navy">STUDASSIST</span>, nous offrons bien plus qu'un soutien scolaire. Nous accompagnons chaque élève avec une approche globale, stratégique et personnalisée, en plaçant l'excellence académique, l'orientation et la réussite au cœur de notre engagement.
              </p>

              {/* STATS QUADRANT GRID - Minimal, Rich & Great */}
              <div className="grid grid-cols-2 relative mt-10">
                 
                 {/* Elegant Gradient Dividers */}
                 <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-sa-pink/10 via-sa-gold/30 to-sa-green/10" />
                 <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-sa-pink/10 via-sa-gold/30 to-sa-green/10" />

                 {/* STAT 1: Élèves */}
                 <div className="relative flex flex-row items-center space-x-3 sm:space-x-4 group pb-6 sm:pb-8 pr-3 sm:pr-4 lg:pr-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-sa-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-2xl -z-10" />
                    <img src="https://img.icons8.com/3d-fluency/94/conference-call.png" alt="Élèves" className="w-10 h-10 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 drop-shadow-sm" />
                    <div>
                       <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-sa-navy to-[#2a2d6a] mb-0.5"><NumberCounter value={3} /> à <NumberCounter value={4} /></div>
                       <div className="text-[10px] uppercase font-bold text-sa-navy/70 tracking-widest leading-tight">Élèves maximum <br className="hidden lg:block"/>par classe</div>
                    </div>
                 </div>

                 {/* STAT 2: Moyenne */}
                 <div className="relative flex flex-row items-center space-x-3 sm:space-x-4 group pb-6 sm:pb-8 pl-3 sm:pl-4 lg:pl-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-bl from-sa-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl -z-10" />
                    <img src="https://img.icons8.com/3d-fluency/94/star.png" alt="Moyenne" className="w-10 h-10 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 drop-shadow-sm" />
                    <div>
                       <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-sa-green to-[#138d78] mb-0.5">+<NumberCounter value={3.7} decimals={1} suffix=" Pts" /></div>
                       <div className="text-[10px] uppercase font-bold text-sa-navy/70 tracking-widest leading-tight">En moyenne de gagnés <br className="hidden lg:block"/>sur les bulletins</div>
                    </div>
                 </div>

                 {/* STAT 3: Réussite */}
                 <div className="relative flex flex-row items-center space-x-3 sm:space-x-4 group pt-6 sm:pt-8 pr-3 sm:pr-4 lg:pr-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-sa-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl -z-10" />
                    <img src="https://img.icons8.com/3d-fluency/94/trophy.png" alt="Réussite" className="w-10 h-10 shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 drop-shadow-sm" />
                    <div>
                       <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-sa-gold to-[#d49918] mb-0.5"><NumberCounter value={98} suffix="%" /></div>
                       <div className="text-[10px] uppercase font-bold text-sa-navy/70 tracking-widest leading-tight">Réussite <br className="hidden lg:block"/>concours</div>
                    </div>
                 </div>

                 {/* STAT 4: Top 3 Ecoles */}
                 <div className="relative flex flex-row items-center space-x-3 sm:space-x-4 group pt-6 sm:pt-8 pl-3 sm:pl-4 lg:pl-8 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tl from-sa-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-br-2xl -z-10" />
                    <img src="https://img.icons8.com/3d-fluency/94/graduation-cap.png" alt="Écoles" className="w-10 h-10 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 drop-shadow-sm" />
                    <div>
                       <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-sa-pink to-[#c43649] mb-0.5"><NumberCounter value={100} suffix="%" /></div>
                       <div className="text-[10px] uppercase font-bold text-sa-navy/70 tracking-widest leading-tight">De nos élèves admis <br className="hidden lg:block"/>au top 3 des écoles</div>
                    </div>
                 </div>
              </div>

              {/* CTA — merged from rocket section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12 p-8 lg:p-10 bg-sa-navy rounded-3xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-sa-green/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                  <div className="flex-1">
                    <h3 className="font-display text-[20px] sm:text-[22px] lg:text-[28px] font-extrabold text-white leading-[1.1] mb-3 tracking-tight">
                      Prêt à décoller <span className="text-sa-green">pour la réussite ?</span>
                    </h3>
                    <p className="text-white/70 text-sm lg:text-[15px] leading-relaxed mb-6 max-w-lg">
                      Rejoignez STUDASSIST et donnez-vous les moyens de vos ambitions. Nos experts vous attendent pour construire ensemble votre parcours d'excellence.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-sa-green text-white rounded-full font-bold text-sm hover:bg-white hover:text-sa-navy transition-all shadow-[0_10px_30px_-10px_rgba(27,183,157,0.5)]">
                      Je planifie mon rendez-vous
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="hidden lg:flex">
                    <RocketIllustration />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — reusable section */}
      <TestimonialsSection />

      {/* FAQ SECTION */}
      <section className="py-14 lg:py-20 bg-white/80 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8 lg:mb-10">
            <h4 className="text-sa-green font-black text-[10px] uppercase tracking-[0.3em] mb-3">Questions fréquentes</h4>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-darkblue mb-4">
              Nous répondons à toutes <br />
              <span className="text-brand-teal">vos interrogations</span>
            </h2>
          </div>

          {/* Mobile: dropdown select */}
          <div className="mb-8 lg:hidden">
            <select
              value={activeFaqCategory}
              onChange={(e) => {
                setActiveFaqCategory(Number(e.target.value));
                setOpenFaqId(null);
              }}
              className="w-full px-5 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-sa-navy text-sm font-bold appearance-none focus:outline-none focus:border-sa-green focus:ring-2 focus:ring-sa-green/20 transition-all"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231C1E46' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
            >
              {faqData.map((cat, idx) => (
                <option key={idx} value={idx}>
                  {cat.category.replace(/^\d+\.\s*/, '')}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop: chip buttons */}
          <div className="hidden lg:flex lg:justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-2 p-3 bg-gray-50 rounded-[1.5rem] border border-gray-100 max-w-3xl">
              {faqData.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveFaqCategory(idx);
                    setOpenFaqId(null);
                  }}
                  className={cn(
                    "relative px-4 py-2 rounded-full whitespace-nowrap text-[11px] font-bold transition-all duration-200",
                    activeFaqCategory === idx 
                      ? "bg-brand-darkblue text-white shadow-md scale-105" 
                      : "bg-white border border-gray-100 text-gray-500 hover:text-brand-darkblue shadow-sm hover:bg-gray-100"
                  )}
                >
                  {cat.category.replace(/^\d+\.\s*/, '')}
                </button>
              ))}
            </div>
          </div>

          {/* QUESTIONS CONTENT */}
          <div className="max-w-3xl mx-auto">
            <div 
              key={activeFaqCategory}
              className="animate-[fadeIn_150ms_ease-out]"
            >
              <div className="mb-5">
                <h3 className="text-xl lg:text-2xl font-black text-brand-darkblue leading-tight">
                  {faqData[activeFaqCategory].category.replace(/^\d+\.\s*/, '')}
                </h3>
              </div>
              <div className="space-y-3">
                {faqData[activeFaqCategory].questions.map((faq, faqIdx) => {
                  const id = `${activeFaqCategory}-${faqIdx}`;
                  const isOpen = openFaqId === id;
                  return (
                    <div 
                      key={id}
                      className={`border rounded-2xl transition-colors duration-150 ${
                        isOpen ? 'border-brand-teal bg-brand-teal/5' : 'border-gray-100 bg-white hover:border-gray-200'
                      }`}
                    >
                      <button 
                        onClick={() => setOpenFaqId(isOpen ? null : id)}
                        className="w-full flex items-center justify-between p-4 lg:p-5 text-left focus:outline-none"
                      >
                        <span className={`text-sm font-bold pr-4 ${
                          isOpen ? 'text-brand-darkblue' : 'text-gray-700'
                        }`}>
                          {faq.q}
                        </span>
                        <div className={`p-1.5 rounded-lg shrink-0 transition-transform duration-150 ${
                          isOpen ? 'bg-brand-teal text-white rotate-180' : 'bg-gray-50 text-gray-400'
                        }`}>
                          <ChevronDown size={16} />
                        </div>
                      </button>
                      
                      <div
                        className="grid transition-[grid-template-rows] duration-200 ease-out"
                        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <div className="px-4 pb-4 lg:px-5 lg:pb-5">
                            <div className="h-px w-full bg-gray-100 mb-3" />
                            <p className="text-gray-500 leading-relaxed text-[13px]">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 p-6 lg:p-8 bg-brand-darkblue rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-white text-base lg:text-lg font-bold mb-1">Vous avez encore des questions ?</h3>
                  <p className="text-white/60 text-xs">Nos consultants experts sont là pour vous aider.</p>
                </div>
                <button 
                  onClick={() => window.dispatchEvent(new Event("open-studassist-chat"))}
                  className="bg-brand-teal text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-brand-darkblue transition-all shrink-0"
                >
                  Discuter avec notre assistant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERT ADVICE SECTION */}
      <section className="py-14 bg-[#f8fbfc]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-center text-brand-darkblue mb-16 leading-tight">
            Conseils de nos <span className="text-sa-green uppercase">experts</span><br />
            & dernières actus
          </h2>

          <BlogCarousel blogs={blogs} />

          <div className="mt-12 text-center">
            <Link 
              to="/blogs" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-darkblue text-white rounded-full font-bold text-sm hover:bg-sa-green transition-all shadow-md hover:shadow-lg"
            >
              Voir tous nos articles
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA BAND — "Restez connectés" (teal band, student pops out) ============ */}
      <section className="relative mt-14 mb-14">
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
            <div className="lg:hidden flex justify-center -mb-2 mt-6">
              <img
                src="/cta-student.webp"
                alt="Étudiant STUDASSIST"
                className="w-[180px] sm:w-[220px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
              />
            </div>

            <div className="grid lg:grid-cols-[380px_1fr] items-center gap-6 md:gap-8 lg:gap-12 px-5 sm:px-6 lg:pr-14 lg:pl-0 pt-0 md:pt-8 lg:pt-14 pb-8 md:pb-10 lg:pb-14">
              {/* Spacer column on desktop to reserve room for the absolutely-positioned photo */}
              <div className="hidden lg:block" />

              {/* RIGHT: Mini contact form */}
              <div className="relative z-10 text-white flex flex-col items-center text-center w-full max-w-lg mx-auto">
                <h2 className="font-display text-[22px] sm:text-[26px] lg:text-[36px] font-extrabold leading-[1.1] tracking-tight mb-2">
                  Laissez-nous vos <span className="sa-wavy sa-wavy-yellow">coordonnées</span>
                </h2>
                <p className="text-white/80 text-[14px] lg:text-[15px] leading-relaxed mb-6">
                  pour qu'un conseiller pédagogique puisse vous contacter
                </p>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const nom = (form.elements.namedItem("nom") as HTMLInputElement).value;
                    const prenom = (form.elements.namedItem("prenom") as HTMLInputElement).value;
                    const role = (form.elements.namedItem("role") as HTMLSelectElement).value;
                    const tel = (form.elements.namedItem("tel") as HTMLInputElement).value;
                    await submitMiniForm({ nom, prenom, role, tel, source: "Homepage — mini-formulaire" });
                  }}
                  className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  <input
                    name="nom"
                    type="text"
                    aria-label="Nom"
                    placeholder="Nom"
                    required
                    className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  />
                  <input
                    name="prenom"
                    type="text"
                    aria-label="Prénom"
                    placeholder="Prénom"
                    required
                    className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  />
                  <select
                    name="role"
                    aria-label="Vous êtes"
                    required
                    defaultValue=""
                    className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all appearance-none"
                  >
                    <option value="" disabled className="text-gray-800">Vous êtes...</option>
                    <option value="eleve" className="text-gray-800">Élève</option>
                    <option value="parent" className="text-gray-800">Parent</option>
                  </select>
                  <input
                    name="tel"
                    type="tel"
                    aria-label="Numéro de téléphone"
                    placeholder="Numéro de téléphone"
                    required
                    className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm font-medium focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  />
                  {miniFormStatus === "success" ? (
                    <div className="sm:col-span-2 mt-1 flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-sa-green/20 border border-sa-green/30 text-sa-green font-semibold text-[14px]">
                      <CheckCircle2 size={18} /> Merci ! Nous vous recontactons très vite.
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={miniFormStatus === "loading"}
                      className="sm:col-span-2 mt-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-sa-pink hover:bg-sa-pink/90 disabled:opacity-60 text-white font-semibold text-[14px] tracking-wide shadow-[0_18px_35px_-12px_rgba(238,75,98,0.55)] transition-all"
                    >
                      {miniFormStatus === "loading" ? "Envoi en cours…" : <>Être rappelé par un conseiller <ArrowRight size={16} /></>}
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
