let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let inputY = windowHeight/8;
let sumInput
let periodeInput
let sumInputGem
let periodeInputGem
let indtægterOgUdgifterText
let textIndtægterOgUdgifterX = 1;
let textIndtægterOgUdgifterY = windowHeight/2.5;
let inputLøn
let inputHusleje
let inputForsikringsafgifter
let inputAndreUdgifter
let inputIndtægterOgUdgifterX
let låsIndtægterOgUdgifterKnapX
let inputLønGem
let inputHuslejeGem
let inputForsikringsafgifterGem
let inputAndreUdgifterGem

function setup() {
  createCanvas(windowWidth, windowHeight);
  let knapForside = createButton('Forsiden');
  knapForside.position(1,1);
  knapForside.mousePressed(gåTilbageTilForsiden);

  inputPeriodeOgSum();
  låsPeriodeOgSum();
  inputIndtægterOgUdgifter();
  låsIndtægterOgUdgifter();
}

function draw() {
  background(255);
  statiskEllerDynamiskTekst()
}

function gåTilbageTilForsiden() {
  window.location.href = 'index.html';
}

function statiskEllerDynamiskTekst() {
  if (frameRate(0)) {
    inputPeriodeOgSumText();
    inputIndtægterOgUdgifterText();
  }

  else if (frameRate(60)) {
    opdaterIndtægterOgUdgifter();
    låsOgTjekIndtægterOgUdgifter();
  }
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

  sumInputGem = sumInput.value();
  periodeInputGem = periodeInput.value();
}

function inputIndtægterOgUdgifterText() {
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
    text("kr.", textIndtægterOgUdgifterX = windowWidth/3.75, textIndtægterOgUdgifterY)
  }
}

function inputIndtægterOgUdgifter() {
  inputIndtægterOgUdgifterX = windowWidth/8;

  inputLøn = createInput();
  inputLøn.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);
  inputLøn.input(opdaterIndtægterOgUdgifter)
  inputLøn.input(opdaterIndtægterOgUdgifter)

  textIndtægterOgUdgifterY += 25;
  inputHusleje = createInput();
  inputHusleje.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);
  
  textIndtægterOgUdgifterY += 25;
  inputForsikringsafgifter = createInput();
  inputForsikringsafgifter.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);

  textIndtægterOgUdgifterY += 25;
  inputAndreUdgifter = createInput();
  inputAndreUdgifter.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);
}

function låsIndtægterOgUdgifter(inputIndtægterOgUdgifter) {
  låsIndtægterOgUdgifterKnapX = windowWidth/3.5
  let låsIndtægterOgUdgifterKnap = createButton("Ok");
  låsIndtægterOgUdgifterKnap.position(låsIndtægterOgUdgifterKnapX, textIndtægterOgUdgifterY);
  låsIndtægterOgUdgifterKnap.mousePressed(gemIndtægterOgUdgifter);
}

function gemIndtægterOgUdgifter(inputIndtægterOgUdgifter) {
  //inputLøn.attribute("disabled", "");
  inputHusleje.attribute("disabled", "");
  inputForsikringsafgifter.attribute("disabled", "");
  inputAndreUdgifter.attribute("disabled", "");

  inputHuslejeGem = inputHusleje.value();
  inputForsikringsafgifterGem = inputForsikringsafgifter.value();
  inputAndreUdgifterGem = inputAndreUdgifter.value();
}

function opdaterIndtægterOgUdgifter(){
  //background(255)
  inputLønGem = inputLøn.value()
  console.log(inputLønGem)
}

function låsOgTjekIndtægterOgUdgifter() {
  if (inputLønGem.length == 0) {
    fill(255,0,0)
    text("Udfyld alle felter!", windowWidth/8, windowHeight/2.5+(25*4));
  }

  else if (inputLønGem.length > 0) {
    inputLøn.attribute("disabled", "");
  }
}