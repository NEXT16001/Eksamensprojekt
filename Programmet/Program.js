let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let inputY = windowHeight/8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let knapForside = createButton('Forsiden');
  knapForside.position(1,1);
  knapForside.mousePressed(gåTilbageTilForsiden);

  inputPeriodeOgSum();
  låsPeriodeOgSum();
  
}

function draw() {
  background(255);
  
  inputPeriodeOgSumText();

}

function gåTilbageTilForsiden() {
  window.location.href = 'index.html';
}

function inputPeriodeOgSum() {
  let sumInput = createInput();
  sumInput.position(windowWidth/4+20, inputY);

  let periodeInput = createInput();
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
  låsPeriodeOgSumKnap.mousePressed(låsPeriodeOgSumAttribute);
}

function låsPeriodeOgSumAttribute (låsPeriodeOgSum) {
  sumInput.attribute(disabled);
  periodeInput.attribute(disabled);
}