// https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript

Object.prototype.hash = function(string) {
	const a = string.split('.').reverse();

  const recursive = (obj, arr) => {
		const o = obj[arr.pop()];
		if (arr.length === 0 || o === undefined) return o

		return recursive(o, arr)
	}

	return recursive(this, a)
}