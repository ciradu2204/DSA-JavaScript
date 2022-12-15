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
var longestUnivaluePath = function(root) {
    let longest = 0; 
    var helper = function(root){
        if(!root){
            return 0; 
        }
        

        const left = helper(root.left); 
        const right =  helper(root.right);
        let arrowRight = 0;  let arrowLeft = 0; 
        
        if(root.left?.val == root.val){
            arrowLeft = left + 1;  
        } 
        
        if(root.right?.val == root.val){
             arrowRight = right + 1; 
        } 

        longest =  Math.max(longest, arrowRight + arrowLeft); 

        return Math.max(arrowLeft, arrowRight); 
        
    }
    helper(root); 
    return longest;
};

/*
1. a variable to keep track of the longest, prev 
2. 

*/