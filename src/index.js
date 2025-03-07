import { Ship } from './Ship.js';
import { Bullet } from './Bullet.js'

const keys = {
    a: false,
    d: false,
    [' ']: false,
};

document.addEventListener('keydown', (event)=> {
    keys[event.key] = true;
});

document.addEventListener('keyup', (event)=> {
    keys[event.key] = false;

});

const ship = new Ship();
const bullets = [];


const update = () => {
    if (keys['d'] && ship.x < window.innerWidth - ship.SHIP_IMAGE_WIDTH) 
        {
        ship.moveRight();
    } else if (keys['a'] && ship.x > 0){
        ship.moveLeft();
    }

    if (keys[' ']) {
        // Create a new bullet
        bullets.push(new Bullet());
    }
};

setInterval(update, 20);