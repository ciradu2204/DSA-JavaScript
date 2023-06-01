/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
// Brute force
// if(s.length == 1 ) return 1;
// let cStr = s; 
// let pointer1 = 0;
// let pointer2 = 1;
// let change = k;
// let max = 0

// while(pointer2 < cStr.length){
//   let val1 = cStr[pointer1]
//   let val2 = cStr[pointer2]
//    if(val1 !== val2){
//       if(change > 0){
//         change--;
//       }else{
//         let diff = pointer2 - pointer1;
//         max = Math.max(max, diff);
//         pointer1++;
//         pointer2 = pointer1+1;
//         change = k;
//         continue;
//       }   
//   }
    
//   pointer2++ 
// }
//  while(change > 0 && pointer1>0){
//      pointer1--;
//      change--;
//  }
    
//  return Math.max(max, pointer2-pointer1)
    
let res = 0; 
let map = new Map(); 
let l = 0;
let max = 0;    
 for(let r= 0; r<s.length; r++){
    let cChar = s[r]
    let value = map.get(cChar)? map.get(cChar): 0; 
    map.set(cChar, value+1); 
    max = Math.max(max, map.get(cChar));
    //find if its a valid window
    if(r-l+1 - max <=k){
     res = Math.max(res, r-l+1)
    }else{
     let value =  map.get(s[l])
     map.set(s[l], value-1)
     l++; 
    }
 }
 return res;

};

/*
change = 0
[A:1, B:]
"ABBB"

*/