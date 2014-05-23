var FieldView = (function () {
	var 
		// here is the place to inject private methods
		_private = {},

		// all attributes values goes here
		attributes = {
			selector: '#game'
		};

	function FieldView (args) {
		args = args || {};
		this.initialize(args);
	}

	_private = {
	};

	FieldView.prototype.initialize = function (args) {
		this.args = args;
		this.set();
	};

	FieldView.prototype.set = function () {
		attributes.selector = this.args.selector || attributes.selector;
		attributes.snake = this.args.snake || attributes.snake;
		attributes.field = this.args.field || attributes.field;

		// set jquery element
		this.$el = $(attributes.selector);

		console.log(attributes)
	};

	return FieldView;

}());
