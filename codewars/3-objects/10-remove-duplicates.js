// https://www.codewars.com/kata/remove-duplicate-words/train/javascript

function removeDuplicateWords (s) {
  const map = {}

	return s.split(' ').filter(value => {
		if (map[value]) {
			return false
		} else {
			map[value] = 1;
			return true;
		}
	}).join(' ');
}