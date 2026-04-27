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
import WhatsAppButton from "./components/ui/WhatsAppButton";
import DecorativeBackdrop from "./components/DecorativeBackdrop";

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
      <DecorativeBackdrop />
      <div className="relative z-10 flex flex-col min-h-screen">
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
            {/* Fallback to Home for demo purposes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
