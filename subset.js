var subsets = function(nums) {
    let res = []; 
    let comb = []; 
    backtrack(-1, nums, res, comb); 
    return res; 
};
var backtrack = function(start, nums,res, comb){
    if(start >= nums.length){
       res.push([...comb]) 
        return; 
    }
    for(let i=start+1; i<nums.length; i++){
     comb.push(nums[i]); 
     backtrack(i+1, nums, res, comb); 
     comb.pop(); 
     backtrack(i+2, nums, res, comb);
    }
    return; 
}
subsets([1,2,3])

