class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        fill(180, 10, 10);
        noStroke();
        circle(this.x, this.y, 15);
    }
    click(mx, my) {
        let result = false;
        if (dist(this.x, this.y, mx, my) < 7.5) {
            result = true;
        }
        return result;
    }
    moveX(n) {
        if (n === true) {
            this.x = this.x + random(1, 3);
        } else if (n === false) {
            this.x = this.x - random(1, 3);
        }
    }
    moveY(n) {
        if (n === true) {
            this.y = this.y + random(1, 3);
        } else if (n === false) {
            this.y = this.y - random(1, 3);
        }
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(nx) {
        this.x = nx;
    }
    setY(ny) {
        this.y = ny;
    }

}