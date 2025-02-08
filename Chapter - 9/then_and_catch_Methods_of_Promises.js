let m1 = new Promise(function(resolve, reject){
    console.log("Promise-1 is Pending!!!!!!!!!!")
    setTimeout(()=>{
        console.log("I am Promise-1 & I am Fullfilled")
        resolve(true)           // <------ Informing that Promise is being Resloved
        console.log(m1)
    },4000)
})

console.log(m1)


// console :- 

// Promise-1 is Pending!!!!!!!!!!           <---- Initially
// Promise {<pending>}
// [[Prototype]] :-  Promise
// [[PromiseState]] :-  "pending"
// [[PromiseResult]] :-  undefined

// I am Promise-1 & I am Fullfilled         <---- After 4 sec
// Promise {<fulfilled>: true}
// [[Prototype]] :-  Promise
// [[PromiseState]] :-  "fulfilled"
// [[PromiseResult]] :-  true













let m2 = new Promise(function(resolve, reject){
    console.log("Promise-2 is Pending!!!!!!!!!!")
    setTimeout(()=>{
        reject(new Error("Promise-2 is Rejected"))     // <------ Informing that Promise is being Rejected
        console.log(m2)
    },4000)
})

console.log(m2)


// console :- 

// Promise-2 is Pending!!!!!!!!!!           <---- Initially
// Promise {<pending>}
// [[Prototype]] :- Promise
// [[PromiseState]] :- "pending"
// [[PromiseResult]] :- undefined

// Promise {<rejected>: Error: Promise-2 is Rejected}         <---- After 4 sec
// [[Prototype]] :-  Promise
// [[PromiseState]] :-  "rejected"
// [[PromiseResult]] :-  Error: Promise-2 is Rejected














/*********************** Promises is Used for Parallel Execution ****************************** */

let x1 = new Promise(function(resolve, reject){
    console.log("Promise-1 is Pending!!!!!!!!!!")
    setTimeout(()=>{
        console.log("I am Promise-1 & I am Fullfilled")
        resolve("Fullfilled !@#")           // <------ Informing that Promise is being Resloved
        console.log(x1)
    },4000)
})

let x2 = new Promise(function(resolve, reject){
    console.log("Promise-2 is Pending!!!!!!!!!!")
    setTimeout(()=>{
        reject(new Error("Promise-2 is Rejected"))     // <------ Informing that Promise is being Rejected
        console.log(x2)
    },4000)
})

console.log(x1)
console.log(x2)


// concole :-

// Promise-1 is Pending!!!!!!!           <---- Initially      
// Promise-2 is Pending!!!!!!!           <---- Initially

// Promise {<pending>}                   <---- Initially for Promise-1
// [[Prototype]] :-  Promise
// [[PromiseState]] :-  "pending"
// [[PromiseResult]] :-  undefined

// Promise {<pending>}                   <---- Initially for Promise-2
// [[Prototype]] :- Promise
// [[PromiseState]] :- "pending"
// [[PromiseResult]] :- undefined 


// I am Promise-1 & I am Fullfilled         <---- After 4 sec from exection on js file
// Promise {<fulfilled>: 'Fullfilled !@#'}
// [[Prototype]] :-  Promise
// [[PromiseState]] :-  "fulfilled"
// [[PromiseResult]] :-  "Fullfilled !@#"

// Promise {<rejected>: Error: Promise-2 is Rejected}         <---- After 4 sec from exection on js file
// [[Prototype]] :-  Promise
// [[PromiseState]] :-  "rejected"
// [[PromiseResult]] :-  Error: Promise-2 is Rejected
















// ***** 1) .then() <--- Used to print content after succefull fullfilment of Promise ***********

let a1 = new Promise(function(resolve, reject){
    console.log("Promise-1 is Pending!!!!!!!!!!")
    setTimeout(()=>{
        console.log("I am Promise-1 & I am Fullfilled")
        resolve("Fullfilled !@#")           // <------ Informing that Promise is being Resloved
        console.log(a1)
    },4000)
})

a1.then((value)=>{       // <---- is Promise-1 is Resolved then function Runned
    console.log(`Promise-1 is Fullfilled with value :- ` + value)
})
// Promise-1 is Fullfilled with value :- Fullfilled !@#





// ***** 2) .catch() <--- Used to catch the error after unsuccefull fullfilment of Promise ***********

let q1 = new Promise(function(resolve, reject){
    console.log("Promise-2 is Pending!!!!!!!!!!")
    setTimeout(()=>{
        reject(new Error("Promise-2 is Rejected"))     // <------ Informing that Promise is being Rejected
        console.log(q1)
    },4000)
})

q1.catch((error)=>{       // <---- is Promise-2 is Rejected then function Runned
    console.log("Promise-2 is Rejected with Error :- " + error)
})
// Promise-2 is Rejected with Error :- Error: Promise-2 is Rejected





// ******** 3) Best way is to used to User .then & .catch function of Promise **************

let p1 = new Promise(function(resolve, reject){
    console.log("Promise-1 is Pending!!!!!!!!!!")
    setTimeout(()=>{
        console.log("I am Promise-1 & I am Fullfilled")
        resolve("Fullfilled !@#")           // <------ Informing that Promise is being Resloved
        console.log(p1)
    },4000)
})

let p2 = new Promise(function(resolve, reject){
    console.log("Promise-2 is Pending!!!!!!!!!!")
    setTimeout(()=>{
        reject(new Error("Promise-2 is Rejected"))     // <------ Informing that Promise is being Rejected
        console.log(p2)
    },4000)
})

p1.then((value)=>{
    console.log(`Promise-1 is Fullfilled with value :- ` + value)
}).catch((error)=>{
    console.log("Promise-1 is Rejected with Error :- " + error)
})
// Promise-1 is Fullfilled with value :- Fullfilled !@#


p2.then((value)=>{
    console.log(`Promise-2 is Fullfilled with value :- ` + value)
}).catch((error)=>{
    console.log("Promise-2 is Rejected with Error :- " + error)
})
// Promise-2 is Rejected with Error :- Error: Promise-2 is Rejected.

