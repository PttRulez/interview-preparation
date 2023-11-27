// https://www.codewars.com/kata/5806dc10a4647e6493000152/train/javascript

function findPair(arr1,arr2){
	const map = {}
	const pairs = {}
	let max = 0;
	let q = 0;

  for (let i = 0; i < arr1.length; i++) {
		const sum = arr1[i] + arr2[i];
		if (map[sum]) {
			map[sum] += 1;
			pairs[sum].push([arr1[i], arr2[i]]);

		} else {
			map[sum] = 1
			pairs[sum] = [[arr1[i], arr2[i]]];
		}

		if (pairs[sum].length > max) {
			max = pairs[sum].length;
			q = sum;
		} else if(pairs[sum].length === max) {
			q = Math.max(q, sum)
		}
	}
  
	if (max === 1) return []
	return pairs[q]
  
}

function findPair(arr1, arr2) {
  var sum, pairs = {};
  arr1.forEach(function(curr, i) {
    sum = curr + arr2[i];
    (pairs[sum] = pairs[sum] || []).push([curr, arr2[i]]);
  });
  var len, key, longest = [];
  for (key in pairs) {
    len = pairs[key].length; 
    if (len > 1 && len >= longest.length) {
      longest = pairs[key];
    }
  }
  return longest;
}