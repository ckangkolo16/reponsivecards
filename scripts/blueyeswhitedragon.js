//Click event which toggles the card from back to front
var flip = document.getElementById("blueyesid");

flip.addEventListener("click", function (flip) {
  flip.target.classList.toggle("blueyes2");
});

//MouseOver event which displays corresponding info
function showInfobe() {
  let a = document.getElementById("blueyeinfo");
  let b = document.getElementById("darkmaginfo");
  let c = document.getElementById("summoninfo");
  let d = document.getElementById("redeyeinfo");
  let e = document.getElementById("mreborninfo");

  let cardsinhand = document.getElementById("cardsinhand");

  if (a.style.display != "block") {
    a.style.display = "block";
    cardsinhand.style.display = "none";
  }
}
