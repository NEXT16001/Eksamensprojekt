function setup() {
  createCanvas(windowWidth, windowHeight);
  let knapForside = createButton('Forsiden');
  knapForside.position(1,1);
  knapForside.mousePressed(gåTilbageTilForsiden);

  inputPeriodeOgSum();
  
}

function draw() {
  background(255);

}

function gåTilbageTilForsiden() {
  window.location.href = 'index.html';
}

function inputPeriodeOgSum() {
  let inputY = windowHeight/8;
  text("Hvor meget vil du sparer?",windowWidth/7, inputY);
  let sumInput = createInput();
  sumInput.position(windowWidth/4+20, inputY);
  text("kr.", windowWidth/3+80, inputY);

  text("Hvor længe vil du sparer?", windowWidth*5/10, inputY);
  let periodeInput = createInput();
  periodeInput.position(windowWidth*6.25/10, inputY);
  text("måneder", windowWidth*7/10+75, inputY);
}