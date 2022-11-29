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

/**
//Recursive solution
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
*/
//Iterative Solution
var postorder = function(root) {
     let map = new Map();  
    let result = [];   
    map.set(root, [null, false]); 
    while(root != null){
        console.log(root)
      if(root.children.length == 0 || (map.has(root.children[root.children.length-1]) && map.get(root.children[root.children.length -1])[1] == true )){
        result.push(root.val); 
        let value = map.get(root); 
        value[1] = true; 
        map.set(root, value)
        root = value[0]; 
     }else{
        for(let i=0; i<root.children.length; i++){
          if(!map.has(root.children[i])){
              map.set(root.children[i], [root, false])
              root = root.children[i]; 
              break; 
          }
        }
      }
    }

return result; 
};

/*
Throught process
post traversal: 
left, right, root

 - Keep an array to store the values
 - Check to the left 
 - Check to the right 
 - Add the root
 
post traversal: Iterative solution

         1
       / | \
      3  2  4
    /  \
   5    6

  parent = null;

  1. while loop 
  2. Keep track of the parent and visited (hashMap)
  3. loop through the elements and target the first element which is not visited and make it the root
  4.   

*/