class Cell {
    constructor(x,y,b){
    this.x = x;
    this.y = y;
    this.b = b;
    }
    
    print(){
        rectMode(CENTER);
        strokeWeight(1);
        stroke(100);
      
        noFill();
        rect(this.x,this.y,this.b,this.b);
        rectMode(CORNER);
    }
    
    }