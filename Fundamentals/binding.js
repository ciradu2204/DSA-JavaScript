/*
implicit binding 
explicit binding 
new binding 
default binding 

*/

//implicit binding 

const person = {
    name: "Cynthia Iradukunda", 
    callMyName: function(){
        console.log(`This is my name ${this.name}`)
    }
}

console.log(person.callMyName()); 

//explicit binding 
function callMyName(){
    console.log(`This is my name ${this.name}`)
}
console.log(callMyName.call(person))

//new binding 
 
function Person2(name){  
    this.name  = name; 
}

console.log(new Person2("Celine"), new Person2("Cynthia"))