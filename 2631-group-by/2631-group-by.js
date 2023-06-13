/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
//     let map = new Map()
//     let result = {}
//     for(let i=0; i<this.length; i++){
//         let id = fn(this[i])
//         let array = []
//         if(map.has(id)){
//             let array = map.get(id)
//             array.push(this[i])
//             map.set(id, array)
//         }else{
//             array.push(this[i])
//             map.set(id,array)
//         }
//     }
    
//     for(const [key, value] of map.entries()){
//          result[key] = value;
//     }
//     return result;
 return this.reduce((grouped, currentValue) => {
     let key = fn(currentValue)
      if(!grouped[key]){
         grouped[key] = []
     }
     grouped[key].push(currentValue)
     return grouped;
 }, {})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */