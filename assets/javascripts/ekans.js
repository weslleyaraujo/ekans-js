var Ekans = (function () {
	var 
		// here is the place to inject private methods
		_private = {},

		// all attributes values goes here
		attributes = {
			size: 3
		};

	function Ekans () {
		this.initialize();
	}

	_private = {
		mapper: function (snake) {
			return snake.map(function (bodypart) {
				bodypart = {
					head: false,
					tail: false
				};

				return bodypart;

			}.bind(this));
		}
	};

	Ekans.prototype.initialize = function () {
		// create the snake object
		this.snake = this.create();
	};

	Ekans.prototype.create = function () {
		return window.Helpers.compose(_private.mapper, window.Helpers.size)((attributes.size - 1));
	};

	return Ekans;

}());
