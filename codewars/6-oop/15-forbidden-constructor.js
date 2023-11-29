// https://www.codewars.com/kata/551e467e24b7a4e0b20001e8/train/javascript

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.create = function(x, y) {
	return new Point(x, y)
}