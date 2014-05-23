describe('Helpers', function () {

	describe('size', function () {

		it('gives an array of numbers that you specify', function () {
			// given
			var size = 5,

			// when
			arr = window.Helpers.size(size);

			// then
			expect(arr).toEqual([0, 1, 2, 3, 4, 5]);
		});

	});

	describe('tail', function () {

		it('also gives an array of numbers that you specify', function () {
			// given
			var size = 5,

			// when
			arr = window.Helpers.tail(0, 3);

			// then
			expect(arr).toEqual([0, 1, 2, 3]);
		});

	});

	describe('compose', function () {

		it('returns a function that is a result of a composition of two functions', function () {
			// given
			var 
				a = function (param) {
					return 'a' + param;
				},
				
				b = function (param) {
					return 'b' + param;
				}

				// when
				composition = window.Helpers.compose(a, b)('c');

			// then
			expect(composition).toEqual('abc');
		});

	});

});
