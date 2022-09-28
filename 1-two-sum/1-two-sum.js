/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map(); 
    for(let i=0; i<nums.length; i++){
        let value = target - nums[i];
        if(map.has(value)){
            return [map.get(value), i]
        }else{
            map.set(nums[i], i); 
        }
    }
    
    return []; 
};

/** 
[2, 7, 11, 15]  -> 9 
    
Brute force: O(n2)
Optimal solution: O(n)



**/