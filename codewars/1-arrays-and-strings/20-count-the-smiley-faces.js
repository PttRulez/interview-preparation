// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
	const checkSmile = new RegExp(/[;,:]{1}[-,~]?[D,)]{1}/);

  return arr.reduce((acc, cur) => {
		if (checkSmile.test(cur)) return acc + 1;
		return acc;
	}, 0);
}