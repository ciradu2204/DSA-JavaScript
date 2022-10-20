/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = []; 
    //add the stack frame depth 
    stack.push(0)
    for(let i=0; i<s.length; i++){
        if(s[i] == "("){
            stack.push(0); 
        }else{
            let w = stack.pop(); 
            let v = stack.pop(); 
            stack.push(v +  Math.max(2*w, 1));
        }
    }
    return stack.pop();
};

/**
Example: "(())"
Example: "(3)"
             p
          [0, 3 ]
**/