// https://www.codewars.com/kata/a-chain-adding-function/train/javascript 

function add(sum) {
  function f(num) {
    sum += num;
    return f;
  }
  f.toString = () => sum
  return f;
};

const a = add(1)(2);
console.log(a.toString());
console.log(a(3));
console.log(a);