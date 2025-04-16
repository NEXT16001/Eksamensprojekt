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
let ForventetBesparelse
let månedensBudget
let budgetX = windowWidth/2.8;
let budgetY = windowHeight/2.75;
let inputForbrugX
let inputMadOgDrikke
let inputShopping
let inputTransport
let inputAndetForbrug
let månedensBesparelse
let graf
let grafX
let grafY
let grafW
let grafH
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
  ForbrugKnap();
}

function draw() {
  background(255);
  statiskTekst();
  gemPeriodeOgSum();
  tjekPeriodeOgSum();
  gemOgOpdaterIndtægterOgUdgifter();
  tjekIndtægterOgUdgifter();
  visBudget();
  gemOgOpdaterForbrug();
  tjekForbrug();
  visBesparelse();
  indreGrafIntervaller();
}

function gåTilbageTilForsiden() {
  window.location.href = 'index.html';
}

function statiskTekst() {
  if (inputPeriodeOgSumText(), inputIndtægterOgUdgifterText(), forbrugText(), skabGraf(), skabIndreGraf()) {
    frameRate(0)
  }
}

function inputPeriodeOgSum() {
  sumInput = createInput();
  sumInput.position(windowWidth/4+20, inputY);
  sumInput.input(gemPeriodeOgSum);

  periodeInput = createInput();
  periodeInput.position(windowWidth*6.25/10, inputY);
  periodeInput.input(gemPeriodeOgSum);
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

function periodeOgSumKnap() {
  let låsPeriodeOgSumKnap = createButton("Ok");
  låsPeriodeOgSumKnap.position(windowWidth*9/10-100, inputY);
  låsPeriodeOgSumKnap.mousePressed(låsPeriodeOgSum);
}

function gemPeriodeOgSum() {
  sumInputGem = sumInput.value();
  periodeInputGem = periodeInput.value();
}

function tjekPeriodeOgSum() {
  if (sumInputGem.length == 0) {
    text("Udfyld alle feltet!", windowWidth/4+20, inputY+25);
  }
  
  if (periodeInputGem.length == 0) {
    text("Udfyld alle feltet!", windowWidth*6.25/10, inputY+25);
  }
}

function låsPeriodeOgSum() {
  if (sumInputGem.length > 0) {
    sumInput.attribute("disabled", "");
  }

  if (periodeInputGem.length > 0) {
    periodeInput.attribute("disabled", "");
  }
}

function inputIndtægterOgUdgifterText() {
  indtægterOgUdgifterText = ["Månedens netto indkomst", "Husleje", "Forsikringsafgifter", 
  "Andre udgifter evt. lån"];
  
  if (textIndtægterOgUdgifterY > (20*(indtægterOgUdgifterText.length-1))+windowHeight/4) {
    textIndtægterOgUdgifterY = windowHeight/2.5
    text(indtægterOgUdgifterText[0], textIndtægterOgUdgifterX=1, textIndtægterOgUdgifterY)
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
  låsIndtægterOgUdgifterKnapX = windowWidth/3.5
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
  if (inputLønGem.length == 0) {
    text("Udfyld alle felter!", windowWidth/8, windowHeight/2.5+(25*4));
  }

  if (inputHuslejeGem.length == 0) {
    text("Udfyld alle felter!", windowWidth/8, windowHeight/2.5+(25*4));
  }

  if (inputForsikringsafgifterGem.length == 0) {
    text("Udfyld alle felter!", windowWidth/8, windowHeight/2.5+(25*4));
  }
  if (inputAndreUdgifterGem.length == 0) {
    text("Udfyld alle felter!", windowWidth/8, windowHeight/2.5+(25*4));
  }
}

function låsIndtægterOgUdgifter() {
  if (inputLønGem.length > 0) {
    inputLøn.attribute("disabled", "");
  }

  if (inputHuslejeGem.length > 0) {
    inputHusleje.attribute("disabled", "");
  }

  if (inputForsikringsafgifterGem.length > 0) {
    inputForsikringsafgifter.attribute("disabled", "");
  }

  if (inputAndreUdgifterGem.length > 0) {
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
  textIndtægterOgUdgifterY = windowHeight/2.5;
  if (textIndtægterOgUdgifterY > (20*(forbrugList.length-1))+windowHeight/4) {
    text(forbrugList[0], budgetX, textIndtægterOgUdgifterY)
    text("kr.", windowWidth/1.75, textIndtægterOgUdgifterY)
  }

  for (i = 1; i < forbrugList.length; i++) {
    textIndtægterOgUdgifterY += 25;
    text(forbrugList[i], budgetX, textIndtægterOgUdgifterY);
    text("kr.", windowWidth/1.75, textIndtægterOgUdgifterY)
  }
}

function inputForbrug() {
  inputForbrugX = windowWidth/2.325;
  textIndtægterOgUdgifterY = windowHeight/2.5;

  inputMadOgDrikke = createInput();
  inputMadOgDrikke.position(inputForbrugX, textIndtægterOgUdgifterY);
  inputMadOgDrikke.input(gemOgOpdaterForbrug)

  textIndtægterOgUdgifterY += 25;
  inputShopping = createInput();
  inputShopping.position(inputForbrugX, textIndtægterOgUdgifterY);
  inputShopping.input(gemOgOpdaterForbrug)

  textIndtægterOgUdgifterY += 25;
  inputTransport = createInput();
  inputTransport.position(inputForbrugX, textIndtægterOgUdgifterY);
  inputTransport.input(gemOgOpdaterForbrug)

  textIndtægterOgUdgifterY += 25;
  inputAndetForbrug = createInput();
  inputAndetForbrug.position(inputForbrugX, textIndtægterOgUdgifterY);
  inputAndetForbrug.input(gemOgOpdaterForbrug)
}

function gemOgOpdaterForbrug(){
  inputMadOgDrikkeGem = inputMadOgDrikke.value();
  inputShoppingGem = inputShopping.value();
  inputTransportGem = inputTransport.value();
  inputAndetForbrugGem = inputAndetForbrug.value();
}

function ForbrugKnap() {
  låsIndtægterOgUdgifterKnapX = windowWidth/3.5
  let låsIndtægterOgUdgifterKnap = createButton("Ok");
  låsIndtægterOgUdgifterKnap.position(windowWidth/1.69, textIndtægterOgUdgifterY);
  låsIndtægterOgUdgifterKnap.mousePressed(opdaterPeriodeOgSum);
}

function tjekForbrug() {
  if (inputMadOgDrikkeGem.length == 0) {
    text("Udfyld alle felter!", inputForbrugX, windowHeight/2.5+(25*4));
  }

  if (inputShoppingGem.length == 0) {
    text("Udfyld alle felter!", inputForbrugX, windowHeight/2.5+(25*4));
  }

  if (inputTransportGem.length == 0) {
    text("Udfyld alle felter!", inputForbrugX, windowHeight/2.5+(25*4));
  }
  if (inputAndetForbrugGem.length == 0) {
    text("Udfyld alle felter!", inputForbrugX, windowHeight/2.5+(25*4));
  }
}

function beregnBesparelse() {
  månedensBesparelse = månedensBudget-inputMadOgDrikkeGem-inputShoppingGem-inputTransportGem-inputAndetForbrugGem+
  ForventetBesparelse;
}

function visBesparelse() {
  text(`Månedens besparelse: ${månedensBesparelse} kr.`,budgetX ,budgetY+25*5.5);

  if (månedensBesparelse == undefined) {
    månedensBesparelse = ""
  }
}

function skabGraf() {
  grafX = windowWidth/1.55;
  grafY = windowHeight/3.25;
  grafW = windowWidth/3.25;
  grafH = windowHeight/3;
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

  origo = text('0', indreGrafX-10, indreGrafY+indreGrafH/2+5);
}

function indreGrafIntervaller() {
  if (sumInputGem > 0) {
    yMaks = text(`${sumInputGem}`, indreGrafX-sumInputGem.length*7, indreGrafY+10);
    yMin = text(`-${sumInputGem}`, indreGrafX-sumInputGem.length*7-4, indreGrafY+indreGrafH);
  }

  if (periodeInputGem > 0) {
    xInterval = indreGrafW/periodeInputGem;

    for (let i = 1; i < periodeInputGem+1; ++i) {
      text(`${i}`, (indreGrafX+xInterval)*i, indreGrafY+indreGrafH+10);
    }
  }
}

function opdaterPeriodeOgSum() {
  beregnBesparelse();

  periodeInputGem = --periodeInputGem
  sumInputGem = sumInputGem-månedensBesparelse
  console.log(periodeInputGem)
  console.log(sumInputGem)
}