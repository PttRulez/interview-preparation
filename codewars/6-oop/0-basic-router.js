// https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript

var Router = function() {
	this.handlers = {}

	this.bind = (route, method, handler) => {
		this.handlers[route+method] = handler
	}

	this.runRequest = (route, method) => this.handlers[route + method] ? this.handlers[route + method]() : 'Error 404: Not Found'
}