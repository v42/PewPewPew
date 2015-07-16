var Game = function (w, h, Phaser) {
	this.instance = new Phaser.Game(w, h, Phaser.AUTO, '');
	this.instance.state.add('Boot', BootState);
	this.instance.state.add('Preload', Preload);
	this.instance.state.add('Play', Play);
	this.instance.state.start('Boot');
};

window.Game = Game;
