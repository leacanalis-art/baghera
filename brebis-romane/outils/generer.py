#!/usr/bin/env python3
"""Génère les pages HTML du site à partir du contenu ci-dessous.

Usage :  python3 outils/generer.py        (depuis le dossier brebis-romane/)

Les pages « eleveurs.html » et « f1.html » sont écrites à la main et ne sont pas touchées.
Pour modifier un texte : le changer ici, puis relancer le script.
"""
import os

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(RACINE)


def taille(nom):
    p = "assets/docs/" + nom
    if not os.path.exists(p):
        return ""
    o = os.path.getsize(p)
    return f"{o/1024/1024:.1f} Mo" if o > 1024 * 1024 else f"{round(o/1024)} Ko"


def doc(nom, titre, desc=""):
    d = f"<span>{desc}</span>" if desc else ""
    return (f'<a class="doc" href="assets/docs/{nom}" target="_blank" rel="noopener"><span class="doc-ico" aria-hidden="true">PDF</span>'
            f'<span class="doc-txt"><strong>{titre}</strong>{d}<em>{taille(nom)}</em></span><span class="doc-dl">Télécharger</span></a>')


def docs(*liste):
    return '<div class="docs">' + "".join(doc(*x) for x in liste) + "</div>"


def img(nom, alt="Brebis Romane", cls=""):
    c = f' class="{cls}"' if cls else ""
    return f'<img{c} src="assets/img/{nom}" alt="{alt}" loading="lazy">'


def fig(nom, alt="Brebis Romane"):
    return f'<figure class="fig">{img(nom, alt)}</figure>'


def galerie(prefixe, debut, fin, alt):
    return '<div class="galerie">' + "".join(
        f'<a href="assets/img/{prefixe}-{i:02d}.jpg" target="_blank" rel="noopener">{img(f"{prefixe}-{i:02d}.jpg", alt)}</a>'
        for i in range(debut, fin + 1)) + "</div>"


def page(fichier, titre, h1, sous, corps, extra_title=None):
    html = f'''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{titre} — Brebis Romane</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<header id="site-header"></header>
<main>
  <div class="page-title"><div class="wrap">
    <h1>{h1}</h1>
    <p>{sous}</p>
  </div></div>
{corps}
</main>
<footer id="site-footer"></footer>
<script src="assets/site.js"></script>
</body>
</html>
'''
    open(fichier, "w", encoding="utf-8").write(html)


def sec(contenu, alt=False, etroit=False):
    c = "wrap prose" if etroit else "wrap"
    a = ' class="alt"' if alt else ""
    return f'  <section{a}>\n    <div class="{c}">\n{contenu}\n    </div>\n  </section>'


def deux(gauche, droite, inverse=False):
    if inverse:
        gauche, droite = droite, gauche
    return f'<div class="deux"><div class="prose">{gauche}</div><div>{droite}</div></div>'


def cartes(*items):
    return '<div class="grid trois">' + "".join(
        f'<a class="card lien" href="{h}"><h3>{t}</h3><p>{d}</p><span class="fleche">Voir →</span></a>' for h, t, d in items) + "</div>"


# ---------------------------------------------------------------- LA ROMANE
page("romane.html", "La Romane", "La Romane", "Brebis productive et maternelle", "\n".join([
    sec(deux(
        """<p class="eyebrow">Race jeune</p>
<h2>Une brebis créée pour la productivité</h2>
<p>La Romane (anciennement l'Inra 401) a été créée par l'INRA dans les années 70 au domaine de Bourges afin d'augmenter la productivité du troupeau ovin français. La race ovine est issue de croisements successifs entre animaux ½ sang Romanov et Berrichon du Cher.</p>
<ul class="liste">
<li><b>La Romanov</b> est une race extrêmement prolifique, aux grandes qualités d'élevage (précocité sexuelle, saison sexuelle étendue, instinct maternel développé et bonne valeur laitière), mais elle est passablement conformée et a une laine grossière.</li>
<li><b>Le Berrichon du Cher</b>, race bouchère par excellence, présente aussi des qualités de précocité, de rusticité et d'aptitude à la marche.</li>
</ul>""", fig("romane-01.jpg", "Brebis maternelle Romane"))),
    sec("""<h2>Ses principales qualités</h2>
<p class="lead">La Romane a acquis les caractéristiques cumulées de ses origines : c'est ce qu'il est convenu d'appeler une très bonne mère.</p>
<div class="grid">
<div class="card"><div class="chiffre">200 à 230 %</div><h3>Une forte productivité</h3><p>Prolificité moyenne de 200 à 230 % suivant la saison.</p></div>
<div class="card"><h3>Des qualités maternelles</h3><p>Bonne valeur laitière des mères, comportement maternel très développé (mise bas aisée, adoption facile…). Possibilité de désaisonner naturellement la production : des agneaux à toutes les saisons, sans hormones.</p></div>
<div class="card"><h3>La rusticité</h3><p>L'implantation de la race n'est pas limitée : on la retrouve dans toutes les régions françaises et tous les types d'élevages (plaine, plateau séchant, montagne, bergerie intégrale, sous-bois, transhumance…).</p></div>
</div>
<p style="margin-top:1.5rem"><a class="btn second" href="qualites.html">Toutes ses qualités</a> <a class="btn second" href="histoire.html">Son histoire</a></p>""", alt=True),
    sec("""<h2>Une brebis au service de la filière</h2>
<p>La production de viande ovine nationale doit et devra sa survie à quelques éléments majeurs :</p>
<ul class="liste"><li>Une qualité irréprochable</li><li>La sécurité</li><li>Une production d'agneaux régulière sur l'année</li><li>Un prix accessible au consommateur</li></ul>
<p>La race ovine Romane s'inscrit complètement dans cette démarche. Elle offre aux éleveurs un « support femelle » correspondant aux besoins de la filière : une brebis productive, facile à élever, suffisamment rustique pour s'adapter à tous les types d'élevages et de milieux. Par un croisement terminal avec des béliers qualifiés améliorateurs bouchers, elle permet de produire des agneaux labellisables à toutes périodes de l'année.</p>
<h3 style="margin-top:2rem">Les fiches de présentation</h3>""" + docs(
        ("Recto-verso-race---version-tech-v2.pdf", "Fiche de présentation de la race Romane", "Avec comparatif aux autres races"),
        ("Recto-verso-F1-v2.pdf", "Fiche de présentation de la F1 Romane", "Brebis croisée Romane × race bouchère")), etroit=True),
]))

