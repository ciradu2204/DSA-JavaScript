/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
//in A sorted array, they would never be a case where the mid point is greater than  right.Therefore 1st condition is nums[left] > nums[right] -> look to the right
    
//If the mid point is less than nums[right] then we know that the right side is sorted so we look the left
   let left = 0; 
   let right = nums.length -1; 
   let m = 0;
    while(left < right){  
     m = Math.floor((left + right)/2)
     if(nums[m] > nums[right]){
         left = m + 1;
     }else if(nums[m] < nums[right]){
         right = m
     }else{
         nums[left]
     }
     
    }
    
    return nums[left]
    
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