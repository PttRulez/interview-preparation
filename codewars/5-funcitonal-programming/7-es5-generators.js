// https://www.codewars.com/kata/53c29a6abb5187180d000b65/train/javascript

function generator(sequencer, ...args) {
	return {
		next: function () {
			const a = this.cur;
			this.cur++
			return this.fn(a)
		},
		cur: 0,
		fn: sequencer(...args)
	}
}

function dummySeq() {
  return function() {
    return "dummy";
  };
}

function factorialSeq() {
	return function fac(n) {
		if (n === 0 || n === 1) return 1
    return n * fac(n-1);
  };
}

function fibonacciSeq() {
	return function fib(n) {
		if (n === 0 || n === 1) return 1
    return fib(n-1) + fib(n-2);
  };
}

function rangeSeq(start, step) {
	let cur = start
	return function () {
		const res = cur;
		cur += step;
		return res
	}
}

function primeSeq() {
	let cur = 1

	function isPrime(n) {
		const sqrt = Math.sqrt(n);
		for (let i = 2; i <= sqrt; i++) {
			if (n % i === 0) return false
		}
		return true
	}

	return function () {
		cur++
		while(!isPrime(cur)) {
			cur++;
		}
		return cur;
	}
}

function partialSumSeq(...args) {
	let sum = 0
	let i = 0;
	return function() {
		if (!args[i]) throw new Error('end')
		sum += args[i]
		i++
		return sum
	}
}

const seq = generator(partialSumSeq,1, 3, 7, 2, 0);
console.log(seq.next())
console.log(seq.next())
console.log(seq.next())
console.log(seq.next())
console.log(seq.next())
console.log(seq.next())