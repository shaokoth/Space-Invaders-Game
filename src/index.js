const gameContainer = document.getElementById("game-container");

const INVADER_ROWS = 4;
const INVADER_COLS = 8;
const PLAYER_SPEED = 5;
const BULLET_SPEED = 5;
const INVADER_BULLET_SPEED = 4;
const INVADER_MOVE_INTERVAL = 100;
const INVADER_FIRE_INTERVAL = 1000;
const INITIAL_LIVES = 3;
const GAME_DURATION = 60;
let timer_death;
