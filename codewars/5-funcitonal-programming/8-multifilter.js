// https://www.codewars.com/kata/56a298b27e9e994977000023/train/javascript

var multiFilter = function(...args){
	return function (n) {
		return args.every(fn => fn(n))
	}
};