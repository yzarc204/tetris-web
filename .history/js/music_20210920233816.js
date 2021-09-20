class Music {
    constructor() {
        this.song = new Audio();
        song.src = '../src/background.mp3';
    }

    play() {
        this.song.play();
    }
};