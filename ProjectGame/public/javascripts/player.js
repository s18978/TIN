import {canvas, context} from './gameScript.js'

class Player {
    constructor(x, y, radius, image) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.img = image;
        this.lives = 3;

    }
    draw() {
        context.drawImage(this.img,0,0,20,20,this.x-this.radius/2,this.y-this.radius/2,this.radius*2,this.radius*2);
        context.fillStyle = 'gray';
        context.fillRect(10,10,100 + 3,40);
        for (let i = 0; i < this.lives; i++) {
            this.drawLives(i);
        }
    }
    drawLives(i) {
        context.fillStyle = 'red';
        context.fillRect(15 + i*30+i*1,15,30,30);
    }
    decreaseLives() {
        this.lives = this.lives - 1;
    }
}
export{Player}