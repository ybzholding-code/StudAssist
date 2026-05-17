import { motion } from "motion/react";

const trustBarStats = [
  { icon: "https://img.icons8.com/3d-fluency/94/graduation-cap.png", value: "+3000", label: "CANDIDATS & ÉLÈVES ACCOMPAGNÉS" },
  { icon: "https://img.icons8.com/3d-fluency/94/trophy.png", value: "≈97%", label: "ADMIS AU TOP 3 DES ÉCOLES CHOISIES" },
  { icon: "https://img.icons8.com/3d-fluency/94/globe.png", value: "+16", label: "DESTINATIONS D'ÉTUDES" },
  { icon: "https://img.icons8.com/3d-fluency/94/star.png", value: "9/10", label: "CLIENTS SATISFAITS" },
  { icon: "https://img.icons8.com/3d-fluency/94/school.png", value: "500 m²", label: "D'ESPACE DÉDIÉ À L'ÉTUDIANT" },
  { icon: "https://img.icons8.com/3d-fluency/94/handshake.png", value: "+20", label: "PARTENAIRES À TRAVERS LE MONDE" },
  { icon: "https://img.icons8.com/3d-fluency/94/training.png", value: "+50", label: "TUTEURS & PROFESSEURS EXPÉRIMENTÉS" },
  { icon: "https://img.icons8.com/3d-fluency/94/medal.png", value: "7", label: "ANS D'EXPERTISE" },
  { icon: "https://img.icons8.com/3d-fluency/94/conference-call.png", value: "2", label: "COACHS SCOLAIRES" },
  { icon: "https://img.icons8.com/3d-fluency/94/compass.png", value: "9", label: "EXPERTS EN ORIENTATION SCOLAIRE" },
];

export default function TrustBar() {
  const doubled = [...trustBarStats, ...trustBarStats];

  return (
    <section className="bg-sa-navy py-8 relative z-30 overflow-hidden border-y border-white/10 shadow-2xl">
      <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-48 bg-gradient-to-r from-sa-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-48 bg-gradient-to-l from-sa-navy to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((stat, idx) => (
          <div key={idx} className="flex items-center px-10 lg:px-14 border-r border-white/10 last:border-r-0 shrink-0 py-3">
            <div className="flex flex-col items-center text-center space-y-1.5">
              <img src={stat.icon} alt={stat.label} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 shrink-0 drop-shadow-lg" />
              <div className="text-[26px] sm:text-[32px] lg:text-[40px] tracking-tight font-black font-display text-white leading-none">
                {stat.value}
              </div>
              <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 max-w-[140px] leading-tight">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
