/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
     let resultArray = []
     let chunkedArray = []
     for(let i= 0; i<arr.length; i++){
         if(chunkedArray.length < size){
             chunkedArray.push(arr[i])
         }else{
            resultArray.push(chunkedArray)
            chunkedArray = [arr[i]]
         }
     }
    if(chunkedArray.length >0){
        resultArray.push(chunkedArray)
    }
    return resultArray
};
