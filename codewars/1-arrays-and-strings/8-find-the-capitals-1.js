// https://www.codewars.com/kata/find-the-capitals-1/train/javascript

let capitals = function (word) {
	return word.split('').reduce((acc, value, index) => {
		if (value.toUpperCase() === value) acc.push(index)
		return acc;
	}, [])
};