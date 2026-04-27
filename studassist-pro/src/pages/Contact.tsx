import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Phone, MapPin } from "@/src/components/ui/icons";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import { buildFaq } from "../data/faq";
import Logo from "../components/Logo";
import ImageFloaters from "../components/ImageFloaters";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"tuteur" | "eleve">("tuteur");

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-sa-pink/10 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -left-24 w-[340px] h-[340px] rounded-full bg-sa-gold/15 blur-3xl pointer-events-none" />

      <section className="relative py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
            {/* ============ LEFT: Brick-wall framed photo with "S" logo ============ */}
            <div className="relative order-2 lg:order-1">
              <ImageFloaters />

              {/* Main frame */}
              <div
                className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_30px_70px_-25px_rgba(12,27,68,0.25)]"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1595844730298-b960ff98fee0?auto=format&fit=crop&w=1200&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/5" />

                {/* Decorative shelf with plants */}
                <div className="absolute top-[18%] left-[10%] right-[30%] flex items-end gap-2 z-10">
                  <div className="w-10 h-14 bg-white rounded-sm shadow" />
                  <div className="w-8 h-10 bg-emerald-700 rounded-sm" />
                  <div className="w-9 h-12 bg-white rounded-sm shadow" />
                </div>

                {/* Big "S" logo card in the middle */}
                <div className="absolute inset-x-0 bottom-[18%] flex justify-center z-10">
                  <div className="bg-sa-navy rounded-2xl p-6 lg:p-8 shadow-xl">
                    <Logo variant="header" />
                  </div>
                </div>

                {/* Circular photo cutout bottom-right */}
                <div className="absolute right-4 bottom-8 lg:right-6 lg:bottom-10 w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-[6px] border-white shadow-lg z-20">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ============ RIGHT: Heading + form ============ */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-display text-[36px] lg:text-[48px] font-extrabold leading-[1.05] tracking-tight mb-2">
                  <span className="text-sa-navy">Contactez nos</span>
                  <br />
                  <span className="sa-wavy text-sa-pink">Experts !</span>
                </h1>

                <div className="space-y-4 text-sa-ink/75 leading-relaxed text-[15px] mt-6 max-w-md">
                  <p>
                    Que vous soyez parent d'élève à la recherche d'informations, enseignant souhaitant rejoindre notre équipe, ou simplement curieux d'en savoir plus sur notre établissement,{" "}
                    <span className="font-semibold text-sa-navy">
                      nous sommes là pour répondre à toutes vos questions.
                    </span>
                  </p>
                  <p>
                    N'hésitez pas à remplir le formulaire ci-dessous : notre équipe se fera un plaisir de vous répondre dans les plus brefs délais.{" "}
                    <span className="font-semibold text-sa-navy">
                      Votre satisfaction et votre confiance sont au cœur de nos priorités.
                    </span>
                  </p>
                  <p className="font-semibold text-sa-navy">Nous avons hâte d'échanger avec vous !</p>
                </div>

                {/* Tabs */}
                <div className="flex gap-8 mt-8 border-b border-sa-navy/10 max-w-md">
                  {(
                    [
                      { key: "tuteur", label: "Je suis tuteur" },
                      { key: "eleve", label: "Je suis élève" },
                    ] as const
                  ).map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setActiveTab(t.key)}
                      className={`pb-3 text-[15px] font-semibold transition-colors relative ${
                        activeTab === t.key ? "text-sa-pink" : "text-sa-ink/50 hover:text-sa-navy"
                      }`}
                    >
                      {t.label}
                      {activeTab === t.key && (
                        <motion.div
                          layoutId="contact-tab-underline"
                          className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-sa-pink"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Sub-heading */}
                <h3 className="font-display text-lg font-extrabold text-sa-navy mt-8 mb-2">
                  Nous sommes là pour vous
                </h3>
                <p className="text-sa-ink/60 text-sm mb-8 max-w-md">
                  Remplissez ce formulaire et un conseiller STUDASSIST vous recontacte sous 24&nbsp;heures.
                </p>

                {/* Form */}
                <AnimatePresence mode="wait">
                  <motion.form
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6 max-w-md"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {(
                      [
                        { label: "Nom *", type: "text", placeholder: "Nom *" },
                        { label: "Prénom *", type: "text", placeholder: "Prénom *" },
                        { label: "Téléphone *", type: "tel", placeholder: "Téléphone *" },
                        { label: "Votre adresse mail *", type: "email", placeholder: "Votre adresse mail *" },
                      ] as const
                    ).map((f) => (
                      <div key={f.label} className="group">
                        <input
                          type={f.type}
                          required
                          placeholder={f.placeholder}
                          className="w-full pb-2 border-b border-sa-navy/15 focus:border-sa-pink focus:outline-none transition bg-transparent text-[15px] placeholder:text-sa-ink/40"
                        />
                      </div>
                    ))}

                    <div className="group">
                      <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-2 block">
                        Système scolaire
                      </label>
                      <select
                        defaultValue=""
                        className="w-full pb-2 border-b border-sa-navy/15 focus:border-sa-pink focus:outline-none transition bg-transparent text-[15px] text-sa-ink/80 appearance-none"
                      >
                        <option value="">Primaire</option>
                        <option>Collège</option>
                        <option>Lycée</option>
                        <option>Supérieur</option>
                      </select>
                    </div>

                    <div className="group">
                      <select
                        defaultValue=""
                        className="w-full pb-2 border-b border-sa-navy/15 focus:border-sa-pink focus:outline-none transition bg-transparent text-[15px] text-sa-ink/80 appearance-none"
                      >
                        <option value="">Veuillez choisir un niveau d'abord</option>
                        <option>CP</option>
                        <option>CE1</option>
                        <option>Seconde</option>
                        <option>Première</option>
                        <option>Terminale</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-2 block">
                        Commentaire
                      </label>
                      <textarea
                        rows={3}
                        placeholder=""
                        className="w-full py-2 border-b border-sa-navy/15 focus:border-sa-pink focus:outline-none transition bg-transparent resize-none text-[15px]"
                      />
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sa-green hover:bg-emerald-500 text-white font-semibold text-[14.5px] transition-all shadow-[0_14px_30px_-12px_rgba(127,192,116,0.55)]"
                      >
                        Envoyer <ArrowRight size={15} />
                      </button>
                    </div>
                  </motion.form>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        title="Avant de nous contacter"
        subtitle="Les réponses aux questions les plus posées sur l'inscription et le fonctionnement de STUDASSIST."
        items={buildFaq("signup", "organization")}
      />

      {/* Re-engagement strip — editorial CTA card */}
      <section className="pb-32 pt-4">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_30px_80px_rgba(17,29,74,0.08)] px-8 lg:px-14 py-12 lg:py-14 overflow-hidden"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left max-w-xl">
                <div className="inline-flex items-center gap-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-4">
                  <span className="w-6 h-px bg-brand-teal" />
                  <span>Réponse immédiate</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-brand-darkblue uppercase tracking-tighter leading-tight mb-3">
                  Besoin d'une <span className="text-brand-teal">réponse immédiate</span> ?
                </h3>
                <p className="text-gray-500 text-sm lg:text-base font-medium leading-relaxed">
                  Appelez-nous ou passez directement dans l'un de nos centres — nos conseillers
                  sont disponibles du lundi au samedi.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch gap-3 shrink-0">
                <a
                  href="tel:0669495996"
                  className="group bg-brand-teal text-white px-7 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-brand-darkblue transition-all shadow-xl shadow-brand-teal/20 inline-flex items-center justify-center gap-3 active:scale-95"
                >
                  <Phone size={18} />
                  <span>0669-495996</span>
                </a>
                <Link
                  to="/centres"
                  className="group bg-brand-darkblue text-white px-7 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-brand-red transition-all shadow-xl shadow-brand-darkblue/20 inline-flex items-center justify-center gap-3 active:scale-95"
                >
                  <MapPin size={18} />
                  <span>Nos centres</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
