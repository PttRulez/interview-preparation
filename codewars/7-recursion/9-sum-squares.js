// https://www.codewars.com/kata/57882daf90b2f375280000ad/train/javascript

function SumSquares(l){
		function recursive (arr) {
			return arr.reduce((acc, cur) => {
				if (typeof cur === 'number') {
					acc.push(cur)
				} else {
					acc.push(...recursive(cur))
				}
				return acc
			}, [])
		}

		const flat = recursive(l);
		
		return flat.reduce((acc, cur) => {
			return acc + Math.pow(cur, 2);
		}, 0)
}