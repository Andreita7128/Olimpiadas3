let maps = new Array(10);
let frog;
let dir; // 0 der 1 izq 2 arr 3 aba
let cars = new Array(5);
let waterLily;

function setup() {
  createCanvas(650, 455);
  dir = 0;
  waterLily = loadImage("Images/finish.png");

  frog = new Frog(0, 195, (loadImage("Images/frogger_sapo.png")))

  for (let i = 0; i < 10; i++) {
    maps[i] = new Array(7);
    for (let j = 0; j < 7; j++) {
      maps[i][j] = new Cell((65 * i) + 32.5, (65 * j) + 32.5, 65, 10);
    }
  }
  for (let i = 1; i < 5; i++) {
    cars[i] = new Car((65 * i), 0, (loadImage("Images/car.png")));
  }
}

function draw() {
  background(10, 180, 200);

  fill(80);
  rect(65, 0, 260, 455);
  fill(50, 190, 70)
  rect(0, 0, 65, 455);
  rect(325, 0, 65, 455);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 7; j++) {
      maps[i][j].print();
    }
  }
  image(waterLily, 585, 195);
  frog.print();
  for (let i = 1; i < 5; i++) {
    cars[i].print();
    cars[1].move(random(3));
    cars[2].move(random(2));
    cars[3].move(random(4));
    cars[4].move(random(1));
  }
  for (let i = 1; i < 5; i++) {
    if(frog.die(cars[i].getX(), cars[i].getY())){
      frog.getX() = frog.setX(0);
    frog.getY() = frog.setY(195);
    }
  }

  if (dir === 0) {
    frog = new Frog(frog.getX(), frog.getY(), (loadImage("Images/frogger_sapo.png")))
  } else if (dir === 1) {
    frog = new Frog(frog.getX(), frog.getY(), (loadImage("Images/frogizq.png")))
  } else if (dir === 2) {
    frog = new Frog(frog.getX(), frog.getY(), (loadImage("Images/frogup.png")))
  } else if (dir === 3) {
    frog = new Frog(frog.getX(), frog.getY(), (loadImage("Images/frogdown.png")))
  }
if(dist(frog.getX(), frog.getY(),585,195)<1){
  stroke(10);
  fill(250);
  rectMode(CENTER);
  rect(325,227.5,500,200)
  rectMode(CORNER);
  fill(10);
  textAlign(CENTER);
  textSize(100);
  text("You Win!",320,260)
}
}

function keyPressed() {
  if ((key === 'd' || key === 'D' || keyCode === RIGHT_ARROW) && frog.getX() < 585) {
    frog.right();
    dir = 0;
  }
  if ((key === 'a' || key === 'A' || keyCode === LEFT_ARROW) && frog.getX() > 0) {
    frog.left();
    dir = 1;
  }
  if ((key === 'w' || key === 'W' || keyCode === UP_ARROW) && frog.getY() > 0) {
    frog.up();
    dir = 2;
  }
  if ((key === 's' || key === 'S' || keyCode === 40) && frog.getY() < 390) {
    frog.down();
    dir = 3;
  }
}