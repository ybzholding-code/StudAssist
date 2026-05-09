import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Users,
  BookOpen,
  Rocket,
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
  Layout,
  Calendar,
} from "@/src/components/ui/icons";
import { cn } from "@/src/lib/utils";

/* ---------- Data ---------- */

const cycles = ["Primaire", "Collège", "Lycée", "Supérieur"] as const;
type Cycle = (typeof cycles)[number];

const levelsByCycle: Record<Cycle, string[]> = {
  "Primaire": ["CP-CE1", "CE2-CM1", "CM2", "Brain Training"],
  "Collège": ["6ème", "5ème", "4ème", "3ème"],
  "Lycée": ["2nde", "1ère", "Terminale"],
  "Supérieur": ["PRÉPAS"],
};

interface LevelConfig {
  title: string;
  subtitle: string;
  description: string;
  descriptionBold: string;
  links: string[];
  category: string;
  icon: React.ReactNode;
  image: string;
}

const levelConfigs: Record<string, LevelConfig> = {
  "CP-CE1": {
    category: "Primaire",
    icon: <Users size={18} />,
    title: "CP – CE1",
    subtitle: "Apprendre à lire, écrire et compter avec confiance",
    description:
      "Le CP et le CE1 sont les années fondatrices de la scolarité : l'apprentissage de la lecture, de l'écriture et du calcul s'y construisent. L'enfant développe ses premières habitudes de travail et sa curiosité intellectuelle.",
    descriptionBold:
      "Chez STUDASSIST, nous accompagnons les plus jeunes avec une pédagogie ludique, bienveillante et structurée, adaptée à leur rythme.",
    links: ["Soutien scolaire personnalisé", "Aide à la lecture", "Calcul & logique", "Stages de vacances"],
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
  },
  "CE2-CM1": {
    category: "Primaire",
    icon: <Users size={18} />,
    title: "CE2 – CM1",
    subtitle: "Consolider les acquis et développer l'autonomie",
    description:
      "En CE2 et CM1, les apprentissages se complexifient : grammaire, conjugaison, résolution de problèmes et premières rédactions. L'enfant gagne en autonomie et apprend à structurer son raisonnement.",
    descriptionBold:
      "Nous aidons chaque élève à solidifier ses bases et à prendre confiance dans ses capacités d'apprentissage.",
    links: ["Soutien scolaire personnalisé", "Méthodologie", "Stages de vacances", "Aide aux devoirs"],
    image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=1200&q=80",
  },
  "CM2": {
    category: "Primaire",
    icon: <Users size={18} />,
    title: "CM2",
    subtitle: "Préparer sereinement l'entrée au collège",
    description:
      "Le CM2 est l'année de transition vers le collège : les exigences augmentent, les évaluations se multiplient et l'enfant doit faire preuve de plus d'organisation et de rigueur.",
    descriptionBold:
      "STUDASSIST prépare cette transition en renforçant les fondamentaux et en développant des méthodes de travail efficaces pour le collège.",
    links: ["Soutien scolaire personnalisé", "Préparation entrée 6ème", "Stages de vacances", "Méthodologie"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
  },
  "Brain Training": {
    category: "Primaire",
    icon: <Sparkles size={18} />,
    title: "Brain Training",
    subtitle: "Stimuler l'intelligence et la créativité par le jeu",
    description:
      "Notre programme Brain Training développe les capacités cognitives de l'enfant : calcul mental, ateliers d'échecs, jeux de logique et stimulation de la mémoire. Un complément ludique et stimulant à la scolarité classique.",
    descriptionBold:
      "Un cerveau bien entraîné apprend plus vite, mémorise mieux et résout les problèmes avec plus d'aisance.",
    links: ["Calcul mental", "Ateliers d'échecs", "Jeux de logique", "Stimulation cognitive"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1200&q=80",
  },
  "6ème": {
    category: "Collège",
    icon: <BookOpen size={18} />,
    title: "6ème",
    subtitle: "Réussir l'entrée au collège et gagner en autonomie",
    description:
      "La 6ème marque une rupture importante : nouveaux enseignants, nouvelles matières, rythme plus soutenu. L'enjeu est d'aider l'élève à s'adapter sans perte de confiance.",
    descriptionBold: "STUDASSIST accompagne cette transition en renforçant les bases et en installant de bonnes méthodes de travail dès le départ.",
    links: ["Soutien scolaire", "Stages de vacances", "Cours découverte"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80",
  },
  "5ème": {
    category: "Collège",
    icon: <BookOpen size={18} />,
    title: "5ème",
    subtitle: "Structurer le travail et consolider les fondamentaux",
    description:
      "En 5ème, les exigences académiques augmentent et les connaissances s'accumulent. L'élève doit apprendre à raisonner, organiser son travail et gagner en autonomie.",
    descriptionBold: "Nous aidons nos élèves à assimiler durablement les notions clés et à adopter une méthodologie efficace.",
    links: ["Soutien scolaire", "Stages de vacances", "Cours découverte"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
  "4ème": {
    category: "Collège",
    icon: <BookOpen size={18} />,
    title: "4ème",
    subtitle: "Monter en puissance et développer l'analyse",
    description:
      "La 4ème est une année charnière où le rythme s'intensifie et les notions deviennent plus abstraites. L'élève doit apprendre à analyser, synthétiser et gérer un volume de travail plus important.",
    descriptionBold: "STUDASSIST accompagne cette montée en exigence avec un suivi régulier et structurant.",
    links: ["Soutien scolaire", "Stages de vacances", "Cours découverte"],
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=80",
  },
  "3ème": {
    category: "Collège",
    icon: <BookOpen size={18} />,
    title: "3ème",
    subtitle: "Objectif Brevet et préparation à l'orientation",
    description:
      "La 3ème est une année stratégique : réussite du Brevet, consolidation des acquis et premiers choix d'orientation. Un accompagnement ciblé est essentiel pour aborder le lycée avec confiance et sérénité.",
    descriptionBold: "",
    links: ["Prépa Brevet", "Soutien scolaire", "Stages de vacances", "Pré-orientation", "Cours découverte", "Rendez-vous d'orientation"],
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80",
  },
  "2nde": {
    category: "Lycée",
    icon: <GraduationCap size={18} />,
    title: "Seconde",
    subtitle: "Réussir le passage au lycée et préparer les choix de spécialités",
    description:
      "La Seconde est un tournant majeur : programmes beaucoup plus denses, nouvelles méthodes de travail et réflexion sur les spécialités. L'enjeu est d'acquérir rigueur, régularité et méthode tout en faisant face à un grand nombre de notions à assimiler ainsi qu'aux premiers questionnements sur ses projets d'études supérieures.",
    descriptionBold: "Chez STUDASSIST nous aidons nos élèves à poser des bases solides pour la réussite au lycée et à faire des choix éclairés.",
    links: ["Soutien scolaire", "Stages de vacances", "Choix des spécialités", "Cours découverte", "Rendez-vous d'orientation"],
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
  },
  "1ère": {
    category: "Lycée",
    icon: <GraduationCap size={18} />,
    title: "Première",
    subtitle: "Préparer le Bac de français et sécuriser son orientation",
    description:
      "L'année de Première est déterminante : épreuves anticipées du bac de français, choix stratégique de la spécialité à abandonner et premières démarches d'orientation post-bac.",
    descriptionBold:
      "STUDASSIST accompagne ses élèves sur le plan académique et stratégique pour maximiser leurs résultats et leurs opportunités d'études supérieures.",
    links: ["Prépa Bac de français", "Soutien scolaire", "Stages de vacances", "Choix des spécialités", "Séance découverte", "Rendez-vous d'orientation", "Prépa SAT", "Prépa IELTS", "Prépa DELE", "Cours découverte"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
  "Terminale": {
    category: "Lycée",
    icon: <GraduationCap size={18} />,
    title: "Terminale",
    subtitle: "Réussir le Bac et intégrer les meilleures formations",
    description:
      "La Terminale est une année décisive : spécialités à fort coefficient, Bac de philosophie, Grand Oral et candidatures post-bac. Chaque étape compte et chaque résultat présente un fort impact pour l'avenir de l'élève.",
    descriptionBold:
      "STUDASSIST propose un accompagnement global : académique, méthodologique et stratégique, pour sécuriser le dossier scolaire et optimiser les chances de réussite du projet d'orientation de l'élève.",
    links: ["Soutien scolaire", "Stages de vacances", "Prépa Bac de philo", "Prépa bac de spés", "Grand oral", "Projet d'orientation & Candidatures post-bac", "Séance découverte", "Rendez-vous d'orientation", "Prépa SAT", "Prépa IELTS", "Prépa DELE", "Cours découverte"],
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1200&q=80",
  },
  "PRÉPAS": {
    category: "Supérieur",
    icon: <Rocket size={18} />,
    title: "Études supérieures",
    subtitle: "Structurer son parcours, construire une stratégie académique et accéder aux meilleures opportunités",
    description:
      "Les études supérieures constituent une étape déterminante dans le parcours académique. Elles impliquent des choix structurants, qu'il s'agisse d'une réorientation, d'une spécialisation ou d'une poursuite d'études à l'international.",
    descriptionBold:
      "Chez STUDASSIST, nous accompagnons les étudiants souhaitant optimiser leur trajectoire, renforcer leur dossier ou accéder à des formations plus sélectives, en France ou à l'international.",
    links: ["Soutien scolaire", "Réorientation", "Objectif Master", "Prépa SAT & GMAT", "Prépa IELTS & TOEFL"],
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=1200&q=80",
  },
};

function getIconForLink(linkName: string) {
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
  return <div className="w-1.5 h-1.5 rounded-full bg-sa-green opacity-40" />;
}

/* ---------- Component ---------- */

interface ExpertisePolesProps {
  /** Override initial active cycle (default: "Lycée") */
  defaultCycle?: Cycle;
  /** Section id for anchor links (default: "expertises") */
  id?: string;
  /** Tailwind background/padding overrides for the section wrapper */
  className?: string;
}

export default function ExpertisePoles({
  defaultCycle = "Lycée",
  id = "expertises",
  className,
}: ExpertisePolesProps) {
  const [selectedCycle, setSelectedCycle] = useState<Cycle>(defaultCycle);
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

  useEffect(() => {
    if (expandedLevel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [expandedLevel]);

  return (
    <section
      id={id}
      className={cn(
        "py-14 lg:py-20 bg-white relative overflow-hidden",
        className
      )}
    >
      {/* Luxury Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-sa-green/[0.03] rounded-bl-[200px] -z-0" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-sa-pink/[0.02] rounded-tr-[150px] -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Editorial Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sa-eyebrow mb-4 justify-center"
          >
            Programmes d'excellence
          </motion.span>
          <h2 className="font-display text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-sa-navy leading-[1.05] tracking-tight mb-4">
            Nos pôles <span className="sa-gradient-text">d'expertise</span>
          </h2>
          <p className="text-sa-ink/60 text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Un accompagnement sur-mesure de la maternelle aux grandes écoles, conçu pour révéler le plein potentiel de chaque élève.
          </p>
        </div>

        {/* CYCLE SELECTOR */}
        <div className="max-w-5xl mx-auto mb-10 lg:mb-12">
          <div className="p-1.5 lg:p-2 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-1.5 shadow-inner">
            {cycles.map((cycle) => (
              <button
                key={cycle}
                onClick={() => {
                  setSelectedCycle(cycle);
                  setExpandedLevel(null);
                }}
                className={cn(
                  "flex-1 flex items-center justify-center space-x-3 px-5 py-3 lg:px-6 lg:py-4 rounded-[2rem] transition-all duration-500 group relative overflow-hidden",
                  selectedCycle === cycle
                    ? "bg-white text-sa-navy shadow-[0_15px_30px_rgba(0,0,0,0.08)] border border-gray-100/50 scale-[1.02] z-10"
                    : "text-gray-400 hover:text-sa-green"
                )}
              >
                {selectedCycle === cycle && (
                  <motion.div
                    layoutId="cycleActive"
                    className="absolute inset-0 bg-white -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div
                  className={cn(
                    "w-8 h-8 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                    selectedCycle === cycle
                      ? "bg-sa-green text-white shadow-lg"
                      : "bg-gray-100 text-gray-300 group-hover:bg-sa-green/10 group-hover:text-sa-green"
                  )}
                >
                  {cycle === "Primaire" && <Users size={16} />}
                  {cycle === "Collège" && <BookOpen size={16} />}
                  {cycle === "Lycée" && <GraduationCap size={16} />}
                  {cycle === "Supérieur" && <Rocket size={16} />}
                </div>
                <span className="font-black text-[10px] lg:text-[11px] uppercase tracking-[0.2em]">{cycle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* LEVEL HUB */}
        <div className="max-w-7xl mx-auto block">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCycle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
            >
              {levelsByCycle[selectedCycle].map((level, idx) => (
                <motion.div
                  key={level}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative group h-full"
                >
                  <div
                    onClick={() => setExpandedLevel(level)}
                    className={cn(
                      "bg-white p-6 lg:p-8 rounded-[2rem] border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer group flex flex-col h-full",
                      expandedLevel === level ? "ring-2 ring-sa-green ring-offset-2" : ""
                    )}
                  >
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-sa-light rounded-xl lg:rounded-2xl flex items-center justify-center text-sa-navy mb-5 lg:mb-6 group-hover:bg-sa-green group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {levelConfigs[level].icon}
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold text-sa-navy tracking-tight mb-2 group-hover:text-sa-green transition-colors">
                      {level}
                    </h4>
                    <p className="text-sa-ink/60 text-xs lg:text-[13px] leading-relaxed mb-4 lg:mb-6 line-clamp-2">
                      {levelConfigs[level].subtitle}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between group-hover:border-sa-green/20">
                      <span className="text-[9px] lg:text-[10px] font-black text-gray-300 group-hover:text-sa-navy uppercase tracking-widest transition-colors mb-0 md:mb-px">
                        Détails programme
                      </span>
                      <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-sa-green group-hover:text-white transition-all">
                        <Plus size={14} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FOCUS MODE OVERLAY */}
        {createPortal(
          <AnimatePresence>
            {expandedLevel && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 lg:p-6 bg-sa-navy/60 backdrop-blur-md"
                onClick={() => setExpandedLevel(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 100 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 100 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white w-full max-w-[960px] max-h-[86vh] rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(28,30,70,0.45)] relative flex flex-col"
                >
                  <button
                    onClick={() => setExpandedLevel(null)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center text-sa-navy/70 hover:bg-sa-pink hover:text-white transition-all z-30 shadow-[0_2px_10px_rgba(28,30,70,0.12)] border border-sa-navy/5"
                    aria-label="Fermer"
                  >
                    <Plus size={16} className="rotate-45" />
                  </button>

                  <div className="grid lg:grid-cols-[1.15fr_1fr] flex-1 min-h-0">
                    <div className="p-7 sm:p-9 lg:p-11 overflow-y-auto">
                      <span className="sa-eyebrow mb-5">{expandedLevel}</span>

                      <h3 className="font-display text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold text-sa-navy leading-[1.1] mb-4 tracking-tight">
                        {levelConfigs[expandedLevel].subtitle}
                      </h3>

                      <p className="text-sa-ink/70 text-[15px] leading-relaxed mb-6">
                        {levelConfigs[expandedLevel].description}
                      </p>

                      {levelConfigs[expandedLevel].descriptionBold && (
                        <figure className="relative pl-6 mb-7">
                          <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-sa-green" />
                          <blockquote className="text-sa-navy/90 text-[15px] italic leading-relaxed">
                            <span className="text-sa-pink font-serif text-xl leading-none align-top mr-0.5">“</span>
                            {levelConfigs[expandedLevel].descriptionBold}
                            <span className="text-sa-pink font-serif text-xl leading-none align-top ml-0.5">”</span>
                          </blockquote>
                        </figure>
                      )}

                      <div className="mb-7">
                        <div className="text-[10px] font-semibold text-sa-ink/40 uppercase tracking-[0.25em] mb-3">Nos solutions</div>
                        <div className="flex flex-wrap gap-2">
                          {levelConfigs[expandedLevel].links.map((link, idx) => (
                            <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-sa-light rounded-full text-[11px] font-semibold text-sa-ink/75 border border-transparent hover:border-sa-pink/30 hover:text-sa-pink transition-colors">
                              <span className="text-sa-pink">{getIconForLink(link)}</span>
                              <span>{link}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-5 flex-wrap">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-sa-navy text-white rounded-full font-semibold text-sm hover:bg-sa-pink transition-all shadow-[0_10px_30px_-12px_rgba(28,30,70,0.4)]"
                        >
                          S'inscrire au programme
                          <ArrowRight size={15} />
                        </Link>
                        <button
                          onClick={() => setExpandedLevel(null)}
                          className="text-xs font-semibold text-sa-ink/50 hover:text-sa-navy transition-colors"
                        >
                          ← Retour au hub
                        </button>
                      </div>
                    </div>

                    <div className="hidden lg:block relative bg-sa-navy">
                      <img
                        src={levelConfigs[expandedLevel].image}
                        alt={expandedLevel}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-sa-navy/60" />

                      <div className="absolute bottom-7 left-7 right-7">
                        <div className="w-11 h-11 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 mb-3 text-white">
                          <GraduationCap size={22} />
                        </div>
                        <div className="text-sa-gold font-semibold text-[10px] uppercase tracking-[0.22em] mb-1">Excellence Académique</div>
                        <div className="text-white text-2xl lg:text-3xl font-extrabold tracking-tight">
                          {levelConfigs[expandedLevel].title}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      </div>
    </section>
  );
}
