// https://www.codewars.com/kata/57cc79ec484cf991c900018d/train/javascript

function dbSort(a){
	const numbers = a.filter(i => typeof i === 'number').sort((a,b) => a - b);
	const strings = a.filter(i => typeof i === 'string').sort();
	return numbers.concat(strings);
}