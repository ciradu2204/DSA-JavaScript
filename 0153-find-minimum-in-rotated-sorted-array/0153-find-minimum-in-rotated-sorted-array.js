/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
   let left = 0; 
   let right = nums.length -1; 
   let m = 0;
   let result = nums[m]
   while(left <= right){  
     if(nums[left] < nums[right]){
         //it is sorted;
         result = Math.min(result, nums[left])
         break;
     }
     m = Math.floor((left + right)/2)
     result = Math.min(result, nums[m])
     if(nums[m] >= nums[left]){
         left = m + 1;
     }else if(nums[m] < nums[left]){
         right = m
     } 
     
    }
    
    return result
    
};

/**
nums = [3, 4, 5, 1, 2]
Given a sorted rotated array
minimum element = 1
             0  1  2  3  4
Example 3 = [3, 4, 5, 1, 2]
                      p1  
                      p2
    m = (p2 + p1)/2  =2
    
    if(m-1 > 0 && nums[m-1] < nums[m] && nums[m-1]< nums[m+1]){
       p2 = m
    }else  if(m + 1 < nums.length && nums[m+1] < nums[m] && nums[m+1] < nums[m-1]){
       p1 = m+1
    }else{
      return nums[m]
    }
    
    if()
brute force = O(n)
binary search = O(logn)






**/