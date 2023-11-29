// https://www.codewars.com/kata/653107dc0bbdb7003e9c59c8/train/javascript

function groupBy(items, cb) {
	const obj = [...items].reduce((acc, cur, i) => {
		const group = cb(cur, i)
		if (!acc.hasOwnProperty(group)) {
			acc[group] = [cur]
		} else {
			acc[group].push(cur)
		}
		return acc
	}, {})
	Object.setPrototypeOf(obj, null)
	return obj
}
