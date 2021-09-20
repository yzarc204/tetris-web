class Tetris {
    constructor() {
        this.cvs = null;
        this.ctx = null;
        this.board = null;
        this.brick = null;
        this.score = 0;
        this.init();
        this.keyboardSettings();
        this.startGame();
    }

    createNewBrick() {
        let r = Math.floor(Math.random() * 6);
        this.brick = new Brick(this, 0, 3, r);
    }

    init() {
        // Create canvas
        this.cvs = document.createElement('canvas');
        this.cvs.width = GAME_WIDTH;
        this.cvs.height = GAME_HEIGHT;
        document.body.appendChild(this.cvs);

        this.ctx = this.cvs.getContext('2d');
    }

    keyboardSettings() {
        document.addEventListener('keydown', e => {
            switch(e.code) {
                case 'ArrowLeft': 
                    this.brick.moveLeft(); 
                    break;
                case 'ArrowRight':
                    this.brick.moveRight();
                    break;
                case 'ArrowUp':
                    this.brick.rotate();
                    break;
                case 'ArrowDown':
                    this.brick.fall();
                    break;
            }
        });
    }

    startGame() {
        this.board = new Board(this);
        this.createNewBrick();
    }

    clrscr() {
        this.ctx.fillStyle = GAME_BG_COLOR;
        this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }

    loop() {
        setInterval(() => this.update(), 500);
        setInterval(() => {
            this.draw();
        })
    }

    update() {
        this.board.update();
        this.brick.update();
    }

    draw() {
        this.board.draw();
        this.brick.draw();
    }
};

const tetris = new Tetris();