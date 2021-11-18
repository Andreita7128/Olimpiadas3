/*Catalina Giraldo- A00371842
 * Laura Forero- A00369431
 * Andrea Torrente - A00365669
 */

let ball;
let player1;
let player2;
let moveP;
let dirB; // 1 up, 2 down
let p1; //puntos player1
let p2; //puntos player1
let screen;
let op1;
let op2;
let start;
let info;

function setup() {
  createCanvas(500, 550);
  screen = 0;
  moveP = false;
  info = true;
  ball = new Ball(250, 250);
  player1 = new Players(20, 250);
  player2 = new Players(475, 250);
  dirB = 0;
  p1 = 0;
  p2 = 0;
  start = 0;
  op1 = loadImage("Images/op1.png");
  op2 = loadImage("Images/op2.png");
}

function draw() {
  background(10);
  if (screen === 0) {
    fill(10, 100, 180);
    rect(50, 150, 400, 200)
    fill(255);
    rect(85, 225, 120, 110);
    rect(290, 225, 120, 110);
    imageMode(CENTER);
    image(op1, 150, 280);
    image(op2, 350, 280);
    imageMode(CORNER);
    textAlign(CENTER);
    text("Elije los controles", 250, 180);
    textSize(12);
    text("Select the controls", 250, 200);
  }
  if (start === 1) {
    text("clickea la bolita", 250, 300);
    textSize(12);
    text("press the ball", 250, 320);
  }
  if (screen > 0) {
    ball.draw();
    player1.draw(180, 10, 200);
    player2.draw(200, 10, 80);
    stroke(250);
    line(15, 15, 485, 15);
    line(15, 485, 485, 485);
    stroke(0);
  }
  // inicio indicacion direccion
  if ((dirB === 1)) {
    ball.moveX1(2);
    ball.moveY2(3);
  }
  if (dirB === 2) {
    ball.moveX2(2);
    ball.moveY1(3);
  }
  if (dirB === 3) {
    ball.moveX1(2);
    ball.moveY1(3);
  }
  if (dirB === 4) {
    ball.moveX2(2);
    ball.moveY2(3);
  } // fin indicacion dirección
  //limites Y
  if (dirB === 1 && ball.getY() < 27) {
    dirB = 3;
  }
  if (dirB === 2 && ball.getY() > 477) {
    dirB = 4;
  }
  if (dirB === 3 && ball.getY() > 477) {
    dirB = 1;
  }
  if (dirB === 4 && ball.getY() < 27) {
    dirB = 2;
  }
  // rebote 
  if (player2.near(ball.getX(), ball.getY())) {
    dirB = 2;
  }
  if (player1.near(ball.getX(), ball.getY())) {
    dirB = 1;
  }
  //puntos
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("Player 1:" + p1, 70, 525);
  text("Player 2:" + p2, 430, 525);
  if (ball.getX() > 475) {
    ball.setX(250);
    ball.setY(250);
    p1++;
  }
  if (ball.getX() < 20) {
    ball.setX(250);
    ball.setY(250);
    p2++;
  }
}

function keyPressed() {
  if ((key === "w" || key === "W") && player1.getY() > 25) {
    player1.moveUp();
  }
  if ((key === "s" || key === "S") && player1.getY() < 485) {
    player1.moveDown();
  }
  if (screen === 2) {
    if ((keyCode === UP_ARROW) && player2.getY() > 25) {
      player2.moveUp();
    }
    if ((keyCode === DOWN_ARROW) && player2.getY() < 485) {
      player2.moveDown();
    }
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, 145, 280) < 60 && info === true) {
    screen = 1;
    start = 1;
    info = false;
  }
  if (dist(mouseX, mouseY, 355, 280) < 60 && info === true) {
    screen = 2;
    start = 1;
    info = false;
  }
  if (dist(mouseX, mouseY, player2.getX(), player2.getY()) < 25) {
    moveP = true;
  }
  if (ball.click(mouseX, mouseY)) {
    dirB = 1;
    start = 0;
  }
}

function mouseDragged() {
  if (screen === 1 && moveP === true && mouseY < 485 && mouseY > 20) {
    player2.setY(mouseY);
  }
}

function mouseReleased() {
  moveP = !moveP;
}