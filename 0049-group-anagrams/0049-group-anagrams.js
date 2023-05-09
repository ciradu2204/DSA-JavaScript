/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = []
    let map = new Map()
    if(strs.length <2){
      result.push(strs)
      return result;
    }
    
    for(let i=0; i<strs.length; i++){
        let sortedA = strs[i].split('').sort();
        let sortedS = sortedA.toString()
        if(!map.has(sortedS)){
           map.set(sortedS, [strs[i]])
        }else{
            let values = map.get(sortedS)
             values.push(strs[i])
             map.set(sortedS, values)
        }
        
    }
  
    return [...map.values()];
};

/**
Input strs = ["eat","tea","tan","ate","nat","bat"]
result = [[eat, tea, ate], [tan, nat], [bat]]

Brute force: O(n2)
- create a function which checks if two elements are anagrams

 */