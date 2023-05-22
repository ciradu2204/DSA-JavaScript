/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let totalTime = 0;
    let date = new Date();
    let timeout = null;
     return function(...args) {
        clearTimeout(timeout)
           timeout= setTimeout(() => {
              fn(...args)
          },t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */