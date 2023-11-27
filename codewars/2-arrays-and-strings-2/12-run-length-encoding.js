// https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript

const recursive = (str, i, q) => {
	if (str[i+1] === str[i]) {
		return recursive(str, i+1, q+1)
	}
	return [i, q]
}

const runLengthEncoding = (str) => {
	const res = [];
	let index = 0;

  while (index < str.length) {
		const [i, q] = recursive(str, index, 1);
		res.push([q, str[index]]);
		index = i + 1
	}

	return res;
}

// _________________________________________________________
function runLengthEncoding(str) {
    var arr = [],
        counter = 1;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            counter++;
        } else {
            arr.push([counter, str[i]]);
            counter = 1;
        }
    }

    return arr;
}