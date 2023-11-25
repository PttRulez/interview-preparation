// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
  let rightSum = arr.reduce((acc, cur) => acc + cur, 0);
	let leftSum = 0;

	for (let i =0; i < arr.length; i++) {
		rightSum -= arr[i];
		if (leftSum === rightSum) return i;
		leftSum += arr[i];
	}

	return -1;
}