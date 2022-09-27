/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let p1 = 0; 
    let p2 = s.length -1; 
    while(p1 < p2){
        swap(s, p1, p2);
        p1++; 
        p2--; 
    }
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