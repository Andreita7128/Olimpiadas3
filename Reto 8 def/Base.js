class Base {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        noStroke();
        fill(10, 180, 180);
        rectMode(CENTER);
        rect(this.x, this.y, 60, 10);
        rectMode(CORNER);
    }
    near(nx, ny) {
        let result = false;
        if (nx > (this.x - 30) && nx < (this.x + 30) && ny > (this.y - 5) && ny < (this.y + 5)) {
            result = true;
        }
        return result;
    }

    move(v) {
        if (v === true) {
            this.x = this.x + 15;
        } else if (v === false) {
            this.x = this.x - 15;
        }
    }

    setX(nx) {
        this.x = nx;
    }
    setY(ny) {
        this.y = ny;
    }
}