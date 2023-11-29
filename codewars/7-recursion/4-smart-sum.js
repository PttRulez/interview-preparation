// https://www.codewars.com/kata/smart-sum/train/javascript

function smartSum(...argums){

	const recursive = (...args) => {
		return args.reduce((acc, cur) => {
			if (Array.isArray(cur)) {
				return acc + recursive(...cur)
			} else {
				return acc + cur
			}}, 0)
	}

	return recursive(...argums)
}