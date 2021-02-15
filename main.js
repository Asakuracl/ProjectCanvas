class myCanvas {
    
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        canvas.width = "500";
        canvas.height = "500";
        
        for (let i = 0; i < 50; i++){
            this.moveX = Math.floor(Math.random()*500);
            this.moveY = Math.floor(Math.random()*500);

            this.ctx.beginPath();
            this.ctx.moveTo(0 + this.moveX, 10 + this.moveY);
            this.ctx.lineTo(20 + this.moveX, 0 + this.moveY);
            this.ctx.lineTo(20 + this.moveX, 20+ this.moveY);

            this.ctx.closePath()
            this.ctx.lineWidth = 1;
            this.ctx.strokeStyle = '#0f4c81';
            this.ctx.stroke();
        }
        // this.image = image;
        // this.variable = 0;
        // this.dist = -100;
        // this.temps = 5000;
        // this.interv = null;
        // this.demarre = false;
        // this.lancerDiap();

        // //listener on click bouton
        // this.buttonLeft = document.querySelector("#leftArrow");
        // this.buttonLeft.addEventListener("click", this.buttonPrev.bind(this));

        // this.buttonRight = document.querySelector("#rightArrow");
        // this.buttonRight.addEventListener("click", this.buttonNext.bind(this));

        // this.buttonPaus = document.querySelector("#buttonPaus");
        // this.buttonPaus.addEventListener("click", this.buttonStop.bind(this));

        // //listener on keyboard
        // document.addEventListener("keydown", this.keyboard.bind(this));
    }

    // // Change image with click on button
    // buttonNext() {
    //     this.variable++;
    //     if (this.variable > this.container.length - 1) {
    //         this.variable = 0;
    //     }
    //     image.style.marginLeft = -Math.abs((this.variable * this.dist)) + "%";
    // }

    // buttonPrev() {
    //     this.variable--;
    //     if (this.variable < 0) {
    //         this.variable = this.container.length - 1;
    //     }
    //     image.style.marginLeft = -Math.abs((this.variable * this.dist)) + "%";
    // }

    // buttonStop() {
    //     if (this.demarre) {
    //         this.interv = setInterval(this.buttonNext.bind(this), this.temps);

    //     } else {
    //         clearInterval(this.interv);
    //     }
    //     this.demarre = !this.demarre;
    // }

    // // Change image with keyboard
    // keyboard(e) {
    //     if (e.keyCode === 39) {
    //         this.buttonNext();
    //     } else if (e.keyCode === 37) {
    //         this.buttonPrev();
    //     }
    // };

    // //change image auto with interval 
    // lancerDiap() {
    //     this.interv = setInterval(this.buttonNext.bind(this), this.temps);
    // }
}

const canvas = document.querySelector("#myCanvas");

const myCanvasProject = new myCanvas(canvas);