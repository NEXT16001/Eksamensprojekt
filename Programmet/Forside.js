let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let knapStartX = windowWidth/2-55;
let knapStartY = windowHeight/2+20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let knapStart = createButton('Start din besparelsesrejse!');
  knapStart.position(knapStartX, knapStartY);
  knapStart.mousePressed(skiftSideTilProgram);
  
}

function draw() {
  background(255);
  
  titel();

}

function skiftSideTilProgram() {
  window.location.href = 'program.html';
}

function titel() {
  textSize(50);
  textFont('Times New Roman');
  text('EASY BUDGET', windowWidth/2-150, windowHeight/2);
}