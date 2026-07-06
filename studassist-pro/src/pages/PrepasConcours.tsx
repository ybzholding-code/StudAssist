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
    q: "Pourquoi suivre une préparation spécifique à un concours ?",
    a: "Les concours d'admission reposent sur des attentes, des méthodes et des critères de sélection particuliers. Une préparation spécifique permet d'acquérir les bons réflexes, de développer une méthodologie adaptée et d'optimiser ses performances le jour des épreuves.",
  },
  {
    q: "À partir de quand est-il conseillé de commencer la préparation ?",
    a: "Cela dépend du concours visé. Pour les concours les plus sélectifs, comme Sciences Po, les études de médecine ou l'architecture, il est souvent recommandé de commencer dès la Première afin de développer progressivement les compétences attendues. D'autres préparations peuvent être mises en place de manière plus intensive en Terminale ou pendant les vacances scolaires.",
  },
  {
    q: "Les préparations STUDASSIST s'adressent-elles uniquement aux excellents élèves ?",
    a: "Non. Nos préparations s'adressent à tous les élèves motivés et disposant d'un projet d'études cohérent. L'objectif est d'aider chaque candidat à développer son potentiel et à maximiser ses chances de réussite, quel que soit son niveau de départ.",
  },
  {
    q: "Les préparations sont-elles proposées en groupe ou en individuel ?",
    a: "Selon le concours préparé, les accompagnements peuvent être proposés en petits groupes à effectifs réduits ou en format individuel. Dans tous les cas, nous privilégions un suivi personnalisé permettant d'adapter le travail aux besoins de chaque élève.",
  },
  {
    q: "Travaillez-vous uniquement les connaissances académiques ?",
    a: "Non. La réussite à un concours repose également sur la méthodologie, la gestion du temps, les stratégies de réponse, l'organisation du travail et la capacité à performer dans un environnement sélectif. Ces dimensions font partie intégrante de nos préparations.",
  },
  {
    q: "Proposez-vous des concours blancs et des entraînements en conditions réelles ?",
    a: "Oui. Des entraînements réguliers, exercices ciblés, simulations et concours blancs permettent aux élèves de se familiariser avec les épreuves et de développer les automatismes attendus le jour du concours.",
  },
  {
    q: "Les enseignants connaissent-ils réellement les concours préparés ?",
    a: "Oui. Les élèves sont accompagnés par des enseignants et intervenants spécialisés, maîtrisant parfaitement les exigences, les formats d'épreuves et les attentes des concours qu'ils préparent.",
  },
  {
    q: "Les préparations incluent-elles un accompagnement à l'orientation ?",
    a: "Oui. Selon les besoins de l'élève, la préparation peut être complétée par un accompagnement en orientation afin de confirmer la cohérence du projet d'études, identifier les formations les plus adaptées et construire une stratégie de candidature pertinente.",
  },
  {
    q: "Pouvez-vous également accompagner la constitution des dossiers de candidature ?",
    a: "Oui. Pour certaines formations, la réussite ne dépend pas uniquement du concours. Nous pouvons accompagner les élèves dans la préparation de leur dossier de candidature, la rédaction des lettres de motivation, les rubriques Parcoursup, les entretiens de motivation ou encore certaines démarches administratives liées aux admissions.",
  },
  {
    q: "Pourquoi choisir STUDASSIST pour préparer un concours ?",
    a: "Depuis plus de 6 ans, STUDASSIST accompagne les élèves dans l'accès aux formations les plus sélectives au Maroc et à l'international. Notre approche combine préparation académique, méthodologie, orientation, stratégie de candidature et suivi personnalisé afin de maximiser les chances d'admission de chaque élève.",
  },
];

