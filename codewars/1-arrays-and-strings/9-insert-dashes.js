// https://www.codewars.com/kata/insert-dashes/train/javascript

function insertDash(num) {
  const numbers = String(num).split('').map(Number);
	let result = String(numbers[0]);

	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] % 2 !== 0 && numbers[i-1] % 2 !== 0) {
			result += '-' + numbers[i];
		} else {
			result += numbers[i];
		}
	}

	return result
}

function insertDash(num) {
   return num.toString().replace(/[13579](?=[13579])/g, "$&-");
}

function insertDash(num) {
   return String(num).replace(/([13579])(?=[13579])/g, '$1-');
}