Function.prototype.bind2 = function(obj) {
  if (!this.binded) {
    obj.fnRef = this
    this.binded = true
  }
  return obj.fnRef
};
