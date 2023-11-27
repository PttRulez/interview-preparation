// https://www.codewars.com/kata/find-the-unique-number/train/javascript

function findUnique(numbers) {
  let obj = {};
  for(let number of numbers) {
    if(obj.hasOwnProperty(number)) {
      obj[number] += 1;
    } else {
      obj[number] = 1; 
    }
  }
  for(let key in obj) {
    if(obj[key] == 1) {
      return Number(key);
    }
  }
}

function findUnique(numbers) {
    const map = new Map();
		const one = new Map();

		for (const n of numbers) {
			if (!map.has(n)) {
				map.set(n, 1)
				one.set(n, 1)
			} else {
				one.delete(n)
			}
		}

		return one.keys()[0]
}
