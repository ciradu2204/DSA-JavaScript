/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
if(s.length == 1 ) return 1;
let cStr = s; 
let pointer1 = 0;
let pointer2 = 1;
let change = k;
let max = 0

while(pointer2 < cStr.length){
  let val1 = cStr[pointer1]
  let val2 = cStr[pointer2]
   if(val1 !== val2){
      if(change > 0){
        change--;
      }else{
        let diff = pointer2 - pointer1;
        max = Math.max(max, diff);
        pointer1++;
        pointer2 = pointer1+1;
        change = k;
        continue;
      }   
  }
    
  pointer2++ 
}
 while(change > 0 && pointer1>0){
     pointer1--;
     change--;
 }
    
 return Math.max(max, pointer2-pointer1)

};

/*
change = 0

"ABBB"
  ||

*/