
// Note :- if Child Class has no constructor() then parent class constructor becomes child class constructor also
// 1) If we want to write Child Class constructor then we must class Parent Class constructor using "super(Parent_constructor_parementers)"
// 2) Must call super constructor in derived class before accessing 'this' or returning from derived constructor


class Parent1{
    constructor(){
        this.name = "Tejas Joshi"
        this.age = 21
        this.email = "tejas.22010508@viit.ac.in"
    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getEmail(){
        return this.email
    }
}

class Child1 extends Parent1{

}

let parent1 = new Parent1()
console.log("Name is :- " + parent1.getName())               // Name is :- Tejas Joshi
console.log(`Age is :- ${parent1.getAge}`)                   // Age is :- 21
console.log(`Eamil is :- ${parent1.getEmail}`)               // Email is :- tejas.22010508@viit.ac.in

let child1 = new Child1()
console.log(`Name is :- ${child1.getName}`)                  // Name is :- Tejas Joshi
console.log("Age is :- " + child1.getAge())                  // Age is :- 21
console.log("Email is :- " + Chchild1i_1.getEmail())         // Email is :- tejas.22010508@viit.ac.in











class Parent2{
    constructor(){
        console.log("This is Parent Class Constructor")
    }

    getName(){
        return this.Name
    }

    getAge(){
        return this.Age
    }

    getEmail(){
        return this.Email
    }
}

class Child2 extends Parent2{

    constructor(){
        super()
        console.log("This is Child Class Constructor")
    }

}

let parent2 = new Parent2()
// This is Parent Class Constructor

let child2 = new Child2()
// This is Parent Class Constructor
// This is Child Class Constructor











class Parent3{
    constructor(){
        console.log("This is Parent Class Constructor")
    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getEmail(){
        return this.email
    }
}

class Child3 extends Parent3{

    constructor(){
        console.log("This is Child Class Constructor")
        super()
    }

}

let parent3 = new Parent3()
// This is Parent Class Constructor

let child3 = new Child3()
// This is Child Class Constructor
// This is Parent Class Constructor












class Parent4{
    constructor(){
        console.log("This is Parent Class Constructor")
    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }

    getEmail(){
        return this.email
    }
}

class Child4 extends Parent4{

    constructor(){
        super()
        this.name = "Tejas Joshi"
        console.log(`Class constructor is :- ${this.name}`)
        // super()                      // <----- Error Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    }

}

let parent4 = new Parent4()
// This is Parent Class Constructor

let child4 = new Child4()
// This is Parent Class Constructor
// Class constructor is :- Tejas Joshi