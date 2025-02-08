

// Note :- If Child class has no method having same name as Parent class then Parent class method is also child class method but is method having same name present in child class then Child class method overwrite method extend from Parent class having same name


class Animal_1{
    constructor(Name, Colour){
        this.Name = Name
        this.Colour = Colour
    }

    Running(){
        console.log(this.Name + " is Running")
    }

    Eating(){
        console.log(this.Name + " is Eating")
    }
}

class Dog_1 extends Animal_1{
    Sleeping(){
        console.log(this.Name + " is Sleeping")        
    }
}


let Parent_1 = new Animal_1("Monkey", "Brown")
Parent_1.Running()        // Monkey is Running
Parent_1.Eating()         // Monkey is Eating
// Parent_1.Sleeping()        // <--- Error   Parent_1.Sleeping is not a function


let Child_1 = new Dog_1("Tomy", "white")
Child_1.Running()         // Tomy is Running
Child_1.Eating()          // Tomy is Eating
Child_1.Sleeping()        // Tomy is Sleeping















class Animal_2{
    constructor(Name, Colour){
        this.Name = Name
        this.Colour = Colour
    }

    Running(){
        console.log(this.Name + " is Running")
    }

    Eating(){
        console.log(this.Name + " is Eating")
    }
}

class Dog_2 extends Animal_2{

    Eating(){
        console.log("Overrid function :- Eating()")
    }

    Sleeping(){
        console.log(this.Name + " is Sleeping")        
    }
}

let Parent_2 = new Animal_2("Monkey", "Brown")
Parent_2.Running()        // Monkey is Running
Parent_2.Eating()         // Monkey is Eating
// Parent_2.Sleeping()        // <--- Error   Parent_2.Sleeping is not a function


let Child_2 = new Dog_2("Tomy", "white")
Child_2.Running()         // Tomy is Running
Child_2.Eating()          // Overrid function :- Eating()
Child_2.Sleeping()        // Tomy is Sleeping














class Animal_3{
    constructor(Name, Colour){
        this.Name = Name
        this.Colour = Colour
    }

    Running(){
        console.log(this.Name + " is Running")
    }

    Eating(){
        console.log(this.Name + " is Eating")
    }
}

class Dog_3 extends Animal_3{

    Eating(){
        super.Eating()
        console.log("Overrid function :- Eating()")
    }

    Sleeping(){
        console.log(this.Name + " is Sleeping")        
    }
}


let Parent_3 = new Animal_3("Monkey", "Brown")
Parent_3.Running()        // Monkey is Running
Parent_3.Eating()         // Monkey is Eating
// Parent_3.Sleeping()        // <--- Error   Parent_3.Sleeping is not a function


let Child_3 = new Dog_3("Tomy", "white")
Child_3.Running()         // Tomy is Running
Child_3.Eating()          // Tomy is Eating
                          // Overrid function :- Eating()
Child_3.Sleeping()        // Tomy is Sleeping














class Animal_4{
    constructor(Name, Colour){
        this.Name = Name
        this.Colour = Colour
    }

    Running(){
        console.log(this.Name + " is Running")
    }

    Eating(){
        console.log(this.Name + " is Eating")
    }
}

class Dog_4 extends Animal_4{

    Eating(){
        console.log("Overrid function :- Eating()")
        super.Eating()
    }

    Sleeping(){
        console.log(this.Name + " is Sleeping")        
    }
}


let Parent_4 = new Animal_4("Monkey", "Brown")
Parent_4.Running()        // Monkey is Running
Parent_4.Eating()         // Monkey is Eating
// Parent_4.Sleeping()        // <--- Error   Parent_4.Sleeping is not a function


let Child_4 = new Dog_4("Tomy", "white")
Child_4.Running()         // Tomy is Running
Child_4.Eating()          // Overrid function :- Eating()
                          // Tomy is Eating
Child_4.Sleeping()        // Tomy is Sleeping