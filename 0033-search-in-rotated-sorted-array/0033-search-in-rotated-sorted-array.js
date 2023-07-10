/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length == 0) return -1;

    
    let pivotElement = findPivotElement(nums)
    let answer =  findElement(0, pivotElement-1, target, nums)
    if(answer != -1){
        return answer;
    }
    return findElement(pivotElement, nums.length-1, target, nums)

};

const findPivotElement = (nums) => {
     let l = 0; 
     let r = nums.length -1;
      while(l < r){
        let m = Math.floor((l+r)/2)
        if(nums[m] > nums[r]){
            l = m+1
        }else if(nums[m] < nums[r]){
            r = m
        }
    }
    return l;

}

const findElement = (l, r, t, nums) => {
    let left = l;
    let right = r
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid] > t){
            right = mid -1;
        }else if(nums[mid] < t){
            left = mid + 1
        }else{
            return mid
        }
    }
    return -1;
}

/*   
[3,5,1]
 0 1 2
//case 1: when the mid < target -> we want to look a side with larger elements
  case 2 when the mid > target _> we want to look a side with smaller elements 
  

*/