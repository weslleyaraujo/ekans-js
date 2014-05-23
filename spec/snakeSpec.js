describe('Snake', function () {

	describe('create', function () {

		it('creates the snake object', function () {
			// given
			this.instance;

			// when
			this.instance = new Snake();

			// then
			expect(this.instance.data.length).toBe(3);
		});

		it('creates the snake object with bodypart', function () {
			// given
			this.instance;

			// when
			this.instance = new Snake();

			// then
			expect(typeof this.instance.data[0]).toBe('object');
		});

	});

});
