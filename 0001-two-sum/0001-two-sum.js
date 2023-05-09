/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0; i<nums.length; i++){
        let difference = target - nums[i]
        if(map.has(difference)){
            let index = map.get(difference);
            return [index, i]
        }else{
            map.set(nums[i], i)
        }
    }
};

/** 
  Hashset = [[2,1], [7, 1]]
 [2, 7, 11, 15]

**/