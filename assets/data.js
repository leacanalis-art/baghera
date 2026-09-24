// Contenu du site. Les talents et l'équipe viennent du site existant ;
// les projets, avis et logos partenaires ci-dessous sont des exemples à remplacer
// par les vraies campagnes / retours clients / logos de Léa.
window.BAGHERA = {

  talents: [
    {
      id: "conseils-pharma-lea",
      nom: "Les conseils pharma de Léa",
      niche: "Experte pharma",
      categorie: "sante",
      abonnes: "180K",
      photo: "assets/img/talents/conseils-pharma-lea.jpg",
      bio: "Pharmacienne de formation, Léa décrypte les produits de santé et de parapharmacie avec un regard scientifique et pédagogue, loin des tendances non vérifiées.",
      marques: ["Aroma-Zone", "Easypara", "Sanoflore"]
    },
    {
      id: "emturian",
      nom: "Emturian",
      niche: "Experte skincare",
      categorie: "skincare",
      abonnes: "220K",
      photo: "assets/img/talents/emturian.jpg",
      bio: "Passionnée de dermocosmétique, Emturian décortique les compositions et les routines pour aider sa communauté à choisir des produits adaptés à leur peau.",
      marques: ["Yepoda", "Centifolia", "Cosmebio"]
    },
    {
      id: "clara-morgane",
      nom: "Clara Morgane",
      niche: "Experte féminité",
      categorie: "lifestyle",
      abonnes: "310K",
      photo: "assets/img/talents/clara-morgane.jpg",
      bio: "Figure reconnue de l'univers de la féminité et du bien-être, Clara Morgane accompagne les marques avec une audience fidèle et engagée.",
      marques: ["Soraāli"]
    },
    {
      id: "allison-jungling",
      nom: "Allison Jungling",
      niche: "Experte immobilier",
      categorie: "immobilier",
      abonnes: "95K",
      photo: "assets/img/talents/allison-jungling.jpg",
      bio: "Investisseuse et créatrice de contenu, Allison rend l'investissement immobilier accessible et concret à travers des cas réels et des conseils actionnables.",
      marques: ["Jaldes"]
    }
  ],

  formats: [
    { titre: "Réels & posts", texte: "Formats courts et engageants, pensés pour la portée et la conversion." },
    { titre: "Vidéos longues", texte: "Pour approfondir un sujet expert et installer la confiance dans la durée." },
    { titre: "Podcasts", texte: "Conversations de fond, idéales pour la crédibilité et la fidélisation." },
    { titre: "Tournages terrain", texte: "Immersion dans vos locaux, vos équipes ou vos événements." },
    { titre: "Conférences & ateliers", texte: "Nos créatrices interviennent en direct auprès de vos audiences." }
  ],

  marques: [
    { nom: "Aroma-Zone", fichier: "assets/img/logos/aroma-zone.png" },
    { nom: "Easypara", fichier: "assets/img/logos/easypara.png" },
    { nom: "Yepoda", fichier: "assets/img/logos/yepoda.png" },
    { nom: "Sanoflore", fichier: "assets/img/logos/sanoflore.png" },
    { nom: "Centifolia", fichier: "assets/img/logos/centifolia.png" },
    { nom: "Jaldes", fichier: "assets/img/logos/jaldes.png" },
    { nom: "Soraāli", fichier: "assets/img/logos/soraali.png" },
    { nom: "Cosmebio", fichier: "assets/img/logos/cosmebio.png" }
  ],

  projets: [
    {
      id: "aroma-zone-routine",
      titre: "Routine skincare de saison",
      categorie: "skincare",
      marque: "Aroma-Zone",
      talentId: "emturian",
      resume: "Une série de contenus pédagogiques sur les actifs naturels, portée par une experte reconnue.",
      description: "Campagne construite autour d'une routine complète, avec réels explicatifs et un temps fort en story pour répondre aux questions de la communauté en direct."
    },
    {
      id: "easypara-lancement",
      titre: "Lancement d'une gamme parapharmacie",
      categorie: "sante",
      marque: "Easypara",
      talentId: "conseils-pharma-lea",
      resume: "Décryptage produit par une pharmacienne, pour une crédibilité immédiate auprès de l'audience.",
      description: "Un format vidéo longue pour expliquer les usages et bénéfices, complété par des réels de rappel sur la durée de la campagne."
    },
    {
      id: "jaldes-investissement",
      titre: "Vulgariser l'investissement locatif",
      categorie: "immobilier",
      marque: "Jaldes",
      talentId: "allison-jungling",
      resume: "Une série de cas concrets pour démocratiser l'investissement immobilier auprès d'une audience jeune.",
      description: "Trois épisodes basés sur de vrais dossiers, tournés en conditions réelles, avec un fort taux d'engagement sur les questions en commentaires."
    },
    {
      id: "soraali-feminite",
      titre: "Campagne de notoriété",
      categorie: "lifestyle",
      marque: "Soraāli",
      talentId: "clara-morgane",
      resume: "Une prise de parole forte pour installer la marque auprès d'une communauté fidèle et engagée.",
      description: "Format mixte réels + post carrousel, pensé pour maximiser la portée tout en gardant un message clair et incarné."
    }
  ],

  avis: [
    {
      texte: "Une équipe qui comprend vraiment nos enjeux et qui sait choisir les bons profils, pas juste les plus suivis.",
      auteur: "Responsable marketing",
      role: "Marque partenaire",
      note: 5
    },
    {
      texte: "Le suivi est rigoureux du brief jusqu'au reporting. On sent l'expertise scientifique en plus du savoir-faire influence.",
      auteur: "Chef de produit",
      role: "Marque partenaire",
      note: 5
    },
    {
      texte: "Baghera nous a accompagnés pas à pas pour structurer notre stratégie d'influence en interne, sans jamais nous laisser seuls.",
      auteur: "Fondateur",
      role: "Marque partenaire",
      note: 5
    }
  ],

  equipe: [
    {
      id: "lea-canalis",
      nom: "Léa Canalis",
      role: "Fondatrice · le pilier commercial",
      photo: "assets/img/lea-canalis.jpg",
      bio: "Forte de 8 ans d'expérience dans l'influence, Léa est le pilier commercial de Baghera. Entrepreneuse et extravertie, elle aime le contact humain et transformer chaque rencontre en opportunité. Elle élabore des stratégies d'influence créatives et sur-mesure."
    },
    {
      id: "alix-espenel",
      nom: "Alix Espenel",
      role: "Fondatrice · le socle",
      photo: "assets/img/alix-espenel.jpg",
      bio: "Passionnée par l'influence et dotée de solides compétences en gestion de projet, Alix est le socle de Baghera. Structurée et stratégique, elle coordonne les projets tout en imaginant des campagnes créatives, alignées avec les tendances de l'influence."
    },
    {
      id: "lea-pateras",
      nom: "Léa Pateras Pescara",
      role: "Fondatrice · l'expertise scientifique",
      photo: "assets/img/lea-pateras.jpg",
      bio: "Docteure en pharmacie et créatrice pionnière, Léa est l'expertise scientifique de Baghera. Son regard scientifique et sa maîtrise du digital guident chaque projet avec crédibilité, sens et impact."
    }
  ]
};
