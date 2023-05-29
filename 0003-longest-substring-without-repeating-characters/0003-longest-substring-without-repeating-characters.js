/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0) return 0;
    if (s.length === 1) return 1;
    let pointer1 = 0; 
    let pointer2 = 1; 
    let max = 0;
    let map = new Map()
    map.set(s[0], 0)
    while(pointer2 < s.length){
        if(map.has(s[pointer2])){
           max = Math.max(max, map.size)
           let value = map.get(s[pointer2])
           for(let i=pointer1; i<=value; i++){
               map.delete(s[i])
               pointer1++;
           }
         }
        map.set(s[pointer2], pointer2)
        pointer2++;
         
    }
       return Math.max(map.size, max);

};

/*
[]
"p  w wkew"
      |
*/
