/* Baghera — navigation et affichage des contenus */
(function () {
  "use strict";

  var PROJETS = window.BAGHERA_PROJETS || [];
  var TALENTS = (window.BAGHERA_TALENTS || []).slice();
  (function () {
    var o = window.BAGHERA_ORDRE_TALENTS || [];
    TALENTS.sort(function (a, b) { var i = o.indexOf(a.id), k = o.indexOf(b.id); return (i < 0 ? 99 : i) - (k < 0 ? 99 : k); });
  })();
  var ARTICLES = window.BAGHERA_ARTICLES || [];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
    var talent = function (id) { return TALENTS.find(function (t) { return t.id === id; }); };

  /* ---------- Fiches talents : photo (ou initiales), activations, logos des références ---------- */
  function initiales(nom) { return nom.split(/\s+/).map(function (m) { return m.charAt(0); }).join("").slice(0, 2).toUpperCase(); }
  function photoHTML(t, lazy) {
    return t.photo
      ? '<img src="' + t.photo + '" alt="' + esc(t.nom) + '"' + (lazy ? ' loading="lazy"' : "") + (t.photoPos ? ' style="object-position:' + t.photoPos + '"' : "") + '>'
      : '<div class="photo-initiales" role="img" aria-label="' + esc(t.nom) + '"><span>' + esc(initiales(t.nom)) + '</span></div>';
  }
  function norm(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, ""); }
  var LOGOS_N = {};
  Object.keys(window.BAGHERA_LOGOS || {}).forEach(function (k) { LOGOS_N[norm(k)] = window.BAGHERA_LOGOS[k]; });
  function refsHTML(str) {
    if (!str) return "";
    var logos = "", texte = [];
    str.split(/\s*·\s*/).filter(Boolean).forEach(function (n) {
      var l = LOGOS_N[norm(n)];
      if (l) logos += '<span class="ref-logo"><img src="' + l + '" alt="' + esc(n) + '" loading="lazy"></span>'; else texte.push(n);
    });
    return logos ? '<section class="refs-section"><div class="wrap"><span class="eyebrow">Marques partenaires</span><div class="refs-logos">' + logos + '</div></div></section>' : "";
  }
  function galerieHTML(t) {
    var g = t.galerie || [];
    if (!g.length) return "";
    return '<div class="galerie n' + g.length + '"><span class="eyebrow">En images</span><div class="galerie-grille">' +
      g.map(function (src, i) { return '<img src="' + src + '" alt="' + esc(t.nom) + ' — photo ' + (i + 1) + '" loading="lazy">'; }).join("") + '</div></div>';
  }
  function activationsHTML(t) {
    return (t.activations && t.activations.length)
      ? '<div class="activations"><span class="eyebrow">Activations possibles</span><ul>' + t.activations.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + '</ul></div>'
      : "";
  }

  /* ---------- Savoir-faire : carrés qui défilent ---------- */
  var CARRES = [
    ["Réels & posts", "Le conseil <em>en 60 secondes</em>", "Des contenus courts et pédagogiques, pensés pour être partagés et sauvegardés.", "assets/img/formats/reels.jpg", "70% 25%"],
    ["YouTube", "Interviews <em>de marque</em>", "Des formats longs où la marque raconte ses engagements, face à une créatrice passionnée.", "assets/img/formats/youtube.jpg", "35% 40%"],
    ["Podcasts", "La parole <em>de passionnée</em>", "Des épisodes qui installent la marque dans la durée.", "assets/img/formats/podcasts.jpg", "50% 30%"],
    ["Tournages", "Au cœur <em>du terrain</em>", "En pharmacie, en laboratoire ou dans les coulisses d’une marque.", "assets/img/formats/tournages.jpg", "60% 35%"],
    ["Conférences", "Ateliers <em>& webinars</em>", "Créer de la proximité et de la crédibilité, en présentiel ou en ligne.", "assets/img/formats/conferences.jpg", "50% 25%"],
    ["Événements", "Soirées <em>& lancements</em>", "Casting de créateurs et couverture en influence de vos temps forts.", "assets/img/formats/evenements.jpg", "50% 18%"],
    ["Webséries", "Raconter <em>en épisodes</em>", "Des concepts éditoriaux qui fidélisent une audience.", "assets/img/formats/webseries.jpg", "40% 72%"],
    ["Local", "Toulouse <em>& le Sud</em>", "Des activations avec des créateurs de la région.", "assets/img/formats/local.jpg", "50% 45%"]
  ];
  function carreHTML(c, cache) {
    return '<a class="carre" href="#projets"' + (cache ? ' aria-hidden="true" tabindex="-1"' : "") + '>' +
      '<img class="carre-fond" src="' + c[3] + '" alt="" loading="lazy" style="object-position:' + c[4] + '">' +
      '<span class="n">' + esc(c[0]) + '</span>' +
      '<div><h3>' + c[1] + '</h3><p>' + esc(c[2]) + '</p></div></a>';
  }
  $("#rail").innerHTML =
    CARRES.map(function (c) { return carreHTML(c, false); }).join("") +
    CARRES.map(function (c) { return carreHTML(c, true); }).join("");

  /* ---------- Héro : un téléphone par offre ---------- */
  var OFFRES = window.BAGHERA_OFFRES_HERO || [];
  $("#telephones").innerHTML = OFFRES.map(function (o, i) {
    var visuel = o.image
      ? '<img src="' + o.image + '" alt="" style="object-position:' + (o.position || "50% 50%") + '">'
      : '<div class="a-venir"><b>' + esc(o.titre) + '</b><span>Photo à venir</span></div>';
    /* Talent management au centre ; barres de story : gauche 1/3, centre 2/3, droite 3/3 */
    var place = ["t1", "t2", "t3"][i];
    var vues = { t2: 1, t1: 2, t3: 3 }[place];
    var barres = [1, 2, 3].map(function (n) { return n <= vues ? '<i class="vu"></i>' : "<i></i>"; }).join("");
    return '<a class="tel ' + place + '" href="#' + o.ancre + '" aria-label="' + esc(o.offre + " : " + o.titre) + '">' +
      '<div class="ecran">' +
      '<div class="barres" aria-hidden="true">' + barres + '</div>' +
      '<div class="compte"><span class="av av-lettre">' + "b" + '</span><span>' + esc(o.compte) + '</span></div>' +
      visuel +
      '<div class="bas"><span class="offre-pill">' + esc(o.offre) + '</span><b>' + esc(o.titre) + '</b>' + (o.detail ? '<small>' + esc(o.detail) + '</small>' : "") + '<div class="msg">Découvrir l’offre →</div></div>' +
      '</div></a>';
  }).join("") + '<span class="etiquette">Nos 3 offres en images · cliquez pour découvrir</span>';

  /* ---------- Cartes projet ---------- */
  /* Même format pour tous les projets (4/5), l'image est recadrée selon "cadrage" */
  function carteHTML(p) {
    var t = talent(p.talent);
    return '<a class="carte" href="#projet-' + p.id + '">' +
      '<img src="' + p.visuel + '" alt="" loading="lazy" style="object-position:' + (p.cadrage || "50% 30%") + '">' +
      '<div class="haut"><div class="marque">' + esc(p.marque) + '</div><span class="avec">avec ' + esc(p.avec || (t ? t.nom : "")) + '</span></div>' +
      '<div class="tags">' + p.categories.map(function (c, i) { return '<span class="tag' + (i === 0 ? " o" : "") + '">' + esc(c) + '</span>'; }).join("") + '</div>' +
      '</a>';
  }
  function telHTML(p, t, cls) {
    var nom = p.avec || (t ? t.nom : "");
    return '<a class="tel ' + cls + '" href="#projet-' + p.id + '" aria-label="' + esc(p.marque + " × " + nom) + '">' +
      '<div class="ecran">' +
      '<div class="barres"><i></i><i></i><i></i></div>' +
      '<div class="compte">' + (t ? '<span class="av" style="background-image:url(\'' + t.photo + '\')"></span>' : '<span class="av av-lettre">b</span>') + '<span>' + esc(t ? t.handle : (p.handle || "agencebaghera")) + '</span></div>' +
      '<img src="' + p.visuel + '" alt="" loading="lazy">' +
      '<div class="bas"><b>' + esc(p.marque) + '</b><small>' + esc(p.format.split("·")[0].trim()) + '</small><div class="msg">Envoyer un message</div></div>' +
      '</div></a>';
  }
  var PRIO = window.BAGHERA_ACCUEIL_PRIORITE || [];
  var ordreAccueil = PRIO.map(function (id) { return PROJETS.find(function (p) { return p.id === id; }); }).filter(Boolean)
    .concat(PROJETS.filter(function (p) { return PRIO.indexOf(p.id) < 0; }));
  $("#carrousel").innerHTML = ordreAccueil.map(function (p) { return carteHTML(p); }).join("");
  $$("[data-defile]").forEach(function (b) {
    b.addEventListener("click", function () {
      var c = $("#carrousel");
      c.scrollBy({ left: Number(b.dataset.defile) * c.clientWidth * 0.8, behavior: "smooth" });
    });
  });
  var carrousel = $("#carrousel");
  function majFleches() {
    var max = carrousel.scrollWidth - carrousel.clientWidth - 2;
    $(".rond.cote.gauche").disabled = carrousel.scrollLeft <= 2;
    $(".rond.cote.droite").disabled = carrousel.scrollLeft >= max;
  }
  carrousel.addEventListener("scroll", majFleches, { passive: true });
  window.addEventListener("resize", majFleches);
  majFleches();

  /* ---------- Ils nous font confiance ---------- */
  var MARQUES = window.BAGHERA_MARQUES || [];
  var logoHTML = function (m, cache) {
    var attrs = cache ? ' aria-hidden="true"' : "";
    return m.logo
      ? '<span class="marque-logo"' + attrs + '><img src="' + m.logo + '" alt="' + (cache ? "" : esc(m.nom)) + '" loading="lazy"></span>'
      : '<span class="marque-logo marque-texte"' + attrs + '>' + esc(m.nom) + '</span>';
  };
  $("#marques-rail").innerHTML = MARQUES.map(function (m) { return logoHTML(m, false); }).join("") +
    MARQUES.map(function (m) { return logoHTML(m, true); }).join("");
  /* Taille optique : même « surface » visuelle pour chaque logo, quelle que soit sa forme */
  function ajusterLogo(img, aire, hmin, hmax) {
    var r = img.naturalWidth / img.naturalHeight;
    if (!r) return;
    var h = Math.max(hmin || 26, Math.min(hmax || 64, Math.sqrt((aire || 6200) / r)));
    img.style.height = Math.round(h) + "px";
  }
  $$("#marques-rail img").forEach(function (img) {
    img.loading = "eager";
    if (img.complete) ajusterLogo(img); else img.addEventListener("load", function () { ajusterLogo(img); });
  });

  /* ---------- Avis ---------- */
  function avisHTML(a, cache) {
    return '<figure class="avis-carte"' + (cache ? ' aria-hidden="true"' : "") + '>' +
      '<span class="guillemet" aria-hidden="true">“</span>' +
      '<blockquote>' + esc(a.texte) + '</blockquote>' +
      '<figcaption><b>' + esc(a.nom) + '</b><span>' + esc(a.poste + " · " + a.structure) + '</span></figcaption></figure>';
  }
  var AVIS = window.BAGHERA_AVIS || [];
  /* Liste répétée pour que la bande tourne sans trou et que les 3 couleurs s'enchaînent sans rupture */
  var serie = AVIS.slice();
  while (AVIS.length && (serie.length % 3 !== 0 || serie.length < 9)) serie = serie.concat(AVIS);
  if ($("#avis-grille")) $("#avis-grille").innerHTML = serie.map(function (a) { return avisHTML(a, false); }).join("") +
    serie.map(function (a) { return avisHTML(a, true); }).join("");

  /* ---------- Talents ---------- */
  function talentHTML(t) {
    return '<a class="talent" href="#talent-' + t.id + '">' +
      '<div class="photo">' + photoHTML(t, true) + '</div>' +
      '<div class="nom">' + esc(t.nom) + '</div><div class="exp">' + esc(t.expertise) + '</div></a>';
  }
  $("#talents-accueil").innerHTML = TALENTS.map(talentHTML).join("");
  $("#talents-page").innerHTML = TALENTS.map(talentHTML).join("");

  /* ---------- Projets : tous les projets, sans filtre ---------- */
  $("#grille-projets").innerHTML = PROJETS.map(function (p) { return carteHTML(p); }).join("");

  /* ---------- Fiche projet ---------- */
  function rendreProjet(id) {
    var p = PROJETS.find(function (x) { return x.id === id; });
    if (!p) return false;
    var t = talent(p.talent) || null;
    var avec = p.avec || (t ? t.nom : "");
    var visuel = p.ratio === "story"
      ? telHTML(p, t, "").replace('<a class="tel ', '<a class="tel flotte ').replace('href="#projet-' + p.id + '"', 'href="' + p.lien + '" target="_blank" rel="noopener"')
      : '<a class="cadre ' + (p.ratio === "carre" ? "carre" : p.ratio === "livre" ? "livre" : "paysage") + '" href="' + p.lien + '" target="_blank" rel="noopener"><img src="' + p.visuel + '" alt="' + esc(p.titre || (p.marque + " × " + avec)) + '"></a>';
    var autres = PROJETS.filter(function (x) { return x.id !== p.id; })
      .sort(function (a, b) { return (b.categories[0] === p.categories[0]) - (a.categories[0] === p.categories[0]); })
      .slice(0, 4);
    $("#v-projet").innerHTML =
      '<div class="wrap"><a class="retour" href="#projets">Tous les projets</a>' +
      '<div class="fiche-hero"><div>' +
      '<span class="eyebrow">' + esc(p.categories.join(" · ")) + '</span>' +
      '<h1 style="margin-top:14px">' + (p.titre ? esc(p.titre) : esc(p.marque) + '<span class="x">×</span>' + esc(avec)) + '</h1>' +
      '<p class="accroche">' + esc(p.accroche) + '</p>' +
      '<dl class="infos">' +
      (t ? '<div><dt>Talent</dt><dd><a href="#talent-' + t.id + '">' + esc(t.nom) + '</a> — ' + esc(t.expertise) + '</dd></div>' : '') +
      (p.partenaires ? '<div><dt>Avec</dt><dd>' + esc(p.partenaires) + '</dd></div>' : '') +
      '<div><dt>Format</dt><dd>' + esc(p.format) + '</dd></div>' +
      '<div><dt>Univers</dt><dd>' + esc(p.categories.join(", ")) + '</dd></div>' +
      '</dl>' +
      '<div class="actions"><a class="btn btn-orange ext" href="' + p.lien + '" target="_blank" rel="noopener">' + esc(p.lienLabel) + ' </a>' +
      (p.lien2 ? '<a class="btn btn-brun ext" href="' + p.lien2 + '" target="_blank" rel="noopener">' + esc(p.lien2Label) + ' </a>' : "") +
      '<a class="btn btn-ligne" href="#contact">Un projet similaire ?</a></div>' +
      '</div><div class="fiche-visuel">' + visuel + '</div></div></div>' +
      '<section class="fiche-corps"><div class="wrap">' +
      '<div class="texte"><h2>Le projet</h2>' + p.projet.map(function (x) { return "<p>" + esc(x) + "</p>"; }).join("") + '</div>' +
      '<div><h2>Pourquoi <em class="s">ça marche</em></h2><div class="raisons">' +
      p.pourquoi.map(function (r) { return '<div class="raison"><b>' + esc(r[0]) + '</b><span>' + esc(r[1]) + '</span></div>'; }).join("") +
      '</div></div></div></section>' +
      '<section class="autres"><div class="wrap"><h2>D’autres <em class="s">projets</em></h2><div class="rangee">' +
      autres.map(function (x) { return carteHTML(x); }).join("") + '</div></div></section>';
    document.title = (p.titre || (p.marque + " × " + avec)) + " — Baghera";
    return true;
  }

  /* ---------- Fiche talent ---------- */
  function rendreTalent(id) {
    var t = talent(id);
    if (!t) return false;
    var ses = PROJETS.filter(function (p) { return p.talent === t.id || (p.talents || []).indexOf(t.id) >= 0; });
    $("#v-talent").innerHTML =
      '<div class="wrap"><a class="retour" href="#createurs">Tous nos talents</a>' +
      '<div class="fiche-talent">' +
      '<div class="photo">' + photoHTML(t, false) + '</div>' +
      '<div><span class="eyebrow">@' + esc(t.handle) + '</span>' +
      '<h1 style="margin-top:12px">' + esc(t.nom) + '</h1><div class="exp">' + esc(t.expertise) + '</div>' +
      '<div class="reseaux">' + t.reseaux.map(function (r) { return '<a href="' + r[1] + '" target="_blank" rel="noopener">' + esc(r[0]) + '</a>'; }).join("") + '</div>' +
      '<div class="bio">' + t.bio.map(function (b) { return "<p>" + esc(b) + "</p>"; }).join("") + '</div>' +
      activationsHTML(t) + galerieHTML(t) +
      '<div class="collab"><h3>Vous souhaitez collaborer avec ' + esc(t.court) + ' ?</h3>' +
      '<p>Échangeons sur vos projets et vos valeurs pour concevoir ensemble des prises de parole fortes, qui valorisent votre marque avec authenticité et crédibilité.</p>' +
      '<div class="adresse"><span>' + esc(t.email) + '</span><button class="copier" type="button" data-copier="' + esc(t.email) + '">Copier</button></div></div>' +
      '</div></div></div>' +
      refsHTML(t.references) +
      (ses.length ? '<section class="autres" style="padding-top:0"><div class="wrap"><h2>Ses projets <em class="s">avec Baghera</em></h2><div class="rangee">' +
        ses.map(function (x) { return carteHTML(x); }).join("") + '</div></div></section>' : "");
    $$("#v-talent .ref-logo img").forEach(function (img) {
      var f = function () { ajusterLogo(img, 5200, 28, 52); };
      if (img.complete) f(); else img.addEventListener("load", f);
    });
    document.title = t.nom + " — Baghera";
    return true;
  }

  /* ---------- Blog ---------- */
  var filtreBlog = "Tous";
  var catsBlog = [];
  ARTICLES.forEach(function (a) { (a.categories || []).forEach(function (c) { if (catsBlog.indexOf(c) < 0) catsBlog.push(c); }); });
  function rendreBlog() {
    $("#filtres-blog").innerHTML = ["Tous"].concat(catsBlog).map(function (c) {
      var n = c === "Tous" ? ARTICLES.length : ARTICLES.filter(function (a) { return (a.categories || []).indexOf(c) >= 0; }).length;
      return '<button class="filtre" type="button" data-cat-blog="' + esc(c) + '" aria-pressed="' + (filtreBlog === c) + '">' + esc(c) + '<span class="nb">' + n + '</span></button>';
    }).join("");
    $("#articles").innerHTML = ARTICLES.filter(function (a) { return filtreBlog === "Tous" || (a.categories || []).indexOf(filtreBlog) >= 0; }).map(function (a) {
    return '<a class="article-carte" href="#article-' + a.id + '">' +
      '<div class="img"><img src="' + a.cover + '" alt="" loading="lazy"></div>' +
      '<div><time>' + esc(a.date) + (a.categories ? " · " + esc(a.categories.join(", ")) : "") + '</time><h3 style="margin-top:8px">' + esc(a.title) + '</h3><p style="margin-top:10px">' + esc(a.excerpt) + '</p></div></a>';
    }).join("");
  }
  $("#filtres-blog").addEventListener("click", function (e) {
    var b = e.target.closest("[data-cat-blog]"); if (!b) return;
    filtreBlog = b.dataset.catBlog; rendreBlog();
  });
  rendreBlog();

  function rendreArticle(id) {
    var a = ARTICLES.find(function (x) { return x.id === id; });
    if (!a) return false;
    $("#v-article").innerHTML =
      '<article class="lecture"><a class="retour" href="#blog">Le blog</a>' +
      '<h1>' + esc(a.title) + '</h1><p class="meta">Agence Baghera · ' + esc(a.date) + '</p>' +
      '<div class="couv"><img src="' + a.cover + '" alt=""></div>' +
      '<div class="prose">' + a.body + '</div><aside class="fin-article"><p class="eyebrow">Un projet en tête ?</p><h2>Parlons de votre prochaine campagne</h2><div class="cta-duo"><a class="btn btn-orange fleche" href="https://calendar.google.com/appointments/schedules/AcZssZ3wr56gAHHlQ9lYKhecLk3dZM8wu3Itv3OhEKW_VFvJ0YhseNA4_Kt7mjPV7Grl7n6jU2ZC2Q9T" data-rdv target="_blank" rel="noopener">Prendre rendez-vous</a><a class="btn btn-ligne" href="#contact" data-profil="marque">Nous écrire</a></div></aside></article>';
    document.title = a.title + " — Baghera";
    return true;
  }

  /* ---------- Navigation ---------- */
  var NAV = { projet: "projets", talent: "createurs", article: "blog" };
  var TITRES = { accueil: "Agence Baghera", projets: "Projets — Baghera", createurs: "Créateurs — Baghera", accompagner: "Accompagner — Baghera", equipe: "Équipe — Baghera", blog: "Blog — Baghera", mentions: "Mentions légales — Baghera" };

  function montrer(vue) {
    $$(".vue").forEach(function (v) { v.hidden = v.dataset.vue !== vue; });
    var actif = NAV[vue] || vue;
    $$("[data-nav]").forEach(function (a) {
      if (a.dataset.nav === actif) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (TITRES[vue]) document.title = TITRES[vue];
    if (vue === "accueil") requestAnimationFrame(majFleches);
  }

  function router() {
    var h = decodeURIComponent(location.hash.replace(/^#/, "")) || "accueil";
    fermerMenu();

    if (h === "savoir-faire") h = "accompagner";
    if (h === "contact") { $("#contact").scrollIntoView({ behavior: "smooth" }); return; }
    var offre = h.indexOf("offre-") === 0;
    var ok = true;
    if (h.indexOf("projet-") === 0) { ok = rendreProjet(h.slice(7)); if (ok) montrer("projet"); }
    else if (h.indexOf("talent-") === 0) { ok = rendreTalent(h.slice(7)); if (ok) montrer("talent"); }
    else if (h.indexOf("article-") === 0) { ok = rendreArticle(h.slice(8)); if (ok) montrer("article"); }
    else if (offre) { montrer("accompagner"); }
    else if (document.querySelector('[data-vue="' + h + '"]')) { montrer(h); }
    else { ok = false; }
    if (!ok) { montrer("accueil"); }

    if (offre) { var el = document.getElementById(h); if (el) el.scrollIntoView(); }
    else window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", router);
  router();

  /* ---------- Menu hamburger ---------- */
  function fermerMenu() {
    $("#menu").hidden = true;
    $("#burger").setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-ouvert");
  }
  $("#burger").addEventListener("click", function () {
    var ouvrir = $("#menu").hidden;
    $("#menu").hidden = !ouvrir;
    this.setAttribute("aria-expanded", String(ouvrir));
    document.body.classList.toggle("menu-ouvert", ouvrir);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fermerMenu(); });
  $("#menu").addEventListener("click", function (e) { if (e.target.closest("a")) fermerMenu(); });

  /* ---------- Copier une adresse ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copier]"); if (!b) return;
    var txt = b.dataset.copier;
    var fini = function () { var t = b.textContent; b.textContent = "Copié ✓"; setTimeout(function () { b.textContent = t; }, 1600); };
    try {
      navigator.clipboard.writeText(txt).then(fini, function () { selectionner(b.previousElementSibling); });
    } catch (err) { selectionner(b.previousElementSibling); }
  });
  function selectionner(el) {
    if (!el) return;
    var r = document.createRange(); r.selectNodeContents(el);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }

  /* ---------- Formulaire de contact ----------
     Les messages sont envoyés à l'adresse définie dans data.js (BAGHERA_FORMULAIRE), via FormSubmit. */
  $("#formulaire").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, manquant = null;
    ["f-nom", "f-email", "f-sujet", "f-message"].forEach(function (id) {
      var c = document.getElementById(id);
      if (!manquant && !c.value.trim()) manquant = c;
    });
    var mail = document.getElementById("f-email");
    var retour = $("#retour-form");
    if (manquant) { retour.textContent = "Merci de remplir les champs marqués d’une *."; manquant.focus(); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail.value.trim())) { retour.textContent = "Cette adresse e-mail semble incomplète."; mail.focus(); return; }
    if (f.elements._honey && f.elements._honey.value) return; /* robot */
    var donnees = {
      _subject: "Nouveau contact site Baghera : " + f.elements.sujet.value,
      _template: "table",
      _captcha: "false",
      "Vous êtes": f.elements.profil.value === "createur" ? "Créateur·rice" : "Marque",
      Nom: f.elements.nom.value.trim(),
      "Société / compte": f.elements.societe.value.trim(),
      email: mail.value.trim(),
      "Téléphone": f.elements.tel.value.trim(),
      Sujet: f.elements.sujet.value,
      Message: f.elements.message.value.trim()
    };
    var bouton = f.querySelector('button[type="submit"]');
    bouton.disabled = true;
    retour.textContent = "Envoi en cours…";
    /* 1) Netlify Forms (quand le site est hébergé sur Netlify) ; 2) sinon FormSubmit en secours */
    var corps = new URLSearchParams({
      "form-name": "contact", profil: f.elements.profil.value, nom: donnees.Nom, societe: donnees["Société / compte"],
      email: donnees.email, tel: donnees["Téléphone"], sujet: donnees.Sujet, message: donnees.Message
    }).toString();
    var viaFormSubmit = function () {
      return fetch(window.BAGHERA_FORMULAIRE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(donnees)
      });
    };
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: corps })
      .then(function (r) { return r.ok ? r : viaFormSubmit(); }, viaFormSubmit)
      .then(function (r) {
      if (!r.ok) throw new Error("envoi");
      retour.textContent = "Merci ! Votre message a bien été envoyé. Nous vous répondons très vite.";
      f.reset();
    }).catch(function () {
      retour.textContent = "L’envoi n’a pas fonctionné. Écrivez-nous directement à bonjour@influencebaghera.com.";
    }).then(function () { bouton.disabled = false; });
  });
})();

