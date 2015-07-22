var Spaceship = function() {
    this.x     = 100;
    this.y     = 100;
    this.speed = 10;
    this.shots = [];
};

Spaceship.prototype.create = function() {
    this.graphics = game.instance.add.image(this.x, this.y, 'spaceship');
}

Spaceship.prototype.update = function() {
    if(game.instance.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        this.graphics.x -= this.speed;
    }
    if(game.instance.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        this.graphics.x += this.speed;
    }
    if(game.instance.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        this.graphics.y -= this.speed;
    }
    if(game.instance.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        this.graphics.y += this.speed;
    }
    if(game.instance.input.keyboard.isDown(Phaser.Keyboard.A)) {
        this.shoot();
    }
    this.shots.forEach(function(shot) {
        shot.update();
    });
}

Spaceship.prototype.shoot = function() {
    var pew = new Shot();
    pew.x = this.x + this.w;
    pew.y = this.h / 2;
    pew.create();
    this.shots.push(pew);
}

window.Spaceship = Spaceship;