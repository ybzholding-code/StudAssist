import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
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
    title: "Cabinet",
    links: [
      { label: "Qui sommes-nous", to: "/qui-sommes-nous" },
      { label: "Notre méthode", to: "/qui-sommes-nous#methode" },
      { label: "Nous rejoindre", to: "/nous-rejoindre" },
      { label: "Nos centres", to: "/contact" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sa-navy text-white relative">
      {/* ============ MAIN ============ */}
      <div className="container mx-auto px-6 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <Logo variant="light" height={44} />
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
                <a href="tel:+212500000000" className="hover:text-white transition-colors">
                  +212 5XX XX XX XX
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
                <span>Casablanca · Rabat · Marrakech</span>
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

          {/* Call to action card */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-7">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-sa-green mb-3">
                Passez à l'action
              </h4>
              <p className="font-display text-2xl lg:text-[26px] font-extrabold leading-tight mb-3">
                Prêt à construire <span className="sa-wavy sa-wavy-yellow">votre réussite</span> ?
              </p>
              <p className="text-sm text-white/65 leading-relaxed mb-5">
                Réservez votre séance découverte avec un conseiller STUDASSIST — gratuit, sans
                engagement, 30 minutes pour cadrer votre projet.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sa-pink hover:bg-sa-pink/90 text-white font-semibold text-[13.5px] transition-colors"
              >
                Réserver ma séance <Send size={14} />
              </Link>
              <div className="mt-5 flex items-center gap-2 text-[11px] text-white/50">
                <ShieldCheck size={13} className="text-sa-green" />
                <span>Conseiller dédié · Réponse sous 48 h</span>
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
