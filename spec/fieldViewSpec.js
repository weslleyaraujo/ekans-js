describe('FieldView', function () {
	beforeEach(function () {
		this.$body = $('body');
		this.selector = "game";
		this.$table = $('<table id="'+ this.selector +'"></table>');
		this.$body.append(this.$table);

		var snake = new Snake(),
			field = new Field();

		this.instance = new FieldView({
			snake: snake,
			field: field
		});
	});

	afterEach(function () {
		this.$body.find(this.selector).remove();
	});

	describe('set (called on instance)', function () {
		it('set the main args and view elements', function () {
			expect(this.instance.args['field'].constructor.name).toBe('Field');
			expect(this.instance.args['snake'].constructor.name).toBe('Snake');
			expect(this.instance.$el).toBeDefined();
			expect(typeof this.instance.template).toBe('function');
		});
	});

	describe('render (called on instance)', function () {
		it('renders data into DOM', function () {
			expect(this.instance.$el.find('tr')).toBeDefined();
		});
	});

});
