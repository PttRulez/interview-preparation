// https://www.codewars.com/kata/5b773b698adeaeb6b80000df/train/javascript

function memo(fn) {
	const map = new Map()
  return function (n) {
		if (!map.has(n)) {
			map.set(n, fn(n))
		}
		return map.get(n)
	}
}