// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b) {
	const letters = {
		10: 'A',
		11: 'B',
		12: 'C',
		13: 'D',
		14: 'E',
		15: 'F'
	}

	return [r,g,b].map(n => {
		if (n > 255) return 255
		if (n < 0) return 0
		return n
	}).reduce((acc, cur) => {
		const first = Math.floor(cur / 16);
  	const remainder = cur / 16 % 1;
		const second = remainder * 16;

		return acc + `${letters[first] ?? first}${letters[second] ?? second}`
	}, '');
}

// -----------------------------------

function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}