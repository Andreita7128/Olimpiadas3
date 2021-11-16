class Pacman{
    constructor(x,y,image, image2, image3, image4, image5, image6, image7, image8){
        this.x = x;
        this.y = y;
        this.image = image; 
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
        this.image5 = image5; 
        this.image6 = image6;
        this.image7 = image7;
        this.image8 = image8;
    }

    show1(v){
        if(v === false){
        image(this.image, this.x, this.y);
        }else{
            image(this.image2, this.x, this.y);
        }
    }
    show2(v){
        if(v === false){
        image(this.image3, this.x, this.y);
        }else{
            image(this.image4, this.x, this.y);
        }
    }
    show3(v){
        if(v === false){
        image(this.image5, this.x, this.y);
        }else{
            image(this.image6, this.x, this.y);
        }
    }
    show4(v){
        if(v === false){
        image(this.image7, this.x, this.y);
        }else{
            image(this.image8, this.x, this.y);
        }
    }
    moveX(b){
        if(b === true){
            this.x = this.x + 35;
        } else{
            this.x = this.x - 35;
        }
    }
    moveY(b){
        if(b === true){
            this.y = this.y + 35;
        } else{
            this.y = this.y - 35;
        }
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
}