/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordArray = s.split(" "); 
    console.log(reverse(wordArray[0])); 
    for(let i= 0; i<wordArray.length; i++){
        wordArray[i] = reverse(wordArray[i]); 
    }
    return wordArray.join(" "); 
};
var reverse = function(word){
    let wordArr = word.split('');
    let p1 = 0; 
    let p2 = wordArr.length -1;
     while(p1 < p2){
      let tempStart = wordArr[p1]; 
      let tempEnd = wordArr[p2]; 
      wordArr[p1] = tempEnd;
      wordArr[p2] = tempStart; 
      p1++; 
      p2--; 
    }
    return wordArr.join(''); 

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