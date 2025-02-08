
// Gettes & Setters

class Player{
    
    constructor(){
        this.Name = "Tejas Joshi"
        this.Age = 21
        this.Email = "joshitejas188@gmail.com"
    }

    setName(Name){
        this.Name = Name
    }
    
    setAge(Age){
        this.Age = Age
    }
    
    setEmail(Email){
        this.Email = Email
    }

    getName(){
        return this.Name
    }
    
    getAge(){
        return this.Age
    }
    
    getEmail(Age){
        return this.Email
    }

}

let Aakash = new Player()
console.log("My Name is:- " + Aakash.getName())          // My Name is:- Tejas
console.log("My Age is:- " + Aakash.getAge())            // My Age is:- 21
console.log("My Email is:- " + Aakash.getEmail())        // My Email is:- joshitejas188@gmail.com


let Virat = new Player()
Virat.setName("Virat Kolhi")
Virat.setAge(34)
Virat.setEmail("viratkohli@gmail.com")
console.log("My Name is:- " + Virat.getName())          // My Name is:- Virat Kolhi
console.log("My Age is:- " + Virat.getAge())            // My Age is:- 34
console.log("My Email is:- " + Virat.getEmail())        // My Email is:- viratkohli@gmail.com






// instanceOf Operator :- Use to check whether an Object belong to a certain class
//             Return True even if object is object of class extends from given class

class Parent{
    constructor(){
        console.log("Parent Class constructor")
    }
}

class Child extends Parent{

}

let Par = new Parent()
let Chi = new Child()

console.log(Par instanceof Parent)  // true  <--- Par is object of class Parent
console.log(Chi instanceof Child)   // true  <--- Chi is object of class Child
console.log(Chi instanceof Parent)  // true  <--- Chi is object of class Child which extends from class Parent
console.log(Par instanceof Child)   // false 