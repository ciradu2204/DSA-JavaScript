/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    if(operations.length == 0){
      return 0;    
    }
    let stack = []; 
    for(let i=0; i<operations.length; i++){
            let score = Number(operations[i]);
            
            if(operations[i] === "+" ){
                let score = stack[stack.length-1] + stack[stack.length-2]; 
                stack.push(score)
            }else if( operations[i] === "D"){
                let score = 2*stack[stack.length-1] 
                stack.push(score)
            }else if(operations[i] === "C"){
                stack.pop();
            }else{
                stack.push(score);
            }
        
    }
    let sum = 0; 
    console.log(stack); 
    for(let i=0; i<stack.length; i++){
        sum +=stack[i]; 
    }
    return sum;   
};

/**
Input ops = ["5","2","C","D","+"]

Stack: {5, 10, 15 } => 30

Algorithm: Stack

1.loop through the Input
2. Check if the input is a number? 
3. Pop up from the stack and add


**/