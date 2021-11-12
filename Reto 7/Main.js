
let map = [];

function setup() {
  createCanvas(650, 455);
  for (let i = 0; i < 7; i++) {
    map[i] = new Array(10);
    for (let j = 0; j < 10; j++) {
        map[i][j] = new Cell(((65 * i) + 65, (65 * j) + 65, 65));
    }
  }
}

function draw() {
  background(10,180,200);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      squares[i][j].print();
    }
  }
}
