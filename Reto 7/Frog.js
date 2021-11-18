class Frog {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
    }

    print() {
        image(this.image, this.x, this.y);
    }

    right() {
        this.x = this.x + 65
    }
    left() {
        this.x = this.x - 65
    }
    down() {
        this.y = this.y + 65
    }
    up() {
        this.y = this.y - 65
    }
    die(cx, cy) {
        if (dist(cx, cy, this.x, this.y) < 30) {
            this.x = 0;
            this.y = 195;
        }
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(n) {
        this.x = n;
    }
    setY(ny) {
        this.y = ny;
    }
}