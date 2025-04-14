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

// Game State
const gameState = {
    player: document.querySelector('img'),
    ecran: document.getElementById('game-container'),
    invaders: [],
    bullets: [],
    invaderBullets: [],
    lives: INITIAL_LIVES,
    score: 0,
    countdown: GAME_DURATION,
    isPaused: false,
    invaderDirection: 1,
    lastFireTime: 0,
    lastInvaderFireTime: 0,
    playerX: 0,
    playerY: 0,
    keys: {
        ArrowLeft: false,
        ArrowRight: false,
        Space: false,
        p: false,
        r: false,
        Enter: false
    }
};

gameState.player.width = 90;
gameState.player.height = 50;

// Initialization
function init() {
    setupPlayer();
    setupHeader();
    createHUD();
    createInvaders();
    updateGameState();
    gameLoop();
}

function setupPlayer() {
    gameState.player.style.position = 'absolute';
    gameState.player.style.display = "block";
    gameState.playerX = (gameState.ecran.offsetWidth - gameState.player.offsetWidth) / 2;
    gameState.playerY = gameState.ecran.offsetHeight - gameState.player.offsetHeight;
    positionPlayer();
}