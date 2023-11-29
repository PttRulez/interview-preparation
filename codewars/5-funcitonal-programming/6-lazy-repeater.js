// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/javascript

function makeLooper(str) {
  let count = 0;

	return function() {
		const i = count;
		count++
		if (count === str.length) count = 0
		return str[i];
	}
}