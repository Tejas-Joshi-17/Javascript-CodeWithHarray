// --------------------------------------------------- var -------------------------------------------------------------------


var varVariable1 = 10;
console.log(varVariable1);         // 10
var varVariable1 = "Tejas";
console.log(varVariable1);         // Tejas
varVariable1 = "Joshi";
console.log(varVariable1);         // Joshi



var varVariable2 = 45;
console.log(varVariable2);                 // 45
{
    console.log(varVariable2);             // 45
    var varVariable2 = "Tejas Joshi";      // <--- Global Scoped
    console.log(varVariable2);             // Tejas Joshi
}
console.log(varVariable2);                 // Tejas Joshi


var varVariable3;
console.log(varVariable3);                 // undefined

console.log(varVariable4);                 // undefined
var varVariable4 = 30;
console.log(varVariable4);                 // 30



// --------------------------------------------------- let -------------------------------------------------------------------


let letVariable1 = 10;
console.log(letVariable1);                 // 10
letVariable1 = "Joshi";
console.log(letVariable1);                 // Joshi
// let letVariable1 = "Tejas";
// console.log(letVariable1);              // <---- Error (Updation possible but Re-declaration NOT possible)



let letVariable2 = 456;
console.log(letVariable2);                 // 456
{
    letVariable2 = 23;
    console.log(letVariable2);             // 23
}
console.log(letVariable2);                 // 23


let letVariable3 = 456;
console.log(letVariable3);                 // 456
{
    // console.log(letVariable3);          // <--- ReferenceError: Cannot access 'letVariable3' before initialization
    let letVariable3 = 23;                 // <--- Blocked Scope
    console.log(letVariable3);             // 23
}
console.log(letVariable3);                 // 456



let letVariable4;
console.log(letVariable4);                 // undefined

//console.log(letVariable5);               <-- ReferenceError: Cannot access 'letVariable5' before initialization
let letVariable5 = 102;
console.log(letVariable5);                 // 102




// --------------------------------------------------- const -----------------------------------------------------------------



const constVariable1 = 10;
console.log(constVariable1);             // 10
// constVariable1 = "Joshi";
// console.log(constVariable1);          // <---- Error (Updation & Re-declaration Both NOT possible)
// const constVariable1 = "Tejas";
// console.log(constVariable1);          // <---- Error (Updation & Re-declaration Both NOT possible)



const constVariable2 = 456;
console.log(constVariable2);             // 456
{
    // constVariable2 = 23;              <---- not possible as we try to change constant value
    // console.log(constVariable2);      <---- Error (Updation & Re-declaration Both NOT possible)
}
console.log(constVariable2);             // 456


const constVariable3 = 456;
console.log(constVariable3);             // 456
{
    // console.log(constVariable3);      // <--- ReferenceError: Cannot access 's' before initialization
    const constVariable3 = 23;           // <--- Blocked Scope that's why possible
    console.log(constVariable3);         // 23
}
console.log(constVariable3);             // 456


// const constVariable4;
// console.log(constVariable4);          <---- Error (Must be Initilize at time of declaration else produce error)

// console.log(constVariable5);          <---- ReferenceError: Cannot access 'constVariable5' before initialization
const constVariable5 = 120;
console.log(constVariable5);             // 120


// ---------------------------------------------------------------------------------------------------------------------------