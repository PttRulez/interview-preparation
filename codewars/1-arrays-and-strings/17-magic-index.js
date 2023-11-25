// https://www.codewars.com/kata/magic-index/train/javascript

function findMagic(arr){
  for (let i = 0; i < arr.length; i++) {
    if (i === arr[i]) return i;
  }
  return -1
}

const findMagic = arr => arr.findIndex(i => arr[i] === i);