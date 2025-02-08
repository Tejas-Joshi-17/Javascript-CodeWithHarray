// class

class Student{
    
    setName(Name){
        this.Name = Name
    }
    
    setAge(Age){
        this.Age = Age
    }
    
    setEmail(){
        this.Email = "joshitejas188@gmail.com"
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

let Harry = new Student()

Harry.setName("Tejas Joshi")
Harry.setAge(21)
Harry.setEmail()

console.log("My Name is:- " + Harry.getName())      // My Name is:- Tejas Joshi
console.log("My Age is:- " + Harry.getAge())        // My Age is:- 21
console.log("My Email is:- " + Harry.getEmail())    // My Email is:- joshitejas188@gmail.com