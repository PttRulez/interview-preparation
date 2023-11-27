// https://www.codewars.com/kata/537400e773076324ab000262/train/javascript

function groupAnagrams(words){
  const obj = words.reduce((acc, v) => {
		const sorted = v.split('').sort().join('');
		if (acc[sorted]) {
			acc[sorted].push(v);
		} else {
			acc[sorted] = [v];
		}
    return acc
	}, {})
	return Object.values(obj)
}