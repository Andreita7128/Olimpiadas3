class Cell{
constructor(x,y,b){
    this.x = x;
    this.y = y;
    this.b = b;
    }
    
    print(){
        rectMode(CENTER);
        strokeWeight(3);
        stroke(255);
        noFill();
        rect(this.x,this.y,this.b,this.b);
        rectMode(CORNER);
    }
}