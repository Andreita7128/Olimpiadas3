class Torre {
    constructor(x, y, ancho, alto, vida) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
        this.vida = vida
        this.image = loadImage("/Pictures/Torreta.png")
    }
    pintar() {
        image(this.image, this.x, this.y, this.ancho, this.alto)
    }
}