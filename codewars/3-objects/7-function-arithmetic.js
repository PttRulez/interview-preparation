// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

function arithmetic(a, b, operator){
	const first = Number(a)
	const second = Number(b)

  switch (operator) {
		case 'add':
			return first + second;
		case 'subtract':
			return first - second;
		case 'multiply':
			return first * second;
		case 'divide':
			return first / second;
	}
}