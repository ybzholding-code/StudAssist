import { Rocket, Target, Globe, Stethoscope, Building2, Compass } from "@/src/components/ui/icons";
import ServicePage from "../components/ServicePage";
import { buildFaq } from "../data/faq";

export default function PrepasConcours() {
  return (
    <ServicePage
      eyebrow="Prépas concours"
      title={
        <>
          Intégrer les <span className="sa-gradient-text">meilleures écoles</span><br />
          au Maroc et à l'international.
        </>
      }
      intro="Sésame, Accès, ENCG, ISCAE, écoles d'ingénieurs, médecine, architecture, Sciences-Po : nous préparons chaque étudiant à viser haut — avec une stratégie, une méthode et un coaching adaptés."
      heroImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80"
      accent="pink"
      highlights={[
        { value: "20+", label: "Destinations" },
        { value: "85%", label: "Taux d'admission" },
        { value: "250+", label: "Admis dans le top 10" },
      ]}
      modules={[
        {
          icon: <Building2 size={22} />,
          title: "Écoles de commerce",
          description: "Sésame, Accès, ENCG, ISCAE : raisonnement logique, langues, synthèse et entretiens.",
          points: ["Concours post-bac & post-prépa", "Entretiens de motivation", "Dossiers de candidature"],
        },
        {
          icon: <Rocket size={22} />,
          title: "Écoles d'ingénieurs",
          description: "GEIPI, Avenir, Puissance Alpha, UM6P, CPGE : maths, physique, logique à haut niveau.",
          points: ["Programmes intensifs", "Entraînement calibré", "Suivi individuel"],
        },
        {
          icon: <Stethoscope size={22} />,
          title: "Médecine — Maroc & Belgique",
          description: "Préparation au TSA, tests d'orientation et examens d'entrée des facultés de médecine.",
          points: ["Biologie, chimie, raisonnement", "Tests blancs chronométrés", "Coaching stress"],
        },
        {
          icon: <Target size={22} />,
          title: "SAT & GMAT",
          description: "Préparation structurée aux tests standardisés américains, requis pour les universités du top mondial.",
          points: ["Math & Verbal", "Pratique ciblée", "Simulations officielles"],
        },
        {
          icon: <Globe size={22} />,
          title: "Sciences Po & écoles françaises",
          description: "Écrits, dossier Parcoursup, oral : un accompagnement complet pour les filières sélectives.",
          points: ["Méthodologie écrite", "Dossier et projet", "Entretien jury"],
        },
        {
          icon: <Compass size={22} />,
          title: "Architecture & ENA",
          description: "Concours d'écoles d'architecture : composition, culture, entretien et portfolio.",
          points: ["Culture archi & arts", "Dessin & composition", "Entretien portfolio"],
        },
      ]}
      whyPoints={[
        { title: "Stratégie de concours", body: "Une feuille de route personnalisée combinant choix d'écoles, calendrier et priorisation des efforts." },
        { title: "Professeurs spécialisés concours", body: "Des intervenants qui corrigent, coachent et préparent aux spécificités de chaque concours." },
        { title: "Dossier et entretiens", body: "Un coaching complet pour construire un dossier percutant et maîtriser l'entretien de motivation." },
        { title: "Réseau & insight", body: "L'accès à des alumni et retours terrain d'étudiants déjà admis dans les meilleures écoles." },
      ]}
      modulesTitle="Préparations aux concours et grandes écoles"
      faqTitle="Prépas Concours : vos questions"
      faqItems={buildFaq("concours", "orientation")}
    />
  );
}
