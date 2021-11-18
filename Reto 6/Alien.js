class Alien {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 20;

        this.show = function () {
            fill(255, 0, 255);
            circle(this.x, this.y, this.r * 2);

        }
        this.die = function () {
            this.y = y + 1000;
        }

    }
}