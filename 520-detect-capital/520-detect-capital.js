/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let capitalizedLetters = 0; 
    for(let i=0; i<word.length; i++){
       if(word.charCodeAt(i) >= 65 && word.charCodeAt(i) <=90 ){
        capitalizedLetters ++; 
       }
    }
    if(capitalizedLetters == 0 || capitalizedLetters == word.length ){
        return true; 
    }else if(capitalizedLetters == 1 && word.charCodeAt(0) >= 65 && word[0].charCodeAt(0) <=90){
        return true; 
    }
    return false;
};

/*
  1.all the letters are capitalized 
  2. all the letter are small letters 
  3. all the first letter is capitalized
  
  Algorithm: 
  1. loop throught the word
  2. check how many letters are capitalized 
  3. if letters == word length -> true; 
  4. if leeters == 1 === word[0] -> true; 
  5. if letters  === 0 return true; 
  
  Example 
  capitalized = 3
  
  USA
    P
  
  
  

**/