
class Animal{
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

    Animal_Color(){
        console.log(`${this.Name} colour is :- ${this.Colour}`)
    }
}

class Dog extends Animal{
    Sleeping(){
        console.log(this.Name + " is Sleeping")        
    }
}


let Parent = new Animal("Monkey", "Brown")
Parent.Running()        // Monkey is Running
Parent.Eating()         // Monkey is Eating
Parent.Animal_Color()   // Monkey colour is :- Brown       
// Parent.Sleeping()        // <--- Error   Parent.Sleeping is not a function


let Child = new Dog("Tomy", "white")
Child.Running()         // Tomy is Running
Child.Eating()          // Tomy is Eating
Child.Animal_Color()    // Tomy colour is :- white
Child.Sleeping()        // Tomy is Sleeping