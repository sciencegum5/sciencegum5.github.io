function ball() {
    this.x = w / 2; //sets x position
    this.y = 0; //sets y position
    this.gravity = 1;
    this.lift = -20;
    this.velocity = 0;
    this.size = 50;
    this.show = function () { //makes the function that allows the ball to be shown
        imageMode(CENTER);
        image(ship, this.x, this.y, this.size, this.size);
    }
    this.up = function () {
        this.velocity += this.lift;
    }
    this.update = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *= 0.9;
        if (this.y > h) {
            this.y = h - this.size;
            this.velocity = -10;
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