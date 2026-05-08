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
} from "@/src/components/ui/icons";
import { Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import TestimonialsSection from "@/src/components/TestimonialsSection";
import MediaFrameFloaters from "@/src/components/MediaFrameFloaters";
import Logo from "../components/Logo";

const QuiSommesNous = () => {
  const stats = [
    { label: "candidats et élèves accompagnés", value: "+3000", icon3d: "https://img.icons8.com/3d-fluency/94/graduation-cap.png", color: "text-brand-darkblue" },
    { label: "taux d'admission au Top 3", value: "≈97%", icon3d: "https://img.icons8.com/3d-fluency/94/trophy.png", color: "text-brand-red" },
    { label: "destinations d'études", value: "+16", icon3d: "https://img.icons8.com/3d-fluency/94/globe.png", color: "text-[#0e4b44]" },
    { label: "clients satisfaits", value: "9/10", icon3d: "https://img.icons8.com/3d-fluency/94/star.png", color: "text-brand-darkblue" },
    { label: "d'espace dédié à l'étudiant", value: "500 m²", icon3d: "https://img.icons8.com/3d-fluency/94/school.png", color: "text-brand-teal" },
    { label: "partenaires à travers le monde", value: "+20", icon3d: "https://img.icons8.com/3d-fluency/94/handshake.png", color: "text-brand-red" },
    { label: "tuteurs et professeurs expérimentés", value: "+50", icon3d: "https://img.icons8.com/3d-fluency/94/training.png", color: "text-[#0e4b44]" },
    { label: "ans d'expertise", value: "7", icon3d: "https://img.icons8.com/3d-fluency/94/medal.png", color: "text-brand-darkblue" },
    { label: "coachs scolaires", value: "2", icon3d: "https://img.icons8.com/3d-fluency/94/conference-call.png", color: "text-brand-teal" },
    { label: "experts en orientation scolaire", value: "9", icon3d: "https://img.icons8.com/3d-fluency/94/compass.png", color: "text-brand-red" },
  ];

  const philosophy = [
    {
      title: "MISSION",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      description: "Clarifier, structurer et sécuriser les parcours d'études supérieures. STUDASSIST accompagne les élèves et les étudiants dans les décisions académiques clés, en transformant la complexité de l'orientation, des admissions et de la mobilité internationale en parcours lisibles, stratégiques et maîtrisés."
    },
    {
      title: "VISION",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      description: "Devenir la référence internationale du conseil étudiant. STUDASSIST ambitionne de bâtir un écosystème global d'accompagnement académique, permettant à chaque étudiant, quel que soit son parcours ou son pays d'origine, d'accéder aux meilleures opportunités éducatives grâce à des choix éclairés et stratégiques."
    },
    {
      title: "VALEURS",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
      description: "Excellence, Personnalisation, Engagement, Éthique & Bienveillance. Nous appliquons des standards élevés, concevons des parcours sur mesure, nous impliquons pleinement aux côtés des familles, et guidons avec intégrité et transparence."
    }
  ];

  const steps = [
    { title: "Diagnostic Approfondi", desc: "Analyse complète du profil, des méthodes de travail et des aspirations de l'élève.", icon3d: "https://img.icons8.com/3d-fluency/94/search.png" },
    { title: "Parcours sur Mesure", desc: "Construction d'un plan d'accompagnement stratégique avec des objectifs clairs et mesurables.", icon3d: "https://img.icons8.com/3d-fluency/94/compass.png" },
    { title: "Accompagnement Académique", desc: "Soutien scolaire ciblé dans les matières clés pour optimiser les dossiers et certifications.", icon3d: "https://img.icons8.com/3d-fluency/94/graduation-cap.png" },
    { title: "Suivi Continu", desc: "Pilotage constant des progrès et ajustements stratégiques pour optimiser le parcours.", icon3d: "https://img.icons8.com/3d-fluency/94/bar-chart.png" },
    { title: "Orientation vers l'Avenir", desc: "Aide à la construction du projet professionnel et préparation aux concours les plus exigeants.", icon3d: "https://img.icons8.com/3d-fluency/94/telescope.png" },
  ];

  const pillars = [
    { title: "Excellence", desc: "Nous appliquons des standards élevés dans chaque accompagnement, fondés sur l'expertise, la rigueur et l'amélioration continue.", icon3d: "https://img.icons8.com/3d-fluency/94/trophy.png" },
    { title: "Personnalisation", desc: "Chaque élève est unique. Nous concevons des parcours sur mesure, alignés avec les aspirations, le potentiel et la réalité de chacun.", icon3d: "https://img.icons8.com/3d-fluency/94/puzzle.png" },
    { title: "Engagement", desc: "Nous nous impliquons pleinement aux côtés des étudiants et de leurs familles, avec constance, responsabilité et disponibilité.", icon3d: "https://img.icons8.com/3d-fluency/94/handshake.png" },
    { title: "Éthique & Bienveillance", desc: "Nous guidons avec intégrité, transparence et respect, en plaçant toujours l'intérêt de l'étudiant au cœur de nos recommandations.", icon3d: "https://img.icons8.com/3d-fluency/94/heart-with-pulse.png" },
  ];

  const team = [
    { name: "Yasmine", title: "Founder", image: "/yasmine-belkhayat-fondatrice-studassist.jpg" },
    { name: "Hajar", title: "Co-founder & GM", image: "/hajar-cofondatrice-studassist.jpg" },
    { name: "Mehdi", title: "Co-founder & GM", image: "/mehdi-cofondateur-studassist.jpg" },
    { name: "Omar Bennis", title: "Co-founder & GM", image: "/omar-bennis-cofondateur-studassist.jpg" },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-10 lg:py-16">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="text-center mb-10 lg:mb-14">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue mb-4 uppercase tracking-tighter leading-[1.1] lg:leading-tight"
            >
              Qui <span className="sa-wavy sa-wavy-teal text-brand-teal">sommes-nous</span>
            </motion.h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <MediaFrameFloaters />
              <div className="relative z-20 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 transform -rotate-2 overflow-hidden">
                <img 
                  src="/studassist-equipe-cabinet-orientation-scolaire.jpg" 
                  alt="Équipe STUDASSIST - Cabinet de conseil en orientation scolaire Casablanca" 
                  className="rounded-[2rem] w-full h-[280px] lg:h-[400px] object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-darkblue leading-tight uppercase">
                <span className="text-brand-teal">STUDASSIST</span>, cabinet de conseil en <br /> 
                orientation et soutien scolaire au Maroc et <br className="hidden lg:block" />
                à l'international
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed font-medium text-sm lg:text-base">
                <p>
                  STUDASSIST est le <span className="text-brand-darkblue font-bold">1er cabinet de conseil en orientation et accompagnement scolaire</span> dédié à l'accompagnement des élèves et des étudiants, quels que soient leurs niveaux scolaires ou académiques, <span className="text-brand-teal font-bold italic">au Maroc et à l'international</span>.
                </p>
                <p>
                  Nous sommes une <span className="text-brand-darkblue font-bold tracking-tight">équipe de professionnels de l'éducation</span>, passionnés par la réussite scolaire et universitaire, et notre mission est de proposer un <span className="text-brand-teal font-bold italic underline">accompagnement sur mesure</span>, personnalisé selon les objectifs académiques et professionnels de chaque élève.
                </p>
                <p>
                  Nous répondons à l'ensemble des besoins étudiants à travers une offre complète incluant l'orientation scolaire et universitaire, le soutien scolaire, la préparation aux concours, la préparation aux examens officiels, les certifications de langues internationales (IELTS, TOEFL, SAT, DELF, DALF…), ainsi que l'accompagnement aux démarches étudiantes et à l'installation à l'étranger.
                </p>
                <p>
                  Depuis notre création en 2018, nous croyons en <span className="text-brand-darkblue font-bold underline">l'unicité de chaque élève</span> et mettons tout en œuvre pour révéler leur potentiel, sécuriser leurs choix d'orientation et les guider vers la réussite !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR - Scrolling marquee matching homepage trust bar */}
      <section className="bg-brand-teal py-8 relative z-30 overflow-hidden border-y border-white/20 shadow-2xl">
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-48 bg-gradient-to-r from-brand-teal to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-48 bg-gradient-to-l from-brand-teal to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...stats, ...stats].map((item, idx) => (
            <div key={idx} className="flex items-center px-10 lg:px-14 border-r border-white/20 last:border-r-0 shrink-0 py-3">
              <div className="flex flex-col items-center text-center space-y-1">
                <img src={item.icon3d} alt={item.label} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 shrink-0 drop-shadow-lg" />
                <div className="text-[26px] sm:text-[32px] lg:text-[40px] tracking-tight font-black font-display text-white leading-none">
                  {item.value}
                </div>
                <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* HISTORY SECTION */}
      <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16 bg-gray-50 relative overflow-hidden">
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

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-darkblue mb-6 leading-tight uppercase">
                STUDASSIST – L'histoire d'un cabinet de conseil dédié à la réussite académique internationale
              </h2>
              <div className="space-y-6 text-gray-500 font-medium text-sm leading-relaxed">
                <p>
                  <span className="text-brand-darkblue font-bold uppercase">STUDASSIST est né en 2018</span>, lors d'un voyage sur les routes de Bourgogne. Ce qui n'était au départ qu'une discussion informelle entre anciens diplômés d'écoles de commerce et d'ingénieurs est rapidement devenu une prise de conscience profonde.
                </p>
                <p>
                  Nous évoquions nos parcours, faits de réussites, de découvertes et d'opportunités, mais aussi les difficultés souvent invisibles du parcours étudiant : des choix d'orientation mal accompagnés, des démarches administratives complexes, une préparation insuffisante aux concours et admissions sélectives, et surtout, un sentiment d'isolement face à des décisions déterminantes.
                </p>
                <p>
                  Un constat s'est alors imposé : <span className="text-brand-darkblue font-bold">le manque d'accompagnement structuré est l'un des principaux freins à la réussite étudiante</span>, bien plus que le manque de talent.
                </p>
                <p>
                  Les études supérieures représentent l'une des périodes les plus transformatrices d'une vie. Elles façonnent les trajectoires professionnelles, l'ouverture au monde et la construction personnelle. Pourtant, trop d'étudiants abordent ces étapes clés sans les outils, la stratégie et le soutien nécessaires, en particulier lorsqu'il s'agit d'études sélectives ou de mobilité internationale.
                </p>
                <p>
                  C'est pour répondre à cette réalité que <span className="text-brand-teal font-extrabold">STUDASSIST</span> a été créé.
                </p>
                <p>
                  Nous avons conçu un modèle d'accompagnement global et intégré, couvrant l'ensemble du parcours étudiant : orientation stratégique, excellence académique, préparation aux concours et aux certifications internationales, accompagnement aux admissions et assistance à l'installation à l'étranger.
                </p>
                <p>
                  Notre ambition est claire : <span className="text-brand-darkblue font-bold">transformer un parcours souvent subi en un projet maîtrisé</span>, en apportant clarté, méthode et sérénité à chaque étape décisive.
                </p>
                <p>
                  Depuis sa création, STUDASSIST repose sur une conviction forte : chaque élève possède un potentiel unique, et c'est en l'alignant avec les bonnes décisions, au bon moment, que l'on crée des <span className="text-brand-teal font-bold italic">trajectoires d'excellence, durables et internationales</span>.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
               <MediaFrameFloaters />
               <div className="relative z-20 bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100 transform rotate-2 overflow-hidden">
                 <img 
                   src="/studassist-histoire-fondateurs-equipe.jpg" 
                   alt="Équipe fondatrice STUDASSIST - Histoire du cabinet d'orientation scolaire" 
                   className="rounded-[2.5rem] w-full h-[300px] lg:h-[500px] object-cover object-[center_20%]"
                 />
               </div>
               {/* Decorative floatable — positioned outside overflow-hidden container */}
               <div className="absolute -top-5 -right-5 z-30 bg-brand-teal p-4 rounded-full shadow-xl hidden xl:block animate-bounce">
                  <img src="https://img.icons8.com/3d-fluency/94/graduation-cap.png" alt="Graduation Cap" className="w-10 h-10" />
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
      <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16 relative z-20">
        <div className="container mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-red rounded-[2.5rem] lg:rounded-[3.5rem] p-8 lg:p-20 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden shadow-[0_40px_100px_rgba(239,71,111,0.25)] border border-white/10"
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
              
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-6 lg:mb-8 uppercase tracking-tighter leading-[1.05] lg:leading-[0.95]">
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
      <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16">
        <div className="container mx-auto px-6 w-full">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Nos Fondations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter leading-tight">La philosophie <span className="text-brand-teal">Studassist</span></h2>
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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darkblue via-brand-darkblue/60 to-brand-darkblue/10 flex flex-col justify-end p-10 text-white">
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
      <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-6">
              <span className="w-8 h-px bg-brand-teal"></span>
              <span>Notre Excellence</span>
              <span className="w-8 h-px bg-brand-teal"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue mb-8 uppercase tracking-tighter leading-tight">
              La Méthode <span className="text-brand-teal">STUDASSIST</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Une approche structurée, scientifique et humaine en <span className="text-brand-red font-bold underline">5 étapes clés</span> pour garantir votre réussite académique et professionnelle.
            </p>
          </div>

          {/* 5 Steps Process Timeline */}
          <div className="relative mb-40">
            {/* Desktop Connector Line — gradient flowing through all card colors */}
            <div
              className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #7FC074, #3F9B8E, #154796, #2A5CB8, #E9337F, #EE5C5F, #F19A38, #F5B43E)" }}
            />
            
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
                  {/* Step Number Badge - Gradient flow across all 5 cards */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg text-white shadow-lg group-hover:scale-110 transition-all duration-300"
                      style={{
                        background: idx === 0
                          ? "linear-gradient(135deg, #7FC074, #3F9B8E)"
                          : idx === 1
                          ? "linear-gradient(135deg, #154796, #2A5CB8)"
                          : idx === 2
                          ? "linear-gradient(135deg, #E9337F, #EE5C5F)"
                          : idx === 3
                          ? "linear-gradient(135deg, #EE5C5F, #F19A38)"
                          : "linear-gradient(135deg, #F19A38, #F5B43E)"
                      }}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  <div
                    className="bg-white p-8 pt-16 rounded-[2.5rem] border border-gray-100 transition-all duration-500 flex flex-col items-center text-center h-full group-hover:-translate-y-2 relative overflow-hidden"
                    style={{
                      boxShadow: idx === 0
                        ? "0 20px 50px rgba(127,192,116,0.08), 0 4px 12px rgba(127,192,116,0.05)"
                        : idx === 1
                        ? "0 20px 50px rgba(21,71,150,0.08), 0 4px 12px rgba(21,71,150,0.05)"
                        : idx === 2
                        ? "0 20px 50px rgba(233,51,127,0.08), 0 4px 12px rgba(233,51,127,0.05)"
                        : idx === 3
                        ? "0 20px 50px rgba(238,92,95,0.08), 0 4px 12px rgba(238,92,95,0.05)"
                        : "0 20px 50px rgba(245,180,62,0.08), 0 4px 12px rgba(245,180,62,0.05)",
                    }}
                  >
                    {/* Colored top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-[2.5rem]"
                      style={{
                        background: idx === 0
                          ? "linear-gradient(90deg, #7FC074, #3F9B8E)"
                          : idx === 1
                          ? "linear-gradient(90deg, #154796, #2A5CB8)"
                          : idx === 2
                          ? "linear-gradient(90deg, #E9337F, #EE5C5F)"
                          : idx === 3
                          ? "linear-gradient(90deg, #EE5C5F, #F19A38)"
                          : "linear-gradient(90deg, #F19A38, #F5B43E)"
                      }}
                    />
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform"
                      style={{
                        backgroundColor: idx === 0
                          ? "rgba(127,192,116,0.1)"
                          : idx === 1
                          ? "rgba(21,71,150,0.08)"
                          : idx === 2
                          ? "rgba(233,51,127,0.08)"
                          : idx === 3
                          ? "rgba(238,92,95,0.08)"
                          : "rgba(245,180,62,0.1)"
                      }}
                    >
                      <img src={step.icon3d} alt={step.title} className="w-8 h-8 drop-shadow-sm" />
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
          <div className="mt-20">
            <div className="flex flex-col items-center mb-12 space-y-6">
              <div className="px-8 py-6 bg-white rounded-3xl border border-gray-100 shadow-xl mb-2">
                <Logo variant="full" height={40} />
              </div>
              <div className="inline-flex items-center px-4 py-1.5 bg-brand-darkblue text-white rounded-full text-[10px] font-black tracking-[0.2em] uppercase shadow-lg shadow-brand-darkblue/10">
                L'ADN STUDASSIST
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter text-center leading-tight">
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
                    <div className="absolute -right-4 -bottom-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500 -rotate-12 transform scale-150 pointer-events-none">
                      <img src={pillar.icon3d} alt="" className="w-24 h-24" />
                    </div>

                    <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-10 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 bg-gray-50">
                      <img src={pillar.icon3d} alt={pillar.title} className="w-10 h-10 drop-shadow-md" />
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
      <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-black text-brand-darkblue leading-[1.1] lg:leading-tight mb-8 uppercase tracking-tighter">
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
      <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              {/* Premium Image Structure */}
              <div className="relative h-[320px] sm:h-[450px] md:h-[600px] w-full max-w-[500px] mx-auto">
                {/* Elegant corner brackets */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-[3px] border-l-[3px] border-brand-teal rounded-tl-2xl z-30 opacity-50" />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-[3px] border-r-[3px] border-brand-teal rounded-br-2xl z-30 opacity-50" />
                
                {/* Small pink dot accent */}
                <div className="absolute top-[15%] -right-6 w-3 h-3 rounded-full bg-brand-red z-30 opacity-60" />
                {/* Gold triangle — top right area */}
                <div className="absolute -top-6 right-[20%] w-8 h-8 z-30 opacity-40">
                  <svg viewBox="0 0 32 32"><polygon points="16,2 30,28 2,28" fill="none" stroke="#F3B421" strokeWidth="2" /></svg>
                </div>
                {/* Dashed pink ring — mid left */}
                <div className="absolute top-[40%] -left-8 w-10 h-10 z-0 opacity-30">
                  <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="none" stroke="#EE4B62" strokeWidth="2" strokeDasharray="5 4" /></svg>
                </div>
                {/* Teal wavy line — bottom center */}
                <div className="absolute -bottom-6 left-[30%] w-16 h-4 z-30 opacity-40">
                  <svg viewBox="0 0 60 12"><path d="M2 6 Q10 2 18 6 T34 6 T50 6 T58 6" fill="none" stroke="#1BB79D" strokeWidth="2" strokeLinecap="round" /></svg>
                </div>
                
                {/* Circular STUDASSIST watermark — bottom left */}
                <div className="absolute -bottom-10 -left-10 w-24 h-24 z-0 opacity-30">
                  <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 120 120">
                    <defs><path id="team-arc" d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" fill="none" /></defs>
                    <text fill="#1BB79D" fontSize="11" fontWeight="800" letterSpacing="5" fontFamily="system-ui, sans-serif">
                      <textPath href="#team-arc">STUDASSIST • EXCELLENCE • STUDASSIST •</textPath>
                    </text>
                  </svg>
                </div>
                {/* Gold circular arc — top right */}
                <div className="absolute -top-8 -right-8 w-20 h-20 z-0 opacity-25">
                  <svg className="w-full h-full animate-[spin_25s_linear_infinite_reverse]" viewBox="0 0 120 120">
                    <defs><path id="team-arc-gold" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" fill="none" /></defs>
                    <text fill="#F3B421" fontSize="10" fontWeight="700" letterSpacing="4" fontFamily="system-ui, sans-serif">
                      <textPath href="#team-arc-gold">EXCELLENCE • ORIENT •</textPath>
                    </text>
                  </svg>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 w-4/5 h-4/5 rounded-[3rem] overflow-hidden shadow-2xl z-10 border border-gray-100"
                >
                  <img 
                    src="/studassist-equipe-accompagnement-academique.jpg" 
                    alt="Équipe STUDASSIST - Accompagnement académique et soutien scolaire" 
                    className="w-full h-full object-cover object-top"
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
                    src="/studassist-equipe-conseil-orientation.jpg" 
                    alt="Équipe STUDASSIST - Conseillers en orientation scolaire et universitaire" 
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>

                {/* Soft glow accents */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-teal/8 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-darkblue/5 rounded-full blur-2xl -z-10" />
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase">
                <span className="w-8 h-px bg-brand-teal"></span>
                <span>L'Humain au cœur</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter leading-[1.1] lg:leading-tight">
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
                  <p className="text-sm">
                    Chez STUDASSIST, il ne s'agit pas de simples étudiants intervenants, mais de <span className="font-bold text-brand-darkblue">professionnels de l'enseignement</span>, capables de transmettre avec méthode, clarté et efficacité, quel que soit le niveau ou le système scolaire.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 space-y-4">
                  <p className="text-brand-darkblue font-bold tracking-widest uppercase text-[10px]">Des conseillers d'orientation formés à une méthodologie exclusive</p>
                  <p className="text-sm">
                    Nos conseillers d'orientation répondent à des <span className="font-bold underline italic text-brand-darkblue">critères stricts de rigueur, d'analyse et de professionnalisme</span>. Ils appliquent une <span className="font-bold text-brand-darkblue">méthodologie exclusive STUDASSIST</span>, développée en interne, qui permet de structurer les décisions d'orientation, d'aligner les choix académiques avec le potentiel réel de l'élève et d'inscrire chaque projet dans une vision cohérente et durable.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 space-y-4">
                  <p className="text-brand-darkblue font-bold tracking-widest uppercase text-[10px]">Une équipe administrative engagée et structurante</p>
                  <p className="text-sm">
                    Notre équipe administrative joue un <span className="font-bold text-brand-darkblue">rôle clé dans la qualité de notre accompagnement</span>. Présente au quotidien, elle assure la coordination, le suivi des process et le respect des standards élevés que nous nous imposons.
                  </p>
                  <p className="text-sm">
                    Elle garantit la fluidité des échanges, la rigueur organisationnelle et le bon déroulement de chaque étape du parcours étudiant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16 bg-white">
        <div className="container mx-auto px-6 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-8 leading-tight">Notre direction</h2>
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
                <div className="relative w-full max-w-[320px] mx-auto mb-8">
                  {/* Corner brackets */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 border-t-[3px] border-l-[3px] border-brand-teal rounded-tl-xl z-30 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-[3px] border-r-[3px] border-brand-teal rounded-br-xl z-30 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Circular STUDASSIST text — top corner, hover-only */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 z-30 opacity-0 group-hover:opacity-70 transition-opacity duration-500">
                    <svg className="w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 120 120">
                      <defs><path id={`tp-${idx}`} d="M 60,60 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0" fill="none" /></defs>
                      <text fill="#1BB79D" fontSize="12" fontWeight="800" letterSpacing="6" fontFamily="system-ui, sans-serif">
                        <textPath href={`#tp-${idx}`}>STUDASSIST •</textPath>
                      </text>
                    </svg>
                  </div>
                  {/* Unique hover element per card */}
                  {idx === 0 && (
                    <div className="absolute -bottom-5 -left-5 w-10 h-10 z-30 opacity-0 group-hover:opacity-80 transition-all duration-500 group-hover:translate-y-1">
                      <svg viewBox="0 0 40 40"><polygon points="20,2 38,38 2,38" fill="none" stroke="#F3B421" strokeWidth="2.5" /></svg>
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="absolute top-1/2 -left-6 w-8 h-8 z-30 opacity-0 group-hover:opacity-70 transition-all duration-500 group-hover:-translate-x-1">
                      <svg viewBox="0 0 40 40"><rect x="5" y="5" width="30" height="30" rx="6" fill="none" stroke="#EE4B62" strokeWidth="2.5" strokeDasharray="6 4" /></svg>
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-12 h-3 z-30 opacity-0 group-hover:opacity-70 transition-all duration-500 group-hover:translate-y-1">
                      <svg viewBox="0 0 60 12"><path d="M2 6 Q10 2 18 6 T34 6 T50 6 T58 6" fill="none" stroke="#1BB79D" strokeWidth="2.5" strokeLinecap="round" /></svg>
                    </div>
                  )}
                  {idx === 3 && (
                    <div className="absolute top-1/3 -right-6 w-6 h-6 z-30 opacity-0 group-hover:opacity-70 transition-all duration-500 group-hover:translate-x-1">
                      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#F3B421" strokeWidth="2.5" /></svg>
                    </div>
                  )}
                  {/* Soft glow */}
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-brand-teal/10 rounded-full blur-xl -z-10 group-hover:bg-brand-teal/20 transition-colors duration-500" />
                  <div className="relative z-20 w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.title} STUDASSIST cabinet orientation scolaire`} 
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
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
      <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16 bg-brand-darkblue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <svg width="100%" height="100%">
              <pattern id="pattern-final" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#pattern-final)" />
           </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-8 lg:mb-12 uppercase tracking-tighter leading-tight">Envie de rejoindre <br /> l'aventure ?</h2>
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
