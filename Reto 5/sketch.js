let ball;
let player1;
let player2;
let moveP;
let dirB; // 1 up, 2 down
let p1;
let p2;
let contador;
let nx;
let ny;
let screen;
let op1;
let op2;

function setup() {
  createCanvas(500, 550);
  screen = 1;
  moveP = false;
  ball = new Ball(250,250);
  player1 = new Players(20,250);
  player2 = new Players(475,250);
  dirB = 0;
  p1 = 0;
  p2 = 0;
  contador = 0;
  nx = 2;
  ny = 3;
  op1 = loadImage("Images/op1.png");
  op2 = loadImage("Images/op2.png");
  
}

function draw() {
  background(10);
  if(screen === 0){
    fill(10,100,180);
    rect(50,150,400,200)
    fill(255);
    rect(85,195,120,110);
    imageMode(CENTER);
    image(op1,150,250);
    image(op2,350,250);
    imageMode(CORNER);

  }
  if(screen > 0){
  ball.draw();
  player1.draw(180,10,200);
  player2.draw(200,10,80);
  stroke(250);
  line(15,15,485,15);
  line(15,485,485,485);
  stroke(0);
  }
// inicio indicacion direccion
  if((dirB === 1)){
    ball.moveX1(nx);
    ball.moveY2(ny);
  }
  if(dirB === 2){
    ball.moveX2(nx);
    ball.moveY1(ny);
  }
  if(dirB === 3){
    ball.moveX1(nx);
    ball.moveY1(ny);
  }
  if(dirB === 4){
    ball.moveX2(nx);
    ball.moveY2(ny);
  } // fin indicacion dirección
  //limites Y
  if(dirB === 1 && ball.getY() < 27){
    dirB = 3;
  }
  if(dirB === 2 && ball.getY() > 477){
    dirB = 4;
  }
  if(dirB === 3 && ball.getY() > 477){
    dirB = 1;
  }
  if(dirB === 4 && ball.getY() < 27){
    dirB = 2;
  }

  // rebote 
  if(player2.near(ball.getX(), ball.getY())){
    dirB = 2;
    contador++;
  }
  if(player1.near(ball.getX(), ball.getY())){
    dirB = 1;
    contador++;
  }
  //puntos
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text("Player 1:" + p1, 70, 525);
  text("Player 2:" + p2, 430, 525);
  if(ball.getX() > 475){
    ball.setX(250);
    ball.setY(250);
    p1++;
  }
  if(ball.getX() < 20 ){
    ball.setX(250);
    ball.setY(250);
    p2++;
  }

  if(contador === (contador + 3)){
    nx++;
    ny++;
  }
  console.log(contador)
  console.log(nx)
  console.log(ny)
}
function keyPressed(){
  if((key === "w" || key === "W") && player1.getY() > 25){
    player1.moveUp();
  }
  if((key === "s" || key === "S") && player1.getY() < 485){
    player1.moveDown();
  }
}
function mousePressed(){
  if(dist(mouseX,mouseY,player2.getX(),player2.getY()) < 25){
    moveP = true;
  }
  if(ball.click(mouseX, mouseY,dirB)){
    dirB = 1;
  }
}
function mouseDragged() {
  if (moveP === true && mouseY < 485 && mouseY > 20) {
    player2.setY(mouseY);
  }
}
function mouseReleased(){
  moveP = !moveP;
}

