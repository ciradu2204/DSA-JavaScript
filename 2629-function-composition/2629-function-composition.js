/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
         let prev = x;
         for(let i=functions.length-1; i>=0;i--){
             let fn = functions[i]
              prev = fn(prev)
         }
         return prev;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */