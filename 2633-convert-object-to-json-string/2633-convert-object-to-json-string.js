/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    let result= ""
    result = recursive(object, result)
    return result;
    
};

var recursive = (object, result) =>{
    if(typeof object === "number" || typeof object === "boolean"){
        result += `${object}`
        return result;
    }else if( object === null){
        result += null
        return result;
    }else if(typeof object === "string" ){
        result += `"${object}"`
        return result;
    }else if(Array.isArray(object)){
        result += "["
    }else if(Object.keys(object).length == 0){
        result += `{}`
        return result;
    }else{
        result += `{`
    } 
      
      for(let  key in object){
        if(!Array.isArray(object)){
          result += Object.keys(object)[0] === key? `"${key}":`: `,"${key}":`
        }else{
          result += key == 0? "":","  
        }
        result =  recursive(object[key], result)
     }
      
      result += Array.isArray(object)? "]": "}"

    return result;
       
}