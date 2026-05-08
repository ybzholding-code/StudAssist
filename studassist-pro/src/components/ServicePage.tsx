import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Star,
  Quote,
} from "@/src/components/ui/icons";
import { cn } from "@/src/lib/utils";
import FAQ from "./FAQ";
import Logo from "./Logo";
import TestimonialsSection from "./TestimonialsSection";
import ImageFloaters from "./ImageFloaters";
import type { FaqItem } from "../data/faq";

export interface ServiceModule {
  icon: ReactNode;
  title: string;
  description: string;
  points?: string[];
}

export interface ServicePageProps {
  /** Short uppercase eyebrow above the title */
  eyebrow: string;
  /** Main hero title — plain string or JSX for highlights */
  title: ReactNode;
  /** Hero sub-description */
  intro: string;
  /** Tone color for the hero accent circle — tailwind color token suffix */
  accent?: "pink" | "gold" | "blue" | "coral" | "orange" | "green";
  /** Hero image URL */
  heroImage: string;
  /** Three quick value-prop bullets displayed under hero */
  highlights?: { label: string; value: string }[];
  /** List of modules / programs the service offers */
  modules: ServiceModule[];
  modulesTitle?: string;
  modulesSubtitle?: string;
  /** A right-hand "Pourquoi choisir STUDASSIST ?" explanation block */
  whyPoints?: { title: string; body: string }[];
  /** Final CTA label */
  ctaLabel?: string;
  ctaHref?: string;
  /** FAQ items */
  faqItems?: FaqItem[];
  faqTitle?: string;
}

