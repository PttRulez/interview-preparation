// https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

function abbrevName(name){
  return name.split(' ')
		.map(s => s.slice(0,1).toUpperCase())
		.join('.');
}