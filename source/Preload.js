var Preload = function () {};

Preload.prototype.preload = function() {
	game.instance.load.image('spaceship', 'assets/img/spaceship.png');
};

Preload.prototype.create = function() {
	this.state.start('Play');
};

window.Preload = Preload;