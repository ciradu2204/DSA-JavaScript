/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let result = []; 
    postTraversal(root, result)
    return result; 
    
};
var postTraversal = function(root, result){
      if(root == null){
         return result
    }
    for(let i=0; i<root.children.length; i++){
        postTraversal(root.children[i], result); 
    }
    result.push(root.val)  
    return result; 
 }

/*
post traversal: 
 
left, right, root

 - Keep an array to store the values
 - Check to the left 
 - Check to the right 
 - Add the root


*/