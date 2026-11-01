# Site Brebis Romane (refonte)

Site statique : ouvrir `index.html`, aucune installation nécessaire.

## Structure
- Pages : `index.html`, `romane.html`, `histoire.html`, `qualites.html`, `performances.html`, `conseils.html`, `vente.html`, `selection.html`, `sci.html`, `cpo.html`, `cia.html`, `os.html`, `equipe.html`, `partenaires.html`, `actualites.html`, `documents.html`, `presse.html`, `visites.html`, `contact.html`.
- Écrites à la main : `eleveurs.html` (carte de France) et `f1.html`.
- Les autres pages sont **générées** par `python3 outils/generer.py` : pour changer un texte, le modifier dans `outils/generer.py` puis relancer.
- Menu et pied de page : `assets/site.js`. Styles : `assets/style.css`.
- Photos : `assets/img/`. Documents PDF : `assets/docs/`.

## Ajouter un éleveur
`assets/eleveurs.js` : copier un bloc, remplir, ajouter la photo dans `assets/img/`. Supprimer `exemple: true` pour une vraie fiche.

## Crédits
Contenu, photos et documents : site d'origine brebis-romane.com (OS Romane). Carte des régions : `@svg-maps/france.regions` (CC BY-NC 4.0, attribution requise).
