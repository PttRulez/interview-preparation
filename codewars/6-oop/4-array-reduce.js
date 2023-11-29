// https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3/train/javascript

Array.prototype.reduce = function(process, acc) {
  for(let i = 0; i < this.length; i++) {
    if(acc === undefined) {
      acc = this[0];
    } else {
      acc = process(acc, this[i]);
    }
  }
  
  return acc;
}