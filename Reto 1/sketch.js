let black; // imagenes del color del cabello, para poder cambiarlo
let blonde;
let purple;
let red;
let white;
let cH; //colorHair
let h = [25]; //cada objeto cambiante tiene un arreglo y una variable que cambia el numero de la posicion
let hair;
let e = [7];
let eyes;
let c = [8];
let clothes;
let m = [7];
let mouth;
let s = [6];
let skin;
let freckles; //decoracion de la muñeca :3
let bx; //b = botones
let bx2;
let d;
let b1y;
let b2y;
let b4y;
let b5y;
let bhy;
let bhx1;
let bhx2;
let bhx3;
let bhx4;
let bhx5;

function setup() {
  createCanvas(350, 350);
  skin = 1;
  mouth = 1;
  clothes = 1;
  eyes = 1;
  hair = 1;
  bx = 60;
  bx2 = 280;
  d = 20;
  b1y = 215;
  b2y = 245;
  b3y = 275;
  b4y = 305;
  b5y = 335;
  bhy = 60;
  dh = 40;
  bhx1 = 70;
  bhx2 = 123;
  bhx3 = 175;
  bhx4 = 227;
  bhx5 = 280;

  black = new Hair(bhx1, bhy, loadImage("/ImagenesReto1O3/Color/negro.png"));
  blonde = new Hair(bhx2, bhy, loadImage("/ImagenesReto1O3/Color/mono.png"));
  purple = new Hair(bhx3, bhy, loadImage("/ImagenesReto1O3/Color/violeta.png"));
  red = new Hair(bhx4, bhy, loadImage("/ImagenesReto1O3/Color/rojo.png"));
  white = new Hair(bhx5, bhy, loadImage("/ImagenesReto1O3/Color/blanco.png"));
  freckles = new Pictures(loadImage("/ImagenesReto1O3/pecas.png"));

  h[0] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Corto1.png"));
  h[1] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Corto1.png"));
  h[2] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Largo1.png"));
  h[3] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Recogido1.png"));
  h[4] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Recogido1.png"));

  h[5] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Corto2.png"));
  h[6] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Corto2.png"));
  h[7] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Largo2.png"));
  h[8] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Recogido2.png"));
  h[9] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Recogido2.png"));

  h[10] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Corto3.png"));
  h[11] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Corto3.png"));
  h[12] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Largo3.png"));
  h[13] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Recogido3.png"));
  h[14] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Recogido3.png"));

  h[15] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Corto4.png"));
  h[16] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Corto4.png"));
  h[17] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Largo4.png"));
  h[18] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Recogido4.png"));
  h[19] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Recogido4.png"));

  h[20] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Corto5.png"));
  h[21] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Corto5.png"));
  h[22] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Largo5.png"));
  h[23] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Recogido5.png"));
  h[24] = new Pictures(loadImage("/ImagenesReto1O3/Cabello/Recogido5.png"));


  e[0] = new Pictures(loadImage("/ImagenesReto1O3/Ojos/Ojos1.png"));
  e[1] = new Pictures(loadImage("/ImagenesReto1O3/Ojos/Ojos1.png"));
  e[2] = new Pictures(loadImage("/ImagenesReto1O3/Ojos/Ojos2.png"));
  e[3] = new Pictures(loadImage("/ImagenesReto1O3/Ojos/Ojos3.png"));
  e[4] = new Pictures(loadImage("/ImagenesReto1O3/Ojos/Ojos4.png"));
  e[5] = new Pictures(loadImage("/ImagenesReto1O3/Ojos/Ojos5.png"));
  e[6] = new Pictures(loadImage("/ImagenesReto1O3/Ojos/Ojos5.png"));

  m[0] = new Pictures(loadImage("/ImagenesReto1O3/Boca/Boca1.png"));
  m[1] = new Pictures(loadImage("/ImagenesReto1O3/Boca/Boca1.png"));
  m[2] = new Pictures(loadImage("/ImagenesReto1O3/Boca/Boca2.png"));
  m[3] = new Pictures(loadImage("/ImagenesReto1O3/Boca/Boca3.png"));
  m[4] = new Pictures(loadImage("/ImagenesReto1O3/Boca/Boca4.png"));
  m[5] = new Pictures(loadImage("/ImagenesReto1O3/Boca/Boca5.png"));
  m[6] = new Pictures(loadImage("/ImagenesReto1O3/Boca/Boca5.png"));

  c[0] = new Pictures(loadImage("/ImagenesReto1O3/Ropa/Ropa1.png"));
  c[1] = new Pictures(loadImage("/ImagenesReto1O3/Ropa/Ropa1.png"));
  c[2] = new Pictures(loadImage("/ImagenesReto1O3/Ropa/Ropa2.png"));
  c[3] = new Pictures(loadImage("/ImagenesReto1O3/Ropa/Ropa3.png"));
  c[4] = new Pictures(loadImage("/ImagenesReto1O3/Ropa/Ropa4.png"));
  c[5] = new Pictures(loadImage("/ImagenesReto1O3/Ropa/Ropa5.png"));
  c[6] = new Pictures(loadImage("/ImagenesReto1O3/Ropa/Ropa6.png"));
  c[7] = new Pictures(loadImage("/ImagenesReto1O3/Ropa/Ropa6.png"));

  s[0] = new Pictures(loadImage("/ImagenesReto1O3/Piel/Base1.png"));
  s[1] = new Pictures(loadImage("/ImagenesReto1O3/Piel/Base1.png"));
  s[2] = new Pictures(loadImage("/ImagenesReto1O3/Piel/Base2.png"));
  s[3] = new Pictures(loadImage("/ImagenesReto1O3/Piel/Base3.png"));
  s[4] = new Pictures(loadImage("/ImagenesReto1O3/Piel/Base4.png"));
  s[5] = new Pictures(loadImage("/ImagenesReto1O3/Piel/Base4.png"));
}

