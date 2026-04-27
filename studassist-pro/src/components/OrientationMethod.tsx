import { motion } from "motion/react";
import {
  Users,
  UserCircle2,
  ClipboardList,
  GraduationCap,
  FileCheck2,
  Trophy,
  Target,
  Sparkles,
  HeartHandshake,
} from "@/src/components/ui/icons";
import type { ReactNode } from "react";

interface Step {
  number: string;
  dot: string;         // tailwind bg color class for the color dot
  icon: ReactNode;
  title: string;
  tagline: string;
  intro?: string;
  bullets: string[];
  objective: string;
}

const steps: Step[] = [
  {
    number: "01",
    dot: "bg-sa-gold",
    icon: <Users size={22} />,
    title: "Entretien familial initial",
    tagline: "Aligner visions & objectifs",
    intro: "Échange en famille (élève + parents)",
    bullets: [
      "Définition des objectifs académiques et du projet post-bac",
      "Recueil des attentes parentales",
      "Expression des aspirations de l'élève",
    ],
    objective: "Poser un cadre clair et partagé dès le départ.",
  },
  {
    number: "02",
    dot: "bg-sa-blue",
    icon: <UserCircle2 size={22} />,
    title: "Profiling individuel (one-to-one)",
    tagline: "Comprendre l'élève dans sa globalité",
    intro: "Entretiens personnalisés pour analyser :",
    bullets: [
      "Parcours académique",
      "Expériences extrascolaires",
      "Centres d'intérêt",
      "Personnalité & ambitions",
    ],
    objective: "Construire un profil complet, au-delà des notes.",
  },
  {
    number: "03",
    dot: "bg-sa-pink",
    icon: <ClipboardList size={22} />,
    title: "Restitution & stratégie d'orientation",
    tagline: "Transformer le profiling en plan d'action",
    bullets: [
      "Restitution du profil en entretien familial",
      "Proposition d'une short-list d'écoles adaptée",
      "Sélection finale réalisée ensemble avec nos conseillers experts",
    ],
    objective: "Bâtir un projet cohérent, ambitieux et réaliste.",
  },
  {
    number: "04",
    dot: "bg-sa-green",
    icon: <GraduationCap size={22} />,
    title: "Renforcement académique & préparation ciblée",
    tagline: "Aligner le niveau réel avec les objectifs d'orientation",
    intro: "Lorsque nécessaire, nous intégrons directement au parcours :",
    bullets: [
      "Du soutien scolaire ciblé pour renforcer certaines matières clés",
      "Des préparations aux concours pour les filières sélectives",
      "Des préparations aux certifications de langues, anticipées selon les exigences des établissements visés",
    ],
    objective: "Sécuriser le niveau académique requis et maximiser les chances d'admission.",
  },
  {
    number: "05",
    dot: "bg-sa-orange",
    icon: <FileCheck2 size={22} />,
    title: "Construction des dossiers & préparation aux entretiens",
    tagline: "Valoriser le profil et transformer le potentiel en impact",
    intro: "Travail collaboratif sur :",
    bullets: [
      "Lettres de motivation",
      "Formulaires",
      "CV",
      "Pièces académiques",
      "Candidatures envoyées par STUDASSIST",
      "Simulations d'entretiens & mises en situation filmées",
      "Feedbacks personnalisés & amélioration par itérations successives",
    ],
    objective: "Créer des dossiers différenciants et préparer l'élève à convaincre.",
  },
  {
    number: "06",
    dot: "bg-sa-coral",
    icon: <Trophy size={22} />,
    title: "Suivi des admissions & ajustement stratégique",
    tagline: "Sécuriser plusieurs options",
    bullets: [
      "Suivi des réponses",
      "Analyse des résultats",
      "Ajustement de la stratégie si nécessaire",
    ],
    objective: "Optimiser chaque opportunité.",
  },
];

