// https://www.codewars.com/kata/529b54d9aba78c924d00088e/train/javascript

var format = function (str, obj) {
	return str.replaceAll(/\{([^\}]+)\}/g, (match, value) => obj[value] ?? match)
};

var format = function (str, obj) {
  var re = new RegExp('{(' + Object.keys(obj).join('|') + ')}', 'g');
  return str.replace(re, function (match, capture) { return obj[capture] });
};