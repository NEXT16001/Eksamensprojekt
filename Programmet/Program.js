function setup() {
  createCanvas(windowWidth, windowHeight);
  let knapForside = createButton('Forsiden');
  knapForside.position(1,1);
  knapForside.mousePressed(gåTilbageTilForsiden);
  
}

function draw() {
  background(255);

}

function gåTilbageTilForsiden() {
  window.location.href = 'index.html';
}

function inputPeriode&Sum() {
  
}