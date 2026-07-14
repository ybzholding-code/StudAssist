import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "@/src/components/ui/icons";
import { waLink } from "../lib/utils";
import FAQ from "../components/FAQ";
import Logo from "../components/Logo";
import MediaFrameFloaters from "../components/MediaFrameFloaters";
import TestimonialsSection from "../components/TestimonialsSection";
import { buildFaq } from "../data/faq";
import { usePageMeta } from "../hooks/usePageMeta";

const programmes = [
  {
    icon: "https://img.icons8.com/3d-fluency/94/star.png",
    title: "Primaire",
    description: "Consolider les apprentissages fondamentaux et développer de bonnes habitudes de travail.",
    link: "/soutien/primaire",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/open-book.png",
    title: "Collège",
    description: "Renforcer les connaissances, acquérir une méthodologie efficace et préparer progressivement les échéances du lycée.",
    link: "/soutien/college",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/trophy.png",
    title: "Préparation du Brevet",
    description: "Maîtriser les attendus de l'examen, s'entraîner sur les épreuves et aborder le Brevet avec confiance et méthode.",
    link: "/soutien/brevet",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/diploma.png",
    title: "Lycée",
    description: "Approfondir les matières clés, préparer le Baccalauréat et accompagner l'orientation post-bac.",
    link: "/soutien/lycee",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/calendar.png",
    title: "Stages de vacances",
    description: "Profiter des vacances pour consolider les acquis, combler les lacunes ou préparer la rentrée dans les meilleures conditions.",
    link: "/soutien/stages",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/rocket.png",
    title: "Enseignement supérieur",
    description: "Faciliter la transition vers les études supérieures et réussir la première année post-bac.",
    link: "/soutien/superieur",
  },
];

const objectifs = [
  { icon: "https://img.icons8.com/3d-fluency/94/search.png", title: "La méthodologie" },
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "L'organisation du travail" },
  { icon: "https://img.icons8.com/3d-fluency/94/calendar.png", title: "La gestion du temps" },
  { icon: "https://img.icons8.com/3d-fluency/94/goal.png", title: "Les techniques de révision" },
  { icon: "https://img.icons8.com/3d-fluency/94/star.png", title: "La confiance en soi" },
  { icon: "https://img.icons8.com/3d-fluency/94/rocket.png", title: "L'autonomie" },
];

const differences = [
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "Des enseignants qualifiés et expérimentés", description: "Une expertise pédagogique adaptée à chaque niveau scolaire." },
  { icon: "https://img.icons8.com/3d-fluency/94/goal.png", title: "Un accompagnement personnalisé", description: "Des objectifs et un suivi adaptés à chaque élève." },
  { icon: "https://img.icons8.com/3d-fluency/94/conference-call.png", title: "Des formats flexibles", description: "Cours individuels, petits groupes, présentiel ou visioconférence." },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Une approche centrée sur la méthode", description: "Nous travaillons autant les connaissances que les méthodes d'apprentissage." },
  { icon: "https://img.icons8.com/3d-fluency/94/globe.png", title: "Une vision globale du parcours scolaire", description: "Le soutien scolaire s'intègre dans une réflexion plus large sur la réussite et l'orientation." },
  { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", title: "Plus de 7 ans d'expérience", description: "Une expertise reconnue dans l'accompagnement des élèves et étudiants." },
];

const services = [
  { icon: "https://img.icons8.com/3d-fluency/94/goal.png", title: "Prépas Bac", link: "/prepas-bac" },
  { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", title: "Prépas Concours", link: "/prepas-concours" },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Orientation scolaire", link: "/orientation-scolaire" },
  { icon: "https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=1BB79D", title: "Certifications de langues", link: "/certifications" },
  { icon: "https://img.icons8.com/3d-fluency/94/home.png", title: "Admin & Logement", link: "/admin-logement" },
];

