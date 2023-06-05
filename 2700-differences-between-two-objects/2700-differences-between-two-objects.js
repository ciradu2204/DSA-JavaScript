/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
    let result = {}
    recursive(obj1, obj2, result, [])
    return result;
   
};

function recursive(obj1, obj2, result, prevKey){
     if(obj1 === obj2){
         return []
     }
     if((obj1 === undefined || obj2 === undefined)){
         return []
     }
     if(obj1 === null || obj2 === null){
         return [obj1, obj2]
     }
     
     if((typeof obj1 !== "object" || typeof obj2 !== "object")){
         return [obj1, obj2]
     }

     if((Array.isArray(obj1) !== Array.isArray(obj2))){
         return [obj1,obj2]
     }
    
    for(const key in obj1){
      prevKey.push(key)
      let value = recursive(obj1[key], obj2[key], result, prevKey)
      if(value.length > 0){
          let object  = result;
          let currentObject = object;
          for(let i=0; i<prevKey.length;i++){
               if(i+1 == prevKey.length){
                  currentObject[prevKey[i]] = value
              }else if(!currentObject.hasOwnProperty(prevKey[i])){
                currentObject[prevKey[i]] = {} 
              }
              currentObject = currentObject[prevKey[i]]
          }
      }
      prevKey.pop() 
    }
    return []
    
}

/*
obj1 = {}
obj2 = {"a": 1, "b": 2}

// 
//





*/