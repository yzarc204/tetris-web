class Pixel 
{
    constructor(tetris, row, col, color) {
        this.tetris = tetris;
        this.row = row;
        this.col = col;
        this.color = color;
        this.size = PIXEL_SIZE;
    }

    canFall() {
        if (!this.tetris.board.isEmptyCell(this.row+1, this.col))
            return false;
        if (this.row >= ROW-1) 
            return false;
        return true;
    }

    fall() {
        if (this.canFall())
            this.row++;
    }

    draw() {
        const x = this.row * this.size;
        const y = this.col * this.size;
        // Set color
        this.tetris.ctx.fillStyle = this.color;
        this.tetris.ctx.strokeStyle = this.color;
        this.tetris.ctx.lineWidth = 1; 
        // Draw outline
        this.tetris.ctx.strokeRect(y+2, x+2, this.size-4, this.size-4); 
        // Draw area
        this.tetris.ctx.fillRect(y+5, x+5, this.size-10, this.size-10, this.color);
    }
};