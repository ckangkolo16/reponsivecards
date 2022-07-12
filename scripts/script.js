function hideInfo() {
  let a = document.getElementById("blueyeinfo");
  let b = document.getElementById("darkmaginfo");
  let c = document.getElementById("summoninfo");
  let d = document.getElementById("redeyeinfo");
  let e = document.getElementById("mreborninfo");
  let cardsinhand = document.getElementById("cardsinhand");
  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
  e.style.display = "none";
  cardsinhand.style.display = "flex";
}

// Exiting out of the cardinfo
function exit() {
  var a = document.getElementById("blueyeinfo");
  var b = document.getElementById("darkmaginfo");
  var c = document.getElementById("summoninfo");
  var d = document.getElementById("redeyeinfo");
  var e = document.getElementById("mreborninfo");

  if (
    a.style.display != "none" ||
    b.style.display != "none" ||
    c.style.display != "none" ||
    d.style.display != "none" ||
    e.style.display != "none"
  ) {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
  }
}

// This function repositions the card and enlarges it on mouseover(magnifying)
function enlarge() {
  var a = document.getElementById("blueyescardpic");
  a.style.top = "250px";
  a.style.right = "96px";
  a.style.transform = "scale(1.75)";
}

// var jinzo = document.getElementById("jinzoid");

// jinzo.addEventListener("click", function (jinzo) {
//   jinzo.target.classList.toggle("jinzo2");
//   let a = document.getElementById("blueyeinfo");
//   let b = document.getElementById("darkmaginfo");
//   let c = document.getElementById("summoninfo");
//   let d = document.getElementById("redeyeinfo");
//   let e = document.getElementById("mreborninfo");
// });

var draw = document.getElementById("deckofcards");

draw.addEventListener("click", function () {
  let a = document.getElementById("mysterycard");

  if (a.style.display != "block") {
    a.style.display = "block";
  }
});