page("histoire.html", "Son histoire", "L'histoire de la Romane", "Une aventure née à l'INRAe, portée par les éleveurs", "\n".join([
    sec(deux("""<p>L'histoire de la Romane, c'est d'abord une aventure. Une aventure menée par l'INRAe dans un premier temps. Puis, au fil du temps, les éleveurs se sont associés à ce projet. Des éleveurs avant-gardistes, passionnés, qui ont œuvré contre vents et marées pour réussir à imposer cette race comme une race de tout premier plan dans le paysage ovin français.</p>
<p>La Romane (anciennement Inra 401) est née dans les années 70, au domaine de la Sapinière, près de Bourges, avec comme objectif d'augmenter la productivité du troupeau ovin français. Elle est issue de croisements successifs entre animaux Romanov et Berrichon du Cher.</p>
<ul class="liste">
<li><b>La Romanov</b> est une race extrêmement prolifique, aux grandes qualités d'élevage (précocité sexuelle, saison sexuelle étendue, instinct maternel développé et bonne valeur laitière), mais elle est passablement conformée et a une laine grossière.</li>
<li><b>Le Berrichon du Cher</b>, race bouchère par excellence, présente aussi des qualités de précocité, de rusticité et d'aptitude à la marche.</li>
</ul>""", fig("histoire-01.jpg", "Troupeau de brebis Romane"))),
    sec("""<h2>De l'INRAe à l'OS Romane</h2>
<p>Tout d'abord portée par l'INRAe, la race s'est structurée autour d'une AUSI (Association des Utilisateurs Sélectionneurs de l'INRA 401), pour ensuite évoluer en UPRA (Unité de Promotion des Races), puis en OS (Organismes de Sélection) au gré des différentes lois d'orientation agricoles.</p>
<p>C'est aujourd'hui l'<b>OS ROMANE</b> qui dispose de l'agrément officiel pour porter la race et son schéma de sélection.</p>
<h3 style="margin-top:2rem">Comment est née la Romane&nbsp;?</h3>""" + docs(("souche.pdf", "Comment est née la Romane ?", "Photos des premières Romane")) +
        '<h3 style="margin-top:2rem">En images</h3>' + galerie("histoire", 2, 4, "Photo d'archive de la race Romane"), alt=True, etroit=True),
]))

# ---------------------------------------------------------------- QUALITÉS
page("qualites.html", "Ses qualités", "Une race aux multiples qualités", "Ce que la Romane apporte à l'éleveur et à la filière", "\n".join([
    sec(deux("""<p class="lead">Au fil des années, la Romane a cumulé le meilleur de ses deux races d'origine.</p>
<h2>Une grande facilité d'élevage</h2>
<p>Grâce à de formidables qualités maternelles :</p>
<ul class="liste">
<li>Un <b>instinct maternel</b> très développé (facilité d'agnelage, adoption facile, peu d'interventions…).</li>
<li>Une <b>capacité laitière</b> en phase avec la prolificité, qui permet de nourrir correctement 2 agneaux par brebis, et 3 pour les meilleures d'entre elles.</li>
<li>Une <b>aptitude naturelle au dessaisonnement</b>, qui permet une production d'agneaux étalée sur l'année, sans utilisation d'hormones.</li>
<li>Une <b>grande capacité d'adaptation</b> à tous les systèmes de production et à toutes les régions.</li>
</ul>""", fig("qualites-01.jpg", "Brebis Romane et son agneau"))),
    sec(deux("""<h2>Une forte productivité</h2>
<p>Prolificité moyenne de 2,2 agneaux par agnelage (variable selon la saison), avec plus de 1,8 agneau vendu ou gardé par brebis et par an, et jusqu'à 2,5 en système accéléré.</p>
<p>Les agneaux sont <b>vifs</b> : ils se lèvent très vite et prennent bien le colostrum. Une petite journée d'observation en case suffit pour s'assurer que tout se passe bien.</p>
<h2 style="margin-top:2rem">La rusticité</h2>
<p>On retrouve la Romane dans toutes les régions de France, du nord des Pays-Bas au sud du Portugal, ainsi qu'en Espagne et en Suisse. Elle s'adapte à tous types d'élevages, des plus pâturants aux systèmes bergerie, transhumance… Son implantation n'est pas limitée.</p>""",
        fig("qualites-02.jpg", "Brebis Romane au pré"), True), alt=True),
    sec("""<h2>Elle répond aux besoins de chacun</h2>
<div class="grid">
<div class="card"><h3>Des éleveurs</h3><p>Des animaux rentables, faciles à élever, productifs, qui s'adaptent à tous les systèmes.</p></div>
<div class="card"><h3>De la filière viande</h3><p>Des animaux de bonne qualité, produits tout au long de l'année. Elle s'utilise en pur comme en croisement terminal avec une race bouchère.</p></div>
<div class="card"><h3>De la transition agroécologique</h3><p>Grâce à sa grande rusticité et sa grande capacité d'adaptation. Le schéma génétique intègre ces nouvelles attentes : résistance aux parasites, efficacité alimentaire…</p></div>
</div>"""),
    sec("""<h2>En chiffres</h2>
<p class="lead">Données du contrôle de performance 2023, avec 1 agnelage par an. Pour un troupeau de 300 brebis, la Romane représente entre 55 et 138 agneaux vendus de plus que les grandes races allaitantes françaises.</p>
<div class="tableau" style="margin-top:1.5rem"><table>
<thead><tr><th>Race</th><th>Agneaux / brebis / an</th><th>Différence avec la Romane</th><th>Agneaux pour 300 brebis / an</th></tr></thead>
<tbody>
<tr class="premier"><td>Romane</td><td>1,83</td><td>—</td><td>—</td></tr>
<tr><td>Lacaune (Ovitest)</td><td>1,69</td><td>0,14</td><td>− 42</td></tr>
<tr><td>Île de France</td><td>1,53</td><td>0,30</td><td>− 90</td></tr>
<tr><td>Grivette</td><td>1,57</td><td>0,26</td><td>− 78</td></tr>
<tr><td>Noire du Velay</td><td>1,42</td><td>0,41</td><td>− 123</td></tr>
<tr><td>BMC</td><td>1,40</td><td>0,43</td><td>− 129</td></tr>
</tbody></table></div>
<div class="grid" style="margin-top:1.5rem">
<div class="card"><div class="chiffre">2,38</div><p style="margin:0">agneaux par brebis et par an en 3 agnelages en 2 ans (jusqu'à 2,5 dans les meilleurs troupeaux)</p></div>
<div class="card"><div class="chiffre">&lt; 10 %</div><p style="margin:0">des agnelages nécessitent une intervention</p></div>
<div class="card"><div class="chiffre">90 %</div><p style="margin:0">de fertilité possible sur des agnelages d'automne, avec une prolificité autour de 2</p></div>
<div class="card"><div class="chiffre">165 €</div><p style="margin:0">de marge brute par EMP chez les meilleurs sélectionneurs (avec aides spécifiques)</p></div>
</div>
<p style="margin-top:1.5rem">""" + doc("Recto-verso-race---version-tech-v2.pdf", "Fiche de présentation de la race Romane", "Avec comparatif aux autres races") + "</p>", alt=True),
    sec('<h2>En images</h2>' + galerie("qualites", 3, 9, "Brebis Romane")),
]))

# ---------------------------------------------------------------- PERFORMANCES
page("performances.html", "Ses performances", "Ses performances", "Résultats du contrôle de performance", "\n".join([
    sec("""<p class="lead">Retrouvez toutes les données de contrôle de performance des troupeaux, adhérents à l'OS ou non, par campagne.</p>""" + docs(
        ("Donnees_CPO_2024_064.pdf", "Résultats du contrôle de performance : campagne 2024"),
        ("Donnees_CPO_2023_064.pdf", "Résultats du contrôle de performance : campagne 2023"),
        ("Donnees_CPO_2022_064.pdf", "Résultats du contrôle de performance : campagne 2022"),
        ("Bilan-CPO-Romane-2021.pdf", "Bilan CPO Romane 2021"),
        ("Bilan-du-Controle-de-Performances-Ovins-Allaitants_campagne-2023.pdf", "Bilan du contrôle de performance en ovins allaitants", "Campagne 2023")) +
        '<p style="margin-top:2rem"><a class="btn second" href="cpo.html">Comprendre le contrôle de performance</a> <a class="btn second" href="qualites.html">Voir les chiffres clés de la race</a></p>', etroit=True),
]))