export default function SoutienScolaire() {
  usePageMeta({
    title: "Soutien Scolaire à Casablanca — Primaire, Collège, Lycée",
    description: "Soutien scolaire personnalisé à Casablanca pour tous niveaux : primaire, collège, lycée, supérieur. Cours particuliers, stages vacances et préparation aux examens avec STUDASSIST.",
    canonical: "/soutien-scolaire",
  });
  return (
    <div className="bg-white">
      {/* ============ HERO SECTION ============ */}
      <section className="relative pt-12 lg:pt-20 pb-16 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-brand-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 text-brand-teal font-black text-[10px] tracking-[0.3em] uppercase mb-6"
            >
              <span className="w-8 h-px bg-brand-teal" />
              <span>Soutien scolaire</span>
              <span className="w-8 h-px bg-brand-teal" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue mb-4 uppercase tracking-tighter leading-[1.1] lg:leading-tight"
            >
              <span className="sa-wavy sa-wavy-teal">
                Soutien scolaire personnalisé{" "}
                <span className="sa-gradient-text">du primaire au supérieur</span>
              </span>
            </motion.h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1 flex justify-center w-full">
              <div className="relative max-w-[540px] w-full">
                <MediaFrameFloaters />
                <div className="relative z-20 bg-[#fcfcfc] p-4 rounded-[2.5rem] shadow-2xl border border-gray-100 transform -rotate-2">
                  <div className="rounded-[2rem] w-full h-auto aspect-square overflow-hidden bg-white">
                    <img
                      src="/soutien-scolaire-main.png"
                      alt="Soutien scolaire"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 65%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Accompagner chaque élève dans sa progression académique, développer sa méthode de travail et lui permettre d'atteindre ses objectifs scolaires avec confiance.
              </p>
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Chez STUDASSIST, le soutien scolaire s'adresse aussi bien aux élèves rencontrant des difficultés qu'à ceux souhaitant viser l'excellence. Nous proposons un accompagnement scolaire sur mesure adapté à chaque niveau, chaque profil et chaque objectif.
              </p>
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Du primaire aux études supérieures, nos enseignants accompagnent les élèves dans leurs apprentissages, leur méthodologie et leur progression académique grâce à un suivi personnalisé et exigeant.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">2 à 4</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">Élèves par groupe</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">Méthodologie</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">Différenciée</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">+3,7</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">Points gagnés en moyenne</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="bg-brand-teal text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-darkblue transition-all shadow-xl shadow-brand-teal/20 inline-flex items-center justify-center gap-3"
                >
                  <span>Réserver un cours découverte</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BLOC 0 - POURQUOI METTRE EN PLACE UN SOUTIEN SCOLAIRE ============ */}
      <section className="py-16 lg:py-32 bg-[#f8fbfc] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Les enjeux
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              Pourquoi mettre en place un soutien scolaire ?
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Chaque élève peut, à un moment de son parcours, avoir besoin d'un accompagnement complémentaire pour progresser, gagner en confiance ou préparer une échéance importante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "https://img.icons8.com/3d-fluency/94/bar-chart.png", title: "Consolider les acquis", description: "Renforcer les fondamentaux et combler les éventuelles lacunes accumulées." },
              { icon: "https://img.icons8.com/3d-fluency/94/goal.png", title: "Atteindre ses objectifs", description: "Améliorer ses résultats scolaires et viser les meilleures opportunités académiques." },
              { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Acquérir une méthode de travail", description: "Développer des habitudes de travail efficaces et gagner en autonomie." },
              { icon: "https://img.icons8.com/3d-fluency/94/rocket.png", title: "Prendre confiance en soi", description: "Retrouver de la motivation et aborder les apprentissages avec davantage de sérénité." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="relative group"
              >
                <div className="h-full bg-white border border-gray-100 p-6 lg:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(17,29,74,0.04)] hover:shadow-[0_40px_80px_rgba(17,29,74,0.1)] hover:border-brand-teal/20 transition-all duration-500 overflow-hidden text-center">
                  <img src={item.icon} alt={item.title} className="w-12 h-12 drop-shadow-sm mx-auto mb-6" />
                  <h3 className="text-brand-darkblue font-black text-lg uppercase tracking-tight mb-4 group-hover:text-brand-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOC 1 - NOS PROGRAMMES ============ */}
      <section className="py-16 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Nos programmes
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              Un accompagnement adapté à chaque étape de la scolarité
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Les besoins d'un élève évoluent tout au long de son parcours scolaire. C'est pourquoi STUDASSIST propose des accompagnements spécifiques pour chaque niveau.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {programmes.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <img src={prog.icon} alt={prog.title} className="w-7 h-7 drop-shadow-sm" />
                      <h3 className="text-brand-darkblue font-black text-base uppercase tracking-tight group-hover:text-brand-teal transition-colors">
                        {prog.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed pl-10">
                      {prog.description}
                    </p>
                  </div>
                  <Link
                    to={prog.link}
                    className="text-brand-teal font-bold text-sm hover:text-brand-darkblue transition-colors shrink-0 mt-2"
                  >
                    Découvrir
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOC 2 - OBJECTIFS & BÉNÉFICES ============ */}
      <section className="py-16 lg:py-32 bg-[#f8fbfc] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Objectifs & bénéfices
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              Ce que nos élèves développent grâce à notre soutien scolaire
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Chez STUDASSIST, nous considérons que la réussite ne repose pas uniquement sur les connaissances. Chaque élève bénéficie d'un accompagnement personnalisé adapté à son niveau, à ses objectifs et à son rythme d'apprentissage pour améliorer :
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {objectifs.map((obj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-6 py-4 font-bold text-brand-darkblue text-sm hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300"
              >
                <img src={obj.icon} alt={obj.title} className="w-6 h-6 drop-shadow-sm" />
                <span>{obj.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOC 3 - CE QUI FAIT NOTRE DIFFÉRENCE ============ */}
      <section className="py-16 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Ce qui fait notre différence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              Pourquoi choisir <span className="text-brand-teal">STUDASSIST</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {differences.map((diff, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <img src={diff.icon} alt={diff.title} className="w-10 h-10 drop-shadow-sm mx-auto mb-4" />
                <h3 className="text-brand-darkblue font-black text-sm uppercase tracking-tight mb-3">
                  {diff.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CALL TO ACTION ============ */}
      <section className="bg-brand-darkblue py-14 lg:py-20 relative z-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="pattern-cta-soutien" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-cta-soutien)" />
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center text-white"
        >
          <div className="flex justify-center mb-6">
            <Logo variant="light" height={40} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
            Construisons ensemble <br />
            <span className="text-brand-teal">votre avenir</span>.
          </h2>
          <p className="text-white/80 text-base lg:text-lg font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Vous souhaitez mettre en place un accompagnement scolaire personnalisé ? Réservez un premier rendez-vous d'informations pour évaluer votre profil et poser les bases d'une stratégie adaptée.
          </p>
          <a
            href={waLink("Bonjour STUDASSIST, je souhaite obtenir des informations sur le soutien scolaire personnalisé.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:scale-105 transition-all shadow-2xl shadow-brand-red/30 group inline-flex items-center space-x-4"
          >
            <span>Prendre rendez-vous</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* ============ GOOGLE COMMENTS / TESTIMONIALS ============ */}
      <TestimonialsSection />

      {/* ============ FAQ ============ */}
      <FAQ
        title="Soutien scolaire : vos questions fréquentes"
        subtitle="Les réponses aux questions les plus fréquentes."
        items={buildFaq("soutien", "method", "lycee")}
      />

      {/* ============ NOS SERVICES ============ */}
      <section className="py-16 lg:py-24 bg-[#f8fbfc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Nos services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              Découvrez également
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
              >
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-6 py-4 font-bold text-brand-darkblue text-sm hover:border-brand-teal/30 hover:shadow-lg transition-all duration-300"
                >
                  <img src={service.icon} alt={service.title} className="w-6 h-6 drop-shadow-sm" />
                  <span>{service.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
