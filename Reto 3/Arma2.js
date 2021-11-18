class Arma2 {
    constructor(x, y, ancho, alto) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
        this.image = loadImage("/Pictures/Pistolilla.png")
        this.balas = []
    }

    pintar() {
        imageMode(CENTER)
        image(this.image, this.x, this.y, this.ancho, this.alto)
        imageMode(CORNER)
    }

    dispararAlt(enemyLenght) {
        if (enemyLenght > 0) {
            if (frameCount % 30 == 0) {
                this.balas.push(new Balas(this.x, this.y, 5))
            }
        }
        for (let i = 0; i < this.balas.length; i++) {
            this.balas[i].pintar()
            this.balas[i].moveAlt()
        }
    }
}