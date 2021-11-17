let level = [];
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
let mat = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
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
  g1 = new Ghost(35, 35, 1, 1, mat, loadImage("Images/f1.png"), loadImage("Images/f1-03.png"));
  g2 = new Ghost(665, 35, 1, 19, mat, loadImage("Images/f2.png"), loadImage("Images/f2-03.png"));
  g3 = new Ghost(35, 455, 13, 1, mat, loadImage("Images/f3.png"), loadImage("Images/f3-03.png"));
  g4 = new Ghost(665, 455, 13, 19, mat, loadImage("Images/f4.png"), loadImage("Images/f4-03.png"));
  pacman = new Pacman(posX, posY, loadImage("Images/p1.png"), loadImage("Images/p2.png"), loadImage("Images/p3.png"),
    loadImage("Images/p4.png"), loadImage("Images/p5.png"), loadImage("Images/p6.png"), loadImage("Images/p7.png"), loadImage("Images/p8.png"))

  for (let i = 0; i < 15; i++) {
    level[i] = new Array(21);
    for (let j = 0; j < 21; j++) {
      level[i][j] = 0;
    }
  }
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 21; j++) {
      level[i][0] = 1;
      level[0][j] = 1;
      level[14][j] = 1;
      level[i][20] = 1;
      /*level[14][10] = 0;
      level[7][20] = 0;
      level[7][0] = 0;
      level[0][10] = 0;*/
      if (i > 1 && i < 7 || i > 7 && i < 13) {
        level[i][18] = 1;
        level[i][2] = 1;
      }
      if (i > 7 && i < 13 || i > 1 && i < 7) {
        level[i][9] = 1;
        level[i][11] = 1;
      }
      if (j > 2 && j < 8 || j > 12 && j < 19) {
        level[2][j] = 1;
        level[12][j] = 1;
      }
      if (j > 3 && j < 8 || j > 12 && j < 17) {
        level[4][j] = 1;
        level[10][j] = 1;
      }
      if (j > 3 && j < 9 || j > 11 && j < 17) {
        level[6][j] = 1;
        level[8][j] = 1;
      }
    }
  }
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
  // console.log(pcCol); 
  //console.log(pcFil); 
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
    g1.move(mat);
    g2.move(mat);
    g3.move(mat);
    g4.move(mat);
  }
  if (dist(pacman.getX(), pacman.getY(), g1.getX(), g1.getY()) < 17.5) {
    g1 = new Ghost(35, 35, 1, 1, mat, loadImage("Images/f1.png"), loadImage("Images/f1-03.png"));
  }
  if (dist(pacman.getX(), pacman.getY(), g2.getX(), g2.getY()) < 17.5) {
    g2 = new Ghost(665, 35, 1, 19, mat, loadImage("Images/f2.png"), loadImage("Images/f2-03.png"));
  }
  if (dist(pacman.getX(), pacman.getY(), g3.getX(), g3.getY()) < 17.5) {
    g3 = new Ghost(35, 455, 13, 1, mat, loadImage("Images/f3.png"), loadImage("Images/f3-03.png"));

  }
  if (dist(pacman.getX(), pacman.getY(), g4.getX(), g4.getY()) < 17.5) {
    g4 = new Ghost(665, 455, 13, 19, mat, loadImage("Images/f4.png"), loadImage("Images/f4-03.png"));
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