// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
	const odd = [];
	const even = {};
	const result = []

	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			even[i] = array[i];
		} else {
			odd.push(array[i])
		}
	}

	odd.sort((a,b) => b - a);

	for (let i = 0; i < array.length; i++) {
		const el = even[i] ?? odd.pop();
		result.push(el)
	}

	return result
}