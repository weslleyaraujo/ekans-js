var FieldView = (function () {
	var 
		// here is the place to inject private methods
		_private = {},

		// all attributes values goes here
		attributes = {
			selector: '#game',
			templateSelector: '#field-template'
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
		this.render();
	};

	FieldView.prototype.set = function () {
		attributes.selector = this.args.selector || attributes.selector;
		attributes.snake = this.args.snake || attributes.snake;
		attributes.field = this.args.field || attributes.field;

		// set jquery element
		this.$el = $(attributes.selector);

		// set template
		this.template = window.Helpers.template(attributes.templateSelector);
	};

	FieldView.prototype.render = function () {
		this.$el.html('');
		var line,
				fragment = document.createDocumentFragment();

		attributes.field.data.forEach(function (field) {
			line = field.line.map (function (item) {
				return this.template(item);
			}.bind(this)).join('');

			fragment.appendChild($('<tr class="game-line">').html(line)[0]);

		}.bind(this));

		this.$el.append(fragment);

	};

	return FieldView;

}());
