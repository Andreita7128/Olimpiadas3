class Ghost {
    constructor(x, y, fila, columna, mat, image, image2) {
        this.x = x;
        this.y = y;
        this.fila = fila;
        this.columna = columna;
        this.mat = mat;
        this.image = image;
        this.image2 = image2;
    }

    show(v) {
        if (v === false) {
            image(this.image, this.x, this.y);
        } else {
            image(this.image2, this.x, this.y);
        }
    }
    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    move(mat) {
        let dir = parseInt(random(4));
        switch (dir) {
            case 0:
                if (this.columna - 1 >= 0 && this.mat[this.fila][this.columna - 1] === 0) {
                    this.x -= 35;
                    this.columna--;
                }
                break;
            case 1:
                if (this.columna + 1 < this.mat[0].length && this.mat[this.fila][this.columna + 1] === 0) {
                    this.x += 35;
                    this.columna++;
                }
                break;
            case 2:
                if (this.fila - 1 >= 0 && this.mat[this.fila - 1][this.columna] === 0) {
                    this.y -= 35;
                    this.fila--;
                }
                break;
            case 3:
                if (this.fila + 1 < this.mat[0].length && this.mat[this.fila + 1][this.columna] === 0) {
                    this.y += 35;
                    this.fila++;
                }
                break;
        }
    }

}