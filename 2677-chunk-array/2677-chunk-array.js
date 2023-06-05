/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
     let resultArray = []
     let index = 0;
     while(index < arr.length){
         resultArray.push(arr.slice(index, index+size))
          index +=size
     }
 
    return resultArray
};
