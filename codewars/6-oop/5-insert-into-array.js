// https://www.codewars.com/kata/581dc1852d68e751180000c6/train/javascript

Object.defineProperty(Array.prototype, 'insert', { 
  enumerable: false,
  value: function(index, value) {
      this.splice(index, 0, value);
      return this;
    }
  }
);
