/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []
    let initial = []
    helperFunction(n,result, initial, n, n)
    return result; 
    
};

var helperFunction = function(n, result, initial, leftRem, rightRem){
 if(leftRem == 0 && rightRem == 0){
  result.push(initial.join(""));
 return; 
 } ;
 if(leftRem == 0){
     initial.push(")");
     helperFunction(n, result, initial, leftRem, rightRem-1)   
     initial.pop();
 }else if(leftRem < rightRem){
     initial.push("(");
     helperFunction(n, result, initial, leftRem-1, rightRem); 
     initial.pop()
     initial.push(")");
     helperFunction(n, result, initial, leftRem, rightRem-1)
     initial.pop()
 }else if(leftRem == rightRem){
    initial.push("(");
    helperFunction(n, result, initial, leftRem-1, rightRem); 
    initial.pop()
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