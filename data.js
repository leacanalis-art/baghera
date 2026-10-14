/* Contenu du site Baghera : projets et talents.
   Pour ajouter un projet : copier un bloc de BAGHERA_PROJETS et changer les champs.
   Les catégories des filtres sont calculées automatiquement à partir du champ "categories". */

/* Catégories des filtres de la page Projets, dans l'ordre d'affichage. */
window.BAGHERA_CATEGORIES = ["Santé", "Skincare", "Immobilier", "Finance", "Micronutrition", "Déco", "Engagement", "Culture"];

window.BAGHERA_PROJETS = [
  {
    id: "triathlon-roses",
    marque: "Triathlon des Roses",
    titre: "Triathlon des Roses",
    avec: "Respectueuse × Fondation ARC",
    talents: ["emturian"],
    partenaires: "Respectueuse · Fondation ARC · Emturian et quatre autres ambassadeurs",
    categories: ["Engagement", "Santé"],
    format: "Événement caritatif · casting de créatrices et créateurs ambassadeurs",
    visuel: "assets/img/projet-triathlon-roses.jpg",
    cadrage: "50% 38%",
    ratio: "story",
    handle: "agencebaghera",
    lien: "https://www.instagram.com/p/Dd1ht2zoQ27/",
    lienLabel: "Voir la publication",
    lien2: "https://www.instagram.com/p/Dd6hVK-IUVO/",
    lien2Label: "Les mots des ambassadeurs",
    accroche: "Chaque année, une cause qui nous tient à cœur. Cette année : la recherche contre le cancer.",
    projet: [
      "En tant qu’agence, nous voulons chaque année mettre notre savoir-faire au service d’un engagement qui a du sens. Pour cette première, Baghera a accompagné le Triathlon des Roses de Toulouse, un événement de la Fondation ARC au profit de la recherche contre le cancer, aux côtés de Respectueuse.",
      "Notre mission : accompagner Respectueuse sur l’événement et assurer le casting des créatrices et créateurs ambassadeurs, dont notre talent Emturian. Une belle journée de mobilisation, de partage et d’engagement, qui a permis de remettre un chèque de 58 747 € à la Fondation ARC pour la recherche sur les cancers du sein."
    ],
    pourquoi: [
      ["Un engagement annuel", "Chaque année, une cause choisie avec le cœur, pour mettre notre savoir-faire au service de quelque chose qui compte."],
      ["Un casting qui a du sens", "Des créateurs mobilisés pour une cause, au-delà d’un simple produit."],
      ["Une mobilisation collective", "Une marque, une fondation, des ambassadeurs et leurs communautés, réunis le temps d’une journée."]
    ]
  },
  {
    id: "etat-pur-lea",
    marque: "État Pur",
    talent: "lea",
    categories: ["Skincare"],
    format: "Concept de tournage · 4 vidéos YouTube & Instagram",
    visuel: "assets/img/projet-lea-etat-pur.jpg",
    cadrage: "50% 38%",
    ratio: "story",
    lien: "https://www.youtube.com/watch?v=Bp-8sxcCKMY",
    lienLabel: "Voir la vidéo YouTube",
    lien2: "https://www.instagram.com/p/DdYHW-1Mnl5/",
    lien2Label: "Voir sur Instagram",
    accroche: "Quatre vidéos pour découvrir quatre métiers qui font vos produits préférés.",
    projet: [
      "Pour État Pur, Baghera a imaginé un concept de tournage en immersion : Léa, Docteure en pharmacie, part à la rencontre de celles et ceux qui imaginent, développent et font évoluer les produits de la marque.",
      "Quatre vidéos, quatre métiers découverts de l’intérieur. Deux journées de tournage dans les locaux d’État Pur, une ligne éditoriale construite avec la marque et Léa, puis une diffusion sur YouTube et sur Instagram."
    ],
    pourquoi: [
      ["Raconter plutôt que vendre", "Les consommateurs veulent savoir qui fabrique leurs produits : les métiers deviennent le cœur de la campagne."],
      ["Une pharmacienne comme guide", "Le regard de Léa, pharmacienne, donne de la crédibilité à chaque échange."],
      ["Un tournage, plusieurs formats", "Vidéos YouTube et contenus Instagram : un dispositif pensé pour durer bien au-delà de la première publication."]
    ]
  },
  {
    id: "pfizer-lea",
    marque: "Pfizer",
    talent: "lea",
    categories: ["Santé"],
    format: "Réel Instagram · sensibilisation santé publique",
    visuel: "assets/img/projet-lea-pfizer.jpg",
    ratio: "story",
    lien: "https://www.instagram.com/p/DdnrBV0sUJQ/",
    lienLabel: "Voir le réel",
    accroche: "La vaccination pendant la grossesse, expliquée par une pharmacienne et maman.",
    projet: [
      "Pour Pfizer France, Léa a pris la parole sur un sujet de santé publique encore méconnu : la vaccination maternelle. Docteure en pharmacie et maman de trois enfants, elle explique simplement comment les anticorps transmis pendant la grossesse peuvent protéger le bébé dès ses premiers mois, et rappelle l’existence de 4 vaccins recommandés par la HAS.",
      "Une prise de parole rigoureuse et encadrée : sources officielles citées (ANSM, INSERM, HAS) et un message clair qui renvoie vers les professionnels de santé — médecin, sage-femme, gynécologue, pharmacien — pour un conseil adapté à chaque grossesse."
    ],
    pourquoi: [
      ["Une voix légitime", "Une professionnelle de santé, qui parle aussi avec son vécu de mère."],
      ["Informer avant tout", "Un contenu de prévention, pas de promotion : le bon ton pour les sujets de santé réglementés."],
      ["La confiance", "Une communauté qui suit Léa précisément pour la fiabilité de ses conseils."]
    ]
  },
  {
    id: "substance-of-light-skintelligence",
    marque: "Substance of Light",
    talent: "skintelligence",
    categories: ["Skincare"],
    format: "Réel Instagram en collaboration · tourné en pharmacie",
    visuel: "assets/img/projet-skintelligence-substance-of-light.jpg",
    cadrage: "50% 42%",
    ratio: "story",
    lien: "https://www.instagram.com/p/DZ5QkJbsqao/",
    lienLabel: "Voir le réel",
    accroche: "Tourner là où tout se joue : directement en pharmacie.",
    projet: [
      "Pour Substance of Light, le concept était de sortir du studio et de tourner directement en pharmacie, au plus près du lieu où les consommateurs découvrent et choisissent leurs soins.",
      "Skintelligence y échange avec la marque autour d’un sujet essentiel : la photoprotection au quotidien. Un SPF large spectre le matin, puis une réapplication en journée, même par-dessus le maquillage, grâce à la brume solaire de la marque."
    ],
    pourquoi: [
      ["Un décor qui crédibilise", "La pharmacie ancre le produit dans un univers de conseil et de confiance."],
      ["Un vrai dialogue", "Créatrice et marque échangent : le contenu informe avant de vendre."],
      ["Un conseil qui marque", "« Une routine anti-âge ne sert à rien sans protection solaire », soutenu par un code promo dédié."]
    ]
  },
  {
    id: "fortuneo-allison",
    marque: "Fortuneo",
    talent: "allison",
    categories: ["Immobilier", "Finance"],
    format: "Podcast audio & vidéo · « Femmes d’Actions », saison 2",
    visuel: "assets/img/projet-allison-fortuneo-carre.jpg",
    cadrage: "62% 40%",
    ratio: "carre",
    lien: "https://www.fortuneo.fr/podcast-femmes-actions",
    lienLabel: "Écouter l’épisode",
    accroche: "Acheter à deux : l’amour passe-t-il chez le notaire ?",
    projet: [
      "Fortuneo a invité Allison Jungling dans « Femmes d’Actions », son podcast animé par la journaliste Léa Lejeune (fondatrice de Plan Cash) pour aider les femmes à reprendre le pouvoir sur leur argent.",
      "Dans la saison 2, consacrée à l’argent dans le couple, Allison intervient sur l’épisode 3 : comment investir et acheter un bien immobilier à deux. Qui apporte quoi ? Comment répartir les dépenses ? Comment protéger chacun sans casser le romantisme ? Elle y répond avec son expérience de terrain d’investisseuse."
    ],
    pourquoi: [
      ["Une voix de terrain pour une banque", "La parole d’une investisseuse reconnue renforce la crédibilité du format."],
      ["Un sujet qui parle à tous", "Acheter en couple : concret, fédérateur, et rarement abordé franchement."],
      ["Un format qui dure", "Un podcast long, en audio et en vidéo, disponible sur toutes les plateformes d’écoute."]
    ]
  },
  {
    id: "dyson-allison",
    marque: "Dyson",
    talent: "allison",
    categories: ["Déco"],
    format: "Réel Instagram · crash-test en fin de chantier",
    visuel: "assets/img/projet-allison-dyson.jpg",
    cadrage: "50% 35%",
    ratio: "story",
    lien: "https://www.instagram.com/p/DaH1FDXCdUe/",
    lienLabel: "Voir le réel",
    accroche: "Le crash-test du Pencilvac, en conditions réelles de chantier.",
    projet: [
      "Pour le lancement du nouveau Pencilvac, Dyson a confié à Allison Jungling un terrain de jeu idéal : la fin du chantier de sa nouvelle maison, quand la poussière est partout.",
      "Allison teste l’aspirateur en situation réelle et partage son verdict sans filtre : une puissance inattendue pour un appareil aussi compact et léger. Au point de l’adopter pour sa nouvelle maison."
    ],
    pourquoi: [
      ["Une mise en situation crédible", "Un vrai chantier, une vraie poussière : le produit fait ses preuves devant la communauté."],
      ["Une passionnée de l’habitat", "Investisseuse immobilière, Allison vit les travaux au quotidien : son avis a du poids."],
      ["Un produit adopté", "Le Pencilvac s’installe dans sa nouvelle maison, bien au-delà de la collaboration."]
    ]
  },
  {
    id: "jow-nina",
    marque: "Jow",
    talent: "nina",
    categories: ["Micronutrition"],
    format: "Réel Instagram",
    visuel: "assets/img/projet-nina-jow.jpg",
    ratio: "story",
    lien: "https://www.instagram.com/p/Dc86qzRI3pW/",
    lienLabel: "Voir le réel",
    accroche: "Gagner du temps sans renoncer à manger sain et bon.",
    projet: [
      "Pour Jow, l’application qui génère les recettes de la semaine et remplit le panier de courses en un clic, Nina a partagé son astuce du quotidien : comment elle gagne du temps tout en préparant des repas sains et gourmands.",
      "Un contenu ancré dans sa vraie vie de diététicienne et coach sportive, qui montre l’application en situation plutôt que de la décrire."
    ],
    pourquoi: [
      ["Une intégration naturelle", "Le produit répond à un vrai besoin de sa communauté : le manque de temps."],
      ["Un contenu conversationnel", "Nina invite sa communauté à partager ses propres astuces en commentaire."],
      ["Un passage à l’action", "Un code promo dédié pour transformer l’intérêt en téléchargements."]
    ]
  },
  {
    id: "respectueuse-emturian",
    marque: "Respectueuse",
    talent: "emturian",
    categories: ["Skincare"],
    format: "Vidéo YouTube · interview de la fondatrice (40 min)",
    visuel: "assets/img/projet-emturian-respectueuse.jpg",
    cadrage: "80% 40%",
    ratio: "paysage",
    lien: "https://www.youtube.com/watch?v=-MDXCcfAm6g",
    lienLabel: "Voir la vidéo",
    accroche: "« Comment choisir sa crème solaire ? Je lui ai posé toutes vos questions ! »",
    projet: [
      "Emturian a interviewé Myriam, co-créatrice de Respectueuse, une marque de solaires engagée qui place la santé, l’efficacité et une approche clean exigeante au cœur de ses formules.",
      "Pendant 40 minutes, elles répondent à toutes les questions de la communauté : le déclic derrière la marque, la formulation, filtres minéraux ou organiques, UVA et UVB, « reef safe » : réalité ou marketing ? Un challenge démonte les idées reçues sur les solaires, et les textures sont testées en direct."
    ],
    pourquoi: [
      ["La fondatrice prend la parole", "Le format interview laisse la marque raconter ses engagements, sans filtre."],
      ["Un contenu qui reste", "Une vidéo longue et pédagogique, qui continue d’être vue des mois après sa sortie."],
      ["Une caution exigeante", "Emturian est réputée pour son regard sans concession sur les compositions."]
    ]
  },
  {
    id: "clara-livre",
    marque: "Nouveau livre",
    titre: "Anatomie d’une métamorphose",
    talent: "clara",
    categories: ["Culture"],
    format: "Sortie de livre · première autobiographie (Hugo Document)",
    visuel: "assets/img/projet-clara-livre.jpg",
    cadrage: "50% 30%",
    ratio: "livre",
    lien: "https://www.hugopublishing.fr/produits/anatomie-dune-metamorphose/",
    lienLabel: "Découvrir le livre",
    lien2: "https://www.fnac.com/a23267131/Clara-Morgane-Anatomie-d-une-metamorphose",
    lien2Label: "Le trouver sur Fnac",
    accroche: "Clara Morgane se raconte dans sa première autobiographie.",
    projet: [
      "Le 7 octobre 2026, Clara Morgane publie « Anatomie d’une métamorphose », sa première autobiographie, aux éditions Hugo Document.",
      "Elle y revient sur la création de son pseudonyme, ses doutes, les obstacles et les choix qui l’ont menée à l’émancipation, et appelle chacune et chacun à la liberté d’être qui l’on souhaite. Un moment fort de l’année pour Clara, accompagnée par Baghera."
    ],
    pourquoi: [
      ["Une parole personnelle", "Une première autobiographie, écrite à la première personne."],
      ["Un message qui rassemble", "Émancipation, liberté d’être soi : des sujets qui parlent à un très large public."],
      ["Une communauté fidèle", "Clara partage son univers avec une audience engagée, qui la suit depuis des années."]
    ]
  },
  {
    id: "solgar-kristy",
    marque: "Solgar",
    talent: "kristy",
    categories: ["Micronutrition"],
    format: "Réel Instagram · avis de professionnelle",
    visuel: "assets/img/projet-kristy-solgar.jpg",
    cadrage: "55% 35%",
    ratio: "story",
    lien: "https://www.instagram.com/p/DeZnPQeoLGK/",
    lienLabel: "Voir le réel",
    accroche: "Toutes les vitamines C ne se valent pas : l’avis d’une professionnelle.",
    projet: [
      "Pour Solgar, Kristy, conseillère en parapharmacie, partage son avis de professionnelle sur l’Ester-C Plus 1000 mg, la vitamine C qu’elle prend depuis des années.",
      "Un contenu pédagogique, appuyé sur une étude scientifique citée en légende, avec une mention de partenariat claire et un code promo dédié à sa communauté."
    ],
    pourquoi: [
      ["Une pro qui parle de ce qu’elle utilise", "Kristy prend cette vitamine C depuis des années : un avis d’usage, pas un script."],
      ["Un propos étayé", "Une référence scientifique est citée et le partenariat est annoncé en toute transparence."],
      ["Une communauté qui interagit", "Les commentaires s’animent : ses abonnés posent leurs questions à une vraie professionnelle."]
    ]
  }
];

