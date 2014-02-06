// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;


// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	if (obj === undefined) {
		return undefined;
	}
	// Case for simple non-object input or null
	else if (typeof obj !== 'object' || obj === null) {
		// Case for if string
  		if (typeof obj === 'string') {
  			obj = '"' + obj + '"';
  		}
  		else {
  			obj = '' + obj;
  		}
  		return obj;
	}
	// Case for input is an object
	else {
		var objContents = [];
		var val;
		var type;
		for (var key in obj) {
			// Going to use recursion to call the top part if the val is a string/num
			val = obj[key];
			type = typeof val;
			// Case for value is a string
			if (type === 'string') {
				val = '"' + val + '"';
			}
			// If the value is an object we need to stringify that object using recursion
			else if (type === 'object') {
				val = stringifyJSON(val);
			}
			if (Array.isArray(obj)) {
				objContents.push(val);
			}
			else {
				objContents.push('"' + key + '":' + val);
			}
		}
		if (Array.isArray(obj)) {
			var result = '[' + objContents + ']';
		}
		else {
			var result = '{' + objContents + '}';
		}
		return result;
	}
};




