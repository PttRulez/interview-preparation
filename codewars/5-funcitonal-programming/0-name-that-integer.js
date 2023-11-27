// https://www.codewars.com/kata/name-that-integer/train/javascript

function detectInt(...args) {
  if (args.length === 0) return 1

	found = false
	let i = 0
	while (!found) {
		i++
		found = args.every(lam => lam(i))
	}
	return i
}
