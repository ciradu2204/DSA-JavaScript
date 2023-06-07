/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
   if(arr.length === 0) return arr;
   if(n === 0) return arr;
   return recursive(arr, -1, n)
};

var recursive = (arr, currentDepth, depth) => {
    if(currentDepth >= depth){
        return [arr]  
    }
    let currentResult = [] 
    for(let i=0; i<arr.length; i++){
        if(arr[i].length !== undefined && arr[i].length >=0){
            let result = recursive(arr[i], currentDepth+1, depth)
            currentResult.push(...result)
        }else{
            currentResult.push(arr[i]) 
        }
        
    }
    return currentResult;
    
}


/*
looping 
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

*/