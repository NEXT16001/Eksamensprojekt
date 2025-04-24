let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let inputY = windowHeight/8;
let sumInput
let sumInputX = windowWidth/4+20;
let periodeInput
let periodeInputX = windowWidth*6.25/10;
let periodeOgSumTextX1 = windowWidth/7;
let periodeOgSumTextX2 = windowWidth/3+80;
let periodeOgSumTextX3 = windowWidth*5/10;
let periodeOgSumTextX4 = windowWidth*7/10+75;
let periodeOgSumKnapX = windowWidth*9/10-100;
let sumInputGem
let periodeInputGem
let tjekPeriodeOgSumY = inputY + 25;
let tjekSumX = windowWidth/4+20;
let tjekPeriodeX = windowWidth*6.25/10;
let indtægterOgUdgifterText
let textIndtægterOgUdgifterX = 1;
let textIndtægterOgUdgifterY = windowHeight/2.5;
let inputLøn
let inputHusleje
let inputForsikringsafgifter
let inputAndreUdgifter
let inputIndtægterOgUdgifterX = windowWidth/8;
let inputIndtægterOgUdgifterY = windowHeight/2.5+(25*4);
let låsIndtægterOgUdgifterKnapX = windowWidth/3.5;
let inputLønGem
let inputHuslejeGem
let inputForsikringsafgifterGem
let inputAndreUdgifterGem
let tjekIndtægterOgUdgifterX = inputIndtægterOgUdgifterX;
let ForventetBesparelse
let månedensBudget
let budgetX = windowWidth/2.8;
let budgetY = windowHeight/2.75;
let forbrugTextY = textIndtægterOgUdgifterY;
let forbrugTextX1 = budgetX;
let forbrugTextX2 = windowWidth/1.75;
let inputForbrugX = windowWidth/2.325;
let inputForbrugY = textIndtægterOgUdgifterY;
let inputMadOgDrikke
let inputShopping
let inputTransport
let inputAndetForbrug
let inputMadOgDrikkeGem
let inputShoppingGem
let inputTransportGem
let inputAndetForbrugGem
let forbrugKnapX = windowWidth/1.69;
let forbrugKnapY = windowHeight/2.5+(25*3);
let månedensBesparelse
let besparelseX = budgetX;
let besparelseY = budgetY+25*5.5;
let antalMånederTilbage
let antalMånederTilbageX = windowWidth*1/5;
let antalMånederTilbageY = windowHeight/1.25;
let beløbTilbage
let beløbTilbageX = windowWidth*2.75/5;
let beløbTilbageY = antalMånederTilbageY;
let graf
let grafX = windowWidth/1.55;
let grafY = windowHeight/3.25;
let grafW = windowWidth/3.25;
let grafH = windowHeight/3;
let akseTitleX
let akseTitleY
let indreGraf
let indreGrafX = windowWidth/1.4;
let indreGrafY = grafY;
let indreGrafW = windowWidth/4.19;
let indreGrafH = windowHeight/3.5;
let vandretLinje
let yMaks
let yMin
let origo
let xInterval

/**
 * Function setup inderholder alle de funktioner der kører engang:
 * "createCanvas()" der danner en canvas ud fra parametrene canvas bredde og -højde.
 * "createButton()" skaber en knap.
 * "element.position()" positionere et element ud fra parametrene x og y.
 * "element.mousePressed()" er en funktion der kører funktionen inde i parantesen efter der klikkes på elememtet.
 * Samt resterende funktioner der skal kører en gang, og ikke vises på canvaset.
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  let knapForside = createButton('Forsiden');
  knapForside.position(1,1);
  knapForside.mousePressed(gåTilbageTilForsiden);

  inputPeriodeOgSum();
  periodeOgSumKnap();
  inputIndtægterOgUdgifter();
  indtægterOgUdgifterKnap();
  inputForbrug();
  forbrugKnap();
}

/**
 * Function draw er en funktion, der tegner dens indhold på canvaset med 60 FPS.
 * 
 * I function draw findes:
 * "background()" der giver baggrunden en farve, der defineres i parantesen med enten strings eller RGB-kode.
 * Og funktioner der skal tegnes på canvaset med 60 FPS.
 */
