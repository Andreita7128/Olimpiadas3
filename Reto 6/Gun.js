class Gun {
    constructor() {
        this.x = width / 2;
        this.tam = 40;

        this.show = function () {
            fill(255);
            rectMode(CENTER);
            rect(this.x, height - 40, this.tam, this.tam + 20);

        };
        this.move = function () {
            this.x = mouseX;
        };
    }
}