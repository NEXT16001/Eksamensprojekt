let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let indtægterOgUdgifterText
let textIndtægterOgUdgifterX = 1;
let textIndtægterOgUdgifterY = windowHeight/3;
let inputLøn
let inputUdgifter
let inputIndtægterOgUdgifterX

function setup() {
  createCanvas(windowWidth, windowHeight);
  inputIndtægterOgUdgifter();
  
}

function draw() {
  background(255);
  inputIndtægterOgUdgifterText();

}

function inputIndtægterOgUdgifterText() {
  frameRate(0)
  indtægterOgUdgifterText = ["Månedens netto indkomst", "Husleje", "Forsikringsafgifter", "Mad og drikke", 
  "Transport", "Shopping", "Andre udgifter"];
  
  if (textIndtægterOgUdgifterY > (20*(indtægterOgUdgifterText.length-1))+windowHeight/4) {
    textIndtægterOgUdgifterY = windowHeight/3
    text(indtægterOgUdgifterText[0], textIndtægterOgUdgifterX, textIndtægterOgUdgifterY)
  }

  for (let i = 1; i < indtægterOgUdgifterText.length; i++) {
    textIndtægterOgUdgifterY += 25;

    text(indtægterOgUdgifterText[i], textIndtægterOgUdgifterX, textIndtægterOgUdgifterY)
  }
}

function inputIndtægterOgUdgifter() {
  inputIndtægterOgUdgifterX = windowWidth/8;

  inputLøn = createInput();
  inputLøn.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);

  for (i = 0; i < 6; i++) {
    textIndtægterOgUdgifterY += 25;
    inputUdgifter = createInput();
    inputUdgifter.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);
  }
}