class Brick {
    constructor(tetris, row, col, shape) {
        this.tetris = tetris;
        this.row = row;
        this.col = col;
        this.map = [[B, B, B],
        [_, B, _]];
        this.pixels = [];
        this.color = PIXEL_COLOR;
        this.init();
    }

    init() {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[0].length; row++) {
                if (this.map[row][col] == B) {
                    let newPixel = new Pixel(this.tetris, this.row + row, this.col + col, this.color);
                    this.pixels.push(newPixel);
                    console.log(row, col);
                }
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