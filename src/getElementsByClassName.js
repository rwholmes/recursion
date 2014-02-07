// If life was easy, we could just do things the easy way:
//var getElementsByClassName = function (className) {
  // return document.getElementsByClassName(className);
//};

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var results = [];
  var innerFunc = function (startnode) {
    if (startnode === undefined) {
    	var startNode = document.body;
    }
    else {
    	var startNode = startnode;
    }
    var currentNode;
    for (var i=0; i < startNode.childNodes.length; i++) {
      currentNode = startNode.childNodes[i];
    	// Check if the node has children and if it does search them
      if (currentNode.hasChildNodes()) {
        innerFunc(currentNode);
      }
      // Check that there is a classlist and then search for match
    	if (currentNode.classList !== undefined) {
    		var hasClass = currentNode.classList.contains(className);
    		// Check if the node has the classname we're looking for
    		if (hasClass) {
    			results.push(currentNode);
          //console.log(results);
    		}
    	}
    }
  }
  innerFunc();
  // Results
  return results;  
};



