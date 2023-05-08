/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
   return  arr.map((value, index) => {
         return fn(value, index)
     })
};