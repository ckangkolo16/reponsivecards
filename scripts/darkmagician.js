//Click event which toggles the card from back to front
var darkmagik = document.getElementById("darkmagid");

darkmagik.addEventListener("click", function (darkmagik) {
  darkmagik.target.classList.toggle("darkmag2");
});

//MouseOver event which displays corresponding info
function showInfodm() {
  let a = document.getElementById("blueyeinfo");
  let b = document.getElementById("darkmaginfo");
  let c = document.getElementById("summoninfo");
  let d = document.getElementById("redeyeinfo");
  let e = document.getElementById("mreborninfo");
  let cardsinhand = document.getElementById("cardsinhand");
  if (b.style.display != "block") {
    b.style.display = "block";
    cardsinhand.style.display = "none";
  }
}
