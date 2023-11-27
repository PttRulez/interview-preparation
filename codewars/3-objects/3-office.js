// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript

function outed(meet, boss){
	const arr = Object.entries(meet);
  const sum = arr.reduce((acc, [name, rate]) => {
		return acc + (name === boss ? rate * 2 : rate)
	}, 0)
	return sum/arr.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}