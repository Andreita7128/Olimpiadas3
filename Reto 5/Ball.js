class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        fill(180, 10, 10);
        noStroke();
        circle(this.x, this.y, 20);
    }
    click(mx, my, d) {
        let result = false;
        if (dist(this.x, this.y, mx, my) < 10) {
            console.log("click");
            console.log(d);
            result = true;
        }
        return result;
    }
    moveX1(n) {
        this.x = this.x + n;
    }
    moveX2(n) {
        this.x = this.x - n;
    }
    moveY1(n) {
        this.y = this.y + n;
    }
    moveY2(n) {
        this.y = this.y - n;
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