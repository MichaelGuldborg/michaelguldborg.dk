
import CanvasHandler from './CanvasHandler';

export default class Particle {

    constructor(options) {
        this.canvas = CanvasHandler.getInstance();


        this.x = Math.floor(options.x) || 1;
        this.y = Math.floor(options.y) || 1;
        this.radius = Math.floor(Math.random() * 2 + 3);
        this.color = "black";
        this.speed = options.speed || Math.floor(Math.random() * 2 + 0.5);
        this.type = options.type || 'normal';
    }

    update() {
        this.x -= this.speed;
        this.y += this.speed;

        if (this.x < -10) {
            this.x = Math.floor(this.canvas.width + 10 + Math.random() * 30);
        }
        if (this.y > this.canvas.height + 10) {
            this.y = Math.floor(-10 + Math.random() * -30);
        }
    }

    speedUp(speed) {
        this.speed += speed || 0.2;
    }

    speedDown(speed) {
        let _speed = speed || 0.8
        if (this.speed > _speed) this.speed -= _speed;
    }

    minimize(size) {
        let _size = size || 2;
        if (this.radius > _size) this.radius -= _size;
    }

    magnify(size) {
        this.radius += size || 2;
    }

    render() {
        let self = this;
        self.canvas.context.beginPath();
        self.canvas.context.fillStyle = self.color;
        self.canvas.context.arc(self.x, self.y, self.radius, 0, Math.PI*2, false);
        self.canvas.context.fill();
    }
}
