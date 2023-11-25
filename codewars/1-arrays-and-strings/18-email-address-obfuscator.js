// https://www.codewars.com/kata/562d8d4c434582007300004e/train/javascript

const obfuscate = (email) => {
  return email.replaceAll(/\./g, ' [dot] ').replaceAll(/@/g, ' [at] ');
}
