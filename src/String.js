/*
	1. search
	2. split
	3. substr
	4. indexOf
	5. lastIndexOf

*/

// TODO implement accepting regular expressions
String.prototype.search = function(val) {
	
	if(!val || !this.length) {
		return 0;
	}

	var len = this.length,
		index,
		indexFound = -1;

	for(index = 0; index < len; index++) {
		if(this[index] == val) {
			indexFound = index;
			break;
		}
	}

	return indexFound;

};



var str = 'Pranay';

console.log(str.search('r'));


String.prototype.split = function(cond) {
	
	if(!cond) {
		return [this.valueOf()];
	}

	var len = this.length,
		currSub = '',
		index,
		arr = [];

	for(index = 0; index < len; index++) {
		
		if(this[index] == cond) {
			arr.push(currSub);
			currSub = '';
			continue;
		}
		currSub += this[index];
	}

	if(currSub) {
		arr.push(currSub);
	}

	return arr;
};


var str =  'Pranay Dubey';

console.log(str.split(' '));


String.prototype.substr = function(from,to) {
	
	if(!from) {
		return this.valueOf();
	}

	if(to) {
		to = from + (to - 1);
	}

	if(!to) {
		to = this.length - 1;
	}

	var arr = [];

	for(var index = from; index <= to; index++) {
		arr.push(this[index]);
	}

	return arr;
};


var str = 'Pranay Dubey';

console.log(str.substr(4,3))