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

    isEmptyCell(row, col) {
        if (row > this.row-1 || col > this.col-1)
           return false;
        return this.map[row][col] == _;
    }

    removeRow(idx) {
        for (let i = idx; i > 0; i--) {
            this.map[i] = this.map[i-1];
        }
        this.map[0] = [_, _, _, _, _, _, _, _, _, _];
    }

    checkFullRow() {
        for (let row = this.row-1; row > 0; row--) {
            let b = 0;
            for (let col = 0; col < this.col; col++) {
                if (this.map[row][col] == 'B')
                    b++;
            }
            if (b == this.col)
                this.removeRow(row);
        }
    }

    update() {

    }

    draw() {
        for (let row = 0; row < this.row; row++) {
            for (let col = 0; col < this.col; col++) {
                let color = PIXEL_BG_COLOR;
                if (this.map[row][col] == B)
                    color = PIXEL_COLOR;
                new Pixel(this.tetris, row, col, color).draw();
            }
        }
    }
};