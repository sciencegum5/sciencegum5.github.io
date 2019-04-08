function ball() {
    this.x = w / 2; //sets x position
    this.y = 0; //sets y position
    this.gravity = 1;
    this.lift = -5;
    this.velocity = 0;
    this.show = function () { //makes the function that allows the ball to be shown
        imageMode(CENTER);
        image(img, this.x, this.y, 50, 50);
    }
    this.up = function () {
        this.velocity += this.lift;
    }
    this.update = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *= 1;
        if (this.y > h) {
            this.y = h;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.velocity = 0;
            this.y = 0;
        }
        this.move = function () {
        if ((keyIsDown(65)) && (this.x > 0)) { //checks if box is too far left, if to far left stop moving
            this.x -= userSpeed; //moves player left

        }
        if ((keyIsDown(68)) && (this.x < w - 50)) { //checks if player is too far right
            this.x += userSpeed; //moves player right

        }
        }
       
        
    }
}