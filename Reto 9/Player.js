class Player {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
    }

    print() {
        image(this.image, this.x, this.y);
    }
    moveX(v) {
        if(v === true){
        this.x = this.x + 65
        }else{
        this.x = this.x - 65
    }
}

    moveY(v) {
        if(v === true){
        this.y = this.y + 65
        }else{
        this.y = this.y - 65
    }
}
    die(cx,cy){
        if(dist(cx,cy,this.x, this.y)<30){
            this.x = 0;
            this.y = 195;
        }
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(n) {
        this.x = n;
    }
   setY(ny) {
        this.y = ny;
    }
}