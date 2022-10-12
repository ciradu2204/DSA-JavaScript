/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    let stack= []; 
    let map = {}; 
    for(let i = nums2.length - 1; i >= 0; --i){
        while(stack.length && stack[stack.length-1] <= nums2[i]){
            stack.pop();
        }
        map[nums2[i]] = stack.length? stack[stack.length-1]: -1; 
        stack.push(nums2[i])
    }
   return nums1.map(n => map[n]);
    
    
}
      

/**
num1 = [4,1,2]
        p1
nums2 = [1,3,4,2]
         prev = 3;         
stack = [1,]


**/