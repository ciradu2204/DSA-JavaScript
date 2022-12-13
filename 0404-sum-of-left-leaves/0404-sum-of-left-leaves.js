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
var sumOfLeftLeaves = function(root) {
    let sum = 0; 
    return helper(root, left = false); 
};

var helper = function(root, left){
   if(root == null){
       return 0; 
   }
   if(root.left == null && root.right == null){
        return  left? root.val: 0 ;
   }
   
   return helper(root.left, true) +  helper(root.right); 
    

  }

/**
1. keep a sum variable 
2. create a function with the sum => sumOfLeftLeaves(root, sum) 
3. add to the sum when the root.left == null && root.right == null
4. helper(root.left, sum);  helper(root.right, sum)


**/ 