/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filteredString = ""
    let noCapsString = s.toLowerCase()
    for(let i=0; i<noCapsString.length; i++){
        let value = noCapsString.charCodeAt(i)
        if(value >=48 && value <=57 || value >= 97 && value <=122){
            filteredString +=noCapsString[i]
        }
     }
    
     let pointer1 =0; 
     let pointer2 = filteredString.length-1
     while(pointer1 < pointer2){
         if(filteredString[pointer1] != filteredString[pointer2]){
             return false;
         }
         pointer1++;
         pointer2--;
     }
    return true;
};