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
			var head = _private.snake.data.slice(-1)[0];

			switch (attributes.direction) {
				case 'forward' :
					bodypart.line = head.line;

					bodypart.position = head.position;
					bodypart.position++;
				break;

				case 'backward' :
					bodypart.line = head.line;

					bodypart.position = head.position;
					bodypart.position--;
				break;

				case 'upward' :
					bodypart.position = head.position;

					bodypart.line = head.line;
					bodypart.line--;
				break;

				case 'downward' :
					bodypart.position = head.position;

					bodypart.line = head.line;
					bodypart.line++;
				break;
			}

			return bodypart;
		},

		walk: function () {
			var bodypart = _private.snake.data[0],
				field;

			// move 'old field' snake
			_private.move(bodypart);

			// set line and position
			bodypart.line = bodypart.line || attributes.initial.line;
			bodypart.position = bodypart.position || attributes.initial.position;

			// get the 'next' field to walk
			bodypart = _private.next(bodypart);
			_private.snake.data.push(bodypart);
			_private.snake.data.shift();

			// is the next a part of snake?
			if (_private.isValid(bodypart) && _private.field.data[bodypart.line].line[bodypart.position].snake) {
				attributes.died = true;
				console.log('voce morreu');
			}
			else {
				_private.snake.data.forEach(function (bodypart) {

					// Is is a valid field
					if (_private.isValid(bodypart)) {
						field = _private.field.data[bodypart.line].line[bodypart.position];
						field.snake = true;
					}
					else {
						attributes.died = true;
						console.log('voce morreu');
					}
				});
			}

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

			var before = attributes.direction,
					trust = false;

			switch (event.which) {
				case attributes.keys.right :
					event.preventDefault();
					if (!attributes.died && attributes.direction !== 'backward') {
						trust = true;
						attributes.direction = 'forward';
					}
				break;

				case attributes.keys.left :
					event.preventDefault();
					if (!attributes.died && attributes.direction !== 'forward') {
						trust = true;
						attributes.direction = 'backward';
					}
				break;

				case attributes.keys.up :
					event.preventDefault();
					if (!attributes.died && attributes.direction !== 'downward') {
						trust = true;
						attributes.direction = 'upward';
					}
				break;

				case attributes.keys.down :
					event.preventDefault();
					if (!attributes.died && attributes.direction !== 'upward') {
						trust = true;
						attributes.direction = 'downward';
					}
				break;
			}
			
			if (before !== attributes.direction && trust) {
				clearTimeout(_private.timeout);
				_private.walk();
			}
			else {
				attributes.direction = before;
			}
		},

		// detect if field is valid or not
		isValid: function (bodypart) {
			if (_private.field.data[bodypart.line] && _private.field.data[bodypart.line].line[bodypart.position]) {
				return true;
			}

			return false;
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
