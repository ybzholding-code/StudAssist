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
import MediaFrameFloaters from "@/src/components/MediaFrameFloaters";
import Logo from "../components/Logo";
import TrustBar from "../components/TrustBar";
import { usePageMeta } from "../hooks/usePageMeta";

const QuiSommesNous = () => {
  usePageMeta({
    title: "Qui sommes-nous — Cabinet d'Orientation STUDASSIST à Casablanca",
    description: "Découvrez STUDASSIST, cabinet d'orientation scolaire et d'accompagnement académique basé à Casablanca. Notre mission, notre équipe et notre méthode d'accompagnement personnalisé.",
    canonical: "/qui-sommes-nous",
  });
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
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      description: "Clarifier, structurer et sécuriser les parcours d'études supérieures. STUDASSIST accompagne les élèves et les étudiants dans les décisions académiques clés, en transformant la complexité de l'orientation, des admissions et de la mobilité internationale en parcours lisibles, stratégiques et maîtrisés."
    },
    {
      title: "VISION",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
      description: "Devenir la référence internationale du conseil étudiant. STUDASSIST ambitionne de bâtir un écosystème global d'accompagnement académique, permettant à chaque étudiant, quel que soit son parcours ou son pays d'origine, d'accéder aux meilleures opportunités éducatives grâce à des choix éclairés et stratégiques."
    },
    {
      title: "VALEURS",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      description: "Excellence, Personnalisation, Engagement, Éthique & Bienveillance. Nous appliquons des standards élevés, concevons des parcours sur mesure, nous impliquons pleinement aux côtés des familles, et guidons avec intégrité et transparence."
    }
  ];

  const steps = [
    { title: "Diagnostic Approfondi", desc: "Analyse complète du profil, des méthodes de travail et des aspirations de l'élève.", icon3d: "https://img.icons8.com/3d-fluency/94/magnifying-glass.png" },
    { title: "Parcours sur Mesure", desc: "Construction d'un plan d'accompagnement stratégique avec des objectifs clairs et mesurables.", icon3d: "https://img.icons8.com/?size=100&id=1WpD5bksxBe1&format=png&color=000000" },
    { title: "Accompagnement Académique", desc: "Soutien scolaire ciblé dans les matières clés pour optimiser les dossiers et certifications de langues.", icon3d: "https://img.icons8.com/?size=100&id=qZ3IKpKF9Cun&format=png&color=000000" },
    { title: "Suivi Continu", desc: "Pilotage constant des progrès et ajustements stratégiques pour optimiser le parcours.", icon3d: "https://img.icons8.com/?size=100&id=OlDzEETWpjI7&format=png&color=000000" },
    { title: "Orientation vers l'Avenir", desc: "Aide à la définition du projet professionnel, à la construction des candidatures et à la préparation des concours les plus exigeants.", icon3d: "https://img.icons8.com/?size=100&id=KA0zLOyspZIE&format=png&color=000000" },
  ];

  const pillars = [
    { title: "Excellence", desc: "Nous appliquons des standards élevés dans chaque accompagnement, fondés sur l'expertise, la rigueur et l'amélioration continue.", icon3d: "https://img.icons8.com/3d-fluency/94/trophy.png" },
    { title: "Personnalisation", desc: "Chaque élève est unique. Nous concevons des parcours sur mesure, alignés avec les aspirations, le potentiel et la réalité de chacun.", icon3d: "https://img.icons8.com/3d-fluency/94/goal.png" },
    { title: "Engagement", desc: "Nous nous impliquons pleinement aux côtés des étudiants et de leurs familles, avec constance, responsabilité et disponibilité.", icon3d: "https://img.icons8.com/3d-fluency/94/handshake.png" },
    { title: "Éthique & Bienveillance", desc: "Nous guidons avec intégrité, transparence et respect, en plaçant toujours l'intérêt de l'étudiant au cœur de nos recommandations.", icon3d: "https://img.icons8.com/3d-fluency/94/heart-with-pulse.png" },
  ];

  const team = [
    {
      name: "Yasmine Belkhayat",
      role: "Vision stratégique & Innovation",
      image: "/yasmine-belkhayat-fondatrice-studassist.jpg",
      pos: "object-[center_18%]", customScale: "scale-[1.03] origin-top", hoverScale: "group-hover:scale-[1.08] origin-top", filter: "", bgColor: "bg-transparent",
      paragraphs: [
        "Diplômée de NEOMA Business School après une classe préparatoire, Yasmine débute sa carrière dans le conseil en transformation digitale chez Natixis et Advents Consulting. Elle fonde STUDASSIST en 2018 et en pilote aujourd\'hui la stratégie, l\'innovation et le développement du parcours client, avec l\'ambition de réinventer l\'accompagnement et l\'orientation académique des étudiants.",
      ],
      linkedin: "https://www.linkedin.com/in/yasmine-belkhayat-zougari-15b6684a/",
    },
    {
      name: "Omar Bennis",
      role: "Finance & Développement",
      image: "/omar-bennis-cofondateur-studassist-v2.png",
      pos: "object-[center_12%]", customScale: "scale-[1.06] origin-top", hoverScale: "group-hover:scale-[1.11] origin-top", filter: "", bgColor: "bg-transparent",
      paragraphs: [
        "Diplômé de l\'ISG Paris et de l\'ESSEC Executive Education, Omar possède plus de 15 ans d\'expérience en entrepreneuriat et management international. En ayant créé et dirigé plusieurs projets et entreprises en France puis au sein de Dislog Group, il met son expertise au service de la structuration et du développement stratégique de STUDASSIST. Depuis 2025, il préside également la société sportive du MAS de Fès.",
      ],
      linkedin: "",
    },
    {
      name: "Hajar Gherras",
      role: "Image de Marque & Rayonnement",
      image: "/hajar-cofondatrice-studassist.jpg",
      pos: "object-[55%_15%]", customScale: "scale-[1.06] origin-top", hoverScale: "group-hover:scale-[1.11] origin-top", filter: "brightness-[0.85] contrast-[1.2]", bgColor: "bg-transparent",
      paragraphs: [
        "Diplômée de l\'ENCG Settat, Hajar construit d\'abord son expertise en Marketing chez INWI, puis dans l\'univers du luxe au sein du groupe L\'Oréal, où elle pilote plusieurs marques internationales. Depuis 2021, elle dirige la stratégie marketing et communication de STUDASSIST et contribue activement au développement de son image de marque, de ses partenariats et de sa croissance commerciale.",
      ],
      linkedin: "https://www.linkedin.com/in/hajar-gherras-44a8284b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      name: "Mehdi Mejjati Alami",
      role: "Excellence pédagogique",
      image: "/mehdi-cofondateur-studassist.jpg",
      pos: "object-[center_17%]", customScale: "scale-[1.03] origin-top", hoverScale: "group-hover:scale-[1.08] origin-top", filter: "", bgColor: "bg-transparent",
      paragraphs: [
        "Diplômé de l\'Université Paris II Panthéon-Assas, Mehdi débute sa carrière en finance chez Société Générale CIB puis à PwC avant de créer Mathassistance / Mon Prof & Moi, réseau national de soutien scolaire en France. Depuis 2021, il pilote le soutien scolaire et préparations de concours de STUDASSIST en développant une méthodologie d\'accompagnement exigeante, centrée sur la réussite des élèves.",
      ],
      linkedin: "https://www.linkedin.com/in/mehdi-mejjati-alami-52b17184?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative flex items-center overflow-hidden py-16 lg:py-24">
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

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <div className="relative flex">
              <MediaFrameFloaters />
              <div className="relative z-20 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 transform -rotate-2 overflow-hidden flex-1">
                <img 
                  src="/DSC_8768-copie.JPG" 
                  alt="Équipe STUDASSIST - Cabinet de conseil en orientation scolaire Casablanca" 
                  className="rounded-[2rem] w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-darkblue leading-tight uppercase">
                <span className="text-brand-teal">STUDASSIST</span>, cabinet de conseil en orientation et soutien scolaire au Maroc et à l'international
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

      <TrustBar />

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
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
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
            <div className="order-1 lg:order-2 relative flex items-stretch">
               {/* Two superposed album-style photos */}
               <div className="relative w-full h-full flex flex-col justify-center">
                 {/* Top image — slightly rotated left */}
                 <motion.div
                   initial={{ opacity: 0, rotate: -6 }}
                   whileInView={{ opacity: 1, rotate: -4 }}
                   viewport={{ once: true }}
                   className="relative z-10 bg-[#fdfdfd] p-3 pb-12 sm:p-4 sm:pb-16 rounded-[2px] shadow-[0_20px_50px_rgba(17,29,74,0.15)] border border-gray-200 w-[85%] ml-auto -mb-20 sm:-mb-24"
                 >
                   <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden bg-gray-100 rounded-[2px] border border-gray-200/50">
                     <img 
                       src="/about-photo-1.png" 
                       alt="Fondateurs STUDASSIST - Portraits équipe direction" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                 </motion.div>
                 {/* Bottom image — slightly rotated right */}
                 <motion.div
                   initial={{ opacity: 0, rotate: 6 }}
                   whileInView={{ opacity: 1, rotate: 3 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.15 }}
                   className="relative z-20 bg-[#fdfdfd] p-3 pb-12 sm:p-4 sm:pb-16 rounded-[2px] shadow-[0_20px_50px_rgba(17,29,74,0.15)] border border-gray-200 w-[85%] mr-auto"
                 >
                   <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden bg-gray-100 rounded-[2px] border border-gray-200/50">
                     <img 
                       src="/about-photo-2.png" 
                       alt="Équipe fondatrice STUDASSIST - Photo de groupe" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                 </motion.div>
               </div>
            </div>
          </div>
        </div>
      </section>


      {/* PHILOSOPHY SECTION */}
      <section className="min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-16">
        <div className="container mx-auto px-6 w-full">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Notre culture d'entreprise
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter leading-tight">La philosophie <span className="text-brand-teal">Studassist</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left column — Mission + Vision stacked */}
            <div className="flex flex-col gap-8">
              {/* MISSION card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_rgba(17,29,74,0.06)] p-8 lg:p-10 overflow-hidden flex-1"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-teal rounded-l-[2rem]" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <img src="https://img.icons8.com/3d-fluency/94/rocket.png" alt="" className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-brand-darkblue uppercase tracking-tight">Mission</h3>
                </div>
                <p className="text-brand-darkblue font-bold text-base leading-relaxed mb-3">
                  Clarifier, structurer et sécuriser les parcours d'études supérieures.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  STUDASSIST accompagne les élèves et les étudiants dans les <span className="text-brand-darkblue font-semibold">décisions académiques clés</span>, en transformant la complexité de l'orientation, des admissions et de la mobilité internationale en parcours <span className="text-brand-darkblue font-semibold">lisibles, stratégiques et maîtrisés</span>.
                </p>
              </motion.div>

              {/* VISION card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_rgba(17,29,74,0.06)] p-8 lg:p-10 overflow-hidden flex-1"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red rounded-l-[2rem]" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-red/10 flex items-center justify-center shrink-0">
                    <img src="https://img.icons8.com/3d-fluency/94/telescope.png" alt="" className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-brand-darkblue uppercase tracking-tight">Vision</h3>
                </div>
                <p className="text-brand-darkblue font-bold text-base leading-relaxed mb-3">
                  Devenir la référence internationale du conseil étudiant.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  STUDASSIST ambitionne de bâtir un <span className="text-brand-darkblue font-semibold">écosystème global d'accompagnement académique</span>, permettant à chaque étudiant, quel que soit son parcours ou son pays d'origine, d'accéder aux meilleures opportunités éducatives grâce à des choix <span className="text-brand-darkblue font-semibold">éclairés et stratégiques</span>.
                </p>
              </motion.div>
            </div>

            {/* Right column — Valeurs card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_rgba(17,29,74,0.06)] p-8 lg:p-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-sa-gold rounded-l-[2rem]" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-sa-gold/10 flex items-center justify-center shrink-0">
                  <img src="https://img.icons8.com/3d-fluency/94/heart-with-pulse.png" alt="" className="w-7 h-7" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-brand-darkblue uppercase tracking-tight">Valeurs</h3>
              </div>
              <div className="space-y-5">
                {pillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="p-4 rounded-2xl bg-gray-50/80 border border-gray-100/80 hover:bg-white hover:shadow-md hover:border-gray-200 transition-all duration-300"
                  >
                    <h4 className="text-brand-darkblue font-black text-sm uppercase tracking-tight mb-1.5">{pillar.title}</h4>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue mb-8 uppercase tracking-tighter leading-tight">
              La Méthode <span className="text-brand-teal">STUDASSIST</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Une approche structurée, scientifique et humaine en <span className="sa-wavy sa-wavy-pink text-brand-red font-bold">5 étapes clés</span> pour garantir votre réussite académique et professionnelle.
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

          {/* WHAT MAKES US DIFFERENT */}
          <div className="mt-20">
            <div className="flex flex-col items-center mb-12 space-y-4">
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
                  <div className="h-full bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(17,29,74,0.03)] hover:shadow-[0_40px_80px_rgba(17,29,74,0.1)] hover:border-brand-teal/20 transition-all duration-500 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 bg-gray-50">
                      <img src={pillar.icon3d} alt={pillar.title} className="w-10 h-10 drop-shadow-md" />
                    </div>

                    <h3 className="text-brand-darkblue font-black text-base uppercase tracking-tight mb-3 group-hover:text-brand-teal transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION — Banner format */}
      <section className="py-10 lg:py-14 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-darkblue rounded-[2rem] px-8 py-10 lg:px-16 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-[0_30px_80px_rgba(17,29,74,0.2)]"
          >
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
              <svg width="100%" height="100%"><pattern id="cta-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="white" /></pattern><rect width="100%" height="100%" fill="url(#cta-dots)" /></svg>
            </div>
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-black text-white leading-tight mb-2 uppercase tracking-tighter">
                Prêt à passer à <span className="text-brand-red">l'action</span> ?<br className="hidden lg:block" /> Votre <span className="text-brand-teal">avenir</span> commence ici !
              </h2>
              <p className="text-white/60 text-sm lg:text-base font-medium">
                Bénéficiez d'un diagnostic complet de 45 minutes avec nos conseillers experts.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="bg-brand-red text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl shadow-brand-red/30 group inline-flex items-center gap-3"
              >
                <span>Réserver une séance découverte</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:+212669495996" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-bold">
                <Phone size={15} />
                +212 6 69 49 59 96
              </a>
            </div>
          </motion.div>
        </div>
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
                <span>L'humain au coeur de notre ADN</span>
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
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6 w-full">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-5"
            >
              <span className="w-6 h-px bg-brand-teal" />
              Équipe dirigeante
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter leading-tight">Parcours équipe <span className="text-brand-teal">dirigeante</span></h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative w-full max-w-[320px] mx-auto mb-4">
                  <div className={`relative z-20 w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-gray-100 transition-all duration-500 shadow-xl group-hover:border-brand-teal/40 ${member.bgColor}`}>
                    <img 
                      src={member.image} 
                      alt={`${member.name} STUDASSIST`} 
                      className={`absolute inset-0 w-full h-full object-cover ${member.pos} ${member.customScale} ${member.hoverScale} ${member.filter} transition-all duration-700 grayscale group-hover:grayscale-0`}
                    />
                    <div className="absolute inset-0 bg-brand-darkblue/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
                <div className="text-center max-w-[320px] mx-auto flex flex-col">
                  <h3 className="text-lg sm:text-xl font-black text-brand-darkblue uppercase tracking-tight mb-1">{member.name}</h3>
                  {member.role && <p className="text-brand-teal text-[11px] font-bold uppercase tracking-widest mb-3">{member.role}</p>}
                  <div className="space-y-3 mb-4">
                    {member.paragraphs.map((p, i) => (
                      <p key={i} className="text-gray-400 text-xs leading-relaxed text-justify sm:text-center">{p}</p>
                    ))}
                  </div>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-400 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] transition-all mx-auto">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES DES ANCIENS */}
      <section className="py-14 lg:py-20 bg-[#f8fbfc] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter leading-tight">
              Témoignages <span className="text-brand-teal">de nos anciens</span>
            </h2>
            <div className="w-12 h-1 bg-brand-red rounded-full mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Julie */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="relative bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(17,29,74,0.04)] p-8 flex flex-col"
            >
              <div className="absolute top-0 left-8 w-8 h-8 -translate-y-1/2">
                <svg viewBox="0 0 32 32" fill="none"><path d="M4 20c0-5.5 3-10 8-12l1.5 2.5C9.5 12.5 8.5 15 8.5 18H12c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-6zm16 0c0-5.5 3-10 8-12l1.5 2.5c-4 2-5 4.5-5 7.5h3.5c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-6z" fill="#1BB79D" opacity="0.2"/></svg>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                Ce que j'ai particulièrement apprécié chez STUDASSIST, c'est l'importance accordée à la <span className="text-brand-darkblue font-semibold">formation continue des collaborateurs</span>. On ne cesse jamais d'apprendre, de progresser et d'affiner ses compétences. L'ambiance y est également très particulière : une véritable <span className="text-brand-darkblue font-semibold">culture d'équipe</span>, où la cohésion, l'équité et le bien-être des collaborateurs ne sont pas de simples principes, mais des réalités vécues au quotidien.
              </p>
              <div className="border-t border-gray-100 pt-5 mt-auto">
                <p className="text-brand-darkblue font-black text-sm uppercase tracking-tight">Julie</p>
                <p className="text-gray-400 text-xs font-medium">Professeure de français et philosophie</p>
              </div>
            </motion.div>

            {/* Sara */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(17,29,74,0.04)] p-8 flex flex-col"
            >
              <div className="absolute top-0 left-8 w-8 h-8 -translate-y-1/2">
                <svg viewBox="0 0 32 32" fill="none"><path d="M4 20c0-5.5 3-10 8-12l1.5 2.5C9.5 12.5 8.5 15 8.5 18H12c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-6zm16 0c0-5.5 3-10 8-12l1.5 2.5c-4 2-5 4.5-5 7.5h3.5c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-6z" fill="#EE4B62" opacity="0.2"/></svg>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                Dès mon premier entretien de recrutement, j'ai compris que STUDASSIST accordait une attention particulière à l'<span className="text-brand-darkblue font-semibold">évolution des jeunes talents</span>, en leur confiant de véritables responsabilités et en leur offrant de belles perspectives d'apprentissage. J'ai évolué au sein d'une équipe <span className="text-brand-darkblue font-semibold">jeune et engagée</span>, où les fondateurs étaient à l'écoute des collaborateurs et encourageaient l'initiative.
              </p>
              <div className="border-t border-gray-100 pt-5 mt-auto">
                <p className="text-brand-darkblue font-black text-sm uppercase tracking-tight">Sara</p>
                <p className="text-gray-400 text-xs font-medium">Conseillère en orientation</p>
              </div>
            </motion.div>

            {/* Reda */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(17,29,74,0.04)] p-8 flex flex-col"
            >
              <div className="absolute top-0 left-8 w-8 h-8 -translate-y-1/2">
                <svg viewBox="0 0 32 32" fill="none"><path d="M4 20c0-5.5 3-10 8-12l1.5 2.5C9.5 12.5 8.5 15 8.5 18H12c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-6zm16 0c0-5.5 3-10 8-12l1.5 2.5c-4 2-5 4.5-5 7.5h3.5c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-6z" fill="#F3B421" opacity="0.2"/></svg>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                J'ai particulièrement apprécié l'énergie et le <span className="text-brand-darkblue font-semibold">professionnalisme de l'équipe</span>. Leur disponibilité et leur engagement m'ont permis d'évoluer dans un cadre d'apprentissage constant. Chez STUDASSIST, la <span className="text-brand-darkblue font-semibold">rigueur, la qualité du travail et l'exigence</span> sont des valeurs partagées au quotidien. Je suis très fier d'avoir contribué au développement d'une structure aussi innovante.
              </p>
              <div className="border-t border-gray-100 pt-5 mt-auto">
                <p className="text-brand-darkblue font-black text-sm uppercase tracking-tight">Réda</p>
                <p className="text-gray-400 text-xs font-medium">Stagiaire en développement informatique</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REJOIN SECTION */}
      <section className="py-16 lg:py-24 relative z-20 bg-white">
        <div className="w-[95%] lg:w-[90%] max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-darkblue rounded-[3rem] p-10 lg:p-16 flex flex-col items-center text-center text-white relative overflow-hidden shadow-[0_40px_100px_rgba(17,29,74,0.25)] border border-white/10"
          >
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg width="100%" height="100%">
                <pattern id="pattern-final-quisommesnous" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#pattern-final-quisommesnous)" />
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6 uppercase tracking-tighter leading-tight">
                Envie de rejoindre <br /> l'aventure ?
              </h2>
              <p className="text-white/80 font-bold text-lg lg:text-xl mb-4 max-w-2xl mx-auto">
                Construire, transmettre et accompagner avec exigence
              </p>
              <p className="text-white/60 text-sm lg:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
                Chez STUDASSIST, nous réunissons des profils engagés, passionnés par l'éducation et animés par une ambition commune : accompagner chaque élève vers l'excellence, avec rigueur, méthode et exigence.
              </p>
              <Link 
                to="/nous-rejoindre" 
                className="bg-brand-red text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:scale-105 transition-all shadow-2xl shadow-brand-red/30 group inline-flex items-center space-x-4"
              >
                <span>Postuler maintenant</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuiSommesNous;
