const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("It was successful")
    }, 5000)
})

promise.then(() => {

})

promise.catch((error) => {

})

//promises returns a promise which can be chained solving the problem with callbacks
//You want to handle a call back after multiple promises have been called. => promise all 
//if any promise rejects then it reject imediately 

