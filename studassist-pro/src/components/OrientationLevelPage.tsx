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
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}
function AccordionItem({ title, defaultOpen = false, children }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-sa-navy/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left py-5 group"
      >
        <span
          className={`text-[15px] lg:text-base font-semibold leading-snug transition-colors ${
            open ? "text-sa-pink" : "text-sa-navy group-hover:text-sa-pink"
          }`}
        >
          {title}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            open ? "bg-sa-pink text-white rotate-180" : "bg-sa-pink/10 text-sa-pink"
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
            <div className="pb-6 pr-12 text-sa-ink/70 text-[14.5px] leading-relaxed space-y-3">
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

  return (
    <div className="bg-white">
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-14 pb-16 lg:pt-20 lg:pb-24">
        {/* soft pink/purple background blobs */}
        <div className="absolute inset-0 bg-sa-pink-soft/40" />
        <div className="absolute -top-32 -right-24 w-[600px] h-[600px] rounded-full blur-3xl bg-sa-pink/15" />
        <div className="absolute top-40 -left-32 w-[400px] h-[400px] rounded-full bg-sa-gold/15 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          {/* eyebrow */}
          <div className="mb-6 flex items-center gap-2">
            <span className="text-sa-pink font-bold text-sm">›</span>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-sa-pink">
              Orientation scolaire
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <h1 className="font-display text-[32px] sm:text-[40px] lg:text-[52px] font-extrabold text-sa-navy leading-[1.05] tracking-tight mb-5">
                Orientation académique avec{" "}
                <span className="sa-wavy-yellow text-sa-pink">STUDASSIST</span>
              </h1>
              <p className="text-sa-ink/70 text-base lg:text-[17px] leading-relaxed max-w-xl mb-4">
                Construire un projet d'études clair, cohérent et ambitieux.
              </p>
              <p className="text-sa-ink/70 text-[15px] lg:text-base leading-relaxed max-w-xl mb-8">
                Chez <span className="font-semibold text-sa-navy">STUDASSIST</span>, nous accompagnons élèves et étudiants à chaque étape de leur parcours académique — du lycée jusqu'au Master — afin de les aider à faire des choix éclairés et stratégiques. Grâce à une analyse approfondie du profil, à une écoute active et à un accompagnement personnalisé, nous transformons l'orientation en véritable levier de réussite et d'épanouissement académique.
              </p>
              <Link to={ctaBanner.primaryHref || "/contact"} className="sa-btn-primary">
                Réserver ma séance découverte <ArrowRight size={15} />
              </Link>
            </div>

            <div className="relative">
              <ImageFloaters />
              <div className="relative z-20 rounded-[2rem] overflow-hidden aspect-[5/4] shadow-[0_40px_80px_-25px_rgba(12,27,68,0.22)]">
                <img
                  src={heroImage}
                  alt={levelLabel}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* scroll hint */}
          <div className="flex justify-center mt-10 lg:mt-14">
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-sa-pink">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SIDEBAR + ACCORDION CONTENT ============ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Vertical level tabs */}
            <aside>
              <div className="lg:sticky lg:top-32 space-y-2">
                {LEVELS.map((l) => {
                  const active = l.key === activeKey;
                  return (
                    <Link
                      key={l.key}
                      to={l.href}
                      className={`flex items-center justify-between px-5 py-3.5 rounded-xl font-semibold text-[15px] transition-all ${
                        active
                          ? "bg-sa-pink text-white shadow-[0_10px_24px_-10px_rgba(231,50,125,0.55)]"
                          : "bg-sa-pink-soft/60 text-sa-navy hover:bg-sa-pink-soft"
                      }`}
                    >
                      <span>{l.label}</span>
                      {active && <ArrowRight size={14} />}
                    </Link>
                  );
                })}
              </div>
            </aside>

            {/* Accordion content */}
            <div>
              <h2 className="font-display text-[26px] lg:text-[34px] font-extrabold text-sa-navy leading-tight tracking-tight mb-5">
                Orientation scolaire en {levelLabel}
              </h2>

              {/* Green gradient pill subtitle */}
              <div className="relative mb-8 rounded-2xl bg-sa-green text-white font-semibold text-[14.5px] lg:text-[15px] px-6 py-4 flex items-center justify-between gap-4 shadow-[0_14px_28px_-14px_rgba(27,183,157,0.55)]">
                <span className="leading-snug">{subtitle}</span>
                <ArrowRight size={18} className="shrink-0" />
              </div>

              {/* Lead paragraphs */}
              <div className="space-y-4 text-sa-ink/75 leading-relaxed text-[15px] mb-6">
                {intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Accordion: enjeux (if any) + sections + audience groups */}
              <div className="mt-6">
                {enjeux && (
                  <AccordionItem title={enjeux.title} defaultOpen>
                    {enjeux.lead && <p>{enjeux.lead}</p>}
                    <ul className="space-y-2 mt-2">
                      {enjeux.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sa-pink shrink-0" />
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
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sa-pink shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.callout && (
                      <div className="relative mt-3 pl-4 py-2 border-l-[3px] border-sa-pink">
                        <p className="text-sa-navy font-semibold italic">{s.callout}</p>
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
                            <CheckCircle2 size={15} className="text-sa-pink shrink-0 mt-0.5" />
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
                          <CheckCircle2 size={15} className="text-sa-pink shrink-0 mt-0.5" />
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
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
              <div className="relative">
                <ThinkerIllustration className="w-full max-w-[420px] mx-auto" />
                {/* dots decoration */}
                <div className="hidden md:block absolute bottom-0 left-0 w-24 h-24 sa-dots opacity-60" />
              </div>
              <div>
                <h3 className="font-display text-[24px] lg:text-[30px] font-extrabold text-sa-navy leading-tight tracking-tight mb-2">
                  {whyChoose.title}
                </h3>
                <div className="w-16 h-[3px] bg-sa-green rounded-full mb-6" />
                <ul className="space-y-3">
                  {whyChoose.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle2 size={18} className="text-sa-green shrink-0 mt-0.5" />
                      <span className="text-sa-ink/75 text-[15px] leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============ TEAL CTA BANNER (with image) ============ */}
      <section className="relative">
        <div className="relative overflow-hidden bg-sa-green text-white">
          {/* subtle decorative circles — rotating for life */}
          <motion.div
            className="absolute top-0 left-10 w-40 h-40 rounded-full border-[5px] border-white/15"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ borderStyle: "dashed" }}
          />
          <motion.div
            className="absolute bottom-0 right-20 w-24 h-24 rounded-full border-[4px] border-white/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            style={{ borderStyle: "dashed" }}
          />
          <div className="container mx-auto px-6 py-12 lg:py-0 relative z-10">
            <div className="grid md:grid-cols-[1fr_1.2fr] items-end gap-8">
              {/* Image column (bleeds up) */}
              <div className="relative hidden md:block">
                <img
                  src={heroImage}
                  alt="STUDASSIST"
                  className="w-full max-w-sm aspect-square object-cover object-center rounded-t-[2rem] lg:-mt-8"
                />
              </div>
              {/* Text column */}
              <div className="py-4 lg:py-16">
                <h3 className="font-display text-3xl lg:text-[38px] font-extrabold leading-[1.05] mb-6 max-w-lg">
                  {ctaBanner.title}
                </h3>
                <p className="text-white/85 text-[15px] lg:text-base leading-relaxed max-w-lg mb-7">
                  {ctaBanner.body}
                </p>
                <Link
                  to={ctaBanner.primaryHref || "/contact"}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-sa-pink text-white font-bold rounded-full hover:bg-white hover:text-sa-pink transition-all shadow-[0_14px_30px_-10px_rgba(231,50,125,0.5)]"
                >
                  {ctaBanner.primaryLabel || "Commencez maintenant"} <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
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
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col sm:flex-row justify-between gap-3 max-w-5xl mx-auto">
              {prev ? (
                <Link
                  to={prev.to}
                  className="sa-card flex-1 p-5 hover:-translate-y-0.5 transition-all flex items-center gap-4 group"
                >
                  <ArrowLeft size={18} className="text-sa-pink group-hover:-translate-x-1 transition-transform" />
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-sa-ink/50 mb-0.5">
                      Précédent
                    </div>
                    <div className="font-bold text-sa-navy">{prev.label}</div>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {next ? (
                <Link
                  to={next.to}
                  className="sa-card flex-1 p-5 hover:-translate-y-0.5 transition-all flex items-center gap-4 group justify-end text-right"
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-sa-ink/50 mb-0.5">
                      Suivant
                    </div>
                    <div className="font-bold text-sa-navy">{next.label}</div>
                  </div>
                  <ArrowRight size={18} className="text-sa-pink group-hover:translate-x-1 transition-transform" />
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
