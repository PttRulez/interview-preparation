// https://www.codewars.com/kata/527176c487961e5900000106/train/javascript

Function.prototype.pipe = function(fn) {
	return (function (...args) { return fn(this(...args)) }).bind(this)
}
