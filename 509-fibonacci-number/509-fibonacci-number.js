/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    //Iterative -> O(n)
    if(n == 0){
        return n; 
    }
    if(n === 1){
        return 1; 
    }
    let prec1 = 0; 
    let prec2 = 1; 
    for(let i=2; i<n; i++){
       let result = prec1 + prec2; 
       prec1 = prec2; 
       prec2 = result; 
    }
    return prec1 + prec2; 
    
    /*
    //recursive => 2
    if(n == 0) return 0; 
    if(n == 1) return 1; 
    return fib(n-1) + fib(n-2); 
    */
};

/*algorithm
f(0) = 0
f(1) = 1
f(2) = 1 
f(3) = 3
f(4)

prev = 0
prev2 = 1 

1.loop through from 2 to n-1
2. update prev = prev2 
3. update prev2 = sum(prev + prev2)
4. return sum(prev + prev2)

Time complexity 
O(n)

**/