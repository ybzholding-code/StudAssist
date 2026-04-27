import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, HelpCircle, MessageCircle } from "@/src/components/ui/icons";
import { Link } from "react-router-dom";
import type { FaqItem } from "../data/faq";

interface FAQProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  /** Show a side panel with "Besoin de plus d'aide ?" CTA */
  showAside?: boolean;
  className?: string;
}

export default function FAQ({
  eyebrow = "FAQ",
  title = "Vos questions, nos réponses.",
  subtitle = "Tout ce que les parents et élèves nous demandent le plus souvent — au même endroit.",
  items,
  showAside = true,
  className = "",
}: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className={`py-24 bg-sa-light relative overflow-hidden ${className}`}>
      <div className="absolute -left-40 top-20 w-[400px] h-[400px] rounded-full bg-sa-pink/10 blur-3xl" />
      <div className="absolute -right-40 bottom-20 w-[400px] h-[400px] rounded-full bg-sa-blue/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid ${showAside ? "lg:grid-cols-[1fr_2fr]" : ""} gap-12 lg:gap-16 items-start max-w-6xl mx-auto`}>
          {/* Optional aside */}
          {showAside && (
            <div className="lg:sticky lg:top-32">
              <span className="sa-eyebrow">{eyebrow}</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-sa-navy mt-4 mb-5 leading-tight">
                {title}
              </h2>
              <p className="text-sa-ink/65 leading-relaxed mb-8">{subtitle}</p>

              <div className="sa-card p-6 bg-sa-navy text-white border-0">
                <MessageCircle className="text-sa-gold mb-3" size={22} />
                <h4 className="font-bold mb-1.5">Une question spécifique ?</h4>
                <p className="text-sm text-white/70 mb-4 leading-relaxed">
                  Notre équipe vous répond sous 24h.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sa-gold font-semibold text-sm hover:text-white transition">
                  Nous contacter →
                </Link>
              </div>
            </div>
          )}

          {/* Questions list */}
          <div className={showAside ? "" : "max-w-3xl mx-auto w-full"}>
            {!showAside && (
              <div className="text-center mb-12">
                <span className="sa-eyebrow">{eyebrow}</span>
                <h2 className="sa-h-display mt-4 mb-4">{title}</h2>
                <p className="text-sa-ink/60 text-lg">{subtitle}</p>
              </div>
            )}

            <div className="space-y-3">
              {items.map((item, i) => {
                const isOpen = openIdx === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    className={`rounded-2xl border transition-colors bg-white ${
                      isOpen ? "border-sa-pink/40 shadow-[0_12px_40px_-20px_rgba(231,50,125,0.35)]" : "border-sa-navy/10"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isOpen ? "bg-sa-pink text-white" : "bg-sa-pink/10 text-sa-pink"
                          }`}
                        >
                          <HelpCircle size={16} />
                        </div>
                        <span
                          className={`font-bold transition-colors ${
                            isOpen ? "text-sa-pink" : "text-sa-navy"
                          }`}
                        >
                          {item.q}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? "bg-sa-pink text-white" : "bg-sa-navy/5 text-sa-navy"
                        }`}
                      >
                        <Plus size={16} />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 pl-[4.75rem] text-sa-ink/70 leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
