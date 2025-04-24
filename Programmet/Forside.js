let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let knapStartX = windowWidth/2-55;
let knapStartY = windowHeight/2+20;

/**
 * Function setup er en funktion der kun køre en gang
 * 
 * I function setup kan følgende findes:
 * "createCanvas()" der danner en canvas ud fra parametrene canvas bredde og -højde.
 * "createButton()" skaber en knap.
 * "element.position()" positionere et element ud fra parametrene x og y.
 * "element.mousePressed()" er en funktion der kører funktionen inde i parantesen efter der klikkes på elementet.
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  let knapStart = createButton('Start din besparelsesrejse!');
  knapStart.position(knapStartX, knapStartY);
  knapStart.mousePressed(skiftSideTilProgram);
  
}

/**
 * Function draw er en funktion, der tegner dens indhold på canvaset med 60 FPS.
 * 
 * I function draw findes:
 * "background()" der giver baggrunden en farve, der defineres i parantesen med enten strings eller RGB-kode.
 * Funktionen "titel()".
 */
function draw() {
  background(255);
  
  titel();

}

/**
 * Function skiftSideTilProgram() indeholder:
 * Funktionen "window.location.href" skifter til html-siden, funktionen er lig med.
 */
function skiftSideTilProgram() {
  window.location.href = 'program.html';
}


/**
 * Function titel() indeholder:
 * Funktionen "textSize()" hvor der i paratesen angives skriftsstørrelse i form af pixels.
 * Funktionen "textFont()" angives der typografien for teksten i parantesen i form af en string.
 * Funktionen "text()" består af parametrene string, x og y.
 * String indeholder den tekst i "" eller '' der skal vises, samt x og y er tekstens positions koordinater.
 */
function titel() {
  textSize(50);
  textFont('Times New Roman');
  text('EASY BUDGET', windowWidth/2-150, windowHeight/2);
}