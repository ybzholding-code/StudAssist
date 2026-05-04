import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Facebook, 
  Instagram, 
  Linkedin 
} from "@/src/components/ui/icons";
import { cn } from "@/src/lib/utils";
import Logo from "../Logo";

const NAV_ITEMS = [
  {
    name: "ORIENTATION SCOLAIRE",
    href: "/orientation-scolaire",
    subItems: [
      { label: "Seconde", href: "/orientation/seconde" },
      { label: "Première", href: "/orientation/premiere" },
      { label: "Terminale", href: "/orientation/terminale" },
      { label: "Master", href: "/orientation/master" },
      { label: "Réorientation", href: "/orientation/reorientation" },
    ],
  },
  {
    name: "SOUTIEN SCOLAIRE",
    href: "/soutien-scolaire",
    subItems: ["Primaire", "Collège", "Lycée", "Supérieur", "Stages de vacances", "Prépa Brevet"],
  },
  {
    name: "PRÉPAS BAC",
    href: "/prepas-bac",
    subItems: ["Bac de Français", "Bac de Spécialités", "Bac de Philo", "Grand oral"],
  },
  {
    name: "PRÉPAS CONCOURS",
    href: "/prepas-concours",
    subItems: ["SAT/ GMAT", "Écoles de commerce", "Écoles d'ingénieurs", "Médecine", "Sciences-po", "Architecture"],
  },
  {
    name: "CERTIFICATIONS DE LANGUES",
    href: "/certifications",
    subItems: ["IELTS-TOEIC-TOEFL", "TCF-DALF", "DELE"],
  },
  {
    name: "ADMIN&LOGEMENT",
    href: "/admin-logement",
    subItems: ["Démarches administratives", "Logement étudiant"],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      {/* HEADER I - Top Bar */}
      <div className="bg-brand-darkblue text-white text-[10px] font-medium py-2.5 px-4 lg:px-6">
        <div className="container mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center space-x-3 xs:space-x-4 lg:space-x-6">
            <a href="tel:0669495996" className="flex items-center hover:text-brand-teal transition">
              <Phone size={12} className="mr-1 lg:mr-1.5" /> <span className="hidden sm:inline">0669-495996 | 0664-779093</span><span className="sm:hidden">Appel</span>
            </a>
            <Link to="/contact" className="bg-brand-teal px-2 py-0.5 lg:px-3 lg:py-1 rounded text-white font-bold uppercase tracking-wider text-[8px] xs:text-[9px] lg:text-[10px]">
              RDV <span className="hidden xs:inline">découverte</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/qui-sommes-nous" className="hover:text-brand-teal transition">Qui sommes-nous</Link>
              <Link to="/nous-rejoindre" className="hover:text-brand-teal transition">Nous rejoindre</Link>
            </div>
            <Link to="/contact#centres" className="flex items-center hover:text-brand-teal transition">
              <MapPin size={12} className="mr-1.5 text-brand-teal font-bold" /> <span className="hidden sm:inline">Nos centres</span>
            </Link>
            <div className="hidden xs:flex items-center space-x-3 lg:ml-4 lg:border-l lg:border-white/20 lg:pl-4">
              <a href="#" className="hover:text-brand-teal transition"><Facebook size={12} /></a>
              <a href="#" className="hover:text-brand-teal transition"><Instagram size={12} /></a>
              <a href="#" className="hover:text-brand-teal transition"><Linkedin size={12} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER II - Logo & Main Navigation */}
      <nav className="bg-white border-b border-gray-100 shadow-sm relative z-40">
        <div className="container mx-auto px-6 flex justify-between items-center h-20 lg:h-24 transition-all duration-300">
          <Link id="nav-logo" to="/" className="flex items-center">
            <Logo variant="full" iconSize={44} className="scale-75 xs:scale-90 lg:scale-100 origin-left" />
          </Link>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.name}
                className="relative group py-5"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link to={item.href} className="flex items-center text-[10px] xl:text-[11px] font-black tracking-normal text-sa-navy uppercase hover:text-brand-teal transition-all duration-300">
                  {item.name}
                  <ChevronDown size={10} className="ml-1.5 opacity-40 group-hover:rotate-180 transition-transform" />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-xl border border-gray-100 py-3 overflow-hidden z-50"
                    >
                      {item.subItems.map((sub) => {
                        const label = typeof sub === "string" ? sub : sub.label;
                        const to = typeof sub === "string"
                          ? `${item.href}#${sub.toLowerCase().replace(/\s+/g, "-")}`
                          : sub.href;
                        return (
                          <Link
                            key={label}
                            to={to}
                            className="block px-6 py-2.5 text-xs font-semibold text-gray-600 hover:bg-brand-light hover:text-brand-teal transition"
                          >
                            {label}
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-1 lg:space-x-2">
            <button className="p-2 text-brand-darkblue hover:text-brand-teal transition">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            <button id="mobile-menu-toggle" className="lg:hidden p-2 text-brand-darkblue" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.name} className="flex flex-col space-y-2">
                  <Link 
                    to={item.href} 
                    className="font-bold text-brand-darkblue"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="pl-4 flex flex-col space-y-1">
                    {item.subItems.map((sub) => {
                      const label = typeof sub === "string" ? sub : sub.label;
                      const to = typeof sub === "string"
                        ? `${item.href}#${sub.toLowerCase().replace(/\s+/g, "-")}`
                        : sub.href;
                      return (
                        <Link
                          key={label}
                          to={to}
                          className="text-sm text-gray-500"
                          onClick={() => setIsOpen(false)}
                        >
                          {label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                <Link to="/contact" className="text-center bg-brand-teal text-white py-3 rounded-full font-bold" onClick={() => setIsOpen(false)}>
                  Réserver ma séance découverte
                </Link>
                <Link to="/contact#centres" className="text-center bg-black text-white py-3 rounded-md font-bold" onClick={() => setIsOpen(false)}>
                  Où nous trouver
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
