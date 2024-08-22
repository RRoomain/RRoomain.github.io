const tennis = document.getElementById("tennis");
const velo = document.getElementById("velo");
const foot = document.getElementById("foot");
console.log(tennis, foot, velo);

tennis.addEventListener("click", (e) => {
  window.location.replace("./page-article/tennis.html");
});
velo.addEventListener("click", (e) => {
  window.location.replace("./page-article/velo.html");
});
foot.addEventListener("click", (e) => {
  window.location.replace("./page-article/foot.html");
});
