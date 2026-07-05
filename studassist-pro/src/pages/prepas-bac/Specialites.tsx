import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "francais", label: "Bac de Français", href: "/prepas-bac/francais" },
  { key: "specialites", label: "Bac de Spécialités", href: "/prepas-bac/specialites" },
  { key: "philo", label: "Bac de Philo", href: "/prepas-bac/philo" },
  { key: "grand-oral", label: "Grand Oral", href: "/prepas-bac/grand-oral" },
];

export default function PrepasBacSpecialites() {
  return (
    <OrientationLevelPage
      eyebrow="PRÉPAS BAC - ÉPREUVES DE SPÉCIALITÉS"
      accent="blue"
      title={<>Prépa Bac – Épreuves de <span className="text-brand-teal">spécialités</span></>}
      subtitle="Performer sur les matières clés et sécuriser son orientation"
      intro={[
        "Les épreuves de spécialités du Baccalauréat occupent une place centrale dans le parcours de Terminale. Avec un coefficient élevé (16 au total), elles constituent le principal levier de performance au Bac et jouent un rôle déterminant dans les candidatures post-bac.",
        "Chez STUDASSIST, nous proposons une préparation structurée, exigeante et orientée résultats, permettant aux élèves de maîtriser les attendus, d'optimiser leurs performances et de renforcer leur dossier académique.",
      ]}
      heroImage="/prepas-bac-new.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 33%"
      heroCtaLabel="Réserver un cours découverte"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur la préparation aux épreuves de spécialités du Bac."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Bac de Spécialités"
      enjeuxEyebrow="Les enjeux des épreuves de spécialités"
      whyChooseEyebrow="Pourquoi choisir STUDASSIST ?"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Un levier de réussite pour le bac et l'accès aux études supérieures",
        lead: "Bien plus qu'un simple examen, les épreuves de spécialités jouent un rôle déterminant dans la réussite au Baccalauréat, l'orientation post-bac et l'accès aux formations sélectives. Elles constituent un véritable levier pour construire un dossier académique solide et cohérent.",
        bullets: [
          "Performance académique: Optimiser sa note au Baccalauréat grâce à des matières à très fort coefficient.",
          "Admissions post-bac: Renforcer son dossier pour les formations sélectives.",
          "Cohérence du parcours: Valoriser son projet d'orientation à travers ses spécialités.",
          "Réussite dans le supérieur: Développer les compétences attendues dans les études post-bac.",
        ],
        icons: [
          "https://img.icons8.com/?size=100&id=OlDzEETWpjI7&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=qZ3IKpKF9Cun&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=1WpD5bksxBe1&format=png&color=000000",
          "https://img.icons8.com/?size=100&id=B0YxODenuYvG&format=png&color=000000",
        ],
      }}

      sections={[
        {
          title: "Le Bac des spécialités, qu'est-ce que c'est ?",
          paragraphs: [
            "Comprendre le fonctionnement des épreuves de spécialités — Le Bac général repose sur un système progressif : les élèves choisissent trois spécialités en Première, puis en conservent deux en Terminale, qui font l'objet des épreuves finales. Ces épreuves ont généralement lieu au mois de mars, afin que les résultats puissent être intégrés dans les dossiers de candidature post-bac, notamment sur Parcoursup. Elles prennent la forme d'épreuves écrites, mobilisant des connaissances approfondies, des capacités d'analyse, un raisonnement structuré et une rédaction claire et rigoureuse.",
            "L'importance du contrôle continu — Au-delà des épreuves finales, le contrôle continu représente une part significative de la note du Baccalauréat. Les résultats obtenus tout au long de l'année — devoirs, évaluations, bulletins scolaires — sont pris en compte à la fois dans la note finale et dans l'analyse du dossier par les établissements post-bac. Cela implique une exigence de régularité et de progression. Chez STUDASSIST, nous accompagnons les élèves dans cette dynamique, afin de maintenir un niveau constant tout au long de l'année.",
            "Un levier déterminant pour l'orientation post-bac — Les spécialités choisies et les résultats obtenus sont directement liés au projet d'orientation. Ils permettent aux établissements d'évaluer le niveau de l'élève dans les matières clés, sa capacité de raisonnement et la cohérence de son profil avec la formation visée. Une performance solide dans les spécialités constitue ainsi un avantage décisif pour accéder aux filières sélectives, au Maroc comme à l'international.",
          ],
        },
        {
          title: "L'approche STUDASSIST dans la préparation des épreuves de spécialités",
          paragraphs: [
            "Une préparation sur mesure, adaptée à chaque spécialité — Chez STUDASSIST, nous adaptons notre accompagnement aux exigences spécifiques de chaque discipline. Nous intervenons notamment sur les spécialités proposées dans les établissements français au Maroc : Mathématiques, Physique-Chimie, SVT, SES, HGGSP, NSI, mais également HLP, LLCER, LLCA, AMC, Sciences de l'Ingénieur ou encore les spécialités artistiques. Chaque matière nécessite une approche spécifique, combinant maîtrise des notions, méthodologie adaptée et entraînement ciblé.",
            "Une méthodologie rigoureuse et progressive — Notre préparation repose sur une progression structurée, pensée pour maximiser les résultats. Les élèves consolident d'abord les notions essentielles, avant de travailler sur des sujets types et des annales. Ils apprennent à adopter les méthodes attendues par les correcteurs et s'entraînent régulièrement en conditions réelles. Cette approche permet de développer des automatismes, d'optimiser la gestion du temps et d'améliorer la précision des réponses.",
            "Une préparation alignée avec le projet d'orientation — Chez STUDASSIST, la préparation aux spécialités s'inscrit dans une logique globale. Nous veillons à aligner les matières travaillées, les objectifs académiques et les exigences des formations visées, afin d'optimiser à la fois les résultats et les opportunités d'admission.",
          ],
        },
        {
          title: "Une préparation adaptée pour chaque profil et encadrée par des enseignants experts",
          paragraphs: [
            "Un format adapté à chaque profil — Les séances sont proposées en petits groupes de 2 à 4 élèves maximum, favorisant un suivi individualisé et une progression rapide. Un accompagnement individuel peut également être mis en place selon les besoins. Les cours sont accessibles en présentiel à Casablanca ou à distance.",
            "Une préparation également adaptée au Bac STMG — Chez STUDASSIST, nous accompagnons également les élèves préparant un Baccalauréat STMG, dont les épreuves répondent à des exigences spécifiques. Les spécialités en STMG — notamment le management, les sciences de gestion et le droit-économie — évaluent la capacité à analyser des situations concrètes, mobiliser des notions théoriques et structurer une argumentation claire et appliquée. Notre accompagnement est ainsi adapté à ces enjeux, avec un travail ciblé sur l'analyse de cas, la structuration des réponses et la mobilisation pertinente des connaissances. Comme pour la voie générale, les résultats obtenus en STMG sont pleinement intégrés dans les candidatures post-bac, notamment pour les écoles de commerce, les BUT ou les licences universitaires.",
            "Un encadrement par des enseignants experts — Les élèves sont accompagnés par des professeurs spécialisés par matière, disposant d'une parfaite maîtrise des programmes et des exigences du Baccalauréat. Leur accompagnement permet de clarifier les notions complexes, d'adopter les bons réflexes méthodologiques et d'élever le niveau d'exigence.",
          ],
        },
        {
          title: "À qui s'adresse la préparation du bac de spécialités ?",
          paragraphs: [
            "Cette préparation s'adresse aux élèves de Terminale souhaitant renforcer leur maîtrise des spécialités, améliorer leurs performances aux épreuves du Baccalauréat et sécuriser leur projet d'orientation post-bac.",
            "Elle est particulièrement adaptée aux élèves qui visent à : consolider leurs connaissances dans une ou plusieurs spécialités ; renforcer leur méthodologie et leur capacité de raisonnement ; s'entraîner sur des sujets types et des annales ; gagner en confiance face aux épreuves écrites ; viser les meilleures notes dans des matières à fort coefficient ; renforcer leur dossier pour les candidatures post-bac ; préparer l'accès à des formations sélectives au Maroc ou à l'international ; bénéficier d'un accompagnement personnalisé, en groupe restreint ou en individuel.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST ?",
        bullets: [
          "Une préparation rigoureuse et des enseignants experts dans leurs matières",
          "Un format flexible et personnalisé avec des groupes restreints (2 à 4 élèves) ou un suivi individuel en fonction du besoin",
          "Une méthodologie orientée progression : méthodes, annales, et simulations pour gagner en efficacité, en confiance et en autonomie",
          "Une parfaite maîtrise des attentes du programme, des épreuves et des critères d'évaluation",
          "Une préparation qui s'inscrit dans une logique de réussite au lycée, d'orientation et de préparation des études supérieures",
          "Un levier de réussite académique et de valorisation du dossier post-bac",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/compass.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
          "https://img.icons8.com/3d-fluency/94/trophy.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez accompagner votre enfant vers une réussite solide et stratégique aux épreuves de spécialités ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Réserver un cours découverte",
        secondaryHref: "/contact",
      }}

      faqKeys={["prepas-bac"]}
      faqTitle="Préparation au Baccalauréat : questions fréquentes"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur la préparation aux épreuves du Bac."
      prev={{ label: "Bac de Français", to: "/prepas-bac/francais" }}
      next={{ label: "Bac de Philo", to: "/prepas-bac/philo" }}
    />
  );
}