/* ---------- Prises de contact ---------- */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };

  /* Tous les boutons « Prendre RDV » pointent vers le lien défini dans data.js */
  if (window.BAGHERA_RDV) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-rdv]"), function (a) { a.href = window.BAGHERA_RDV; });
  }

  /* Pré-remplir le formulaire selon le bouton cliqué (marque / créateur / sujet) */
  function choisirProfil(profil) {
    var r = document.getElementById(profil === "createur" ? "f-profil-createur" : "f-profil-marque");
    if (r) { r.checked = true; majProfil(); }
  }
  function choisirSujet(sujet) {
    var s = document.getElementById("f-sujet");
    if (!s) return;
    Array.prototype.forEach.call(s.options, function (o) { if (o.text === sujet) s.value = o.value || o.text; });
  }
  function majProfil() {
    var createur = document.getElementById("f-profil-createur").checked;
    $("#l-societe").textContent = createur ? "Votre compte (Instagram, TikTok…)" : "Votre société";
    if (createur) choisirSujet("Rejoindre l’agence");
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-profil], [data-sujet]");
    if (!a) return;
    if (a.dataset.profil) choisirProfil(a.dataset.profil);
    if (a.dataset.sujet) choisirSujet(a.dataset.sujet);
    setTimeout(function () { var n = document.getElementById("f-nom"); if (n) n.focus({ preventScroll: true }); }, 500);
  });
  Array.prototype.forEach.call(document.querySelectorAll('input[name="profil"]'), function (r) { r.addEventListener("change", majProfil); });

  /* Bouton « Prendre RDV » flottant : visible après le haut de page, masqué près du formulaire */
  var bouton = $("#rdv-flottant");
  var contactVisible = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entrees) { contactVisible = entrees[0].isIntersecting; maj(); }, { threshold: 0.1 }).observe($("#contact"));
  }
  function maj() {
    var menuOuvert = !$("#menu").hidden;
    bouton.hidden = window.scrollY < 520 || contactVisible || menuOuvert;
  }
  window.addEventListener("scroll", maj, { passive: true });
  document.addEventListener("click", function () { setTimeout(maj, 0); });
  maj();
})();
