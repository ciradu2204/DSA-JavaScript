/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s.to
    let arrayS = s.split(''); 
    let p1 = 0; 
    let p2 = s.length-1; 
    while(p1 < p2){
        if(isVowel(arrayS[p1]) && isVowel(arrayS[p2])){
             let temp = arrayS[p1]; 
             arrayS[p1] = arrayS[p2]; 
             arrayS[p2] = temp; 
            p1++; 
            p2--;
        }else if(isVowel(arrayS[p1])){
            p2--;
        }else {
          p1++; 
        }
        
    }
    return arrayS.join(""); 
};
var isVowel = function(s){
  return s === 'a' || s === 'A' || s === 'e' || s === 'E' || s === 'i' || s == 'I' || s === 'o' || s === 'O' || s === 'u' || s === 'U' ; 
}

/**
Given s = "leetcode"
 Algorithm: two pointers 
 1.loop through the string 
 2. One pointer start from the beginning 
 3. Last pointer start from the end
 4. Swap only if they are pointing on a vowel 
**/