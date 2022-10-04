/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a -b); 
    let p1 = 0; 
    let p2 = 1; 
    let result = 0; 
    console.log(nums)
    while(p2< nums.length){
     result += Math.min(nums[p1], nums[p2]);
     p1 +=2; 
     p2 +=2; 
    }
    return result; 
};

/**
Given: array
nums = [1,4,3,2]
1, 2, 2, 5, 6, 6
      P1  P2 
Algorithm: 
1. nums/2 = 3          
2. while loop 
**/