# ---------------------------------------------------------------- CONSEILS
page("conseils.html", "Conseils d'élevage", "Conseils d'élevage", "Lutte, agnelles et allaitement artificiel", "\n".join([
    sec("""<h2>Bien réussir la lutte</h2>""" + docs(
        ("FicheLutteBrebis.pdf", "Fiche conseil pour la lutte de vos brebis"),
        ("FicheLutteBeliers.pdf", "Fiche conseils pour la lutte de vos béliers"),
        ("Guide-Agnelles.pdf", "Fiche conseils pour vos agnelles de renouvellement")), etroit=True),
    sec(deux("""<h2>Les brebis</h2>
<ul class="liste">
<li>L'évaluation permanente de l'état d'engraissement des brebis permet de gérer une alimentation au meilleur coût tout au long de l'année.</li>
<li>Penser au <b>flushing</b> pour avoir des brebis en reprise d'état au moment de la lutte (niveau d'état corporel entre 2 et 2,5). Les transitions alimentaires sont nécessaires lors de changements d'alimentation, pour ne pas être trop brutal.</li>
<li><b>La tonte</b> : 1 mois avant la mise bas (attention à ne pas trop les secouer) ou 2 mois avant la lutte si nécessaire. Déparasitage (externe et interne) et parage des onglons avant la lutte.</li>
<li>Une brebis peut être croisée avec un bélier d'une race à viande pour optimiser la conformation des agneaux. L'utilisation d'un bélier de race pure permet la production d'agnelles de renouvellement ou de reproducteurs.</li>
<li>Si vous ne pouvez pas trier vos meilleures brebis, renouvelez souvent les béliers Romane.</li>
<li>Les sélectionneurs et l'équipe de l'OS sont à votre disposition pour vous fournir le renouvellement de votre troupeau.</li>
</ul>""", fig("conseils-01.jpg", "Brebis Romane")), alt=True),
    sec(deux("""<h2>Les béliers</h2>
<ul class="liste">
<li>Le bélier doit être âgé de <b>12 mois minimum</b> pour la première lutte.</li>
<li>La fabrication des spermatozoïdes dure 60 jours : préparez vos béliers <b>2 mois avant la lutte</b>.</li>
<li>Pratiquer un <b>flushing</b> : fourrage de bonne qualité et apport supplémentaire de concentrés. En plus, un apport en minéraux et vitamines est conseillé.</li>
<li>Un déparasitage externe et interne avant la lutte est prudent. Tondre si nécessaire.</li>
<li>Prévoir un nombre de béliers suffisant : <b>1 bélier pour 20 brebis</b> en contre-saison (ou 10 agnelles), et <b>1 bélier pour 40 brebis</b> pendant la saison (ou 20 agnelles).</li>
</ul>
<p><b>Une bonne lutte = un bélier en bonne santé.</b></p>""", fig("conseils-02.jpg", "Béliers Romane"), True)),
    sec("""<h2 id="allaitement">L'allaitement artificiel</h2>
<p>Une vidéo de Hubert Mony, président de l'OS Romane, présentant ses bonnes pratiques pour un allaitement réussi.</p>
<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/FcA7F0FUL7s" title="Allaitement artificiel : bonnes pratiques" loading="lazy" allowfullscreen></iframe></div>
<p><a href="https://www.youtube.com/watch?v=FcA7F0FUL7s" target="_blank" rel="noopener">Voir la vidéo sur YouTube</a></p>""" + docs(
        ("Recto-verso-AA-v2.pdf", "Fiche allaitement artificiel Romane"),
        ("Allaitement-Artificiel.pdf", "Fiche conseil pour l'allaitement artificiel")), alt=True, etroit=True),
]))

# ---------------------------------------------------------------- ACHETER
page("vente.html", "Vente de reproducteurs", "Acheter des reproducteurs", "Agnelles, béliers et insémination", "\n".join([
    sec("""<div class="cta-band" style="margin-bottom:2.5rem"><div><h2>Trouver un éleveur près de chez vous</h2><p>Cliquez sur la carte de France pour voir les éleveurs de brebis Romane par région.</p><a class="btn" href="eleveurs.html">Ouvrir la carte des éleveurs</a></div><div>""" + img("vente-01.jpg", "Troupeau de brebis Romane au pré", "rond") + "</div></div>"),
    sec(deux("""<h2>Les agnelles</h2>
<p>Nous proposons des agnelles issues de brebis inscrites et de béliers provenant de nos stations de contrôle. Elles viennent d'élevages sélectionneurs ou multiplicateurs, répartis sur toute la France.</p>
<p>L'achat d'agnelles peut se faire dans différents contextes :</p>
<ul class="liste">
<li>simplification du système, avec achat de renouvellement et croisement terminal pour les agneaux destinés à la boucherie ;</li>
<li>avoir une troupe dessaisonnée pour produire des agneaux en contre-saison ;</li>
<li>augmentation de troupeau, ou création d'un nouvel atelier.</li>
</ul>
<p><a href="contact.html">Contactez-nous</a> pour étudier votre projet et trouver des agnelles qui correspondront à vos besoins, aux périodes les plus favorables pour vous.</p>""", fig("vente-02.jpg", "Agnelles Romane en bergerie"), True), alt=True),
    sec(deux("""<h2>Les béliers</h2>
<p>Chaque année, près de <b>350 béliers Romane</b> sont vendus. Ils sont issus à 100 % de SCI (stations de contrôle individuel), dans l'Aude ou dans le Cher.</p>
<p>Les deux périodes de sortie des béliers sont <b>début mars</b> et <b>fin mai</b>.</p>
<p><a href="contact.html">Contactez-nous</a> pour réserver vos reproducteurs Romane et assurer le renouvellement de votre troupeau.</p>
<p><a href="sci.html">Plus de détails sur les stations de contrôle</a></p>
<p>Séduit par le croisement terminal ? N'hésitez pas à contacter les OS de races bouchères pour acheter des béliers de qualité, qui amélioreront la conformation de vos agneaux et la qualité des carcasses.</p>""", fig("vente-05.jpg", "Béliers Romane"))),
    sec(deux("""<h2>L'insémination animale (IA)</h2>
<p>Le centre d'insémination, situé à Verdilly dans l'Aisne, peut fournir des doses d'insémination toute l'année, dans toute la France. En frais ou en congelé, en paternité ou en mélange.</p>
<p><a href="contact.html">Contactez-nous</a> si vous souhaitez avoir recours à l'IA pour améliorer les performances de votre troupeau.</p>
<p><a href="cia.html">Pourquoi utiliser l'IA ? La réponse ici</a></p>""", fig("vente-04.jpg", "Brebis Romane en bergerie"), True), alt=True),
    sec('<div style="text-align:center"><h2>Un projet&nbsp;? Parlons-en.</h2><p class="lead" style="margin-inline:auto">Commercialisation et diffusion : Léa Dumont, 06 25 25 60 18.</p><p><a class="btn" href="contact.html">Nous contacter</a></p></div>'),
]))

