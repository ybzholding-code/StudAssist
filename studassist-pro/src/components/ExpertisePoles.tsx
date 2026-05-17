import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Users,
  BookOpen,
  Rocket,
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
  "Primaire": ["CP-CM2"],
  "Collège": ["6ème", "5ème", "4ème", "3ème"],
  "Lycée": ["2nde", "1ère", "Terminale"],
  "Supérieur": ["Études supérieures"],
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
  "CP-CM2": {
    category: "Primaire",
    icon: <Users size={18} />,
    title: "Primaire (CP - CM2)",
    subtitle: "Construire des bases solides et développer le plaisir d'apprendre",
    description:
      "Le primaire est une étape fondatrice : lecture, écriture, raisonnement logique et autonomie se construisent progressivement. Chaque année consolide les acquis et prépare l'enfant à une transition sereine vers le collège.",
    descriptionBold:
      "Chez STUDASSIST, nous accompagnons nos élèves du primaire avec une approche ludique, bienveillante, structurée et adaptée à leur rythme d'apprentissage.",
    links: ["Soutien scolaire personnalisé", "Stages de vacances", "Brain Training (calcul mental, ateliers d'échecs, stimulation cognitive)"],
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
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
      "La Seconde est un tournant majeur : programmes beaucoup plus denses, nouvelles méthodes de travail et réflexion sur les spécialités. L'enjeu est d'acquérir rigueur, régularité et méthode tout en faisant face un grand nombre de notions à assimiler ainsi qu'aux premiers questionnements sur ses projets d'études supérieures.",
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
  "Études supérieures": {
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
  const [activeLevel, setActiveLevel] = useState<string>("Terminale");

  // When cycle changes, auto-select the first level of that cycle
  const handleCycleChange = (cycle: Cycle) => {
    setSelectedCycle(cycle);
    setActiveLevel(levelsByCycle[cycle][0]);
  };

  const currentConfig = levelConfigs[activeLevel];

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
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-10">
          <h2 className="font-display text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-sa-navy leading-[1.05] tracking-tight">
            Nos solutions sur mesure <br className="hidden sm:block" />par <span className="sa-gradient-text">niveau scolaire</span>
          </h2>
        </div>

        {/* CYCLE SELECTOR */}
        <div className="max-w-5xl mx-auto mb-8 lg:mb-10">
          <div className="p-1.5 lg:p-2 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row gap-1.5 shadow-inner">
            {cycles.map((cycle) => (
              <button
                key={cycle}
                onClick={() => handleCycleChange(cycle)}
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

        {/* LEVEL TABS */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCycle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Tab buttons */}
              <div className="flex border-b border-gray-200 mb-0 overflow-x-auto">
                {levelsByCycle[selectedCycle].map((level) => (
                  <button
                    key={level}
                    onClick={() => setActiveLevel(level)}
                    className={cn(
                      "relative px-5 py-3 lg:px-7 lg:py-4 text-sm lg:text-base font-bold whitespace-nowrap transition-colors",
                      activeLevel === level
                        ? "text-sa-navy"
                        : "text-gray-400 hover:text-sa-navy/70"
                    )}
                  >
                    {level}
                    {activeLevel === level && (
                      <motion.div
                        layoutId="levelTab"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-sa-green rounded-t-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLevel}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                  className="pt-8 lg:pt-10"
                >
                  {/* Left: text content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-sa-green/10 rounded-xl flex items-center justify-center text-sa-green">
                        {currentConfig.icon}
                      </div>
                      <h3 className="font-display text-[24px] sm:text-[28px] lg:text-[32px] font-extrabold text-sa-navy leading-[1.1] tracking-tight">
                        {currentConfig.title}
                      </h3>
                    </div>

                    <p className="text-sa-green font-semibold text-sm lg:text-[15px] mb-4">
                      {currentConfig.subtitle}
                    </p>

                    <p className="text-sa-ink/70 text-[14px] lg:text-[15px] leading-relaxed mb-5">
                      {currentConfig.description}
                    </p>

                    {currentConfig.descriptionBold && (
                      <figure className="relative pl-5 mb-6">
                        <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-sa-green" />
                        <blockquote className="text-sa-navy/85 text-[14px] italic leading-relaxed">
                          "{currentConfig.descriptionBold}"
                        </blockquote>
                      </figure>
                    )}

                    {/* Solutions chips */}
                    <div className="mb-7">
                      <div className="text-[10px] font-semibold text-sa-ink/40 uppercase tracking-[0.25em] mb-3">Nos solutions</div>
                      <div className="flex flex-wrap gap-2">
                        {currentConfig.links.map((link, idx) => (
                          <Link
                            key={idx}
                            to="/contact"
                            className="flex items-center gap-2 px-3.5 py-2 bg-sa-light rounded-full text-[11px] font-semibold text-sa-ink/75 border border-transparent hover:border-sa-green/30 hover:text-sa-green transition-colors"
                          >
                            <span className="text-sa-green">{getIconForLink(link)}</span>
                            <span>{link}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-sa-navy text-white rounded-full font-semibold text-sm hover:bg-sa-green transition-all shadow-[0_10px_30px_-12px_rgba(28,30,70,0.4)]"
                    >
                      S'inscrire au programme
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                </motion.div>
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
