const tripleA = document.getElementById("tripleA");
const inde = document.getElementById("inde");
const favoris = document.getElementById("favoris");

tripleA.addEventListener("click", (e) => {
  window.location.replace("./page-article/tripleA.html");
});
inde.addEventListener("click", (e) => {
  window.location.replace("./page-article/Inde.html");
});
favoris.addEventListener("click", (e) => {
  window.location.replace("./page-article/favoris.html");
});
