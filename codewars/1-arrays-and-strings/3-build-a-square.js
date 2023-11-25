// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript

function generateShape(integer){
  return Array(integer).fill(Array(integer).fill('+').join('') + '\n').join('').slice(0,-1)
}

function generateShape(n){
  return ("+".repeat(n)+"\n").repeat(n).trim()
}
