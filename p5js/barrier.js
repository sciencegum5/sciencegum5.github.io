function barrier() {
    this.dodgeCount = 0;
    this.gravity = 1;
    this.velocity = 5;
    this.height = 100;
    this.width = 100;
    this.x = w - this.width;
    this.y = Math.floor((Math.random() * h) + 10);
 this.show = function () {

        fill(color(r, g, b));
        rect(this.x, this.y, this.width, this.height);
    }
    this.update = function () {
        this.velocity += this.gravity;
        this.x -= this.velocity;
        if (this.x < 0) {
            this.dodgeCount ++;
            this.height = Math.floor(Math.random() * 257);
            this.width = Math.floor(Math.random() * 257);
            this.x = w - this.width;
            this.y = Math.floor((Math.random() * h) + 10);
            this.gravity = 1;
            this.velocity = 5 + this.dodgeCount;
            

        }
    }
}