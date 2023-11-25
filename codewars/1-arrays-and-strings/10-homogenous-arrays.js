// https://www.codewars.com/kata/homogenous-arrays/train/javascript

function filterHomogenous(arrays) {
  return arrays.filter(arr => {
		if (arr.length === 0) return false;

		const type = typeof arr[0];
		return !arr.some(i => typeof i !== type);
		return arr.every(i => typeof i === type); // second option
	});
}