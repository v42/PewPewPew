var BootState = function () {};

BootState.prototype.preload = function() {};

BootState.prototype.create = function() {
	this.game.stage.backgroundColor = '#fafafa';
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.minWidth = 240;
	this.scale.minHeight = 170;
	this.scale.maxWidth = 2880;
	this.scale.maxHeight = 1920;
	this.scale.pageAlignHorizontally = true;
	this.scale.setScreenSize(true);
	this.state.start('Preload');
};

window.BootState = BootState;
