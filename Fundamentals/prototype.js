//prototype allows to create properties of an object which are shareable 

function Person(name){
    this.name  = name; 
}
const p1 = new Person("Gloria"); 
const p2 = new Person("Wayne")

console.log(p1.name); 
console.log(p2.name); 

Person.prototype.fullName = function(){
    return `My name is ${this.name}`
}


//inheritance
function SuperHero(fName, lName){
    Person.call(this, fName, lName)
    this.isSuperHero = true; 
}
SuperHero.prototype.fightCrime = function (){
    console.log('Fighting Crime')
}

SuperHero.prototype = Object.create(Person.prototype)
SuperHero.prototype.constructor = SuperHero
console.log(p1.fullName())
console.log(p2.fullName())
let batman = new SuperHero('Bruce', 'Wayne'); 
console.log(batman.fullName())