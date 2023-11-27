// https://www.codewars.com/kata/zero-plentiful-array/train/javascript

function zeroPlentiful(arr){
	const str = ',' + arr.join(',');
	const matches = str.match(/(,0)+/g);
	
	if (matches && matches.every(c => c.length >= 8)) {
		return matches.length
	}
	return 0;
}


function zeroPlentiful(arr){
  var sequences = arr.map((x) => !x ? x : ',').join('').split(',').filter((str) => str);
  return sequences.every((str) => str.length >= 4) ? sequences.length : 0;
}