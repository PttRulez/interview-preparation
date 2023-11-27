// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

function kebabize(str) {
  return str.replaceAll(/[^a-z]/gi, '')
		.replaceAll(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + `${match.toLowerCase()}`)
}
