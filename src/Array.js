// overriding Array.map
Array.prototype.map = function(f) {
	
	if(typeof f !== 'function') {
		throw new Error('Arguments passed in to .map() should be a function');
	}

	var len = this.length,
		index,
		results = [],
		currVal;

	for(index = 0; index < len; index++) {
		currVal = f.call(this,this[index]);
		if(currVal) {
			results.push(currVal);
		}
	}

	return results;
}


var arr = [1,2,3,4];

var odd = function(a) {
	if(a % 2 !== 0) {
		return a;
	}
};

var increment = function(a) {
	return a+= 1;
};

var oddElements = arr.map(odd);
var incrementedElements = arr.map(increment);

console.log(oddElements);
console.log(incrementedElements);


/*************** Overriding Array.push() ********************/

Array.prototype.push = function() {
	
	if(!arguments.length) {
		throw new Error('Array.push() requires a value to be inserted');
	}

	// only accept one argument to be pushed irrespective of the variables passed in
	this[this.length] = arguments[0];
}


var arr = [];

arr.push(23);
arr.push('some string');
arr.push({'name' : "Pranay"});

console.log(arr);


/*************** Overriding Array.pop() ********************/


Array.prototype.pop = function() {
	
	if(!this.length) {
		return;
	}

	this.length = (this.length - 1); 
}

var arr = [1,2,3,4,5];

arr.pop();
arr.pop();

console.log(arr);




/*************** Overriding Array.splice() ********************/


Array.prototype.splice = function(from,to) {
	
	if(typeof from !== 'number' || typeof to !== 'number') {
		throw new Error('Arguments passed in to Array.splice() should be numbers');
		return;
	}

	var index = 1,
		diff = to - from,
		len = this.length;
	diff += 1;
	var cloneDiff = diff;

	while(to < len) {
		this[from] = this[to + 1];
		to+= 1;
		from+= 1;
	}


	this.length = (this.length - cloneDiff);
}


var arr = [1,2,3,4,5,6,7];

arr.splice(1,3);



console.log(arr);

/*************** Overriding Array.slice() ********************/


Array.prototype.slice = function(from,to) {

	if(typeof from !== 'number' || typeof to !== 'number') {
		throw new Error('Arguments passed in Array.slice() should be numbers');
		return;
	}

	var result = [],
		currVal,
		index = 0;

	while(from <= to) {
		currVal = this[from];
		if(currVal) {
			result[index] = currVal;
			index++;
		}
		from++;
	}

	return result;
}


var arr = [1,2,3,4,5];

var slicedArray = arr.slice(1,3);

console.log(slicedArray);

/*************** Overriding Array.concat() ********************/

Array.prototype.concat = function(arguments) {
	
	if(!arguments.length) {
		return this;
	}

	var len = arguments.length,
		originalArray = this,
		cloneArray = [],
		index = 0,
		currElem;
	
	while(index < this.length) {
		cloneArray[index] = this[index];
		index++;
	}

	index = 0;

	function processArray(originalArray,elemArray) {
		var len = elemArray.length,
			originalLength = originalArray.length,
			index = 0,
			currElem;

		while(index < len) {
			currElem = elemArray[index];
			if(currElem.constructor == Array) {
				processArray(elemArray,currElem);
			}
			index++;
		}

		index = 0;

		while(index < elemArray.length) {
			originalArray[originalLength] = elemArray[index];
			originalLength++;
		}

		return originalArray;
	}

	while(index < len) {

		currElem = arguments[index];
		
		if(currElem.constructor == Array) {
			processArray(cloneArray,currElem);
			index++;
			continue;
		}

		cloneArray[cloneArray.length] = currElem;
		index++;
	}

	return cloneArray;
}

var arr = [2,3,4];
var arrToConcat = [5,6,7,'something'];

console.log(arr.concat(arrToConcat));
console.log(arr);