window.BAGHERA_TALENTS = [
  {
    id: "lea",
    nom: "Les Conseils Pharma de Léa",
    court: "Léa",
    expertise: "Docteure en pharmacie",
    photo: "assets/img/talent-lea.jpg",
    handle: "les.conseils.pharma.de.lea",
    email: "lesconseilspharmadelea@influencebaghera.com",
    bio: [
      "Docteure en pharmacie et pionnière de la création de contenu santé en France, Léa est devenue une référence incontournable sous le nom de @Les Conseils Pharma de Léa. Reconnue pour sa prise de parole accessible et responsable, elle s’est imposée comme une voix de confiance, auprès du grand public comme des professionnels de santé.",
      "Spécialiste de la santé naturelle, elle est formatrice en micronutrition, titulaire d’un DU MAPS (Micro-nutrition Alimentation Prévention Santé) et d’un DU d’homéopathie. Auteure d’un ouvrage de référence décliné en livret pratique, elle met son savoir scientifique au service d’une approche pédagogique et concrète.",
      "Installée à Aix-en-Provence et maman de trois filles, Léa fédère une communauté engagée à l’échelle nationale et locale. Sa rigueur et son éthique la conduisent à collaborer exclusivement avec des marques premium."
    ],
    references: "SkinCeuticals · Filorga · Fortepharma · Vichy · Easypara · Pileje · Organyc · Aroma-Zone · Arkopharma · HAS · Bepanthen · Calmosine · Jonzac · Sanofi · Laboratoire ACM · CPAM · Jaldes · Caudalie",
    galerie: ["assets/img/gal-lea-1.jpg"],
    activations: ["Réels et posts Instagram", "Vidéos YouTube", "Tournages en pharmacie ou en laboratoire", "Formations et conférences santé", "Campagnes de prévention et de sensibilisation"],
    reseaux: [
      ["Instagram", "https://www.instagram.com/les.conseils.pharma.de.lea/"],
      ["TikTok", "https://www.tiktok.com/@lesconseilspharmadelea"],
      ["YouTube", "https://www.youtube.com/channel/UCplOccX_PaMQ_ORzy_RPmTQ"]
    ]
  },
  {
    id: "emturian",
    nom: "Emturian",
    court: "Emeline",
    expertise: "Beauté clean & lifestyle",
    photo: "assets/img/talent-emturian.jpg",
    handle: "emturian",
    email: "emturian@influencebaghera.com",
    bio: [
      "@Emturian est une créatrice de contenu passionnée par la beauté responsable, naturelle et accessible. Elle a lancé son compte pour créer un espace de tips, de conseils et de dupes de produits clean et abordables. Elle fédère aujourd’hui plus de 400 000 abonnés.",
      "Spécialisée dans la beauté clean, Emeline adopte une approche bienveillante et non moralisatrice, avec un objectif simple : aider sa communauté à faire les meilleurs choix, quand c’est possible.",
      "Elle met en lumière les marques, des plus petites aux plus grandes, notamment à travers son concept d’interviews de marques sur YouTube. Son univers s’étend aujourd’hui à la food, au textile et au lifestyle, avec la beauté comme fil conducteur."
    ],
    references: "Soraali · Aroma-Zone · Yepoda · Jow · Cosmebio · Respire · Wild · Oden · Cultiv · Cica Manuka · Cut by Fred · Jonzac · Respectueuse · Melvita · Kreme · Sanoflore · Ballot-Flurin · WIA Cosmetics",
    activations: ["Réels Instagram et TikTok", "Vidéos YouTube, interviews de marque", "Partenariat à l’année", "Lives Twitch", "Comparatifs et dupes"],
    reseaux: [
      ["Instagram", "https://www.instagram.com/emturian/"],
      ["TikTok", "https://www.tiktok.com/@emturian"],
      ["YouTube", "https://www.youtube.com/@emturian"],
      ["Twitch", "https://www.twitch.tv/emturian"]
    ]
  },
  {
    id: "clara",
    nom: "Clara Morgane",
    court: "Clara",
    expertise: "Artiste & entrepreneure",
    photo: "assets/img/talent-clara.jpg",
    handle: "claramorgane",
    email: "alix.espenel@influencebaghera.com",
    bio: [
      "Clara Morgane est une personnalité incontournable du paysage médiatique français, artiste polyvalente et entrepreneure audacieuse. Depuis plus de vingt ans, elle inspire le public par ses projets créatifs, ses apparitions télévisées et ses engagements artistiques.",
      "Elle s’impose comme une voix influente sur les thèmes liés à la femme, à la créativité et au bien-être. Sur Instagram, où elle compte plus de 700 000 abonnés, elle met en lumière ses initiatives autour de la spiritualité, du bien-être, de la beauté et de l’émancipation féminine.",
      "Avec son cabaret « Au 7e », elle célèbre la féminité et l’expression artistique entre danse, acrobaties, effeuillage burlesque et humour — une nouvelle preuve de sa capacité à allier créativité, scène et rayonnement médiatique."
    ],
    references: "",
    activations: ["Posts et stories Instagram", "Interviews et prises de parole médias", "Événements et soirées", "Partenariats beauté et bien-être"],
    reseaux: [
      ["Instagram", "https://www.instagram.com/claramorgane/"],
      ["TikTok", "https://www.tiktok.com/@realclaramorganeofficiel"],
      ["Facebook", "https://www.facebook.com/claramorgane/"],
      ["X", "https://x.com/ClaraMOfficiel"]
    ]
  },
  {
    id: "allison",
    nom: "Allison Jungling",
    court: "Allison",
    expertise: "Pro de l’immobilier",
    photo: "assets/img/talent-allison.jpg",
    photoPos: "30% 20%",
    handle: "allisonjungling",
    email: "allisonjungling@influencebaghera.com",
    bio: [
      "Allison Jungling est investisseuse immobilière, entrepreneure et formatrice, reconnue pour son approche accessible et concrète de l’investissement. Partie de zéro, elle a construit son indépendance financière grâce à l’immobilier et est devenue une référence féminine du domaine.",
      "Autrice de deux ouvrages, « Mes 68 commandements pour vivre de l’immobilier » et « Tout ce que j’aurais aimé savoir », elle transmet à la fois des conseils pratiques et une vision plus personnelle de la réussite.",
      "Chroniqueuse et conférencière, elle décrypte régulièrement les tendances du marché immobilier. Pédagogue, transparente et authentique, elle crée un lien de confiance durable avec une communauté en quête de conseils concrets."
    ],
    references: "",
    activations: ["Podcasts et émissions", "Conférences et chroniques", "Réels Instagram et vidéos YouTube", "Contenus immobilier et finance"],
    reseaux: [
      ["Instagram", "https://www.instagram.com/allisonjungling/"],
      ["TikTok", "https://www.tiktok.com/@allison_jungling_"],
      ["YouTube", "https://www.youtube.com/@AllisonJungling"]
    ]
  },
  {
    id: "skintelligence",
    nom: "Skintelligence",
    court: "Sarah-Joyce",
    expertise: "Soin de la peau",
    photo: "assets/img/talent-skintelligence.jpg",
    handle: "skintelligence_sj",
    email: "skintelligence@influencebaghera.com",
    bio: [
      "Sarah-Joyce est passionnée de dermocosmétique et consultante indépendante. Ingénieure en biotechnologie de formation, elle s’est orientée vers l’univers pharmaceutique, comme consultante auprès des plus grands laboratoires et sur le terrain, en pharmacie. Ce parcours hybride lui donne une lecture unique de la peau et des actifs.",
      "Avec Skintelligence, elle décrypte la peau avec précision et propose une approche du soin claire, moderne et accessible : exigeante mais réaliste, fondée sur la science et l’efficacité réelle.",
      "Au-delà du digital, elle intervient régulièrement comme animatrice, formatrice et conférencière pour des marques et des laboratoires. À mi-chemin entre la rigueur scientifique et la complicité de l’amie."
    ],
    references: "",
    activations: ["Réels en pharmacie", "Animations et conférences pour marques et laboratoires", "Formations dermocosmétique", "Contenus soin de la peau"],
    reseaux: [
      ["Instagram", "https://www.instagram.com/skintelligence_sj/"],
      ["TikTok", "https://www.tiktok.com/@skintelligence_sj"]
    ]
  },
  {
    id: "nina",
    nom: "Nina.Lsy",
    court: "Nina",
    expertise: "Nutrition & sport",
    photo: "assets/img/talent-nina.jpg",
    handle: "nina.lsy",
    email: "nina.lsy@influencebaghera.com",
    bio: [
      "Nina est diététicienne, coach sportive et créatrice de contenu, animée par une vraie passion pour l’accompagnement et la transmission. Elle aide sa communauté à améliorer son hygiène de vie grâce à des conseils concrets et faciles à appliquer, autour de la nutrition, du sport, du lifestyle et du développement personnel.",
      "Elle applique elle-même les principes qu’elle partage, pour rester cohérente entre son discours et son mode de vie. Dynamique et curieuse, elle place la nouveauté et le dépassement de soi au centre de son approche.",
      "Son statut de diététicienne diplômée fait de chaque collaboration un gage de crédibilité : une parole légitime, justement intégrée, pour une communauté exigeante."
    ],
    references: "",
    galerie: ["assets/img/gal-nina-1.jpg", "assets/img/gal-nina-2.jpg"],
    activations: ["Réels nutrition et lifestyle", "Contenus sport et bien-être", "Recettes et food", "Partenariats TikTok et Instagram"],
    reseaux: [
      ["Instagram", "https://www.instagram.com/nina.lsy/"],
      ["TikTok", "https://www.tiktok.com/@nina.lsy"]
    ]
  },
  {
    id: "kristy",
    nom: "Kristy Bianco",
    court: "Kristy",
    expertise: "Conseillère en pharmacie",
    photo: "assets/img/talent-kristy.jpg",
    photoPos: "50% 20%",
    handle: "mademoisellekristy",
    email: "bonjour@influencebaghera.com",
    bio: [
      "Conseillère en parapharmacie depuis 9 ans, Kristy partage sur Instagram l’énergie du Sud et son regard de professionnelle du comptoir. Installée à Cannes, elle est suivie par plus de 40 000 abonnés.",
      "Au quotidien, elle conseille et décrypte les produits de parapharmacie : ceux qui méritent plus d’attention, ceux qui font vraiment la différence. Une parole de terrain, concrète et accessible."
    ],
    references: "",
    galerie: ["assets/img/gal-kristy-1.jpg", "assets/img/gal-kristy-2.jpg", "assets/img/gal-kristy-3.jpg"],
    activations: ["Réels et stories Instagram", "Conseils produits en officine", "Sélections et comparatifs", "Tournages en pharmacie"],
    reseaux: [
      ["Instagram", "https://www.instagram.com/mademoisellekristy/"]
    ]
  },
  {
    id: "nastassja",
    nom: "Nastassja",
    court: "Nastassja",
    expertise: "Conseillère en image",
    photo: "assets/img/talent-nastassja.jpg",
    photoPos: "50% 30%",
    handle: "nastassjadelabarthe",
    email: "bonjour@influencebaghera.com",
    bio: [
      "Styliste personnelle, Nastassja aide sa communauté à multiplier les possibilités de son dressing : plus de tenues, moins de vêtements. Elle partage ses sélections et ses conseils en image auprès de plus de 59 000 abonnés.",
      "Présente en ligne, à Paris et à Lyon, elle propose des sélections, des accompagnements personnalisés et des collaborations avec les marques."
    ],
    references: "",
    activations: ["Sélections de tenues", "Accompagnements personnalisés", "Collaborations mode et beauté", "Réels et stories Instagram"],
    reseaux: [
      ["Instagram", "https://www.instagram.com/nastassjadelabarthe/"]
    ]
  }

];