# ---------------------------------------------------------------- SÉLECTION
page("selection.html", "Le schéma de sélection", "Le schéma de sélection", "Un schéma collectif qui place la race au centre", "\n".join([
    sec(deux("""<p class="lead">Le schéma de sélection Romane est un schéma collectif qui place la race au centre de toutes les orientations.</p>
<p>L'objectif est d'obtenir des animaux rentables, faciles à élever, capables de s'adapter à tous les systèmes de production grâce à leur rusticité.</p>
<p>Les stations de contrôle sont le pivot de ce travail. Aujourd'hui, nous bénéficions en plus des apports des techniques de génomique, et nous travaillons en plus la résistance aux parasites gastro-intestinaux.</p>""" + docs(("Recto-verso-schema-V2.pdf", "Présentation du schéma Romane")), fig("sci-01.jpg", "Béliers en station de contrôle"))),
    sec('<h2>Les quatre piliers</h2>' + cartes(
        ("sci.html", "Les stations de contrôle (SCI)", "Près de 500 béliers évalués chaque année, dans les mêmes conditions."),
        ("cpo.html", "Le contrôle de performance (CPO)", "« On ne peut améliorer que ce que l'on mesure. »"),
        ("cia.html", "Le centre d'insémination (CIA)", "De la semence de l'élite de la race, toute l'année, dans toute la France.")), alt=True),
    sec("""<h2 id="projets">Les projets</h2>
<p>L'OS Romane participe à plusieurs projets de la filière. Nous sommes toujours en veille sur les améliorations à apporter à notre schéma de sélection et sur les nouveaux caractères à évaluer, dans l'optique de faire évoluer notre race au service des éleveurs.</p>
<p>L'OS Romane poursuit le travail sur le programme <b>OSIRIS</b> (Objectifs de Sélection Innovants en Ruminants et Indices de Synthèse). Son objectif est de fournir un outil d'aide à la décision, qui permettra aux Organismes de Sélection de définir les orientations de leurs races en se basant sur les valeurs économiques des caractères.</p>
<p>Ce programme répond à notre objectif d'avoir un schéma de sélection efficace, qui offre aux éleveurs des animaux ayant un vrai potentiel de rentabilité.</p>
<div class="logos">""" + img("projets-01.jpg", "Logo du programme OSIRIS") + img("projets-02.jpg", "Programme OSIRIS") + "</div>", etroit=True),
]))

page("sci.html", "Stations de contrôle", "Les stations de contrôle individuel", "Où et comment les béliers Romane sont évalués", "\n".join([
    sec(deux("""<p class="lead">Deux stations de contrôle individuel (SCI) évaluent les béliers Romane : une dans l'Aude, aux Brunels, et une dans le Cher, sur le site de l'INRAe la Sapinière.</p>
<p>Chaque année, près de <b>500 béliers</b> sont évalués. Venant d'une vingtaine d'élevages différents, ils sont tous placés dans les mêmes conditions afin d'annuler l'effet milieu, avec la même alimentation et le même environnement.</p>
<p>L'évaluation dure <b>70 jours</b>, temps nécessaire pour extérioriser les aptitudes bouchères et ainsi les comparer. Les agneaux sont comparés au sein d'une même bande, et chaque bande doit comprendre un minimum de 50 béliers.</p>""", fig("sci-02.jpg", "Station de contrôle individuel"))),
    sec("""<h2>Les étapes de l'évaluation</h2>
<ol class="etapes">
<li><h3>Le tri avant l'évaluation</h3><p>Un premier tri génétique est effectué sur les critères de PAT, de qualités maternelles, de qualification des mères et de génotypage tremblante. Les agneaux sont issus en grande majorité de mères à bélier (MB) et de béliers d'insémination, et doivent être nés dans une même période de 3 semaines. Les techniciens de l'OS passent ensuite en ferme choisir les meilleurs individus d'un point de vue phénotypique : développement homogène, bons aplombs, bonne rectitude de dos, pas de souci aux dents ou aux testicules.</p></li>
<li><h3>La phase d'adaptation</h3><p>À l'arrivée en station, les jeunes béliers sont pesés, l'identification de chacun est vérifiée, un numéro de travail est attribué, et les vaccins et prises de sang nécessaires sont effectués. Durant 15 jours, ils s'habituent à leur nouveau milieu et à une alimentation élevée, avec un concentré distribué à volonté.</p></li>
<li><h3>La phase de contrôle</h3><p>Elle dure 8 semaines, durant lesquelles l'aliment est distribué à volonté, afin d'avoir un niveau de croissance élevé et que les béliers puissent exprimer tout leur potentiel. Ils sont manipulés à trois occasions : début de contrôle (double pesée, avec 24 h d'intervalle), mi-contrôle (simple pesée + 1<sup>re</sup> échographie dorsale) et fin de contrôle (double pesée + 2<sup>e</sup> échographie). L'échographie dorsale mesure l'épaisseur du gras dorsal et celle du muscle de la noix côtelette. Ce travail est réalisé par un technicien mandaté par l'Institut de l'Élevage.</p></li>
<li><h3>Le pointage</h3><p>Une fois l'évaluation terminée, chaque bélier est pointé pour évaluer sa conformation, toujours au sein de la même bande. Des éleveurs, techniciens d'OP ou d'OS le caractérisent par 3 notes : dos, épaules et gigots. Une grande attention est portée à tous les critères de longévité fonctionnelle : rectitude du dos, qualité des aplombs, dents, testicules. Les animaux non conformes aux critères indispensables à une carrière en élevage sont réformés.</p></li>
<li><h3>Le tri final</h3><p>Chaque bélier obtient un index de synthèse de SCI, basé sur 4 index calculés à la suite de l'évaluation : croissance, PAT, gras et morphologie. Les meilleurs vont au centre d'insémination, afin de continuer à améliorer la race. Les autres sont attribués par l'OS aux sélectionneurs, aux multiplicateurs et aux utilisateurs. Une partie peut aussi partir à l'étranger. Tous les animaux non conformes pour être de bons reproducteurs sont éliminés.</p></li>
</ol>""", alt=True),
    sec(deux("""<h2>Des nouveautés sur les béliers de SCI</h2>
<p>Depuis 2023, les béliers d'insémination sont évalués sur leur <b>résistance au parasitisme</b> à la suite du protocole SCI. À l'INRAe de la Sapinière, les béliers sont également évalués sur leur <b>efficacité alimentaire</b> au niveau des concentrés.</p>
<p>Ci-contre : l'observation des œufs de strongles au microscope. Les œufs sont les formes ovales remplies de gris ; il y en a 7 ici.</p>""" + docs(("Recto-verso-beliers-v2.pdf", "Fiche de présentation bélier et SCI")), fig("sci-05.jpg", "Œufs de strongles observés au microscope"))),
    sec('<h2>En images</h2>' + galerie("sci", 3, 8, "Béliers en station de contrôle"), alt=True),
]))

