import { motion } from "motion/react";
import { 
  Users, 
  Rocket, 
  Award, 
  Target, 
  CheckCircle2, 
  GraduationCap, 
  Globe, 
  Search, 
  LineChart, 
  Heart,
  MessageCircle,
  Sparkles,
  Phone,
  ArrowRight,
  BookOpen,
  Star,
  Map,
  Compass,
  Activity,
  Trophy,
  Earth,
  Plane
} from "@/src/components/ui/icons";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import TestimonialsSection from "@/src/components/TestimonialsSection";
import ImageFloaters from "@/src/components/ImageFloaters";
import Logo from "../components/Logo";

const QuiSommesNous = () => {
  const stats = [
    { label: "d'espace dédié à l'étudiant", value: "500 m2", icon: <Map size={24} className="text-brand-darkblue" />, color: "text-brand-darkblue" },
    { label: "partenaires à travers le monde", value: "+20", icon: <Globe size={24} className="text-brand-red" />, color: "text-brand-red" },
    { label: "tuteurs et professeurs expérimentés & à l'écoute", value: "+50", icon: <Users size={24} className="text-[#0e4b44]" />, color: "text-[#0e4b44]" },
    { label: "ans d'expertise", value: "7", icon: <Trophy size={24} className="text-brand-darkblue" />, color: "text-brand-darkblue" },
  ];

  const philosophy = [
    {
      title: "MISSION",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      description: "Accompagner chaque élève vers son plein potentiel académique."
    },
    {
      title: "VISION",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      description: "Devenir la référence internationale du conseil en orientation scolaire."
    },
    {
      title: "VALEURS",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      description: "Excellence, Proximité et Engagement envers la réussite."
    }
  ];

  const steps = [
    { title: "Diagnostic Approfondi", desc: "Analyse complète du profil, des méthodes de travail et des aspirations de l'élève.", icon: <Search size={24} /> },
    { title: "Parcours sur Mesure", desc: "Construction d'un plan d'accompagnement stratégique avec des objectifs clairs et mesurables.", icon: <Compass size={24} /> },
    { title: "Accompagnement Académique", desc: "Soutien scolaire ciblé dans les matières clés pour optimiser les dossiers et certifications.", icon: <GraduationCap size={24} /> },
    { title: "Suivi Continu", desc: "Pilotage constant des progrès et ajustements stratégiques pour optimiser le parcours.", icon: <Activity size={24} /> },
    { title: "Orientation vers l'Avenir", desc: "Aide à la construction du projet professionnel et préparation aux concours les plus exigeants.", icon: <Rocket size={24} /> },
  ];

  const pillars = [
    { title: "Approche Globale", desc: "Nous allons au-delà du scolaire pour un accompagnement complet.", icon: <Earth size={24} /> },
    { title: "Logique Stratégique", desc: "Nous construisons un plan d'action cohérent pour une réussite durable.", icon: <Target size={24} /> },
    { title: "Accompagnement Humain", desc: "Une relation de confiance et de proximité avec chaque élève.", icon: <Heart size={24} /> },
    { title: "Vision Internationale", desc: "Préparation aux standards académiques les plus élevés au monde.", icon: <Plane size={24} /> },
  ];

  const team = [
    { name: "Yasmine", title: "Founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "Hajar", title: "Co-founder & GM", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
    { name: "Mehdi", title: "Co-founder & GM", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
    { name: "Omar Bennis", title: "Co-founder & GM", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-black text-brand-darkblue mb-4 uppercase tracking-tighter"
            >
              Qui <span className="sa-wavy sa-wavy-teal text-brand-teal">sommes-nous</span>
            </motion.h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <ImageFloaters />
              <div className="relative z-20 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 transform -rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                  alt="StudAssist Team" 
                  className="rounded-[2rem] w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-darkblue leading-tight uppercase">
                <span className="text-brand-teal">STUDASSIST</span>, cabinet de conseil en <br /> 
                orientation et soutien scolaire au Maroc et <br />
                à l'international
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed font-medium text-sm lg:text-base">
                <p>
                  STUDASSIST est le <span className="text-brand-darkblue font-bold">1er cabinet de conseil en orientation et accompagnement scolaire</span> dédié à l'accompagnement des élèves et des étudiants, quel que soit leur niveau scolaire ou académique, <span className="text-brand-teal font-bold italic">au Maroc et à l'international</span>.
                </p>
                <p>
                  Nous sommes une <span className="text-brand-darkblue font-bold tracking-tight">équipe de professionnels de l'éducation</span>, passionnés par la réussite scolaire et universitaire, et notre mission est de proposer un <span className="text-brand-teal font-bold italic underline">accompagnement sur mesure</span>, personnalisé selon les objectifs académiques et professionnels de chaque élève.
                </p>
                <p>
                  Nous répondons à l'ensemble des besoins étudiants à travers une offre complète incluant l'orientation scolaire et universitaire, le soutien scolaire, la préparation aux concours, la préparation aux examens officiels, les certifications de langues (IELTS, TOEFL, TCF, DALF...), ainsi que l'accompagnement aux démarches étudiantes et à l'installation à l'étranger.
                </p>
                <p>
                  Depuis notre création en 2018, nous croyons en <span className="text-brand-darkblue font-bold underline">l'unicité de chaque élève</span> et mettons tout en oeuvre pour révéler leur potentiel, sécuriser leurs choix d'orientation et les guider vers la réussite !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR - Redesigned to match homepage Trust Bar */}
      <section className="bg-white py-12 border-y border-gray-100 relative z-30">
        <div className="container mx-auto px-6 overflow-hidden">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-12 lg:gap-6">
            {stats.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex items-center space-x-4 shrink-0 lg:flex-1 lg:justify-center"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 bg-gray-100 group-hover:bg-brand-teal/10 rounded-xl transition-all duration-300 transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <div className={cn("text-3xl lg:text-4xl font-black tracking-tight leading-none mb-1", item.color)}>
                      {item.value}
                    </div>
                    <div className="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-tight max-w-[130px] group-hover:text-gray-600 transition-colors">
                      {item.label}
                    </div>
                  </div>
                </div>
                {idx < stats.length - 1 && (
                  <div className="hidden xl:block text-gray-200 text-3xl font-light ml-auto self-center">+</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY SECTION */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* Background Patterns */}
        <Logo variant="watermark" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] text-[#111d4a]" />
        
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#111d4a" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dot-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-darkblue mb-8 leading-tight uppercase">
                STUDASSIST – L'histoire d'un cabinet de conseil dédié à la réussite académique internationale
              </h2>
              <div className="space-y-6 text-gray-500 font-medium text-sm leading-relaxed">
                <p>
                  <span className="text-brand-darkblue font-bold uppercase">StudAssist est né en 2018</span>, lors d'un voyage en Bourgogne. Ce qui était au départ une simple discussion entre anciens diplômés est rapidement devenu une prise de conscience : trop d'étudiants talentueux avancent sans accompagnement structuré dans des moments décisifs de leur parcours.
                </p>
                <p>
                  Choix d'orientation mal éclairés, démarches administratives complexes, préparation insuffisante aux concours et admissions sélectives, sentiment d'isolement... Le véritable frein à la réussite n'est souvent pas le manque de talent, mais le manque de méthode et de guidance.
                </p>
                <p>
                  Les études supérieures sont une étape fondatrice. Pourtant, beaucoup les traversent sans stratégie claire, notamment lorsqu'il s'agit d'études sélectives ou de mobilité internationale.
                </p>
                <p>
                  <span className="text-brand-teal font-extrabold">STUDASSIST</span> a été créé pour répondre à cette réalité, à travers un accompagnement global : orientation stratégique, excellence académique, préparation aux concours et certifications, admissions et installation à l'étranger.
                </p>
                <p>
                  Notre ambition est simple : transformer un parcours subi en un projet maîtrisé, en apportant clarté, méthode et sérénité à chaque étape clé.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
               <ImageFloaters />
               <div className="relative z-20 bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100 transform rotate-2">
                 <img 
                   src="https://images.unsplash.com/photo-1522071823942-42c2ef33856e?auto=format&fit=crop&w=800&q=80" 
                   alt="StudAssist Foundation" 
                   className="rounded-[2.5rem] w-full h-[500px] object-cover"
                 />
                 {/* Decorative floatable */}
                 <div className="absolute -top-10 -right-10 bg-brand-teal text-white p-8 rounded-full shadow-xl hidden xl:block animate-bounce">
                    <Rocket size={40} />
                 </div>
               </div>
               {/* Pattern overlay — rotating dashed pink ring */}
               <motion.div
                 className="absolute -bottom-20 -left-20 w-64 h-64 opacity-20 pointer-events-none"
                 animate={{ rotate: -360 }}
                 transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
               >
                  <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="#ee4b62" strokeWidth="5" strokeDasharray="10 5"></circle></svg>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER - Signature Red Executive Style */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-red rounded-[3.5rem] p-10 lg:p-20 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden shadow-[0_40px_100px_rgba(239,71,111,0.25)] border border-white/10"
          >
            {/* Precision Pattern - Geometric Grid */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
              <svg width="100%" height="100%">
                <pattern id="cta-grid-red" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#cta-grid-red)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
              <div className="flex items-center space-x-3 mb-8">
                <span className="w-12 h-[2px] bg-brand-darkblue" />
                <span className="text-brand-darkblue font-black text-[11px] tracking-[0.4em] uppercase">Session Stratégique</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black mb-8 uppercase tracking-tighter leading-[0.95]">
                Votre <span className="text-brand-darkblue italic">succès</span> <br className="hidden lg:block" /> commence ici.
              </h2>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <p className="text-white/90 font-medium text-lg leading-relaxed max-w-md">
                  Bénéficiez d'un diagnostic complet de 30 minutes avec nos experts en orientation.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-12 lg:mt-0">
              <div className="flex flex-col items-center lg:items-end space-y-8">
                <Link 
                  to="/contact" 
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
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Ligne Directe</p>
                    <a href="tel:+212669495996" className="text-white font-bold tracking-tight hover:text-brand-darkblue transition-colors">+212 6 69 49 59 96</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Nos Fondations
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter">La philosophie <span className="text-brand-teal">Studassist</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl shadow-brand-darkblue/5 border border-gray-100"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue via-brand-darkblue/40 to-transparent flex flex-col justify-end p-10 text-white">
                  <h3 className="text-3xl font-black mb-4 tracking-tighter">{item.title}</h3>
                  <p className="text-white/80 font-medium text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR METHODOLOGY SECTION - Redesigned */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-6">
              <span className="w-8 h-px bg-brand-teal"></span>
              <span>Notre Excellence</span>
              <span className="w-8 h-px bg-brand-teal"></span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-darkblue mb-8 uppercase tracking-tighter">
              La Méthode <span className="text-brand-teal">STUDASSIST</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Une approche structurée, scientifique et humaine en <span className="text-brand-red font-bold underline">5 étapes clés</span> pour garantir votre réussite académique et professionnelle.
            </p>
          </div>

          {/* 5 Steps Process Timeline */}
          <div className="relative mb-40">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-1.5 bg-gray-50 border-t border-dashed border-gray-200" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-4 xl:gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="relative group pt-8"
                >
                  {/* Step Number Badge - Positioned to overlap the card for better mobile alignment */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-16 h-16 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center text-brand-teal font-black text-xl shadow-lg group-hover:border-brand-teal group-hover:scale-110 transition-all duration-300">
                      0{idx + 1}
                    </div>
                  </div>

                  <div className="bg-white p-8 pt-16 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(17,29,74,0.05)] hover:shadow-[0_40px_80px_rgba(17,29,74,0.1)] transition-all duration-500 flex flex-col items-center text-center h-full group-hover:-translate-y-2">
                    <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center text-brand-teal mb-6 group-hover:rotate-6 transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="text-[13px] font-black text-brand-darkblue uppercase tracking-tight mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[12px] font-medium text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* WHAT MAKES US DIFFERENT - Redesigned to be Airy & Premium */}
          <div className="mt-40">
            <div className="flex flex-col items-center mb-20 space-y-6">
              <div className="px-8 py-6 bg-white rounded-3xl border border-gray-100 shadow-xl mb-2">
                <Logo variant="full" height={40} />
              </div>
              <div className="inline-flex items-center px-4 py-1.5 bg-brand-darkblue text-white rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-lg shadow-brand-darkblue/10">
                L'ADN STUDASSIST
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter text-center">
                Ce qui fait notre <span className="text-brand-teal">différence</span>
              </h2>
              <div className="w-12 h-1 bg-brand-red rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group h-full"
                >
                  <div className="h-full bg-white border border-gray-100 p-10 rounded-[3.5rem] shadow-[0_20px_50px_rgba(17,29,74,0.03)] hover:shadow-[0_40px_80px_rgba(17,29,74,0.1)] hover:border-brand-teal/20 transition-all duration-500 overflow-hidden">
                    {/* Decorative Background Icon */}
                    <div className="absolute -right-4 -bottom-4 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-12 transform scale-150 pointer-events-none">
                      {pillar.icon}
                    </div>

                    <div className={cn(
                      "w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-10 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 shadow-lg",
                      idx % 3 === 0 ? "bg-brand-teal/10 text-brand-teal shadow-brand-teal/10" : 
                      idx % 3 === 1 ? "bg-brand-red/10 text-brand-red shadow-brand-red/10" : 
                      "bg-brand-darkblue/10 text-brand-darkblue shadow-brand-darkblue/10"
                    )}>
                      {pillar.icon}
                    </div>

                    <h3 className="text-brand-darkblue font-black text-xl uppercase tracking-tight mb-4 group-hover:text-brand-teal transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium leading-relaxed group-hover:text-gray-600 transition-colors">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-[40px] lg:text-[56px] font-black text-brand-darkblue leading-tight mb-8 uppercase tracking-tighter">
              Prêt à passer à <span className="text-brand-red">l'action</span> ? <br />
              Votre <span className="text-brand-teal">avenir</span> commence ici !
            </h2>
            <Link 
              to="/contact" 
              className="bg-brand-red text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl shadow-brand-red/30 group inline-flex items-center space-x-3"
            >
              <span>Réserver ma séance découverte</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      </section>

      {/* OUR TEAM TEXT SECTION */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              {/* Premium Image Structure */}
              <div className="relative h-[450px] md:h-[600px] w-full max-w-[500px] mx-auto">
                <ImageFloaters />
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 w-4/5 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl z-10 border border-gray-100"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                    alt="Workspace" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl z-20 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80" 
                    alt="Team meeting" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative dots pattern */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-teal/5 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-red/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase">
                <span className="w-8 h-px bg-brand-teal"></span>
                <span>L'Humain au cœur</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter leading-tight">
                Une équipe <span className="text-brand-teal italic">d'experts</span> engagés
              </h2>
              <div className="space-y-6 text-gray-500 font-medium text-sm lg:text-base leading-relaxed">
                <p>
                  Chez <span className="text-brand-darkblue font-bold tracking-tight">STUDASSIST</span>, nous accordons une importance centrale à la <span className="font-bold underline italic text-brand-teal">qualité humaine et professionnelle</span> de chaque membre de notre équipe. Notre accompagnement repose sur une sélection rigoureuse des profils, une méthodologie structurée et un haut niveau d'exigence à chaque étape.
                </p>
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 space-y-4">
                  <p className="text-brand-darkblue font-bold tracking-widest uppercase text-[10px]">Des professeurs experts et expérimentés</p>
                  <p className="text-sm">
                    Tous nos professeurs sont <span className="font-bold underline italic text-brand-darkblue">sélectionnés avec la plus grande exigence</span>. Ils disposent de <span className="font-bold underline italic text-brand-darkblue">plusieurs années d'expérience</span>, d'une véritable pratique de la classe et de <span className="font-bold underline italic text-brand-darkblue">certifications reconnues</span>.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 space-y-4">
                  <p className="text-brand-darkblue font-bold tracking-widest uppercase text-[10px]">Des conseillers d'orientation exclusifs</p>
                  <p className="text-sm">
                    Nos conseillers répondent à des <span className="font-bold underline italic text-brand-darkblue">critères stricts de rigueur et d'analyse</span>. Ils appliquent une <span className="font-bold">méthodologie exclusive STUDASSIST</span> permettant d'aligner les choix académiques avec le potentiel réel de l'élève.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-8">Notre direction</h2>
            <div className="w-16 h-1 bg-brand-teal mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col items-center"
              >
                <div className="relative w-full mb-8">
                  <ImageFloaters scale={0.6} />
                  <div className="relative z-20 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-brand-darkblue/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-brand-darkblue mb-1 uppercase tracking-tight">{member.name}</h3>
                <p className="text-brand-teal font-black text-xs uppercase tracking-widest mb-6">{member.title}</p>
                <div className="flex space-x-3">
                   <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-brand-darkblue hover:text-white transition-colors cursor-pointer">
                      <Globe size={14} />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — shared component */}
      <TestimonialsSection
        title={
          <>
            Témoignages <br />
            <span className="text-brand-teal">de nos anciens</span>
          </>
        }
      />

      {/* REJOIN SECTION */}
      <section className="py-32 bg-brand-darkblue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <svg width="100%" height="100%">
              <pattern id="pattern-final" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#pattern-final)" />
           </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-12 uppercase tracking-tighter">Envie de rejoindre <br /> l'aventure ?</h2>
            <Link 
              to="/contact" 
              className="bg-brand-red text-white px-16 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl shadow-brand-red/30 group inline-flex items-center space-x-4"
            >
              <span>Nous rejoindre</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuiSommesNous;
