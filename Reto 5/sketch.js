let ball;
let player1;
let player2;
let move;

function setup() {
  createCanvas(500, 500);
  move = false;
  ball = new Ball(250,250);
  player1 = new Players(20,55);
  player2 = new Players(475,55);
}

function draw() {
  background(10);
  ball.draw();
  player1.draw(180,10,200);
  player2.draw(200,10,80);
  stroke(255);
  noFill();
  rect(10,10,475,475);
  stroke(10);
  //console.log(player1.getY());
}
function keyPressed(){
  if((key === "w" || key === "W") && player1.getY() > 55){
    player1.moveUp();
  }
  if((key === "s" || key === "S") && player1.getY() < 445){
    player1.moveDown();
  }
}
function mousePressed(){
  if(dist(mouseX,mouseY,player2.getX(),player2.getY()) < 25){
    move = true;
  }
}
function mouseDragged() {
  if (move === true && mouseY < 445 && mouseY > 50) {
    player2.setY(mouseY);
  }
}
function mouseReleased(){
  move = !move;
}

