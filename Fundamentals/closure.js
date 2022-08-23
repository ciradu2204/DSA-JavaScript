//when you a return a function from another function. It does not return only the function but also the scope. 

function outer(){
    let counter = 0; 
    function inner(){
        counter++; 
        console.log(counter)
    }
    return inner
}

const inner = outer(); 
inner()
inner()