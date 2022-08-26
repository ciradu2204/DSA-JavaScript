/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []
    let initial = "("
    helperFunction(n,result, initial, n-1, n)
    return result; 
    
};

var helperFunction = function(n, result, initial, leftRem, rightRem){
 console.log(leftRem)
 console.log(rightRem)
 if(leftRem == 0 && rightRem == 0){
 result.push(initial);
 return; 
 } ;
 if(leftRem == 0){
       helperFunction(n, result, initial + ")", leftRem, rightRem-1)   
 }else if(leftRem < rightRem){
     helperFunction(n, result, initial + "(", leftRem-1, rightRem); 
     helperFunction(n, result, initial + ")", leftRem, rightRem-1)
 }else if(leftRem == rightRem){
    helperFunction(n, result, initial + "(", leftRem-1, rightRem); 
 }
}

/**

         (2,2)  (   (1, 3)
           ()          ((
    (1,2)        (0,3)       (1,2)
         ()(       (((        (()
     (1,1)  (0,2)  (0,2) (1,1)     (0,2)
       ()()  ()((  ((()   (())      (()(
     (0,1)   (0,1)  (0,1) (0,1)     (0,1) 
      ()()(  ()(()  ((())  (())(    (()()
     ()()()  ()(())  ((())) (()))()  (()())
   basecase: right == 0 && left == 0 
         add to the list and return; 
   case 2: right == left > prioritize right
   case 3  right = 0 prioritze left
   
   Algorithm:
   1. base case when right == 0 && left == 0
   2. if(left < right) 
      if(left === right)
   3. if(left == 0)
   
   */