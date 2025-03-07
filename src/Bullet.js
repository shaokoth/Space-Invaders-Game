import { Entity } from './Entity.js';

export class Bullet extends Entity {
    constructor() {
        super({className: 'bullet'});
        this.SPEED = 2;
        
        this.setX(window.innerWidth / 2);
        this.setY(window.innerHeight - 80);
    }
}