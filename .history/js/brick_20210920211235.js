class Brick {
    constructor(tetris, row, col, shape) {
        this.tetris = tetris;
        this.row = row;
        this.col = col;
        this.map = BRICK_SHAPES[shape];
        this.pixels = [];
        this.color = PIXEL_COLOR;
        this.init();
    }

    init() {
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[0].length; col++) {
                if (this.map[row][col] == B) {
                    let newPixel = new Pixel(this.tetris, this.row+row, this.col+col, PIXEL_COLOR);
                    this.pixels.push(newPixel);
                }
            }
        }
    }

    addNewBrickToBoard() {
        this.pixels.forEach(pixel => {
            this.tetris.board.map[pixel.row][pixel.col] = B;
        });
    }

    canMoveLeft() {
        let doesCanMoveLeft = true;
        this.pixels.forEach(pixel => {
            if (!pixel.canMoveLeft())
                doesCanMoveLeft = false;
        })
        return doesCanMoveLeft;
    }

    moveLeft() {
        if (this.canMoveLeft()) {
            this.col--;
            this.pixels.forEach(pixel => pixel.moveLeft());
        }
    }

    canMoveRight() {
        let doesCanMoveRight = true;
        this.pixels.forEach(pixel => {
            if (!pixel.canMoveRight())
                doesCanMoveRight = false;
        })
        return doesCanMoveRight;
    }

    moveRight() {
        if (this.canMoveRight()) {
            this.col--;
            this.pixels.forEach(pixel => pixel.moveRight());
        }
    }

    canRotate(newMap) {
        let doesCanRotate = true;
        return doesCanRotate;
    }

    rotate() {
        const n = this.map.length;
        let newMap = [n][n];
        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; n++) {
                newMap[n][n] = this.map[n-col-1][row];
            }
        }
        this.map = newMap;
    }

    canFall() {
        let doesCanFall = true;
        this.pixels.forEach(pixel => {
            if (!pixel.canFall())
                doesCanFall = false;
        })
        return doesCanFall;
    }

    fall() {
        if (this.canFall()) {
            this.row++;
            this.pixels.forEach(pixel => pixel.fall());
        } else {
            this.addNewBrickToBoard();
        }
    }

    update() {
        this.fall();
    }

    draw() {
        this.pixels.forEach(pixel => pixel.draw());
    }
};