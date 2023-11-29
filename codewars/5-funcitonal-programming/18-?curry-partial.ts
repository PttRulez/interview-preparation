// https://www.codewars.com/kata/currying-vs-partial-application/train/javascript

function curryPartial(fn, ...partialArgs) {
	let cumArgs = [...partialArgs]

	function foo(...args) {
		cumArgs = [...cumArgs, ...args]
		return foo;
	}

	foo.prototype.valueOf = function() { return 'hui' }
	foo.valueOf = function() { return 'hui' }
	foo.prototype.toString = function() { return 'hui' }
	foo.toString = function() { return 'hui' }
	// foo.valueOf = function() { 
	// 	return fn(...cumArgs);
	// }

	return foo;
}

function add(a, b, c) {
  return a + b + c;
}

console.log(add)

var a = 1;
var b = 2;
var c = 3;
var sum = a + b + c;

const r = curryPartial(add);

console.log('r', r)

// function curry(func) {

//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function(...args2) {
//         return curried.apply(this, args.concat(args2));
//       }
//     }
//   };

// }