function draw() {
  background(255);
  statiskTekst();
  inputPeriodeOgSumText();
  gemPeriodeOgSum();
  tjekPeriodeOgSum();
  inputIndtægterOgUdgifterText();
  gemOgOpdaterIndtægterOgUdgifter();
  tjekIndtægterOgUdgifter();
  visBudget();
  forbrugText();
  gemOgOpdaterForbrug();
  tjekForbrug();
  visBesparelse();
  visAntalMånederTilbage();
  visBeløbTilbage();
  skabGraf();
  skabIndreGraf();
  indreGrafIntervallerY();
  visIndreGrafIntervallerX();

}

/**
 * Function skiftSideTilProgram() indeholder:
 * Funktionen "window.location.href" skifter til html-siden, funktionen er lig med.
 * I dette tilfælde skiftes den til forsiden.
 */
function gåTilbageTilForsiden() {
  window.location.href = 'index.html';
}

/**
 * Function statiskTekst() er en funktion, der kun kører nævnte funktioner i function draw med 0 FPS.
 * Den indeholder en "if-statement".
 * I "If-statement" parantes har vi nogle function hvilket betyder at hvis de nævnes kører indeholdet for funktionen.
 * Funktionen "frameRate()" hvor indholdet i parantesen definere FPS'en. I dette tilfælde 0.
 * Dermed har vi også en "else-statement" hvis "if-statement" ikke kører.
 * "else-statement" indeholder en "frameRate()" funktion med værdien 60, så FPS'en er 60.
 */
function statiskTekst() {
  if (inputPeriodeOgSumText(), inputIndtægterOgUdgifterText(), forbrugText(), skabGraf(), skabIndreGraf(),
  indreGrafIntervallerY(), visIndreGrafIntervallerX()) {
    frameRate(0)
  }

  else {
    frameRate(60);
  }
}

/**
 * Function inputPeriodeOgSum() der indeholder:
 * En "createInput()" funktion der danner en inputfelt.
 * "element.position()" positionere et element ud fra parametrene x og y.
 * Og en "input()" funktion der kalder en funktion, når inputfeltet udfyldes.
 * 
 * Følgende funktioner gentages for både "sumInput" og "periodeInput".
 */
function inputPeriodeOgSum() {
  sumInput = createInput();
  sumInput.position(sumInputX, inputY);
  sumInput.input(gemPeriodeOgSum);

  periodeInput = createInput();
  periodeInput.position(periodeInputX, inputY);
  periodeInput.input(gemPeriodeOgSum);
}

/**
 * Function inputPeriodeOgSumText() indeholder:
 * Arrayet "list" med alle de forskellige typer af tekster for periode og sum.
 * Samt "text()" funktionen hvor der tilføjes en string.
 * Funktionen "text()" positioneres med x og y, som er x- og y-koordinaterne for tekstens position.
 * 
 * Da stringsne er i et array vælges de med funktionen "list[]", hvor klammerne indeholder deres position i form af
 * nummer.
 */
function inputPeriodeOgSumText() {
  let list = ['Hvor meget vil du sparer?', 'kr.', 'Hvor længe vil du sparer?', 'måneder'];
  text(list[0],periodeOgSumTextX1, inputY);
  text(list[1], periodeOgSumTextX2, inputY);
  text(list[2], periodeOgSumTextX3, inputY);
  text(list[3], periodeOgSumTextX4, inputY);
}

/**
 * Function periodeOgSumKnap() indeholder:
 * "createButton()" skaber en knap.
 * "element.position()" positionere et element ud fra parametrene x og y.
 * "element.mousePressed()" er en funktion der kører funktionen inde i parantesen efter der klikkes på elememtet.
 * I dette tilfælde funktionen "låsPeriodeOgSum"
 */
function periodeOgSumKnap() {
  let låsPeriodeOgSumKnap = createButton('Ok');
  låsPeriodeOgSumKnap.position(periodeOgSumKnapX, inputY);
  låsPeriodeOgSumKnap.mousePressed(låsPeriodeOgSum);
}

