var combine = function(n, k) {
    let result = []; 
    let resultEl = []; 
    combinations(1, n, 0, k, result, resultEl); 
    return result; 
};
var combinations = function(current,n, arraySize, k, result, resultEl){
    if(arraySize == k){
        console.log(resultEl);
        result.push([...resultEl]);
        return;
    }
    if(current > n){
        return; 
    }
   resultEl.push(current);  
   combinations(current+1,n,arraySize+1,k,result,resultEl);
   resultEl.pop();  
   combinations(current+1,n,arraySize,k,result,resultEl);
   return; 
}

combine(4,2)
