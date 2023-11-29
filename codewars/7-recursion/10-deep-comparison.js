// https://www.codewars.com/kata/53c235e4d5cd9c397200021d/train/javascript

function deepCompare(obj1, obj2) {
	
	if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
		return obj1 === obj2
	}

	if (
		(typeof obj1 === 'object' && typeof obj2 !== 'object')
		|| (typeof obj1 !== 'object' && typeof obj2 === 'object')
		|| (Array.isArray(obj1) && !Array.isArray(obj2))
		|| (!Array.isArray(obj1) && Array.isArray(obj2))
		) { 
		return false
	}

	const arr1 = Object.entries(obj1);
	const arr2 = Object.entries(obj2);
	if (arr1.length !== arr2.length) return false

	return arr1.every(([key, value]) => deepCompare(value, obj2[key]))
}