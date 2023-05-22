/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(); 
    let longest = 0;
    for(let num of nums){
        set.add(num)
    }
    for(let num of nums){
        let next = num;
        if(!set.has(num-1)){
           while(set.has(next + 1)){
            next++; 
           }  
        }
        let sequence = next-num+1; 
        longest = Math.max(sequence, longest)
    }
    return longest
};