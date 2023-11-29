// https://www.codewars.com/kata/55f4a44eb72a0fa91600001e/train/javascript

let res = '';

function createMessage(...args) {
	if(args.length === 0) {
    const a = res
    res = ''
    return a.trim()
  }

	res += args[0] + ' ';
	return createMessage;
}