page("cpo.html", "Contrôle de performance", "Le contrôle de performance", "« On ne peut améliorer que ce que l'on mesure »", "\n".join([
    sec("""<p class="lead">Cette phrase résume à elle seule l'utilité du contrôle de performance (CPO).</p>
<p>Le contrôle de performance est un outil de mesure des performances techniques des troupeaux. Il est essentiel au schéma de sélection, car c'est à partir des données recueillies dans les élevages que sont calculés les index, et c'est à partir de ces index que sont établies les stratégies de sélection en élevage.</p>
<p>Mais le contrôle de performance n'est pas réservé aux sélectionneurs du schéma. D'abord, la maîtrise des performances techniques est indispensable à une bonne rentabilité. Ensuite, tout éleveur qui trie et élève ses agnelles de renouvellement est un sélectionneur. À ce titre, le contrôle de performance est un outil destiné à tous les éleveurs souhaitant améliorer la qualité de leur troupeau.</p>
<p>En plus de l'appui quotidien des techniciens, un bilan récapitulatif des performances de votre troupeau (le Bilan Technique Ovin, BTO) vous est fourni chaque année. Au quotidien, l'OS Romane délègue la réalisation des mesures aux organismes locaux, plus proches des éleveurs (chambres d'agriculture…).""", etroit=True),
    sec("""<h2>Ce que le CPO vous apporte</h2>
<div class="grid">
<div class="card"><h3>Un suivi individualisé des animaux</h3><ul class="liste"><li>Trier les agnelles de renouvellement au meilleur potentiel génétique</li><li>Trier les femelles improductives</li><li>Surveiller et piloter la croissance des agneaux</li></ul></div>
<div class="card"><h3>Une comparaison</h3><p>Avec d'autres troupeaux.</p></div>
<div class="card"><h3>Des conseils</h3><p>Ceux d'un technicien.</p></div>
</div>
<h2 style="margin-top:2.5rem">Intérêts économiques</h2>
<div class="grid">
<div class="card"><div class="chiffre">+ 10 000 €</div><p style="margin:0">Augmenter la productivité numérique de vos brebis : pour 300 brebis, 0,20 agneau par brebis de plus génère une hausse des ventes de plus de 10 000 euros.</p></div>
<div class="card"><div class="chiffre">80 à 110 €</div><p style="margin:0">Réformer plus tôt vos brebis improductives : le coût annuel d'une brebis improductive est de 80 à 110 euros (source Inosys).</p></div>
<div class="card"><div class="chiffre">7,35 €</div><p style="margin:0">Augmenter la vitesse de croissance des agneaux : un retard de croissance de 50 g/jour entraîne un surcoût d'engraissement de 7,35 € par agneau (aliment à 350 €/t, agneau de 19 kg de carcasse).</p></div>
</div>
<p style="margin-top:2rem">Ce service vous intéresse ? <a href="contact.html">Contactez-nous</a> : nous vous orienterons vers l'organisme en charge de la réalisation du contrôle dans votre région.</p>""", alt=True),
    sec("<h2>Documents</h2>" + docs(
        ("Recto-verso-CPO-v2.pdf", "Fiche de présentation du CPO"),
        ("Donnees_CPO_2024_064.pdf", "Bilan du contrôle de performance en ovins allaitants", "Campagne 2024"),
        ("Bilan-du-Controle-de-Performances-Ovins-Allaitants_campagne-2023.pdf", "Bilan du contrôle de performance en ovins allaitants", "Campagne 2023"),
        ("Donnees_CPO_2022_064.pdf", "Bilan CPO Romane 2022"),
        ("Bilan-CPO-Romane-2021.pdf", "Bilan CPO Romane 2021")), etroit=True),
]))

page("cia.html", "Insémination", "Le centre d'insémination animale", "Pourquoi inséminer ses brebis ?", "\n".join([
    sec(deux("""<p class="lead">Depuis 2020, le centre d'insémination d'OSON, situé à Verdilly dans l'Aisne, accueille les béliers Romane.</p>
<p>L'expérience d'OSON nous permet de vous fournir toute l'année de la semence, fraîche ou congelée, dans toute la France.</p>
<p>Pour produire des agnelles de renouvellement, deux solutions s'offrent à vous : acheter des béliers, ou utiliser l'insémination animale. Aujourd'hui, l'IA a de nombreux avantages et permet d'améliorer les résultats de l'exploitation.</p>""" + docs(("Recto-verso-IA-v2.pdf", "Fiche sur les intérêts de l'insémination")), fig("cia-01.jpg", "Brebis au pré"))),
    sec("""<h2>Pourquoi inséminer&nbsp;?</h2>
<div class="grid">
<div class="card"><h3>Améliorer le niveau génétique de votre troupeau</h3><p>Les béliers utilisés pour l'IA sont l'élite de la race. Ils sont tous issus de station de contrôle et choisis en fonction de leurs index et de leurs résultats en station (croissance, conformation bouchère, épaisseur de gras…). Leur utilisation améliore les performances du troupeau : productivité et longévité des brebis, qualité des agneaux.</p></div>
<div class="card"><h3>Optimiser les résultats technico-économiques</h3><p>L'insémination n'est pas une charge mais un investissement sur votre troupeau. Les brebis issues d'insémination ont une meilleure valeur laitière : la part de la croissance des agneaux liée à l'allaitement augmente, celle des concentrés diminue. Dans notre race, les agneaux des brebis ayant les meilleurs index de valeur laitière partent plus de 10 jours plus tôt. Une étude récente démontre qu'ils offrent une marge supérieure de 10 euros par animal.</p></div>
<div class="card"><h3>Améliorer l'organisation du travail</h3><p>Inséminer permet d'avoir un agnelage très groupé, s'étalant sur une dizaine de jours (hors repasse). L'organisation du bâtiment et du temps de travail se prévoit en amont. Les agneaux sont homogènes, le sevrage et l'engraissement plus faciles.</p></div>
</div>
<p style="margin-top:1.5rem">Depuis 2023, l'évaluation des béliers destinés au centre d'IA porte aussi sur leur résistance aux parasites gastro-intestinaux. Une partie de nos béliers disponibles est évaluée sur l'efficacité alimentaire. Vous disposez ainsi d'outils supplémentaires pour améliorer la qualité de votre troupeau.</p>
<p><a class="btn" href="contact.html">Demander des doses d'insémination</a></p>""", alt=True),
    sec('<h2>En images</h2>' + galerie("cia", 2, 4, "Insémination et centre d'IA")),
]))

# ---------------------------------------------------------------- OS
page("os.html", "L'OS Romane", "L'Organisme de sélection", "Le « parlement » de la race ovine Romane", "\n".join([
    sec(deux("""<p class="lead">Véritable parlement de la race ovine, dans lequel se regroupent tous les acteurs d'une filière raciale, l'OS Romane est organisé sous forme de coopérative.</p>
<p>Cette coopérative est gérée par un conseil d'administration composé d'éleveurs sélectionneurs de la race Romane.</p>
<p>L'OS Romane définit, pour une race donnée, ses caractéristiques, certifie l'appartenance d'un animal à cette race, définit les orientations de sélection et le programme qui en découle.</p>
<p>Elle a en charge la tenue du Fichier Racial (généalogies, caractéristiques des ovins…) et délivre les documents officiels des reproducteurs ovins.</p>
<p>Elle assure aussi la promotion de la race et de son programme, en France comme à l'étranger.</p>""", fig("os-01.jpg", "Troupeau de brebis Romane"))),
    sec("""<h2>Ses rôles</h2>
<p>L'OS Romane est l'organisme de sélection officiel de la race, agréé par le ministère de l'Agriculture. Son rôle est essentiel à la vie de la race et ses responsabilités sont nombreuses :</p>
<ul class="liste">
<li>Il définit les objectifs de sélection, les caractères sélectionnés et leur pondération.</li>
<li>Il tient le livre généalogique de la race et s'assure de la bonne variabilité génétique (consanguinité).</li>
<li>Il est responsable du bon enregistrement des données de généalogie des animaux, de l'édition des certificats zootechniques et du contrôle de performance (délégué à des opérateurs locaux).</li>
<li>Le calcul et la publication des index sont faits sous sa responsabilité.</li>
<li>Il assure toute l'animation de la vie de la race, au travers des salons et de différents rassemblements.</li>
</ul>
<p>En plus de ces rôles officiels, l'OS Romane assure la <b>commercialisation des reproducteurs</b> mâles et femelles issus des élevages adhérents.</p>""", alt=True, etroit=True),
    sec("""<h2>Ses services</h2>
<p>L'équipe de l'OS est à la disposition des éleveurs adhérents ou des nouveaux éleveurs sur différents sujets :</p>
<div class="grid">
<div class="card"><h3>Conseils techniques</h3></div><div class="card"><h3>Conseils en génétique</h3></div>
<div class="card"><h3>Démarches sanitaires de la filière</h3><p>Plan Visna Maedi…</p></div>
<div class="card"><h3>Commercialisation des reproducteurs</h3></div><div class="card"><h3>Insémination</h3></div>
</div>"""),
    sec("""<div class="cta-band"><div><h2>Adhérer à l'OS Romane</h2><p>Adhérer se fait au travers de la souscription de capital social. Vous accédez ainsi à tous les services de l'OS, à des débouchés commerciaux, ainsi qu'à des tarifs préférentiels pour l'insémination et l'achat de béliers.</p><a class="btn" href="contact.html">Nous contacter pour adhérer</a></div><div>""" + img("os-01.jpg", "Brebis Romane", "rond") + "</div></div>", alt=True),
]))

