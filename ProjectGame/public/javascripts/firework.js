import {context} from './gameScript.js'

class Firework {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
    }
    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0,
            Math.PI*2, false);
        context.fillStyle = this.color;
        context.fill();
    }
    update() {
        this.draw();
        this.x = this.x + this.speed.x;
        this.y = this.y + this.speed.y;
    }
}
export {Firework}