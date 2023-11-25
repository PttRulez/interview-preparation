// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

function dataReverse(data) {
  const bit = 8
	const blocksQuantity = data.length / bit;
	let string = '';
	let blockNumber = 1

	while (blockNumber <= blocksQuantity) {
		const a = data.slice((blockNumber * bit) - bit, blockNumber * bit).join('');
		string = a + string;
		blockNumber++;
	}

	return string.split('').map(Number);
}

const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};