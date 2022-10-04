/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
   if(s.length === 0 || s.length < p.length){
       return []; 
   }
   let p1 = 0; 
   let p2 = p.length-1; 
   let result = [];
   let expected = new Map(); 
   let available = new Map(); 
   for(let i=0; i<p.length; i++){
       if(expected.has(p[i])){
      expected.set(p[i], expected.get(p[i]) +1); 
       }else{
        expected.set(p[i],1); 
       }
   }
   for(let i= p1; i<p2+1; i++){
      if(available.has(s[i])){
        available.set(s[i], available.get(s[i]) +1); 
       }else{
        available.set(s[i],1); 
       }
    }
   while(p2 < s.length){
       if(checkIfAnagram(expected, available)){
         result.push(p1); 
       }
       if(available.get(s[p1]) === 1){
           available.delete(s[p1]);
       }else{
           available.set(s[p1], available.get(s[p1])-1);
       }
       p1++; 
       p2++; 
       if(available.has(s[p2])){
          available.set(s[p2], available.get(s[p2]) + 1); 
       }else{
          available.set(s[p2], 1); 
       }
     }    
   // console.log(expected)
    if(checkIfAnagram(expected, available)){
       result.push(p1); 
    }
   return result;   
};
var checkIfAnagram = function(expected, available){
    for(const [key, value] of available){
        if(!expected.has(key) || expected.get(key) !== value){
             return false; 
        }
    }
    return true; 
}

/**
Given a string find all anagrams of p
result= [0]
available : { b:1, a: 1, e:1}
input: c  b  a  e  b a  b a c d
          p1    p2
Algorithm: 
1. two pointers (sliding window technique)
2. each time, sort and check if they are equal
3. if equal, note the start index 





**/