
var TimeLimitedCache = function() {
    this.map = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let currentTime =  new Date().getTime();
     let expired = !isExpired(key, this.map);

     this.map[key] = {
            value: value, 
            duration: duration, 
            time: currentTime
     }
     return expired;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
   if(isExpired(key, this.map)){
       return -1;
   }else{
       return this.map[key].value;
   }
    
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0; 
    for(let value in this.map){
        if(!isExpired(value, this.map)) count++;
    }
    return count;
};

const isExpired = (key, map) =>{
     if(!map[key]) return true;
     let currentTime =  new Date().getTime();
     let duration = map[key].duration; 
     let time = map[key].time;
      if(currentTime - time > duration){
          return true;
     }
    return false;
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */