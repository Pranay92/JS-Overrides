
Object.prototype.hasOwnProperty = function(key) {
	
	if(!this[key] || !this.constructor) {
		return false;
	}

	if(this.constructor[key] && this[key]) {
		if(this.constructor[key] == this[key]) {
			return false;
		}
	}

	if(this[key] && this[key]['prototype']) {
		return true;
	}

	return true;
};	


var obj = {'name' : 'something'};

console.log(obj.hasOwnProperty('name'));


Object.prototype.toString = function() {
	var str = new String(this);
	return this.valueOf();
};

console.log(obj.toString());

