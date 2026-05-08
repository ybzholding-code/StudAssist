import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationTerminale() {
  return (
    <OrientationLevelPage
      eyebrow="Lycée · Terminale"
      accent="pink"
      title={<>Orientation scolaire <span className="text-brand-teal">en Terminale</span></>}
      subtitle="Projet post-bac ambitieux, candidatures optimisées et admissions sécurisées."
      intro={[
        "La Terminale est l'année des choix concrets : candidatures, dossiers, admissions.",
        "STUDASSIST transforme cette période charnière en levier de réussite — Maroc et international.",
      ]}
      heroImage="https://images.unsplash.com/photo-1541339907198-e08759dfc3f0?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Les enjeux en Terminale",
        lead: "S'orienter, c'est bâtir un projet d'avenir cohérent — pas simplement cocher des cases.",
        bullets: [
          "Définir un projet post-bac ambitieux et réaliste",
          "Construire un dossier solide et différenciant",
          "Maîtriser les procédures de candidatures complexes",
          "Éviter stress et décisions par défaut",
        ],
      }}

      sections={[
        {
          title: "Approche globale",
          bullets: [
            "Analyse approfondie du profil",
            "Stratégie académique personnalisée",
            "Construction des dossiers de candidature",
            "Préparation aux entretiens d'admission",
            "Suivi complet des admissions",
          ],
        },
        {
          title: "Profiling et projet sur mesure",
          paragraphs: [
            "Entretien familial + profiling individuel pour un portrait complet au-delà des notes.",
          ],
          bullets: [
            "Short-list d'écoles cohérente et ambitieuse",
            "Stratégie de candidatures personnalisée",
          ],
          callout: "Un véritable plan d'admission — pas une accumulation de choix.",
        },
        {
          title: "Candidatures et admissions",
          bullets: [
            "Optimisation des dossiers et lettres de motivation",
            "Préparation des entretiens (simulations filmées)",
            "Suivi des réponses et ajustement stratégique",
          ],
        },
        {
          title: "Soutien académique intégré",
          paragraphs: [
            "Soutien scolaire, préparation concours et certifications de langues — alignés avec le projet.",
          ],
        },
        {
          title: "Expertise internationale (+25 destinations)",
          paragraphs: [
            "7 ans d'expérience, candidatures plateformes et hors plateformes, démarches administratives et installation.",
          ],
          callout: "Chaque projet international est personnalisé selon le profil et la destination.",
        },
      ]}

      audience={{
        title: "À qui s'adresse ce programme ?",
        groups: [
          {
            title: "Élèves de Terminale",
            bullets: [
              "Visent des filières sélectives",
              "Souhaitent étudier au Maroc ou à l'international",
              "Recherchent un accompagnement stratégique",
            ],
          },
          {
            title: "Parents",
            bullets: [
              "Être guidés face à la complexité du post-bac",
              "Gagner du temps sur les démarches",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi STUDASSIST en Terminale ?",
        bullets: [
          "Stratégie de candidature personnalisée",
          "Expertise Maroc & international (+25 destinations)",
          "Maîtrise des procédures plateformes et hors plateforme",
          "Soutien scolaire, concours et langues intégrés",
          "Accompagnement humain et transparent",
        ],
      }}

      ctaBanner={{
        title: "Construisons ensemble un projet post-bac ambitieux.",
        body: "Premier rendez-vous sans engagement pour évaluer le profil et tracer la stratégie.",
      }}

      prev={{ label: "Orientation en Première", to: "/orientation/premiere" }}
      next={{ label: "Orientation Master", to: "/orientation/master" }}
    />
  );
}
