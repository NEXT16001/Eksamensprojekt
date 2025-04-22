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
let forbrugKnapY = textIndtægterOgUdgifterY;
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
let indreGrafX
let indreGrafY
let indreGrafW
let indreGrafH
let vandretLinje
let yMaks
let yMin
let origo
let xInterval
let periodeAntal

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

function gåTilbageTilForsiden() {
  window.location.href = 'index.html';
}

function statiskTekst() {
  if (inputPeriodeOgSumText(), inputIndtægterOgUdgifterText(), forbrugText(), skabGraf(), skabIndreGraf(),
  indreGrafIntervallerY(), visIndreGrafIntervallerX()) {
    frameRate(0)
  }

  else {
    frameRate(60);
  }
}

function inputPeriodeOgSum() {
  sumInput = createInput();
  sumInput.position(sumInputX, inputY);
  sumInput.input(gemPeriodeOgSum);

  periodeInput = createInput();
  periodeInput.position(periodeInputX, inputY);
  periodeInput.input(gemPeriodeOgSum);
}

function inputPeriodeOgSumText() {
  let list = ["Hvor meget vil du sparer?", "kr.", "Hvor længe vil du sparer?", "måneder"];
  text(list[0],periodeOgSumTextX1, inputY);
  text(list[1], periodeOgSumTextX2, inputY);
  text(list[2], periodeOgSumTextX3, inputY);
  text(list[3], periodeOgSumTextX4, inputY);
}

function periodeOgSumKnap() {
  let låsPeriodeOgSumKnap = createButton("Ok");
  låsPeriodeOgSumKnap.position(periodeOgSumKnapX, inputY);
  låsPeriodeOgSumKnap.mousePressed(låsPeriodeOgSum);
}

function gemPeriodeOgSum() {
  sumInputGem = sumInput.value();
  periodeInputGem = periodeInput.value();
}

function tjekPeriodeOgSum() {
  if (sumInputGem.length == 0) {
    text("Udfyld alle feltet!", tjekSumX, tjekPeriodeOgSumY);
  }
  
  if (periodeInputGem.length == 0) {
    text("Udfyld alle feltet!", tjekPeriodeX, tjekPeriodeOgSumY);
  }
}

function låsPeriodeOgSum() {
  if (sumInputGem.length > 0 && periodeInputGem.length > 0) {
    sumInput.attribute("disabled", "");
    periodeInput.attribute("disabled", "");
  }

  indreGrafIntervallerX();
}

function inputIndtægterOgUdgifterText() {
  indtægterOgUdgifterText = ["Månedens netto indkomst", "Husleje", "Forsikringsafgifter", 
  "Andre udgifter evt. lån"];
  
  if (textIndtægterOgUdgifterY > (20*(indtægterOgUdgifterText.length-1))+windowHeight/4) {
    textIndtægterOgUdgifterY = windowHeight/2.5

    text(indtægterOgUdgifterText[0], textIndtægterOgUdgifterX = 1, textIndtægterOgUdgifterY)
    text("kr.", textIndtægterOgUdgifterX = windowWidth/3.75, textIndtægterOgUdgifterY)
  }

  for (let i = 1; i < indtægterOgUdgifterText.length; i++) {
    textIndtægterOgUdgifterY += 25;
    textIndtægterOgUdgifterX = 1;

    text(indtægterOgUdgifterText[i], textIndtægterOgUdgifterX, textIndtægterOgUdgifterY)
    text("kr.", textIndtægterOgUdgifterX = windowWidth/3.75, textIndtægterOgUdgifterY)
  }
}

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

function indtægterOgUdgifterKnap() {
  let låsIndtægterOgUdgifterKnap = createButton("Ok");
  låsIndtægterOgUdgifterKnap.position(låsIndtægterOgUdgifterKnapX, textIndtægterOgUdgifterY);
  låsIndtægterOgUdgifterKnap.mousePressed(beregnBudget);
}

function gemOgOpdaterIndtægterOgUdgifter(){
  inputLønGem = inputLøn.value();
  inputHuslejeGem = inputHusleje.value();
  inputForsikringsafgifterGem = inputForsikringsafgifter.value();
  inputAndreUdgifterGem = inputAndreUdgifter.value();
}

function tjekIndtægterOgUdgifter() {
  if (inputLønGem.length == 0 || inputHuslejeGem.length == 0 || inputForsikringsafgifterGem.length == 0 ||
    inputAndreUdgifterGem.length == 0) {
    text("Udfyld alle felter!", tjekIndtægterOgUdgifterX, inputIndtægterOgUdgifterY);
  }
}

function låsIndtægterOgUdgifter() {
  if (inputLønGem.length > 0 && inputHuslejeGem.length > 0 && inputForsikringsafgifterGem.length > 0 &&
    inputAndreUdgifterGem.length > 0) {
    inputLøn.attribute("disabled", "");
    inputHusleje.attribute("disabled", "");
    inputForsikringsafgifter.attribute("disabled", "");
    inputAndreUdgifter.attribute("disabled", "");
  }
}

