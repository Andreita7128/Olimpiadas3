let maps = new Array(10);
let player;
let dir; // 0 arr 1 aba
let cars = new Array(5);
let p1;
let p2;

function setup() {
  createCanvas(650, 455);
  dir = 0;
  p1 = false;
  p2 = true;

  player = new Player(0, 195, (loadImage("Images/player_2.png")))

  for (let i = 0; i < 10; i++) {
    maps[i] = new Array(7);
    for (let j = 0; j < 7; j++) {
      maps[i][j] = new Cell((65 * i) + 32.5, (65 * j) + 32.5, 65, 10);
    }
  }
  for (let i = 0; i < 8; i++) {
    cars[i] = new Car(0,(65 * i),(loadImage("Images/carbots.png")));
  }
}

function draw() {
  background(80);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 7; j++) {
      maps[i][j].print();
    }
  }
  player.print();
  for (let i = 0; i < 7; i++) {
    cars[i].print();
    cars[0].move(random(5));
    cars[1].move(random(3));
    cars[2].move(random(1));
    cars[3].move(random(2));
    cars[4].move(random(1));
    cars[5].move(random(3));
    cars[6].move(random(4));
    
    if(player.die(cars[i].getX(), cars[i].getY())){
      player.getX() = player.setX(0);
    player.getY() = player.setY(195);
    }
  }
}
function keyPressed() {
  if ((key === 'w' || key === 'W' || keyCode === UP_ARROW) && player.getY() > 0) {
    player.moveY(p1);
  }
  if ((key === 's' || key === 'S' || keyCode === DOWN_ARROW) && player.getY() < 390) {
    player.moveY(p2);
  }
  if ((key === 'd' || key === 'D' || keyCode === RIGHT_ARROW) && player.getX() < 585) {
    player.moveX(p2);
  }
  if ((key === 'a' || key === 'A' || keyCode === LEFT_ARROW) && player.getX() > 0) {
    player.moveX(p1);
  }
}
function keyReleased(){

}
