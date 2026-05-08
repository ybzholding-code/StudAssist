import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import FAQ from "../components/FAQ";
import { buildFaq } from "../data/faq";
import Logo from "../components/Logo";
import MediaFrameFloaters from "../components/MediaFrameFloaters";
import { ArrowRight } from "@/src/components/ui/icons";

type Profile = "professeur" | "consultant" | "support";

export default function NousRejoindre() {
  const [active, setActive] = useState<Profile>("professeur");

  const tabs: { key: Profile; label: string }[] = [
    { key: "professeur", label: "Je suis professeur" },
    { key: "consultant", label: "Je suis consultant" },
    { key: "support", label: "Je suis support" },
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Decorative background blobs — identical to Contact */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-sa-pink/10 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -left-24 w-[340px] h-[340px] rounded-full bg-sa-gold/15 blur-3xl pointer-events-none" />

      <section className="relative py-12 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
            {/* ============ LEFT: Framed photo + "S" logo — same as Contact ============ */}
            <div className="relative order-2 lg:order-1">
              <MediaFrameFloaters />

              {/* Main frame */}
              <div
                className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_30px_70px_-25px_rgba(12,27,68,0.25)]"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/5" />

                {/* Decorative shelf with books */}
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
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ============ RIGHT: Heading + form — same structure as Contact ============ */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-display text-[32px] sm:text-[36px] lg:text-[48px] font-extrabold leading-[1.1] lg:leading-[1.05] tracking-tight mb-2">
                  <span className="text-sa-navy">Rejoignez nos</span>
                  <br />
                  <span className="sa-wavy text-sa-pink">Équipes !</span>
                </h1>

                <div className="space-y-4 text-sa-ink/75 leading-relaxed text-[15px] mt-6 max-w-md">
                  <p>
                    Professeur passionné, consultant en orientation ou profil support — chez{" "}
                    <span className="font-semibold text-sa-navy">STUDASSIST</span>, nous recrutons
                    des talents d'exception pour accompagner chaque élève vers la réussite.
                  </p>
                  <p>
                    Complétez le formulaire ci-dessous : notre équipe RH revient vers vous sous
                    48&nbsp;heures pour un premier échange.{" "}
                    <span className="font-semibold text-sa-navy">
                      Votre parcours, votre ambition, votre impact.
                    </span>
                  </p>
                  <p className="font-semibold text-sa-navy">
                    Nous avons hâte de découvrir votre profil !
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-6 lg:gap-8 mt-8 border-b border-sa-navy/10 max-w-md">
                  {tabs.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setActive(t.key)}
                      className={`pb-3 text-[14px] lg:text-[15px] font-semibold transition-colors relative whitespace-nowrap ${
                        active === t.key ? "text-sa-pink" : "text-sa-ink/50 hover:text-sa-navy"
                      }`}
                    >
                      {t.label}
                      {active === t.key && (
                        <motion.div
                          layoutId="rejoindre-tab-underline"
                          className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-sa-pink"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Sub-heading */}
                <h3 className="font-display text-lg font-extrabold text-sa-navy mt-8 mb-2">
                  Envoyez-nous votre profil
                </h3>
                <p className="text-sa-ink/60 text-sm mb-8 max-w-md">
                  Remplissez ce formulaire et un recruteur STUDASSIST vous recontacte sous
                  48&nbsp;heures.
                </p>

                {/* Form */}
                <AnimatePresence mode="wait">
                  <motion.form
                    key={active}
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
                        {
                          label: "Votre adresse mail *",
                          type: "email",
                          placeholder: "Votre adresse mail *",
                        },
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

                    {/* Profile-specific field */}
                    {active === "professeur" && (
                      <div className="group">
                        <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-2 block">
                          Matière enseignée
                        </label>
                        <select
                          defaultValue=""
                          className="w-full pb-2 border-b border-sa-navy/15 focus:border-sa-pink focus:outline-none transition bg-transparent text-[15px] text-sa-ink/80 appearance-none"
                        >
                          <option value="">Sélectionner…</option>
                          <option>Mathématiques</option>
                          <option>Physique-Chimie</option>
                          <option>SVT</option>
                          <option>Français</option>
                          <option>Philosophie</option>
                          <option>Anglais</option>
                          <option>Espagnol</option>
                          <option>Économie</option>
                        </select>
                      </div>
                    )}
                    {active === "consultant" && (
                      <div className="group">
                        <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-2 block">
                          Spécialité
                        </label>
                        <select
                          defaultValue=""
                          className="w-full pb-2 border-b border-sa-navy/15 focus:border-sa-pink focus:outline-none transition bg-transparent text-[15px] text-sa-ink/80 appearance-none"
                        >
                          <option value="">Sélectionner…</option>
                          <option>Études en France</option>
                          <option>Études aux USA / Canada</option>
                          <option>Études UK</option>
                          <option>Médecine</option>
                          <option>Écoles de commerce</option>
                          <option>Écoles d'ingénieurs</option>
                        </select>
                      </div>
                    )}
                    {active === "support" && (
                      <div className="group">
                        <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-2 block">
                          Pôle
                        </label>
                        <select
                          defaultValue=""
                          className="w-full pb-2 border-b border-sa-navy/15 focus:border-sa-pink focus:outline-none transition bg-transparent text-[15px] text-sa-ink/80 appearance-none"
                        >
                          <option value="">Sélectionner…</option>
                          <option>Administratif</option>
                          <option>Communication / Marketing</option>
                          <option>Relation client</option>
                          <option>Logistique</option>
                          <option>Produit / Tech</option>
                        </select>
                      </div>
                    )}

                    <div className="group">
                      <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-2 block">
                        Années d'expérience
                      </label>
                      <select
                        defaultValue=""
                        className="w-full pb-2 border-b border-sa-navy/15 focus:border-sa-pink focus:outline-none transition bg-transparent text-[15px] text-sa-ink/80 appearance-none"
                      >
                        <option value="">Sélectionner…</option>
                        <option>0–2 ans</option>
                        <option>3–5 ans</option>
                        <option>5–10 ans</option>
                        <option>10+ ans</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-2 block">
                        Présentez-vous brièvement
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Parcours, motivation, disponibilité…"
                        className="w-full py-2 border-b border-sa-navy/15 focus:border-sa-pink focus:outline-none transition bg-transparent resize-none text-[15px] placeholder:text-sa-ink/40"
                      />
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sa-green hover:bg-emerald-500 text-white font-semibold text-[14.5px] transition-all shadow-[0_14px_30px_-12px_rgba(127,192,116,0.55)]"
                      >
                        Envoyer ma candidature <ArrowRight size={15} />
                      </button>
                    </div>
                  </motion.form>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — same placement as Contact */}
      <FAQ
        title="STUDASSIST en tant qu'employeur"
        subtitle="Mieux comprendre le cabinet et sa méthodologie avant de rejoindre l'équipe."
        items={buildFaq("about", "method")}
      />
    </div>
  );
}
