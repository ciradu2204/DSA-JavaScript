/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    //iterative approach: O(n)
    let start = 0; 
    let end = nums.length-1; 
    while(start <= end){
        let mid = parseInt(start + (end - start)/2); 
        console.log(mid)
          if(nums[mid] == target){
            return mid; 
        }else if(nums[mid] < target){
            start++; 
        }else if(nums[mid] > target){
            end--; 
        }
    }
    return -1; 
};