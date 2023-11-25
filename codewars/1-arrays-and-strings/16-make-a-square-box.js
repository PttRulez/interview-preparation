// https://www.codewars.com/kata/make-a-square-box/train/javascript

function box(n) {
	const result = Array(n).fill('yo').map((c, i) => {
		if (i === 0 || i === n-1) {
			return Array(n).fill('-').join('');
		} else {
			return '-' + Array(n-2).fill(' ').join('') + '-';
		}
	});

	return result;
}

function box(n) {
  const outB = '-'.repeat(n);
  const inB = `-${' '.repeat(n-2)}-`;

  return [outB, ...Array(n-2).fill(inB), outB];
}