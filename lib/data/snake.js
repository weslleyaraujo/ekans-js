var Snake = (function () {
	var 
		// here is the place to inject private methods
		_private = {},

		// all attributes values goes here
		attributes = {
			size: 1
		};

	function Snake () {
		this.initialize();
	}

	_private = {
		mapper: function (snake) {
			return snake.map(function (bodypart) {
				bodypart = {
					head: false,
					tail: false,
					line: 0,
					position: 0
				};

				return bodypart;

			}.bind(this));
		}
	};

	Snake.prototype.initialize = function () {
		// create the snake object
		this.data = this.create();
	};

	Snake.prototype.create = function () {
		return window.Helpers.compose(_private.mapper, window.Helpers.size)((attributes.size - 1));
	};

	return Snake;

}());
