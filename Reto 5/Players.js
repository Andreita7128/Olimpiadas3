class Players{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw(r,g,b){
        fill(r,g,b)
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, 12, 70);
        rectMode(CORNER);
    }

    moveDown(){
            this.y = this.y + 30;
    }
    moveUp(){
        this.y = this.y - 30;
    }
    near(nx,ny){
        let result = false;
        if(dist(this.x,this.y,nx,ny)< 25){
            console.log("near");
            result = true;
        }
        return result;
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