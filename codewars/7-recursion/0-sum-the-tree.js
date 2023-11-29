// https://www.codewars.com/kata/5800580f8f7ddaea13000025/train/javascript

function sumTheTreeValues(node){
	if (!node) return 0

  return node.value + sumTheTreeValues(node.left) + sumTheTreeValues(node.right)
}
