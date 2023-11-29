// https://www.codewars.com/kata/52d43d5515be7cbc92000611/train/javascript

function allLeavesAtSameLevel(tree) {
  
	const recursive = (node, curLevel, arr) => {
    if (!node) return []
		const left = node.getLeft()
		const right = node.getRight()

		if (left) {
			recursive(left, curLevel + 1, arr);
		}

		if (right) {
			recursive(right, curLevel + 1, arr);
		}

		if (!left && !right) {
			arr.push(curLevel)
		}

		return arr;
	}

  const arr = recursive(tree, 0, []);
  return arr.every(i => i === arr[0]);
}
