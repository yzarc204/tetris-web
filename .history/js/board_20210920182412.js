class Board
{
    constructor(tetris) {
        this.tetris = tetris;
        this.map = [];
        this.row = ROW;
        this.col = COL;
        this.init();
    }

    init() {
        for (let row = 0; row < this.row; row++) {
            let rowData = [];
            for (let col = 0; col < this.col; col++) {
                rowData.push(_);
            }
            this.map.push(rowData);
        }
    }

    draw() {
        for (let row = 0; row < this.row; row++) {
            for (let col = 0; col < this.col; col++) {
                if (this.map[row][col] == _) 
                    new Pixel(this.tetris, row, col, PIXEL_BG_COLOR);
            }
        }
    }
};