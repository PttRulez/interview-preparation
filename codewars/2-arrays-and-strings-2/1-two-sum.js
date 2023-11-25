// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(numbers, target) {
		const map = {}
    
		for (let index = 0; index < numbers.length; index++) {
			if (map[target - numbers[index]] !== undefined) {
				return [map[target - numbers[index]], index]
			}

			if (!map[numbers[index]]) {
				map[numbers[index]] = index;
			}
		}
}

console.log(twoSum([1, 2, 3], 4))