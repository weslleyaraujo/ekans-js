var Food = (function () {
	var 
		// here is the place to inject private methods
		_private = {},

		// all attributes values goes here
		attributes = {
		};

	function Food (args) {
		args = args || {};
		this.initialize(args);
	}

	_private = {
		setFood: function (size) {
			return {
				line: Math.range((size - 1), 0),
				position: Math.range((size - 1), 0)
			};
		},

		inSnake: function (food, snake) {
			var isIn = false;
			snake.forEach(function (bodypart) {
				if (bodypart.line === food.line && bodypart.position === food.position) {
					isIn = true;
				}
			});
			return isIn;
		}
	};

	Food.prototype.initialize = function (args) {
		this.args = args;
		this.args.y = this.args.field.data.length;
		this.args.x = this.args.field.data[0].line.length; 
	};

	Food.prototype.add = function () {
		var food = _private.setFood(this.args.x);

		// verificar se o field inteiro ja não é parte da snake, se for o cara ganhou :D

		// is this piece of food a part of snake?
		while(_private.inSnake(food, this.args.snake.data)) {
			food = _private.setFood(this.args.x);
		}

		this.args.field.mixFood(food.line, food.position, true);
	};

	return Food;

}());
