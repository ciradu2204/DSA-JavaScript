/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    /*iterative approach: O(n)
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
    return -1;*/ 
    //recursive approach
   return bs(nums, target, 0, nums.length-1); 
};

function bs(nums, target, start, end){
    if(start > end) return -1; 
    let mid = parseInt(start + (end -start)/2); 
    if(nums[mid] > target){
        return bs(nums, target, start, mid-1)
    }else if(nums[mid] < target){
       return bs(nums, target, mid+1, end)
    }
    return mid; 
}