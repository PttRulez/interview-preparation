// https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript

function NamedOne(first, last) {
    this._firstName = first;
    this._lastName = last;
    this._fullName = this._firstName + ' ' + this._lastName;
}



Object.defineProperty(NamedOne.prototype, "firstName", {
    get: function() {
      return this._firstName;
    },
		set: function(v)  {
			this._firstName = v
			this._fullName = `${v} ${this._lastName}`
		}
});

Object.defineProperty(NamedOne.prototype, "lastName", {
    get: function() {
      return this._lastName;
    },
		set: function(v)  {
			this._lastName = v
			this._fullName = `${this._firstName} ${v}`
		}
});

Object.defineProperty(NamedOne.prototype, "fullName", {
    get: function() {
      return this._fullName;
    },
		set: function(v)  {
			
			const [first, last] = v.split(' ')
			if (first && last) {
				this._fullName = v
				this._firstName = first
				this._lastName = last
			}
			
		}
});

const a = new NamedOne('A', 'b').firstName
console.log(a)