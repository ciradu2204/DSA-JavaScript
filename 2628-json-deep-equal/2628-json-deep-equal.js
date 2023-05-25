/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
  let valid = true;
  return recursive(o1, o2, valid)
 };

var recursive = function(o1, o2, valid){
    if(o1 === null || o2 === null){
         valid = o1 === o2 && valid;
         return valid;
    } 
     
    if(typeof o1 !== 'object' && typeof o2 !== 'object'){
        valid = (typeof o1 ===  typeof o2) && (o1 === o2) && valid;
        return valid;
    }else if(typeof o1 === 'object' && typeof o2 === 'object'){
         if(o1.length !== o2.length){
             valid = false;
             return valid;
         };
         if(Array.isArray(o1) !== Array.isArray(o2)){
             valid = false;
             return valid;
         }
    } 
    for(const key of Object.keys(o1)){
           if(!o2.hasOwnProperty(key)){
               valid = false; 
               return valid
           }
         valid = recursive(o1[key], o2[key], valid)
            
    }
     return valid
 
      
}


/*
if two objects are equal: 
- if they are object && -> check if either one is array -> return false; if(the length are different)
- if they are not object -> check if they are equal -> no equal return false; return true;


o1:{"x":1, "y":2}, o2 = {"x":1, "y":2}

*/