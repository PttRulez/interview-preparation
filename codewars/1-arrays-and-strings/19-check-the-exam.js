// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(array1, array2) {
 const res = array1.reduce((acc, cur, index) => {
	if (array2[index] === '') return acc;
	if (cur === array2[index]) return acc + 4;
	return acc - 1;
 }, 0);

 return res > 0 ? res : 0
}

console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))