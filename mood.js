// Declaració de variables
const Feliç = document.getElementById("Feliç");
const Trist = document.getElementById("Trist");
const Enfadat = document.getElementById("Enfadat");
const Relaxat = document.getElementById("Relaxat");
const Espantat = document.getElementById("Espantat");
const Sorprès = document.getElementById("Sorprès");
const Fàstic = document.getElementById("Fàstic");
const Odi = document.getElementById("Odi");
const Reinicia = document.getElementById("Reinicia");

let paragraf = document.querySelector("p");
let foto = document.querySelector("img");
let caixaText = document.querySelector(".texto");

// Funció per restablir el color de fons
function resetColors() {
  caixaText.className = "texto";
}

// ----------------- ESDEVENIMENTS -----------------

Feliç.addEventListener("click", function () {
  resetColors();
  paragraf.innerHTML = "Avui em sento feliç!";
  caixaText.classList.add("felic");
  foto.src = "img/feliç.png";
});

Trist.addEventListener("click", function () {
  resetColors();
  paragraf.innerHTML = "Avui em sento trista";
  caixaText.classList.add("trist");
  foto.src = "img/trist.png";
});

Enfadat.addEventListener("click", function () {
  resetColors();
  paragraf.innerHTML = "M'has enfadat!";
  caixaText.classList.add("enfadat");
  foto.src = "img/enfadat.webp";
});

Relaxat.addEventListener("click", function () {
  resetColors();
  paragraf.innerHTML = "Estic de chill.";
  caixaText.classList.add("relaxat");
  foto.src = "img/relaxat.webp";
});

Espantat.addEventListener("click", function () {
  resetColors();
  paragraf.innerHTML = "Quin ensurt!";
  caixaText.classList.add("espantat");
  foto.src = "img/espantat.png";
});

Sorprès.addEventListener("click", function () {
  resetColors();
  paragraf.innerHTML = "Quina sorpresa!";
  caixaText.classList.add("sorprès");
  foto.src = "img/sorpresa.webp";
});

Fàstic.addEventListener("click", function () {
  resetColors();
  paragraf.innerHTML = "Ai! Quin fàstic!";
  caixaText.classList.add("fàstic");
  foto.src = "img/fàstic.png";
});

Odi.addEventListener("click", function () {
  resetColors();
  paragraf.innerHTML = "Avui em sento amb ganes d'odi.";
  caixaText.classList.add("odi");
  foto.src = "img/odi.png";
});

Reinicia.addEventListener("click", function () {
  location.reload();
});