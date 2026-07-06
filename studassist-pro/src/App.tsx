/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import OrientationScolaire from "./pages/OrientationScolaire";
import Contact from "./pages/Contact";
import QuiSommesNous from "./pages/QuiSommesNous";
import SoutienScolaire from "./pages/SoutienScolaire";
import PrepasBac from "./pages/PrepasBac";
import PrepasConcours from "./pages/PrepasConcours";
import Certifications from "./pages/Certifications";
import AdminLogement from "./pages/AdminLogement";
import NousRejoindre from "./pages/NousRejoindre";
import OrientationSeconde from "./pages/orientation/Seconde";
import OrientationPremiere from "./pages/orientation/Premiere";
import OrientationTerminale from "./pages/orientation/Terminale";
import OrientationMaster from "./pages/orientation/Master";
import OrientationReorientation from "./pages/orientation/Reorientation";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import StudAssistChat from "./components/ui/StudAssistChat";
import DecorativeBackdrop from "./components/DecorativeBackdrop";
import { Analytics } from "@vercel/analytics/react";

// Soutien Scolaire child pages
import SoutienPrimaire from "./pages/soutien/Primaire";
import SoutienCollege from "./pages/soutien/College";
import SoutienLycee from "./pages/soutien/Lycee";
import SoutienSuperieur from "./pages/soutien/Superieur";
import SoutienStages from "./pages/soutien/Stages";
import SoutienBrevet from "./pages/soutien/Brevet";

// Prépas Bac child pages
import PrepasBacFrancais from "./pages/prepas-bac/Francais";
import PrepasBacSpecialites from "./pages/prepas-bac/Specialites";
import PrepasBacPhilo from "./pages/prepas-bac/Philo";
import PrepasBacGrandOral from "./pages/prepas-bac/GrandOral";

// Prépas Concours child pages
import PrepaSatGmat from "./pages/prepas-concours/SatGmat";
import PrepaConcoursSesameAcces from "./pages/prepas-concours/SesameAcces";
import PrepaConcoursEncgIscae from "./pages/prepas-concours/EncgIscae";
import PrepaConcoursAvenirGeipi from "./pages/prepas-concours/AvenirGeipi";
import PrepaConcoursUm6p from "./pages/prepas-concours/Um6p";
import PrepaMedecineMaroc from "./pages/prepas-concours/MedecineMaroc";
import PrepaMedecineBelgique from "./pages/prepas-concours/MedecineBelgique";
import PrepaSciences from "./pages/prepas-concours/SciencesPo";
import PrepaArchitecture from "./pages/prepas-concours/Architecture";

// Certifications child pages
import CertificationsIelts from "./pages/certifications/IeltsToeicToefl";
import CertificationsTcfDalf from "./pages/certifications/TcfDalf";
import CertificationsDele from "./pages/certifications/Dele";

// Admin & Logement child pages
import AdminDemarches from "./pages/admin-logement/Demarches";
import AdminLogementPage from "./pages/admin-logement/Logement";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative flex flex-col min-h-screen overflow-x-clip">
        <DecorativeBackdrop />
        <div className="relative z-10 flex flex-col flex-grow">
          <Navbar />
        <main className="flex-grow pt-[120px] lg:pt-[140px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/orientation-scolaire" element={<OrientationScolaire />} />
            <Route path="/orientation" element={<OrientationScolaire />} />
            <Route path="/orientation/seconde" element={<OrientationSeconde />} />
            <Route path="/orientation/premiere" element={<OrientationPremiere />} />
            <Route path="/orientation/terminale" element={<OrientationTerminale />} />
            <Route path="/orientation/master" element={<OrientationMaster />} />
            <Route path="/orientation/reorientation" element={<OrientationReorientation />} />
            <Route path="/soutien-scolaire" element={<SoutienScolaire />} />
            <Route path="/soutien" element={<SoutienScolaire />} />
            <Route path="/prepas-bac" element={<PrepasBac />} />
            <Route path="/prepa-bac" element={<PrepasBac />} />
            <Route path="/prepas-concours" element={<PrepasConcours />} />
            <Route path="/concours" element={<PrepasConcours />} />
            <Route path="/expertises" element={<PrepasConcours />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/langues" element={<Certifications />} />
            <Route path="/admin-logement" element={<AdminLogement />} />
            <Route path="/admin" element={<AdminLogement />} />
            <Route path="/nous-rejoindre" element={<NousRejoindre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/centres" element={<Contact />} />
            {/* Blog pages */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            {/* Soutien Scolaire child pages */}
            <Route path="/soutien/primaire" element={<SoutienPrimaire />} />
            <Route path="/soutien/college" element={<SoutienCollege />} />
            <Route path="/soutien/lycee" element={<SoutienLycee />} />
            <Route path="/soutien/superieur" element={<SoutienSuperieur />} />
            <Route path="/soutien/stages" element={<SoutienStages />} />
            <Route path="/soutien/brevet" element={<SoutienBrevet />} />
            {/* Prépas Bac child pages */}
            <Route path="/prepas-bac/francais" element={<PrepasBacFrancais />} />
            <Route path="/prepas-bac/specialites" element={<PrepasBacSpecialites />} />
            <Route path="/prepas-bac/philo" element={<PrepasBacPhilo />} />
            <Route path="/prepas-bac/grand-oral" element={<PrepasBacGrandOral />} />
            {/* Prépas Concours child pages */}
            <Route path="/prepa-sat-gmat" element={<PrepaSatGmat />} />
            <Route path="/prepa-concours-sesame-acces" element={<PrepaConcoursSesameAcces />} />
            <Route path="/prepa-concours-encg-iscae" element={<PrepaConcoursEncgIscae />} />
            <Route path="/prepa-concours-avenir-geipi-puissance-alpha" element={<PrepaConcoursAvenirGeipi />} />
            <Route path="/prepa-concours-um6p" element={<PrepaConcoursUm6p />} />
            <Route path="/prepa-medecine-maroc" element={<PrepaMedecineMaroc />} />
            <Route path="/prepa-medecine-belgique" element={<PrepaMedecineBelgique />} />
            <Route path="/prepa-sciences-po" element={<PrepaSciences />} />
            <Route path="/prepa-architecture-ena" element={<PrepaArchitecture />} />
            {/* Certifications child pages */}
            <Route path="/certifications/ielts-toefl" element={<CertificationsIelts />} />
            <Route path="/certifications/tcf-dalf" element={<CertificationsTcfDalf />} />
            <Route path="/certifications/dele" element={<CertificationsDele />} />
            {/* Admin & Logement child pages */}
            <Route path="/admin-logement/demarches" element={<AdminDemarches />} />
            <Route path="/admin-logement/logement" element={<AdminLogementPage />} />
            {/* Fallback to Home for demo purposes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <StudAssistChat />
      <Analytics />
      </div>
      </div>
    </Router>
  );
}
