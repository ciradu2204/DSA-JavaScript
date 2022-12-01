/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
     if(p == null){
         return q == null;
     } 

     if(q == null){
         return p == null;
     }
     if(p.left == null && p.right == null){
         return q.left == null && q.right == null && q.val == p.val;
     }
    
    
    if(isSameTree(p.left, q.left) && p.val == q.val){ //[null, null], ][4,2] 
        return isSameTree(p.right, q.right) && p.val == q.val; // [2,4] 
    }
    return false;
};



