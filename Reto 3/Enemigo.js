class Enemigo {
    constructor(x, y, ancho, alto, vida) {
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
        this.vida = vida
    }
    pintar() {
        rectMode(CENTER)
        rect(this.x, this.y, this.ancho, this.alto)
        rectMode(CORNER)
    }
    mover() {
        this.x -= 2
    }
}