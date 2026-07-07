import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Phone, MapPin, Clock, MessageCircle } from "@/src/components/ui/icons";
import { Link, useSearchParams } from "react-router-dom";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { usePageMeta } from "../hooks/usePageMeta";
import { waLink } from "../lib/utils";
import FAQ from "../components/FAQ";
import { buildFaq } from "../data/faq";
import Logo from "../components/Logo";
import MediaFrameFloaters from "../components/MediaFrameFloaters";

export default function Contact() {
  const [searchParams] = useSearchParams();
  usePageMeta({
    title: "Nous Contacter — Réserver une Séance",
    description: "Contactez STUDASSIST pour réserver une séance d'orientation, un cours découverte ou un rendez-vous d'information. Notre équipe vous répond rapidement.",
    canonical: "/contact",
  });
  const [intentTab, setIntentTab] = useState<"orientation" | "cours" | "rdv">("orientation");
  const roleFromParams = searchParams.get("role") as "parent" | "eleve" | null;
  const [userRole, setUserRole] = useState<"parent" | "eleve">(roleFromParams || "parent");
  
  // States for checkbox sections
  const [matieres, setMatieres] = useState<string[]>([]);
  const [prepas, setPrepas] = useState<string[]>([]);
  const [certifications, setCertifications] = useState<string[]>([]);
  const [disponibilites, setDisponibilites] = useState<string[]>([]);
  const { submit, status: submitStatus } = useFormSubmit();
  const isSubmitted = submitStatus === "success";
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const MATIERES = [
    "Mathématiques", "Physique-chimie", "SVT / Biologie", "Français", 
    "Philosophie", "Histoire-Géographie / Géopolitique", 
    "Sciences écononomiques et sociales", "NSI", "Anglais", 
    "Arabe", "Eco-droit - Spé STMG", "Autre"
  ];

  const PREPAS = [
    "Prépa concours SESAME/ACCES", "Prépa concours Ingé France", 
    "Prépa concours Sciences Po", "Prépa concours Médecine Maroc", 
    "Prépa concours Médecine Belgique", "Prépa concours UM6P", 
    "Prépa Concours Archi ENA", "Prépa concours ISCAE/ENCG"
  ];

  const CERTIFICATIONS = ["IELTS/TOEFL", "TCF/DALF", "DELE"];

  const DISPOS = [
    "Lundi matin", "Lundi après-midi", "Mardi matin", "Mardi après-midi",
    "Mercredi matin", "Mercredi après-midi", "Jeudi matin", "Jeudi après-midi",
    "Vendredi matin", "Vendredi après-midi", "Samedi matin", "Samedi après-midi",
    "Dimanche matin", "Dimanche après-midi"
  ];

  const toggleArray = (arr: string[], setArr: (val: string[]) => void, item: string) => {
    if (arr.includes(item)) setArr(arr.filter(i => i !== item));
    else setArr([...arr, item]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nom = (form.elements.namedItem("nom") as HTMLInputElement)?.value || "";
    const prenom = (form.elements.namedItem("prenom") as HTMLInputElement)?.value || "";
    const tel = (form.elements.namedItem("tel") as HTMLInputElement)?.value || "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const niveau = (form.elements.namedItem("niveau") as HTMLSelectElement)?.value || "";
    const systeme = (form.elements.namedItem("systeme") as HTMLSelectElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

    const errors: Record<string, string> = {};
    if (!nom.trim()) errors.nom = "Ce champ est obligatoire.";
    if (!prenom.trim()) errors.prenom = "Ce champ est obligatoire.";
    if (!tel.trim()) errors.tel = "Ce champ est obligatoire.";
    else if (!/^[+0-9\s\-()]{6,20}$/.test(tel.trim())) errors.tel = "Numéro de téléphone invalide.";
    if (!email.trim()) errors.email = "Ce champ est obligatoire.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = "Adresse email invalide.";
    if (!niveau) errors.niveau = "Veuillez sélectionner un niveau.";
    if (!systeme) errors.systeme = "Veuillez sélectionner un système.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    await submit({
      nom, prenom, tel, email,
      role: userRole,
      intent: intentTab,
      niveau, systeme,
      matieres, prepas, certifications, disponibilites,
      message,
      source: "Page Contact — formulaire principal",
    });
  };

  return (
    <div className="bg-white relative overflow-clip">
      {/* Decorative background blobs */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-sa-pink/10 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -left-24 w-[340px] h-[340px] rounded-full bg-sa-gold/15 blur-3xl pointer-events-none" />

      <section className="relative py-12 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start max-w-[1400px] mx-auto">
            {/* ============ LEFT: Brick-wall framed photo with "S" logo ============ */}
            <div className="relative order-2 lg:order-1 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] w-full flex flex-col justify-center">
              <MediaFrameFloaters />

              <div className="relative w-full aspect-square rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(17,29,74,0.15)] border-[8px] border-white z-10 group bg-white">
                <img
                  src="/hero-soutien-scolaire.png"
                  alt="Contact"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
            </div>

            {/* ============ RIGHT: Heading + form ============ */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-display text-[32px] sm:text-[36px] lg:text-[48px] font-extrabold leading-[1.1] lg:leading-[1.05] tracking-tight mb-2">
                  <span className="text-sa-navy">Parlons de votre</span>
                  <br />
                  <span className="sa-wavy text-sa-pink">projet académique</span>
                </h1>

                <div className="space-y-4 text-sa-ink/75 leading-relaxed text-[15px] mt-6 max-w-xl">
                  <p>
                    Que vous souhaitiez définir une orientation claire ou tester notre accompagnement avec un cours découverte, <span className="font-semibold text-sa-navy">notre équipe vous accompagne à chaque étape.</span>
                  </p>
                  <p>
                    Remplissez ce formulaire et nous vous recontactons rapidement pour organiser un échange adapté à votre besoin.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 p-8 rounded-2xl bg-sa-green/10 border border-sa-green/20"
                  >
                    <h3 className="text-xl font-display font-extrabold text-sa-navy mb-3">Merci !</h3>
                    <p className="text-sa-ink/80 leading-relaxed text-[15px]">
                      Nous vous recontacterons dans les plus brefs délais afin de mieux comprendre votre besoin et organiser votre première séance.
                    </p>
                  </motion.div>
                ) : (
                  <div className="mt-10">
                    {/* Tabs "Je souhaite :" */}
                    <div className="mb-8">
                      <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-4 block">
                        Je souhaite réserver : *
                      </label>
                      <div className="flex flex-nowrap gap-2 border-b border-sa-navy/10 pb-0">
                        {(
                          [
                            { key: "orientation", label: "Une séance d'orientation" },
                            { key: "cours", label: "Un cours découverte" },
                            { key: "rdv", label: "Un rendez-vous d'information" },
                          ] as const
                        ).map((t) => (
                          <button
                            key={t.key}
                            onClick={() => setIntentTab(t.key)}
                            className={`pb-3 px-1 text-[13px] font-semibold transition-colors relative whitespace-nowrap ${
                              intentTab === t.key ? "text-sa-pink" : "text-sa-ink/50 hover:text-sa-navy"
                            }`}
                          >
                            {t.label}
                            {intentTab === t.key && (
                              <motion.div
                                layoutId="contact-intent-tab"
                                className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-sa-pink"
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                      
                      {/* Je suis : */}
                      <div>
                        <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-3 block">
                          Je suis : *
                        </label>
                        <div className="flex gap-6">
                          {(
                            [
                              { key: "parent", label: "Parent" },
                              { key: "eleve", label: "Élève" },
                            ] as const
                          ).map((r) => (
                            <button
                              type="button"
                              key={r.key}
                              onClick={() => setUserRole(r.key)}
                              className="flex items-center gap-2 cursor-pointer group"
                            >
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${userRole === r.key ? 'border-sa-pink bg-sa-pink/10' : 'border-gray-300 group-hover:border-sa-pink/50'}`}>
                                {userRole === r.key && <div className="w-2.5 h-2.5 rounded-full bg-sa-pink" />}
                              </div>
                              <span className="text-[15px] font-medium text-sa-navy">{r.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* INFORMATIONS DE CONTACT */}
                      <div>
                        <h4 className="font-display font-extrabold text-lg text-sa-navy mb-4">Informations de contact</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <input type="text" name="nom" required aria-label="Nom" placeholder="Nom *" defaultValue={searchParams.get("nom") || ""} className={`w-full pb-2 border-b focus:outline-none transition bg-transparent text-[15px] placeholder:text-sa-ink/40 ${formErrors.nom ? 'border-red-400' : 'border-sa-navy/15 focus:border-sa-pink'}`} />
                            {formErrors.nom && <p className="text-red-500 text-xs mt-1">{formErrors.nom}</p>}
                          </div>
                          <div>
                            <input type="text" name="prenom" required aria-label="Prénom" placeholder="Prénom *" defaultValue={searchParams.get("prenom") || ""} className={`w-full pb-2 border-b focus:outline-none transition bg-transparent text-[15px] placeholder:text-sa-ink/40 ${formErrors.prenom ? 'border-red-400' : 'border-sa-navy/15 focus:border-sa-pink'}`} />
                            {formErrors.prenom && <p className="text-red-500 text-xs mt-1">{formErrors.prenom}</p>}
                          </div>
                          <div>
                            <input type="tel" name="tel" required aria-label="Téléphone" placeholder="Téléphone *" defaultValue={searchParams.get("tel") || ""} className={`w-full pb-2 border-b focus:outline-none transition bg-transparent text-[15px] placeholder:text-sa-ink/40 ${formErrors.tel ? 'border-red-400' : 'border-sa-navy/15 focus:border-sa-pink'}`} />
                            {formErrors.tel && <p className="text-red-500 text-xs mt-1">{formErrors.tel}</p>}
                          </div>
                          <div>
                            <input type="email" name="email" required aria-label="Email" placeholder="Email *" className={`w-full pb-2 border-b focus:outline-none transition bg-transparent text-[15px] placeholder:text-sa-ink/40 ${formErrors.email ? 'border-red-400' : 'border-sa-navy/15 focus:border-sa-pink'}`} />
                            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                          </div>
                        </div>
                      </div>

                      {/* INFORMATIONS DE L'ÉLÈVE */}
                      <div>
                        <h4 className="font-display font-extrabold text-lg text-sa-navy mb-4">Informations de l'élève</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="group">
                            <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-2 block">
                              Niveau académique *
                            </label>
                            <select name="niveau" required defaultValue="" className={`w-full pb-2 border-b focus:outline-none transition bg-transparent text-[15px] text-sa-ink/80 appearance-none ${formErrors.niveau ? 'border-red-400' : 'border-sa-navy/15 focus:border-sa-pink'}`}>
                              <option value="" disabled>Sélectionner un niveau</option>
                              <option>Primaire</option>
                              <option>Collège</option>
                              <option>Seconde / tronc commun</option>
                              <option>Première / 1ère année bac</option>
                              <option>Terminale / 2ème année bac</option>
                              <option>Post-bac</option>
                            </select>
                          </div>
                          <div className="group">
                            <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-2 block">
                              Système scolaire *
                            </label>
                            <select name="systeme" required defaultValue="" className={`w-full pb-2 border-b focus:outline-none transition bg-transparent text-[15px] text-sa-ink/80 appearance-none ${formErrors.systeme ? 'border-red-400' : 'border-sa-navy/15 focus:border-sa-pink'}`}>
                              <option value="" disabled>Sélectionner un système</option>
                              <option>Français</option>
                              <option>Bilingue</option>
                              <option>Espagnol</option>
                              <option>Belge</option>
                              <option>Italien</option>
                              <option>Américain</option>
                              <option>Anglais</option>
                              <option>Autre</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* CONDITIONAL SECTION: COURS DECOUVERTE */}
                      <AnimatePresence>
                        {intentTab === "cours" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-8 pt-2 pb-2">
                              {/* Matières */}
                              <div>
                                <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-3 block">
                                  Matière(s) souhaitée(s) (Facultatif)
                                </label>
                                <div className="flex flex-wrap gap-2">
                                  {MATIERES.map(m => (
                                    <button
                                      type="button"
                                      key={m}
                                      onClick={() => toggleArray(matieres, setMatieres, m)}
                                      className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${matieres.includes(m) ? 'bg-sa-navy border-sa-navy text-white' : 'bg-gray-50 border-gray-200 text-sa-ink/70 hover:border-sa-navy/30'}`}
                                    >
                                      {m}
                                    </button>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Prepas */}
                              <div>
                                <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-3 block">
                                  Préparation(s) de concours souhaitée(s) (Facultatif)
                                </label>
                                <div className="flex flex-wrap gap-2">
                                  {PREPAS.map(m => (
                                    <button
                                      type="button"
                                      key={m}
                                      onClick={() => toggleArray(prepas, setPrepas, m)}
                                      className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${prepas.includes(m) ? 'bg-sa-navy border-sa-navy text-white' : 'bg-gray-50 border-gray-200 text-sa-ink/70 hover:border-sa-navy/30'}`}
                                    >
                                      {m}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              {/* Certifications */}
                              <div>
                                <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-3 block">
                                  Certification(s) de langue(s) souhaitée(s) (Facultatif)
                                </label>
                                <div className="flex flex-wrap gap-2">
                                  {CERTIFICATIONS.map(m => (
                                    <button
                                      type="button"
                                      key={m}
                                      onClick={() => toggleArray(certifications, setCertifications, m)}
                                      className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${certifications.includes(m) ? 'bg-sa-navy border-sa-navy text-white' : 'bg-gray-50 border-gray-200 text-sa-ink/70 hover:border-sa-navy/30'}`}
                                    >
                                      {m}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* MESSAGE */}
                      <div>
                        <h4 className="font-display font-extrabold text-lg text-sa-navy mb-4">Message</h4>
                        <div className="group">
                          <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-2 block">
                            Votre besoin
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Décrivez ici vos objectifs d'orientation, vos difficultés, votre projet d'études, peut-être un besoin spécifique…etc."
                            className="w-full py-2 border-b border-sa-navy/15 focus:border-sa-pink focus:outline-none transition bg-transparent resize-none text-[15px] placeholder:text-sa-ink/40"
                          />
                        </div>
                      </div>

                      {/* DISPONIBILITÉS */}
                      <div>
                        <h4 className="font-display font-extrabold text-lg text-sa-navy mb-4">Disponibilités</h4>
                        <div>
                          <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-sa-ink/50 mb-3 block">
                            Vos disponibilités *
                          </label>
                          <p className="text-sa-ink/50 text-[13px] mb-3">Indiquez ici vos disponibilités et préférences de créneaux pour nous aider à mieux organiser votre séance</p>
                          <div className="flex flex-wrap gap-2">
                            {DISPOS.map(m => (
                              <button
                                type="button"
                                key={m}
                                onClick={() => toggleArray(disponibilites, setDisponibilites, m)}
                                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all border ${disponibilites.includes(m) ? 'bg-sa-green border-sa-green text-white' : 'bg-gray-50 border-gray-200 text-sa-ink/70 hover:border-sa-green/30'}`}
                              >
                                {m}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-6">
                        <button
                          type="submit"
                          disabled={submitStatus === "loading"}
                          className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-10 py-4 rounded-full bg-sa-pink hover:bg-[#d02d6a] disabled:opacity-60 text-white font-extrabold text-[15px] transition-all shadow-[0_14px_30px_-12px_rgba(235,62,130,0.55)] uppercase tracking-wide"
                        >
                          {submitStatus === "loading" ? "Envoi en cours…" : <>Être recontacté(e) <ArrowRight size={18} /></>}
                        </button>
                        {submitStatus === "error" && (
                          <p className="mt-3 text-sm text-red-500 font-medium">Une erreur s'est produite. Veuillez réessayer ou nous appeler directement.</p>
                        )}
                      </div>

                    </form>
                  </div>
                )}
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
        faqAsideSubtitle="Notre assistant vous répond instantanément."
      />

      {/* ============ NOS CENTRES ============ */}
      <section id="centres" className="py-16 lg:py-20 bg-gray-50/60">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-sa-green font-black text-[10px] tracking-[0.3em] uppercase mb-4">
              <span className="w-6 h-px bg-sa-green" />
              <span>Nos centres</span>
              <span className="w-6 h-px bg-sa-green" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-sa-navy tracking-tight leading-tight">
              Où nous <span className="sa-wavy sa-wavy-teal">trouver</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Centre de l'Oasis */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_rgba(17,29,74,0.06)] p-8 lg:p-10 flex flex-col"
            >
              <h3 className="font-display text-xl font-extrabold text-sa-navy mb-5">
                Centre de l'Oasis
              </h3>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-3 text-sa-ink/80 text-[15px]">
                  <MapPin size={18} className="text-sa-green mt-0.5 shrink-0" />
                  <span>15 Rue des Ramiers, Casablanca 20000</span>
                </li>
                <li className="flex items-start gap-3 text-sa-ink/80 text-[15px]">
                  <Phone size={18} className="text-sa-green mt-0.5 shrink-0" />
                  <span>0669 495 996 &nbsp;|&nbsp; 0664 779 093</span>
                </li>
                <li className="flex items-start gap-3 text-sa-ink/80 text-[15px]">
                  <Clock size={18} className="text-sa-green mt-0.5 shrink-0" />
                  <span>Lun–Ven : 9h–19h · Sam : 9h–17h</span>
                </li>
              </ul>
              <a
                href="https://maps.google.com/?q=15+Rue+des+Ramiers+Casablanca+20000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sa-green hover:text-sa-navy transition-colors"
              >
                Voir sur Google Maps <ArrowRight size={14} />
              </a>
            </motion.div>

            {/* Centre de Bouskoura Ville Verte */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_rgba(17,29,74,0.06)] p-8 lg:p-10 flex flex-col"
            >
              <h3 className="font-display text-xl font-extrabold text-sa-navy mb-5">
                Centre de Bouskoura Ville Verte
              </h3>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-3 text-sa-ink/80 text-[15px]">
                  <MapPin size={18} className="text-sa-green mt-0.5 shrink-0" />
                  <span>Lotissement Bel Air de Bouskoura E2, Bouskoura Ville Verte 27180</span>
                </li>
                <li className="flex items-start gap-3 text-sa-ink/80 text-[15px]">
                  <Phone size={18} className="text-sa-green mt-0.5 shrink-0" />
                  <span>0669 495 996 &nbsp;|&nbsp; 0664 779 093</span>
                </li>
                <li className="flex items-start gap-3 text-sa-ink/80 text-[15px]">
                  <Clock size={18} className="text-sa-green mt-0.5 shrink-0" />
                  <span>Lun–Ven : 9h–19h · Sam : 9h–17h</span>
                </li>
              </ul>
              <a
                href="https://maps.google.com/?q=Lotissement+Bel+Air+Bouskoura+Ville+Verte+27180"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sa-green hover:text-sa-navy transition-colors"
              >
                Voir sur Google Maps <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Re-engagement strip — editorial CTA card */}
      <section className="pb-16 lg:pb-32 pt-4">
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
                <a
                  href={waLink("Bonjour, je souhaite avoir plus d'informations sur les services de STUDASSIST.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-brand-darkblue text-white px-7 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-brand-red transition-all shadow-xl shadow-brand-darkblue/20 inline-flex items-center justify-center gap-3 active:scale-95"
                >
                  <MessageCircle size={18} />
                  <span>Nous écrire</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
