describe('Ekans', function () {
	beforeEach(function () {
		this.$body = $('body');
		this.selector = "game";
		this.$table = $('<table id="'+ this.selector +'"></table>');
		this.$body.append(this.$table);
		this.instance = new Ekans();
	});

	describe('set (called on instance)', function () {
	});

});
