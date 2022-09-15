const fs = require('fs'); 
async function roalerCoaster(){
  let array = await readFromFile("rollercoasters_medium_input.txt"); 
  //let array = await readFromFile("rollercoasters_medium_sample_input.txt")
  let max = Number.MIN_VALUE;
  let prev = 0; 
  let sum = 10;
  for(let i=prev+1; i<array.length; i++){
     if(array[i] <= array[prev]){ 
      max = Math.max(max, sum);
      sum = 10; 
      prev = i;
      i++; 
     }else{
      sum +=10; 
      prev = i; 
     }
  }
  max = Math.max(sum, max);
  await writeToFile('result.txt', max); 
}
async function readFromFile(filename){
  try{
   const content = await fs.promises.readFile(filename, 'utf-8'); 
   const arr = content.split(/\r?\n/); 
   return arr; 
  } catch(error){
    console.log(error)
  }
  
}
async function writeToFile(filename, result){
  try{
    await fs.promises.writeFile(filename, result.toString()); 
   } catch(error){
     console.log(error)
   }
}
roalerCoaster(); 