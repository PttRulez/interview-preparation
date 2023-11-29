// https://www.codewars.com/kata/652e9d603a9be5122adbfdbf/train/javascript

function groupBy(
  array,
  classifier,
  downstream,
  accumulatorSupplier,
) {

	const map = array.reduce((acc, cur) => {
		const group = classifier(cur);
		if (!acc.has(group)) {
			acc.set(group, [cur])
		} else {
      const arr = acc.get(group)
      arr.push(cur)
			acc.set(group, arr)
		}
		return acc
	}, new Map())
  
	const res = new Map()
	for (const key of map.keys()) {
		const arr = map.get(key);
    const v = arr.reduce(downstream, accumulatorSupplier())
		res.set(key, v)
	}

	return res
}