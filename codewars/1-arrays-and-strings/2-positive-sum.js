// https://www.codewars.com/kata/sum-of-positive/train/javascript

function positiveSum(arr) {
  return arr.reduce((prev, cur) => {
		if (cur > 0) return prev + cur;
		return prev;
	}, 0);
}