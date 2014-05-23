describe('Field', function () {

	describe('create', function () {
		it('creates the game object', function () {
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

		it('creates the game object array with lines objects', function () {
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
			expect(typeof this.instance.game[0].line).toBe('object');
		});
	});

	describe('set', function () {
		it('set the instance params', function () {
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

			expect(this.instance.x).toBe(config.x);

		});
	});


});
