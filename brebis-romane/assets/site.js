/* En-tête (menu déroulant au clic) et pied de page, communs à toutes les pages */
(function () {
  /* Réseaux sociaux : renseigner ici les adresses des comptes */
  var FACEBOOK = "https://www.facebook.com/p/OS-Romane-100064505392106/?locale=fr_FR";
  var INSTAGRAM = "https://www.instagram.com/";   /* À REMPLACER par l'adresse exacte du compte Instagram de l'OS Romane */

  var menu = [
    { t: "La Romane", cols: [
      { items: [
        ["romane.html", "Présentation", "Une brebis productive et maternelle"],
        ["histoire.html", "Son histoire", "De l'INRAe à l'OS Romane"],
        ["qualites.html", "Ses qualités", "Maternité, productivité, rusticité"],
        ["performances.html", "Ses performances", "Résultats du contrôle de performance"],
        ["f1.html", "La F1", "Le croisement avec une race bouchère"]
      ] }
    ] },
    { t: "Acheter et élever", cols: [
      { items: [
        ["vente.html", "Acheter des reproducteurs", "Agnelles, béliers, insémination"],
        ["eleveurs.html", "Carte des éleveurs", "Trouver un éleveur près de chez vous"],
        ["conseils.html", "Conseils d'élevage", "Lutte, agnelles, allaitement artificiel"]
      ] }
    ] },
    { t: "L'OS et la sélection", cols: [
      { h: "L'OS Romane", items: [
        ["os.html", "Présentation et services", ""],
        ["equipe.html", "Conseil d'administration et équipe", ""],
        ["partenaires.html", "Nos partenaires", ""]
      ] },
      { h: "La sélection", items: [
        ["selection.html", "Le schéma de sélection", ""],
        ["sci.html", "Stations de contrôle (SCI)", ""],
        ["cpo.html", "Contrôle de performance (CPO)", ""],
        ["cia.html", "Insémination (CIA)", ""]
      ] }
    ] },
    { t: "Actualités et documents", cols: [
      { items: [
        ["actualites.html", "Actualités", "Newsletters, salons, assemblées"],
        ["documents.html", "Documents à télécharger", "Fiches, rapports, résultats"],
        ["presse.html", "Presse et témoignages", "Ils parlent de la Romane"],
        ["visites.html", "Visites d'élevages", "En France et à l'étranger"]
      ] }
    ] },
    { h: "contact.html", t: "Contact" }
  ];
  var current = location.pathname.split("/").pop() || "index.html";

  var ICO = {
    fb: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.5-3.3h-3.2V8.6c0-.9.4-1.7 1.8-1.7h1.5V4.1S15.5 3.9 14.2 3.9c-2.7 0-4.4 1.6-4.4 4.5v2.3H7v3.3h2.8v8z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>'
  };

  var nav = menu.map(function (it, k) {
    if (!it.cols) return '<li class="mn-item"><a class="mn-link" href="' + it.h + '">' + it.t + "</a></li>";
    var panel = it.cols.map(function (c) {
      return '<div class="mn-col">' + (c.h ? '<p class="mn-h">' + c.h + "</p>" : "") + c.items.map(function (s) {
        return '<a href="' + s[0] + '"><b>' + s[1] + "</b>" + (s[2] ? "<small>" + s[2] + "</small>" : "") + "</a>";
      }).join("") + "</div>";
    }).join("");
    return '<li class="mn-item"><button class="mn-btn" type="button" aria-expanded="false" aria-controls="mn-' + k + '">' + it.t +
      ' <svg viewBox="0 0 12 8" width="11" height="8" aria-hidden="true"><path d="M1 1.5l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>' +
      '<div class="mn-panel" id="mn-' + k + '" hidden><div class="mn-cols">' + panel + "</div></div></li>";
  }).join("");

  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<div class="wrap bar">' +
      '<a class="brand" href="index.html"><img class="logo" src="assets/img/logo.jpg" alt="Romane : l\'essayer c\'est l\'adopter"></a>' +
      '<div class="bar-right"><a class="cta" href="eleveurs.html">Trouver un éleveur</a>' +
      '<button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="mainnav">☰</button></div></div>' +
      '<nav class="mainnav" id="mainnav" aria-label="Navigation principale"><div class="wrap"><ul>' + nav + "</ul></div></nav>";

    var burger = header.querySelector(".burger");
    var closeAll = function (except) {
      header.querySelectorAll(".mn-btn").forEach(function (b) {
        if (b === except) return;
        b.setAttribute("aria-expanded", "false");
        document.getElementById(b.getAttribute("aria-controls")).hidden = true;
      });
    };
    header.querySelectorAll(".mn-btn").forEach(function (b) {
      b.addEventListener("click", function (ev) {
        ev.stopPropagation();
        var open = b.getAttribute("aria-expanded") !== "true" || window.matchMedia("(hover: hover) and (min-width: 1081px)").matches;
        closeAll(b);
        b.setAttribute("aria-expanded", open);
        document.getElementById(b.getAttribute("aria-controls")).hidden = !open;
      });
    });
    var survol = window.matchMedia("(hover: hover) and (min-width: 1081px)");
    header.querySelectorAll(".mn-item").forEach(function (li) {
      var b = li.querySelector(".mn-btn"), t;
      if (!b) return;
      li.addEventListener("mouseenter", function () {
        if (!survol.matches) return;
        clearTimeout(t); closeAll(b);
        b.setAttribute("aria-expanded", "true");
        document.getElementById(b.getAttribute("aria-controls")).hidden = false;
      });
      li.addEventListener("mouseleave", function () {
        if (!survol.matches) return;
        t = setTimeout(function () {
          b.setAttribute("aria-expanded", "false");
          document.getElementById(b.getAttribute("aria-controls")).hidden = true;
        }, 180);
      });
    });
    header.addEventListener("click", function (ev) {
      if (ev.target.closest(".mn-panel a, .mn-link, .brand, .cta")) {
        closeAll(); header.classList.remove("open"); burger.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("click", function (ev) { if (!header.contains(ev.target)) closeAll(); });
    document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") closeAll(); });
    burger.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
  }

  /* Marque la page courante dans le menu */
  function markCurrent() {
    if (!header) return;
    header.querySelectorAll("a[aria-current]").forEach(function (a) { a.removeAttribute("aria-current"); });
    header.querySelectorAll(".is-cur").forEach(function (e) { e.classList.remove("is-cur"); });
    header.querySelectorAll(".mn-panel a, .mn-link").forEach(function (a) {
      if (a.getAttribute("href") === current) {
        a.setAttribute("aria-current", "page");
        var item = a.closest(".mn-item"), btn = item && item.querySelector(".mn-btn");
        if (btn) btn.classList.add("is-cur"); else a.classList.add("is-cur");
      }
    });
  }
  markCurrent();
  window.addEventListener("viewshown", markCurrent);

  /* Pied de page */
  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      '<div class="wrap foot3">' +
      '<div class="foot-id"><img class="logo-foot" src="assets/img/logo.jpg" alt="Romane : l\'essayer c\'est l\'adopter">' +
      "<p><strong>O.S. Romane</strong><br>Organisme de sélection de la race ovine Romane<br>Les Nauzes, 81580 Soual</p>" +
      '<p><a href="tel:0563825298">05 63 82 52 98</a><br><a href="mailto:osromane@arsoe-soual.com">osromane@arsoe-soual.com</a></p>' +
      '<div class="social"><a href="' + FACEBOOK + '" target="_blank" rel="noopener" aria-label="Facebook">' + ICO.fb + "</a>" +
      '<a href="' + INSTAGRAM + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICO.ig + "</a></div></div>" +
      '<nav class="foot-col" aria-label="La Romane"><p class="foot-h">La Romane</p><a href="romane.html">Présentation</a><a href="histoire.html">Son histoire</a><a href="qualites.html">Ses qualités</a><a href="performances.html">Ses performances</a><a href="f1.html">La F1</a><a href="conseils.html">Conseils d\'élevage</a></nav>' +
      '<nav class="foot-col" aria-label="Pratique"><p class="foot-h">Pratique</p><a href="vente.html">Acheter des reproducteurs</a><a href="eleveurs.html">Carte des éleveurs</a><a href="selection.html">La sélection</a><a href="os.html">L\'OS Romane</a><a href="documents.html">Documents à télécharger</a><a href="contact.html">Nous contacter</a></nav></div>' +
      '<div class="wrap legal">© ' + new Date().getFullYear() + " OS Romane — Mentions légales à compléter.</div>";
  }
})();
