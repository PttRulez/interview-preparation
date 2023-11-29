Function.prototype.call2 = function(obj, ...args) {
  const old = obj.fnRef
  obj.fnRef = this
	const res = obj.fnRef(...args)
  obj.fnRef = old
  return res
};
