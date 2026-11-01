/* Navigation et pied de page communs à toutes les pages */
(function () {
  var menu = [
    { h: "index.html", t: "Accueil" },
    { h: "la-race.html", t: "La Romane", sub: [["la-race.html", "La race"], ["f1.html", "La F1"]] },
    { h: "organisme-de-selection.html", t: "L'Organisme de sélection" },
    { h: "schema-de-selection.html", t: "Le schéma de sélection" },
    { h: "publications.html", t: "Publications" },
    { h: "visites.html", t: "La Romane au fil de nos visites" },
    { h: "vente-reproducteurs.html", t: "Vente de reproducteurs" },
    { h: "actualites.html", t: "Actualités" },
    { h: "partenaires.html", t: "Nos partenaires" },
    { h: "contact.html", t: "Nous contacter" }
  ];
  var current = location.pathname.split("/").pop() || "index.html";

  function isCur(it) {
    if (it.h === current) return true;
    return (it.sub || []).some(function (s) { return s[0] === current; });
  }
  var nav = menu.map(function (it) {
    var cur = isCur(it) ? ' aria-current="page"' : "";
    if (!it.sub) return '<a href="' + it.h + '"' + cur + ">" + it.t + "</a>";
    return '<div class="has-sub"><a href="' + it.h + '"' + cur + ">" + it.t + ' <span class="plus" aria-hidden="true">+</span></a><div class="sub">' +
      it.sub.map(function (s) { return '<a href="' + s[0] + '"' + (s[0] === current ? ' aria-current="page"' : "") + ">" + s[1] + "</a>"; }).join("") + "</div></div>";
  }).join("");
  var flat = [];
  menu.forEach(function (it) { flat.push([it.h, it.t]); (it.sub || []).forEach(function (s) { if (s[0] !== it.h) flat.push(s); }); });
  var foot = flat.map(function (p) { return '<a href="' + p[0] + '">' + p[1] + "</a>"; }).join("");

  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<div class="wrap bar">' +
      '<a class="brand" href="index.html"><img class="logo" src="assets/img/logo.jpg" alt="Romane : l\'essayer c\'est l\'adopter"></a>' +
      '<div class="bar-right"><a class="cta" href="eleveurs.html">Trouver un éleveur</a>' +
      '<button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="nav">☰</button></div></div>' +
      '<nav id="nav" aria-label="Navigation principale"><div class="wrap navin">' + nav + "</div></nav>";
    var b = header.querySelector(".burger");
    b.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      b.setAttribute("aria-expanded", open);
    });
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      '<div class="wrap foot">' +
      '<div><img class="logo-foot" src="assets/img/logo.jpg" alt="Romane"><p>Le site de la race ovine Romane.</p></div>' +
      '<nav aria-label="Pied de page">' + foot + '<a href="eleveurs.html">Trouver un éleveur</a></nav></div>' +
      '<div class="wrap legal">© ' + new Date().getFullYear() + " — Mentions légales à compléter.</div>";
  }
})();
