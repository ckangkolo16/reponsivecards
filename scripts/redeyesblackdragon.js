//Click event which toggles the card from back to front
var redeyesbd = document.getElementById("redeyesid");

redeyesbd.addEventListener("click", function (redeyes) {
  redeyes.target.classList.toggle("redeyes2");
});

//MouseOver event which displays corresponding info
function showInfore() {
  let a = document.getElementById("blueyeinfo");
  let b = document.getElementById("darkmaginfo");
  let c = document.getElementById("summoninfo");
  let d = document.getElementById("redeyeinfo");
  let e = document.getElementById("mreborninfo");
  let cardsinhand = document.getElementById("cardsinhand");

  if (d.style.display != "block") {
    cardsinhand.style.display = "none";
    d.style.display = "block";
  }
}
