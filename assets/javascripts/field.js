var Field = (function () {
	var 
		// here is the place to create private methods
		_private = {},

		// here are placed all configs
		config = {
			x: 60,
			y: 60
		};

	function Field (args) {
		args = args || {};
		this.initialize(args);
	}

	_private = {
		size: function (index) {
			return _private.tail(1, index);
		},

		tail: function (i, size) {
			return [i].concat(i < size ? _private.tail(i+1, size) : []);
		},

		compose: function (a, b) {
			return function (c) {
				return a(b(c));
			};
		},
		
		mapper: function (size) {
			return size.map(function (index) {
				index = {
					line: []
				};
				return index;
			});
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
		return _private.compose(_private.mapper, _private.size)(this.x);
	};

	return Field;

}());
