import { Link } from "react-router-dom";
import OrientationLevelPage from "../../components/OrientationLevelPage";

export default function OrientationMaster() {
  return (
    <OrientationLevelPage
      eyebrow="Post Bac+3 · Master"
      accent="navy"
      title={<>Orientation <span className="text-brand-teal">Master</span></>}
      subtitle="Construire une stratégie d'admission cohérente après un Bac+3"
      intro={[
        "Le choix d'un Master est une étape déterminante dans le parcours académique et professionnel.",
        "Après un Bac+3, les enjeux évoluent : il ne s'agit plus seulement de choisir une formation, mais de définir une spécialisation, de consolider un positionnement de carrière et d'intégrer un programme aligné avec ses ambitions.",
        "Chez STUDASSIST, nous accompagnons les étudiants titulaires d'un Bac+3 dans une démarche d'orientation Master structurée, stratégique et personnalisée, au Maroc comme à l'international.",
      ]}
      heroImage="/hero-orientation-master-new.png"
      heroContainerAspectRatio="aspect-[3/2]"
      heroCtaLabel="Réserver un rendez-vous de 1er contact"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur l'accompagnement en orientation pour un Master."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      enjeuxEyebrow="Les enjeux de l'orientation en Master"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Les 4 piliers de l'orientation pour le Master",
        lead: "Sans accompagnement, les démarches d'admission en Master peuvent devenir complexes, chronophages et parfois décourageantes.",
        bullets: [
          "un choix de spécialisation cohérent avec le projet professionnel,",
          "une sélection rigoureuse des programmes,",
          "la constitution de dossiers exigeants,",
          "La préparation des concours, certifications de langues et entretiens de personnalité",
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
          title: "Un projet de Master pensé autour de l'étudiant",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un accompagnement centré sur l'étudiant :</span>,
            <span>Contrairement aux parcours lycée, l'orientation Master s'adresse à des <strong className="font-extrabold text-brand-darkblue">étudiants majeurs</strong>. L'accompagnement est donc mené directement avec l'étudiant, en présentiel ou à distance, dans une relation professionnelle fondée sur l'<strong className="font-extrabold text-brand-darkblue">autonomie, la responsabilité et la clarté des objectifs</strong>. L'implication parentale est volontairement plus limitée, afin de laisser à l'étudiant toute sa place dans la construction de son projet.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Analyse du profil et compréhension des besoins :</span>,
            <span>Chaque parcours débute par une <strong className="font-extrabold text-brand-darkblue">analyse approfondie du profil</strong> académique et personnel de l'étudiant. Nous étudions son cursus, ses expériences, ses compétences, ses centres d'intérêts, ses contraintes et ses aspirations professionnelles afin de construire une <strong className="font-extrabold text-brand-darkblue">vision claire de ses objectifs</strong>.</span>,
            <span>Cette phase nous permet de définir une <strong className="font-extrabold text-brand-darkblue">stratégie réaliste et ambitieuse</strong>, parfaitement alignée avec son projet de carrière.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Sélection de programmes adaptés :</span>,
            <span>À partir de cette analyse, nous proposons une <strong className="font-extrabold text-brand-darkblue">short-list de Masters</strong> adaptée au profil de l'étudiant, à ses contraintes géographiques ou financières, ainsi qu'aux exigences des établissements.</span>,
          ],
          callout: "Chaque sélection est pensée comme une véritable stratégie d'admission, visant à maximiser les chances d'intégration dans des programmes cohérents avec le parcours et les ambitions de l'étudiant.",
        },
        {
          title: "Une stratégie d'admission globale et structurée",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Accompagnement complet aux candidatures :</span>,
            <span>STUDASSIST accompagne l'étudiant tout au long de la <strong className="font-extrabold text-brand-darkblue">phase de candidature</strong>. Nous travaillons ensemble sur la structuration du projet académique, la <strong className="font-extrabold text-brand-darkblue">constitution des dossiers</strong>, la rédaction des <strong className="font-extrabold text-brand-darkblue">lettres de motivation</strong> et la préparation des CV et formulaires.</span>,
            <span>Notre objectif est de créer des <strong className="font-extrabold text-brand-darkblue">dossiers solides, clairs et différenciants</strong>, mettant en valeur la cohérence du parcours, la maturité du projet et le potentiel du candidat.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Préparation aux concours, certifications et entretiens :</span>,
            <>
              Lorsque requis, nous intégrons la préparation aux concours et tests tels que le{" "}
              <Link to="/prepas-concours" className="text-brand-darkblue font-black underline underline-offset-2">
                GMAT ou le TAGE MAGE
              </Link>
              , ainsi qu'aux{" "}
              <Link to="/certifications" className="text-brand-darkblue font-black underline underline-offset-2">
                certifications de langues (TOEFL, IELTS, TOEIC)
              </Link>
              . Ces préparations sont adaptées au niveau de départ de l'étudiant et intégrées dans un planning réaliste, en lien avec les échéances de candidature.
            </>,
            <span>Nous préparons également les étudiants aux <strong className="font-extrabold text-brand-darkblue">entretiens de personnalité</strong> à travers des simulations, un travail sur le discours de motivation et la structuration du projet professionnel, afin de renforcer leur assurance, leur impact et leur posture de communication.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Une expertise internationale :</span>,
            <>
              Pour les étudiants souhaitant poursuivre leurs études à l'étranger, STUDASSIST accompagne les projets vers plus de 25 destinations. Grâce à notre expérience, nous maîtrisons les procédures de candidatures, sur plateformes officielles comme hors plateformes, et assurons un suivi complet, de la sélection des programmes jusqu'aux{" "}
              <Link to="/admin-logement" className="text-brand-darkblue font-black underline underline-offset-2">
                démarches administratives et à l'installation
              </Link>
              {" "}si nécessaire.
            </>,
          ],
        },
        {
          title: "À qui s'adresse l'orientation Master ?",
          paragraphs: [
            <span>Notre accompagnement s'adresse aux étudiants ayant validé un Bac+3 :</span>,
          ],
          bullets: [
            "souhaitant intégrer un Master sélectif,",
            "souhaitant clarifier leur projet professionnel,",
            "souhaitant se spécialiser dans un domaine précis,",
            "souhaitant poursuivre leurs études à l'international,",
            "souhaitant bénéficier d'un accompagnement structuré et personnalisé.",
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour votre orientation Master ?",
        bullets: [
          "Une analyse approfondie du profil pour une shortlist de programmes personnalisée et stratégique",
          "Construction d’un dossier solide et accompagnement de A à Z aux candidatures",
          "Une préparation aux concours et certifications de langues intégrée au programme",
          "Un coaching aux entretiens de personnalité",
          "Une expertise Maroc & international couvrant +25 destinations en visioconférence",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/search.png",
          "https://img.icons8.com/3d-fluency/94/document.png",
          "https://img.icons8.com/3d-fluency/94/briefcase.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/globe.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez structurer votre projet de Master et maximiser vos chances d'admission ?",
        primaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        primaryHref: "/contact",
        secondaryLabel: "Contacter un conseiller",
        secondaryHref: "/contact",
      }}

      prev={{ label: "Réorientation académique", to: "/orientation/reorientation" }}
    />
  );
}
