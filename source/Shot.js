var Shot = function() {
    this.w      = 5;
    this.h      = 2;
    this.speed  = 20;
    this.power  = 1;
    this.x      = 10;
    this.y      = 10;
}

Shot.prototype.create = function() {
    this.graphics = game.instance.add.graphics(0, 0);
    this.graphics.lineStyle(1, 0xFF0000, 1);
    this.draw();
}

Shot.prototype.update = function() {
    this.x += this.speed;
    this.draw();
}

Shot.prototype.draw = function() {
    this.graphics.clear();
    this.graphics.lineStyle(1, 0xFF0000, 0.3);
    this.graphics.drawRect(this.x, this.y, this.w, this.h);
}