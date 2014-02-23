// If life was easy, we could just do things the easy way:
//var getElementsByClassName = function (className) {
  // return document.getElementsByClassName(className);
//};

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var results = [];
  // need to create an inner function that has startnode param
  var innerFunc = function(startNode) {
    // Loop through the child nodes
    _.each(startNode.childNodes, function(currentNode) {
      if (currentNode.hasChildNodes()) {
        innerFunc(currentNode);
      }
      if (currentNode.classList !== undefined && currentNode.classList.contains(className)) {
        results.push(currentNode);
      }
    });
  }
  innerFunc(document.body);
  return results;
};



