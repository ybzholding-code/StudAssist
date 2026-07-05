import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "@/src/components/ui/icons";
import { waLink } from "../lib/utils";
import FAQ from "../components/FAQ";
import Logo from "../components/Logo";
import MediaFrameFloaters from "../components/MediaFrameFloaters";

const faqItems = [
  {
    q: "Comment se déroule un accompagnement en orientation chez STUDASSIST ?",
    a: "Chaque accompagnement débute par un entretien initial avec l'élève et sa famille, suivi d'un travail de diagnostic et de profiling approfondi. Nous construisons ensuite une stratégie d'orientation personnalisée : choix des filières, sélection des établissements, planification des candidatures, accompagnement académique et suivi global.",
  },
  {
    q: "Quelle est l'expertise des consultants en orientation STUDASSIST ?",
    a: "Les consultants en orientation STUDASSIST disposent de parcours académiques et professionnels solides, souvent construits entre le Maroc et l'international. Notre équipe réunit des profils issus de grandes écoles et d'universités reconnues, avec des expériences en conseil, éducation, accompagnement académique, gestion de projets et recrutement. Au-delà de leur parcours, nos consultants sont formés aux enjeux d'orientation, aux procédures d'admission nationales et internationales, ainsi qu'aux spécificités des différents systèmes éducatifs. Cette double approche, à la fois académique, stratégique et humaine, nous permet d'accompagner les élèves avec exigence, méthode et réalisme.",
  },
  {
    q: "L'accompagnement est-il réservé aux élèves souhaitant partir à l'étranger ?",
    a: "Non. Nous accompagnons aussi bien les projets d'études au Maroc qu'à l'international. Notre rôle est d'aider chaque élève à construire un projet cohérent, ambitieux et adapté à son profil, quelle que soit la destination envisagée.",
  },
  {
    q: "Prenez-vous en charge les candidatures et démarches administratives ?",
    a: "Oui. Nous accompagnons les élèves dans la constitution des dossiers de candidatures, les lettres de motivation, les essays, les CV, les formulaires administratifs, les inscriptions aux examens ainsi que les préparations aux entretiens. Nous proposons également un accompagnement spécifique pour les démarches administratives et l'installation à l'étranger.",
  },
  {
    q: "Proposez-vous également du soutien scolaire et des préparations aux concours ?",
    a: "Oui. Notre approche est globale. Lorsque cela est nécessaire, nous intégrons du soutien scolaire, des préparations aux concours ou des certifications de langues afin d'aligner le niveau académique de l'élève avec les exigences de son projet d'orientation.",
  },
  {
    q: "Travaillez-vous avec des élèves de tous les systèmes scolaires ?",
    a: "Oui. Nous accompagnons des élèves issus de différents systèmes : mission française, système marocain, système américain, britannique, belge ou international.",
  },
  {
    q: "Comment se fait la communication avec STUDASSIST ?",
    a: "Les échanges sont centralisés par écrit via WhatsApp afin de garantir une communication fluide, réactive et une traçabilité complète des informations, documents et étapes importantes du parcours.",
  },
  {
    q: "Les parents sont-ils impliqués dans l'accompagnement ?",
    a: "Oui. Nous considérons les parents comme des acteurs essentiels du projet d'orientation. Des points réguliers sont réalisés afin d'assurer une vision claire et partagée des avancées et des décisions stratégiques.",
  },
  {
    q: "Pourquoi faire appel à un cabinet d'orientation ?",
    a: "Les procédures d'admission deviennent de plus en plus complexes et concurrentielles. Un accompagnement structuré permet à l'élève de gagner en clarté, de faire des choix cohérents, d'éviter certaines erreurs stratégiques et de construire un dossier plus solide et différenciant.",
  },
];

