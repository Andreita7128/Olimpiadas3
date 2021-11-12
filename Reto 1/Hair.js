class Hair{
    constructor(x,y,image){
        this.x = x;
        this.y = y;
        this.image = image;
    }

    show(){
        imageMode(CENTER);
        image(this.image, this.x, this.y);
        imageMode(CORNER);
    }

}