function indexEqualsValue(arr) {
	let start = 0;
	let end = arr.length-1;
  let res = -1;

	while (start <= end) {
		const i = Math.floor((start + end) / 2);

		if (arr[i] === i) {
			res = i;
			end = i - 1;
      if (arr[i-1] !== i-1 ) break;
		} else if (arr[i] > i) {
			end = i - 1;
		} else {
			start = i + 1;
		} 
	}

	return res
}