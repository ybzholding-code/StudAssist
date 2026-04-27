import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationMaster() {
  return (
    <OrientationLevelPage
      eyebrow="Post Bac+3"
      accent="navy"
      title={<>Orientation <span className="sa-gradient-text">Master</span>.</>}
      subtitle="Construire une stratégie d'admission cohérente après un Bac+3."
      intro={[
        "Le choix d'un Master est une étape déterminante dans le parcours académique et professionnel. Après un Bac+3, les enjeux évoluent : il ne s'agit plus seulement de choisir une formation, mais de définir une spécialisation, de consolider un positionnement de carrière et d'intégrer un programme aligné avec ses ambitions.",
        "Chez STUDASSIST, nous accompagnons les étudiants titulaires d'un Bac+3 dans une démarche d'orientation Master structurée, stratégique et personnalisée, au Maroc comme à l'international.",
      ]}
      heroImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Les enjeux de l'orientation en Master",
        lead: "Sans accompagnement, ces démarches peuvent devenir complexes, chronophages et parfois décourageantes.",
        bullets: [
          "Un choix de spécialisation cohérent avec le projet professionnel",
          "Une sélection rigoureuse des programmes",
          "La constitution de dossiers exigeants",
          "La préparation aux concours et certifications",
          "La réussite des entretiens de personnalité",
        ],
      }}

      sections={[
        {
          title: "Un accompagnement centré sur l'étudiant",
          paragraphs: [
            "Contrairement aux parcours lycée, l'orientation Master s'adresse à des étudiants majeurs. L'accompagnement est donc mené directement avec l'étudiant, en présentiel ou à distance, dans une relation professionnelle fondée sur l'autonomie, la responsabilité et la clarté des objectifs.",
          ],
          callout: "L'implication parentale est volontairement plus limitée, afin de laisser à l'étudiant toute sa place dans la construction de son projet.",
        },
        {
          title: "Analyse du profil et compréhension des besoins",
          paragraphs: [
            "Chaque parcours débute par une analyse approfondie du profil académique et personnel de l'étudiant. Nous étudions son cursus, ses expériences, ses compétences, ses centres d'intérêts, ses contraintes et ses aspirations professionnelles afin de construire une vision claire de ses objectifs.",
            "Cette phase nous permet de définir une stratégie réaliste et ambitieuse, parfaitement alignée avec son projet de carrière.",
          ],
        },
        {
          title: "Sélection de programmes adaptés",
          paragraphs: [
            "À partir de cette analyse, nous proposons une short-list de Masters adaptée au profil de l'étudiant, à ses contraintes géographiques ou financières, ainsi qu'aux exigences des établissements.",
          ],
          callout: "Chaque sélection est pensée comme une véritable stratégie d'admission, visant à maximiser les chances d'intégration dans des programmes cohérents avec le parcours et les ambitions de l'étudiant.",
        },
        {
          title: "Accompagnement complet aux candidatures",
          paragraphs: [
            "STUDASSIST accompagne l'étudiant tout au long de la phase de candidature. Nous travaillons ensemble sur :",
          ],
          bullets: [
            "La structuration du projet académique",
            "La constitution des dossiers",
            "La rédaction des lettres de motivation",
            "La préparation des CV et formulaires",
          ],
          callout: "Notre objectif : créer des dossiers solides, clairs et différenciants, mettant en valeur la cohérence du parcours, la maturité du projet et le potentiel du candidat.",
        },
        {
          title: "Préparation aux concours, certifications et entretiens",
          paragraphs: [
            "Lorsque requis, nous intégrons la préparation aux concours et tests tels que le GMAT ou le TAGE MAGE, ainsi qu'aux certifications de langues (TOEFL, IELTS, TOEIC). Ces préparations sont adaptées au niveau de départ de l'étudiant et intégrées dans un planning réaliste, en lien avec les échéances de candidature.",
            "Nous préparons également les étudiants aux entretiens de personnalité à travers des simulations, un travail sur le discours de motivation et la structuration du projet professionnel, afin de renforcer leur assurance, leur impact et leur posture de communication.",
          ],
        },
        {
          title: "Une expertise internationale",
          paragraphs: [
            "Pour les étudiants souhaitant poursuivre leurs études à l'étranger, STUDASSIST accompagne les projets vers plus de 25 destinations. Grâce à notre expérience, nous maîtrisons les procédures de candidatures, sur plateformes officielles comme hors plateformes, et assurons un suivi complet, de la sélection des programmes jusqu'aux démarches administratives et à l'installation si nécessaire.",
          ],
        },
      ]}

      audience={{
        title: "À qui s'adresse l'orientation Master ?",
        groups: [
          {
            title: "Étudiants Bac+3 qui…",
            bullets: [
              "Souhaitent intégrer un Master sélectif",
              "Veulent clarifier leur projet professionnel",
              "Cherchent à se spécialiser dans un domaine précis",
              "Envisagent de poursuivre leurs études à l'international",
              "Bénéficient d'un accompagnement structuré et personnalisé",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour votre orientation Master ?",
        bullets: [
          "Une analyse approfondie du profil",
          "Une short-list de programmes personnalisée",
          "Un accompagnement complet aux candidatures",
          "Une préparation aux concours et certifications",
          "Un coaching aux entretiens",
          "Une expertise Maroc & international",
          "Un suivi humain, structuré et orienté résultats",
          "Un accompagnement flexible, en présentiel ou à distance en visioconférence",
        ],
      }}

      ctaBanner={{
        title: "Maximisez vos chances d'admission en Master.",
        body: "Vous souhaitez structurer votre projet de Master et maximiser vos chances d'admission dans les programmes les plus sélectifs ?",
      }}

      prev={{ label: "Orientation en Terminale", to: "/orientation/terminale" }}
      next={{ label: "Réorientation académique", to: "/orientation/reorientation" }}
    />
  );
}
