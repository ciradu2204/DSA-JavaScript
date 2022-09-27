/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    /*
    Using two pointers
    let p1 = 0; 
    let p2 = s.length -1; 
    while(p1 < p2){
        swap(s, p1, p2);
        p1++; 
        p2--; 
    }
    */
    for(let i=0; i<Math.floor(s.length/2); i++){
         [s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]]
    }
    return s; 
};

var swap = function(arrS, p1, p2) {
    let temp = arrS[p1]; 
    arrS[p1] = arrS[p2]; 
    arrS[p2] = temp; 
}

/**
Input s = ["h","e","l","l","o"]
            p               p2
**/