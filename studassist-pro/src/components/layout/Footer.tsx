import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "@/src/components/ui/icons";
import Logo from "../Logo";

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Programmes",
    links: [
      { label: "Orientation scolaire", to: "/orientation-scolaire" },
      { label: "Soutien scolaire", to: "/soutien-scolaire" },
      { label: "Prépas Bac", to: "/prepas-bac" },
      { label: "Prépas Concours", to: "/prepas-concours" },
      { label: "Certifications de langues", to: "/certifications" },
      { label: "Admin & logement", to: "/admin-logement" },
    ],
  },
  {
    title: "Prépas Concours",
    links: [
      { label: "SAT / GMAT", to: "/prepa-sat-gmat" },
      { label: "Commerce SESAME & ACCÈS", to: "/prepa-concours-sesame-acces" },
      { label: "Commerce ENCG & ISCAE", to: "/prepa-concours-encg-iscae" },
      { label: "Ingé Avenir – Geipi – Puissance Alpha", to: "/prepa-concours-avenir-geipi-puissance-alpha" },
      { label: "Ingé UM6P", to: "/prepa-concours-um6p" },
      { label: "Médecine Maroc", to: "/prepa-medecine-maroc" },
      { label: "Médecine Belgique", to: "/prepa-medecine-belgique" },
      { label: "Sciences Po", to: "/prepa-sciences-po" },
      { label: "Architecture ENA", to: "/prepa-architecture-ena" },
    ],
  },
  {
    title: "Cabinet",
    links: [
      { label: "Qui sommes-nous", to: "/qui-sommes-nous" },
      { label: "Notre méthode", to: "/qui-sommes-nous#methode" },
      { label: "Nous rejoindre", to: "/nous-rejoindre" },
      { label: "Nos centres", to: "/contact#centres" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/studassist", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/studassistmaroc", label: "Instagram" },
  { icon: Facebook, href: "https://web.facebook.com/studassist.fr", label: "Facebook" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sa-navy text-white relative">
      {/* ============ MAIN ============ */}
      <div className="container mx-auto px-6 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Brand column */}
          <div className="lg:col-span-3 space-y-6">
            <Link to="/" className="inline-block">
              <Logo variant="light" height={80} />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Cabinet de conseil dédié à l'élève et à l'étudiant, spécialisé dans le soutien
              scolaire, l'orientation et la préparation aux études supérieures au Maroc et à
              l'international.
            </p>

            {/* Contact lines */}
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-sa-green mt-0.5 shrink-0" />
                <a href="tel:0669495996" className="hover:text-white transition-colors">
                  0669 495 996 | 0664 779 093
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-sa-green mt-0.5 shrink-0" />
                <a
                  href="mailto:contact@studassist.ma"
                  className="hover:text-white transition-colors"
                >
                  contact@studassist.ma
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sa-green mt-0.5 shrink-0" />
                <span>Casablanca (Oasis) · Bouskoura Ville Verte</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-sa-green hover:border-sa-green hover:text-white transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-white/65 hover:text-sa-green transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Google Maps + Centre Info */}
          <div className="lg:col-span-3">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              <div className="relative">
                <iframe
                  title="Centre de l'Oasis - STUDASSIST"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8!2d-7.5574!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s15+Rue+des+Ramiers%2C+Dar-el-Beida+20000!5e0!3m2!1sfr!2sma!4v1700000000000"
                  className="w-full h-[160px] border-0 rounded-t-2xl opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href="https://maps.google.com/?q=15+Rue+des+Ramiers,+Casablanca+20000,+Maroc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 inline-flex items-center gap-1.5 bg-sa-navy/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10 hover:bg-sa-green transition-colors"
                >
                  <MapPin size={11} />
                  Ouvrir dans Maps
                </a>
              </div>
              <div className="p-5">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-sa-green mb-3">
                  Centre de l'Oasis
                </h4>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-[13px] text-white/80">
                    <MapPin size={14} className="text-sa-green mt-0.5 shrink-0" />
                    <span>15 Rue des Ramiers, Casablanca 20000, Maroc</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[13px] text-white/80">
                    <Phone size={14} className="text-sa-green mt-0.5 shrink-0" />
                    <span>0669 495 996 | 0664 779 093</span>
                  </li>
                </ul>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-[11px] text-white/50 font-medium">
                    Lun–Ven : 9h–19h · Sam : 9h–17h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ BOTTOM BAR ============ */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {currentYear} STUDASSIST — Tous droits réservés.
          </p>
          <div className="flex items-center gap-x-6 gap-y-2 flex-wrap justify-center text-xs text-white/50">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link to="/confidentialite" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/cgv" className="hover:text-white transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
