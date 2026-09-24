(function () {
  "use strict";

  var DATA = window.BAGHERA || { talents: [], formats: [], marques: [], projets: [], avis: [], equipe: [] };
  var ARTICLES = window.BAGHERA_ARTICLES || [];

  var CATEGORIES = {
    sante: "Santé", skincare: "Skincare", immobilier: "Immobilier",
    lifestyle: "Lifestyle", finance: "Finance", strategie: "Stratégie", local: "Local"
  };

  var VUES = ["accueil", "projets", "createurs", "accompagner", "equipe", "blog", "mentions"];
  var ANCRES_ACCOMPAGNER = ["offre-talents", "offre-accompagnement", "offre-activations"];

  function el(tag, attrs, html) {
    var node = document.createElement(tag);
    for (var k in attrs || {}) node.setAttribute(k, attrs[k]);
    if (html != null) node.innerHTML = html;
    return node;
  }

  function initiales(nom) {
    var mots = nom.trim().split(/\s+/);
    var lettres = mots.length > 1
      ? mots.map(function (m) { return m[0]; }).join("")
      : mots[0].slice(0, 2);
    return lettres.slice(0, 2).toUpperCase();
  }

  function talentParId(id) {
    return DATA.talents.filter(function (t) { return t.id === id; })[0];
  }
  function articleParId(id) {
    return ARTICLES.filter(function (a) { return a.id === id; })[0];
  }
  function projetParId(id) {
    return DATA.projets.filter(function (p) { return p.id === id; })[0];
  }

  /* ---------------- images manquantes : dégradation propre ---------------- */
  document.addEventListener("error", function (e) {
    var img = e.target;
    if (!img || img.tagName !== "IMG") return;

    if (img.classList.contains("logo-img")) {
      img.replaceWith(el("span", { class: "logo-texte" }, "Baghera"));
      return;
    }
    if (img.classList.contains("partenaire-img")) {
      img.replaceWith(el("span", { class: "marque-texte" }, img.alt || ""));
      return;
    }
    var logoWrap = img.closest(".marque-logo");
    if (logoWrap) {
      logoWrap.classList.add("placeholder");
      logoWrap.textContent = img.alt || logoWrap.getAttribute("data-nom") || "";
      return;
    }
    img.style.display = "none";
  }, true);

  /* ---------------- cartes réutilisables ---------------- */
  function carteTalent(t) {
    var card = el("a", { class: "talent-carte", href: "#talent/" + t.id });
    card.innerHTML =
      '<div class="photo">' +
        '<div class="initiales">' + initiales(t.nom) + '</div>' +
        '<img src="' + t.photo + '" alt="' + t.nom + '" loading="lazy">' +
      '</div>' +
      '<div class="corps">' +
        '<h3>' + t.nom + '</h3>' +
        '<div class="niche">' + t.niche + '</div>' +
        '<div class="stats"><span>' + t.abonnes + ' abonnés</span></div>' +
      '</div>';
    return card;
  }

  function carteFormat(f) {
    var card = el("div", { class: "format-carte" });
    card.innerHTML = "<b>" + f.titre + "</b><p>" + f.texte + "</p>";
    return card;
  }

  function carteMarqueLogo(m) {
    var card = el("a", { class: "marque-logo", "data-nom": m.nom, href: "#createurs" });
    card.innerHTML = '<img class="marque-img" src="' + m.fichier + '" alt="' + m.nom + '" loading="lazy">';
    return card;
  }

  function carteCampagne(p) {
    var t = talentParId(p.talentId);
    var card = el("a", { class: "campagne-carte", href: "#projet/" + p.id });
    card.innerHTML =
      '<div class="visuel">' + (CATEGORIES[p.categorie] || "") + '</div>' +
      '<div class="corps">' +
        '<span class="eyebrow">' + p.marque + '</span>' +
        '<h3>' + p.titre + '</h3>' +
        '<p>' + p.resume + (t ? " · " + t.nom : "") + '</p>' +
      '</div>';
    return card;
  }

  function carteProjet(p) {
    var t = talentParId(p.talentId);
    var card = el("a", { class: "projet-carte", href: "#projet/" + p.id });
    card.innerHTML =
      '<div class="visuel"><span>' + p.marque + '</span></div>' +
      '<div class="corps">' +
        '<span class="eyebrow">' + (CATEGORIES[p.categorie] || "") + '</span>' +
        '<h3>' + p.titre + '</h3>' +
        '<p>' + p.resume + (t ? " · avec " + t.nom : "") + '</p>' +
      '</div>';
    return card;
  }

  function carteAvis(a) {
    var card = el("div", { class: "avis-carte" });
    card.innerHTML =
      '<div class="etoiles">' + "★★★★★".slice(0, a.note) + '</div>' +
      '<p>' + a.texte + '</p>' +
      '<div class="qui">' + a.auteur + " · " + a.role + '</div>';
    return card;
  }

  function carteArticle(a) {
    var card = el("a", { class: "article-carte", href: "#article/" + a.id });
    card.innerHTML =
      '<div class="visuel">' + (CATEGORIES[a.categorie] || "Baghera") + '</div>' +
      '<div class="corps">' +
        '<time>' + formatDate(a.date) + '</time>' +
        '<h3>' + a.titre + '</h3>' +
        '<p>' + a.extrait + '</p>' +
      '</div>';
    return card;
  }

  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  }

  /* ---------------- rendu accueil ---------------- */
  function rendreAccueil() {
    var rail = document.getElementById("rail");
    if (rail && !rail.dataset.rendu) {
      DATA.formats.forEach(function (f) { rail.appendChild(carteFormat(f)); });
      rail.dataset.rendu = "1";
    }

    var carrousel = document.getElementById("carrousel");
    if (carrousel && !carrousel.dataset.rendu) {
      DATA.projets.forEach(function (p) { carrousel.appendChild(carteCampagne(p)); });
      carrousel.dataset.rendu = "1";
    }

    var marquesRail = document.getElementById("marques-rail");
    if (marquesRail && !marquesRail.dataset.rendu) {
      DATA.marques.concat(DATA.marques).forEach(function (m) { marquesRail.appendChild(carteMarqueLogo(m)); });
      marquesRail.dataset.rendu = "1";
    }

    var avisGrille = document.getElementById("avis-grille");
    if (avisGrille && !avisGrille.dataset.rendu) {
      DATA.avis.forEach(function (a) { avisGrille.appendChild(carteAvis(a)); });
      avisGrille.dataset.rendu = "1";
    }

    var talentsAccueil = document.getElementById("talents-accueil");
    if (talentsAccueil && !talentsAccueil.dataset.rendu) {
      DATA.talents.slice(0, 4).forEach(function (t) { talentsAccueil.appendChild(carteTalent(t)); });
      talentsAccueil.dataset.rendu = "1";
    }
  }

  document.addEventListener("click", function (e) {
    var bouton = e.target.closest("[data-defile]");
    if (!bouton) return;
    var carrousel = document.getElementById("carrousel");
    if (!carrousel) return;
    var pas = carrousel.clientWidth * 0.8 * parseInt(bouton.getAttribute("data-defile"), 10);
    carrousel.scrollBy({ left: pas, behavior: "smooth" });
  });

  /* ---------------- projets ---------------- */
  var filtreProjetsActif = "tous";

  function rendreFiltres(container, categories, actif, onClick) {
    container.innerHTML = "";
    var tous = el("button", { class: "filtre-btn" + (actif === "tous" ? " actif" : ""), "data-cat": "tous" }, "Tous");
    container.appendChild(tous);
    categories.forEach(function (cat) {
      var b = el("button", { class: "filtre-btn" + (actif === cat ? " actif" : ""), "data-cat": cat }, CATEGORIES[cat] || cat);
      container.appendChild(b);
    });
    container.querySelectorAll(".filtre-btn").forEach(function (b) {
      b.addEventListener("click", function () { onClick(b.getAttribute("data-cat")); });
    });
  }

  function rendreProjets() {
    var filtres = document.getElementById("filtres");
    var grille = document.getElementById("grille-projets");
    var vide = document.getElementById("vide");
    if (!filtres || !grille) return;

    var categories = Array.from(new Set(DATA.projets.map(function (p) { return p.categorie; })));

    function dessiner() {
      rendreFiltres(filtres, categories, filtreProjetsActif, function (cat) {
        filtreProjetsActif = cat;
        dessiner();
      });
      grille.innerHTML = "";
      var liste = filtreProjetsActif === "tous"
        ? DATA.projets
        : DATA.projets.filter(function (p) { return p.categorie === filtreProjetsActif; });
      liste.forEach(function (p) { grille.appendChild(carteProjet(p)); });
      if (vide) vide.hidden = liste.length > 0;
    }
    dessiner();
  }

  function rendreFicheProjet(id) {
    var vue = document.getElementById("v-projet");
    var p = projetParId(id);
    if (!vue) return;
    if (!p) { vue.innerHTML = '<div class="wrap fiche"><a class="fiche-retour" href="#projets">Retour aux projets</a></div>'; return; }
    var t = talentParId(p.talentId);
    vue.innerHTML =
      '<div class="wrap fiche">' +
        '<a class="fiche-retour" href="#projets">Retour aux projets</a>' +
        '<div class="fiche-tete">' +
          '<div class="fiche-visuel">' + (CATEGORIES[p.categorie] || "") + '</div>' +
          '<div>' +
            '<span class="eyebrow">' + p.marque + ' · ' + (CATEGORIES[p.categorie] || "") + '</span>' +
            '<h1 style="margin-top:12px">' + p.titre + '</h1>' +
            (t ? '<p class="lead" style="margin-top:16px">Avec <a href="#talent/' + t.id + '" style="text-decoration:underline">' + t.nom + '</a>, ' + t.niche.toLowerCase() + '.</p>' : '') +
          '</div>' +
        '</div>' +
        '<div class="fiche-corps"><p>' + p.description + '</p></div>' +
      '</div>';
  }

  /* ---------------- créateurs ---------------- */
  function rendreCreateurs() {
    var grille = document.getElementById("talents-page");
    if (grille && !grille.dataset.rendu) {
      DATA.talents.forEach(function (t) { grille.appendChild(carteTalent(t)); });
      grille.dataset.rendu = "1";
    }
  }

  function rendreFicheTalent(id) {
    var vue = document.getElementById("v-talent");
    var t = talentParId(id);
    if (!vue) return;
    if (!t) { vue.innerHTML = '<div class="wrap fiche"><a class="fiche-retour" href="#createurs">Retour aux créateurs</a></div>'; return; }
    var projets = DATA.projets.filter(function (p) { return p.talentId === t.id; });
    vue.innerHTML =
      '<div class="wrap fiche">' +
        '<a class="fiche-retour" href="#createurs">Retour aux créateurs</a>' +
        '<div class="fiche-tete">' +
          '<div class="photo">' +
            '<div class="initiales-grande">' + initiales(t.nom) + '</div>' +
            '<img src="' + t.photo + '" alt="' + t.nom + '" loading="lazy">' +
          '</div>' +
          '<div>' +
            '<span class="eyebrow">' + t.niche + '</span>' +
            '<h1 style="margin-top:12px">' + t.nom + '</h1>' +
            '<div class="fiche-stats"><div><b>' + t.abonnes + '</b><span>abonnés</span></div></div>' +
            '<p class="lead">' + t.bio + '</p>' +
            (t.marques && t.marques.length ? '<div class="villes" style="margin-top:18px">' + t.marques.map(function (m) { return '<span class="chip">' + m + '</span>'; }).join("") + '</div>' : '') +
            '<div class="cta-duo"><a class="btn btn-orange fleche" href="#contact" data-profil="marque" data-sujet="Activer un de vos talents">Activer ce talent</a></div>' +
          '</div>' +
        '</div>' +
        (projets.length ? '<div class="fiche-corps"><h2 style="font-size:1.3rem">Campagnes avec ' + t.nom + '</h2><div class="grille-projets" style="margin-top:20px">' + projets.map(function () { return ""; }).join("") + '</div></div>' : "") +
      '</div>';
    if (projets.length) {
      var grille = vue.querySelector(".grille-projets");
      projets.forEach(function (p) { grille.appendChild(carteProjet(p)); });
    }
  }

  /* ---------------- équipe ---------------- */
  function rendreEquipe() {
    var wrap = document.querySelector("#v-equipe .fondatrices");
    if (!wrap || wrap.dataset.rendu) return;
    // les photos statiques du HTML restent ; on ajoute juste les initiales de secours.
    wrap.querySelectorAll(".fondatrice").forEach(function (art) {
      var img = art.querySelector("img");
      var h3 = art.querySelector("h3");
      if (img && h3) {
        img.insertAdjacentHTML("beforebegin", '<div class="initiales-grande">' + initiales(h3.textContent) + '</div>');
        img.style.position = "relative";
        img.style.zIndex = "1";
      }
    });
    wrap.dataset.rendu = "1";
  }

  /* ---------------- blog ---------------- */
  var filtreBlogActif = "tous";

  function rendreBlog() {
    var filtres = document.getElementById("filtres-blog");
    var grille = document.getElementById("articles");
    if (!filtres || !grille) return;
    var categories = Array.from(new Set(ARTICLES.map(function (a) { return a.categorie; })));

    function dessiner() {
      rendreFiltres(filtres, categories, filtreBlogActif, function (cat) {
        filtreBlogActif = cat;
        dessiner();
      });
      grille.innerHTML = "";
      var liste = filtreBlogActif === "tous" ? ARTICLES : ARTICLES.filter(function (a) { return a.categorie === filtreBlogActif; });
      liste.forEach(function (a) { grille.appendChild(carteArticle(a)); });
    }
    dessiner();
  }

  function rendreFicheArticle(id) {
    var vue = document.getElementById("v-article");
    var a = articleParId(id);
    if (!vue) return;
    if (!a) { vue.innerHTML = '<div class="wrap fiche"><a class="fiche-retour" href="#blog">Retour au blog</a></div>'; return; }
    var paragraphes = a.contenu.split("\n\n").map(function (p) { return "<p>" + p + "</p>"; }).join("");
    vue.innerHTML =
      '<div class="wrap fiche" style="max-width:74ch">' +
        '<a class="fiche-retour" href="#blog">Retour au blog</a>' +
        '<span class="eyebrow">' + (CATEGORIES[a.categorie] || "") + ' · ' + formatDate(a.date) + '</span>' +
        '<h1 style="margin-top:12px">' + a.titre + '</h1>' +
        '<div class="fiche-corps" style="margin-top:24px">' + paragraphes + '</div>' +
      '</div>';
  }

  /* ---------------- menu ---------------- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");

  function fermerMenu() {
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (burger && menu) {
    burger.addEventListener("click", function () {
      var ouvert = burger.getAttribute("aria-expanded") === "true";
      if (ouvert) { fermerMenu(); }
      else { menu.hidden = false; burger.setAttribute("aria-expanded", "true"); document.body.style.overflow = "hidden"; }
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) fermerMenu();
    });
  }

  /* ---------------- routage ---------------- */
  function afficherVue(nom) {
    document.querySelectorAll(".vue").forEach(function (v) {
      v.hidden = v.getAttribute("data-vue") !== nom;
    });
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.classList.toggle("actif", a.getAttribute("data-nav") === nom);
    });
  }

  function defilerVers(id) {
    var cible = document.getElementById(id);
    if (cible) cible.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function router() {
    var hash = (location.hash || "#accueil").slice(1);
    fermerMenu();

    if (hash === "contact") {
      defilerVers("contact");
      return;
    }
    if (hash.indexOf("projet/") === 0) {
      afficherVue("projet");
      rendreFicheProjet(hash.slice(7));
      window.scrollTo(0, 0);
      return;
    }
    if (hash.indexOf("talent/") === 0) {
      afficherVue("talent");
      rendreFicheTalent(hash.slice(7));
      window.scrollTo(0, 0);
      return;
    }
    if (hash.indexOf("article/") === 0) {
      afficherVue("article");
      rendreFicheArticle(hash.slice(8));
      window.scrollTo(0, 0);
      return;
    }
    if (ANCRES_ACCOMPAGNER.indexOf(hash) !== -1) {
      afficherVue("accompagner");
      requestAnimationFrame(function () { defilerVers(hash); });
      return;
    }
    var vue = VUES.indexOf(hash) !== -1 ? hash : "accueil";
    afficherVue(vue);
    window.scrollTo(0, 0);

    if (vue === "accueil") rendreAccueil();
    if (vue === "projets") rendreProjets();
    if (vue === "createurs") rendreCreateurs();
    if (vue === "equipe") rendreEquipe();
    if (vue === "blog") rendreBlog();
  }

  window.addEventListener("hashchange", router);
  document.addEventListener("DOMContentLoaded", router);

  /* ---------------- formulaire de contact ---------------- */
  var SUJET_PAR_PROFIL = { marque: "Activer un de vos talents", createur: "Rejoindre l’agence" };

  function majLabelSociete(profil) {
    var label = document.getElementById("l-societe");
    var champ = document.getElementById("f-societe");
    if (!label || !champ) return;
    if (profil === "createur") {
      label.textContent = "Votre pseudo / plateforme";
      champ.setAttribute("placeholder", "@votrepseudo");
    } else {
      label.textContent = "Votre société";
      champ.removeAttribute("placeholder");
    }
  }

  document.addEventListener("click", function (e) {
    var lien = e.target.closest("[data-profil],[data-sujet]");
    if (!lien) return;
    var profil = lien.getAttribute("data-profil");
    var sujetVoulu = lien.getAttribute("data-sujet");

    if (profil) {
      var radio = document.getElementById("f-profil-" + profil);
      if (radio) radio.checked = true;
      majLabelSociete(profil);
    }
    var select = document.getElementById("f-sujet");
    if (select) {
      var texteCherche = sujetVoulu || (profil ? SUJET_PAR_PROFIL[profil] : null);
      if (texteCherche) {
        Array.prototype.forEach.call(select.options, function (opt) {
          if (opt.textContent.trim() === texteCherche) select.value = opt.value;
        });
      }
    }
  });

  document.querySelectorAll('input[name="profil"]').forEach(function (r) {
    r.addEventListener("change", function () { majLabelSociete(r.value); });
  });

  var formulaire = document.getElementById("formulaire");
  if (formulaire) {
    formulaire.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!formulaire.reportValidity()) return;
      if (formulaire.elements["_honey"].value) return;

      var f = formulaire.elements;
      var profil = f["profil"].value === "marque" ? "Une marque" : "Un·e créateur·rice";
      var lignes = [
        "Profil : " + profil,
        "Nom : " + f["nom"].value,
        f["societe"].value ? "Société / pseudo : " + f["societe"].value : "",
        "E-mail : " + f["email"].value,
        f["tel"].value ? "Téléphone : " + f["tel"].value : "",
        "Sujet : " + f["sujet"].value,
        "",
        f["message"].value
      ].filter(Boolean).join("\n");

      var sujetMail = encodeURIComponent("[Site Baghera] " + f["sujet"].value + " — " + f["nom"].value);
      var corpsMail = encodeURIComponent(lignes);
      window.location.href = "mailto:bonjour@influencebaghera.com?subject=" + sujetMail + "&body=" + corpsMail;

      var retour = document.getElementById("retour-form");
      if (retour) retour.textContent = "Votre client mail va s’ouvrir pour envoyer le message.";
    });
  }

  /* ---------------- copier l'email ---------------- */
  document.addEventListener("click", function (e) {
    var bouton = e.target.closest(".copier");
    if (!bouton) return;
    var texte = bouton.getAttribute("data-copier");
    var reussi = function () {
      var original = bouton.textContent;
      bouton.textContent = "Copié !";
      setTimeout(function () { bouton.textContent = original; }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texte).then(reussi).catch(function () {});
    }
  });

  /* ---------------- bouton RDV flottant ---------------- */
  var rdvFlottant = document.getElementById("rdv-flottant");
  if (rdvFlottant) {
    window.addEventListener("scroll", function () {
      rdvFlottant.hidden = window.scrollY < 500;
    }, { passive: true });
  }
})();
