/*Catalina Giraldo- A00371842
 * Laura Forero- A00369431
 * Andrea Torrente - A00365669
 */

let torre
let arma1
let arma2
let enemigo1 = []
let enemigo2 = []
let show2;
let show1;

function setup() {
  createCanvas(500, 500);
  torre = new Torre(220, 220, 80, 100, 100)
  arma1 = new Arma1(80, 80, 40, 40)
  arma2 = new Arma2(80, 420, 40, 40)
  show1 = false;
  show2 = false;
}

function draw() {
  background(255);

  torre.pintar()
  if (show1 === true) {
    arma1.pintar()
    arma1.dispararAlt(enemigo1.length)
  }

  if (show2 === true) {
    arma2.pintar()
    arma2.dispararAlt(enemigo2.length)
  }


  //fill(0,255,0);
  noFill();
  ellipse(80, 80, 40, 40);
  ellipse(80, 420, 40, 40);


  if (frameCount % 240 == 0) {
    fill(20, 0, 0)
    enemigo1.push(new Enemigo(500, 80, 50, 50, 2))
    enemigo2.push(new Enemigo(500, 420, 50, 50, 2))
  }

  enemigo1.forEach(function (elem, i) {
    elem.pintar()
    elem.mover()
  })

  enemigo2.forEach(function (elem, i) {
    elem.pintar()
    elem.mover()
  })

  //arma1.dispararAlt(enemigo1.length)
  //arma2.dispararAlt(enemigo2.length)

  enemigo1.forEach(function (enemigo, i) {
    arma1.balas.forEach(function (bala, j) {
      if (dist(enemigo.x, enemigo.y, bala.x, bala.y) < enemigo.ancho / 2) {
        arma1.balas.splice(j, 1)
        enemigo.vida -= 1
      }
    })
  })

  enemigo2.forEach(function (enemigo, i) {
    arma2.balas.forEach(function (bala, j) {
      if (dist(enemigo.x, enemigo.y, bala.x, bala.y) < enemigo.ancho / 2) {
        arma2.balas.splice(j, 1)
        enemigo.vida -= 1
      }
    })
  })

  enemigo1.forEach(function (elem, i) {
    if (elem.vida <= 0) {
      enemigo1.splice(i, 1)
      arma1.objetivo = null
    }
  })

  enemigo2.forEach(function (elem, i) {
    if (elem.vida <= 0) {
      enemigo2.splice(i, 1)
      arma2.objetivo = null
    }
  })
}

function mousePressed() {

  /*if(dist(mouseX, mouseY, 80, 80)<40) {
    arma1.dispararAlt(enemigo1.length)

    enemigo1.forEach(function (enemigo, i) {
      arma1.balas.forEach(function (bala, j) {
        if (dist(enemigo.x, enemigo.y, bala.x, bala.y) < enemigo.ancho / 2) {
          arma1.balas.splice(j, 1)
          enemigo.vida -= 1
        }
      })
    })

    console.log("undido");

  }

  if(dist(mouseX, mouseY, 80, 420)<40) {
    arma2.dispararAlt(enemigo2.length)
  }
  */
  if (dist(mouseX, mouseY, 80, 80) < 41) {
    show1 = true;
    show2 = false;
  }

  if (dist(mouseX, mouseY, 80, 420) < 41) {
    arma1.pintar()
    show2 = true;
    show1 = false;
  }
}