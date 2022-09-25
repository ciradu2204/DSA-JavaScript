/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordArray = s.split(''); 
    let p1 = 0; 
    let p2 = p1+1; 
    while(p2 < wordArray.length){
        if(wordArray[p2] == " "){ 
            reverse(wordArray, p1, p2-1);
            p1 = p2+1; 
            p2++; 
        }else{
            p2++; 
        }
    }
    reverse(wordArray, p1, p2-1)
    return wordArray.join(""); 
};
var reverse = function(word, pointer1, pointer2){
    let p1 = pointer1; 
    let p2 = pointer2;
     while(p1 < p2){
      let tempStart = word[p1]; 
      let tempEnd = word[p2]; 
      word[p1] = tempEnd;
      word[p2] = tempStart; 
      p1++; 
      p2--; 
    }
}
/* 

Reverse a string

Algorithm: O(n) time complexity O(n) space complexity
1. Go through the string, divide it by space 
2. Go through the array, reverse each word 
3. Join the array using space


Example:
s = "Let's take LeetCode contest"
s'teL

*/