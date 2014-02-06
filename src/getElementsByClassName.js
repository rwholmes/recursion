// If life was easy, we could just do things the easy way:
//var getElementsByClassName = function (className) {
  // return document.getElementsByClassName(className);
//};

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var results = [];
  var docBody = document.body;
  var allNodes = docBody.childNodes; // Grab all of the nodes so we can loop through them
  for (var i=0; i < allNodes.length; i++) {
  	if (allNodes[i].classList !== undefined) {
  		var hasClass = allNodes[i].classList.contains(className);
  	}
  	//var hasChildren = allNodes[i].childNodes.length > 0;
  	// Check if the node has the classname we're looking for
  	if (hasClass) {
  		results.push(allNodes[i]);
  	}
  	// Check if the node has children and if it does search them
  	//if (hasChildren) {
  		//getElementsByClassName.call(allNodes[i], className);
  	//}
  }
  // Results
  return results;
};
