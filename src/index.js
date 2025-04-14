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

function setupHeader() {
    const header = document.createElement('div');
    header.id = "header";
    header.style.height = "40px";
    header.style.top = "10px";
    header.style.border = "1px solid rgb(255, 255, 255)";
    gameContainer.appendChild(header);
}

function createHUD() {
    createCountdown();
    createScore();
    createLives();
}

function createCountdown() {
    const countdownElement = document.createElement('div');
    countdownElement.id = 'countdown';
    countdownElement.innerHTML = `
        <p style="margin: 0; color: rgb(255, 255, 255);">
            Timer: <span id="countdownValue">${gameState.countdown}</span>
        </p>`;
    countdownElement.style.cssText = 'position:absolute;top:10px;left:140px;font:bold 20px Arial;';
    gameState.ecran.appendChild(countdownElement);
}

function createScore() {
    const scoreElement = document.createElement('div');
    scoreElement.id = 'score';
    scoreElement.innerHTML = `
        <p style="margin: 0; color: rgb(255, 255, 255);">
            Score: <span id="scoreValue">${gameState.score}</span>
        </p>`;
    scoreElement.style.cssText = 'position:absolute;top:10px;left:20px;font:bold 20px Arial;';
    gameState.ecran.appendChild(scoreElement);
}

function createLives() {
    const livesContainer = document.createElement('div');
    livesContainer.style.cssText = 'position:absolute;top:2px;left:30px;';
    for (let i = 0; i < INITIAL_LIVES; i++) {
        const life = createLifeElement(i);
        livesContainer.appendChild(life);
    }
    gameState.ecran.appendChild(livesContainer);
}

function createLifeElement(index) {
    const life = document.createElement('img');
    life.className = 'life';
    life.src = "./img/life.png";
    life.style.cssText = `
        position: absolute;
        width: 30px;
        height: 30px;
        left: ${gameState.ecran.offsetWidth - (index + 1) * 40 - 30}px;
        top: 2px;
    `;
    return life;
}

function createInvaders() {
    const fragment = document.createDocumentFragment();

    for (let row = 0; row < INVADER_ROWS; row++) {
        for (let col = 0 + row; col < INVADER_COLS - row; col++) {
            const invader = createInvaderElement(row, col);
            fragment.appendChild(invader);
            gameState.invaders.push({
                element: invader,
                x: col * 60 + 30,
                y: row * 60 + 50
            });
        }
    }
    gameState.ecran.appendChild(fragment);
}

function createInvaderElement(row, col) {
    const isSpecial = row === col || col === INVADER_COLS - row - 1;
    const invader = document.createElement('img');
    invader.src = isSpecial ? './img/enemy2.png' : './img/invader.png';
    invader.style.cssText = `
        position: absolute;
        width: ${isSpecial ? 30 : 40}px;
        height: ${isSpecial ? 30 : 40}px;
        left: ${col * 60 + 30}px;
        top: ${row * 60 + 50}px;
    `;
    return invader;
}

function updateInvaders(timestamp) {
    if (timestamp - gameState.lastInvaderFireTime > INVADER_FIRE_INTERVAL) {
        invaderFiring();
        gameState.lastInvaderFireTime = timestamp;
    }

    let shouldReverse = false;
    gameState.invaders.forEach(invader => {
        const newX = invader.x + 1 * gameState.invaderDirection;
        invader.x = newX;
        invader.element.style.left = `${newX}px`;

        if (newX > gameState.ecran.offsetWidth - 40 || newX < 10) {
            shouldReverse = true;
        }
    });

    if (shouldReverse) {
        gameState.invaderDirection *= -1;
        gameState.invaders.forEach(invader => {
            invader.y += 10;
            invader.element.style.top = `${invader.y}px`;
            if (invader.y > gameState.ecran.offsetHeight - 100) {
                endGame(false);
            }
        });
    }
}