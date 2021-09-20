class Tetris {
    constructor() {
        this.cvs = null;
        this.ctx = null;
        this.board = null;
        this.brick = null;
        this.score = 0;
        this.init();
        this.startGame();
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
        this.board.draw();
        console.log('draw');

    }

    clrscr() {

    }

    loop() {

    }

    update() {

    }

    draw() {

    }
};

const tetris = new Tetris();