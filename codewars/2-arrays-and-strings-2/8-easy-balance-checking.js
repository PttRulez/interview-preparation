// https://www.codewars.com/kata/59d727d40e8c9dd2dd00009f/train/javascript

function balance(book) {
  const rows = book.replaceAll(/[^\d\.\w\r\n ]/g, '')
											.split('\n')
											.filter(i => i.length)
											.map(s => s.match(/[\d\.\w]+/g));

	let result = `Original Balance: ${parseFloat(rows[0][0]).toFixed(2)}\r\n`;
	let curBalance = Number(rows[0][0]);
	const expenses = rows.slice(1);
	const total = expenses.reduce((acc, [_, __, expense]) => acc + Number(expense), 0);
	const average = total / expenses.length;

	for (const e of expenses) {
		curBalance -= Number(e[2]);
		result += `${e[0]} ${e[1]} ${parseFloat(e[2]).toFixed(2)} Balance ${curBalance.toFixed(2)}\r\n`	
	}

	result += `Total expense  ${total.toFixed(2)}\r\n`;
	result += `Average expense  ${average.toFixed(2)}`

	return result;
}