// Constructors in JavaScript


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














class Student{
    
    constructor(Name, Age, Email){
        this.Name = Name
        this.Age = Age
        this.Email = Email
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

let Harry = new Student("Tejas",21,"joshitejas188@gmail.com")
console.log("My Name is:- " + Harry.getName())          // My Name is:- Tejas
console.log("My Age is:- " + Harry.getAge())            // My Age is:- 21
console.log("My Email is:- " + Harry.getEmail())        // My Email is:- joshitejas188@gmail.com


let Sachin = new Student()
Sachin.setName("Sachin Tendulkar")
Sachin.setAge(46)
Sachin.setEmail("sachintendulkar@gmail.com")
console.log("My Name is:- " + Sachin.getName())          // My Name is:- Sachin Tendulkar
console.log("My Age is:- " + Sachin.getAge())            // My Age is:- 46
console.log("My Email is:- " + Sachin.getEmail())        // My Email is:- sachintendulkar@gmail.com