/**
 * Function "gemPeriodeOgSum()" indeholder:
 * Funktionen "input.value()" der gemmmer inputets værdi i den tilhørende variable.
 * 
 * Gøres både for periode og sum.
 */
function gemPeriodeOgSum() {
  sumInputGem = sumInput.value();
  periodeInputGem = periodeInput.value();
}

/**
 * Function "tjekPeriodeOgSum()" indeholder:
 * En "if-statement" med længden af sumInputGem- eller periodeInputGem, som evalueres til om den har en
 * værdi på 0.
 * "if-statement" indeholder en "text()" funktion, der køres hvis sunInputGem- eller periodeInputGem længde
 * evalueres til 0.
 */
function tjekPeriodeOgSum() {
  if (sumInputGem.length == 0) {
    text('Udfyld alle feltet!', tjekSumX, tjekPeriodeOgSumY);
  }
  
  if (periodeInputGem.length == 0) {
    text('Udfyld alle feltet!', tjekPeriodeX, tjekPeriodeOgSumY);
  }
}

/**
 * Function "låsPeriodeOgSum()" indeholder:
 * En "if-statement" der viser at sumInputGem- og periodeInputGem længde er større end 0.
 * 
 * Hvis det er korrekt udføres indeholdet som er:
 * "attribute" der kan udføre små opgaver for den valgte element.
 * I vores tilfælde er det 'disabled' som betyder deaktiveret.
 * Derfor deaktiveres den nævnte element.
 * 
 * Derudover kaldes funktionen "indreGrafIntervallerX()"
 */
function låsPeriodeOgSum() {
  if (sumInputGem.length > 0 && periodeInputGem.length > 0) {
    sumInput.attribute('disabled', '');
    periodeInput.attribute('disabled', '');
  }

  indreGrafIntervallerX();
}

/**
 * Function "inputIndtægterOgUdgifterText()" indeholder:
 * Arrayet "indtægterOgUdgifterText()" der indeholder alle teksterne i form a strings.
 * Og "if-statements" samt "for-lykker" der tegner teksterne på canvaset.
 */
function inputIndtægterOgUdgifterText() {
  indtægterOgUdgifterText = ['Månedens netto indkomst', 'Husleje', 'Forsikringsafgifter', 
  'Andre udgifter evt. lån'];
  
  /**
   * "if-statement" parantes indeholder en ligning, der siger: at hvis textIndtægterOgUdgifterY er større end
   * 20, som er den lodret distance af teksterne er indenfor, multipliceret med indtægterOgUdgifterText længde, 
   * subtraheret med 1, adderet en kvart af vindues højden.
   * 
   * Hvis dette er sandt er textIndtægterOgUdgifterY lig med windowHeight/2.5.
   * Derudover tegner den teksterne for den første inputfelt i indtægter og udgifter med funktionen "text()".
   */
  if (textIndtægterOgUdgifterY > (20*(indtægterOgUdgifterText.length-1))+windowHeight/4) {
    textIndtægterOgUdgifterY = windowHeight/2.5

    text(indtægterOgUdgifterText[0], textIndtægterOgUdgifterX = 1, textIndtægterOgUdgifterY)
    text('kr.', textIndtægterOgUdgifterX = windowWidth/3.75, textIndtægterOgUdgifterY)
  }

  /**
   * I "for-lykken" parentes står der at en variable "i", er lig 1 og mindre end indtægterOgUdgifterText længde
   * og i indkrementeres.
   * 
   * Hvis det er sandt, adderes textIndtægterOgUdgifterY løbende med 25, og textIndtægterOgUdgifterX er lig 1.
   * Dermed tegnes de resternede tekster i indtægter og udgifter.
   */
  for (let i = 1; i < indtægterOgUdgifterText.length; i++) {
    textIndtægterOgUdgifterY += 25;
    textIndtægterOgUdgifterX = 1;

    text(indtægterOgUdgifterText[i], textIndtægterOgUdgifterX, textIndtægterOgUdgifterY)
    text('kr.', textIndtægterOgUdgifterX = windowWidth/3.75, textIndtægterOgUdgifterY)
  }
}