export default function ServicePage({
  eyebrow,
  title,
  intro,
  heroImage,
  highlights,
  modules,
  modulesTitle = "Nos programmes d'accompagnement",
  modulesSubtitle = "Des parcours adaptés à chaque profil, à chaque objectif, à chaque ambition.",
  whyPoints,
  ctaLabel = "Réserver un RDV découverte",
  ctaHref = "/contact",
  faqItems,
  faqTitle = "Questions fréquentes",
}: ServicePageProps) {
  return (
    <div className="bg-white">
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-12 lg:pt-20 pb-16 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-6"
            >
              <span className="w-8 h-px bg-brand-teal" />
              <span>{eyebrow}</span>
              <span className="w-8 h-px bg-brand-teal" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue mb-4 uppercase tracking-tighter leading-[1.1] lg:leading-tight"
            >
              <span className="sa-wavy sa-wavy-teal">{title}</span>
            </motion.h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <ImageFloaters />
              <div className="relative z-20 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 transform -rotate-2">
                <img
                  src={heroImage}
                  alt={eyebrow}
                  className="rounded-[2rem] w-full h-[280px] lg:h-[420px] object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                {intro}
              </p>

              {highlights && highlights.length > 0 && (
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {highlights.map((h, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center"
                    >
                      <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">
                        {h.value}
                      </div>
                      <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">
                        {h.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to={ctaHref}
                  className="bg-brand-teal text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-darkblue transition-all shadow-xl shadow-brand-teal/20 inline-flex items-center justify-center gap-3"
                >
                  <span>{ctaLabel}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MODULES / PROGRAMS ============ */}
      <section className="py-16 lg:py-32 bg-[#f8fbfc] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Programmes
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              {modulesTitle}
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              {modulesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative group"
              >
                <div className="h-full bg-white border border-gray-100 p-6 lg:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(17,29,74,0.04)] hover:shadow-[0_40px_80px_rgba(17,29,74,0.1)] hover:border-brand-teal/20 transition-all duration-500 overflow-hidden">
                  <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-8 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 bg-gray-50">
                    {m.icon}
                  </div>
                  <h3 className="text-brand-darkblue font-black text-lg uppercase tracking-tight mb-4 group-hover:text-brand-teal transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-5">
                    {m.description}
                  </p>
                  {m.points && m.points.length > 0 && (
                    <ul className="space-y-2 pt-4 border-t border-gray-100">
                      {m.points.map((p, pi) => (
                        <li key={pi} className="flex items-start gap-2 text-[13px] text-gray-500 font-medium">
                          <CheckCircle2 size={14} className="text-brand-teal shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER — Signature Red Executive ============ */}
      <section className="py-16 lg:py-24 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-red rounded-[2.5rem] lg:rounded-[3.5rem] p-8 lg:p-20 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden shadow-[0_40px_100px_rgba(239,71,111,0.25)] border border-white/10"
          >
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
              <svg width="100%" height="100%">
                <pattern id={`cta-grid-${eyebrow.replace(/\s/g, "-").toLowerCase()}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill={`url(#cta-grid-${eyebrow.replace(/\s/g, "-").toLowerCase()})`} />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
              <div className="flex items-center space-x-3 mb-8">
                <span className="w-12 h-[2px] bg-brand-darkblue" />
                <span className="text-brand-darkblue font-black text-[11px] tracking-[0.4em] uppercase">
                  Séance découverte
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 lg:mb-8 uppercase tracking-tighter leading-[1.05] lg:leading-[0.95]">
                Votre <span className="text-brand-darkblue italic">succès</span>{" "}
                <br className="hidden lg:block" /> commence ici.
              </h2>

              <p className="text-white/90 font-medium text-lg leading-relaxed max-w-md">
                Un diagnostic complet de 30 minutes avec un expert STUDASSIST pour analyser le
                profil et poser les bases d'une stratégie adaptée.
              </p>
            </div>

            <div className="relative z-10 mt-12 lg:mt-0">
              <div className="flex flex-col items-center lg:items-end space-y-8">
                <Link
                  to={ctaHref}
                  className="bg-brand-darkblue text-white px-14 py-7 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-brand-darkblue transition-all duration-300 shadow-2xl shadow-black/20 group flex items-center space-x-4"
                >
                  <span>Réserver ma séance</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white">
                    <Phone size={16} />
                  </div>
                  <div className="text-left">
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                      Ligne Directe
                    </p>
                    <a
                      href="tel:+212669495996"
                      className="text-white font-bold tracking-tight hover:text-brand-darkblue transition-colors"
                    >
                      +212 6 69 49 59 96
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ POURQUOI CHOISIR ============ */}
      {whyPoints && whyPoints.length > 0 && (
        <section className="py-16 lg:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-6">
                <span className="w-8 h-px bg-brand-teal" />
                <span>Pourquoi choisir</span>
                <span className="w-8 h-px bg-brand-teal" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue mb-8 uppercase tracking-tighter leading-tight">
                Pourquoi choisir <span className="text-brand-teal">STUDASSIST</span> ?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whyPoints.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-gray-100 p-6 lg:p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(17,29,74,0.03)] hover:shadow-[0_30px_70px_rgba(17,29,74,0.08)] hover:border-brand-teal/20 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform">
                    <CheckCircle2 size={22} />
                  </div>
                  <h3 className="text-brand-darkblue font-black text-lg uppercase tracking-tight mb-3 group-hover:text-brand-teal transition-colors">
                    {w.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{w.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ TESTIMONIALS (shared) ============ */}
      <TestimonialsSection />

      {/* ============ FAQ ============ */}
      {faqItems && faqItems.length > 0 && (
        <FAQ title={faqTitle} subtitle="Les réponses aux questions les plus fréquentes." items={faqItems} />
      )}

      {/* ============ FINAL REJOIN CTA ============ */}
      <section className="py-16 lg:py-32 bg-brand-darkblue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id={`pattern-final-${eyebrow.replace(/\s/g, "-").toLowerCase()}`} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill={`url(#pattern-final-${eyebrow.replace(/\s/g, "-").toLowerCase()})`} />
          </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8">
              <Logo variant="light" height={48} />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
              Construisons ensemble <br />
              <span className="text-brand-teal">votre avenir</span>.
            </h2>
            <p className="text-white/70 text-lg font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              Un premier rendez-vous gratuit pour évaluer le profil et poser les bases d'une
              stratégie adaptée.
            </p>
            <Link
              to={ctaHref}
              className="bg-brand-red text-white px-16 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl shadow-brand-red/30 group inline-flex items-center space-x-4"
            >
              <span>Prendre rendez-vous</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
