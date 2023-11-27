// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

function solve(arr){
	const map = {}

  for (const n of arr) {
		if (!map[n]) {
			map[n] = 1;
		} else {
			map[n] += 1;
		}
	}
	const res = [];
	Object.entries(map).sort((a, b) => {
		return b[1] - +a[1] || +a[0] - b[0];
	}).forEach(a => {
		res.push(...Array(a[1]).fill(+a[0]));
	})

	return res;
}
