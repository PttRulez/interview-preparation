// https://www.codewars.com/kata/reversed-strings/train/javascript

function solution(str){
  return str.split('').reverse().join('');
}

function solution(str){
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
