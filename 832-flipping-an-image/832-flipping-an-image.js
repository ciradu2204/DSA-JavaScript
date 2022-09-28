/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for(let i=0; i<image.length; i++){
         flip(image, i);
         invert(image, i);   
    }
    return image; 
};

var flip = function(image, i){
    console.log(image);
    let p1 = 0; 
    let p2 = image[0].length-1; 
    while(p1 < p2){
        let temp = image[i][p1]; 
        image[i][p1] = image[i][p2]; 
        image[i][p2] = temp; 
        p1++;
        p2--; 
    }
    console.log(image)
}

var invert = function(image, i){
    for(let x=0; x<image[0].length; x++){
        if(image[i][x] == 0) {
          image[i][x] = 1; 
        }else{
          image[i][x] = 0; 
        }
    }
}

/** 
1 1 0        
1 0 1 
0 0 0

1 0 0
0 1 0
1 1 1

Algorithm 
1. Go through every row 
2. for every row, invert the row
3. for every row, reverse it 
4. return the image

**/