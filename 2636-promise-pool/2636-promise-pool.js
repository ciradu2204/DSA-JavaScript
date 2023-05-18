/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
  let count = 0;
  let index = 0
 
  return new Promise((resolve) => {
      function helper(){
          if(index>= functions.length && count == 0){
           resolve()
            return;
          }
          
         while(count < n && index < functions.length){
         count++
         const promise = functions[index]();
         index++
          promise.then(() => {
                    count--;
                    helper();
         }); 
        
       }
      }
      helper()
      
  })   
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */