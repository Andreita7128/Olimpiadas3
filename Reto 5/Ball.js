class Ball{
    constructor(x,y){
this.x = x;
this.y = y;
    }

    draw(){
        fill(180,10,10);
        circle(this.x,this.y,20);
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    setX(mx){
        this.x = mx;
    }
    setY(my){
        this.y = my;
    }
}