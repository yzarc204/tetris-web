class Pixel 
{
    constructor(tetris, row, col, color) {
        this.tetris = tetris;
        this.row = row;
        this.col = col;
        this.color = color;
        this.size = PIXEL_SIZE;
    }

    canMoveLeft() {
        if (this.col <= 0)
            return false;
        if (!this.tetris.board.isEmptyCell(this.row, this.col-1))
            return false;
        return true;
    }

    moveLeft() {
        if (this.canMoveLeft())
            this.col--;
    }

    canMoveRight() {
        if (this.col >= COL-1)
            return false;
        if (!this.tetris.board.isEmptyCell(this.row, this.col+1))
            return false;
        return true;
    }

    moveRight() {
        if (this.canMoveRight())
            this.col++;
    }

    canFall() {
        if (this.tetris.board.isEmptyCell(this.row+1, this.col) && this.row < ROW)
            return true;
    }

    fall() {
        if (this.canFall())
            this.row++;
        else
            this.tetris.board.addNewPixel(this.row, this.col);
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