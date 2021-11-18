class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        strokeWeight(1);
        stroke(255);
        fill(180, 10, 200);
        rect(this.x, this.y, 40, 20);
    }

    near(nx, ny) {
        let result = false;
        if (nx > this.x && nx < (this.x + 40) && ny > this.y && ny < (this.y + 20)) {
            result = true;
        }
        return result;
    }

}