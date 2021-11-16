class Cell{
    constructor(x,y,b){
        this.x = x;
        this.y = y;
        this.b = b;
    }

    show(b){
        strokeWeight(2);
        stroke(10,10,200)
        fill(10,10,b);
        rect(this.x, this.y, this.b, this.b);
    }
}