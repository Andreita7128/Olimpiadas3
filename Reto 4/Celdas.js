class Celdas {
    constructor(x, y, b, g) {
        this.x = x;
        this.y = y;
        this.b = b;
        this.g = g;
    }

    print() {
        rectMode(CENTER);
        strokeWeight(3);
        stroke(255);
        fill(10, this.g, 10);
        rect(this.x, this.y, this.b, this.b);
        rectMode(CORNER);
    }

    click() {
        let result = false;
        if (dist(mouseX, mouseY, this.x, this.y) < this.b / 2) {
            result = true;
        }
        return result;
    }

    printX() {
        textSize(this.b);
        fill(250);
        textAlign(CENTER, CENTER);
        text("X", this.x, this.y + 10);
    }

    printO() {
        textSize(this.b);
        fill(250);
        textAlign(CENTER, CENTER);
        text("O", this.x, this.y + 10);
    }

    get getX() {
        return this.x;
    }
    get getY() {
        return this.y;
    }
    get getG() {
        return this.g;
    }

    setG(green) {
        this.g = green;
    }
}