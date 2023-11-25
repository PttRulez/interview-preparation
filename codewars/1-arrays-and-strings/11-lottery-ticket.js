// https://www.codewars.com/kata/lottery-ticket/train/javascript

function bingo(ticket, win){
	let result = 0;

	for (const [str, code] of ticket) {
		result += Number(str.split('').some(l => l.charCodeAt(0) === code));
	}

	return result >= win ? 'Winner!' : 'Loser!';
}