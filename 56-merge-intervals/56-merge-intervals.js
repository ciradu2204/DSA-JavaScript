/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = []; 
     for(let i=0;i<intervals.length; i++){
         let prev  = result[result.length-1]; 
         let current = intervals[i]; 
         if(result.length == 0 || prev[1] < current[0]){
            result.push(current) ;
         }else{
             prev[1] = Math.max(prev[1], current[1])
         }
    }
    return result;
};

/**
Given an array of intervals
Overlapping if: 
 1. b1 >= a1 && b1 <= a2 && b2 >=a1 && b2 <=a2 => [a1,a2]
 2. b1 >= a1 && b1 <= a2 => [a1, b2]
 
 Algorithm: 
 1. sort the elements 
 2. loop through the input starting from the second array
 3. check if there is an overlap
 4. if yes, create a new interval and insert it in an array
 5. else, add the current interval
 
 Example:
 
 [[1,6], [8,10],[15,18]]
      
  [1,6], [8,10], [15, 18]
**/