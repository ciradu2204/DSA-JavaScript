/** 
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []; 
    let resultEl = []; 
    combinations(1, n, 0, k, result, resultEl); 
    return result; 
};
var combinations = function(current,n, arraySize, k, result, resultEl){
    if(arraySize == k){
        result.push([...resultEl]);
        return;
    }
    if(current > n){
        return; 
    }
   resultEl.push(current);  
   combinations(current+1,n,arraySize+1,k,result, resultEl);
   resultEl.pop()
   combinations(current+1,n,arraySize,k,result, resultEl);
   return; 
}


/*
 [1,2,3,4]
 Algorithm: brute force approach
 1. two nested loops 
 2. start from i 
 3. start from j=i+1
 4. 
 Algorithm: Optimized approach - O(kn^k)
 1.create a subarray 
 2.create a combinations of size k 
 3.add the subarray in the result array

*/