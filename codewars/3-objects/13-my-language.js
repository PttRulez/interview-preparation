// https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

function myLanguages(results) {
	return Object.entries(results).filter(([name, score]) => score >= 60).sort((a,b) => a[1] - b[1]).map(a => a[0])
}