page("equipe.html", "Conseil d'administration et équipe", "Conseil d'administration et équipe", "Ceux qui font vivre l'OS Romane au quotidien", "\n".join([
    sec(deux("""<h2>Le conseil d'administration</h2>
<p>L'OS Romane est une coopérative. Le conseil d'administration est composé d'éleveurs adhérents, sélectionneurs ou non. Il assure la gouvernance de la coopérative : il prend toutes les décisions relatives au schéma de sélection, fixe les prix des reproducteurs et s'assure de la bonne gestion quotidienne par l'équipe.</p>
<div class="tableau"><table><tbody>
<tr><th>Président</th><td>Hubert MONY</td><td>21 Francheville</td></tr>
<tr><th>1<sup>er</sup> vice-président</th><td>Didier CANALIS</td><td>11 Les Ourliacs</td></tr>
<tr><th>2<sup>e</sup> vice-président</th><td>Olivier DELSAUX</td><td>81 Montredon-Labessonnié</td></tr>
<tr><th>Trésorier</th><td>Thierry DOULS</td><td>11 Salsigne</td></tr>
<tr><th>Secrétaire</th><td>Isabelle GUILLAUMONT</td><td>54 Réchicourt-la-Petite</td></tr>
<tr><th>Membre</th><td>Xavier BIDON</td><td>54 Pulligny</td></tr>
<tr><th>Membre</th><td>Timothée GOSSET</td><td>02 Montloué</td></tr>
</tbody></table></div>""", fig("ca-01.jpg", "Les administrateurs de l'OS Romane"))),
    sec("""<h2>L'équipe</h2>
<p class="lead">Au quotidien, les salariés de l'OS œuvrent pour accompagner les éleveurs adhérents, mais aussi tout nouveau projet de création d'élevage ou de développement, que ce soit au travers de conseils sur la race ou de la fourniture de cheptel de départ.</p>
<div class="grid equipe">
<div class="card portrait">""" + img("equipe-01.jpg", "Cristelle Alquié") + """<h3>Cristelle Alquié</h3><p>Secrétariat<br><small>Tous les jours sauf les mercredi et vendredi après-midi</small></p></div>
<div class="card portrait">""" + img("equipe-02.jpg", "Léa Dumont") + """<h3>Léa Dumont</h3><p>Commerce, conseils, génétique, communication et promotion</p></div>
<div class="card portrait">""" + img("equipe-03.jpg", "Christophe Bodard") + """<h3>Christophe Bodard</h3><p>Direction, commerce, génétique, conseils</p></div>
</div>
<p style="margin-top:1.5rem"><a class="btn" href="contact.html">Contacter l'équipe</a></p>""", alt=True),
]))

PART = [
    ("France Génétique Élevage", "http://fr.france-genetique-elevage.org/"), ("Idele, l'Institut de l'Élevage", "https://www.idele.fr/"),
    ("Geneval", "https://www.geneval.fr/"), ("INRAE, plateforme P3R", "https://p3r.isc.inrae.fr/"),
    ("Races de France", "https://www.racesdefrance.fr/"), ("Arterris", "https://www.arterris.fr/"),
    ("Les Bergers du Nord-Est", "https://www.lesbergersdunordest.com/"), ("Ovicap", "https://www.ovicap.fr/"),
    ("Sicarev", "https://www.sicarev.com/"), ("Cobevim", "https://www.cobevim-boutique.fr/"),
    ("Nova France Énergy", "https://www.novafranceenergy.fr/"), ("OSON", "https://oson-gof.com/"),
    ("Agneau Soleil", "https://agneausoleil.com/agneausoleil/"), ("EMC2", "https://www.emc2.coop/"), ("Partenaire", ""), ("Partenaire", ""),
]
logos = ""
for i, (nom, url) in enumerate(PART, 1):
    im = img(f"partenaire-{i:02d}.jpg", f"Logo {nom}")
    logos += (f'<a class="logo-p" href="{url}" target="_blank" rel="noopener" title="{nom}">{im}</a>' if url else f'<div class="logo-p">{im}</div>')
page("partenaires.html", "Nos partenaires", "Nos partenaires", "Ceux qui accompagnent la race au quotidien", sec(
    """<p class="lead">Au quotidien, l'OS Romane s'appuie sur de nombreux partenaires : des partenaires techniques, grâce auxquels le programme de sélection est mené à bien et reste très performant, mais aussi des partenaires « commerciaux », qui œuvrent pour vous fournir des animaux reproducteurs dans toute la France, tout au long de l'année.</p>
<div class="logos-grid">""" + logos + "</div>"))

