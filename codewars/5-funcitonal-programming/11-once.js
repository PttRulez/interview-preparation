// https://www.codewars.com/kata/once/train/javascript

function once(fn) {
	let done = false
  return (...args) => {
		if (!done) {
			done = true
			return fn(...args)
		}
	}
}
