/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
     let result = []
     for(let i=0; i<matrix[0].length; i++){
         result[i] = []; 
     }
     for(let i=0; i<matrix.length; i++){
         for(let x=0; x<matrix[i].length; x++){
             result[x][i] = matrix[i][x]
         }
     }
    return result; 
};

/**

matrix =
       


**/