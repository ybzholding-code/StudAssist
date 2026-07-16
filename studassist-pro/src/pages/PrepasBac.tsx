import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "@/src/components/ui/icons";

import FAQ from "../components/FAQ";
import Logo from "../components/Logo";
import MediaFrameFloaters from "../components/MediaFrameFloaters";
import TestimonialsSection from "../components/TestimonialsSection";
import { usePageMeta } from "../hooks/usePageMeta";

const faqItems = [
  {
    q: "Pourquoi suivre une préparation spécifique au Baccalauréat ?",
    a: "Les épreuves du Baccalauréat reposent sur des méthodes, des attentes et des critères d'évaluation précis. Une préparation adaptée permet de renforcer les connaissances, maîtriser les méthodologies attendues et gagner en confiance à l'approche des examens.",
  },
  {
    q: "À partir de quand est-il conseillé de commencer la préparation ?",
    a: "L'idéal est de commencer plusieurs mois avant les épreuves afin de disposer du temps nécessaire pour consolider les acquis, travailler la méthodologie et s'entraîner régulièrement. Toutefois, un accompagnement ciblé peut également être mis en place plus tard dans l'année selon les besoins de l'élève.",
  },
  {
    q: "Préparez-vous toutes les épreuves du Baccalauréat ?",
    a: "Oui. STUDASSIST accompagne les élèves dans la préparation du Bac de Français, des épreuves de spécialités, de la Philosophie et du Grand Oral, avec une approche adaptée aux spécificités de chaque examen.",
  },
  {
    q: "Mon enfant a déjà de bons résultats. Cette préparation peut-elle lui être utile ?",
    a: "Absolument. Nos accompagnements ne s'adressent pas uniquement aux élèves en difficulté. Ils permettent également aux élèves performants de renforcer leur méthodologie, viser d'excellents résultats et optimiser leur dossier pour les candidatures post-bac.",
  },
  {
    q: "Comment se déroulent les séances ?",
    a: "Les séances sont proposées en format individuel ou en petits groupes de 2 à 4 élèves maximum selon les préparations. Ce format favorise les échanges, le suivi personnalisé et une progression adaptée à chaque profil.",
  },
  {
    q: "Travaillez-vous uniquement les connaissances ou également la méthodologie ?",
    a: "La méthodologie constitue un pilier central de notre accompagnement. Nous aidons les élèves à maîtriser les méthodes de la dissertation, du commentaire de texte, de l'explication de texte, de l'argumentation ou encore de la prise de parole à l'oral.",
  },
  {
    q: "Préparez-vous également le Grand Oral ?",
    a: "Oui. Nous accompagnons les élèves dans le choix de leurs questions, la construction de leur présentation, la gestion du stress, la prise de parole et la préparation des échanges avec le jury.",
  },
  {
    q: "Quel lien existe-t-il entre la préparation au Bac et l'orientation post-bac ?",
    a: "Les résultats obtenus au Baccalauréat, les spécialités choisies ainsi que les compétences développées dans les différentes épreuves jouent un rôle important dans les candidatures aux études supérieures. Chez STUDASSIST, nous veillons à inscrire chaque préparation dans une logique globale de réussite académique et d'orientation.",
  },
  {
    q: "Les enseignants sont-ils spécialisés dans les épreuves préparées ?",
    a: "Oui. Les élèves sont accompagnés par des enseignants experts de leur discipline, maîtrisant les programmes, les attentes des examens et les critères d'évaluation du Baccalauréat.",
  },
  {
    q: "Pourquoi choisir STUDASSIST pour préparer le Baccalauréat ?",
    a: "STUDASSIST propose une approche combinant expertise académique, méthodologie, suivi personnalisé et accompagnement à l'orientation. Notre objectif est de permettre à chaque élève de maximiser ses résultats tout en développant des compétences utiles pour les études supérieures et son avenir professionnel.",
  },
];

const programmes = [
  {
    icon: "https://img.icons8.com/3d-fluency/94/open-book.png",
    title: "Bac de Français",
    description: "Maîtriser la méthodologie de l'écrit et de l'oral pour réussir cette première grande échéance du lycée.",
    link: "/prepas-bac/francais",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/bar-chart.png",
    title: "Bac des Spécialités",
    description: "Préparer efficacement les matières à fort coefficient qui jouent un rôle déterminant dans le résultat final.",
    link: "/prepas-bac/specialites",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/brain.png",
    title: "Bac de Philosophie",
    description: "Structurer sa réflexion, construire une argumentation solide et maîtriser les attentes de l'épreuve.",
    link: "/prepas-bac/philo",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/microphone.png",
    title: "Grand Oral",
    description: "Développer son aisance à l'oral, valoriser son projet et apprendre à convaincre face au jury.",
    link: "/prepas-bac/grand-oral",
  },
];

const objectifs = [
  { icon: "https://img.icons8.com/3d-fluency/94/document.png", title: "Maîtriser les méthodologies des épreuves", description: "Dissertation, commentaire, oral, résolution d'exercices ou argumentation : chaque épreuve possède ses propres codes." },
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "Consolider ses connaissances", description: "Renforcer les notions essentielles et combler les éventuelles lacunes avant les échéances." },
  { icon: "https://img.icons8.com/3d-fluency/94/calendar.png", title: "Gérer efficacement son temps et ses révisions", description: "Apprendre à s'organiser et à prioriser son travail pour gagner en efficacité." },
  { icon: "https://img.icons8.com/3d-fluency/94/star.png", title: "Gagner en confiance", description: "Aborder les épreuves avec davantage de sérénité grâce à une préparation progressive et structurée." },
  { icon: "https://img.icons8.com/3d-fluency/94/microphone.png", title: "Développer son aisance à l'oral", description: "Acquérir les réflexes nécessaires pour convaincre, argumenter et prendre la parole avec assurance." },
  { icon: "https://img.icons8.com/3d-fluency/94/rocket.png", title: "Préparer la transition vers le supérieur", description: "Développer des compétences qui seront utiles bien au-delà du Baccalauréat." },
];

