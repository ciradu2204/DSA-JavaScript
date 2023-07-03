/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(s === t) return s; 
    if(s.length == 1 && t.length == 1 && s === t){
        return s;
    }else if(s.length == 1 && t.length == 1 && s !== t){
        return ""
    }else if(t.length > s.length){
        return ""
    }
    let requiredMap = new Map();
    let currentMap = new Map();
    for(let i=0; i<t.length; i++){
        if(!requiredMap.has(t[i])){
           requiredMap.set(t[i], 0) 
        }
        requiredMap.set(t[i], requiredMap.get(t[i]) +1)
    }
    
    let required = requiredMap.size
    let current = 0;
    let p1 =0;
    let p2 = 0; 
    let result = "";
    let minLength = Number.MAX_VALUE;
    
    while(p2 <s.length){
        let currentS2 = s[p2];
        let currentS1 = s[p1]
       
        if(requiredMap.has(currentS2)){
            let currentValue = currentMap.get(currentS2)? currentMap.get(currentS2): 0;
            currentMap.set(currentS2, currentValue + 1); 
            if(currentMap.get(currentS2) === requiredMap.get(currentS2)) current++; 
        }
        
        while(required == current && p1 <= p2){
            result = p2-p1 < minLength? s.slice(p1, p2+1): result
            minLength = result.length
            currentMap.set(s[p1], currentMap.get(s[p1])-1)
            if(currentMap.get(s[p1]) < requiredMap.get(s[p1])) current--;
            p1++;
            while(!requiredMap.has(s[p1]) && p1 <= p2){
              p1++;
            }
        }
        p2++
        
    }
    console.log(current)
    console.log(result)
    result = p2-p1 < minLength && current === required  ? s.slice(p1, p2+1): result
    minLength = result.length
    return result;

};

/*
required = {A:1}
needed = {A:1}
needed = 1
currentString = ADOBEC
let example = "A  D  O  B  E  C  O  D  E  B  A  N C"
                                          P1 
                                             P2  
                                             
 "ab"
"a"
                                                  
                                                  
if(found || p1 == p2){
 p1++ up to what the found element
 decrement current
}


*/