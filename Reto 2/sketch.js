let level = [];
let pacman;
let p1;
let p2;
let imagepm;
let dir; // 1 der, 2 izq, 3 arr, 4 aba
let posX;
let posY;
let pcFil;
let pcCol;
function setup() {
  createCanvas(735, 525);
  p1 = false;
  p2 = true;
  imagepm = false;
  dir = 0;
  pcCol = 10;
  pcFil = 7;
  posX = (pcCol*35);
  posY = (pcFil*35);
  pacman = new Pacman(posX, posY, loadImage("Images/p1.png"), loadImage("Images/p2.png"), loadImage("Images/p3.png"),
    loadImage("Images/p4.png"), loadImage("Images/p5.png"), loadImage("Images/p6.png"), loadImage("Images/p7.png"), loadImage("Images/p8.png"))
  for (let i = 0; i < 21; i++) {
    level[i] = new Array(15);
    for (let j = 0; j < 15; j++) {
      level[i][j] = 0;
    }
  }
  for (let i = 0; i < 21; i++) {
    for (let j = 0; j < 15; j++) {
      level[i][0] = 1;
      level[0][j] = 1;
      level[i][14] = 1;
      level[20][j] = 1;
      level[10][14] = 0;
      level[20][7] = 0;
      level[10][0] = 0;
      level[0][7] = 0;
      if (i > 1 && i < 8) {
        level[i][12] = 1;
        level[i][2] = 1;
      }
      if (i > 12 && i < 19) {
        level[i][12] = 1;
        level[i][2] = 1;
      }
      if (j > 1 && j < 7) {
        level[2][j] = 1;
        level[9][j] = 1;
        level[11][j] = 1;
        level[18][j] = 1;
      }
      if (j > 7 && j < 13) {
        level[2][j] = 1;
        level[9][j] = 1;
        level[11][j] = 1;
        level[18][j] = 1;
      }
      if (i > 11 && i < 17) {
        level[i][6] = 1;
        level[i][8] = 1;
      }
      if (i > 3 && i < 9) {
        level[i][6] = 1;
        level[i][8] = 1;
      }
      if (i > 3 && i < 8) {
        level[i][4] = 1;
        level[i][10] = 1;
      }
      if (i > 12 && i < 17) {
        level[i][4] = 1;
        level[i][10] = 1;
      }
    }
  }  
}

function draw() {
  background(10);
  for (let i = 0; i < 21; i++) {
    for (let j = 0; j < 15; j++) {
      if (level[i][j] === 0) {
        fill(10, 10, 100);
      } else if (level[i][j] === 1) {
        fill(10, 10, 50);
      }
      strokeWeight(2);
      stroke(10, 10, 200)
      rect((35 * i), (35 * j), 35);
    }
  }
  if (dir === 1) {
    pacman.show1(imagepm);
  } else if (dir === 2) {
    pacman.show2(imagepm);
  } else if (dir === 3) {
    pacman.show3(imagepm);
  } else {
    pacman.show4(imagepm);
  }
}

function keyPressed() {
    if(key === "d" || key === "D" || keyCode === RIGHT_ARROW){
      if (level[pcFil][pcCol + 1]  === 0){
    pacman.moveX(p2);
    dir = 1;
  }
}
  if (key === "a" || key === "A" || keyCode === LEFT_ARROW) {
    if (level[pcFil][pcCol - 1]  === 0){
    pacman.moveX(p1);
    dir = 2;
  }
}
  if (key === "w" || key === "W" || keyCode === UP_ARROW) {
    pacman.moveY(p1);
    dir = 3;
}
  if (key === "s" || key === "S" || keyCode === DOWN_ARROW) {
    if (level[pcFil + 1][pcCol]  === 0){
    pacman.moveY(p2);
    dir = 4;
  }
}
posX = (pcCol*35);
posY = (pcFil*35);
}

function keyReleased() {
  imagepm = !imagepm;
}