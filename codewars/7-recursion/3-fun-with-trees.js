// https://www.codewars.com/kata/57e5279b7cf1aea5cf000359/train/javascript

function maxSum(root) {
  
  function recursive(node) {
	  if (typeof node?.value !== 'number')	 return 0
		const left = node?.left ? recursive(node?.left) : null;
		const right = node?.right ? recursive(node?.right) : null;
		
		let sum = node.value
		if (left === null && right !== null) {
			sum += right
	 	} else if (left !== null && right === null) {
			sum += left
		} else {
			sum += Math.max(left, right)
		}
	
		
		return sum
	}
	return recursive(root)
}