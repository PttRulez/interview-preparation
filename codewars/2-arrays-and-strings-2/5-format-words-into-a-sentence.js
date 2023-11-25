// https://www.codewars.com/kata/51689e27fe9a00b126000004/train/javascript

function formatWords(words){
	if (!words) return '';
	const filtered = words.filter(c => !!c);
  if (filtered.length > 1) {
		const lastWord = filtered.pop();
		return filtered.join(', ') + ' and ' + lastWord
	}

	return filtered.join(', ');
}