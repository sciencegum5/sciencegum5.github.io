function barrier() {
    this.dodgeCount = 0;
    this.gravity = 1;
    this.velocity = 0.3;
    this.height = 100;
    this.width = 100;
    this.x = w - this.width;
    this.y = Math.floor((Math.random() * h) + 10);
 this.show = function () {
    imageMode(CENTER);
    image(rock, this.x, this.y, this.width, this.height);
    }
    this.update = function () {
        this.velocity += this.gravity;
        this.x -= this.velocity;
        if (this.x < 0) {
            scoreTrack.play();
            score += barrier.dodgeCount + platform.hit;
            this.dodgeCount ++;
            this.height = Math.floor(Math.random() * 150)+10;
            this.width = Math.floor(Math.random() * 75)+12;
            this.x = w - this.width;
            this.y = Math.floor((Math.random() * h) + 10);
            this.gravity = 1;
            this.velocity = 0.3 + this.dodgeCount/40;
            

        }
    }
}