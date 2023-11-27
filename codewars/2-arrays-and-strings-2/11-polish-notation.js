// https://www.codewars.com/kata/5e5b7f55c2e8ae0016f42339/train/javascript

function calculate(expression) {
 
	const stack = [];

	expression.split(' ').forEach(o => {
		stack.push(o);
		recursive(stack)
	})
	
	return Number(stack[0])
}

function recursive(stack) {
	const operators = ['+', '-', '*', '/'];
	if (
			stack.length > 2
			&& !operators.includes(stack[stack.length-1])
			&& !operators.includes(stack[stack.length-2])
	) {
		const second = stack.pop()
		const first = stack.pop()
		const operator = stack.pop()

		const calc = eval(first + ' ' + operator + ' ' + second)
		stack.push(calc);
		 

		if (
			stack.length > 2
			&& !operators.includes(stack[stack.length-1])
			&& !operators.includes(stack[stack.length-2])
		) { recursive (stack) }
	}
}