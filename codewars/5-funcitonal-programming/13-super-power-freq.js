// https://www.codewars.com/kata/5452209f699b534c67000cdf/train/javascript

function defaultCompare(value1, value2, freq1, freq2) {
	return typeof value1 === 'number' ? value1 - value2 : value1.localeCompare(value2);
}

function frequency(arr, options) {
	const compare = options?.compareTo ?? defaultCompare
	const freqs = new Map();
	const values = new Set();

	arr.forEach((value) => {
		const v = options?.criteria ?  options.criteria(value) : value;
    
		values.add(v);
    
		if (!freqs.has(v)) {
			freqs.set(v, 1)
		} else {
			freqs.set(v, freqs.get(v) + 1)
		}
	});

	

	return [...values.values()].sort((a,b) => {
		return compare(a, b, freqs.get(a), freqs.get(b));
	}).map(a => [a, freqs.get(a)])
}