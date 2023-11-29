// https://www.codewars.com/kata/513fa1d75e4297ba38000003/train/javascript

function flatten(...args) {
	const flat = [];

	function recursive(...args) {
		for (const arg of args) {
			if (!Array.isArray(arg)) {
				flat.push(arg)
			} else {
				recursive(...arg)
			}
		}
	}

	recursive(...args)
	
  return flat
}
