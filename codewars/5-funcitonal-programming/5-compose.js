// https://www.codewars.com/kata/function-composition-1/train/javascript

function compose(...fns) {
	return function (n) {
		return fns.reverse().reduce((acc, fn) => {
			return fn(acc)
		}, n);
	}
}