// https://www.codewars.com/kata/54f9c37106098647f400080a/train/javascript

function dropWhile(array, predicate) {
  let i = 0;

	while (predicate(array[i]) && i < array.length) {
		i++
	}
	return array.slice(i)
}
