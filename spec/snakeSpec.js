describe('Snake', function () {

	describe('create', function () {

		it('creates the snake object', function () {
			// given
			this.instance;

			// when
			this.instance = new Snake();

			// then
			expect(this.instance.snake.length).toBe(3);
		});

		it('creates the snake object with bodypart', function () {
			// given
			this.instance;

			// when
			this.instance = new Snake();

			// then
			expect(typeof this.instance.snake[0]).toBe('object');
		});

	});

});
