// https://www.codewars.com/kata/i-spy/train/javascript


function spyOn (func) {
	let count = 0;
	let wasCalledSet = new Set();
	let returnedSet = new Set();

  function a(...args) {
		const res = func(...args);
		returnedSet.add(res)
		count++
		args.forEach(a => wasCalledSet.add(a))
		return res
	}

	a.callCount = () => count
	a.wasCalledWith = (n) => wasCalledSet.has(n)
	a.returned = (n) => returnedSet.has(n)

	return a;
}
