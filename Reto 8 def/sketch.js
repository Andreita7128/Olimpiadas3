/*Catalina Giraldo- A00371842
 * Laura Forero- A00369431
 * Andrea Torrente - A00365669
 */

let ball;
let base;
let bricks = [];
let dir;
let dirT;
let dirF;
let start = 1;

function setup() {
  createCanvas(400, 400);
  dir = 0;
  dirT = true;
  dirF = false;
  ball = new Ball(200, 345);
  base = new Base(200, 365);
  for (let i = 0; i < 10; i++) {
    bricks[i] = new Array(5);
    for (let j = 0; j < 5; j++) {
      bricks[i][j] = new Cell((40 * i), (20 * j), 40, 20);
    }
  }
}

function draw() {
  background(10);
  ball.show();
  base.show();

  if (start === 1) {
    textAlign(CENTER);
    textSize(14);
    text("clickea sobre la bolita :3", 200, 300);
    textSize(12);
    text("press the ball", 200, 320);
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
      if (bricks[i][j] != undefined) {
        bricks[i][j].show();
      }
    }
  }
  // inicio indicacion direccion
  if ((dir === 1)) {
    ball.moveX(dirT);
    ball.moveY(dirF);
  }
  if (dir === 2) {
    ball.moveX(dirF);
    ball.moveY(dirT);
  }
  if (dir === 3) {
    ball.moveX(dirT);
    ball.moveY(dirT);
  }
  if (dir === 4) {
    ball.moveX(dirF);
    ball.moveY(dirF);
  } // fin indicacion dirección
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
      if (bricks[i][j] != undefined) {
        if (bricks[i][j].near(ball.getX(), ball.getY())) {
          bricks[i].splice(j, 1);
          if (dir === 1) {
            dir = 3;
          } else if (dir === 4) {
            dir = 3;
          }
        }
      }
    }
  }
  //rebote con la base
  if (base.near(ball.getX(), ball.getY()) && dir === 2) {
    dir = 4;
  }
  if (base.near(ball.getX(), ball.getY()) && dir === 3) {
    dir = 1;
  }
  // rebote muros
  if (ball.getX() < 0 && dir === 4) {
    dir = 1;
  }
  if (ball.getX() < 0 && dir === 2) {
    dir = 3;
  }
  if (ball.getX() > 400 && dir === 1) {
    dir = 4;
  }
  if (ball.getX() > 400 && dir === 3) {
    dir = 2;
  }
  if (ball.getY() < 0 && dir === 4) {
    dir = 3;
  }
  if (ball.getY() < 0 && dir === 1) {
    dir = 2;
  }
  if (ball.getY() > 400) {
    dir = 0;
    start = 1;
    ball = new Ball(200, 345);
    base = new Base(200, 365);
    for (let i = 0; i < 10; i++) {
      bricks[i] = new Array(5);
      for (let j = 0; j < 5; j++) {
        bricks[i][j] = new Cell((40 * i), (20 * j), 40, 20);
      }
    }
  }
}

function mousePressed() {
  if (ball.click(mouseX, mouseY)) {
    dir = 1;
    start = 0;
  }
}

function keyPressed() {
  if (key === "A" || key === "a" || keyCode === LEFT_ARROW) {
    base.move(dirF);
  }
  if (key === "D" || key === "d" || keyCode === RIGHT_ARROW) {
    base.move(dirT);
  }
}