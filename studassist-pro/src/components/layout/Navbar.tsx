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
      { label: "Réorientation", href: "/orientation/reorientation" },
      { label: "Master", href: "/orientation/master" },
    ],
  },
  {
    name: "SOUTIEN SCOLAIRE",
    href: "/soutien-scolaire",
    subItems: [
      { label: "Primaire", href: "/soutien/primaire" },
      { label: "Collège", href: "/soutien/college" },
      { label: "Lycée", href: "/soutien/lycee" },
      { label: "Supérieur", href: "/soutien/superieur" },
      { label: "Stages de vacances", href: "/soutien/stages" },
      { label: "Prépa Brevet", href: "/soutien/brevet" },
    ],
  },
  {
    name: "PRÉPAS BAC",
    href: "/prepas-bac",
    subItems: [
      { label: "Bac de Français", href: "/prepas-bac/francais" },
      { label: "Bac de Spécialités", href: "/prepas-bac/specialites" },
      { label: "Bac de Philo", href: "/prepas-bac/philo" },
      { label: "Grand Oral", href: "/prepas-bac/grand-oral" },
    ],
  },
  {
    name: "PRÉPAS CONCOURS",
    href: "/prepas-concours",
    subItems: [
      { label: "SAT / GMAT", href: "/prepa-sat-gmat" },
      { label: "Commerce SESAME & ACCÈS", href: "/prepa-concours-sesame-acces" },
      { label: "Commerce ENCG & ISCAE", href: "/prepa-concours-encg-iscae" },
      { label: "Ingé Avenir – Geipi – Puissance Alpha", href: "/prepa-concours-avenir-geipi-puissance-alpha" },
      { label: "Ingé UM6P", href: "/prepa-concours-um6p" },
      { label: "Médecine Maroc", href: "/prepa-medecine-maroc" },
      { label: "Médecine Belgique", href: "/prepa-medecine-belgique" },
      { label: "Sciences Po", href: "/prepa-sciences-po" },
      { label: "Architecture ENA", href: "/prepa-architecture-ena" },
    ],
  },
  {
    name: "CERTIFICATIONS DE LANGUES",
    href: "/certifications",
    subItems: [
      { label: "IELTS & TOEFL", href: "/certifications/ielts-toefl" },
      { label: "TCF & DALF", href: "/certifications/tcf-dalf" },
      { label: "DELE", href: "/certifications/dele" },
    ],
  },
  {
    name: "ADMIN&LOGEMENT",
    href: "/admin-logement",
    subItems: [
      { label: "Démarches administratives", href: "/admin-logement/demarches" },
      { label: "Logement étudiant", href: "/admin-logement/logement" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      {/* HEADER I - Top Bar */}
      <div className="bg-brand-darkblue text-white font-medium px-4 lg:px-6">
        {/* Mobile top bar */}
        <div className="sm:hidden flex items-center justify-between py-2.5">
          <a href="tel:0669495996" className="flex items-center text-xs hover:text-brand-teal transition">
            <Phone size={14} className="mr-1.5" /> 0669-495996
          </a>
          <Link to="/contact" className="bg-brand-teal px-3 py-1.5 rounded text-white font-bold uppercase tracking-wider text-[10px]">
            Réserver un RDV
          </Link>
          <div className="flex items-center space-x-2.5">
            <a href="https://www.facebook.com/studassistmaroc" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition"><Facebook size={14} /></a>
            <a href="https://www.instagram.com/studassistmaroc" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition"><Instagram size={14} /></a>
            <a href="https://www.linkedin.com/company/studassist" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition"><Linkedin size={14} /></a>
          </div>
        </div>
        {/* Desktop top bar */}
        <div className="hidden sm:flex container mx-auto justify-between items-center gap-3 py-3 lg:py-4 text-sm">
          <div className="flex items-center space-x-5 lg:space-x-6">
            <a href="tel:0669495996" className="flex items-center hover:text-brand-teal transition">
              <Phone size={16} className="mr-1.5 lg:mr-2" /> 0669-495996 | 0664-779093
            </a>
            <Link to="/contact" className="bg-brand-teal px-4 py-1.5 rounded text-white font-bold uppercase tracking-wider text-xs lg:text-sm">
              Réserver une séance découverte
            </Link>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/qui-sommes-nous" className="hover:text-brand-teal transition">Qui sommes-nous</Link>
              <Link to="/nous-rejoindre" className="hover:text-brand-teal transition">Nous rejoindre</Link>
            </div>
            <Link to="/contact#centres" className="flex items-center hover:text-brand-teal transition">
              <MapPin size={16} className="mr-1.5 text-brand-teal font-bold" /> Nos centres
            </Link>
            <div className="flex items-center space-x-3 lg:ml-4 lg:border-l lg:border-white/20 lg:pl-4">
              <a href="https://www.facebook.com/studassistmaroc" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/studassistmaroc" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition"><Instagram size={16} /></a>
              <a href="https://www.linkedin.com/company/studassist" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition"><Linkedin size={16} /></a>
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

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 ml-8 xl:ml-12">
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
                      {item.subItems.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className="block px-6 py-2.5 text-xs font-semibold text-gray-600 hover:bg-brand-light hover:text-brand-teal transition"
                          >
                            {sub.label}
                          </Link>
                      ))}
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
            className="lg:hidden bg-white border-b border-gray-100 shadow-lg overflow-y-auto max-h-[calc(100vh-120px)]"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-5">
              {NAV_ITEMS.map((item) => (
                <div key={item.name} className="flex flex-col space-y-2">
                  <Link 
                    to={item.href} 
                    className="font-bold text-sm text-brand-darkblue uppercase tracking-wide"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="pl-4 flex flex-col space-y-1.5 border-l-2 border-brand-teal/20">
                    {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="text-sm text-gray-600 hover:text-brand-teal transition py-0.5"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-5 border-t border-gray-200 flex flex-col space-y-3">
                <Link to="/contact" className="text-center bg-brand-teal text-white py-3.5 rounded-full font-bold text-sm uppercase tracking-wide" onClick={() => setIsOpen(false)}>
                  Réserver ma séance découverte
                </Link>
                <Link to="/contact#centres" className="text-center bg-brand-darkblue text-white py-3 rounded-full font-bold text-sm" onClick={() => setIsOpen(false)}>
                  Où nous trouver
                </Link>
              </div>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-center space-x-5">
                <a href="https://www.facebook.com/studassistmaroc" target="_blank" rel="noopener noreferrer" className="text-brand-darkblue hover:text-brand-teal transition"><Facebook size={20} /></a>
                <a href="https://www.instagram.com/studassistmaroc" target="_blank" rel="noopener noreferrer" className="text-brand-darkblue hover:text-brand-teal transition"><Instagram size={20} /></a>
                <a href="https://www.linkedin.com/company/studassist" target="_blank" rel="noopener noreferrer" className="text-brand-darkblue hover:text-brand-teal transition"><Linkedin size={20} /></a>
              </div>
              <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                <Link to="/qui-sommes-nous" className="hover:text-brand-teal transition" onClick={() => setIsOpen(false)}>Qui sommes-nous</Link>
                <span>•</span>
                <Link to="/nous-rejoindre" className="hover:text-brand-teal transition" onClick={() => setIsOpen(false)}>Nous rejoindre</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
