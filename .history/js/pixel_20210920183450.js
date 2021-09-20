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
        // Set color
        this.tetris.ctx.fillStyle = this.color;
        this.tetris.ctx.strokeStyle = this.color;
        this.tetris.ctx.lineWidth = 1; 
        // Draw outline
        this.tetris.ctx.strokeRect(x+2, y+2, this.size-4, this.size-4); 
        // Draw area
        this.tetris.ctx.fillRect(x+4, y+4, this.size-8, this.size-8, this.color);
    }
};