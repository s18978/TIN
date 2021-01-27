import {context} from "./gameScript.js";

class Enemy {
    constructor(x, y, radius, color, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.passed = false;
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
        this.x = this.x + this.speed;
    }
}
export {Enemy}