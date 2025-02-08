// 1) Create a variable of type string and try to add a number to it
// 2) Use typeof operator to find datatype of the string in last question

let a = "Tejas";
let b =25;
console.log(a+b);   // Tejas25
console.log(typeof a+b);   // string25
console.log(typeof (a+b)); // string






// 3) Create a const object in Javascript can you change it to hold a number later?
// Ans :- No


const abc = {
    name : "Tejas",
    Surname : "Joshi",
    Age : 21,
    Male : true,
    contact_no : undefined
}

// abc = 45    // Assignment to constant variable.


var xyz = {
    name : "Tejas",
    Surname : "Joshi",
    Age : 21,
    Male : true,
    contact_no : undefined
}
console.log(typeof xyz);    // Object

xyz = 45 
console.log(typeof xyz);    // number









// 4) Try to add a new key to the const object in Problem-3, were you are able to do it?
// Answer :- No as object is of const datatype










// 5) Writa a Js Program to create a dictionary of 5 words

const dic = {
    A : "Apple",
    B : "Ball",
    C : "Cat",
    D : "Dog"
}

console.log(typeof dic)     // object
console.log(dic.A);         // Apple
console.log(dic['D']);      // Dog