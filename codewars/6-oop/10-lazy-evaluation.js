// https://www.codewars.com/kata/53c2502d1dfa43f6420001e6/train/javascript

function Lazy() {
	this.fns = [];

	this.add = function(fn, ...args) {
		this.fns.push({fn, args})
		return this
	}

	this.invoke = function(target) {
		return this.fns.reduce((acc, cur) => {
			return cur.fn(...cur.args, ...acc)
		}, target)
	}
}
