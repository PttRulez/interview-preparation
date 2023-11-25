// https://www.codewars.com/kata/playing-with-digits/train/javascript

function digPow(n, p){
	let pow = p;

  const sum = String(n).split('').map(Number).reduce((prev, cur) => {
		const result = prev + Math.pow(cur, pow);
		pow++;
		return result;
	}, 0);

	if (sum % n === 0) return sum / n;

	return -1;
}