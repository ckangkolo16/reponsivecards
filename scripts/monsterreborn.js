//Click event which toggles the card from back to front
var mreborn = document.getElementById("mrebornid");

mreborn.addEventListener("click", function (mreborn) {
  mreborn.target.classList.toggle("mreborn2");
});

//MouseOver event which displays corresponding info
function showInfomr() {
  let a = document.getElementById("blueyeinfo");
  let b = document.getElementById("darkmaginfo");
  let c = document.getElementById("summoninfo");
  let d = document.getElementById("redeyeinfo");
  let e = document.getElementById("mreborninfo");
  let cardsinhand = document.getElementById("cardsinhand");

  if (e.style.display != "block") {
    cardsinhand.style.display = "none";
    e.style.display = "block";
  }
}
