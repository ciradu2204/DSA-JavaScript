/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set(); 
     for(let i=0; i<nums.length; i++){
         if(set.has(nums[i])){
             return true;
         }else{
             set.add(nums[i])
         }
     }
     return false;
};

/*

Input: nums = [1, 2, 3, 1]
output: true

Brute Force approach:
set = [1, 2, 3, ]
for(i -> n){
   if(nums[i] exit in set){
       return true;
   }else{
       set.add(nums[i], 0)
   }
} where n = nums.length
return false
Time & space: O(n)



*/