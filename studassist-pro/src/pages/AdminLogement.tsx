import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "@/src/components/ui/icons";
import { waLink } from "../lib/utils";
import FAQ from "../components/FAQ";
import Logo from "../components/Logo";
import MediaFrameFloaters from "../components/MediaFrameFloaters";
import TestimonialsSection from "../components/TestimonialsSection";
import { usePageMeta } from "../hooks/usePageMeta";

const faqItems = [
  {
    q: "À quel moment faut-il commencer les démarches administratives après une admission ?",
    a: "Il est recommandé d'entamer les démarches dès que l'admission dans l'établissement est confirmée. Certaines procédures, comme les demandes de visa, les équivalences de diplômes ou certaines formalités administratives locales, peuvent nécessiter plusieurs semaines voire plusieurs mois de traitement.",
  },
  {
    q: "Dans quels pays STUDASSIST accompagne-t-il les étudiants ?",
    a: "Nous accompagnons les étudiants dans de nombreuses destinations d'études, notamment la France, l'Espagne, la Belgique, le Royaume-Uni, le Canada, la Suisse et d'autres pays accueillant des étudiants internationaux. L'accompagnement est adapté aux exigences spécifiques de chaque destination.",
  },
  {
    q: "Quelles démarches administratives peuvent être prises en charge ?",
    a: "Selon les besoins de l'étudiant, nous pouvons accompagner les démarches liées au visa étudiant, au titre de séjour, à l'assurance santé, à l'ouverture d'un compte bancaire, aux équivalences de diplômes, aux traductions officielles, aux apostilles et aux différentes formalités nécessaires à l'installation à l'étranger.",
  },
  {
    q: "Pourquoi se faire accompagner dans les démarches administratives ?",
    a: "Les procédures administratives varient fortement selon les pays et peuvent être complexes à appréhender lorsqu'elles sont réalisées à distance. Un accompagnement structuré permet de gagner du temps, d'éviter les erreurs et de sécuriser l'ensemble du processus avant le départ.",
  },
  {
    q: "À quel moment faut-il commencer la recherche de logement ?",
    a: "Dans les destinations les plus demandées, il est conseillé d'anticiper la recherche plusieurs mois avant la rentrée universitaire. Certains marchés étudiants sont particulièrement tendus et les logements disponibles se louent rapidement.",
  },
  {
    q: "Quels types de logements pouvez-vous aider à trouver ?",
    a: "Nous accompagnons les étudiants dans la recherche de différents types de logements : résidences étudiantes, studios, appartements individuels ou colocations, en fonction du budget, du mode de vie et des préférences de chaque étudiant.",
  },
  {
    q: "Pourquoi la constitution du dossier locataire est-elle si importante ?",
    a: "Dans de nombreux pays, les propriétaires sélectionnent les candidats sur dossier. Pour les étudiants internationaux, il est souvent nécessaire d'apporter des garanties complémentaires afin de rassurer les bailleurs. Un dossier complet et bien présenté augmente significativement les chances d'obtenir un logement.",
  },
  {
    q: "Comment sécuriser une recherche de logement à distance ?",
    a: "La recherche à distance peut exposer les étudiants à des annonces trompeuses ou à des arnaques. Nous aidons les familles à vérifier les informations, analyser les offres et sélectionner des solutions fiables afin de sécuriser leur choix.",
  },
  {
    q: "Peut-on bénéficier à la fois de l'accompagnement administratif et de l'accompagnement logement ?",
    a: "Oui. De nombreuses familles choisissent de combiner les deux services afin de bénéficier d'un accompagnement complet, depuis l'obtention de l'admission jusqu'à l'installation effective de l'étudiant dans son pays d'études.",
  },
  {
    q: "Pourquoi choisir STUDASSIST pour accompagner son installation à l'étranger ?",
    a: "Depuis plus de 7 ans, STUDASSIST accompagne les élèves et leurs familles dans leurs projets d'études à l'international. Notre approche globale nous permet d'intervenir à chaque étape du parcours : orientation, admissions, certifications de langues, démarches administratives, recherche de logement et installation. L'objectif est de sécuriser l'ensemble du projet et de permettre à l'étudiant d'aborder sa rentrée dans les meilleures conditions.",
  },
];

const programmes = [
  {
    icon: "https://img.icons8.com/3d-fluency/94/document.png",
    title: "Démarches administratives",
    description: "Nous accompagnons les étudiants dans la préparation et la réalisation des formalités nécessaires à leur installation : visa, titre de séjour, sécurité sociale, banque, traductions, légalisations, apostilles et autres démarches liées à l'expatriation étudiante.",
    link: "/admin-logement/demarches",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/home.png",
    title: "Recherche de logement étudiant",
    description: "Nous accompagnons les familles dans la recherche de logements adaptés, la constitution du dossier locataire, les échanges avec les propriétaires et la sécurisation de la location.",
    link: "/admin-logement/logement",
  },
];