const programmes = [
  {
    icon: "https://img.icons8.com/3d-fluency/94/open-book.png",
    title: "Orientation Seconde",
    description: "Choisir ses enseignements de spécialité et construire des bases solides pour la suite du parcours au lycée.",
    link: "/orientation/seconde",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/bookmark.png",
    title: "Orientation Première",
    description: "Affiner ses choix académiques, préparer les premières réflexions post-bac et anticiper les enjeux de l'orientation.",
    link: "/orientation/premiere",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/diploma.png",
    title: "Orientation Terminale",
    description: "Construire un projet d'études cohérent, préparer les candidatures et les admissions dans l'enseignement supérieur.",
    link: "/orientation/terminale",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/compass.png",
    title: "Réorientation",
    description: "Identifier une nouvelle voie, redéfinir son projet d'études et construire une stratégie adaptée pour rebondir sereinement.",
    link: "/orientation/reorientation",
  },
  {
    icon: "https://img.icons8.com/3d-fluency/94/goal.png",
    title: "Objectif Master",
    description: "Définir un projet de spécialisation ambitieux, sélectionner les programmes les plus pertinents et préparer les candidatures aux Masters au Maroc ou à l'international.",
    link: "/orientation/master",
  },
];

const objectifs = [
  { icon: "https://img.icons8.com/3d-fluency/94/goal.png", title: "Une vision claire du projet", description: "Mieux comprendre les filières, les métiers et les parcours possibles." },
  { icon: "https://img.icons8.com/3d-fluency/94/globe.png", title: "Une meilleure connaissance des opportunités", description: "Explorer les formations et destinations adaptées aux ambitions." },
  { icon: "https://img.icons8.com/3d-fluency/94/search.png", title: "Une prise de décision éclairée", description: "Faire des choix fondés sur des informations fiables et objectives." },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Une stratégie d'admission cohérente", description: "Construire un parcours optimisé pour maximiser les chances d'intégration." },
  { icon: "https://img.icons8.com/3d-fluency/94/idea.png", title: "Donner du sens à ses études", description: "Conscientiser son avenir afin de gagner en motivation et en engagement dans ses études." },
  { icon: "https://img.icons8.com/3d-fluency/94/star.png", title: "Plus de confiance dans les décisions prises", description: "Avancer avec sérénité dans la construction de son avenir." },
];

const differences = [
  { icon: "https://img.icons8.com/3d-fluency/94/diploma.png", title: "Une expertise reconnue en orientation", description: "Plus de 7 ans d'accompagnement des élèves et étudiants." },
  { icon: "https://img.icons8.com/3d-fluency/94/globe.png", title: "Une vision nationale et internationale", description: "Des opportunités étudiées au Maroc comme à l'étranger." },
  { icon: "https://img.icons8.com/3d-fluency/94/document.png", title: "Une approche personnalisée", description: "Chaque projet est construit selon le profil et les ambitions de l'élève." },
  { icon: "https://img.icons8.com/3d-fluency/94/bar-chart.png", title: "Une stratégie globale des admissions", description: "Orientation, renforcement des matières clés, concours, certifications et candidatures sont pensés ensemble." },
  { icon: "https://img.icons8.com/3d-fluency/94/conference-call.png", title: "Un accompagnement humain et bienveillant", description: "Des échanges continus avec les élèves et leurs familles." },
  { icon: "https://img.icons8.com/3d-fluency/94/rocket.png", title: "Un accompagnement jusqu'à la concrétisation du projet", description: "De la réflexion initiale jusqu'aux admissions." },
];

