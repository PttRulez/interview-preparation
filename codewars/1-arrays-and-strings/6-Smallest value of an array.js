// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
	let result = toReturn === 'value' ? arr[0] : 0;
	let min = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			result = toReturn === 'value' ? arr[i] : i;
			min = arr[i];
		}
	}

	return result;
}

function min(arr, toReturn) {
  var val = Math.min.apply(null, arr)
  return toReturn == 'value' ? val : arr.indexOf(val)
}

const min = (arr, toReturn) => toReturn === 'value' ? Math.min(...arr) : arr.indexOf(Math.min(...arr));