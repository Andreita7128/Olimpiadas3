class Ghost{
    constructor(x,y, image, image2){
        this.x = x;
        this.y = y;
        this.image = image; 
        this.image2 = image2;
    }

    show(v){
        if(v === false){
        image(this.image, this.x, this.y);
        }else{
            image(this.image2, this.x, this.y);
        }
    }
}