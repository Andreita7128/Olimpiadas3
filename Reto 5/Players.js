class Players{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(r,g,b){
        fill(r,g,b)
        rectMode(CENTER);
        rect(this.x, this.y, 12, 70);
        rectMode(CORNER);
    }

    moveDown(){
            this.y = this.y + 15;
    }
    moveUp(){
        this.y = this.y - 15;
    }

    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    setY(my){
        this.y = my;
    }
}