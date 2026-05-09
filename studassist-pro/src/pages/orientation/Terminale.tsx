import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationTerminale() {
  return (
    <OrientationLevelPage
      eyebrow="Lycée · Terminale"
      accent="pink"
      title={<>Orientation scolaire <span className="text-brand-teal">en Terminale</span></>}
      subtitle="Projet post-bac ambitieux, candidatures optimisées et admissions sécurisées."
      intro={[
        "La Terminale marque l'année décisive : les choix deviennent concrets, les candidatures s'organisent et se dessinent les premières trajectoires académiques et professionnelles de l'élève.",
        "Chez STUDASSIST, nous accompagnons les élèves de Terminale et leurs familles dans une démarche d'orientation globale et stratégique, pour transformer cette période charnière en véritable levier de réussite — au Maroc comme à l'international.",
      ]}
      heroImage="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1200&q=80"

      enjeux={{
        title: "Les enjeux de la Terminale",
        lead: "S'orienter ne consiste pas simplement à choisir une formation. Il s'agit de bâtir un projet d'avenir cohérent, différenciant et parfaitement préparé.",
        bullets: [
          "Définir un projet d'études ambitieux et aligné avec le profil",
          "Construire un dossier solide et différenciant pour les formations sélectives",
          "Maîtriser des procédures de candidatures de plus en plus complexes",
          "Éviter le stress, les incertitudes et les décisions prises par défaut",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
        ],
      }}

      sections={[
        {
          title: "Une approche globale de l'orientation post-bac",
          paragraphs: [
            "Chez STUDASSIST, l'orientation est pensée comme un projet à part entière, piloté avec méthode et rigueur. Notre accompagnement combine analyse approfondie du profil, stratégie académique, construction des dossiers, préparation aux entretiens et suivi complet des admissions.",
          ],
          bullets: [
            "Analyse approfondie du profil académique et personnel",
            "Stratégie de candidatures personnalisée et cohérente",
            "Construction et optimisation des dossiers d'admission",
            "Préparation aux entretiens via des simulations filmées",
            "Suivi complet des admissions et ajustement stratégique",
          ],
        },
        {
          title: "Profiling et construction du projet sur mesure",
          paragraphs: [
            "L'accompagnement débute par un entretien familial pour aligner visions et objectifs, suivi d'entretiens individuels de profiling analysant le parcours, les méthodes de travail, la personnalité et les ambitions.",
            "À partir de cette analyse, nous construisons une short-list d'écoles cohérente et ambitieuse et une stratégie de candidatures personnalisée adaptée au profil de l'élève.",
          ],
          callout: "Un véritable plan d'admission — pas une simple accumulation de choix sur une plateforme.",
        },
        {
          title: "Accompagnement complet aux candidatures",
          paragraphs: [
            "Nous accompagnons chaque étape du processus de candidature : constitution et optimisation des dossiers, rédaction des lettres de motivation et essays, préparation des CV, envoi des candidatures et préparation des entretiens d'admission.",
          ],
          bullets: [
            "Lettres de motivation et personal statements percutants",
            "Entretiens préparés via mises en situation et simulations filmées",
            "Suivi des réponses et ajustement de la stratégie en temps réel",
          ],
        },
        {
          title: "Soutien académique aligné avec le projet",
          paragraphs: [
            "Lorsque nécessaire, nous intégrons du soutien scolaire ciblé, des préparations aux concours pour les filières sélectives et des certifications de langues anticipées selon les exigences des établissements visés.",
            "L'objectif : aligner le niveau réel de l'élève avec les ambitions de son projet post-bac.",
          ],
        },
        {
          title: "Expertise internationale éprouvée (+25 destinations)",
          paragraphs: [
            "Fort de 7 années d'expérience, STUDASSIST accompagne les projets d'études à l'étranger vers plus de 25 destinations. Nous maîtrisons les procédures sur plateformes officielles comme hors plateformes, et assurons un suivi complet jusqu'aux démarches administratives et à l'installation.",
          ],
          callout: "Chaque projet international est personnalisé selon le profil de l'élève et les exigences propres à chaque destination.",
        },
      ]}

      audience={{
        title: "À qui s'adresse ce programme ?",
        groups: [
          {
            title: "Élèves de Terminale",
            bullets: [
              "Qui visent des filières sélectives au Maroc ou à l'international",
              "Qui souhaitent un accompagnement stratégique pour leurs candidatures",
              "Qui veulent sécuriser leur parcours avec une méthodologie éprouvée",
            ],
          },
          {
            title: "Parents",
            bullets: [
              "Qui souhaitent être guidés face à la complexité des procédures post-bac",
              "Qui veulent gagner du temps et réduire la charge mentale liée aux démarches",
              "Qui recherchent une expertise fiable pour prendre les bonnes décisions",
            ],
          },
        ],
      }}

      whyChoose={{
        title: "Pourquoi STUDASSIST en Terminale ?",
        bullets: [
          "Une stratégie de candidature personnalisée et pilotée de A à Z",
          "Une expertise Maroc & international couvrant +25 destinations",
          "Une maîtrise complète des procédures plateformes et hors plateforme",
          "Un soutien scolaire, concours et langues intégrés au parcours",
          "Un accompagnement humain, transparent et orienté résultats",
          "Un gain de temps considérable pour l'élève et sa famille",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/handshake.png",
          "https://img.icons8.com/3d-fluency/94/calendar.png",
        ],
      }}

      ctaBanner={{
        title: "Construisons ensemble un projet post-bac ambitieux.",
        body: "Votre enfant est en Terminale ? Premier rendez-vous sans engagement pour évaluer le profil et tracer la stratégie d'admission.",
      }}

      prev={{ label: "Orientation en Première", to: "/orientation/premiere" }}
      next={{ label: "Orientation Master", to: "/orientation/master" }}
    />
  );
}
