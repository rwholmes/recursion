// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;


// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	// Case for simple non-object input or null
	if (typeof obj !== "object" || obj === null) {
		// Case for if string
  		if (typeof obj === "string") {
  			obj = '"' + obj + '"';
  		}
  		else if (typeof obj === "number" || obj === null) {
  			obj = '' + obj;
  		}
	}
	// Case for input is an object
	else {

	}
  	return obj;
};
