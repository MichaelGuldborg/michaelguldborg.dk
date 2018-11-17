import Particle from "./Particle";

const raf = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };

class CanvasHandler {

    static instance;
    canvas;
    context;
    width;
    height;
    particles = [];

    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
    }

    static initCanvasHandler(canvas) {
        console.log("initCanvasHandler: " + canvas);
        CanvasHandler.instance = new CanvasHandler(canvas);
        return CanvasHandler.instance;
    }

    static getInstance() {
        return CanvasHandler.instance;
    }

    initParticles(number) {
        for (let i = 0; i < number; i++) {
            const x = Math.random() * this.width + this.width;
            const y = Math.random() * this.height;
            this.particles.push(new Particle({x, y}));
        }
    }

    startAnimation(canvasHandler) {
        canvasHandler.context.clearRect(0, 0, canvasHandler.width, canvasHandler.height);
        for (let i = 0; i < canvasHandler.particles.length; i++) {
            canvasHandler.particles[i].render();
            canvasHandler.particles[i].update();
        }
        raf(() => this.startAnimation(canvasHandler));
    }
}

export default CanvasHandler;
