/*
	1. search
	2. split
	3. substr
	4. indexOf
	5. lastIndexOf
	6. anchor
	7. concat
	8. match

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

console.log(str.substr(4,3));


String.prototype.indexOf = function(val) {

	var index = 0,
		len = this.length,
		indexFound = -1;

	while(index < len) {
		if(this[index] == val) {
			indexFound = index;
			break;
		}
		index++;
	}

	return indexFound;
};


var str = "Pranay Dubey";

console.log(str.indexOf("a"));

String.prototype.lastIndexOf = function(val) {

	var len = this.length,
		indexFound = -1;

	while(len--) {
		if(this[len] == val) {
			indexFound = len;
			break;
		}
	}

	return indexFound;
};

var str = "Pranay Dubey";

console.log(str.lastIndexOf("y"));

String.prototype.anchor = function(name) {
	var value = this.valueOf() || '',
		elemName = name || undefined;

	return '<a name="' + elemName + '">' + value + '</a>';
};

var str = "Pranay Dubey";

console.log(str.anchor('something'));

String.prototype.concat = function(str) {
	str = str || '';
	return this.valueOf() + str;
};

var str = "Pranay";

console.log(str.concat(' Dubey'));


String.prototype.match = function(val) {
	
	if(typeof val == 'object' && val.constructor == RegExp) {
		return val.exec(this.valueOf());
	}

	var arr = null,
		index = 0,
		len = this.length;

	while(index < len) {
		if(this[index] == val) {
			arr = [val];
			arr["index"] = index;
			arr["input"] = this.valueOf();
			break;
 		}
 		index++;
	} 

	return arr;
};

var str = "Pranay Dubey";

console.log(str.match('a'));

console.log(str.match(/a/));