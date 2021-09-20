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
        const x = this.row * this.size;
        const y = this.col * this.size;
        this.tetris.ctx.fillStyle = this.color;
        this.tetris.ctx.strokeStyle = this.color;
        this.tetris.ctx.lineWidth = 1; 
        this.tetris.ctx.strokeRect(x+2, y+2, this.size-4, this.size-2); 
    }
};