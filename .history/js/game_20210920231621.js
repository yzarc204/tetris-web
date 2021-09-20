class Tetris {
    constructor() {
        this.cvs = null;
        this.ctx = null;
        this.board = null;
        this.brick = null;
        this.line = 0;
        this.drawLoop = null;
        this.updateLoop = null;
        this.init();
        this.keyboardSettings();
        this.startGame();
    }

    createNewBrick() {
        let r1 = Math.floor(Math.random() * 6);
        let r2 = Math.floor(Math.random() * 6);
        let random = Math.floor((r1 + r2) / 2);
        this.brick = new Brick(this, 0, 3, random);
        console.log(r1, r2, random);
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
            console.log(e.code);
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
                case 'KeyR':
                    this.startGame();
                    break;
                case 'Space':
                    this.brick.drop();
                    break;
            }
        });
    }

    startGame() {
        this.line = 0;
        clearInterval(this.drawLoop);
        clearInterval(this.updateLoop);
        this.board = new Board(this);
        this.createNewBrick();
        this.loop();
    }

    clrscr() {
        this.ctx.fillStyle = GAME_BG_COLOR;
        this.ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    }

    loop() {
        this.updateLoop = setInterval(() => this.update(), 250);
        this.drawLoop = setInterval(() => {
            this.clrscr();
            this.draw();
        }, 17);
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