let squares = new Array(3);
let estado;
let play;
let figuras = new Array(3);
let reset;

function setup() {
  createCanvas(500, 500);
  estado = true;
  play = 0;
  reset = false;

  for (let i = 0; i < 3; i++) {
    squares[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
      squares[i][j] = new Celdas((125 * i) + 125, (125 * j) + 125, 115, 10);
    }
  }
  for (let i = 0; i < 3; i++) {
    figuras[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
      figuras[i][j] = "";
    }
  }
}

function draw() {
  background(10);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      squares[i][j].print();
      if (figuras[i][j] === "X") {
        squares[i][j].printX();
      }
      if (figuras[i][j] === "O") {
        squares[i][j].printO();
      }
    }
  }
  for (let i = 0; i < figuras.length; i++) {
    let contadorX = 0;
    let contadorO = 0;
    for (let j = 0; j < figuras[i].length; j++) {
      if (figuras[i][j] === "X") {
        contadorX++;
      } else if (figuras[i][j] === "O") {
        contadorO++;
      }
      if (contadorX === 3 || contadorO === 3) {
        squares[i][0].setG(180);
        squares[i][1].setG(180);
        squares[i][2].setG(180);
      }
    }
  }
  for (let i = 0; i < figuras.length; i++) {
    let contadorX = 0;
    let contadorO = 0;
    for (let j = 0; j < figuras[i].length; j++) {
      if (figuras[j][i] === "X") {
        contadorX++;
      } else if (figuras[j][i] === "O") {
        contadorO++;
      }
      if (contadorX === 3 || contadorO === 3) {
        squares[0][i].setG(180);
        squares[1][i].setG(180);
        squares[2][i].setG(180);
      }
    }
  }
  if ((figuras[0][0] === "X" && figuras[1][1] === "X" && figuras[2][2] === "X") || (figuras[0][0] === "O" && figuras[1][1] === "O" && figuras[2][2] === "O")) {
    squares[0][0].setG(180);
    squares[1][1].setG(180);
    squares[2][2].setG(180);
  }
  if ((figuras[0][2] === "X" && figuras[1][1] === "X" && figuras[2][0] === "X") || (figuras[0][2] === "O" && figuras[1][1] === "O" && figuras[2][0] === "O")) {
    squares[0][2].setG(180);
    squares[1][1].setG(180);
    squares[2][0].setG(180);
  }

  fill(10);
  rectMode(CENTER);
  rect(250, 470, 100, 40);
  rectMode(CORNER);
  textSize(20);
  strokeWeight(1);
  fill(250);
  textAlign(CENTER, CENTER);
  text("Reset", 250, 470 + 3);

  if (reset === true) {
    estado = true;
    play = 0;
    reset = 0;
    for (let i = 0; i < 3; i++) {
      figuras[i] = new Array(3);
      for (let j = 0; j < 3; j++) {
        figuras[i][j] = "";
        squares[i][j].setG(10);
      }
    }
  }
}

function mousePressed() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (squares[i][j].click() && estado === true) {
        play = 1;
        figuras[i][j] = "X";
        estado = !estado;
      } else if (squares[i][j].click() && estado === false) {
        play = 2;
        figuras[i][j] = "O";
        estado = !estado;
      }
    }
  }
  if (dist(mouseX, mouseY, 250, 470) < 20) {
    reset = true;
  }
}