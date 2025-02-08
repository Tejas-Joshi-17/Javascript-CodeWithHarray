// ---------------------------------------------------------------------------------------------------------------------------


let P1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("Promise-1 is Resolved")
    }, 2000);
    resolve("Yes")
})

P1.then((value) =>{
    console.log(`Tejas Dattatray Joshi`)
})

P1.then((value) =>{
    console.log(`Promise-1 is Resolved with :- ${value}`)
})

// Tejas Dattatray Joshi
// Promise-1 is Resolved with :- Yes
// Promise-1 is Resolved             <------ Javascript is Asynchronous



// ---------------------------------------------------------------------------------------------------------------------------


let P2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("Promise-2 is Resolved")
    }, 2000);
    resolve("Yes")
})

P2.then((value) =>{
    console.log(`Promise-2 is Resolved with :- ${value}`)
})

P2.then((value) =>{
    console.log(`Tejas Dattatray Joshi`)
})

// Promise-2 is Resolved with :- Yes
// Tejas Dattatray Joshi
// Promise-2 is Resolved             <------ Javascript is Asynchronous



// ---------------------------------------------------------------------------------------------------------------------------