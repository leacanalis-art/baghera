/*
  LISTE DES ÉLEVEURS
  -----------------
  Pour ajouter un éleveur : copier un bloc { ... } ci-dessous, le coller à la suite
  (sans oublier la virgule) et remplir les champs.

  region : identifiant de la région parmi
    ara (Auvergne-Rhône-Alpes)   bfc (Bourgogne-Franche-Comté)  bre (Bretagne)
    cvl (Centre-Val de Loire)    cor (Corse)                    ges (Grand Est)
    hdf (Hauts-de-France)        idf (Île-de-France)            nor (Normandie)
    naq (Nouvelle-Aquitaine)     occ (Occitanie)                pdl (Pays de la Loire)
    pac (Provence-Alpes-Côte d'Azur)

  photo : chemin de l'image, ex. "assets/img/ferme-dupont.jpg" (laisser "" s'il n'y en a pas)
  exemple : true  -> fiche factice affichée avec la mention « Exemple » (supprimer la ligne pour une vraie fiche)
*/
window.ELEVEURS = [
  {
    exemple: true,
    nom: "Prénom Nom",
    exploitation: "Ferme de l'Exemple",
    commune: "Commune",
    departement: "Aveyron (12)",
    region: "occ",
    photo: "",
    telephone: "00 00 00 00 00",
    email: "contact@exemple.fr",
    site: "",
    description: "Courte présentation de l'exploitation et du troupeau.",
    propose: ["Reproducteurs", "Agneaux"]
  },
  {
    exemple: true,
    nom: "Prénom Nom",
    exploitation: "EARL du Exemple",
    commune: "Commune",
    departement: "Cher (18)",
    region: "cvl",
    photo: "",
    telephone: "00 00 00 00 00",
    email: "contact@exemple.fr",
    site: "",
    description: "Courte présentation de l'exploitation et du troupeau.",
    propose: ["Reproducteurs"]
  },
  {
    exemple: true,
    nom: "Prénom Nom",
    exploitation: "GAEC de l'Exemple",
    commune: "Commune",
    departement: "Cantal (15)",
    region: "ara",
    photo: "",
    telephone: "00 00 00 00 00",
    email: "contact@exemple.fr",
    site: "",
    description: "Courte présentation de l'exploitation et du troupeau.",
    propose: ["Agneaux", "Viande"]
  }
];
