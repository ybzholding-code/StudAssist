import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationMaster() {
  return (
    <OrientationLevelPage
      eyebrow="Post Bac+3 · Master"
      accent="navy"
      title={<>Orientation <span className="text-brand-teal">Master</span></>}
      subtitle="Stratégie d'admission en Master — au Maroc et à l'international."
      intro={[
        "Après un Bac+3, il s'agit de définir une spécialisation et intégrer un programme aligné avec vos ambitions.",
        "STUDASSIST structure votre projet Master de A à Z : profiling, candidatures, concours et admissions.",
      ]}
      heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Les enjeux en Master",
        lead: "Des démarches complexes qui nécessitent méthode et stratégie.",
        bullets: [
          "Spécialisation cohérente avec le projet pro",
          "Sélection rigoureuse des programmes",
          "Dossiers exigeants et différenciants",
          "Concours, certifications et entretiens",
        ],
      }}

      sections={[
        {
          title: "Accompagnement centré sur l'étudiant",
          paragraphs: [
            "Relation directe avec l'étudiant (présentiel ou visio), fondée sur l'autonomie et la clarté des objectifs.",
          ],
        },
        {
          title: "Analyse de profil et short-list",
          paragraphs: [
            "Cursus, expériences, compétences et aspirations — pour une stratégie réaliste et ambitieuse.",
          ],
          callout: "Une sélection pensée comme une stratégie d'admission, pas une liste générique.",
        },
        {
          title: "Candidatures optimisées",
          bullets: [
            "Structuration du projet académique",
            "Dossiers, lettres de motivation et CV",
            "Préparation entretiens (simulations)",
          ],
          callout: "Des dossiers solides mettant en valeur cohérence et potentiel.",
        },
        {
          title: "Concours et certifications",
          paragraphs: [
            "GMAT, TAGE MAGE, TOEFL, IELTS — préparations adaptées et intégrées au planning.",
          ],
        },
        {
          title: "Expertise internationale (+25 destinations)",
          paragraphs: [
            "Procédures plateformes et hors plateformes, démarches administratives et installation.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse ce programme ?",
        groups: [
          {
            title: "Étudiants Bac+3",
            bullets: [
              "Intégrer un Master sélectif",
              "Clarifier le projet professionnel",
              "Étudier à l'international",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi STUDASSIST pour le Master ?",
        bullets: [
          "Short-list de programmes personnalisée",
          "Accompagnement complet aux candidatures",
          "Préparation concours et certifications",
          "Coaching entretiens de personnalité",
          "Expertise Maroc & international",
        ],
      }}

      ctaBanner={{
        title: "Maximisez vos chances d'admission en Master.",
        body: "Structurez votre projet et intégrez les programmes les plus sélectifs.",
      }}

      prev={{ label: "Orientation en Terminale", to: "/orientation/terminale" }}
      next={{ label: "Réorientation académique", to: "/orientation/reorientation" }}
    />
  );
}
