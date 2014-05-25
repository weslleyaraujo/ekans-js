var Field = (function () {
	var 
		// here is the place to inject private methods
		_private = {},

		// all attributes values goes here
		attributes = {
			x: 30,
			y: 30
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

		mapLine: function (line) {
			return window.Helpers.size(attributes.y - 1).map(function (index) {
				index = {
					snake: false,
					snakePosition: 0,
					position: index,
					line: line
				};

				return index;

			}.bind(this));
		}
	};

	Field.prototype.initialize = function (args) {
		this.args = args;
		this.set();

		// create the game object
		this.data = this.create();
	};

	Field.prototype.set = function () {
		attributes.x = this.args.x || attributes.x;
		attributes.y = this.args.y || attributes.y;
	};

	Field.prototype.create = function () {
		return window.Helpers.compose(_private.mapper, window.Helpers.size)((attributes.x - 1));
	};

	return Field;

}());