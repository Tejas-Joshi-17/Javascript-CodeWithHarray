// ---------------------------------------- Practice Set - 1 -----------------------------------------------------------------------

// 1) Create a variable of type string and try to add a number to it
// 2) Use typeof operator to find datatype of the string in last question

let a = "Tejas";
let b = 25;
console.log(a+b);           // Tejas25
console.log(typeof a+b);    // string25
console.log(typeof (a+b));  // string


// ------------------------------------------------------------------------------------------------------------------------------------


// 3) Create a const object in Javascript, can you change it to hold a number later?
// Ans :- No


const abc = {
    name : "Tejas",
    surname : "Joshi",
    age : 21,
    male : true,
    contactNo : undefined
}

// abc = 45    // Error :- Assignment to constant variable.


var xyz = {
    name : "Tejas",
    surname : "Joshi",
    age : 21,
    male : true,
    contactNo : undefined
}
console.log(typeof xyz);    // Object

xyz = 45 
console.log(typeof xyz);    // number


// ------------------------------------------------------------------------------------------------------------------------------------

// 4) Try to add a new key to the const object in Problem-3, were you are able to do it?
// Answer :- No as object is of const datatype

// ------------------------------------------------------------------------------------------------------------------------------------


// 5) Writa a Js Program to create a dictionary of 5 words

const dic = {
    a : "Apple",
    b : "Ball",
    c : "Cat",
    d : "Dog"
}

console.log(typeof dic)     // object
console.log(dic.a);         // Apple
console.log(dic['d']);      // Dog


// ------------------------------------------------------------------------------------------------------------------------------------