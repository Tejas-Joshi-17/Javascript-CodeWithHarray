// -----------------------------------------------------------------------------------------------------------------------------


let fun1 = () => console.log(`First Statement\n Tejas Joshi`)

fun1() 
// First Statement
//  Tejas Joshi


// -----------------------------------------------------------------------------------------------------------------------------


let fun2 = Name => console.log(`Respected Sir/Mam,\n  ${Name}`)

fun2("Tejas Joshi")
// Respected Sir/Mam,
//   Tejas Joshi


// -----------------------------------------------------------------------------------------------------------------------------


let fun3 = {
    name : "Tejas Joshi",
    role : "Software Develper",
    showDetails : function(){
        setTimeout(() => {
            console.log(`Hi, My Name is :- ${this.name}`)
            console.log(`Hi, My Role is :- ${this.role}`)
        }, 2000);
    }
}

fun3.showDetails()
// Hi, My Name is :- Tejas Joshi                <---- After 2 Seconds
// Hi, My Role is :- Software Develper          <---- After 2 Seconds


// -----------------------------------------------------------------------------------------------------------------------------