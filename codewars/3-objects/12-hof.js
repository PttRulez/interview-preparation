// https://www.codewars.com/kata/coding-meetup-number-2-higher-order-functions-series-greet-developers/train/javascript

function greetDevelopers(list) {
	return list.map(i => {
		i.greeting = `Hi ${i.firstName}, what do you like the most about ${i.language}?`
    return i;
	})
}
