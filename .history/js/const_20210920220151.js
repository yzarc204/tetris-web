const PIXEL_SIZE = 24;

const B = true;
const _ = false;

const ROW = 20;
const COL = 10;

const GAME_WIDTH = PIXEL_SIZE * COL;
const GAME_HEIGHT = PIXEL_SIZE * ROW;

const GAME_BG_COLOR = '#86966c';
const PIXEL_COLOR = '#000000';
const PIXEL_BG_COLOR = '#9EAD86';

const FRAME = 10;
const SLEEP = Math.floor(1000 /  FRAME);
const SPEED = 1;

// const BRICK_SHAPES = [
//     [
//         [
//             [B, B, B, B]
//         ]
//     ],
//     [
//         [B, B, B],
//         [_, B, _]
//     ],
//     [
//         [B, B, _],
//         [_, B, B]
//     ],
//     [
//         [_, B, B],
//         [B, B, _]
//     ],
//     [
//         [B, B, B],
//         [_, _, B]
//     ],
//     [
//         [B, B, B],
//         [B, _, _]
//     ],
//     [
//         [B, B, B],
//         [_, _, B]
//     ],
// ];