// https://www.codewars.com/kata/create-phone-number/train/javascript

function createPhoneNumber(n){
  const s = n.map(String);
  return `(${s[0] + s[1] + s[2]}) ${s[3] + s[4] + s[5]}-${s[6] + s[7] + s[8] + s[9]}`;
}