const differences = [
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "Des enseignants experts des épreuves du Bac", description: "Une parfaite maîtrise des programmes, des attentes des correcteurs et des critères d'évaluation." },
  { icon: "https://img.icons8.com/3d-fluency/94/goal.png", title: "Un accompagnement personnalisé", description: "Chaque élève bénéficie d'un suivi adapté à son profil, ses objectifs et ses échéances." },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Une méthodologie éprouvée", description: "Des méthodes concrètes pour progresser durablement et gagner en efficacité." },
  { icon: "https://img.icons8.com/3d-fluency/94/globe.png", title: "Une préparation alignée avec l'orientation post-bac", description: "Nos accompagnements tiennent compte du projet d'études et des ambitions post-bac de l'élève." },
  { icon: "https://img.icons8.com/3d-fluency/94/conference-call.png", title: "Des formats flexibles", description: "Cours individuels, petits groupes, présentiel ou visioconférence selon les besoins." },
  { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", title: "Plus de 7 ans d'expérience", description: "Une expertise reconnue dans l'accompagnement des lycéens vers la réussite académique." },
];

const services = [
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "Soutien Scolaire", link: "/soutien-scolaire" },
  { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", title: "Prépas Concours", link: "/prepas-concours" },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Orientation", link: "/orientation-scolaire" },
  { icon: "https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=1BB79D", title: "Certifications de langues", link: "/certifications" },
  { icon: "https://img.icons8.com/3d-fluency/94/home.png", title: "Admin & Logement", link: "/admin-logement" },
];

export default function PrepasBac() {
  usePageMeta({
    title: "Préparation au Bac — Français, Philo, Spécialités, Grand Oral",
    description: "Préparez le Bac avec STUDASSIST : cours de français, philosophie, spécialités et Grand Oral. Accompagnement personnalisé pour lycéens au Maroc et à l'international.",
    canonical: "/prepas-bac",
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
              <span>Prépas Bac</span>
              <span className="w-8 h-px bg-brand-teal" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue mb-4 uppercase tracking-tighter leading-[1.1] lg:leading-tight"
            >
              <span className="sa-wavy sa-wavy-teal">
                Préparation au Baccalauréat : réussir ses épreuves et{" "}
                <span className="sa-gradient-text">préparer son avenir</span>
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
                      src="/prepas-bac-new.png"
                      alt="Prépas Bac"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 33%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Le Baccalauréat constitue une étape clé du parcours scolaire. Au-delà des résultats obtenus, il influence directement les opportunités d'orientation, les admissions dans l'enseignement supérieur et l'accès aux formations les plus sélectives.
              </p>
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Chez STUDASSIST, nous accompagnons les élèves dans une préparation méthodique et exigeante des différentes épreuves du Bac, tout en intégrant leur projet d'études et leurs objectifs post-bac.
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
                  <span>Réserver un rendez-vous de 1er contact</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BLOC 0 - LES ENJEUX ============ */}
      <section className="py-16 lg:py-32 bg-[#f8fbfc] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Les enjeux
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              Les enjeux de la préparation du Baccalauréat
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Une bonne préparation ne vise pas uniquement la réussite de l'examen. Elle permet également de valoriser le dossier académique, de sécuriser l'orientation et d'aborder les études supérieures avec davantage de confiance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "https://img.icons8.com/3d-fluency/94/diploma.png", title: "Réussir les épreuves du Bac", description: "Acquérir les méthodes et les connaissances nécessaires pour performer le jour de l'épreuve." },
              { icon: "https://img.icons8.com/3d-fluency/94/bar-chart.png", title: "Obtenir les meilleurs résultats possibles", description: "Chaque point compte pour l'obtention d'une mention et la valorisation du dossier scolaire." },
              { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Préparer son orientation post-bac", description: "Les résultats du Bac s'inscrivent dans un projet d'études plus global et influencent certaines admissions." },
              { icon: "https://img.icons8.com/3d-fluency/94/rocket.png", title: "Développer des compétences durables", description: "Méthodologie, expression écrite, argumentation et prise de parole sont autant de compétences utiles pour les études supérieures." },
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
              Nos préparations aux épreuves du Baccalauréat
            </h2>
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
              Objectifs & Bénéfices
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              Ce que nos élèves développent à travers nos préparations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {objectifs.map((obj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="bg-gray-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <img src={obj.icon} alt={obj.title} className="w-10 h-10 drop-shadow-sm mx-auto mb-4" />
                <h3 className="text-brand-darkblue font-black text-sm uppercase tracking-tight mb-3">
                  {obj.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">
                  {obj.description}
                </p>
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
            <pattern id="pattern-cta-bac" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-cta-bac)" />
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
            Vous souhaitez mettre en place un accompagnement académique personnalisé ? Réservez un premier rendez-vous d'informations pour évaluer votre profil et poser les bases d'une stratégie adaptée.
          </p>
          <Link
            to="/contact"
            className="bg-brand-red text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:scale-105 transition-all shadow-2xl shadow-brand-red/30 group inline-flex items-center space-x-4"
          >
            <span>Prendre rendez-vous</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* ============ GOOGLE COMMENTS / TESTIMONIALS ============ */}
      <TestimonialsSection />

      {/* ============ FAQ ============ */}
      <FAQ
        title="FAQ – Préparation au Baccalauréat"
        subtitle="Les réponses aux questions les plus fréquentes."
        items={faqItems}
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
