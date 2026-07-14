import OrientationLevelPage from "../../components/OrientationLevelPage";

const LEVELS = [
  { key: "primaire", label: "Primaire", href: "/soutien/primaire" },
  { key: "college", label: "Collège", href: "/soutien/college" },
  { key: "brevet", label: "Prépa Brevet", href: "/soutien/brevet" },
  { key: "lycee", label: "Lycée", href: "/soutien/lycee" },
  { key: "superieur", label: "Supérieur", href: "/soutien/superieur" },
  { key: "stages", label: "Stages de vacances", href: "/soutien/stages" },
];

export default function SoutienPrimaire() {
  return (
    <OrientationLevelPage
      eyebrow="Soutien · Primaire"
      accent="pink"
      title={<>Accompagnement scolaire au <span className="text-brand-teal">primaire</span></>}
      subtitle="Poser des bases solides, apprendre avec plaisir et développer le potentiel global"
      intro={[
        "Les premières années de scolarité sont fondatrices. C'est au primaire que se construisent les apprentissages essentiels, la confiance en soi et la relation à l'apprentissage.",
        "Chez STUDASSIST, le soutien scolaire au primaire repose sur une approche globale et équilibrée, combinant renforcement académique structuré et ateliers de brain training, afin d'accompagner chaque enfant dans toutes les dimensions de son développement, quel que soit son système scolaire.",
      ]}
      heroImage="/soutien-scolaire-main.png"
      heroImageClassName="!object-cover"
      heroImagePosition="center 65%"
      heroCtaLabel="Réserver un cours découverte"
      whatsappMessage="Bonjour STUDASSIST, je souhaite obtenir des informations sur le soutien scolaire au primaire."
      moveHeroCtaUnderGrid={false}
      moveNavUnderHero={true}
      levels={LEVELS}
      sectionTitle="Accompagnement scolaire au primaire"
      enjeuxEyebrow="Les enjeux du primaire"
      whyChooseEyebrow="Ce qui fait notre différence"
      faqAsideSubtitle="Nous vous répondons instantanément"

      enjeux={{
        title: "Pourquoi envisager un accompagnement scolaire au primaire ?",
        lead: "Au primaire, la réussite scolaire ne se joue pas uniquement sur les résultats. Elle dépend aussi de la capacité de l'enfant à comprendre, mémoriser, se concentrer, raisonner et prendre plaisir à apprendre. C'est à ce stade que se construisent :",
        bullets: [
          "Les fondamentaux (lecture, écriture, mathématiques)",
          "La concentration et l'attention",
          "La confiance en soi",
          "Le plaisir d'apprendre, moteur durable de la réussite",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/open-book.png",
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/shield.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
        ],
      }}

      sections={[
        {
          title: "Une approche en deux volets complémentaires combinant un soutien scolaire académique structuré et des ateliers de brain training",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Un soutien scolaire académique structuré</span>,
            <span>Nous accompagnons les élèves du primaire dans les <strong className="font-extrabold text-brand-darkblue">matières fondamentales</strong>, en adaptant nos contenus et nos méthodes aux programmes et <strong className="font-extrabold text-brand-darkblue">systèmes scolaires</strong> (français, marocain, bilingue ou international). Cet accompagnement vise à :</span>,
            <span>• <strong className="font-extrabold text-brand-darkblue">Consolider les acquis essentiels</strong></span>,
            <span>• <strong className="font-extrabold text-brand-darkblue">Installer de bonnes méthodes de travail</strong></span>,
            <span>• <strong className="font-extrabold text-brand-darkblue">Sécuriser les apprentissages</strong></span>,
            <span>• Accompagner aussi bien les enfants en difficulté que ceux disposant d'un bon niveau et souhaitant <strong className="font-extrabold text-brand-darkblue">aller plus loin</strong></span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Des ateliers de brain training intégrés</span>,
            <span>En complément du soutien scolaire académique, nous proposons des <strong className="font-extrabold text-brand-darkblue">ateliers de brain training</strong> intégrés, conçus pour <strong className="font-extrabold text-brand-darkblue">stimuler les capacités cognitives</strong> et favoriser l'apprentissage par l'expérience et le plaisir. Ces ateliers font partie intégrante de notre approche du soutien scolaire au primaire. Ils incluent notamment :</span>,
            <span>• <strong className="font-extrabold text-brand-darkblue">Calcul mental au soroban</strong></span>,
            <span>• <strong className="font-extrabold text-brand-darkblue">Théâtre en langue étrangère</strong></span>,
            <span>• <strong className="font-extrabold text-brand-darkblue">Ateliers Montessori</strong> (mathématiques, histoire-géographie, sciences, lecture, écriture)</span>,
            <span>• <strong className="font-extrabold text-brand-darkblue">Ateliers de robotique</strong></span>,
            <span>• <strong className="font-extrabold text-brand-darkblue">Cours d'échecs</strong></span>,
            <span>• <strong className="font-extrabold text-brand-darkblue">Ateliers artistiques</strong></span>,
          ],
        },
        {
          title: "Une pédagogie ludique et structurée avec une méthodologie en petits groupes adaptée aux plus jeunes et qui se veut rassurante pour les parents",
          paragraphs: [
            <span className="block font-bold text-brand-darkblue text-[15px] mt-2 mb-2 uppercase tracking-tight">Une pédagogie ludique et structurée</span>,
            <span>Chez STUDASSIST, apprendre doit rester une <strong className="font-extrabold text-brand-darkblue">expérience positive</strong>. Nos séances, qu'elles soient académiques ou issues du brain training, intègrent une dimension <strong className="font-extrabold text-brand-darkblue">ludique, interactive et engageante</strong>, tout en respectant un cadre structuré et exigeant. Cette approche permet :</span>,
            <span>• D'apprendre avec <strong className="font-extrabold text-brand-darkblue">plaisir</strong></span>,
            <span>• De renforcer la <strong className="font-extrabold text-brand-darkblue">motivation et la curiosité</strong></span>,
            <span>• De développer des <strong className="font-extrabold text-brand-darkblue">compétences transversales</strong> essentielles</span>,
            <span>• De favoriser une <strong className="font-extrabold text-brand-darkblue">progression durable</strong></span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Des petits groupes adaptés aux plus jeunes</span>,
            <span>Le soutien scolaire au primaire est proposé en <strong className="font-extrabold text-brand-darkblue">petits groupes de 2 à 4 enfants maximum</strong>, garantissant :</span>,
            <span>• Une <strong className="font-extrabold text-brand-darkblue">attention individualisée</strong></span>,
            <span>• Un <strong className="font-extrabold text-brand-darkblue">respect du rythme</strong> de chacun</span>,
            <span>• Une <strong className="font-extrabold text-brand-darkblue">dynamique de groupe bienveillante</strong></span>,
            <span>Nos enseignants adaptent leurs approches pédagogiques, leurs supports et leurs exigences au <strong className="font-extrabold text-brand-darkblue">système scolaire suivi</strong>, tout en maintenant des standards de qualité élevés.</span>,
            <span className="block font-bold text-brand-darkblue text-[15px] mt-6 mb-2 uppercase tracking-tight">Un suivi rassurant pour les parents</span>,
            <span>Les familles bénéficient d'un <strong className="font-extrabold text-brand-darkblue">suivi régulier et transparent</strong>, leur permettant de comprendre les progrès réalisés et les axes de développement de leur enfant.</span>,
          ],
        },
        {
          title: "À qui s'adresse le soutien scolaire au primaire ?",
          paragraphs: [
            <span>Ce service s'adresse aux enfants :</span>,
            <span>• Ayant besoin de <strong className="font-extrabold text-brand-darkblue">consolider leurs apprentissages</strong></span>,
            <span>• Rencontrant des <strong className="font-extrabold text-brand-darkblue">difficultés ponctuelles</strong></span>,
            <span>• Disposant d'un bon niveau et souhaitant <strong className="font-extrabold text-brand-darkblue">développer leur potentiel</strong></span>,
            <span>• Scolarisés dans des systèmes <strong className="font-extrabold text-brand-darkblue">français, marocains, bilingues ou internationaux</strong></span>,
            <span>• Dont les familles recherchent un accompagnement <strong className="font-extrabold text-brand-darkblue">global, structuré et épanouissant</strong></span>,
          ],
        },
      ]}

      whyChoose={{
        title: "Pourquoi choisir STUDASSIST pour le soutien scolaire au primaire ?",
        bullets: [
          "Une approche globale associant académique et brain training",
          "Une pédagogie ludique et structurée",
          "Des groupes très restreints (2 à 4 maximum)",
          "Des enseignants expérimentés et multi-systèmes",
          "Un suivi rassurant pour les familles",
          "Une vision long terme du parcours scolaire",
        ],
        icons: [
          "https://img.icons8.com/3d-fluency/94/brain.png",
          "https://img.icons8.com/3d-fluency/94/star.png",
          "https://img.icons8.com/3d-fluency/94/goal.png",
          "https://img.icons8.com/3d-fluency/94/conference-call.png",
          "https://img.icons8.com/3d-fluency/94/handshake.png",
          "https://img.icons8.com/3d-fluency/94/bar-chart.png",
        ],
      }}

      ctaBanner={{
        title: "Prendre rendez-vous",
        body: "Vous souhaitez mettre en place un accompagnement scolaire adapté, exigeant et compatible avec le système scolaire ainsi que le rythme d'apprentissage de votre enfant ?",
        primaryLabel: "Réserver un cours découverte",
        primaryHref: "/contact",
        secondaryLabel: "Prendre rendez-vous avec un conseiller STUDASSIST",
        secondaryHref: "/contact",
      }}

      faqKeys={["primaire"]}
      faqTitle="Soutien scolaire primaire : questions fréquentes"
      faqSubtitle="Les réponses aux questions que les familles nous posent le plus souvent sur l'accompagnement au primaire."
      next={{ label: "Collège", to: "/soutien/college" }}
    />
  );
}
