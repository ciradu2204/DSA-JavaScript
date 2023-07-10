/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let p1 = 0; 
    let p2 = nums.length -1;
    while(p1 < p2){
        let mid = Math.floor((p1+p2)/2)
        if(nums[mid] > nums[p2]){
            p1 = mid + 1;
        }else{
            p2 = mid; 
        }
    }
    return nums[p1]; 

};


/* 
-We need to find pivot element
 [2, 1]
  p1 
  m
      p2
 0 1 2 3 4
[3,4,5,1,2]
       p1
       m
nums = [4,5,6,7,0, 1,2]
                p1 m   
                     p2

          p2
result= nums[left]
if(nums[p1] < nums[p2]){
   return nums[p1]
}
midpoint = (p1 +p2)/2

case 1: midpoint > left -> check left
case 2: midpoint < left -> check right


*/