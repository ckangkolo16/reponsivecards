//Click event which toggles the card from back to front
var summoned = document.getElementById("summonedid");

summoned.addEventListener("click", function (summoned) {
  summoned.target.classList.toggle("summoned2");
});

//MouseOver event which displays corresponding info
function showInfoss() {
  let a = document.getElementById("blueyeinfo");
  let b = document.getElementById("darkmaginfo");
  let c = document.getElementById("summoninfo");
  let d = document.getElementById("redeyeinfo");
  let e = document.getElementById("mreborninfo");
  let cardsinhand = document.getElementById("cardsinhand");

  if (c.style.display != "block") {
    cardsinhand.style.display = "none";
    c.style.display = "block";
  }
}
