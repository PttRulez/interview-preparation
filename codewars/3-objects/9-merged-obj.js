// https://www.codewars.com/kata/596cf5b0e1665a2d02000007/train/javascript

function objConcat(arr){
  return arr.reduce((acc, cur,) => {
		Object.keys(cur).forEach(key => {
			acc[key] = cur[key]
		})
    return acc
	}, {})
}