# ---------------------------------------------------------------- ACTUALITÉS ET DOCUMENTS
page("actualites.html", "Actualités", "Actualités", "Les nouvelles de la race", "\n".join([
    sec("""<h2>À la une</h2>
<div class="docs">""" + doc("La-newsletter-de-la-Romane---janv-26.pdf", "La newsletter de la Romane : janvier 2026", "Les vœux du président, un point sur les SCI, les journées organisées avec Inn'Ovin, l'interview d'un jeune installé en Bourgogne, et les aides d'achat pour l'amélioration de la génétique.") +
        doc("RPAA0730_JanvFev2026_organized.pdf", "Article Pâtre, janvier 2026 : « La race Romane trouve un terrain de choix dans l'Aude »") + """</div>
<p style="margin-top:1.5rem">Retrouvez toutes nos actualités sur notre page <a href="https://www.facebook.com/p/OS-Romane-100064505392106/?locale=fr_FR" target="_blank" rel="noopener">Facebook</a> et sur Instagram.</p>""", etroit=True),
    sec("""<h2>Les actualités précédentes</h2>
<div class="grid">
<div class="card"><h3>Le tri des futurs béliers de SCI est fini&nbsp;!</h3><p>Après un premier tri génétique, nous sommes passés en élevage afin de choisir les futurs béliers de la race. Sur près de 500 agneaux, seuls les 200 meilleurs ont été choisis, en fonction de leur morphologie, leur développement, leurs aplombs et la rectitude du dos. Ils seront évalués en station de contrôle individuel début décembre.</p></div>
<div class="card"><h3>Assemblée générale 2023</h3><p>Réunis à Savigny-en-Septaine, l'assemblée générale a eu lieu le 7 juin 2023. Après une présentation de la poudre de lait Agneau d'or Tradition par Bonilait protéine, une présentation du site de la Sapinière et des travaux menés sur les chèvres par Jérôme Boucherot, directeur du site, Dominique François a fait une rétrospective de 60 ans de recherche en génétique ovine à la Sapinière. L'après-midi s'est poursuivie par une visite de la nouvelle halle de phénotypage de l'INRAe de la Sapinière.</p>""" + doc("Rapport-d-activite-OS-ROMANE-2022.pdf", "Rapport d'activité de l'exercice 2022") + """</div>
<div class="card"><h3>Retrouvez-nous sur les salons (automne 2023)</h3><ul class="liste"><li><b>Comice de Rambervillers</b> : les 3 et 4 septembre</li><li><b>Tech Ovin</b> : Bellac, les 6 et 7 septembre 2023</li><li><b>Space</b> : Rennes, du 12 au 14 septembre 2023</li><li><b>Sommet de l'élevage</b> : Cournon-d'Auvergne, du 3 au 6 octobre 2023</li><li><b>Agrimax</b> : Metz, du 25 au 27 octobre 2023</li></ul></div>
<div class="card"><h3>Assemblée générale 2019</h3><p>La présentation de notre assemblée générale, tenue le 26 juin 2020 à Soual.</p>""" + doc("Presentation-AG-2019.pdf", "Présentation AG 2019 de l'OS Romane") + """</div>
</div>""", alt=True),
]))

DOCS = [
    ("Fiches de présentation", [
        ("Recto-verso-race---version-tech-v2.pdf", "La race Romane", "Avec comparatif aux autres races"),
        ("Recto-verso-F1-v2.pdf", "La F1 Romane"),
        ("Recto-verso-schema-V2.pdf", "Le schéma de sélection"),
        ("Recto-verso-beliers-v2.pdf", "Les béliers et les SCI"),
        ("Recto-verso-CPO-v2.pdf", "Le contrôle de performance"),
        ("Recto-verso-IA-v2.pdf", "Les intérêts de l'insémination"),
        ("Plaquette_OSRomane-Web.pdf", "La plaquette de la race"),
        ("souche.pdf", "Comment est née la Romane ?")]),
    ("Conseils d'élevage", [
        ("FicheLutteBrebis.pdf", "Lutte de vos brebis"), ("FicheLutteBeliers.pdf", "Lutte de vos béliers"),
        ("Guide-Agnelles.pdf", "Agnelles de renouvellement"), ("Recto-verso-AA-v2.pdf", "Allaitement artificiel : fiche Romane"),
        ("Allaitement-Artificiel.pdf", "Allaitement artificiel : fiche conseil")]),
    ("Résultats du contrôle de performance", [
        ("Donnees_CPO_2024_064.pdf", "Campagne 2024"), ("Donnees_CPO_2023_064.pdf", "Campagne 2023"),
        ("Donnees_CPO_2022_064.pdf", "Campagne 2022"), ("Bilan-CPO-Romane-2021.pdf", "Campagne 2021"),
        ("Bilan-du-Controle-de-Performances-Ovins-Allaitants_campagne-2023.pdf", "Bilan en ovins allaitants", "Campagne 2023")]),
    ("Rapports d'activité et assemblées générales", [
        ("rapport-activite-ex-2025-vdef.pdf", "Rapport d'activité 2025"), ("Rapport-d-activite-OS-ROMANE-2024.pdf", "Rapport d'activité 2024"),
        ("Rapport-d-activite-OS-ROMANE-2022.pdf", "Rapport d'activité 2022"), ("Presentation-AG-2019.pdf", "Présentation de l'AG 2019")]),
    ("Newsletters", [
        ("La-newsletter-de-la-Romane---janv-26.pdf", "La newsletter de la Romane", "Janvier 2026"),
        ("La-newsletter-de-la-Romane--janvier-2025.pdf", "La newsletter de la Romane", "Janvier 2025"),
        ("La-newsletter-de-la-Romane---janvier-2022.pdf", "La newsletter de la Romane", "Janvier 2022")]),
    ("Archives techniques", [
        ("pdf_CR_110751002.pdf", "Augmenter la prolificité", "Mars 2007, réseau d'élevage ovin Nord-Picardie-Normandie"),
        ("pdf_CR_110755001.pdf", "Essai allaitement triple", "Premiers enseignements des essais de l'Inra")]),
]
corps = ""
for k, (t, items) in enumerate(DOCS):
    corps += sec(f"<h2>{t}</h2>" + docs(*items), alt=(k % 2 == 1), etroit=True) + "\n"
page("documents.html", "Documents à télécharger", "Documents à télécharger", "Fiches, rapports, résultats et newsletters", corps)

page("presse.html", "Presse et témoignages", "Presse et témoignages", "Ils parlent de la Romane", "\n".join([
    sec("<h2>Articles de presse</h2>" + docs(
        ("RPAA0730_JanvFev2026_organized.pdf", "Pâtre, janvier-février 2026", "La race Romane trouve un terrain de choix dans l'Aude"),
        ("patre-renouvellement-externe.pdf", "Article Pâtre : choisir le renouvellement externe"),
        ("patre-Gaec-Gosset.pdf", "Article Pâtre : Gaec Gosset, sélectionneur Romane"),
        ("PatreFevrier2015.pdf", "Article Pâtre, février 2015"),
        ("Patre_dossier-Bretagne_mars2016_050417153906.pdf", "Pâtre, dossier Bretagne, mars 2016")), etroit=True),
    sec("""<h2>Témoignages</h2>
<div class="grid">
<div class="card"><h3>Réussir son agnelage l'hiver</h3><p>L'agnelage d'hiver est une étape déterminante pour les éleveurs et éleveuses d'ovins. Direction le Cher (18) et l'exploitation d'Odile et Luc Brodin, éleveurs de brebis Romane, pour suivre le bon déroulement des mises bas. Ces passionnés expliquent les interventions à effectuer pour diminuer le taux de perte sous la mère et augmenter la productivité à l'année.</p><p><a href="http://www.lateleagricole.net/index.php?page=accueil&amp;rubrique=3&amp;id=149" target="_blank" rel="noopener">Voir le reportage</a></p></div>
<div class="card"><h3>La Ferme de Grignon (78)</h3><p>La ferme de Grignon est une ferme bien connue dans le monde agricole français. Elle fait partie de l'école d'ingénieurs AgroParisTech, installée au château de Grignon depuis 1826. Elle s'étend sur plus de 500 hectares au cœur de la plaine de Versailles et emploie plus de 20 personnes.</p><p><a href="http://www.lateleagricole.net/index.php?page=accueil&amp;rubrique=3&amp;id=161" target="_blank" rel="noopener">Voir le reportage</a></p></div>
</div>
<div class="video" style="margin-top:2rem"><iframe src="https://www.youtube-nocookie.com/embed/9DY2OnKlILw" title="Témoignage d'éleveur" loading="lazy" allowfullscreen></iframe></div>
<p><a href="https://www.youtube.com/watch?v=9DY2OnKlILw" target="_blank" rel="noopener">Voir la vidéo sur YouTube</a></p>""", alt=True),
]))

