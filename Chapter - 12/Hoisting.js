// Note :-  In JavaScript, function declarations are hoisted, but arrow function expressions are not hoisted in the same way.

a()                   // My Name is :- Tejas Joshi
function a(){
    console.log(`My Name is :- Tejas Joshi`)
}  


b()                  // <------ Error :- b is not a function
var b = () =>{
    console.log(`My Name is :- Sachin Tendulkar`)
}


// ---------------------------------------------------- var -------------------------------------------------------------------

console.log(`The Value of c is :- ${c}`)        // The Value of c is :- undefined
var c = 10
console.log(`The Value of c is :- ${c}`)        // The Value of c is :- 10



// ---------------------------------------------------- let -------------------------------------------------------------------

console.log(`The Value of d is :- ${d}`)        // ReferenceError: Cannot access 'd' before initialization
let d = 10
console.log(`The Value of d is :- ${d}`)        // The Value of d is :- 10



// ---------------------------------------------------- const -------------------------------------------------------------------

console.log(`The Value of e is :- ${e}`)        // ReferenceError: Cannot access 'e' before initialization
const e = 10
console.log(`The Value of e is :- ${e}`)        // The Value of e is :- 10


// -----------------------------------------------------------------------------------------------------------------------------