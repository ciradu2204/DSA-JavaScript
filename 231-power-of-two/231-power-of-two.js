/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n < 1) return false;
    if(n ==1) return true;
    while(n > 1){
       if(n%2 != 0){
        return false   
       }
       n = n/2;
    }
    return true; 
};

/**
n =1 => true, 2
n =2 => true

Algorithm 
1.loop through from 2 -> n 
2. loop through from 1 - i and multiply
3. if result from 2 equals to n 

**/