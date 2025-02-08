// ---------------------------------------------------------------------------------------------------------------------------
// 1) finally statement runs after try if there were no error
// 2) finally statement runs after catch if there were errors
// ---------------------------------------------------------------------------------------------------------------------------



// console.log(`Program Start`)

// try{
//     console.log(`The Value of a is :- ${a}`)        // <---- Error ReferenceError: a is not defined
// }finally{
//     console.log(`Finally Statement`)
// }

// console.log(`Program End`)

// Program Start
// Finally Statement





// ---------------------------------------------------------------------------------------------------------------------------





// console.log(`Program Start`)

// try{
//     console.log(`The Value of a is :- ${a}`)        // <---- Error ReferenceError: a is not defined
// }catch(error){
//     console.log(`Error occured :- ${error}`)   
// }finally{
//     console.log(`Finally Statement`)
// }

// console.log(`Program End`)

// Program Start
// Error occured :- ReferenceError: a is not defined
// Finally Statement
// Program End





// ---------------------------------------------------------------------------------------------------------------------------





// console.log(`Program Start`)

// try{
//     console.log(`The Value of a is :- ${a}`)        // <---- Error ReferenceError: a is not defined
// }catch(error){
//     console.log(`The Value of b is :- ${b}`)        // <---- Error ReferenceError: b is not defined  
// }finally{
//     console.log(`Finally Statement`)
// }

// console.log(`Program End`)

// Program Start
// Finally Statement







// ---------------------------------------------------------------------------------------------------------------------------
// 3) If there is a return in try, finally statement is executed just before the control returns to the outer code.
// ---------------------------------------------------------------------------------------------------------------------------


let a = () =>{

    try{
        console.log(`Statements inside try `)
        return 7
    }catch{
        console.log(`Statements inside catch `)
    }
    
    finally{
        console.log(`Statements inside Finally`)
    }
    
}

console.log(`Program Start`)
a()
console.log(`Program Start`)

// Program Start
// Statements inside try
// Statements inside Finally
// Program Start




// ---------------------------------------------------------------------------------------------------------------------------