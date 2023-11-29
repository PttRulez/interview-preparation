// https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript

Array.prototype.square = function () {
	return this.map(s => Math.pow(s, 2))
}

Array.prototype.cube = function () {
	return this.map(s => Math.pow(s, 3))
}

Array.prototype.average = function () {
	return this.sum()/this.length;
}

Array.prototype.sum = function () {
	return this.reduce((acc, cur) => acc + cur, 0);
}

Array.prototype.even = function () {
	return this.filter(s => s % 2 === 0)
}

Array.prototype.odd = function () {
	return this.filter(s => s % 2 !== 0)
}
