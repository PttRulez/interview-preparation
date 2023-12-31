// https://www.codewars.com/kata/5b6c220fa0a661fbf200005d/train/javascript

function scoreboard(string) {
  const map = {
		nil: 0,
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9
	}

	const reg = new RegExp('(' + Object.keys(map).join('|') + ')', 'g');
	return string.match(reg).map(a => map[a])
}

const a = "new score: two three"
console.log(scoreboard(a))