function platform() {
    this.height = 32;
    this.width = 100;
    this.x = w/2 - this.width/2;
    this.y = h/2 - this.height/2;
    this.hit = 0;
    this.show = function () {
        fill(color(r,g,b));
        rect(this.x, this.y, this.width, this.height);
        
    }
    }