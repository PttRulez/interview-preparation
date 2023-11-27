// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

function incrementString (strng) {
	if (strng.match(/(0*)[0-9]+$/) === null) return strng + 1;

	return strng.replace(/(0*)[0-9]+$/, (match, zeros, index) => {

		let res = String(Number(match) + 1);
		if (res.length < match.length) {
			res = '0'.repeat(match.length - res.length) + res;
		}
		return res;
	})
}

// const a = 'foo0042'
// const a = 'foobar24'
const a = 'foo'
console.log(incrementString(a))