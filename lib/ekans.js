var Ekans = (function () {
	var 
		// here is the place to inject private methods
		_private = {},

		// all attributes values goes here
		attributes = {
			direction: '',
			speed: 0,
			died: false,
			initial: {
				line: 1,
				position: 1,
				direction: 'forward',
				speed: 200
			},
			keys: {
				left: 37,
				up:  38,
				right: 39,
				down: 40
			},
			elements: {
				$body: $('body')
			}
		};

	function Ekans (args) {
		args = args || {};
		this.initialize(args);
	}

	_private = {
		next: function (bodypart) {
			switch (attributes.direction) {
				case 'forward' :
					bodypart.position++;
				break;

				case 'backward' :
					bodypart.position--;
				break;

				case 'upward' :
					bodypart.line--;
				break;

				case 'downward' :
					bodypart.line++;
				break;
			}

			return bodypart;
		},

		walk: function () {
			var bodypart = _private.snake.data.shift(),
				field;

			// move 'old field' snake
			_private.move(bodypart);

			// set line and position
			bodypart.line = bodypart.line || attributes.initial.line;
			bodypart.position = bodypart.position || attributes.initial.position;

			// get the 'next' field to walk
			bodypart = _private.next(bodypart);

			_private.snake.data.push(bodypart);
			_private.snake.data.forEach(function (bodypart) {
				field = _private.field.data[bodypart.line].line[bodypart.position];
			
				// if the field is valid to walk
				if (typeof field != 'undefined' && !field.snake) {
					field.snake = true;
				}
				else {
					attributes.died = true;
					console.log('voce morreu');
				}
			});

			// if not dead
			_private.view.render();

			if (!attributes.died) {
				_private.timeout = setTimeout(function () {
					_private.walk();
				}, attributes.speed);
			}
		},

		move: function (bodypart) {
			_private.field.data[bodypart.line].line[bodypart.position].snake = false;
		},

		onKey: function (event) {
			event.stopImmediatePropagation();
			event.preventDefault();

			var  before = attributes.direction;

			switch (event.which) {
				case attributes.keys.right :
					attributes.direction = 'forward';
				break;

				case attributes.keys.left :
					attributes.direction = 'backward';
				break;

				case attributes.keys.up :
					attributes.direction = 'upward';
				break;

				case attributes.keys.down :
					attributes.direction = 'downward';
				break;
			}
			
			if (before !== attributes.direction) {
				clearTimeout(_private.timeout);
				_private.walk();
			}
			else {
				attributes.direction = before;
			}
		}
	};

	Ekans.prototype.initialize = function (args) {
		this.args = args;
		this.set();
		this.bind();
		this.start();
	};

	Ekans.prototype.set = function () {
		// attributes
		attributes.direction = attributes.direction || attributes.initial.direction;
		attributes.speed = attributes.speed || attributes.initial.speed;

		// instnces
		_private.snake = new Snake();
		_private.field = new Field();
		_private.view = new FieldView({
			snake: _private.snake,
			field: _private.field
		});
	};

	Ekans.prototype.start = function () {
		_private.walk(attributes.initial.direction);
	};

	Ekans.prototype.bind = function (args) {
		attributes.elements.$body.on('keydown', _private.onKey);
	};

	return Ekans;

}());