const programmeGroups = [
  {
    category: "Commerce & Management",
    items: [
      {
        icon: "https://img.icons8.com/?size=100&id=qZ3IKpKF9Cun&format=png&color=000000",
        title: "SESAME & ACCÈS",
        description: "Préparer les concours d'admission des grandes écoles de commerce post-bac en France.",
        link: "/prepas-concours/sesame-acces",
      },
      {
        icon: "https://img.icons8.com/?size=100&id=DAoPjn2XoTUN&format=png&color=000000",
        title: "ENCG & ISCAE",
        description: "Préparer les concours d'accès aux grandes écoles de commerce marocaines.",
        link: "/prepas-concours/encg-iscae",
      },
      {
        icon: "https://img.icons8.com/?size=100&id=B0YxODenuYvG&format=png&color=000000",
        title: "UM6P",
        description: "Optimiser son profil, réussir les épreuves et préparer les entretiens.",
        link: "/prepas-concours/um6p",
      },
    ],
  },
  {
    category: "Sciences politiques & Sciences humaines",
    items: [
      {
        icon: "https://img.icons8.com/?size=100&id=H0fT5t4BS8rR&format=png&color=000000",
        title: "Sciences Po & IEP",
        description: "Préparer les épreuves d'analyse, de culture générale et les dossiers de candidature à Sciences Po.",
        link: "/prepas-concours/sciences-po",
      },
    ],
  },
  {
    category: "Santé",
    items: [
      {
        icon: "https://img.icons8.com/?size=100&id=CEO59cK8uKjA&format=png&color=000000",
        title: "Médecine Maroc",
        description: "Préparer les épreuves de sélection et optimiser son dossier académique.",
        link: "/prepas-concours/medecine-maroc",
      },
      {
        icon: "https://img.icons8.com/?size=100&id=rOWUIuBluRNI&format=png&color=000000",
        title: "Médecine Belgique",
        description: "Réussir l'examen d'entrée et sécuriser son projet d'études médicales.",
        link: "/prepas-concours/medecine-belgique",
      },
    ],
  },
  {
    category: "Ingénierie & Architecture",
    items: [
      {
        icon: "https://img.icons8.com/?size=100&id=XsvEZR0h6fav&format=png&color=000000",
        title: "Écoles d'ingénieurs post-bac GEIPI POLYTECH | PUISSANCE ALPHA | AVENIR",
        description: "Préparer les concours des formations d'ingénierie réputées en France.",
        link: "/prepas-concours/ingenieurs",
      },
      {
        icon: "https://img.icons8.com/3d-fluency/94/diploma.png",
        title: "Architecture ENA",
        description: "Développer sa culture architecturale, son analyse et sa préparation aux épreuves.",
        link: "/prepas-concours/architecture",
      },
    ],
  },
  {
    category: "International",
    items: [
      {
        icon: "https://img.icons8.com/3d-fluency/94/goal.png",
        title: "SAT & GMAT",
        description: "Atteindre les scores requis pour intégrer les meilleures universités internationales.",
        link: "/prepas-concours/sat-gmat",
      },
    ],
  },
];

const objectifs = [
  { icon: "https://img.icons8.com/?size=100&id=4prjBhjIN59x&format=png&color=000000", title: "Des capacités d'analyse renforcées", description: "Apprendre à raisonner efficacement et à résoudre des problèmes complexes." },
  { icon: "https://img.icons8.com/?size=100&id=E8UDNc2M7twd&format=png&color=000000", title: "Une meilleure gestion du temps", description: "Acquérir les réflexes nécessaires pour performer dans un temps limité." },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Une méthodologie de concours", description: "Comprendre les attentes spécifiques des épreuves et adopter les bonnes stratégies." },
  { icon: "https://img.icons8.com/?size=100&id=bocBCRpgDfu8&format=png&color=000000", title: "Une meilleure gestion du stress", description: "Développer sa confiance et apprendre à performer sous pression." },
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "Des connaissances ciblées", description: "Concentrer ses efforts sur les notions réellement évaluées." },
  { icon: "https://img.icons8.com/3d-fluency/94/rocket.png", title: "Un profil plus compétitif", description: "Renforcer son dossier et ses chances d'intégrer les formations les plus sélectives." },
];

