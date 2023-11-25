// https://www.codewars.com/kata/credit-card-mask/train/javascript

function maskify(cc) {
  const mask = cc.length-4 > 0 ? Array(cc.length-4).fill('#').join('') : '';
  return  mask + cc.slice(-4);
}