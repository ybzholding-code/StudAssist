import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  CheckCircle2,
} from "@/src/components/ui/icons";
import FAQ from "./FAQ";
import ImageFloaters from "./ImageFloaters";
import { buildFaq } from "../data/faq";
import { usePageMeta } from "../hooks/usePageMeta";

/* ---------- Types (unchanged public API) ---------- */

export interface SectionBlock {
  title: string;
  paragraphs?: ReactNode[];
  bullets?: string[];
  callout?: string;
}

export interface AudienceGroup {
  title: string;
  bullets: string[];
}

export interface OrientationLevelPageProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  intro: ReactNode[];
  heroImage: string;
  accent?: "pink" | "gold" | "blue" | "coral" | "navy";

  enjeux?: {
    title: string;
    lead?: string;
    bullets: string[];
  };

  sections: SectionBlock[];

  audience?: {
    title: string;
    groups: AudienceGroup[];
  };

  whyChoose?: {
    title: string;
    bullets: string[];
  };

  ctaBanner: {
    title: string;
    body: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };

  faqKeys?: Parameters<typeof buildFaq>;
  prev?: { label: string; to: string };
  next?: { label: string; to: string };
}

/* ---------- Levels registry (sidebar) ---------- */

const LEVELS = [
  { key: "seconde",       label: "Seconde",       href: "/orientation/seconde" },
  { key: "premiere",      label: "Première",      href: "/orientation/premiere" },
  { key: "terminale",     label: "Terminale",     href: "/orientation/terminale" },
  { key: "reorientation", label: "Réorientation", href: "/orientation/reorientation" },
  { key: "master",        label: "Master",        href: "/orientation/master" },
];

function detectLevelKey(eyebrow: string): string {
  const e = eyebrow.toLowerCase();
  if (e.includes("réorientation") || e.includes("reorientation")) return "reorientation";
  if (e.includes("master")) return "master";
  if (e.includes("terminale")) return "terminale";
  if (e.includes("première") || e.includes("premiere")) return "premiere";
  if (e.includes("seconde")) return "seconde";
  return "seconde";
}

function currentLevelLabel(eyebrow: string): string {
  const lvl = LEVELS.find((l) => l.key === detectLevelKey(eyebrow));
  return lvl ? lvl.label : "Seconde";
}

/* ---------- Accordion item ---------- */

interface AccordionProps {
  key?: string | number;
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}
function AccordionItem({ title, defaultOpen = false, children }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left py-5 group"
      >
        <span
          className={`text-sm lg:text-[15px] font-bold leading-snug transition-colors ${
            open ? "text-brand-teal" : "text-brand-darkblue group-hover:text-brand-teal"
          }`}
        >
          {title}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            open ? "bg-brand-teal text-white rotate-180" : "bg-brand-teal/10 text-brand-teal"
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-gray-500 text-sm leading-relaxed space-y-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Inline illustration (thinker with 2 question marks) ---------- */

function ThinkerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Left pink question bubble */}
      <circle cx="90" cy="150" r="54" fill="#EE4B62" />
      <text x="90" y="170" textAnchor="middle" fontSize="64" fontWeight="800" fill="white" fontFamily="Plus Jakarta Sans, sans-serif">?</text>
      {/* Right purple question bubble */}
      <circle cx="310" cy="130" r="48" fill="#8E56FF" />
      <text x="310" y="148" textAnchor="middle" fontSize="56" fontWeight="800" fill="white" fontFamily="Plus Jakarta Sans, sans-serif">?</text>
      {/* Yellow behind head */}
      <circle cx="200" cy="210" r="70" fill="#F5B43E" />
      {/* Head back */}
      <path d="M150 210 Q150 140 205 140 Q260 140 260 210 L260 250 L150 250 Z" fill="#2d2d2d" />
      {/* Body */}
      <path d="M130 400 Q130 300 200 290 Q270 300 270 400 Z" fill="#1AB69D" />
      {/* Left arm raised to head */}
      <path d="M150 310 Q110 260 140 220 Q160 215 170 240 Q175 275 180 300 Z" fill="#F5B43E" />
      {/* Right arm */}
      <path d="M260 310 Q290 300 285 360 L260 360 Z" fill="#F5B43E" />
      {/* Neck */}
      <rect x="185" y="240" width="30" height="30" fill="#F5B43E" />
    </svg>
  );
}

