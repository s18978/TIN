import {Player} from './player.js'
import {Laser} from './laser.js'
import {Enemy} from './enemy.js'
import {Firework} from './firework.js'

const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext('2d');
let background;
let tower;

function start() {
    canvas.width = 800;
    canvas.height = 600;
    context.color = "black";
    context.fillRect(0,0,canvas.width, canvas.height);
}
start();

const scoreElement = document.querySelector('#scoreElement');

let player;
const x = canvas.width/2;
const y = canvas.height/2;

const lasers = [];
const enemies = [];
const fireworks = [];

function tossEnemies() {
    setInterval(() => {
        const radius = Math.random()*(20)+10;
        let x; let y;

        x = -5;
        y = Math.floor(Math.random()*canvas.height);
        const color = '#'+Math.floor(Math.random()*16777215).toString(16);
        const speed = Math.floor(Math.random()*3 + 1);
        enemies.push(new Enemy(x,y,radius,color,speed))}, 1000);
}
let animationId;
let score = 0;
function animate() {
    animationId = requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(background,0,0,canvas.width,canvas.height);
    player.draw();
    fireworks.forEach(firework => {
        firework.update();
    })
    lasers.forEach((laser, index) => { laser.update();

    // remove from edges of screen
    if((laser.x + laser.radius) < 0 ||
        (laser.x - laser.radius) > canvas.width ||
        (laser.y + laser.radius) < 0 ||
        (laser.y - laser.radius) > canvas.height) {
        setTimeout(() => {
            lasers.splice(index,1); }, 0)
    }
    });
    enemies.forEach((enemy, index) => {
        enemy.update();
        if (!enemy.passed) {
            const distance = canvas.width + enemy.radius - enemy.x;
            //end game
            if (distance < 0) {
                player.decreaseLives();
                enemy.passed = true;
                setTimeout( () => {lasers.splice(index,1)},0);
            }
            if (player.lives < 1) {
                cancelAnimationFrame(animationId);
            }
            lasers.forEach((laser, laserIndex) => {
                const distance = Math.hypot(laser.x - enemy.x, laser.y - enemy.y);
                // when laser touches enemy
                if (distance - enemy.radius - laser.radius < 1) {
                    //increasing score
                    score += 50;
                    scoreElement.innerHTML = score;

                    //create explosions
                    for (let i = 0; i < 7; i++) {
                        fireworks.push(new Firework(laser.x, laser.y, 3, enemy.color,
                            {x: Math.random() - 0.5, y: Math.random() - 0.5}))
                    }
                    setTimeout(() => {
                        enemies.splice(index, 1);
                        lasers.splice(laserIndex, 1);
                    }, 0)
                }
            })
        }
    });
}
canvas.addEventListener('click', (event) => {
    let rect = canvas.getBoundingClientRect();

    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    let dirX = mouseX - x;
    let dirY = mouseY - y;

    let dist = Math.sqrt(Math.pow(dirX,2) + Math.pow(dirY,2));

    const speed = {
        x: dirX/dist * 5,
        y: dirY/dist * 5
    }

    lasers.push(new Laser(canvas.width/2, canvas.height/2,
        5, 'red', speed))
});

function loadImages(){
    background = new Image();
    background.src = 'http://localhost:3000/images/starsBG.png';
    background.onload = () => {
        tower = new Image();
        tower.src = 'http://localhost:3000/images/tower.png';
        tower.onload = () => {
            player = new Player(x, y, 20, tower);
            animate();
            tossEnemies();
        }
    }
}

loadImages();


export {canvas,context};