/**
 * Function inputIndtægterOgUdgifter() der indeholder:
 * En "createInput()" funktion der danner en inputfelt.
 * "element.position()" positionere et element ud fra parametrene x og y.
 * Og en "input()" funktion der kalder en funktion, når inputfeltet udfyldes.
 * 
 * Følgende funktioner gentages for alle inputfelter i indtægter og udgifter.
 */
function inputIndtægterOgUdgifter() {
  inputLøn = createInput();
  inputLøn.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);
  inputLøn.input(gemOgOpdaterIndtægterOgUdgifter)

  textIndtægterOgUdgifterY += 25;
  inputHusleje = createInput();
  inputHusleje.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);
  inputHusleje.input(gemOgOpdaterIndtægterOgUdgifter)
  
  textIndtægterOgUdgifterY += 25;
  inputForsikringsafgifter = createInput();
  inputForsikringsafgifter.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);
  inputForsikringsafgifter.input(gemOgOpdaterIndtægterOgUdgifter)

  textIndtægterOgUdgifterY += 25;
  inputAndreUdgifter = createInput();
  inputAndreUdgifter.position(inputIndtægterOgUdgifterX, textIndtægterOgUdgifterY);
  inputAndreUdgifter.input(gemOgOpdaterIndtægterOgUdgifter)
}

/**
 * Function indtægterOgUdgifterKnap() indeholder:
 * "createButton()" skaber en knap.
 * "element.position()" positionere et element ud fra parametrene x og y.
 * "element.mousePressed()" er en funktion der kører funktionen inde i parantesen efter der klikkes på elememtet.
 * I dette tilfælde funktionen "beregnBudget"
 */
function indtægterOgUdgifterKnap() {
  let låsIndtægterOgUdgifterKnap = createButton("Ok");
  låsIndtægterOgUdgifterKnap.position(låsIndtægterOgUdgifterKnapX, textIndtægterOgUdgifterY);
  låsIndtægterOgUdgifterKnap.mousePressed(beregnBudget);
}

/**
 * Function "gemPeriodeOgSum()" indeholder:
 * Funktionen "input.value()" der gemmmer inputets værdi i den tilhørende variable.
 * 
 * Gøres for alle inputfelter i indtægter og udgifter.
 */
function gemOgOpdaterIndtægterOgUdgifter(){
  inputLønGem = inputLøn.value();
  inputHuslejeGem = inputHusleje.value();
  inputForsikringsafgifterGem = inputForsikringsafgifter.value();
  inputAndreUdgifterGem = inputAndreUdgifter.value();
}

/**
 * Function "tjekIndtægterOgUdgifter()" indeholder:
 * En "if-statement" hvis parentes siger:
 * At hvis en af inputGem værdierne evalueres til at være 0.
 * 
 * Hvis det er sandt tegnes en tekst via. funktionen "text()".
 */
function tjekIndtægterOgUdgifter() {
  if (inputLønGem.length == 0 || inputHuslejeGem.length == 0 || inputForsikringsafgifterGem.length == 0 ||
    inputAndreUdgifterGem.length == 0) {
    text('Udfyld alle felter!', tjekIndtægterOgUdgifterX, inputIndtægterOgUdgifterY);
  }
}

/**
 * Function "låsIndtægterOgUdgifter()" indeholder:
 * En "if-statement" der viser at InputGem værdiernes længde er større end 0.
 * 
 * Hvis det er korrekt udføres indeholdet som er:
 * "attribute" der kan udføre små opgaver for den valgte element.
 * I vores tilfælde er det 'disabled' som betyder deaktiveret.
 * Derfor deaktiveres den nævnte element.
 */
function låsIndtægterOgUdgifter() {
  if (inputLønGem.length > 0 && inputHuslejeGem.length > 0 && inputForsikringsafgifterGem.length > 0 &&
    inputAndreUdgifterGem.length > 0) {
    inputLøn.attribute('disabled', '');
    inputHusleje.attribute('disabled', '');
    inputForsikringsafgifter.attribute('disabled', '');
    inputAndreUdgifter.attribute('disabled', '');
  }
}

