import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Heart, Award, Star, Upload, FileText } from "@/src/components/ui/icons";
import { usePageMeta } from "../hooks/usePageMeta";
import MediaFrameFloaters from "../components/MediaFrameFloaters";
import Logo from "../components/Logo";

type ProfileTab = "professeur" | "consultant" | "support";

export default function NousRejoindre() {
  usePageMeta({
    title: "Rejoindre STUDASSIST — Professeurs, Consultants, Équipe Support",
    description: "Rejoignez l'équipe STUDASSIST. Nous recrutons des professeurs, consultants en orientation et profils support. Postulez et contribuez à la réussite des élèves.",
    canonical: "/nous-rejoindre",
  });
  const [activeTab, setActiveTab] = useState<ProfileTab>("professeur");

  // Contact fields
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  // Tag-based multi-selects
  const [matieres, setMatieres] = useState<string[]>([]);
  const [systemes, setSystemes] = useState<string[]>([]);
  const [niveaux, setNiveaux] = useState<string[]>([]);

  // Professeur
  const [experience, setExperience] = useState("");

  // Consultant
  const [domaines, setDomaines] = useState("");
  const [experienceDetail, setExperienceDetail] = useState("");

  // Support
  const [fonctionDomaine, setFonctionDomaine] = useState("");
  const [experienceSupport, setExperienceSupport] = useState("");

  // Motivation
  const [motivation, setMotivation] = useState("");
  const [messageComplementaire, setMessageComplementaire] = useState("");

  // Files
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [lettreFile, setLettreFile] = useState<File | null>(null);

  // UI states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFile: (f: File | null) => void) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };

  const toggleArray = (arr: string[], setArr: (val: string[]) => void, item: string) => {
    if (arr.includes(item)) setArr(arr.filter((i) => i !== item));
    else setArr([...arr, item]);
  };

  const MATIERES = [
    "Mathématiques", "Physique-chimie", "SVT / Biologie", "Français",
    "Philosophie", "Histoire-Géographie / Géopolitique",
    "Sciences écononomiques et sociales", "NSI", "Anglais",
    "Arabe", "Eco-droit - Spé STMG", "Autre"
  ];
  const SYSTEMES = ["Français", "Marocain", "Espagnol", "Belge", "Italien", "Américain", "Anglais", "Autre"];
  const NIVEAUX = ["Collège", "Seconde / tronc commun", "Première / 1ère année bac", "Terminale / 2ème année bac", "Post-bac"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const fd = new FormData();
      fd.append("nom", nom);
      fd.append("prenom", prenom);
      fd.append("tel", tel);
      fd.append("email", email);
      fd.append("profil", activeTab);
      fd.append("matieres", JSON.stringify(matieres));
      fd.append("systemes", JSON.stringify(systemes));
      fd.append("niveaux", JSON.stringify(niveaux));
      fd.append("experience", activeTab === "support" ? experienceSupport : experience);
      fd.append("domaines", domaines);
      fd.append("experienceDetail", experienceDetail);
      fd.append("fonctionDomaine", fonctionDomaine);
      fd.append("motivation", motivation);
      fd.append("messageComplementaire", messageComplementaire);
      if (cvFile) fd.append("cv", cvFile);
      if (lettreFile) fd.append("lettre", lettreFile);

      const res = await fetch("/api/submit-candidature", { method: "POST", body: fd });
      const json = await res.json();

      if (!res.ok || !json.success) throw new Error(json.error || "Erreur lors de l'envoi");
      setIsSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || "Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Mock testimonials
  const testimonials = [
    {
      name: "Julie",
      role: "Professeure de Français & Philosophie",
      text: "J'ai rejoint STUDASSIST en faisant le choix de m'installer au Maroc, séduite par son projet et ses valeurs. J'y ai découvert une véritable culture d'équipe, où la formation, la bienveillance et l'exigence font partie du quotidien. Une expérience humaine et professionnelle particulièrement enrichissante, que je garde avec beaucoup d'attachement.",
    },
    {
      name: "Sara",
      role: "Conseillère en Orientation",
      text: "Rejoindre STUDASSIST m'a permis d'évoluer rapidement grâce à des missions variées et de réelles responsabilités. J'ai découvert une équipe jeune, engagée et toujours à l'écoute, où l'on apprend chaque jour et où chacun est encouragé à prendre des initiatives. Une expérience extrêmement formatrice.",
    },
    {
      name: "Réda",
      role: "Stagiaire en Développement Informatique",
      text: "Mon stage chez STUDASSIST m'a permis de développer rapidement mes compétences et de participer à des projets à forte valeur ajoutée. J'y ai découvert une équipe exigeante, bienveillante et passionnée, portée par une véritable ambition : transformer l'accompagnement des élèves au Maroc. Une expérience dont je suis particulièrement fier.",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-10 lg:pt-16 pb-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-stretch">
            <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="inline-flex items-center gap-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-4">
                  <span className="w-6 h-px bg-brand-teal" />
                  Carrières
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-darkblue leading-[1.05] tracking-tighter uppercase mb-6">
                  Rejoignez <br />
                  <span className="text-brand-teal sa-wavy sa-wavy-teal">STUDASSIST</span>
                </h1>
                <p className="text-xl text-brand-red font-bold uppercase tracking-widest mb-6">
                  Construire, transmettre et accompagner avec exigence
                </p>
                <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Chez STUDASSIST, nous réunissons des profils engagés, passionnés par l'éducation et animés par une ambition commune : accompagner chaque élève vers l'excellence, avec rigueur, méthode et exigence.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <button
                  onClick={() => document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-brand-red text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl shadow-brand-red/30 inline-flex items-center space-x-3"
                >
                  <span>Postuler maintenant</span>
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
            
            <div className="order-1 lg:order-2 relative flex">
              <div className="relative w-full rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(17,29,74,0.15)] border-[8px] border-white z-10 group">
                <img
                  src="/photo-entree.jpeg"
                  alt="Équipe STUDASSIST"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NOTRE PHILOSOPHIE */}
      <section className="py-20 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image left */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative flex">
              <MediaFrameFloaters />
              <div className="relative w-full rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(17,29,74,0.15)] border-[8px] border-white z-10">
                <img
                  src="/photo-equipe-dirigeante.png"
                  alt="Équipe dirigeante STUDASSIST"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            {/* Text right */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter leading-tight mb-8">
                Une équipe exigeante, <span className="text-brand-teal">structurée et engagée</span>
              </h2>
              <div className="space-y-6 text-gray-500 font-medium text-lg leading-relaxed">
                <p>
                  Depuis sa création, STUDASSIST s'est construit autour d'une conviction forte : chaque élève mérite un accompagnement à la fois stratégique, structuré et profondément humain.
                </p>
                <p>
                  Cette vision, portée au quotidien dans notre accompagnement des élèves et des familles, guide également notre manière de recruter et de faire évoluer nos équipes.
                </p>
                <p>
                  Nous ne recherchons pas uniquement des compétences, mais des profils capables de s'inscrire dans une démarche exigeante, rigoureuse et tournée vers l'impact.
                </p>
              </div>
              <div className="mt-10">
                <Link to="/qui-sommes-nous" className="inline-flex items-center gap-2 text-brand-teal font-black uppercase tracking-widest hover:text-brand-darkblue transition-colors">
                  <ArrowRight size={20} />
                  <span>Découvrir notre vision</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. POURQUOI NOUS REJOINDRE & 4. NOTRE ÉQUIPE */}
      <section className="py-20 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Pourquoi nous rejoindre */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-[0_20px_60px_rgba(17,29,74,0.06)] border border-gray-100">
              <div className="w-14 h-14 bg-brand-red/10 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                <Award size={28} className="text-brand-red" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-brand-darkblue uppercase tracking-tight mb-6 leading-tight">
                Une expérience professionnelle <br />à <span className="text-brand-red">forte valeur ajoutée</span>
              </h3>
              <div className="space-y-4 text-gray-500 text-[15px] leading-relaxed">
                <p>
                  Rejoindre STUDASSIST, c'est intégrer une structure dans laquelle les <strong className="text-brand-darkblue">responsabilités sont réelles et les missions concrètes</strong>. Chaque collaborateur est impliqué dans des projets à fort impact, au contact direct des élèves et des familles.
                </p>
                <p>
                  C'est également évoluer dans un environnement stimulant, où la montée en compétences est continue, portée par une méthodologie exigeante et des standards élevés. La diversité des missions permet une <strong className="text-brand-darkblue">progression rapide</strong>.
                </p>
                <p>
                  C'est enfin adhérer à une vision de l'éducation fondée sur l'exigence, la personnalisation et l'ambition, telle que nous la portons depuis 2018.
                </p>
              </div>
            </motion.div>

            {/* Notre Equipe */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-[0_20px_60px_rgba(17,29,74,0.06)] border border-gray-100">
              <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                <Heart size={28} className="text-brand-teal" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-black text-brand-darkblue uppercase tracking-tight mb-6 leading-tight">
                Une expertise pluridisciplinaire <br />au <span className="text-brand-teal">service des élèves</span>
              </h3>
              <div className="space-y-4 text-gray-500 text-[15px] leading-relaxed">
                <p>L'équipe STUDASSIST incarne cette vision.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand-teal shrink-0 mt-0.5" />
                    <span><strong className="text-brand-darkblue">Nos professeurs</strong> sont expérimentés, sélectionnés avec exigence, ayant une parfaite connaissance des programmes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand-teal shrink-0 mt-0.5" />
                    <span><strong className="text-brand-darkblue">Nos consultants en orientation</strong> s'appuient sur une méthodologie structurée pour construire chaque projet d'étude.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-brand-teal shrink-0 mt-0.5" />
                    <span><strong className="text-brand-darkblue">Notre équipe administrative</strong> assure un suivi rigoureux dans le respect de nos standards de qualité.</span>
                  </li>
                </ul>
                <p className="mt-4 pt-4 border-t border-gray-100 font-bold text-brand-darkblue">Cette exigence commune constitue le socle de notre approche.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TÉMOIGNAGES */}
      <section className="py-20 bg-brand-darkblue relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="pattern-temoignages" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-temoignages)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-tight mb-4">
              Ils ont contribué à <br /><span className="text-brand-teal">l'aventure STUDASSIST</span>
            </h2>
            <div className="w-12 h-1 bg-brand-red rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm flex flex-col h-full">
                <div className="flex text-brand-teal mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-8 flex-1 italic">"{t.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-black text-white uppercase tracking-tight">{t.name}</h4>
                  <span className="text-white/50 text-[11px] font-bold uppercase tracking-widest">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROFILS RECHERCHÉS */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text left */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter leading-tight mb-8">
                Des profils exigeants, <br /><span className="text-brand-red">alignés avec notre vision</span>
              </h2>
              <div className="space-y-6 text-gray-500 font-medium text-lg leading-relaxed">
                <p>
                  Nous recherchons des profils capables de s'inscrire dans un cadre structuré, tout en faisant preuve d'autonomie, de rigueur et de sens des responsabilités.
                </p>
                <p>
                  Au-delà des compétences techniques, nous attachons une importance particulière à l'adhésion à notre vision, à la qualité de l'engagement et à la capacité à accompagner des élèves avec exigence et bienveillance.
                </p>
                <div className="bg-[#f8fbfc] p-8 rounded-3xl border border-brand-teal/10 mt-4">
                  <h4 className="text-xl font-black text-brand-darkblue uppercase tracking-tight mb-4">Rejoindre STUDASSIST, c'est faire le choix de l'exigence</h4>
                  <p className="text-[15px] mb-4">
                    C'est évoluer dans un environnement structuré, participer à des projets à fort impact et contribuer concrètement à la réussite des élèves, en cohérence avec la vision qui nous anime depuis notre création.
                  </p>
                  <p className="text-[15px] font-bold text-brand-teal">
                    Déposez votre candidature. Chaque profil est étudié avec attention, dans une logique de cohérence, d'exigence et de potentiel d'évolution.
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Image right */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative flex">
              <MediaFrameFloaters />
              <div className="relative w-full rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(17,29,74,0.15)] border-[8px] border-white z-10">
                <img
                  src="/photo-locaux.png"
                  alt="Locaux STUDASSIST"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. FORMULAIRE DE CANDIDATURE */}
      <section id="formulaire" className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter leading-tight mb-4">
              Rejoignez <span className="text-brand-teal">notre équipe !</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
              Intégrer STUDASSIST, c'est rejoindre une structure en pleine croissance, portée par une vision claire et des standards élevés.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[3rem] p-12 text-center shadow-xl border border-brand-teal/20 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-brand-teal" />
              </div>
              <h3 className="text-2xl font-black text-brand-darkblue uppercase tracking-tight mb-2">Candidature envoyée !</h3>
              <p className="text-brand-teal font-black text-lg uppercase tracking-widest mb-4">Merci pour votre intérêt !</p>
              <p className="text-gray-500 font-medium leading-relaxed">
                Nous accordons une attention particulière à chaque candidature et nous engageons à revenir vers vous dans les meilleurs délais.
              </p>
            </motion.div>
          ) : (
            <div className="bg-white rounded-[3rem] p-8 lg:p-14 shadow-[0_30px_80px_rgba(17,29,74,0.06)] border border-gray-100">
              {/* Onglets */}
              <div className="mb-10">
                <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4 block">Je suis : *</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  {(
                    [
                      { id: "professeur", label: "Professeur" },
                      { id: "consultant", label: "Consultant(e) en orientation" },
                      { id: "support", label: "Fonction support" },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-4 px-6 rounded-2xl text-sm font-black uppercase tracking-widest transition-all border-2 ${
                        activeTab === tab.id 
                          ? "bg-brand-darkblue border-brand-darkblue text-white shadow-xl shadow-brand-darkblue/20" 
                          : "bg-transparent border-gray-100 text-gray-400 hover:border-gray-300 hover:text-brand-darkblue"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                {/* 1. INFORMATIONS DE CONTACT */}
                <div>
                  <h4 className="text-xl font-black text-brand-darkblue uppercase tracking-tight mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center text-sm">1</span>
                    Informations de contact
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input type="text" required aria-label="Nom" value={nom} onChange={e => setNom(e.target.value)} placeholder="Nom *" className={`w-full pb-3 border-b-2 focus:outline-none transition bg-transparent text-[15px] font-medium ${nom === '' && submitError ? 'border-red-400' : 'border-gray-100 focus:border-brand-teal'}`} />
                      {nom === '' && submitError && <p className="text-red-500 text-xs mt-1">Ce champ est obligatoire.</p>}
                    </div>
                    <div>
                      <input type="text" required aria-label="Prénom" value={prenom} onChange={e => setPrenom(e.target.value)} placeholder="Prénom *" className={`w-full pb-3 border-b-2 focus:outline-none transition bg-transparent text-[15px] font-medium ${prenom === '' && submitError ? 'border-red-400' : 'border-gray-100 focus:border-brand-teal'}`} />
                      {prenom === '' && submitError && <p className="text-red-500 text-xs mt-1">Ce champ est obligatoire.</p>}
                    </div>
                    <div>
                      <input type="tel" required aria-label="Téléphone" value={tel} onChange={e => setTel(e.target.value)} placeholder="Téléphone *" pattern="[+0-9\s\-()]{6,20}" className={`w-full pb-3 border-b-2 focus:outline-none transition bg-transparent text-[15px] font-medium ${tel === '' && submitError ? 'border-red-400' : 'border-gray-100 focus:border-brand-teal'}`} />
                      {tel === '' && submitError && <p className="text-red-500 text-xs mt-1">Ce champ est obligatoire.</p>}
                    </div>
                    <div>
                      <input type="email" required aria-label="Email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email *" className={`w-full pb-3 border-b-2 focus:outline-none transition bg-transparent text-[15px] font-medium ${email === '' && submitError ? 'border-red-400' : 'border-gray-100 focus:border-brand-teal'}`} />
                      {email === '' && submitError && <p className="text-red-500 text-xs mt-1">Veuillez saisir une adresse email valide.</p>}
                    </div>
                  </div>
                </div>

                {/* 2. DÉTAILS DU PROFIL */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden space-y-10"
                  >
                    <h4 className="text-xl font-black text-brand-darkblue uppercase tracking-tight mb-6 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center text-sm">2</span>
                      Détails du profil
                    </h4>

                    {/* --- PROFIL PROFESSEUR --- */}
                    {activeTab === "professeur" && (
                      <div className="space-y-8">
                        <div>
                          <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4 block">Matière(s) enseignée(s) *</label>
                          <div className="flex flex-wrap gap-2">
                            {MATIERES.map(m => (
                              <button
                                type="button"
                                key={m}
                                onClick={() => toggleArray(matieres, setMatieres, m)}
                                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all border ${matieres.includes(m) ? 'bg-brand-teal border-brand-teal text-white shadow-md' : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-gray-300'}`}
                              >
                                {m}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4 block">Système(s) scolaire(s) maîtrisé(s) *</label>
                          <div className="flex flex-wrap gap-2">
                            {SYSTEMES.map(s => (
                              <button
                                type="button"
                                key={s}
                                onClick={() => toggleArray(systemes, setSystemes, s)}
                                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all border ${systemes.includes(s) ? 'bg-brand-teal border-brand-teal text-white shadow-md' : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-gray-300'}`}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4 block">Niveau(x) enseigné(s) *</label>
                          <div className="flex flex-wrap gap-2">
                            {NIVEAUX.map(n => (
                              <button
                                type="button"
                                key={n}
                                onClick={() => toggleArray(niveaux, setNiveaux, n)}
                                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all border ${niveaux.includes(n) ? 'bg-brand-teal border-brand-teal text-white shadow-md' : 'bg-gray-50 border-gray-100 text-gray-500 hover:border-gray-300'}`}
                              >
                                {n}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2 block">Années d'expérience *</label>
                          <select required defaultValue="" className="w-full pb-3 border-b-2 border-gray-100 focus:border-brand-teal focus:outline-none transition bg-transparent text-[15px] font-medium text-brand-darkblue appearance-none">
                            <option value="" disabled>Sélectionner...</option>
                            <option value="0-2 ans">0–2 ans</option>
                            <option value="3-5 ans">3–5 ans</option>
                            <option value="5-10 ans">5–10 ans</option>
                            <option value="+10 ans">+10 ans</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* --- PROFIL CONSULTANT --- */}
                    {activeTab === "consultant" && (
                      <div className="space-y-6">
                        <div>
                          <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2 block">Domaine(s) d'expertise(s) *</label>
                          <textarea required rows={2} value={domaines} onChange={e => setDomaines(e.target.value)} placeholder="Indiquez vos domaines de prédilection. Ex : Orientation scolaire, admissions en Angleterre, Processus Etudes en France,...etc." className="w-full py-3 border-b-2 border-gray-100 focus:border-brand-teal focus:outline-none transition bg-transparent text-[15px] font-medium resize-none placeholder:text-gray-300" />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2 block">Expérience *</label>
                          <textarea required rows={3} value={experienceDetail} onChange={e => setExperienceDetail(e.target.value)} placeholder="Décrivez brièvement votre expérience dans ce domaine et sa durée" className="w-full py-3 border-b-2 border-gray-100 focus:border-brand-teal focus:outline-none transition bg-transparent text-[15px] font-medium resize-none placeholder:text-gray-300" />
                        </div>
                      </div>
                    )}

                    {/* --- PROFIL SUPPORT --- */}
                    {activeTab === "support" && (
                      <div className="space-y-6">
                        <div>
                          <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2 block">Fonction / Domaine *</label>
                          <textarea required rows={2} value={fonctionDomaine} onChange={e => setFonctionDomaine(e.target.value)} placeholder="Indiquez vos domaines de prédilection. Ex : coordination d'équipe, administratif, relation client, gestion commerciale, comptabilité, contrôle de gestion, finance, Marketing, communication ... Etc." className="w-full py-3 border-b-2 border-gray-100 focus:border-brand-teal focus:outline-none transition bg-transparent text-[15px] font-medium resize-none placeholder:text-gray-300" />
                        </div>
                        <div>
                          <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2 block">Années d'expérience *</label>
                          <select required value={experienceSupport} onChange={e => setExperienceSupport(e.target.value)} className="w-full pb-3 border-b-2 border-gray-100 focus:border-brand-teal focus:outline-none transition bg-transparent text-[15px] font-medium text-brand-darkblue appearance-none">
                            <option value="" disabled>Sélectionner...</option>
                            <option value="0-2 ans">0–2 ans</option>
                            <option value="3-5 ans">3–5 ans</option>
                            <option value="5-10 ans">5–10 ans</option>
                            <option value="+10 ans">+10 ans</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* 3. DOCUMENTS */}
                <div>
                  <h4 className="text-xl font-black text-brand-darkblue uppercase tracking-tight mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center text-sm">3</span>
                    Documents
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-brand-teal hover:bg-brand-teal/5 transition-all cursor-pointer">
                      <input type="file" required accept=".pdf" onChange={(e) => handleFileChange(e, setCvFile)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <div className="flex flex-col items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${cvFile ? 'bg-brand-teal text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-brand-teal group-hover:text-white'}`}>
                          <Upload size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-brand-darkblue text-sm">CV</p>
                          <p className="text-xs mt-1 transition-colors px-2 leading-relaxed max-w-xs mx-auto text-brand-teal font-medium">{cvFile ? cvFile.name : <span className="text-gray-400 font-normal">Importer votre CV (format PDF obligatoire)</span>}</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative group border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-brand-teal hover:bg-brand-teal/5 transition-all cursor-pointer">
                      <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, setLettreFile)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <div className="flex flex-col items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${lettreFile ? 'bg-brand-teal text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-brand-teal group-hover:text-white'}`}>
                          <FileText size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-brand-darkblue text-sm">Lettre de motivation</p>
                          <p className="text-xs mt-1 transition-colors px-2 leading-relaxed max-w-xs mx-auto text-brand-teal font-medium">{lettreFile ? lettreFile.name : <span className="text-gray-400 font-normal">La lettre de motivation est optionnelle mais recommandée pour mieux vous connaître.</span>}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. QUESTIONS QUALIFIANTES */}
                <div>
                  <h4 className="text-xl font-black text-brand-darkblue uppercase tracking-tight mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-brand-teal/10 text-brand-teal flex items-center justify-center text-sm">4</span>
                    Motivation
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2 block">Pourquoi souhaitez-vous rejoindre STUDASSIST ? *</label>
                      <textarea required rows={4} value={motivation} onChange={e => setMotivation(e.target.value)} placeholder="Expliquez brièvement votre motivation et ce que vous pouvez apporter à notre équipe." className="w-full py-3 border-b-2 border-gray-100 focus:border-brand-teal focus:outline-none transition bg-transparent text-[15px] font-medium resize-none placeholder:text-gray-300" />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-2 block">Message complémentaire (Facultatif)</label>
                      <textarea rows={2} value={messageComplementaire} onChange={e => setMessageComplementaire(e.target.value)} placeholder="Y-a-il des informations complémentaires que vous souhaiteriez partager ?" className="w-full py-3 border-b-2 border-gray-100 focus:border-brand-teal focus:outline-none transition bg-transparent text-[15px] font-medium resize-none placeholder:text-gray-300" />
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 text-center">
                  {submitError && (
                    <div className="mb-6 bg-red-50 border border-red-200 rounded-2xl px-6 py-4 text-red-700 text-sm font-medium">
                      ⚠️ {submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-brand-red hover:bg-brand-darkblue disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-sm uppercase tracking-widest transition-all shadow-[0_20px_40px_-15px_rgba(238,92,95,0.5)] hover:shadow-xl hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <><span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" /><span>Envoi en cours...</span></>
                    ) : (
                      <><span>Envoyer ma candidature</span><ArrowRight size={18} /></>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 font-medium mt-6 max-w-sm mx-auto leading-relaxed">
                    Nous accordons une attention particulière à chaque candidature et nous engageons à revenir vers vous dans les meilleurs délais.
                  </p>
                </div>

              </form>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
