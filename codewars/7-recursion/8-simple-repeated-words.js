// https://www.codewars.com/kata/5a942c461a60f677730032df/train/javascript

function solve(a,b) {
	const arr = b.split('');

  function recursive(word, arr) {
		return arr.reduce((acc, letter, index) => {
			if (letter === word[0]) {
				if (word.length === 1) {
					acc++;
				} else {
					acc += recursive(word.slice(1), arr.slice(index + 1))
				}
			}
			return acc;
		}, 0)
	}

	return recursive(a, arr)
}