/* Ils nous font confiance : marques clientes + partenaires de confiance des talents.
   logo: "" = le nom s'affiche en texte (ex. Investir Day). Pour ajouter une marque : mettre le logo dans assets/img/logos/. */
window.BAGHERA_MARQUES = [
  { nom: "Decléor", logo: "assets/img/logos/decleor.png" },
  { nom: "Aroma-Zone", logo: "assets/img/logos/aroma-zone.svg" },
  { nom: "Fortuneo", logo: "assets/img/logos/fortuneo.svg" },
  { nom: "Investir Day", logo: "" },
  { nom: "Dyson", logo: "assets/img/logos/dyson.svg" },
  { nom: "Babybio", logo: "assets/img/logos/babybio.svg" },
  { nom: "Typology", logo: "assets/img/logos/typology.svg" },
  { nom: "Eau Thermale Jonzac", logo: "assets/img/logos/jonzac.png" },
  { nom: "Make My Mask", logo: "assets/img/logos/makemymask.png" },
  { nom: "Substance of Light", logo: "assets/img/logos/substance-of-light.png" },
  { nom: "Valbiotis", logo: "assets/img/logos/valbiotis.svg" },
  { nom: "Groupe NAOS", logo: "assets/img/logos/naos.png" },
  { nom: "Easypara", logo: "assets/img/logos/easypara.png" },
  { nom: "Yepoda", logo: "assets/img/logos/yepoda.png" },
  { nom: "Sanoflore", logo: "assets/img/logos/sanoflore.png" },
  { nom: "Centifolia", logo: "assets/img/logos/centifolia.png" },
  { nom: "Laboratoire Jaldes", logo: "assets/img/logos/jaldes.png" },
  { nom: "Soraāli", logo: "assets/img/logos/soraali.png" },
  { nom: "Cosmebio", logo: "assets/img/logos/cosmebio.png" }
];

