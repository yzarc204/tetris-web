class Pixel 
{
    constructor(tetris, row, col, color) {
        this.tetris = tetris;
        this.ctx = this.tetris.ctx;
        this.row = row;
        this.col = col;
        this.color = color;
        this.size = PIXEL_SIZE;
    }

    draw() {
        this.tetris.ctx.fillStyle = this.color;
        this.tetris.ctx
    }
};