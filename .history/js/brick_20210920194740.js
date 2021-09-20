class Brick {
    constructor(tetris, row, col, shape) {
        this.tetris = tetris;
        this.row = row;
        this.col = col;
        this.map = BRICK_SHAPES[0];
        this.pixels = [];
        this.color = PIXEL_COLOR;
        this.init();
    }

    init() {
        
    }

    canFall() {
        this.pixels.forEach(pixel => {
            if (!pixel.canFall())
                return false;
        });
        return true;
    }

    fall() {
        if (this.canFall()) {
            this.pixels.forEach(pixel => pixel.fall());
            this.row++;
        }
    }

    update() {
        this.fall();
    }

    draw() {
        this.pixels.forEach(pixel => pixel.draw());
    }
};