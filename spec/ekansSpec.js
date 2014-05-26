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
		it('should call method set on instance', function () {
			spyOn(Ekans.prototype, 'set');
			this.instance = new Ekans();
			expect(Ekans.prototype.set).toHaveBeenCalled();
		})
	});

});
