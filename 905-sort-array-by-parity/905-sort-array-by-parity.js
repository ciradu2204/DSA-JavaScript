/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let p1= 0; 
    let p2 = nums.length-1; 
    while(p1 < p2){
        if(nums[p1] %2 !== 0 && nums[p2] % 2 ===0){
            let temp = nums[p1]; 
            nums[p1] = nums[p2]; 
            nums[p2] = temp; 
            p1++; 
            p2--; 
        }else if(nums[p1] % 2 === 0){
            p1++; 
        }else if(nums[p2] % 2 !== 0){
            p2--; 
        }
    }
    return nums; 
};

/**
nums = [4,2,1,3]
        
Algorithm: two pointers
1. if p2 -> even and p1 -> odd -> swap, increment

**/