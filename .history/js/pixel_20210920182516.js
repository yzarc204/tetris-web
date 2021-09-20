class Pixel 
{
    constructor(tetris, row, col, color) {
        this.tetris = tetris;
        this.row = row;
        this.col = col;
        this.color = color;
        this.size = PIXEL_SIZE;
    }

    draw() {
        this.tetris.ctx.fillStyle = this.color;
        this.tetris.ctx.strokeStyle = this.color;
        this.tetris.ctx.strokeRect(this.row+2, this.col+2, this.size-4, this.size-4);
    }
};