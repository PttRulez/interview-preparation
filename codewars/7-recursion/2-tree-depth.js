// https://www.codewars.com/kata/55cf9b9e66e66c42fa000013/train/javascript

function recordDepth(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return null
  function recursive(o, d) {
		if (!o || typeof o !== 'object' || Array.isArray(o)) return o
		o.depth = d
		for (key in o) {
			o[key] = recursive(o[key], d+1)
		}
		return o
	}

	return recursive(obj, 0)
}
