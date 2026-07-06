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
    q: "Pourquoi passer une certification de langue ?",
    a: "Les certifications de langue permettent d'attester officiellement d'un niveau linguistique auprès des universités, grandes écoles, organismes de mobilité internationale ou employeurs. Elles constituent souvent une étape indispensable dans le cadre d'un projet d'études ou de carrière à l'international.",
  },
  {
    q: "Quelle certification choisir : IELTS, TOEFL, TCF, DALF ou DELE ?",
    a: "Le choix dépend principalement de votre projet. L'IELTS et le TOEFL sont généralement requis pour les études dans des établissements anglophones. Le TCF et le DALF permettent d'attester d'un niveau de français, notamment pour les études en France. Le DELE certifie le niveau d'espagnol et est souvent demandé pour les études en Espagne. Chez STUDASSIST, nous accompagnons chaque élève dans le choix de la certification la plus adaptée à son projet.",
  },
  {
    q: "Quel niveau ou quel score faut-il obtenir ?",
    a: "Les exigences varient selon les établissements et les formations visés. À titre indicatif : IELTS : généralement entre 6.5 et 7.5 ; TOEFL : souvent entre 80 et 100+ ; TCF / DALF : niveau B2 à C1 ; DELE : niveau B2 à C1. Nous aidons chaque élève à définir un objectif réaliste et cohérent avec ses ambitions académiques.",
  },
  {
    q: "À partir de quand faut-il commencer sa préparation ?",
    a: "Plus la préparation est anticipée, meilleures sont les chances d'atteindre le niveau visé. Idéalement, il est recommandé de commencer plusieurs mois avant la date de l'examen afin de travailler progressivement les compétences évaluées et de multiplier les entraînements.",
  },
  {
    q: "Les certifications évaluent-elles uniquement le niveau de langue ?",
    a: "Non. Elles évaluent également la capacité à mobiliser ses compétences dans un format d'examen spécifique, souvent sous contrainte de temps. La réussite repose donc autant sur la maîtrise de la langue que sur la méthodologie et la connaissance des épreuves.",
  },
  {
    q: "Les préparations STUDASSIST sont-elles proposées en groupe ou en individuel ?",
    a: "Nous proposons les deux formats. Les élèves peuvent être accompagnés en petits groupes à effectifs réduits ou en format individuel, selon leurs besoins, leurs objectifs et leurs échéances.",
  },
  {
    q: "Comment évaluez-vous le niveau initial de l'élève ?",
    a: "Chaque accompagnement débute par un test de positionnement permettant d'identifier le niveau de départ, les points forts et les axes de progression. Ce diagnostic permet de construire un programme de travail personnalisé.",
  },
  {
    q: "Les certifications de langues sont-elles importantes pour les candidatures à l'international ?",
    a: "Oui. Dans de nombreux cas, elles constituent une condition d'admission indispensable. Un bon score permet également de renforcer la crédibilité d'un dossier, d'accéder à des formations plus sélectives et parfois d'obtenir des bourses.",
  },
  {
    q: "Les préparations aux certifications peuvent-elles être combinées avec un accompagnement en orientation ?",
    a: "Oui. Chez STUDASSIST, les certifications de langues s'inscrivent dans une démarche globale de construction du projet d'études. Nous pouvons accompagner les élèves dans leur orientation, le choix des établissements, la définition des objectifs de score et la préparation des candidatures.",
  },
  {
    q: "Pourquoi choisir STUDASSIST pour préparer une certification de langue ?",
    a: "Depuis plus de 6 ans, nous accompagnons les élèves dans leurs projets d'études au Maroc et à l'international et 100% d'entre eux décrochent l'une des écoles du TOP 3 de leurs choix ! Notre approche combine évaluation du niveau initial, méthodologie, entraînements ciblés, suivi personnalisé et accompagnement du projet d'études afin de maximiser les chances de réussite aux certifications et aux admissions.",
  },
];

const programmes = [
  {
    icon: "https://img.icons8.com/3d-fluency/94/globe.png",
    title: "IELTS & TOEFL",
    description: "Préparez les certifications d'anglais requises par les universités, grandes écoles et programmes internationaux anglophones. Nous accompagnons les élèves dans l'atteinte du score nécessaire à leurs projets d'études à l'étranger.",
    link: "/certifications/ielts-toefl",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/open-book.png",
    title: "TCF & DALF",
    description: "Validez officiellement votre niveau de français pour poursuivre vos études dans un environnement francophone ou répondre aux exigences de certaines procédures d'admission et démarches académiques en France.",
    link: "/certifications/tcf-dalf",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/chat.png",
    title: "DELE",
    description: "Certifiez votre niveau d'espagnol et préparez vos projets d'études en Espagne ou dans des établissements internationaux exigeant une maîtrise de la langue espagnole.",
    link: "/certifications/dele",
  },
];

