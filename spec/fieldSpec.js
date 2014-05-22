describe('Field', function () {

	it('creates the field object', function () {
		// given
		var config = {
			x: 10,
			y: 10
		};

		// when
		this.instance = new Field({
			x: 10,
			y: 10
		});

		// then
		expect(this.instance.game.length).toBe(config.x);
	});

});
