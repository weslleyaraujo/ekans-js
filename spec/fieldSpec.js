describe('Field', function () {

	describe('create', function () {
		it('creates the game object', function () {
			// given
			var attributes = {
				x: 10,
				y: 10
			};

			// when
			this.instance = new Field({
				x: 10,
				y: 10
			});

			// then
			expect(this.instance.data.length).toBe(attributes.x);
		});

		it('creates the game object array with lines objects', function () {
			// given
			var attributes = {
				x: 10,
				y: 10
			};

			// when
			this.instance = new Field({
				x: 10,
				y: 10
			});

			// then
			expect(typeof this.instance.data[0].line).toBe('object');
		});
	});

	describe('set', function () {
		it('set the instance params', function () {
			// given
			var attributes = {
				x: 10,
				y: 10
			};

			// when
			this.instance = new Field({
				x: 10,
				y: 10
			});
			
			// then
			expect(this.instance.args.x).toBe(attributes.x);

		});
	});


});
