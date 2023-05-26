/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let start = 0; 
    let end = 1; 
    let max = 0;
    
    while(end < prices.length){
        let diff = prices[end] - prices[start]
        if(diff > max){
            max = diff;
        }
        
        if(prices[start] > prices[end]){
            start = end; 
            end = start +1;
        }else{
            end++
        }
    }
    return max; 
};

/**
- if(p1 > p2)
-   p1++; 
    p2++
  else{
   p2++
  }
  
  let diff =  prices[p2] -prices[p1]; 
  if(diff > max){
   max = diff; 
  }
  return max;
**/