// https://www.codewars.com/kata/52859abdf8fc1b12e0000141/train/javascript

const isObject = (obj) => (typeof obj === 'object' && !Array.isArray(obj) && obj !== null);

function flattenMap(map) {
	const arr = []

	function recursive (key, value, arr) {
		if (!isObject(value)) {
			arr.push([key, value])
		} else {
			for (const k in value) {
				recursive(key + '/' + k, value[k], arr)
			}
		}
	}

	for (const k in map) {
		recursive(k, map[k], arr);
	}

	const res = {}

	for (const [key, value] of arr) {
		res[key] = value
	}

	return res;
}

const a = {
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
}

console.log(flattenMap(a))

console.log(isObject(a.a.b))
console.log(isObject(a.a.b.c))