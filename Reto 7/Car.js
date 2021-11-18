class Car {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
    }
    print() {
        image(this.image, this.x, this.y);
    }
    move(n) {
        if (this.y < 455) {
            this.y = this.y + n;
        } else {
            this.y = -20;
        }
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(newX) {
        this.x = newX;
    }
    setY(newY) {
        this.y = newY;
    }

}