function draw() {
  background(0, 180, 180);
  s[skin].show();
  e[eyes].show();
  m[mouth].show();
  freckles.show();
  c[clothes].show();
  black.show();
  purple.show();
  blonde.show();
  red.show();
  white.show();
  h[hair].show();

  //botones
  noStroke();
  fill(180, 100, 200);
  circle(bx, b1y, d);
  circle(bx2, b1y, d);
  circle(bx, b2y, d);
  circle(bx2, b2y, d);
  circle(bx, b3y, d);
  circle(bx2, b3y, d);
  circle(bx, b4y, d);
  circle(bx2, b4y, d);
  circle(bx, b5y, d);
  circle(bx2, b5y, d);
  strokeWeight(1);
  //boton cambio de color
  strokeWeight(2);
  stroke(180, 10, 200)
  noFill();
  circle(bhx1, bhy, dh);
  circle(bhx2, bhy, dh);
  circle(bhx3, bhy, dh);
  circle(bhx4, bhy, dh);
  circle(bhx5, bhy, dh);


  if (eyes === 6) {
    eyes = 1;
  }
  if (eyes === 0) {
    eyes = 5;
  }
  if (clothes === 7) {
    clothes = 1;
  }
  if (clothes === 0) {
    clothes = 6;
  }
  if (mouth === 6) {
    mouth = 1;
  }
  if (mouth === 0) {
    mouth = 5;
  }
  if (skin === 5) {
    skin = 1;
  }
  if (skin === 0) {
    skin = 4;
  }
  // segun el color del cabello el arreglo es dirente 
  if (hair === 4) {
    hair = 1;
  }
  if (hair === 0) {
    hair = 3;
  }
  if (hair === 9) {
    hair = 6;
  }
  if (hair === 5) {
    hair = 8;
  }
  if (hair === 14) {
    hair = 11;
  }
  if (hair === 10) {
    hair = 13;
  }
  if (hair === 19) {
    hair = 16;
  }
  if (hair === 15) {
    hair = 18;
  }
  if (hair === 24) {
    hair = 21;
  }
  if (hair === 20) {
    hair = 23;
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, bx, b1y) < d) {
    hair--;
  }
  if (dist(mouseX, mouseY, bx2, b1y) < d) {
    hair++;
  }
  if (dist(mouseX, mouseY, bx, b2y) < d) {
    eyes--;
  }
  if (dist(mouseX, mouseY, bx2, b2y) < d) {
    eyes++;
  }
  if (dist(mouseX, mouseY, bx, b3y) < d) {
    mouth--;
  }
  if (dist(mouseX, mouseY, bx2, b3y) < d) {
    mouth++;
  }
  if (dist(mouseX, mouseY, bx, b4y) < d) {
    skin--;
  }
  if (dist(mouseX, mouseY, bx2, b4y) < d) {
    skin++;
  }
  if (dist(mouseX, mouseY, bx, b5y) < d) {
    clothes--;
  }
  if (dist(mouseX, mouseY, bx2, b5y) < d) {
    clothes++;
  }
  if (dist(mouseX, mouseY, bhx1, bhy) < dh) {
    hair = 1;
  }
  if (dist(mouseX, mouseY, bhx2, bhy) < dh) {
    hair = 6;
  }
  if (dist(mouseX, mouseY, bhx3, bhy) < dh) {
    hair = 11;
  }
  if (dist(mouseX, mouseY, bhx4, bhy) < dh) {
    hair = 16;
  }
  if (dist(mouseX, mouseY, bhx5, bhy) < dh) {
    hair = 21;
  }
}