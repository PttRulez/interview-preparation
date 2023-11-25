// https://www.codewars.com/kata/5894318275f2c75695000146/train/javascript

function deleteDigit(n) {
	const str = String(n);
	const arr = [];

	for (let i = 0; i < str.length; i++) {
		arr.push(Number(str.slice(0,i) + str.slice(i+1)));
	}

	return Math.max(...arr)
}
