/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let nOfIslands = 0; 
    for(let i=0; i<grid.length; i++){
        for(let x=0; x<grid[0].length; x++){
            if(grid[i][x] == "1"){
                let location = [i, x];
                grid[i][x] = "0"; 
                nOfIslands++; 
                bfs(grid, location); 
            }
        }
    }
    return nOfIslands;
    
};

var bfs = function(grid, location){
 let array = [[0,-1], [-1, 0], [1,0], [0,1]]
 let queue = []; 
 queue.push(location); 
 while(queue.length > 0){
     let [x, y] = queue.pop(); 
     for(let i=0; i<array.length; i++){
           let [x1, y2] = [x + array[i][0], y + array[i][1]]; 
           if(valid([x1,y2], grid) && grid[x1][y2] === "1"){
             grid[x1][y2] = "0"; 
             queue.push([x1,y2]); 
           }
     }
     
 }
}

var valid = function(location, grid){
    return location[0] >=0 && location[0] <grid.length && location[1] >=0 && location[1] < grid[0].length
}

/*


Algorithm: BFS
1. loop through the find the island 
2. use queue to do BFS 

Example: 
Input:
[
  ["0","0","0","1","0"],
  ["0","0","0","1","0"],
  ["0","1","0","0","0"],
  ["0","0","0","0","0"]
]

queue: {, [0,1], [2,0], [2,1], [2,0]}
current:[1,0] 



**/