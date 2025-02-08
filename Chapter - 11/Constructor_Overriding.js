
// Note :- if Child Class has no constructor() then parent class constructor becomes child class constructor also
// 1) If we want to write Child Class constructor then we must class Parent Class constructor using "super(Parent_constructor_parementers)"
// 2) Must call super constructor in derived class before accessing 'this' or returning from derived constructor


class Parent_1{
    constructor(){
        this.Name = "Tejas Joshi"
        this.Age = 21
        this.Email = "tejas.22010508@viit.ac.in"
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

class Child_1 extends Parent_1{

}

let Par_1 = new Parent_1()
console.log("Name is :- " + Par_1.getName())         // Name is :- Tejas Joshi
console.log("Age is :- " + Par_1.getAge())           // Age is :- 21
console.log("Eamil is :- " + Par_1.getEmail())       // Email is :- tejas.22010508@viit.ac.in

let Chi_1 = new Child_1()
console.log("Name is :- " + Chi_1.getName())         // Name is :- Tejas Joshi
console.log("Age is :- " + Chi_1.getAge())           // Age is :- 21
console.log("Email is :- " + Chi_1.getEmail())       // Email is :- tejas.22010508@viit.ac.in











class Parent_2{
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

class Child_2 extends Parent_2{

    constructor(){
        super()
        console.log("This is Child Class Constructor")
    }

}

let Par_2 = new Parent_2()
// This is Parent Class Constructor

let Chi_2 = new Child_2()
// This is Parent Class Constructor
// This is Child Class Constructor











class Parent_3{
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

class Child_3 extends Parent_3{

    constructor(){
        console.log("This is Child Class Constructor")
        super()
    }

}

let Par_3 = new Parent_3()
// This is Parent Class Constructor

let Chi_3 = new Child_3()
// This is Child Class Constructor
// This is Parent Class Constructor












class Parent_4{
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

class Child_4 extends Parent_4{

    constructor(){
        super()
        this.Name = "Tejas Joshi"
        console.log("Class constructor is :- " + this.Name)
        // super()                      // <----- Error Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    }

}

let Par_4 = new Parent_4()
// This is Parent Class Constructor

let Chi_4 = new Child_4()
// This is Parent Class Constructor
// Class constructor is :- Tejas Joshi
