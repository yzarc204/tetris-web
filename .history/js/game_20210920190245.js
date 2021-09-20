class Tetris {
    constructor() {
        this.cvs = null;
        this.ctx = null;
        this.board = null;
        this.brick = null;
        this.score = 0;
        this.init();
        this.startGame();
        this.gameLoop = setInterval(() => this.loop(), 100);
    }

    init() {
        // Create canvas
        this.cvs = document.createElement('canvas');
        this.cvs.width = GAME_WIDTH;
        this.cvs.height = GAME_HEIGHT;
        document.body.appendChild(this.cvs);

        this.ctx = this.cvs.getContext('2d');
    }

    startGame() {
        this.board = new Board(this);
        this.pixel = new Pixel(tetris, 0, 4, PIXEL_COLOR);
    }

    clrscr() {
        this.ctx.fillStyle = GAME_BG_COLOR;
        this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }

    loop() {
        this.clrscr();
        this.update();
        this.draw();
    }

    update() {
    }

    draw() {
        this.board.draw();
    }
};

const tetris = new Tetris();