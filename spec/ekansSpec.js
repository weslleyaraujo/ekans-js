describe('Ekans', function () {
	beforeEach(function () {
		this.$body = $('body');
		this.selector = "game";
		this.$table = $('<table />', {
			id: this.selector
		});
		this.$body.append(this.$table);
	});

	describe('initialize', function () {
		describe('when args is not passed', function () {
			it ('should call methods set on instance', function () {
				spyOn(Ekans.prototype, 'set');
				this.instance = new Ekans();
				expect(this.instance.set).toHaveBeenCalled();
			});

			it('should call methods bind on instance', function () {
				spyOn(Ekans.prototype, 'bind');
				this.instance = new Ekans();
				expect(this.instance.bind).toHaveBeenCalled();
			});
		});
	});

	describe('set', function () {

	});

});