/* ---------- Component ---------- */

export default function OrientationLevelPage({
  eyebrow,
  title,
  subtitle,
  intro,
  heroImage,
  enjeux,
  sections,
  audience,
  whyChoose,
  ctaBanner,
  faqKeys = ["orientation", "method"] as Parameters<typeof buildFaq>,
  prev,
  next,
}: OrientationLevelPageProps) {
  const activeKey = detectLevelKey(eyebrow);
  const levelLabel = currentLevelLabel(eyebrow);

  usePageMeta({
    title: `Orientation ${levelLabel} — Accompagnement Académique`,
    description: `Orientation scolaire en ${levelLabel} avec STUDASSIST. ${subtitle} Accompagnement personnalisé au Maroc et à l'international.`,
  });

  return (
    <div className="bg-white">
      {/* ============ HERO ============ */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-10 lg:py-16">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-brand-red/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center space-x-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-4">
              <span className="w-6 h-px bg-brand-teal"></span>
              <span>{eyebrow}</span>
              <span className="w-6 h-px bg-brand-teal"></span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter leading-[1.1]">
              {title}
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <ImageFloaters />
              <div className="relative z-20 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 transform -rotate-1">
                <img
                  src={heroImage}
                  alt={`Orientation scolaire ${levelLabel} - STUDASSIST accompagnement académique`}
                  className="rounded-[2rem] w-full h-[350px] lg:h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-darkblue leading-tight uppercase tracking-tight">
                {subtitle}
              </h2>
              <div className="space-y-3 text-gray-500 leading-relaxed font-medium text-sm">
                {intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Link
                to={ctaBanner.primaryHref || "/contact"}
                className="bg-brand-teal text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-darkblue transition-all shadow-xl shadow-brand-teal/20 inline-flex items-center gap-3"
              >
                <span>Réserver ma séance découverte</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SIDEBAR + ACCORDION CONTENT ============ */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-14 max-w-6xl mx-auto">
            {/* Vertical level tabs */}
            <aside>
              <div className="lg:sticky lg:top-32 space-y-2">
                {LEVELS.map((l) => {
                  const active = l.key === activeKey;
                  return (
                    <Link
                      key={l.key}
                      to={l.href}
                      className={`flex items-center justify-between px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all ${
                        active
                          ? "bg-brand-teal text-white shadow-lg shadow-brand-teal/20"
                          : "bg-white text-brand-darkblue hover:bg-brand-teal/5 border border-gray-100"
                      }`}
                    >
                      <span>{l.label}</span>
                      {active && <ArrowRight size={12} />}
                    </Link>
                  );
                })}
              </div>
            </aside>

            {/* Accordion content */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-black text-brand-darkblue uppercase tracking-tight leading-tight mb-4">
                Orientation en {levelLabel}
              </h2>

              {/* Teal accent bar */}
              <div className="w-16 h-1 bg-brand-teal rounded-full mb-6" />

              {/* Accordion: enjeux (if any) + sections + audience groups */}
              <div className="mt-6">
                {enjeux && (
                  <AccordionItem title={enjeux.title} defaultOpen>
                    {enjeux.lead && <p>{enjeux.lead}</p>}
                    <ul className="space-y-2 mt-2">
                      {enjeux.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                )}

                {sections.map((s, i) => (
                  <AccordionItem key={i} title={s.title}>
                    {s.paragraphs && s.paragraphs.map((p, k) => <p key={k}>{p}</p>)}
                    {s.bullets && s.bullets.length > 0 && (
                      <ul className="space-y-2 mt-2">
                        {s.bullets.map((b, k) => (
                          <li key={k} className="flex gap-2.5 items-start">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.callout && (
                      <div className="relative mt-3 pl-4 py-2 border-l-[3px] border-brand-teal">
                        <p className="text-brand-darkblue font-bold italic text-sm">{s.callout}</p>
                      </div>
                    )}
                  </AccordionItem>
                ))}

                {audience &&
                  audience.groups.map((g, i) => (
                    <AccordionItem
                      key={`aud-${i}`}
                      title={audience.groups.length === 1 ? audience.title : `${audience.title} — ${g.title}`}
                    >
                      <ul className="space-y-2">
                        {g.bullets.map((b, k) => (
                          <li key={k} className="flex gap-2.5 items-start">
                            <CheckCircle2 size={15} className="text-brand-teal shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionItem>
                  ))}

                {whyChoose && (
                  <AccordionItem title={whyChoose.title}>
                    <ul className="space-y-2">
                      {whyChoose.bullets.map((b, k) => (
                        <li key={k} className="flex gap-2.5 items-start">
                          <CheckCircle2 size={15} className="text-brand-teal shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ POURQUOI CHOISIR — illustration + bullets ============ */}
      {whyChoose && (
        <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16 bg-white">
          <div className="container mx-auto px-6 w-full">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
              <div className="relative">
                <ThinkerIllustration className="w-full max-w-[360px] mx-auto" />
              </div>
              <div>
                <div className="inline-flex items-center space-x-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-4">
                  <span className="w-6 h-px bg-brand-teal"></span>
                  <span>Nos atouts</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-brand-darkblue uppercase tracking-tight leading-tight mb-4">
                  {whyChoose.title}
                </h3>
                <div className="w-16 h-1 bg-brand-teal rounded-full mb-6" />
                <ul className="space-y-3">
                  {whyChoose.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 size={16} className="text-brand-teal shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm font-medium leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ CTA BANNER ============ */}
      <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16 relative z-20">
        <div className="container mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-red rounded-[3.5rem] p-10 lg:p-20 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden shadow-[0_40px_100px_rgba(239,71,111,0.25)] border border-white/10"
          >
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
              <svg width="100%" height="100%">
                <pattern id="cta-grid-level" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#cta-grid-level)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl lg:text-5xl font-black mb-6 uppercase tracking-tighter leading-[0.95]">
                {ctaBanner.title}
              </h2>
              <p className="text-white/90 font-medium text-base lg:text-lg leading-relaxed max-w-md mb-8">
                {ctaBanner.body}
              </p>
            </div>

            <div className="relative z-10 mt-8 lg:mt-0">
              <Link
                to={ctaBanner.primaryHref || "/contact"}
                className="bg-brand-darkblue text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.15em] text-sm hover:bg-white hover:text-brand-darkblue transition-all duration-300 shadow-2xl shadow-black/20 group flex items-center space-x-4"
              >
                <span>{ctaBanner.primaryLabel || "Prendre rendez-vous"}</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <FAQ
        title="Orientation : questions fréquentes"
        subtitle="Les réponses aux questions que nous recevons le plus souvent sur ce programme."
        items={buildFaq(...faqKeys)}
      />

      {/* ============ PREV / NEXT NAV ============ */}
      {(prev || next) && (
        <section className="py-10 lg:py-14 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4 max-w-5xl mx-auto">
              {prev ? (
                <Link
                  to={prev.to}
                  className="flex-1 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-teal/30 hover:-translate-y-0.5 transition-all flex items-center gap-4 group"
                >
                  <ArrowLeft size={16} className="text-brand-teal group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">
                      Précédent
                    </div>
                    <div className="font-black text-brand-darkblue text-sm">{prev.label}</div>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {next ? (
                <Link
                  to={next.to}
                  className="flex-1 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-teal/30 hover:-translate-y-0.5 transition-all flex items-center gap-4 group justify-end text-right"
                >
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">
                      Suivant
                    </div>
                    <div className="font-black text-brand-darkblue text-sm">{next.label}</div>
                  </div>
                  <ArrowRight size={16} className="text-brand-teal group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
