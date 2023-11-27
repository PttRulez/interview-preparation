// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

function isPrime(num) {
  if (num < 0) return false

  const sqrt = Math.sqrt(num);
	const sqrtInt = parseInt(sqrt)

	if (sqrt === sqrtInt) return false

	for (let i = 2; i <= sqrtInt; i++) {
		
		if (num % i === 0) return false
	}

	return true;
}