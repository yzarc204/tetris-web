class brick {
    constructor(tetris, row, col, shape) {
        this.tetris = tetris;
        this.row = row;
        this.col = col;
        this.map = shape;
        this.pixels = [];
        this.color = PIXEL_COLOR;
    }

    init() {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[0].length; row++) {
                let newPixel = new Pixel(this.tetris, this.row + row, this.col + col, this.color);
                this.pixels.push(newPixel);
            }
        }
    }

    canFall() {
        this.pixels.forEach(pixel => {
            if (!pixel.canFall())
                return false;
        });
        return true;
    }

    fall() {

    }

    update() {

    }

    draw() {
        this.pixels.forEach(pixel => pixel.draw());
    }
};