const objectifs = [
  { icon: "https://img.icons8.com/3d-fluency/94/calendar.png", title: "Un gain de temps considérable", description: "Nous simplifions des démarches souvent longues et complexes." },
  { icon: "https://img.icons8.com/3d-fluency/94/shield.png", title: "Une sécurisation des procédures", description: "Nous aidons à limiter les erreurs, oublis et retards administratifs." },
  { icon: "https://img.icons8.com/3d-fluency/94/document.png", title: "Une meilleure organisation", description: "Chaque étape est planifiée et suivie de manière méthodique." },
  { icon: "https://img.icons8.com/3d-fluency/94/conference-call.png", title: "Un interlocuteur unique", description: "Les familles bénéficient d'un accompagnement centralisé tout au long du processus." },
  { icon: "https://img.icons8.com/3d-fluency/94/home.png", title: "Une installation facilitée", description: "Logement et démarches sont coordonnés pour assurer une transition fluide." },
  { icon: "https://img.icons8.com/3d-fluency/94/star.png", title: "Plus de sérénité", description: "Les élèves et leurs familles peuvent se concentrer sur l'essentiel : la réussite du projet d'études." },
];

const differences = [
  { icon: "https://img.icons8.com/3d-fluency/94/globe.png", title: "Une expertise pour de nombreuses destinations", description: "France, Espagne, Belgique, Royaume-Uni, Canada, Suisse et autres pays d'accueil." },
  { icon: "https://img.icons8.com/3d-fluency/94/document.png", title: "Un accompagnement de A à Z", description: "Nous intervenons de l'admission jusqu'à l'installation effective de l'étudiant." },
  { icon: "https://img.icons8.com/3d-fluency/94/home.png", title: "Une approche globale", description: "Démarches administratives et logement sont traités de manière coordonnée." },
  { icon: "https://img.icons8.com/3d-fluency/94/conference-call.png", title: "Un accompagnement humain et personnalisé", description: "Chaque projet est adapté au profil, au pays de destination et aux besoins de la famille." },
  { icon: "https://img.icons8.com/3d-fluency/94/shield.png", title: "Une méthodologie rigoureuse", description: "Nous sécurisons chaque étape grâce à une organisation structurée et éprouvée." },
  { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", title: "Plus de 7 ans d'expérience", description: "Une expertise reconnue dans l'accompagnement des projets d'études à l'international." },
];

const services = [
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "Soutien Scolaire", link: "/soutien-scolaire" },
  { icon: "https://img.icons8.com/3d-fluency/94/diploma.png", title: "Prépas-Bac", link: "/prepas-bac" },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Orientation", link: "/orientation-scolaire" },
  { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", title: "Prépas-concours", link: "/prepas-concours" },
  { icon: "https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=1BB79D", title: "Certifications de langues", link: "/certifications" },
];

export default function AdminLogement() {
  usePageMeta({
    title: "Démarches Administratives & Logement Étudiant à l'International",
    description: "STUDASSIST vous accompagne dans toutes vos démarches administratives et la recherche de logement étudiant à l'étranger. Visa, inscription, hébergement — un suivi complet.",
    canonical: "/admin-logement",
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
              <span>Admin & Logement</span>
              <span className="w-8 h-px bg-brand-teal" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue mb-4 uppercase tracking-tighter leading-[1.1] lg:leading-tight"
            >
              <span className="sa-wavy sa-wavy-teal">
                Préparer sereinement son installation{" "}
                <span className="sa-gradient-text">à l'étranger</span>
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
                      src="/hero-admin-logement.png"
                      alt="Admin & Logement"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 33%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Au-delà de l'admission, un projet d'études à l'international implique de nombreuses démarches administratives et logistiques : visa, installation, logement.
              </p>
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Chez STUDASSIST, nous accompagnons les élèves et leurs familles à anticiper chaque étape, afin de structurer les démarches, éviter les erreurs et faciliter l'installation dans les meilleures conditions.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">+7 ans</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">D'expertise</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">100%</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">Des démarches encadrées</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">A à Z</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">De l'admission à l'installation</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={waLink("Bonjour STUDASSIST, je souhaite obtenir des informations sur l'accompagnement administratif et la recherche de logement étudiant.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-teal text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-darkblue transition-all shadow-xl shadow-brand-teal/20 inline-flex items-center justify-center gap-3"
                >
                  <span>Réserver une séance découverte</span>
                  <ArrowRight size={16} />
                </a>
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
              Les enjeux de l'installation étudiante à l'internationale
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Une bonne préparation permet d'éviter les imprévus, de gagner du temps et d'aborder sereinement son arrivée dans le pays d'études afin d'entamer efficacement sa première année post-bac.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "https://img.icons8.com/3d-fluency/94/document.png", title: "Anticiper les démarches administratives", description: "Visa, assurances, équivalences, compte bancaire ou formalités locales nécessitent une préparation rigoureuse." },
              { icon: "https://img.icons8.com/3d-fluency/94/home.png", title: "Trouver un logement adapté", description: "Le choix du logement influence directement les conditions de vie, l'intégration et la réussite de l'étudiant." },
              { icon: "https://img.icons8.com/3d-fluency/94/calendar.png", title: "Respecter les délais", description: "Certaines démarches doivent être engagées plusieurs semaines, voire plusieurs mois avant le départ." },
              { icon: "https://img.icons8.com/3d-fluency/94/globe.png", title: "Réussir sa première année post-bac", description: "Une arrivée bien préparée permet de commencer son parcours universitaire dans les meilleures conditions." },
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

      {/* ============ BLOC 1 - NOS SERVICES ============ */}
      <section className="py-16 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Nos programmes d'accompagnement
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              Nos services
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
              Ce que notre accompagnement vous apporte
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
            <pattern id="pattern-cta-admin" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-cta-admin)" />
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
          <a
            href={waLink("Bonjour STUDASSIST, je souhaite obtenir des informations sur l'accompagnement administratif et la recherche de logement étudiant.")}
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
        title="Admin & Logement : vos questions fréquentes"
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
