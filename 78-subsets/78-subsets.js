/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []; 
    let comb = []; 
    backtrack(0, nums, res, comb); 
    return res; 
};
var backtrack = function(start, nums,res, comb){
     if(start >= nums.length){
        res.push([...comb]) 
        return; 
    }
     comb.push(nums[start]); 
     backtrack(start+1,nums, res, comb); 
     comb.pop(); 
     backtrack(start+1, nums, res, comb);
    
     return; 
}

/**
we need to do the brute force approach of finding all possible subsets-> backtracking
Algorithm: 
Time complexity: k(n^k ) where k is the size of array and n is the number of combinations

1. create a comb
2. loop through the array starting from 0 
3. backtrak at each array element to find possible comb 

Test: 
nums = [1,2,3]
    1            .
   / \          /|\
  2    3       2 3 
 / \          / \
3            3   
*/