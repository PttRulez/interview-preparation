function validParentheses(parenStr) {
  const stack = [];
	const arr = parenStr.split('');

	for (const p of arr) {
		if (stack[stack.length - 1] === '(' && p === ')') {
			stack.pop();
		} else [
			stack.push(p)
		]
	}

	return stack.length === 0;
}