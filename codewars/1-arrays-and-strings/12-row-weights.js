// https://www.codewars.com/kata/row-weights/train/javascript

function rowWeights(array){
  return array.reduce((acc, cur, index) => {
    if (index % 2 === 0) {
      acc[0] += cur
    } else {
      acc[1] += cur
    }
    return acc
  }, [0, 0])
}