// -----------------------------------------------------------------------------------------------------------------------------


let Func_1 = () => console.log(`First Statement\n Tejas Joshi`)

Func_1() 
// First Statement
//  Tejas Joshi


// -----------------------------------------------------------------------------------------------------------------------------


let Func_2 = Name => console.log(`Respected Sir/Mam,\n  ${Name}`)

Func_2("Tejas Joshi")
// Respected Sir/Mam,
//   Tejas Joshi


// -----------------------------------------------------------------------------------------------------------------------------


let Func_3 = {
    Name : "Tejas Joshi",
    Role : "Software Develper",
    Show_Details : function(){
        setTimeout(() => {
            console.log(`Hi, My Name is :- ${this.Name}`)
            console.log(`Hi, My Role is :- ${this.Role}`)
        }, 2000);
    }
}

Func_3.Show_Details()
// Hi, My Name is :- Tejas Joshi                <---- After 2 Seconds
// Hi, My Role is :- Software Develper          <---- After 2 Seconds


// -----------------------------------------------------------------------------------------------------------------------------