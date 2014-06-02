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
				line: Math.range(size, 0),
				position: Math.range(size, 0)
			};
		},

		inSnake: function (food, snake) {
			if (snake[food.line] && snake[food.line].line[food.position]) {
				return true;
			}

			return false;
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

		// just for make sure i did this condition :)
		if (this.args.field.data[food.line] && this.args.field.data[food.line].line[food.position]) {
			this.args.field.mixFood(food.line, food.position, true);
		}

	};

	return Food;

}());
