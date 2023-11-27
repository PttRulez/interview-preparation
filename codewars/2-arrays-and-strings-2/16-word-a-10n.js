// https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript

function abbreviate(string) {
	return string.replace(/[a-zA-Z]{4,}/g, (match) => {
		dashSplitted = match.split('-');
		return dashSplitted.map(w => {
			console.log('w', w, w.slice(0,1), w.length-2, w.slice(-1))
			return w.slice(0,1) + (w.length - 2) + w.slice(-1);
		}).join('-');
	})
}