function beregnBudget() {
  låsIndtægterOgUdgifter();
  ForventetBesparelse = sumInputGem/periodeInputGem;
  månedensBudget = inputLønGem - ForventetBesparelse - inputHuslejeGem - inputForsikringsafgifterGem - 
  inputAndreUdgifterGem;
}

function visBudget() {
  text(`Månedens budget: ${månedensBudget} kr.`,budgetX ,budgetY);

  if (månedensBudget == undefined) {
    månedensBudget = ""
  }
}

function forbrugText() {
  let forbrugList = ["Mad og drikke", "Shopping", "Transport", "Andet forbrug"];
  forbrugTextY = windowHeight/2.5;
  if (forbrugTextY > (20*(forbrugList.length-1))+windowHeight/4) {
    text(forbrugList[0], forbrugTextX1, forbrugTextY)
    text("kr.", forbrugTextX2, forbrugTextY)
  }

  for (i = 1; i < forbrugList.length; i++) {
    forbrugTextY += 25;
    text(forbrugList[i], forbrugTextX1, forbrugTextY);
    text("kr.", forbrugTextX2, forbrugTextY)
  }
}

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

function gemOgOpdaterForbrug(){
  inputMadOgDrikkeGem = inputMadOgDrikke.value();
  inputShoppingGem = inputShopping.value();
  inputTransportGem = inputTransport.value();
  inputAndetForbrugGem = inputAndetForbrug.value();
}

function forbrugKnap() {
  let låsIndtægterOgUdgifterKnap = createButton("Ok");
  låsIndtægterOgUdgifterKnap.position(forbrugKnapX, forbrugKnapY);
  låsIndtægterOgUdgifterKnap.mousePressed(opdaterPeriodeOgSum);
}

function tjekForbrug() {
  if (inputMadOgDrikkeGem.length == 0 || inputShoppingGem.length == 0 || inputTransportGem.length == 0 ||
    inputAndetForbrugGem.length == 0) {
    text("Udfyld alle felter!", inputForbrugX, windowHeight/2.5+(25*4));
  }
}

function beregnBesparelse() {
  månedensBesparelse = månedensBudget-inputMadOgDrikkeGem-inputShoppingGem-inputTransportGem-inputAndetForbrugGem+
  ForventetBesparelse;
}

function visBesparelse() {
  text(`Månedens besparelse: ${månedensBesparelse} kr.`,besparelseX ,besparelseY);

  if (månedensBesparelse == undefined) {
    månedensBesparelse = ""
  }
}

function opdaterPeriodeOgSum() {
  beregnBesparelse();

  antalMånederTilbage = periodeInputGem;
  --antalMånederTilbage
  beløbTilbage = sumInputGem;
  beløbTilbage -= månedensBesparelse
}

function visAntalMånederTilbage() {
  text(`Antal måneder tilbage: ${antalMånederTilbage}`, antalMånederTilbageX, antalMånederTilbageY);

  if (antalMånederTilbage == undefined) {
    antalMånederTilbage = ''
  }
}

function visBeløbTilbage() {
  text(`Beløb tilbage: ${beløbTilbage}`, beløbTilbageX, beløbTilbageY);

  if (beløbTilbage == undefined) {
    beløbTilbage = ''
  }
}

function skabGraf() {
  graf = rect(grafX, grafY, grafW, grafH);

  akseTitleX = text('Besparelse', grafX+1, grafH/2+grafY);
  akseTitleY = text('Antal Måneder', grafW/2+grafX-10, grafY+grafH-2.5);
}

function skabIndreGraf() {
  indreGrafX = windowWidth/1.4;
  indreGrafY = grafY;
  indreGrafW = windowWidth/4.19;
  indreGrafH = windowHeight/3.5;

  indreGraf = rect(indreGrafX, indreGrafY, indreGrafW, indreGrafH)

  vandretLinje = line(indreGrafX, indreGrafY+indreGrafH/2, indreGrafX+indreGrafW, indreGrafY+indreGrafH/2)
}

function indreGrafIntervallerY() {
  origo = text('0', indreGrafX-10, indreGrafY+indreGrafH/2+5);

  if (sumInputGem > 0) {
    yMaks = text(`${sumInputGem}`, indreGrafX-sumInputGem.length*7, indreGrafY+10);
    yMin = text(`-${sumInputGem}`, indreGrafX-sumInputGem.length*7-4, indreGrafY+indreGrafH);
  }
}

function indreGrafIntervallerX() {
  xInterval = indreGrafW/periodeInputGem
  console.log(xInterval)
}

function visIndreGrafIntervallerX() {
  if (indreGrafIntervallerX()) {
    for (let i = 1; i <= periodeInputGem; i++) {
      text(`${i}`, (indreGrafX+xInterval)*i, indreGrafY+indreGrafH+10);
    }
  }
}
