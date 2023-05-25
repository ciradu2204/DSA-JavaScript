/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0; 
    let end = height.length -1; 
    let max = 0;
     while(start < end){
        let area = (end-start)*Math.min(height[start],height[end])
         if(height[start] < height[end]){
            start++
        }else if(height[start] > height[end]){
            end--;
        }else{
            start++;
            end--;
        }
         if(area > max){
             max = area;
         }
        
    }
 
    
  return max;
    
};

/**
Given array = [1,8,6,2,5,4,8,3,7]
- find the largest element- 
- find the second largest element 



**/