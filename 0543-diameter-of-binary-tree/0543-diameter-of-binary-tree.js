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
var diameterOfBinaryTree = function(root) {
    let dia = 0; 

    var helper = function(root){
     if(!root){
         return -1; 
     }
      
     let lf = 1 + helper(root.left); 
     let rt = 1 + helper(root.right); 
      
     dia = Math.max(dia, lf + rt);   
     return Math.max(lf, rt); 
   }
   helper(root); 
   return dia; 
  
};



/**
1. Given a root 


**/