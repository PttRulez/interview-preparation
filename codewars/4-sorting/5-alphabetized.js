// https://www.codewars.com/kata/alphabetized/train/javascript

function alphabetized(s) {
  const reg = new RegExp(/[a-zA-Z]/);
	return s.split('').filter(a => reg.test(a)).sort((a,b) => {
		if (a.toLowerCase() === b.toLowerCase()) {
      return 0
		}
		return a.localeCompare(b)
	}).join('');
}

console.log()
const a = 'The Holy Bible';
console.log(alphabetized(a));