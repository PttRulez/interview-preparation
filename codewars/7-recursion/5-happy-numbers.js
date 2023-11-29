// https://www.codewars.com/kata/happy-numbers-5/train/javascript

function happyNumbers(x){
	
	function recursive(n, map) {
		if (map[n]) return false
		map[n] = true
		const sum = String(n).split('').map(Number).reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
		if (sum === 1) return true
		return recursive(sum, map)
	}

	const res = [1];

	for (let i = 7; i <= x; i++) {
		if (recursive(i, {})) res.push(i)
	}

	return res
}
