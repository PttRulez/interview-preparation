// https://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript

function countChange(money, coins) {
	coins = coins.sort((a,b) => a - b)

  const recursive = (set) => {
		if (set.sum === money) {
			set.count += 1
			return
		}

		if (set.sum > money) return
		
		return coins.reduce((acc, cur) => {
			acc.push(...recursive({ sum: set.sum + cur, coins: [...set.coins, cur] }));
			return acc
		}, []);
	}

	const arr = recursive({ sum: 0, coins: [], set: new Set(), str: '', count: 0 });
	const set = new Set();

	for (const obj of arr) {
		console.log('Ser')
		const str = obj.coins.sort((a,b) => a- b).join('')
		set.add(str)
	}

	return [...set.keys()].length
}

const a = countChange(300, [5, 10, 20, 50, 100, 200, 500])
console.log('a', a)