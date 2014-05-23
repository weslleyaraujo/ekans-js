var Field = (function () {
	var 
		// here is the place to inject private methods
		_private = {},

		// all config values goes here
		config = {
			x: 60,
			y: 60
		};

	function Field (args) {
		args = args || {};
		this.initialize(args);
	}

	_private = {
		mapper: function (size) {
			return size.map(function (index) {
				index = {
					line: _private.mapLine(index)
				};

				return index;

			}.bind(this));
		},

		mapLine: function (index) {
			return window.Helpers.size(this.y - 1).map(function (index) {
				index = {
					snake: false,
					snakePosition: 0
				};

				return index;

			}.bind(this));
		}
	};

	Field.prototype.initialize = function (args) {
		this.args = args;
		this.set();

		// create the game object
		this.game = this.create();
	};

	Field.prototype.set = function () {
		this.x = this.args.x || config.x;
		this.y = this.args.y || config.y;
	};

	Field.prototype.create = function () {
		return window.Helpers.compose(_private.mapper, window.Helpers.size)(this.x - 1);
	};

	return Field;

}());
