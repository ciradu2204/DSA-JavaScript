/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let valueAfterOperation = init;
     increment = function(){
       return valueAfterOperation += 1;
    }
    decrement = function(){
        return valueAfterOperation -=1;
    }
    reset = function(){
        valueAfterOperation = init; 
        return valueAfterOperation;
    }
    return {increment, decrement, reset}
    }

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */