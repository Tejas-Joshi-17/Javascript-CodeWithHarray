
// Partice Set - Chapter-11



// 1) Create a JavaScript class to create a complex number. Create a constructor to set the real and the imaginary part

class Complex{
    constructor(Real, Imaginary){
        this.Real = Real
        this.Imaginary = Imaginary
    }

    get_Complex(){
        console.log("Complex No is:- " + this.Real + " + " + this.Imaginary + "i")
    }
}

let Comp_1 = new Complex(10,20)
Comp_1.get_Complex()                // Complex No is:- 10 + 20i












// 2) Write a Method to add two complex number in the above class

class complex{
    constructor(Real, Imaginary){
        this.Real = Real
        this.Imaginary = Imaginary
    }

    Add_Complex(num){
        this.Real = this.Real + num.Real
        this.Imaginary = this.Imaginary + num.Imaginary
    }

    get_Complex(){
        console.log("Complex No is:- " + this.Real + " + " + this.Imaginary + "i")
    }
}

let Com_1 = new complex(2,3)
let Com_2 = new complex(4,6)
Com_1.Add_Complex(Com_2)
Com_1.get_Complex()             // Complex No is:- 6 + 9i









// 3) Create a class Student from the class Human, Override a method and see changes

class Human{

    Say_Hello(){
        console.log("Hello from Human Class")
    }

}

class Student extends Human{

    Say_Hello(){
        console.log("Hello From Student Class")
    }

}

let Hum_1 = new Human()
Hum_1.Say_Hello()               // Hello from Human Class

let Stu_1 = new Student()
Stu_1.Say_Hello()               // Hello from Student Class











// 4) See if Student is an instance of Human using instancOf Keyword

console.log(Hum_1 instanceof Human)         // true
console.log(Stu_1 instanceof Human)         // true
console.log(Stu_1 instanceof Student)       // true
console.log(Hum_1 instanceof Student)       // false










// 5) Use getters & setters to set and get the real and imaginary parts of the Complex Number

class ComPlex{
    constructor(){
        this.Real = 2
        this.Imaginary = 4
    }

    set_Real(Real){
        this.Real = Real
    }

    set_Imaginary(Imaginary){
        this.Imaginary = Imaginary
    }

    get_Real(Real){
        return this.Real
    }

    get_Imaginary(Imaginary){
        return this.Imaginary
    }
}

let Comple_1 = new ComPlex()
console.log("Real Part of Comple_1 is :- " + Comple_1.get_Real)              // Real Part of Comple_1 is :- 2
console.log("Imaginary Part of Comple_1 is:- " +Comple_1.get_Imaginary()) // Imaginary Part of Comple_1 is:- 4

let Comple_2 = new ComPlex()
Comple_2.set_Real(10)
Comple_2.set_Imaginary(20)
console.log("Real Part of Comple_2 is :- " + Comple_2.get_Real())          // Real Part of Comple_2 is :- 10
console.log("Imaginary Part of Comple_2 is:- " +Comple_2.get_Imaginary())// Imaginary Part of Comple_2 is:- 20