/**
 * Function "beregnBudget()" inderholder:
 * Først og fremmest kaldes låsIndtægterOgUdgifter().
 * Dermed beregnes den forventede besparelse, ved at dividere sumInputGem med periodeInputGem.
 * Derefter beregnes månedens budget, ved at den forventede besparelse og de tre sidste inputfelter i indtægter og
 * udgifter subtraheres fra inputLønGem.
 */
function beregnBudget() {
  låsIndtægterOgUdgifter();
  ForventetBesparelse = sumInputGem/periodeInputGem;
  månedensBudget = inputLønGem - ForventetBesparelse - inputHuslejeGem - inputForsikringsafgifterGem - 
  inputAndreUdgifterGem;
}

/**
 * Function "visBudget()" indeholder:
 * En "text()" funktion hvor stringen erstattes med en Template Literals, så måndensBudget kan inddrages i teksten.
 * 
 * Og en "if-statement" hvis parentes indeholder en ligning, der evaluer on månedensBudget er lig 0.
 * "if-statement" indeholder en ligning, der gøre månedensBudget lig med intet hvis "if-statment" er sandt.
 */
function visBudget() {
  text(`Månedens budget: ${månedensBudget} kr.`,budgetX ,budgetY);

  if (månedensBudget == undefined) {
    månedensBudget = ''
  }
}

/**
 * Function "forbrugText()" indeholder:
 * Arrayet "indtægterOgUdgifterText()" der indeholder alle teksterne i form a strings.
 * Og "if-statements" samt "for-lykker" der tegner teksterne på canvaset.
 */
function forbrugText() {
  let forbrugList = ['Mad og drikke', 'Shopping', 'Transport', 'Andet forbrug'];
  forbrugTextY = windowHeight/2.5;
  
  /**
   * "if-statement" parantes indeholder en ligning, der siger: at hvis forbrugTextY er større end
   * 20, som er den lodret distance af teksterne er indenfor, multipliceret med forbrugList længde, 
   * subtraheret med 1, adderet en kvart af vindues højden.
   * 
   * Hvis dette er sandt tegnet den teksterne for den første inputfelt i forburg og udgifter med funktionen 
   * "text()".
   */
  if (forbrugTextY > (20*(forbrugList.length-1))+windowHeight/4) {
    text(forbrugList[0], forbrugTextX1, forbrugTextY)
    text('kr.', forbrugTextX2, forbrugTextY)
  }

  /**
   * I "for-lykken" parentes står der at en variable "i", er lig 1 og mindre end forbrugList længde
   * og i indkrementeres.
   * 
   * Hvis det er sandt, adderes forbrugTextY løbende med 25.
   * Dermed tegnes de resternede tekster i forbrug.
   */
  for (i = 1; i < forbrugList.length; i++) {
    forbrugTextY += 25;
    text(forbrugList[i], forbrugTextX1, forbrugTextY);
    text('kr.', forbrugTextX2, forbrugTextY)
  }
}

/**
 * Function inputForbrug() der indeholder:
 * En "createInput()" funktion der danner en inputfelt.
 * "element.position()" positionere et element ud fra parametrene x og y.
 * Og en "input()" funktion der kalder en funktion, når inputfeltet udfyldes.
 * 
 * Følgende funktioner gentages for alle inputfelter i forbrug.
 */
function inputForbrug() {
  inputMadOgDrikke = createInput();
  inputMadOgDrikke.position(inputForbrugX, inputForbrugY);
  inputMadOgDrikke.input(gemOgOpdaterForbrug)

  inputForbrugY += 25;
  inputShopping = createInput();
  inputShopping.position(inputForbrugX, inputForbrugY);
  inputShopping.input(gemOgOpdaterForbrug)

  inputForbrugY += 25;
  inputTransport = createInput();
  inputTransport.position(inputForbrugX, inputForbrugY);
  inputTransport.input(gemOgOpdaterForbrug)

  inputForbrugY += 25;
  inputAndetForbrug = createInput();
  inputAndetForbrug.position(inputForbrugX, inputForbrugY);
  inputAndetForbrug.input(gemOgOpdaterForbrug)
}

