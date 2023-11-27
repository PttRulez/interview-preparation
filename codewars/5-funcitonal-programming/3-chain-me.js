// [codewars](https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript) 

function chain(input, fs) {
	return fs.reduce((acc, fn) => fn(acc), input)
}