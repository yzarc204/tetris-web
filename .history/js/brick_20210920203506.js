class Brick {
    constructor(tetris, row, col, shape) {
        this.tetris = tetris;
        this.row = 0;
        this.col = 4;
        this.map = BRICK_SHAPES[shape];
        this.pixels = [];
        this.color = PIXEL_COLOR;
        this.init();
    }

    init() {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[0].length; col++) {
                if (this.map[row][col] == B) {
                    let newPixel = new Pixel(this.tetris, this.row+row, this.col+col, PIXEL_COLOR);
                    this.pixels.push(newPixel);
                }
            }
        }
    }

    canFall() {
        let doesCanFall = true;
        this.pixels.forEach(pixel => {
            if (!pixel.canFall())
                doesCanFall = false;
        })
        return doesCanFall;
    }

    fall() {
        if (this.canFall()) {
            this.pixels.forEach(pixel => pixel.fall());
        }
    }

    update() {
        this.fall();
    }

    draw() {
        this.pixels.forEach(pixel => pixel.draw());
    }
};