/*Catalina Giraldo- A00371842
 * Laura Forero- A00369431
 * Andrea Torrente - A00365669
 */

let pacman;
let g1;
let g2;
let g3;
let g4;
let p1;
let p2;
let imagepm;
let dir; // 1 der, 2 izq, 3 arr, 4 aba
let posX;
let posY;
let pcFil;
let pcCol;
let level = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function setup() {
  createCanvas(735, 525);
  p1 = false;
  p2 = true;
  imagepm = false;
  dir = 0;
  pcCol = 10;
  pcFil = 7;
  posX = (pcCol * 35);
  posY = (pcFil * 35);
  g1 = new Ghost(35, 35, 1, 1, level, loadImage("Images/f1.png"), loadImage("Images/f1-03.png"));
  g2 = new Ghost(665, 35, 1, 19, level, loadImage("Images/f2.png"), loadImage("Images/f2-03.png"));
  g3 = new Ghost(35, 455, 13, 1, level, loadImage("Images/f3.png"), loadImage("Images/f3-03.png"));
  g4 = new Ghost(665, 455, 13, 19, level, loadImage("Images/f4.png"), loadImage("Images/f4-03.png"));
  pacman = new Pacman(posX, posY, loadImage("Images/p1.png"), loadImage("Images/p2.png"), loadImage("Images/p3.png"),
    loadImage("Images/p4.png"), loadImage("Images/p5.png"), loadImage("Images/p6.png"), loadImage("Images/p7.png"), loadImage("Images/p8.png"))

}

function draw() {
  background(10);
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 21; j++) {
      if (level[i][j] === 0) {
        fill(10, 10, 100);
      } else if (level[i][j] === 1) {
        fill(10, 10, 50);
      }
      strokeWeight(2);
      stroke(10, 10, 200)
      rect((35 * j), (35 * i), 35);
    }
  }
  g1.show(imagepm);
  g2.show(imagepm);
  g3.show(imagepm);
  g4.show(imagepm);

  if (dir === 1) {
    pacman.show1(imagepm);
  } else if (dir === 2) {
    pacman.show2(imagepm);
  } else if (dir === 3) {
    pacman.show3(imagepm);
  } else {
    pacman.show4(imagepm);
  }
  if (frameCount % 10 == 0) {
    g1.move(level);
    g2.move(level);
    g3.move(level);
    g4.move(level);
  }
  if (dist(pacman.getX(), pacman.getY(), g1.getX(), g1.getY()) < 17.5) {
    g1 = new Ghost(35, 35, 1, 1, level, loadImage("Images/f1.png"), loadImage("Images/f1-03.png"));
  }
  if (dist(pacman.getX(), pacman.getY(), g2.getX(), g2.getY()) < 17.5) {
    g2 = new Ghost(665, 35, 1, 19, level, loadImage("Images/f2.png"), loadImage("Images/f2-03.png"));
  }
  if (dist(pacman.getX(), pacman.getY(), g3.getX(), g3.getY()) < 17.5) {
    g3 = new Ghost(35, 455, 13, 1, level, loadImage("Images/f3.png"), loadImage("Images/f3-03.png"));

  }
  if (dist(pacman.getX(), pacman.getY(), g4.getX(), g4.getY()) < 17.5) {
    g4 = new Ghost(665, 455, 13, 19, level, loadImage("Images/f4.png"), loadImage("Images/f4-03.png"));
  }
}

function keyPressed() {
  if (key === "d" || key === "D" || keyCode === RIGHT_ARROW) {
    if (level[pcFil][pcCol + 1] === 0) {
      pacman.moveX(p2);
      dir = 1;
      pcCol++;
    }
  }
  if (key === "a" || key === "A" || keyCode === LEFT_ARROW) {
    if (level[pcFil][pcCol - 1] === 0) {
      pacman.moveX(p1);
      dir = 2;
      pcCol--;
    }
    if (pcCol === 0) {
      pcCol = 20;
    }
  }
  if (key === "w" || key === "W" || keyCode === UP_ARROW) {
    if (level[pcFil - 1][pcCol] === 0) {
      pacman.moveY(p1);
      dir = 3;
      pcFil--;
    }
  }
  if (key === "s" || key === "S" || keyCode === DOWN_ARROW) {
    if (level[pcFil + 1][pcCol] === 0) {
      pacman.moveY(p2);
      dir = 4;
      pcFil++;
    }
  }
  pacman.setX(pcCol * 35);
  pacman.setY(pcFil * 35);
}

function keyReleased() {
  imagepm = !imagepm;
}