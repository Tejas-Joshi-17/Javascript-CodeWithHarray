
// Static Methods :- Used to implement functions that belongs to a class as a whole and not to any particular object.



class Animal{
    constructor(Name){
        this.Name = Name
    }

    Walk(){
        console.log("Animal " + this.Name + " is Walking")
    }
}

let a = new Animal("cat")
a.Walk()            // Animal cat is Walking





class Bird{
    constructor(Name){
        this.Name = Name
        //  OR
        // this.Name = Bird.Capitalize(Name)
    }

    Walk(){
        console.log("Animal " + Bird.Capitalize(this.Name) + " is Walking")
    }

    static Capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

let b = new Bird("dog")
//      OR
// let b = new Bird(Bird.Capitalize("dog"))

b.Walk()        // Animal Dog is Walking