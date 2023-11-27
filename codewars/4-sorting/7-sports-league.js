// https://www.codewars.com/kata/5e0baea9d772160032022e8c/train/javascript

function computeRanks(number, games) {
	const teams = {};

	for (let i = 0; i < number; i++) {
		teams[i] = {
			number: i,
      points: 0,
      diff: 0,
      goals: 0,
    }
	}

	for(const game of games) {
		const [team1, team2, score1, score2] = game;

		teams[team1].points += score1 > score2 ? 2 
														: score1 === score2 ? 1
														: 0;
		teams[team2].points += score2 > score1 ? 2 
														: score1 === score2 ? 1
														: 0

		teams[team1].diff += score1 - score2;
		teams[team2].diff += score2 - score1;

		teams[team1].goals += score1;
		teams[team2].goals += score2;
	}

	const sorted = Object.values(teams).sort((a, b) => {
		const prop = a.points !== b.points ? 'points'
									: a.diff !== b.diff ? 'diff'
									: a.goals !== b.goals ? 'goals'
									: 'share';
		
		if (prop === 'share') {
			a['share'] === true;
			b['share'] === true;
			return 0
		}

		return b[prop] - a [prop];
	})

	const result = Array(number);
	const first = sorted[0];
	result[first.number] = 1;
	let place = 1;
	let incrementor = 1;

	for (let i = 1; i < sorted.length; i++) {
		if (
				sorted[i].points !== sorted[i-1].points 
				|| sorted[i].diff !== sorted[i-1].diff 
				|| sorted[i].goals !== sorted[i-1].goals
		) {
			place += incrementor;
			incrementor = 1;
		} else {
			incrementor++
		}
		result[sorted[i].number] = place;
	}

	return result;
}

function computeRanks(number, games) {
  const teams = [...Array(number)].map((_, i) => ({id: i, score: 0, goals: 0, diff: 0}));
  games.forEach(([a, b, x, y]) => {
    teams[a].goals += x;
    teams[b].goals += y;
    teams[a].diff += x - y;
    teams[b].diff += y - x;
    if (x === y) {
      teams[a].score += 1;
      teams[b].score += 1;
    }
    else {
      teams[x > y ? a : b].score += 2;
    }
  });
  const cmp = (a, b) => b.score - a.score || b.diff - a.diff || b.goals - a.goals;
  teams.sort(cmp);
  const r = Array(number).fill(0);
  for (let i = 0, prev = null, k; i < number; prev = teams[i++]) {
    if (!prev || cmp(prev, teams[i]) !== 0) {
      k = i + 1;
    }
    r[teams[i].id] = k;
  }
  return r;
}