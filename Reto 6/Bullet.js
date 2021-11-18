class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 5;
        this.bye = false;

        this.show = function () {
            noStroke();
            fill(0, 0, 255);
            circle(this.x, this.y, this.r * 2);

        }
        this.hits = function (Alien) {
            var d = dist(this.x, this.y, Alien.x, Alien.y);
            if (d < this.r + Alien.r) {
                return true;
            } else {
                return false;
            }
        }
        this.move = function () {
            this.y = this.y - 2;
        }
        this.gone = function () {
            this.bye = true;
        }

    }
}