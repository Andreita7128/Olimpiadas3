/*Catalina Giraldo- A00371842
 * Laura Forero- A00369431
 * Andrea Torrente - A00365669
 */

let weapon;
let aliens = [];
let bullets = [];

function setup() {
  createCanvas(400, 400);
  weapon = new Gun();

  for (var j = 0; j < 5; j++) {
    aliens[j] = new Alien(j * 70 + 60, 100);
  }
}

function draw() {
  background(50);
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (var j = 0; j < aliens.length; j++) {
      if (bullets[i].hits(aliens[j])) {
        console.log("BOOM!");
        aliens[j].die();
        bullets[i].gone();
      }
    }
    if (bullets[i].bye) {
      bullets.splice(i, 1);
    }
  }
  for (var j = 0; j < aliens.length; j++) {
    aliens[j].show();
  }
  weapon.show();
  weapon.move();
}

function mouseClicked() {
  var obj = new Bullet(weapon.x, height - 40);
  bullets.push(obj)
}