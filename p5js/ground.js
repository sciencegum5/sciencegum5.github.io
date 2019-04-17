function ground() {
    this.height = 20;
    this.width = w;
    this.x = 0;
    this.y = h - this.height;
    
    this.show = function () {
        fill(color("brown"));
        rect(this.x, this.y, this.width, this.height);
    }
    }