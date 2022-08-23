
class Person{
    constructor(fName, lName){
        this.fName = fName; 
        this.lName = lName; 
    }

    fullName() {
        console.log(`Hey I am ${this.fName} ${this.lName}`)
    }
}

class SuperHero extends Person{

    constructor(fName, lName){
        super(fName, lName); 
        this.isSuperHero = false; 
    }

    fightCrime(){
        console.log("Fighting crime")
    }

}

const batman  = new SuperHero("Celine", "Ishimwe"); 
batman.fightCrime(); 
batman.fullName();