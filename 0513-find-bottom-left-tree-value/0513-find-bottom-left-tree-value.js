/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let array = [];  
    array.push(root); 
    let level = 0; 
    let result  = [root.val, level]; 
    while(array.length > 0){
       let size = array.length; 
       level++;
       for(let i=0; i<size; i++){
           let current = array.shift();
            if(current.left && result[1] < level){
               result = [current.left.val, level]
           }else if(current.right && result[1] < level){
               result = [current.right.val, level]
           }
           
           if(current.left){
               array.push(current.left)
           }

           if(current.right){
             array.push(current.right)
           }
       }
    }

    return result[0]; 
};

/**
return the left most value
 

**/