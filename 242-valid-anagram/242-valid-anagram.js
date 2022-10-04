/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let newS = s.split('').sort(); 
    let newT = t.split('').sort(); 
    if(newS.join('') === newT.join('')){
      return true; 
    }else{
      return false; 
    }   
};

/** 

Examples: 

"abc " -> "bca"  return true; 
 a     -> b return false; 
 
 Algorithm: 
 1. sort the first string 
 2. sort the second string 
 3. if first = second then return true
 4. else return false


**/