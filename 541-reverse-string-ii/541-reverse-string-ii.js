/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if(s.length === "") return s; 
    let arrayS = s.split(''); 
    if(s.length < k) {
       reverse(arrayS, 0, arrayS.length-1); 
       return arrayS.join(''); 
    }
    for(let i=0; i<arrayS.length; i += 2*k){
         let p2 = k-1 + i;  
         let diff =arrayS.length - i;
         if(diff > k){
              reverse(arrayS, i, p2); 
         }else{
              reverse(arrayS, i, arrayS.length-1); 
         }
    }
    
    return arrayS.join('');
};

var reverse = function(array, p1, p2){
    while(p1 < p2){
        let temp = array[p1]; 
        array[p1] = array[p2]; 
        array[p2] = temp; 
        p1++; 
        p2--; 
    }
 }

/** 
s = "abcdefg" k=2

- if string.length < k -> reverse all 
- reverse the first k character for every 2k

 s = "abcdefg"
      bacdfeg
      
 Algorithm: 
 Brute force:
 Prerequisite: turn the string into an array
 1.  if(string < k) => swap the whole string
 2. loop through the string, increment by 2k 
 3. else if(string > k ) => swap the first k elements
 
 Example: 
 abcdefg -> 
 1.[b, a, c, d, f, e, g]
                p
**/ 