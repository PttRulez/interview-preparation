// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	return str.split('').reduce((prev, cur) => {
		if (vowels.includes(cur)) {
			return prev + 1;
		}
		return prev;
	}, 0);
}

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}