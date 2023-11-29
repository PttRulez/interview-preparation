// https://www.codewars.com/kata/5845e3f680a8cf0bad00017d/train/javascript

function minPath(grid, x, y) {
  let min = Infinity;

	const recursive = (curX, curY, sum) => {
		if (curX > x || curY > y) return;
		const newSum = sum + grid[curY][curX];
		if (newSum > min) return
		if (curX === x & curY === y) {
			min = Math.min(min, newSum)
		} else {
			if (curX < x) recursive(curX + 1, curY, newSum);
			if (curY < y) recursive(curX, curY + 1, newSum);
		}
	}

	recursive(0,0,0)

	return min
}