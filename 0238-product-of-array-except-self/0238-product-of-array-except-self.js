/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = []
    
    result[0] =1;
    let leftProduct = result[0];
    for(let i=0; i<nums.length;i++){
        leftProduct = leftProduct*nums[i]
        result.push(leftProduct);
    }
    
    let RightProduct = 1;
    for(let i=result.length-1; i>0; i--){
        let x = i-1;
        let value = RightProduct * nums[x]
        result[i] = result[x] * RightProduct;
        RightProduct = value;
    }
    result.shift()
    return result;
    
};

/*
      rightProduct = 12;
Input: [1,2,3,4]
Output:[1,2,8,6]
        
       

       
       
       
       

Brute force: O(n2) time complexity, O(n) space complexity






*/