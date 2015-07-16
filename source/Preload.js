var Preload = function () {};

Preload.prototype.preload = function() {};

Preload.prototype.create = function() {
	this.state.start('Play');
};

window.Preload = Preload;