/**
 * Function "gemOgOpdaterForbrug()" indeholder:
 * Funktionen "input.value()" der gemmmer inputets værdi i den tilhørende variable.
 * 
 * Gøres for alle inputfelter i forbrug.
 */
function gemOgOpdaterForbrug(){
  inputMadOgDrikkeGem = inputMadOgDrikke.value();
  inputShoppingGem = inputShopping.value();
  inputTransportGem = inputTransport.value();
  inputAndetForbrugGem = inputAndetForbrug.value();
}

/**
 * Function forbrugKnap() indeholder:
 * "createButton()" skaber en knap.
 * "element.position()" positionere et element ud fra parametrene x og y.
 * "element.mousePressed()" er en funktion der kører funktionen inde i parantesen efter der klikkes på elememtet.
 * I dette tilfælde funktionen "opdaterPeriodeOgSum"
 */
function forbrugKnap() {
  let låsIndtægterOgUdgifterKnap = createButton("Ok");
  låsIndtægterOgUdgifterKnap.position(forbrugKnapX, forbrugKnapY);
  låsIndtægterOgUdgifterKnap.mousePressed(opdaterPeriodeOgSum);
}

/**
 * Function "tjekForbrug()" indeholder:
 * En "if-statement" hvis parentes siger:
 * At hvis en af inputGem værdierne evalueres til at være 0.
 * 
 * Hvis det er sandt tegnes en tekst via. funktionen "text()".
 */
function tjekForbrug() {
  if (inputMadOgDrikkeGem.length == 0 || inputShoppingGem.length == 0 || inputTransportGem.length == 0 ||
    inputAndetForbrugGem.length == 0) {
    text('Udfyld alle felter!', inputForbrugX, windowHeight/2.5+(25*4));
  }
}

/**
 * Function "beregnBesparelse" beregner besparelsen for måneden, som subtrahere den forventede besparelse og alle
 * inputGem variablerne for forbrug med månedens budget.
 */
function beregnBesparelse() {
  månedensBesparelse = månedensBudget-inputMadOgDrikkeGem-inputShoppingGem-inputTransportGem-inputAndetForbrugGem+
  ForventetBesparelse;
}

/**
 * Function isBesparelse()" indeholder:
 * En "text()" funktion hvor stringen erstattes med en Template Literals, så månedensBesparelse kan inddrages i teksten.
 * 
 * Og en "if-statement" hvis parentes indeholder en ligning, der evaluer on månedensBesparelse er lig 0.
 * "if-statement" indeholder en ligning, der gøre månedensBesparelse lig med intet hvis "if-statment" er sandt.
 */
function visBesparelse() {
  text(`Månedens besparelse: ${månedensBesparelse} kr.`,besparelseX ,besparelseY);

  if (månedensBesparelse == undefined) {
    månedensBesparelse = ''
  }
}

/**
 * Function "opdaterPeriodeOgSum()" inderholder:
 * Funktionen "beregnBesparelse()" kaldes.
 * Variablen antalMånederTilbage sættes lig med periodeInputGem.
 * Variablen antalMånederTilbage dekrementeres.
 * Variablen beløbTilbage sættes lig med periodeInputGem.
 * Variablen beløbTilbage dekrementeres.
 */
function opdaterPeriodeOgSum() {
  beregnBesparelse();

  antalMånederTilbage = periodeInputGem;
  --antalMånederTilbage
  beløbTilbage = sumInputGem;
  beløbTilbage -= månedensBesparelse
}

/**
 * Function visAntalMånederTilbage()" indeholder:
 * En "text()" funktion hvor stringen erstattes med en Template Literals, så antalMånederTilbage kan inddrages i 
 * teksten.
 * 
 * Og en "if-statement" hvis parentes indeholder en ligning, der evaluer on antalMånederTilbage er lig 0.
 * "if-statement" indeholder en ligning, der gøre antalMånederTilbage lig med intet hvis "if-statment" er sandt.
 */
