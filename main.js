class myCanvas {
    
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        canvas.width = "500";
        canvas.height = "500";
        // this.moveX = Math.floor(Math.random() * canvas.width);
        // this.moveY = Math.floor(Math.random() * canvas.height);
        this.moveX = 0;
        this.moveY = 10;
        this.speed = 10
    

        //
      

        //listener on click bouton
        this.clickOnCanvas = document.querySelector("canvas");
        this.clickOnCanvas.addEventListener("click", this.clickCanvasEffect.bind(this));
   
    }
    // event on click
    clickCanvasEffect(){
        requestAnimationFrame(this.clickCanvasEffect.bind(this));
        this.ctx.clearRect(0, 0, canvas.height, canvas.width);

        this.ctx.beginPath();
        this.ctx.moveTo(0 + this.moveX, 10 + this.moveY);
        this.ctx.lineTo(20 + this.moveX, 0 + this.moveY);
        this.ctx.lineTo(20 + this.moveX, 20 + this.moveY);

        this.ctx.closePath()
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = '#0f4c81';
        this.ctx.stroke();

        this.moveX += this.speed;
        this.moveY += this.speed;
        // for (let i = 0; i < 50; i++) {
        //     this.moveX = Math.floor(Math.random() * canvas.width);
        //     this.moveY = Math.floor(Math.random() * canvas.height);
        //     this.color = ['red']

        //     this.ctx.beginPath();
        //     this.ctx.moveTo(0 + this.moveX, 10 + this.moveY);
        //     this.ctx.lineTo(20 + this.moveX, 0 + this.moveY);
        //     this.ctx.lineTo(20 + this.moveX, 20 + this.moveY);

        //     this.ctx.closePath()
        //     this.ctx.lineWidth = 1;
        //     this.ctx.strokeStyle = '#0f4c81';
        //     this.ctx.stroke();
        // }
    }

}

const canvas = document.querySelector("#myCanvas");

const myCanvasProject = new myCanvas(canvas);