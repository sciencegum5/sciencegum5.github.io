function ground() {
    this.height = 70;
    this.width = w;
    this.x = 0;
    this.y = h - this.height;
    
    this.show = function () {
        fill('rgba(0, 221, 255, 0.3)');
        rect(this.x, this.y, this.width, this.height);
    }
    }