export default function OrientationMethod() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* decorative background */}
      <div className="absolute inset-0 sa-dots opacity-40 pointer-events-none" />
      <div className="absolute -left-40 top-40 w-[400px] h-[400px] rounded-full bg-sa-pink/10 blur-3xl" />
      <div className="absolute -right-40 bottom-40 w-[500px] h-[500px] rounded-full bg-sa-blue/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="sa-eyebrow">Notre méthode d'orientation</span>
          <h2 className="sa-h-display mt-5 mb-6">
            Un parcours <span className="sa-gradient-text">structuré</span>,<br />
            global et orienté réussite.
          </h2>
          <p className="text-lg text-sa-ink/65 leading-relaxed">
            De la réflexion initiale à l'admission finale — nous pilotons chaque projet comme une stratégie.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-sa-green opacity-30 -translate-x-[1px]" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={s.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className={`relative grid lg:grid-cols-2 gap-8 items-start ${
                    isLeft ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Step card */}
                  <div className={`pl-20 lg:pl-0 ${isLeft ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="sa-card p-8 lg:p-9">
                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                        <div className={`w-11 h-11 rounded-xl ${s.dot} text-white flex items-center justify-center shrink-0`}>
                          {s.icon}
                        </div>
                        <div className={isLeft ? "lg:text-right" : ""}>
                          <div className="text-[10px] font-bold text-sa-ink/40 uppercase tracking-[0.2em]">Étape {s.number}</div>
                          <h3 className="text-xl font-extrabold text-sa-navy leading-tight">{s.title}</h3>
                        </div>
                      </div>

                      <p className={`text-sm font-semibold text-sa-pink mb-4 ${isLeft ? "lg:text-right" : ""}`}>
                        {s.tagline}
                      </p>

                      {s.intro && (
                        <p className={`text-sm text-sa-ink/70 mb-3 ${isLeft ? "lg:text-right" : ""}`}>
                          {s.intro}
                        </p>
                      )}

                      <ul className={`space-y-1.5 text-sm text-sa-ink/70 mb-5 ${isLeft ? "lg:text-right" : ""}`}>
                        {s.bullets.map((b, j) => (
                          <li key={j} className={`flex gap-2 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                            <span className="text-sa-pink shrink-0 mt-0.5">›</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`flex items-start gap-2 pt-4 border-t border-sa-navy/5 ${isLeft ? "lg:flex-row-reverse" : ""}`}>
                        <Target size={16} className="text-sa-gold shrink-0 mt-0.5" />
                        <p className="text-sm font-semibold text-sa-navy">
                          <span className="text-sa-ink/50 font-normal">Objectif : </span>
                          {s.objective}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline marker */}
                  <div
                    className={`absolute left-8 lg:left-1/2 top-6 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full ${s.dot} text-white font-extrabold shadow-lg ring-4 ring-white`}
                  >
                    {s.number}
                  </div>

                  {/* Spacer opposite side (keeps grid balanced on desktop) */}
                  <div className="hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Continuous support banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-5xl mx-auto rounded-[2rem] bg-sa-navy text-white p-8 lg:p-10 flex flex-col md:flex-row items-center gap-6 shadow-xl"
        >
          <div className="w-14 h-14 rounded-2xl bg-sa-gold/20 border border-sa-gold/40 flex items-center justify-center shrink-0">
            <HeartHandshake size={26} className="text-sa-gold" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-extrabold mb-2">Un accompagnement continu & transparent</h3>
            <p className="text-white/75 text-sm leading-relaxed">
              Contact permanent avec l'élève et sa famille · documents et rendez-vous centralisés · groupe de discussion dédié · visibilité complète pour toutes les parties.
            </p>
          </div>
        </motion.div>

        {/* Signature */}
        <div className="mt-14 max-w-3xl mx-auto text-center">
          <Sparkles className="text-sa-gold mx-auto mb-4" size={28} />
          <p className="text-xl lg:text-2xl font-extrabold text-sa-navy leading-tight">
            Une orientation pilotée <span className="sa-gradient-text">comme un projet global.</span>
          </p>
          <p className="mt-2 text-sa-ink/60 font-medium">
            Académique, stratégique et humaine. Menée en équipe, dans l'intérêt de l'élève.
          </p>
        </div>
      </div>
    </section>
  );
}
