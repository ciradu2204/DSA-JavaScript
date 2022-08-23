
function sum(a, b, c){
    return a + b + c; 
}

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c)
             }
        }
    }
}

 const add = curry(sum)
console.log(add(2)(3)(4))