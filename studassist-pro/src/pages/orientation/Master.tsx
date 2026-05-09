import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationMaster() {
  return (
    <OrientationLevelPage
      eyebrow="Post Bac+3 · Master"
      accent="navy"
      title={<>Orientation <span className="text-brand-teal">Master</span></>}
      subtitle="Stratégie d'admission en Master — au Maroc et à l'international."
      intro={[
        "Le choix d'un Master est une étape déterminante dans le parcours académique et professionnel. Après un Bac+3, les enjeux évoluent : il s'agit de définir une spécialisation, consolider un positionnement de carrière et intégrer un programme aligné avec vos ambitions.",
        "Chez STUDASSIST, nous accompagnons les étudiants titulaires d'un Bac+3 dans une démarche d'orientation Master structurée, stratégique et personnalisée, au Maroc comme à l'international.",
      ]}
      heroImage="https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Les enjeux de l'orientation Master",
        lead: "Sans accompagnement, les démarches d'admission en Master peuvent devenir complexes, chronophages et parfois décourageantes.",
        bullets: [
          "Un choix de spécialisation cohérent avec le projet professionnel",
          "Une sélection rigoureuse des programmes adaptés au profil",
          "La constitution de dossiers exigeants et différenciants",
          "La réussite des concours, certifications et entretiens de personnalité",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/school.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      sections={[
        {
          title: "Un accompagnement centré sur l'étudiant",
          paragraphs: [
            "Contrairement aux parcours lycée, l'orientation Master s'adresse à des étudiants majeurs. L'accompagnement est mené directement avec l'étudiant, en présentiel ou à distance, dans une relation professionnelle fondée sur l'autonomie, la responsabilité et la clarté des objectifs.",
            "L'implication parentale est volontairement plus limitée, afin de laisser à l'étudiant toute sa place dans la construction de son projet.",
          ],
        },
        {
          title: "Analyse du profil et short-list personnalisée",
          paragraphs: [
            "Chaque parcours débute par une analyse approfondie du profil académique et personnel : cursus, expériences professionnelles, compétences, centres d'intérêt, contraintes et aspirations. Cette phase permet de définir une stratégie réaliste et ambitieuse.",
            "Nous proposons ensuite une short-list de Masters adaptée au profil de l'étudiant, à ses contraintes et aux exigences des établissements ciblés.",
          ],
          callout: "Chaque sélection est pensée comme une stratégie d'admission, pas une liste générique de programmes.",
        },
        {
          title: "Accompagnement complet aux candidatures",
          paragraphs: [
            "STUDASSIST accompagne l'étudiant tout au long de la phase de candidature : structuration du projet académique, constitution des dossiers, rédaction des lettres de motivation et CV, et préparation aux entretiens de personnalité.",
          ],
          bullets: [
            "Dossiers solides mettant en valeur la cohérence du parcours",
            "Personal statements et lettres adaptés à chaque programme",
            "Simulations d'entretiens et coaching sur la posture",
          ],
          callout: "L'objectif : des candidatures différenciantes qui révèlent la maturité du projet et le potentiel du candidat.",
        },
        {
          title: "Préparation aux concours et certifications",
          paragraphs: [
            "Lorsque requis, nous intégrons la préparation aux tests (GMAT, TAGE MAGE) et aux certifications de langues (TOEFL, IELTS, TOEIC). Ces préparations sont adaptées au niveau de départ de l'étudiant et intégrées dans un planning réaliste en lien avec les échéances.",
          ],
        },
        {
          title: "Expertise internationale (+25 destinations)",
          paragraphs: [
            "Pour les étudiants souhaitant poursuivre à l'étranger, nous accompagnons les projets vers plus de 25 destinations. Notre maîtrise des procédures de candidatures — sur plateformes officielles comme hors plateformes — assure un suivi complet, de la sélection des programmes jusqu'à l'installation.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse ce programme ?",
        groups: [
          {
            title: "Étudiants Bac+3",
            bullets: [
              "Qui souhaitent intégrer un Master sélectif dans leur domaine",
              "Qui veulent clarifier leur projet professionnel avant de se spécialiser",
              "Qui envisagent de poursuivre leurs études à l'international",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi STUDASSIST pour le Master ?",
        bullets: [
          "Une short-list de programmes personnalisée et stratégique",
          "Un accompagnement complet de A à Z aux candidatures",
          "Une préparation aux concours et certifications intégrée",
          "Un coaching aux entretiens de personnalité",
          "Une expertise Maroc & international couvrant +25 destinations",
          "Un accompagnement flexible, en présentiel ou à distance",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/school.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/medal.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/chat.png",
        ],
      }}

      ctaBanner={{
        title: "Maximisez vos chances d'admission en Master.",
        body: "Vous êtes étudiant en Bac+3 et souhaitez structurer votre projet Master ? Prenons rendez-vous pour évaluer votre profil.",
      }}

      prev={{ label: "Orientation en Terminale", to: "/orientation/terminale" }}
      next={{ label: "Réorientation académique", to: "/orientation/reorientation" }}
    />
  );
}
