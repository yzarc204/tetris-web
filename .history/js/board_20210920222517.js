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
        this.map[idx] = [_, _, _, _, _, _, _, _, _, _];
        for (let row = 0; row < idx; row++) {
            this.map[row] = this.map[row+1];
        }
    }

    update() {
        let fullRows = [];
        this.map.map((col, idx) => {
            let c = 0;
            col.map(value => {
                if (value == B)
                    c++;
            });
            if (c == ROW)
                fullRows.push(idx);
        });
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