const objectifs = [
  { icon: "https://img.icons8.com/3d-fluency/94/document.png", title: "Compréhension écrite", description: "Apprendre à analyser et comprendre des documents académiques complexes." },
  { icon: "https://img.icons8.com/3d-fluency/94/hearing.png", title: "Compréhension orale", description: "Développer sa capacité à comprendre des conférences, échanges et présentations." },
  { icon: "https://img.icons8.com/3d-fluency/94/pencil.png", title: "Expression écrite", description: "Structurer ses idées et produire des écrits conformes aux attentes des examens." },
  { icon: "https://img.icons8.com/3d-fluency/94/microphone.png", title: "Expression orale", description: "Gagner en fluidité, en précision et en aisance dans la langue cible." },
  { icon: "https://img.icons8.com/3d-fluency/94/calendar.png", title: "Maîtrise des formats d'examen", description: "Acquérir les stratégies et réflexes nécessaires pour performer sous contrainte de temps." },
  { icon: "https://img.icons8.com/3d-fluency/94/rocket.png", title: "Gain en confiance linguistique", description: "Oser s'exprimer, argumenter et interagir dans une langue étrangère avec davantage de fluidité et d'assurance, à l'écrit comme à l'oral." },
];

const differences = [
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "Des enseignants spécialisés dans les certifications internationales", description: "Nos intervenants maîtrisent parfaitement les formats, les attentes et les critères d'évaluation." },
  { icon: "https://img.icons8.com/3d-fluency/94/goal.png", title: "Des préparations orientées score et niveau cible", description: "Chaque préparation est construite autour d'un objectif de score précis et adapté au projet de l'élève." },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Une méthodologie éprouvée et personnalisée", description: "Des méthodes concrètes pour progresser durablement et gagner en efficacité." },
  { icon: "https://img.icons8.com/3d-fluency/94/globe.png", title: "Une préparation intégrée au projet d'études à l'international", description: "Nos accompagnements tiennent compte du projet d'études et des ambitions académiques de l'élève." },
  { icon: "https://img.icons8.com/3d-fluency/94/conference-call.png", title: "Des formats flexibles en individuel ou en petits groupes", description: "Cours individuels, petits groupes, présentiel ou visioconférence selon les besoins." },
  { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", title: "Plus de 7 ans d'expérience dans l'accompagnement des projets académiques internationaux", description: "Une expertise reconnue dans la préparation aux certifications et l'accompagnement à l'international." },
];

const services = [
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "Soutien Scolaire", link: "/soutien-scolaire" },
  { icon: "https://img.icons8.com/3d-fluency/94/diploma.png", title: "Prépas-Bac", link: "/prepas-bac" },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Orientation", link: "/orientation-scolaire" },
  { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", title: "Prépas-concours", link: "/prepas-concours" },
  { icon: "https://img.icons8.com/3d-fluency/94/home.png", title: "Admin & Logement", link: "/admin-logement" },
];

export default function Certifications() {
  usePageMeta({
    title: "Certifications de Langues — IELTS, TOEFL, DELE, TCF, DALF",
    description: "Préparez vos certifications de langues avec STUDASSIST : IELTS, TOEFL, TOEIC, DELE, TCF, DALF. Entraînement intensif et coaching personnalisé au Maroc.",
    canonical: "/langues",
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
              <span>Certifications de langues</span>
              <span className="w-8 h-px bg-brand-teal" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue mb-4 uppercase tracking-tighter leading-[1.1] lg:leading-tight"
            >
              <span className="sa-wavy sa-wavy-teal">
                Certifications de langues : valider son niveau et ouvrir de grandes{" "}
                <span className="sa-gradient-text">opportunités académiques</span>
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
                      src="/hero-certif-new.png"
                      alt="Certifications de langues"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 33%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Les certifications de langues sont aujourd'hui devenues un élément incontournable de nombreux projets académiques et internationaux. Elles permettent de démontrer officiellement son niveau linguistique et constituent souvent une condition d'admission dans les universités, grandes écoles et programmes internationaux.
              </p>
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Chez STUDASSIST, nous accompagnons les élèves et étudiants dans la préparation des principales certifications de langues grâce à une approche personnalisée, structurée et orientée résultats.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">+7 ans</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">D'expertise</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">100%</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">Admis au top 3</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">8 max</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">Élèves par groupe</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={waLink("Bonjour STUDASSIST, je souhaite obtenir des informations sur les préparations aux certifications de langues.")}
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
              Les enjeux des certifications de langues
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Dans un contexte académique de plus en plus international, les certifications de langues constituent bien plus qu'un simple examen. Elles représentent souvent une étape déterminante dans la construction d'un projet d'études.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "https://img.icons8.com/3d-fluency/94/globe.png", title: "Accéder aux études à l'international", description: "De nombreuses universités exigent une certification linguistique dans le cadre de leurs admissions." },
              { icon: "https://img.icons8.com/3d-fluency/94/goal.png", title: "Atteindre le niveau ou le score requis", description: "Chaque établissement fixe ses propres exigences linguistiques selon les formations et les pays." },
              { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Développer des compétences académiques", description: "Compréhension écrite, compréhension orale, expression écrite et expression orale sont au cœur des certifications." },
              { icon: "https://img.icons8.com/3d-fluency/94/rocket.png", title: "Renforcer son dossier de candidature", description: "Un bon score constitue un véritable atout pour se démarquer des autres candidats." },
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
              Nos préparations aux certifications de langues
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
              Ce que nos élèves développent grâce à nos préparations
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
            <pattern id="pattern-cta-certif" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-cta-certif)" />
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
            href={waLink("Bonjour STUDASSIST, je souhaite obtenir des informations sur les préparations aux certifications de langues.")}
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
        title="Certifications de langues : vos questions fréquentes"
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
