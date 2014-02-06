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
			// Recursively call stringify on value
			val = stringifyJSON(val);
			if (Array.isArray(obj)) {
				// If obj is an array push only the value
				objContents.push(val);
			}
			else {
				// If its an object push the key as well
				objContents.push('"' + key + '":' + val);
			}
		}
		// If obj is an array add square brackets
		if (Array.isArray(obj)) {
			var result = '[' + objContents + ']';
		}
		// If obj is an object add curly brackets
		else {
			var result = '{' + objContents + '}';
		}
		return result;
	}
};




