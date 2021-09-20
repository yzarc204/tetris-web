class brick {
    constructor(tetris, row, col, shape) {
        this.tetris = tetris;
        this.row = row;
        this.col = col;
        this.map = shape;
        this.dots = [];
        this.color = PIXEL_COLOR;
    }

    init() {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[0].length; row++) {
                
            }
        }
    }

    canFall() {
        
    }

    update() {

    }

    draw() {

    }
};