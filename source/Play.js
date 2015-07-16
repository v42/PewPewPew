var Play = function () {};

Play.prototype.preload = function() {};

Play.prototype.create = function() {
	this.spaceship = new Spaceship();
	this.spaceship.create();
};

Play.prototype.update = function() {
	this.spaceship.update();
}

window.Play = Play;