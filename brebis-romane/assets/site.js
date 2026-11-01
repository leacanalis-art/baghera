/* Navigation et pied de page communs à toutes les pages */
(function () {
  var pages = [
    ["index.html", "Accueil"],
    ["la-race.html", "La race"],
    ["organisme-de-selection.html", "L'organisme de sélection"],
    ["eleveurs.html", "Trouver un éleveur"],
    ["contact.html", "Contact"]
  ];
  var current = location.pathname.split("/").pop() || "index.html";

  var links = pages.map(function (p) {
    var cls = p[0] === current ? ' aria-current="page"' : "";
    return '<a href="' + p[0] + '"' + cls + ">" + p[1] + "</a>";
  }).join("");

  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<div class="wrap bar">' +
      '<a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">B</span>' +
      '<span>Brebis Romane<small>Race ovine</small></span></a>' +
      '<button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="nav">☰</button>' +
      '<nav id="nav" aria-label="Navigation principale">' + links + "</nav></div>";
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
      "<div><strong>Brebis Romane</strong><p>Le site de la race ovine Romane.</p></div>" +
      '<nav aria-label="Pied de page">' + links + "</nav></div>" +
      '<div class="wrap legal">© ' + new Date().getFullYear() + " — Mentions légales à compléter.</div>";
  }
})();
