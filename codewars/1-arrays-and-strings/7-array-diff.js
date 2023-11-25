// https://www.codewars.com/kata/array-dot-diff/train/javascript

function arrayDiff(a, b) {
  return a.filter(i => !b.includes(i));
}