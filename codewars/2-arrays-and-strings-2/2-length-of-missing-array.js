// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript

function getLengthOfMissingArray(arr) {
	if (!arr?.length) return 0;
  
	arr.sort((a, b) => a?.length - b?.length);

	let result = arr?.[0]?.length;
	if (!result) return 0

	for (let i = 1; i < arr.length; i++) {
    if (!arr[i]?.length) return 0
		result += 1;
		if (arr[i].length !== result) return result
	}

  return 0;	
}

function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)
  
  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }

  return 0
}
