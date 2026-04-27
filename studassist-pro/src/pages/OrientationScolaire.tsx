import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Compass,
  GraduationCap,
  Globe,
  Sparkles,
  Target,
  Users,
  Trophy,
  Rocket,
  Star,
  Quote,
  FileText,
  CheckCircle2,
  ShieldCheck,
} from "@/src/components/ui/icons";
import { cn } from "@/src/lib/utils";
import Logo from "../components/Logo";
import ExpertisePoles from "../components/ExpertisePoles";
import TestimonialsSection from "../components/TestimonialsSection";
import ImageFloaters from "../components/ImageFloaters";
import FAQ from "../components/FAQ";
import { buildFaq } from "../data/faq";

const stats = [
  { value: "+500", label: "Élèves orientés chaque année", icon: <Users size={24} className="text-brand-darkblue" />, color: "text-brand-darkblue" },
  { value: "+25", label: "Destinations à l'international", icon: <Globe size={24} className="text-brand-teal" />, color: "text-brand-teal" },
  { value: "97%", label: "De familles satisfaites", icon: <Star size={24} className="text-brand-red" />, color: "text-brand-red" },
  { value: "100%", label: "D'admissions post-bac", icon: <Trophy size={24} className="text-brand-darkblue" />, color: "text-brand-darkblue" },
];

const pillars = [
  {
    icon: <Compass size={24} />,
    title: "Profiling personnalisé",
    desc: "Un diagnostic complet du profil, des aspirations et des contraintes de l'élève et de sa famille.",
  },
  {
    icon: <Target size={24} />,
    title: "Stratégie sur mesure",
    desc: "Choix des spécialités, cap sur les filières, short-list d'écoles — chaque décision est argumentée.",
  },
  {
    icon: <FileText size={24} />,
    title: "Candidatures optimisées",
    desc: "Dossiers Parcoursup, lettres de motivation, CV, projet professionnel — tout est travaillé avec nous.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Installation facilitée",
    desc: "Visas, logement, compte bancaire et assurance : nous gérons toutes les démarches administratives.",
  },
];

const testimonials = [
  {
    quote:
      "Un accompagnement exceptionnel, stratégique et humain. STUDASSIST m'a permis de construire un projet solide et d'intégrer l'école de mes rêves.",
    name: "Mehdi L.",
    role: "Admis à Centrale Lille",
  },
  {
    quote:
      "Le diagnostic initial était d'une précision rare. Je suis passée d'élève hésitante à étudiante avec une vision claire sur mon avenir.",
    name: "Inès B.",
    role: "Admise à Sciences Po",
  },
  {
    quote:
      "Les conseillers sont bienveillants, exigeants et toujours disponibles. Parcoursup est devenu une formalité grâce à leur méthode.",
    name: "Zakaria A.",
    role: "Admis à l'ESSEC",
  },
];

const blog = [
  {
    title: "Orientation en Seconde : comment anticiper le choix des spécialités ?",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    category: "Lycée",
  },
  {
    title: "Parcoursup : les 5 erreurs à éviter dans vos candidatures",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    category: "Post-bac",
  },
  {
    title: "Études à l'étranger : les destinations qui montent en 2025",
    image: "https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?auto=format&fit=crop&w=600&q=80",
    category: "International",
  },
  {
    title: "Sciences Po : décrypter l'épreuve écrite de la procédure d'admission",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80",
    category: "Concours",
  },
];