/* AVIS — EXEMPLES PROVISOIRES à remplacer par les vrais avis.
   Tant que "exemple: true", le site affiche la mention « Exemple d’avis ».
   Pour un vrai avis : remplacer le texte, le nom, le poste, puis passer exemple à false. */
window.BAGHERA_AVIS = [
  {
    exemple: true,
    texte: "Baghera a tout de suite compris nos contraintes réglementaires. Le casting était juste, les contenus pédagogiques et validés dans les temps : notre première campagne avec une professionnelle de santé s’est déroulée sans accroc.",
    nom: "Prénom Nom",
    poste: "Responsable communication",
    structure: "Laboratoire santé"
  },
  {
    exemple: true,
    texte: "Une équipe réactive et vraiment force de proposition. Elles ne se contentent pas de trouver des créateurs : elles construisent un vrai concept autour de la marque, et le reporting est clair.",
    nom: "Prénom Nom",
    poste: "Chef de produit",
    structure: "Marque de cosmétiques"
  },
  {
    exemple: true,
    texte: "Être accompagnée par Baghera, c’est avoir des partenaires qui respectent ma passion et ma communauté. Je ne travaille qu’avec des marques qui ont du sens pour moi, et elles le savent.",
    nom: "Prénom Nom",
    poste: "Créatrice de contenu",
    structure: "Talent Baghera"
  }
];