const services = [
  { icon: "https://img.icons8.com/3d-fluency/94/open-book.png", title: "Soutien Scolaire", link: "/soutien-scolaire" },
  { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", title: "Prépas Concours", link: "/prepas-concours" },
  { icon: "https://img.icons8.com/3d-fluency/94/diploma.png", title: "Prépas-Bac", link: "/prepas-bac" },
  { icon: "https://img.icons8.com/3d-fluency/94/chat.png", title: "Certifications de langues", link: "/certifications" },
  { icon: "https://img.icons8.com/3d-fluency/94/home.png", title: "Admin & Logement", link: "/admin-logement" },
];

export default function OrientationScolaire() {
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
              <span>Orientation scolaire</span>
              <span className="w-8 h-px bg-brand-teal" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue mb-4 uppercase tracking-tighter leading-[1.1] lg:leading-tight"
            >
              <span className="sa-wavy sa-wavy-teal">
                Orientation scolaire et universitaire : construire un projet d'études{" "}
                <span className="sa-gradient-text">ambitieux et cohérent</span>
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
                      src="/orientation-pagemere.png"
                      alt="Orientation scolaire"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Choisir une spécialité, une filière, une école ou une destination d'études représente une décision déterminante pour l'avenir.
              </p>
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Chez STUDASSIST, nous accompagnons les élèves et les étudiants dans la construction et la réalisation d'un projet académique cohérent, réaliste et aligné avec leurs ambitions, leurs compétences et les opportunités qui s'offrent à eux.
              </p>
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-medium">
                Grâce à une analyse approfondie du profil, une vision long terme et un accompagnement personnalisé, nous transformons l'orientation en véritable levier de réussite et d'épanouissement académique.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">+500</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">Élèves orientés / an</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">97%</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">Familles satisfaites</div>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_20px_50px_rgba(17,29,74,0.05)] text-center">
                  <div className="text-2xl lg:text-3xl font-black text-brand-teal mb-1 tracking-tight">+25</div>
                  <div className="text-[9px] lg:text-[10px] font-black text-brand-darkblue uppercase tracking-[0.18em] leading-tight">Destinations</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="bg-brand-teal text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-darkblue transition-all shadow-xl shadow-brand-teal/20 inline-flex items-center justify-center gap-3"
                >
                  <span>Réserver mon rendez-vous d'informations</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ENJEUX DE L'ORIENTATION ============ */}
      <section className="py-16 lg:py-32 bg-[#f8fbfc] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Les enjeux de l'orientation scolaire & universitaire
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              Les enjeux de l'orientation
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Une orientation réussie ne consiste pas uniquement à choisir une formation. Elle permet de construire un projet cohérent, de sécuriser les candidatures et d'optimiser les opportunités académiques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "https://img.icons8.com/3d-fluency/94/goal.png", title: "Faire les bons choix au bon moment", description: "Chaque décision influence les possibilités d'études futures." },
              { icon: "https://img.icons8.com/3d-fluency/94/compass.png", title: "Construire un projet cohérent", description: "Savoir relier les centres d'intérêt, les compétences et les ambitions académiques." },
              { icon: "https://img.icons8.com/3d-fluency/94/globe.png", title: "Identifier les meilleures opportunités", description: "Explorer les formations, écoles et destinations adaptées à chaque profil." },
              { icon: "https://img.icons8.com/3d-fluency/94/rocket.png", title: "Préparer les admissions", description: "Anticiper les concours, certifications, dossiers et procédures de candidature." },
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

      {/* ============ NOS PROGRAMMES D'ACCOMPAGNEMENT ============ */}
      <section className="py-16 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Nos programmes d'accompagnement
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              Nos accompagnements en orientation
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Chaque étape du parcours scolaire et universitaire soulève des questions d'orientation spécifiques. Chez STUDASSIST, nous proposons des accompagnements adaptés à chaque moment clé afin d'aider les élèves et étudiants à prendre les bonnes décisions pour leur avenir.
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

      {/* ============ OBJECTIFS & BÉNÉFICES ============ */}
      <section className="py-16 lg:py-32 bg-[#f8fbfc] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 bg-brand-teal/5 text-brand-teal rounded-full text-[10px] font-black mb-6 tracking-[0.2em] uppercase border border-brand-teal/10">
              Objectifs & bénéfices
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-darkblue uppercase tracking-tighter mb-6 leading-tight">
              Ce que nos élèves développent grâce à notre accompagnement
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

      {/* ============ CE QUI FAIT NOTRE DIFFÉRENCE ============ */}
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
            <pattern id="pattern-cta-orientation" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-cta-orientation)" />
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
            Vous souhaitez mettre en place un accompagnement personnalisé ? Réserver un premier rendez-vous d'informations pour évaluer votre profil et poser les bases d'une stratégie adaptée.
          </p>
          <a
            href={waLink("Bonjour STUDASSIST, je souhaite obtenir des informations sur l'accompagnement en orientation scolaire et universitaire.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.15em] text-xs hover:scale-105 transition-all shadow-2xl shadow-brand-red/30 group inline-flex items-center space-x-4"
          >
            <span>Prendre rendez-vous</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* ============ FAQ ============ */}
      <FAQ
        title="Orientation scolaire : vos questions"
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
