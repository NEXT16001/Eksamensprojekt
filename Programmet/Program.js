let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let inputY = windowHeight/8;
let sumInput
let periodeInput
let sumInputgem
let periodeInputGem
let indtægterOgUdgifterText
let textIndtægterOgUdgifterX = 1;
let textIndtægterOgUdgifterY = windowHeight/2.5;
let inputLøn
let inputUdgifter
let inputIndtægterOgUdgifterX

function setup() {
  createCanvas(windowWidth, windowHeight);
  let knapForside = createButton('Forsiden');
  knapForside.position(1,1);
  knapForside.mousePressed(gåTilbageTilForsiden);

  inputPeriodeOgSum();
  låsPeriodeOgSum();
  inputIndtægterOgUdgifter();
}

function draw() {
  background(255);
  
  inputPeriodeOgSumText();
  inputIndtægterOgUdgifterText();

}

function gåTilbageTilForsiden() {
  window.location.href = 'index.html';
}

function inputPeriodeOgSum() {
  sumInput = createInput();
  sumInput.position(windowWidth/4+20, inputY);

  periodeInput = createInput();
  periodeInput.position(windowWidth*6.25/10, inputY);
}

function inputPeriodeOgSumText() {
  let list = ["Hvor meget vil du sparer?", "kr.", "Hvor længe vil du sparer?", "måneder"];
  for (let i = 0; i < 4; i++) {
    text(list[0],windowWidth/7, inputY);
    text(list[1], windowWidth/3+80, inputY);

    text(list[2], windowWidth*5/10, inputY);
    text(list[3], windowWidth*7/10+75, inputY);
  }
}

function låsPeriodeOgSum(inputPeriodeOgSum) {
  let låsPeriodeOgSumKnap = createButton("Ok");
  låsPeriodeOgSumKnap.position(windowWidth*9/10-100, inputY);
  låsPeriodeOgSumKnap.mousePressed(låsOgGemPeriodeOgSumAttribute);
}

function låsOgGemPeriodeOgSumAttribute(låsPeriodeOgSum) {
  sumInput.attribute("disabled", "");
  periodeInput.attribute("disabled", "");

  sumInputgem = sumInput.value();
  periodeInputGem = periodeInput.value();
}

function inputIndtægterOgUdgifterText() {
  frameRate(0)
  indtægterOgUdgifterText = ["Månedens netto indkomst", "Husleje", "Forsikringsafgifter", 
  "Andre udgifter evt. lån"];
  
  if (textIndtægterOgUdgifterY > (20*(indtægterOgUdgifterText.length-1))+windowHeight/4) {
    textIndtægterOgUdgifterY = windowHeight/2.5
    text(indtægterOgUdgifterText[0], textIndtægterOgUdgifterX, textIndtægterOgUdgifterY)
  }

  if (textIndtægterOgUdgifterY > (20*(indtægterOgUdgifterText.length-1))+windowHeight/4) {
    textIndtægterOgUdgifterX = windowWidth/3.75
    text("kr.", textIndtægterOgUdgifterX, textIndtægterOgUdgifterY)
  }

  for (let i = 1; i < indtægterOgUdgifterText.length; i++) {
    textIndtægterOgUdgifterY += 25;
    textIndtægterOgUdgifterX = 1;

    text(indtægterOgUdgifterText[i], textIndtægterOgUdgifterX, textIndtægterOgUdgifterY)
  }
}

function inputIndtægterOgUdgifter() {
  inputIndtægterOgUdgifterX = windowWidth/8;

  inputLøn = createInput();
  inputLøn.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);

  for (i = 0; i < 3; i++) {
    textIndtægterOgUdgifterY += 25;
    inputUdgifter = createInput();
    inputUdgifter.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);
  }
}