function visAntalMånederTilbage() {
  text(`Antal måneder tilbage: ${antalMånederTilbage}`, antalMånederTilbageX, antalMånederTilbageY);

  if (antalMånederTilbage == undefined) {
    antalMånederTilbage = ''
  }
}

/**
 * Function visAntalMånederTilbage()" indeholder:
 * En "text()" funktion hvor stringen erstattes med en Template Literals, så beløbTilbage kan inddrages i 
 * teksten.
 * 
 * Og en "if-statement" hvis parentes indeholder en ligning, der evaluer on beløbTilbage er lig 0.
 * "if-statement" indeholder en ligning, der gøre beløbTilbage lig med intet hvis "if-statment" er sandt.
 */
function visBeløbTilbage() {
  text(`Beløb tilbage: ${beløbTilbage}`, beløbTilbageX, beløbTilbageY);

  if (beløbTilbage == undefined) {
    beløbTilbage = ''
  }
}

/**
 * Function "skabGraf()" indeholder:
 * En funktion "rect()" der danner rammen for graffen gennem parametrene:
 * x som er x-koordinatet for rammens venstre-øverste hjørne.
 * y som er y-koordinatet for rammens venstre-øverste hjørne.
 * w som er rammens bredde.
 * h som er rammens højde.
 * 
 * Dermed dannes der aksetitler udfra funktionen "text()".
 */
function skabGraf() {
  graf = rect(grafX, grafY, grafW, grafH);

  akseTitleX = text('Besparelse', grafX+1, grafH/2+grafY);
  akseTitleY = text('Antal Måneder', grafW/2+grafX-10, grafY+grafH-2.5);
}

/**
 * Function "skabIndreGraf()" indeholder:
 * En funktion "rect()" der danner den indre ramme for graffen gennem parametre:
 * x som er x-koordinatet for rammens venstre-øverste hjørne.
 * y som er y-koordinatet for rammens venstre-øverste hjørne.
 * w som er rammens bredde.
 * h som er rammens højde.
 * 
 * Dermed danner funktionen "line()" x-aksen udfra følgende parametre:
 * x1 og y1 som er koordinaterne for linjens begyndelsespunkt.
 * x2 og y2 som er koordinaterne for linjens slutpunkt.
 */
function skabIndreGraf() {
  indreGraf = rect(indreGrafX, indreGrafY, indreGrafW, indreGrafH)

  vandretLinje = line(indreGrafX, indreGrafY+indreGrafH/2, indreGrafX+indreGrafW, indreGrafY+indreGrafH/2)
}

/**
 * Function "indreGrafIntervallerY()" indeholder:
 * Origo der dannes udfra "text()" funktionen.
 * 
 * Også en "if-statement" hvis parentes siger at sumInputGem er større end 0.
 * Hvis det er sandt, dannes yMaks, som er summen af besparelsen, og -yMin som er summen af besparelse i form af
 * negativ tal.
 * 
 * Dermed tegnes både yMaks og yMin i form af "text()" funktioner, hvor strings er erstattet med Template Literals.
 */
function indreGrafIntervallerY() {
  origo = text('0', indreGrafX-10, indreGrafY+indreGrafH/2+5);

  if (sumInputGem > 0) {
    yMaks = text(`${sumInputGem}`, indreGrafX-sumInputGem.length*7, indreGrafY+10);
    yMin = text(`-${sumInputGem}`, indreGrafX-sumInputGem.length*7-4, indreGrafY+indreGrafH);
  }
}

/**
 * Function indreGrafIntervallerX() beregner afstanden mellem x-værdierne i x-aksen:
 * Det gøres ved at indreGrafW divideres med periodeInputGem.
 */
function indreGrafIntervallerX() {
  xInterval = indreGrafW/periodeInputGem
}

/**
 * OBS: Funktionen blev ikke skrevet færdig.
 * 
 * Var i gang med at danne en funktion, der vil tegne x-værdierne i x-aksen.
 */
function visIndreGrafIntervallerX() {
  if (indreGrafIntervallerX()) {
    for (let i = 1; i <= periodeInputGem; i++) {
      text(`${i}`, (indreGrafX+xInterval)*i, indreGrafY+indreGrafH+10);
    }
  }
}
