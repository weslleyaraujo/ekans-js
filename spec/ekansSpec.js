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
			it('initiliazes with empty object', function () {
				var ekans = new Ekans();
				expect(ekans.args).toEqual({});
			});

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

		describe('when args is passed', function () {
			it('sets the given args', function () {
				var args = 'double',
					ekans = new Ekans(args);
				expect(ekans.args).toEqual(args);
			});
		});

	});

});
