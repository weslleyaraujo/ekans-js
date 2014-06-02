/*
 * @Helpers
 *
 * some functionals helpers
 * */
window.Helpers = {};

window.Helpers.size = function (index) {
	return window.Helpers.tail(0, index);
};

window.Helpers.tail = function (i, size) {
	return [i].concat(i < size ? window.Helpers.tail(i+1, size) : []);
};

window.Helpers.compose = function (a, b) {
	return function (c) {
		return a(b(c));
	};
};

window.Helpers.template = function (selector) {
  var content = $(selector).html();
	return _.template(content ? content : "");
};

Math.range = function (a, b) {
	return this.floor(this.random() * a) + b;
};
