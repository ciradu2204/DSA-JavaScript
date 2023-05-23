/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
     let resultArray = []
     nums = nums.sort((a,b) => a-b)
    
    for(let i=0; i<nums.length; i++){
         if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        let pointer1 = i+1; 
        let pointer2 = nums.length-1;
        while(pointer1 < pointer2){
            let result = nums[pointer1] + nums[pointer2] + nums[i]
            if( result === 0){
                resultArray.push([nums[i],nums[pointer1], nums[pointer2]])
                pointer1++;
                pointer2--;
                while(nums[pointer1] == nums[pointer1 -1] && pointer1<pointer2){
                    pointer1++;
                }
            }else if(result > 0){
               pointer2--
            }else{
              pointer1++
            }
            
        }
    }
    return resultArray;
  
};

/**
[-1,0,1,2,-1,-4]
[-1,-1,-4, 0, 1, 2]
           p     p
**/