export default function OrientationScolaire() {
  return (
    <div className="bg-white">
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-black text-brand-darkblue mb-4 uppercase tracking-tighter"
            >
              Orientation scolaire &amp; <span className="sa-wavy sa-wavy-pink text-brand-red">candidatures</span>
            </motion.h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <ImageFloaters />
              <div className="relative z-20 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 transform -rotate-2">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80"
                  alt="Orientation STUDASSIST"
                  className="rounded-[2rem] w-full h-[420px] object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black text-brand-darkblue leading-tight uppercase">
                Un projet d'études <br />
                <span className="text-brand-teal">clair, cohérent</span> et ambitieux.
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed font-medium text-sm lg:text-base">
                <p>
                  Chez <span className="text-brand-darkblue font-bold">STUDASSIST</span>, nous
                  accompagnons élèves et étudiants à chaque étape de leur parcours académique —
                  du lycée jusqu'au Master — afin de les aider à faire des{" "}
                  <span className="text-brand-teal font-bold italic">choix éclairés et stratégiques</span>.
                </p>
                <p>
                  Grâce à une analyse approfondie du profil, une{" "}
                  <span className="text-brand-darkblue font-bold underline">vision long terme</span> et
                  un accompagnement personnalisé, nous transformons l'orientation en véritable
                  levier de réussite et d'épanouissement académique.
                </p>
                <p>
                  Notre équipe intervient aussi bien sur{" "}
                  <span className="text-brand-teal font-bold italic">l'accompagnement Parcoursup</span>,
                  les candidatures aux grandes écoles internationales, les concours post-bac et
                  les admissions en Master.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/contact"
                  className="bg-brand-teal text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-darkblue transition-all shadow-xl shadow-brand-teal/20 inline-flex items-center gap-3"
                >
                  <span>Réserver ma séance découverte</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
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
                    <div
                      className={cn(
                        "text-3xl lg:text-4xl font-black tracking-tight leading-none mb-1",
                        item.color
                      )}
                    >
                      {item.value}
                    </div>
                    <div className="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-tight max-w-[140px] group-hover:text-gray-600 transition-colors">
                      {item.label}
                    </div>
                  </div>
                </div>
                {idx < stats.length - 1 && (
                  <div className="hidden xl:block text-gray-200 text-3xl font-light ml-auto self-center">
                    +
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPERTISE POLES (niveaux) ============ */}
      <ExpertisePoles />

      {/* ============ CTA BANNER — Signature Red Executive ============ */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-red rounded-[3.5rem] p-10 lg:p-20 flex flex-col lg:flex-row items-center justify-between text-white relative overflow-hidden shadow-[0_40px_100px_rgba(239,71,111,0.25)] border border-white/10"
          >
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
              <svg width="100%" height="100%">
                <pattern id="cta-grid-orient" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#cta-grid-orient)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
              <div className="flex items-center space-x-3 mb-8">
                <span className="w-12 h-[2px] bg-brand-darkblue" />
                <span className="text-brand-darkblue font-black text-[11px] tracking-[0.4em] uppercase">
                  Séance découverte
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-black mb-8 uppercase tracking-tighter leading-[0.95]">
                Prêt à décoller <br className="hidden lg:block" />
                <span className="text-brand-darkblue italic">pour la réussite</span> ?
              </h2>

              <p className="text-white/90 font-medium text-lg leading-relaxed max-w-md">
                Un diagnostic complet de 30 minutes avec un conseiller en orientation pour
                analyser le profil et tracer les prochains pas.
              </p>
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
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                      Ligne Directe
                    </p>
                    <a
                      href="tel:+212669495996"
                      className="text-white font-bold tracking-tight hover:text-brand-darkblue transition-colors"
                    >
                      +212 6 69 49 59 96
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ POURQUOI CHOISIR STUDASSIST ============ */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-6">
              <span className="w-8 h-px bg-brand-teal"></span>
              <span>Pourquoi choisir</span>
              <span className="w-8 h-px bg-brand-teal"></span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-darkblue mb-8 uppercase tracking-tighter">
              Pourquoi choisir <span className="text-brand-teal">STUDASSIST</span> ?
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Une méthode éprouvée, des conseillers formés en interne et une vision long terme qui
              place l'élève — et non la contrainte du calendrier — au centre du parcours.
            </p>
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
                  <div className="absolute -right-4 -bottom-4 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-12 transform scale-150 pointer-events-none">
                    {pillar.icon}
                  </div>

                  <div
                    className={cn(
                      "w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-10 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 shadow-lg",
                      idx % 3 === 0
                        ? "bg-brand-teal/10 text-brand-teal shadow-brand-teal/10"
                        : idx % 3 === 1
                        ? "bg-brand-red/10 text-brand-red shadow-brand-red/10"
                        : "bg-brand-darkblue/10 text-brand-darkblue shadow-brand-darkblue/10"
                    )}
                  >
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
      </section>

      {/* ============ TESTIMONIALS (shared component) ============ */}
      <TestimonialsSection />

      {/* ============ FAQ ============ */}
      <FAQ
        title="Questions fréquentes"
        subtitle="Toutes les réponses aux questions les plus fréquentes sur notre accompagnement en orientation."
        items={buildFaq("orientation", "method")}
      />

      {/* ============ BLOG / EXPERT ADVICE ============ */}
      <section className="py-32 bg-[#f8fbfc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Blog STUDASSIST
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter">
              Conseils de nos <span className="text-brand-teal">experts</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blog.map((post, i) => (
              <motion.a
                key={i}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_20px_50px_rgba(17,29,74,0.04)] hover:shadow-[0_30px_70px_rgba(17,29,74,0.08)] transition-all duration-500 group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-brand-teal text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-black text-brand-darkblue text-sm uppercase tracking-tight leading-snug mb-4 group-hover:text-brand-teal transition-colors">
                    {post.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-brand-teal font-black text-[10px] tracking-widest uppercase">
                    Lire l'article <ArrowRight size={12} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL REJOIN SECTION ============ */}
      <section className="py-32 bg-brand-darkblue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="pattern-orient-final" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-orient-final)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8">
              <Logo variant="light" height={48} />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              Construisons ensemble <br />
              <span className="text-brand-teal">votre avenir</span>.
            </h2>
            <p className="text-white/70 text-lg font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              Un premier rendez-vous gratuit pour évaluer le profil et poser les bases d'une
              stratégie adaptée.
            </p>
            <Link
              to="/contact"
              className="bg-brand-red text-white px-16 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl shadow-brand-red/30 group inline-flex items-center space-x-4"
            >
              <span>Prendre rendez-vous</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
