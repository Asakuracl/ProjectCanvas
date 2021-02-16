class myCanvas {
    
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        canvas.width = "500";
        canvas.height = "500";
        this.moveX = Math.floor(Math.random() * canvas.width);
        this.moveY = Math.floor(Math.random() * canvas.height);
        this.speedX = 1;
        this.speedY = 1;
        this.triangleLength = 20;

        //listener on load
        window.addEventListener("load", this.animate.bind(this));
    }

    // event on click
    animate(){
        requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, canvas.height, canvas.width);
        this.ctx.beginPath();
        this.ctx.moveTo(0 + this.moveX, 10 + this.moveY);
        this.ctx.lineTo(20 + this.moveX, 0 + this.moveY);
        this.ctx.lineTo(20 + this.moveX, 20 + this.moveY);
        this.ctx.closePath()
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = '#0f4c81';
        this.ctx.stroke();

        (this.moveX + this.triangleLength > canvas.width || this.moveX < 0) ? this.speedX = -this.speedX: this.speedX;
        (this.moveY + this.triangleLength > canvas.height || this.moveY < 0) ? this.speedY = -this.speedY : this.speedY;
   
        this.moveX += this.speedX;
        this.moveY += this.speedY;

    }

}

const canvas = document.querySelector("#myCanvas");

const myCanvasProject = new myCanvas(canvas);