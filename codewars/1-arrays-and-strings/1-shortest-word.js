// https://www.codewars.com/kata/shortest-word/train/javascript
function findShort(s){
	return s.split(' ').sort((a,b ) => a.length - b.length)[0].length;
}