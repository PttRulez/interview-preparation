// https://www.codewars.com/kata/558cb3df5f511f40d500001d/train/javascript

function nouveau (Constructor, ...args) {
	const obj = {}
	Constructor.call(obj, ...args)
	const o = { ...obj, ...Constructor.prototype};
	o.prototype = Constructor.prototype
	o.__proto__ = Constructor.prototype
	return o
}

function Person (name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return 'Hi, I am ' + this.name;
};

const guy = nouveau(Person, 'Guy');

console.log(guy, guy.name)
console.log(guy.sayHi())