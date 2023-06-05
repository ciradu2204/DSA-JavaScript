/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
    return recursive(obj1, obj2)   
};

function recursive(obj1, obj2){
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
    let currentObject = {}
    for(const key in obj1){
      if(key in obj2){
          let diff = recursive(obj1[key], obj2[key])
          if(Object.keys(diff).length > 0){
              currentObject[key] = diff
          }
      } 
    }
    return currentObject
    
}

/*
obj1 = {}
obj2 = {"a": 1, "b": 2}

// 
//





*/