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
  text("Hvor meget vil du sparer?",windowWidth/7, inputY);
  text("kr.", windowWidth/3+80, inputY);

  text("Hvor længe vil du sparer?", windowWidth*5/10, inputY);
  text("måneder", windowWidth*7/10+75, inputY);
}

function låsPeriodeOgSum(inputPeriodeOgSum) {
  let låsPeriodeOgSumKnap = createButton("Ok");
  låsPeriodeOgSumKnap.position(windowWidth*8/10, inputY);
  
  if (mousePressed){
    sumInput.attribute("remove");
    periodeInput.attribute("remove"); 
  }
}