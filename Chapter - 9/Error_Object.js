// ---------------------------------------------------------------------------------------------------------------------------

console.log(`Program Start`)                    // Program Start
console.log(`The Value of a is :- ${a}`)        // ReferenceError: a is not defined    <---- Program Crashed
console.log(`Program End`)


// ---------------------------------------------------------------------------------------------------------------------------


console.log(`Program Start`)

try{
    console.log(`The Value of a is :- ${a}`) 
}catch(error){
    console.log(`error.name is :- ${error.name}`)           // error.name is :- ReferenceError
    console.log(`error.message is :- ${error.message}`)     // error.message is :- a is not defined
    console.log(`error.stack is :- ${error.stack}`)         // error.stack is :- ReferenceError: a is not defined
}

console.log(`Program End`)

// Program Start
// error.name is :- ReferenceError
// error.message is :- a is not defined
// error.stack is :- ReferenceError: a is not defined
// Program End


// ---------------------------------------------------------------------------------------------------------------------------