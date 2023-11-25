// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
	let multiplier = 1;
	return String(num).split('').map(Number).reverse().map(n => {
		const res = n * multiplier;
		multiplier *= 10;
		return res
	}).reverse().filter(c => c).join(' + ');
}