/* Téléphones de l'accueil : un exemple par offre (lien vers la page Savoir-faire).
   Pour changer une image : mettre le fichier dans assets/img/ et modifier "image". image: "" = visuel à venir. */
window.BAGHERA_OFFRES_HERO = [
  {
    offre: "Talent management",
    ancre: "offre-talents",
    compte: "agencebaghera",
    titre: "Révéler des créatrices passionnées",
    detail: "",
    image: "assets/img/offre-talents.jpg",
    position: "50% 60%"
  },
  {
    offre: "Accompagnement stratégique",
    ancre: "offre-accompagnement",
    compte: "agencebaghera",
    titre: "Votre influence, de A à Z",
    detail: "",
    image: "assets/img/offre-accompagnement.jpg",
    position: "45% 35%"
  },
  {
    offre: "Activations ponctuelles",
    ancre: "offre-activations",
    compte: "agencebaghera",
    titre: "Un savoir-faire, là où il faut",
    detail: "",
    image: "assets/img/offre-activations.jpg",
    position: "45% 40%"
  }
];

/* LIEN DE PRISE DE RENDEZ-VOUS — un seul endroit pour tout le site.
   Coller ici le lien de la page de réservation Google Agenda (« Agenda de rendez-vous »). */
window.BAGHERA_RDV = "https://calendar.google.com/appointments/schedules/AcZssZ3wr56gAHHlQ9lYKhecLk3dZM8wu3Itv3OhEKW_VFvJ0YhseNA4_Kt7mjPV7Grl7n6jU2ZC2Q9T";

