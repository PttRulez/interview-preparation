// https://www.codewars.com/kata/59fa8e2646d8433ee200003f/train/javascript

const count1s = (n)=>n.toString(2).replace(/0/g,"").length

function sortByBit(arr) {
  return arr.sort((a, b) => {
		const a1 = count1s(a);
		const b1 = count1s(b);
		if (a1 === b1) {
			return a - b;
		} else {
			return a1 - b1;
		}
	})
}

// ---
const sortByBit = arr => arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b)