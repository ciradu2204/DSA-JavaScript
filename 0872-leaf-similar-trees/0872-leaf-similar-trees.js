/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
     if(root1 == null && root2 == null ){
         return true;
     }else if(root1 == null || root2 == null ){
         return false;
     }
     let result1 = []; 
     let result2 = []; 

     traverse(root1, result1); 
     traverse(root2, result2); 
     if(result1.length != result2.length){
         return false;
     }
     for(let i=0; i<result1.length; i++){
          if(result1[i] !== result2[i]){
            return false; 
        }
        
    }   
    return true;
};

var traverse = function(root, array){
    if(root == null){
        return;
    }
    if(root.left == null && root.right == null){
        array.push(root.val); 
        return; 
    }

    traverse(root.left, array); 
    traverse(root.right, array);
}

/* 
- if root1.left && root1.right && root1.left && root2.right == null > return root
-
*/