/* ENVOI DU FORMULAIRE DE CONTACT — via FormSubmit (gratuit, sans compte).
   Au tout premier envoi depuis le site en ligne, FormSubmit envoie un e-mail d'activation à
   bonjour@influencebaghera.com : cliquer sur le lien pour activer. Ensuite, chaque message arrive dans cette boîte.
   Après activation, FormSubmit fournit un identifiant aléatoire à mettre à la place de l'adresse ci-dessous (anti-spam). */
window.BAGHERA_FORMULAIRE = "https://formsubmit.co/ajax/bonjour@influencebaghera.com";

/* Projets mis en avant en premier dans le carrousel de l'accueil (les autres suivent). */
window.BAGHERA_ACCUEIL_PRIORITE = ["triathlon-roses", "etat-pur-lea", "fortuneo-allison", "respectueuse-emturian"];

/* Ordre d'affichage des talents (comme sur la slide « nos talents »). */
window.BAGHERA_ORDRE_TALENTS = ["clara", "lea", "emturian", "allison", "skintelligence", "kristy", "nina", "nastassja"];

/* Logos des marques citées en référence sur les fiches talents : nom → fichier.
   Une marque sans logo ici s'affiche simplement avec son nom. */
window.BAGHERA_LOGOS = {
  "Aroma-Zone": "assets/img/logos/aroma-zone.svg",
  "Easypara": "assets/img/logos/easypara.png",
  "Jaldes": "assets/img/logos/jaldes.png",
  "Jonzac": "assets/img/logos/jonzac.png",
  "Sanoflore": "assets/img/logos/sanoflore.png",
  "Soraali": "assets/img/logos/soraali.png",
  "Yepoda": "assets/img/logos/yepoda.png",
  "Cosmebio": "assets/img/logos/cosmebio.png",
  "Ballot-Flurin": "assets/img/logos/ballot-flurin.svg",
  "CPAM": "assets/img/logos/cpam.svg",
  "Melvita": "assets/img/logos/melvita.svg",
  "Pileje": "assets/img/logos/pileje.svg",
  "Fortepharma": "assets/img/logos/fortepharma.png",
  "HAS": "assets/img/logos/has.png",
};
