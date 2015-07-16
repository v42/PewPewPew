var Spaceship = function() {
    this.x     = 100;
    this.y     = 0;
    this.w     = 100;
    this.h     = 100;
    this.speed = 10;
};

Spaceship.prototype.create = function() {
    this.graphics = game.instance.add.graphics(0, 0);

    // draw a rectangle
    this.graphics.lineStyle(2, 0x0000FF, 1);
    this.graphics.drawRect(this.x, this.y, this.w, this.h);
}

Spaceship.prototype.update = function() {
    if(game.instance.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        this.x -= this.speed;
    }
    if(game.instance.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        this.x += this.speed;
    }
    if(game.instance.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        this.y -= this.speed;
    }
    if(game.instance.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        this.y += this.speed;
    }

    this.graphics.clear();
    this.graphics.lineStyle(2, 0x0000FF, 1);
    this.graphics.drawRect(this.x, this.y, this.w, this.h);
}

window.Spaceship = Spaceship;