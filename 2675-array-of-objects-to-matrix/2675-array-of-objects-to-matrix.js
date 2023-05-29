/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function(arr) {
    let currentRow = 0;
    let map = new Map();
    let result = [];
    let emptyRows = [];
    for(let i=0; i<arr.length; i++){
        currentRow++
        recursive(arr[i], "", map, currentRow, emptyRows)
    }
    for(let i=0; i<= currentRow; i++){
        result.push(new Array(map.size).fill(""))
    }
    let sortedMap = new Map([...map].sort())
    let cCol = 0;
    for(const [key,values] of sortedMap.entries()){
        result[0][cCol] = key;
        for(const value of values){
            result[value[0]][cCol] = value[1]
        }
        cCol++;
    }
    for(let i=0; i<emptyRows; i++){
        let row = emptyRows[i]
        result[row] = new Array(sortedMap.size).fill("")
    }
    

    return result;
};

var recursive = (cObject, prevKey, map, cRow, emptyRows) =>{
    if(typeof cObject === "object" && Object.keys(cObject).length === 0){
        emptyRows.push(cRow)
        return;
    }
    let initialKey = prevKey
    for(const key in cObject){
     prevKey += (prevKey.length > 0)? `.${key}`: `${key}`;
     console.log(prevKey)
     let cElement = cObject[key]
      if(typeof cObject[key] === "object" && cObject[key] !== null ){
          recursive(cObject[key], prevKey, map, cRow, emptyRows)
          prevKey = initialKey; 
          continue;
      }
      if(!map.has(prevKey)){
      map.set(prevKey, []);
      }
      let value = map.get(prevKey)
      map.set(prevKey, [...value, [cRow, cElement]])
      prevKey = initialKey; 
    }
    return;

}
    

/*
[{"a": 1, "b": 2},
  {"c": 3, "d": 4},
  {}
 ]
 result = [[a],[1]]
 key = 1;
 prevKey = "a"
 map: {a:0, b:1}
 rows = 0
 function(currentObject,result, prevKey, map,rows)
   if(key >=arr.length){
   return;
   }
   if(arr[key] is not object ){
     return result; 
   }else if(key is object && Object.keys(length) === 0 ){
     result.push(new array(map.size).fill(""))
   }
 
  //find the keys
  for(const key in Object.keys(currentObject)){
     prevKey += (key.length > 0)? `.${key}`: `${key}`
   if(object[key] is object){
     result = recursive(currentObject[key], result, key, prevKey)
   }
   
   if(!map.has(prevKey)){
      map.set(prevKey, result[0].length);
      result[0].length = prevKey;
   }
   let col = map.get(prevKey)
   result[col][rows] = object[key]
  }
  
  return result;
    
  //math the values with the key
 
 


*/