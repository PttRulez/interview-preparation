// https://www.codewars.com/kata/588534713472944a9e000029/train/javascript

class Node {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const isBST = tree => {

	function recursive (node) {
		if (!node) return []

		return [...recursive(node.left), node.value, ...recursive(node.right)]	
	}

	const arr = recursive(tree)
	const order = arr[0] < arr[1] ? 'asc' : 'desc';

	return arr.reduce((acc, cur, i, arr) => {
		if (i === 0) return true
		return order === 'asc' ? acc && cur >= arr[i-1] : acc && cur <= arr[i-1]
	}, true)
};