const differences = [
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "Des enseignants experts des concours", description: "Nos intervenants maîtrisent parfaitement les formats, les attentes et les critères de sélection." },
  { icon: "https://img.icons8.com/3d-fluency/94/goal.png", title: "Des préparations adaptées à chaque concours", description: "Chaque concours possède ses propres exigences et fait l'objet d'un accompagnement spécifique." },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Une méthodologie orientée performance", description: "Nous préparons les élèves à performer, et pas uniquement à apprendre." },
  { icon: "https://img.icons8.com/3d-fluency/94/globe.png", title: "Une approche intégrée à l'orientation", description: "Nos préparations s'inscrivent dans une réflexion globale autour du projet d'études." },
  { icon: "https://img.icons8.com/3d-fluency/94/conference-call.png", title: "Un accompagnement personnalisé", description: "Nous adaptons le suivi aux objectifs, au niveau et aux échéances de chaque élève." },
  { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", title: "Plus de 7 ans d'expérience", description: "Une expertise reconnue dans l'accompagnement des admissions sélectives au Maroc et à l'international." },
];

const services = [
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "Soutien Scolaire", link: "/soutien-scolaire" },
  { icon: "https://img.icons8.com/3d-fluency/94/diploma.png", title: "Prépas-Bac", link: "/prepas-bac" },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Orientation", link: "/orientation-scolaire" },
  { icon: "https://img.icons8.com/3d-fluency/94/chat.png", title: "Certifications de langues", link: "/certifications" },
  { icon: "https://img.icons8.com/3d-fluency/94/home.png", title: "Admin & Logement", link: "/admin-logement" },
];

export default function PrepasConcours() {
  usePageMeta({
    title: "Préparation aux Concours — Médecine, Ingénieur, Sciences Po, UM6P",
    description: "Préparez les grands concours avec STUDASSIST : médecine Maroc et Belgique, écoles d'ingénieurs, Sciences Po, UM6P, SAT/GMAT. Coaching personnalisé et méthode éprouvée.",
    canonical: "/prepas-concours",
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
              <span>Prépas Concours</span>
              <span className="w-8 h-px bg-brand-teal" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue mb-4 uppercase tracking-tighter leading-[1.1] lg:leading-tight"
            >
              <span className="sa-wavy sa-wavy-teal">
                Préparer ses concours post-bac avec{" "}
                <span className="sa-gradient-text">STUDASSIST</span>
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
                      src="/prepas-concours.png"
                      alt="Prépas Concours"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 33%" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Les concours d'accès aux grandes écoles et universités exigent bien plus que des connaissances académiques. Ils requièrent méthode, rigueur et capacité à performer dans un environnement compétitif.
              </p>
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Chez STUDASSIST, nous accompagnons nos élèves dans des préparations complètes, alliant maîtrise des épreuves, stratégies de performances et développement d'un véritable esprit concours.
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
                  href={waLink("Bonjour STUDASSIST, je souhaite obtenir des informations sur les préparations aux concours post-bac.")}
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
              Les enjeux des préparations aux concours
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Réussir un concours ne repose pas uniquement sur les connaissances académiques. La réussite dépend également de la méthodologie, de la stratégie, de la gestion du temps et de la capacité à performer dans un environnement sélectif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "https://img.icons8.com/3d-fluency/94/star.png", title: "Se démarquer dans un environnement compétitif", description: "Les concours permettent de sélectionner les meilleurs profils parmi un grand nombre de candidats." },
              { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", title: "Maximiser ses chances d'admission", description: "Une préparation adaptée permet d'optimiser ses performances et de gagner de précieux points." },
              { icon: "https://img.icons8.com/3d-fluency/94/goal.png", title: "Développer un véritable esprit concours", description: "Gestion du temps, rapidité d'analyse, prise de décision et gestion du stress deviennent des compétences clés." },
              { icon: "https://img.icons8.com/3d-fluency/94/rocket.png", title: "Accéder aux meilleures opportunités académiques", description: "Les concours ouvrent les portes des écoles, universités et formations les plus sélectives." },
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
              Nos préparations aux concours
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {programmeGroups.map((group, gIdx) => (
              <div key={gIdx}>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-teal mb-3 pl-1">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.items.map((prog, idx) => (
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
                            <h4 className="text-brand-darkblue font-black text-base uppercase tracking-tight group-hover:text-brand-teal transition-colors">
                              {prog.title}
                            </h4>
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
              Ce que nos élèves développent grâce à nos prépas concours
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
            <pattern id="pattern-cta-concours" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-cta-concours)" />
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
            href={waLink("Bonjour STUDASSIST, je souhaite obtenir des informations sur les préparations aux concours post-bac.")}
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
        title="Vos questions fréquentes"
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