page("visites.html", "Visites d'élevages", "La Romane au fil de nos visites", "Des élevages de France et d'ailleurs", "\n".join([
    sec("""<h2>En quelques visites</h2>
<ul class="liste">
<li><b>Morbihan</b> : un agnelage réussi. Les brebis sont en très bon état grâce à un enrubannage de qualité, la prolificité est à 2,1 à 2,2 agneaux par brebis et la mortalité maîtrisée. 120 à 140 agnelles devraient quitter l'élevage pour fournir une installation et du renouvellement dans d'autres troupeaux bretons.</li>
<li><b>Gers</b> : une belle prolificité de 2,5 sur cet agnelage et un nouveau type de brebis.</li>
<li><b>Vienne</b> : visite d'un élevage en sélection.</li>
<li><b>Pôle ovin de Charolles</b> : les brebis en préparation à l'agnelage. De cet agnelage seront triés des agneaux destinés aux stations de contrôle.</li>
<li><b>Aude</b> : une nuit à la bergerie, pour un agnelage. Arrivée des béliers au mois de novembre pour le début de la station de contrôle.</li>
<li><b>Espagne</b> : un élevage de plus de 4 000 brebis, avec une très bonne maîtrise technique et une hygiène sans faille, pour de très bons résultats.</li>
<li><b>Portugal</b> : nos Romane dans des systèmes très rustiques.</li>
<li>Le bon côté de nos voyages : de magnifiques paysages. Les Pyrénées vues de la Montagne Noire, et l'Aveyron.</li>
</ul>""", etroit=True),
    sec("<h2>En images</h2>" + galerie("visite", 1, 58, "Photo d'une visite d'élevage"), alt=True),
]))

page("contact.html", "Nous contacter", "Nous contacter", "Une question, un projet ? Écrivez-nous ou appelez-nous.", sec(
    """<div class="deux" style="align-items:start">
<div class="prose">
<h2>O.S. Romane</h2>
<p>Organisme de sélection<br>Les Nauzes<br>81580 SOUAL</p>
<p><b>Tél.</b> <a href="tel:0563825298">05 63 82 52 98</a><br><b>Fax</b> 05 63 75 54 59<br><b>E-mail</b> <a href="mailto:osromane@arsoe-soual.com">osromane@arsoe-soual.com</a></p>
<h3>Commercialisation et diffusion</h3>
<p>Léa Dumont<br><a href="tel:0625256018">06 25 25 60 18</a><br><a href="mailto:lea.dumont@brebis-romane.com">lea.dumont@brebis-romane.com</a></p>
<h3>Direction, schéma de sélection, génétique</h3>
<p>Christophe Bodard<br><a href="tel:0632050768">06 32 05 07 68</a><br><a href="mailto:christophe.bodard@brebis-romane.com">christophe.bodard@brebis-romane.com</a></p>
<h3>La plaquette de la race</h3>""" + docs(("Plaquette_OSRomane-Web.pdf", "Télécharger la nouvelle plaquette de la race")) + """
</div>
<div>
<h2>Laissez-nous un message</h2>
<p class="todo">Ce formulaire est un modèle : il doit encore être relié à un service d'envoi d'e-mails avant la mise en ligne.</p>
<form class="contact" onsubmit="event.preventDefault();alert('Formulaire de démonstration : pas encore relié.');">
<label>Nom <input name="nom" required></label>
<label>Entreprise <input name="entreprise"></label>
<label>Code postal et ville <input name="ville"></label>
<label>Téléphone <input name="tel" type="tel"></label>
<label>E-mail <input type="email" name="email" required></label>
<label>Message <textarea name="message" rows="5" required></textarea></label>
<button class="btn" type="submit">Envoyer</button>
</form>
</div></div>"""))

# ---------------------------------------------------------------- ACCUEIL
accueil = f'''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Brebis Romane — Race ovine</title>
<meta name="description" content="Site officiel de la race ovine Romane : une brebis productive, maternelle et rustique. Découvrez la race, les conseils d'élevage et trouvez des reproducteurs.">
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<header id="site-header"></header>
<main>
  <div class="hero">
    <div class="wrap grid-hero">
      <div>
        <p class="eyebrow" style="color:var(--ble)">Site officiel de la race ovine</p>
        <h1>La brebis <em>Romane</em></h1>
        <p>Productive, maternelle et rustique : une brebis qui s'adapte à tous les systèmes d'élevage. L'essayer, c'est l'adopter.</p>
        <div class="actions">
          <a class="btn" href="eleveurs.html">Trouver un éleveur</a>
          <a class="btn second" href="romane.html">Découvrir la race</a>
        </div>
      </div>
      <div class="paysage"><img src="assets/img/hero.jpg" alt="Troupeau de brebis Romane au pré"></div>
    </div>
  </div>
  <div class="stats"><div class="wrap">
    <div class="stat"><b>1,83</b><span>agneau par brebis et par an (1 agnelage / an)</span></div>
    <div class="stat"><b>2,38</b><span>agneaux par brebis et par an (3 agnelages en 2 ans)</span></div>
    <div class="stat"><b>&lt;&nbsp;10&nbsp;%</b><span>des agnelages nécessitent une intervention</span></div>
    <div class="stat"><b>165&nbsp;€</b><span>de marge brute par EMP chez les meilleurs sélectionneurs</span></div>
  </div></div>

  <section>
    <div class="wrap">
      <h2>Que cherchez-vous&nbsp;?</h2>
      {cartes(
        ("romane.html", "Découvrir la race", "Son histoire, ses qualités, ses performances et la F1."),
        ("vente.html", "Acheter des reproducteurs", "Agnelles, béliers, insémination, et la carte des éleveurs."),
        ("conseils.html", "Conseils d'élevage", "Lutte, agnelles, allaitement artificiel."),
        ("documents.html", "Documents à télécharger", "Fiches, rapports d'activité, résultats et newsletters."),
        ("selection.html", "La sélection", "Stations de contrôle, contrôle de performance, insémination."),
        ("contact.html", "Nous contacter", "Une question ou un projet d'élevage : l'équipe vous répond."))}
    </div>
  </section>

  <section class="alt">
    <div class="wrap">
      <div class="cta-band">
        <div>
          <h2>Où trouver nos éleveurs&nbsp;?</h2>
          <p>Cliquez sur la carte de France pour découvrir les éleveurs de brebis Romane près de chez vous.</p>
          <a class="btn" href="eleveurs.html">Ouvrir la carte</a>
        </div>
        <div>{img("accueil-05.jpg", "Brebis Romane", "rond")}</div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      {deux("""<p class="eyebrow">L'OS Romane</p>
<h2>Une coopérative d'éleveurs</h2>
<p class="lead">L'OS Romane est l'organisme de sélection officiel de la race, agréé par le ministère de l'Agriculture. Géré par un conseil d'administration d'éleveurs, il tient le livre généalogique, définit la sélection et accompagne les éleveurs au quotidien.</p>
<p><a class="btn second" href="os.html">Découvrir l'OS Romane</a> <a class="btn second" href="actualites.html">Les actualités</a></p>""", fig("accueil-03.jpg", "Brebis Romane"))}
    </div>
  </section>

  <section class="alt">
    <div class="wrap">
      <h2>La Romane en images</h2>
      {galerie("accueil", 1, 12, "Brebis Romane")}
    </div>
  </section>
</main>
<footer id="site-footer"></footer>
<script src="assets/site.js"></script>
</body>
</html>
'''
open("index.html", "w", encoding="utf-8").write(accueil)

print("Pages générées.")
