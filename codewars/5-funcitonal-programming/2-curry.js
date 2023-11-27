// https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array/train/javascript

function multiplyAll(arr) {
	return (n) => {
		return arr.map(i => i*n)
	}
}