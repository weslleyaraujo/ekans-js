var Game = (function () {
	var 
		// here is the place to inject private methods
		_private = {},

		// all attributes values goes here
		attributes = {
			initial: 0
		};

	function Game (args) {
		args = args || {};
		this.initialize(args);
	}

	_private = {

	};

	Game.prototype.initialize = function (args) {
		this.args = args;
		this.set();
	};

	Game.prototype.set = function () {
		_private.view = new FieldView({
			snake: new Snake(),
			field: new Field()
		});

	};

	return Game;

}());
