// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  // your code here
  var nodes = [];
  node = node || document.body;
  // compare className to node's class
  
  var classes = node.className.split(' ');
  if(classes.indexOf(className) >= 0) {
  //save the nodes
    nodes.push(node);
  } 
  // iterate over the node's children
  for(var i = 0; i < node.children.length; i++) {
    if(node.children[i]) {

      nodes = nodes.concat(getElementsByClassName(className, node.children[i]));
    }
  }
    // save the child nodes
  return nodes;
};


