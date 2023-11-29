// https://www.codewars.com/kata/53c2c3e78d298dddda000460/train/javascript

Array.prototype.groupBy = function(fn) {
	return this.reduce((acc, cur) => {
		const group = fn ? fn(cur) : cur

		if (!acc[group]) {
			acc[group] = [cur]
		} else {
			acc[group].push(cur)
		}

		return acc
	}, {})
}