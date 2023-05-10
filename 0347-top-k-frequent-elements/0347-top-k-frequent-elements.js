/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i=0; i<nums.length;i++){
         let value = map.get(nums[i]) ||  0; 
         map.set(nums[i], value+1)
    }
    let entries = [...map.entries()].sort((a,b) => b[1]-a[1])
    console.log(entries)
    let result = []
    for(let i=0; i<k;i++){
        result.push(entries[i][0]);
    }
    return result;
     
};

/*
is the array sorted, I guess no
Brute force solution:
Array = [1,1,1,2,2,3] 
-use a hashmap to keep track of the counts 
-sort based on the values 
 return the sorted array
 
 





*/