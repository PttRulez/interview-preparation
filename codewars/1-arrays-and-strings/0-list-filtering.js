// https://www.codewars.com/kata/list-filtering/train/javascript

function filter_list(l) {
  return l.filter(s => typeof s !== 'string');
}