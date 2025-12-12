// ---------------------------------------------------------------------------------------------------------------------------


let P1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log(`Promise-1 is Resolved`)
        resolve(1)
    }, 5000);
})

let P2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log(`Promise-2 is Resolved`)
        resolve(2)
    }, 2000);
})

P1.then((value) =>{
    console.log(`Promise is resolved with value :- ${value}`)
})

P2.then((value) =>{
    console.log(`Promise is resolved with value :- ${value}`)
})

// Promise-2 is Resolved
// Promise is resolved with value :- 2        <----- After 2 Seconds
// Promise-1 is Resolved
// Promise is resolved with value :- 1        <----- After 5 Seconds


// ---------------------------------------------------------------------------------------------------------------------------



// 1) Promise.all([p1, p2, ..])


let P_1 = new Promise((resolve, reject) =>{
setTimeout(() => {
        resolve("Promise-1 Resolved")
    }, 5000);
})
        
let P_2 = new Promise((resolve, reject) =>{
setTimeout(() => {
        resolve("Promise-2 Resolved")
    }, 2000);
})
                
let P_3 = new Promise((resolve, reject) =>{
setTimeout(() => {
        resolve("Promise-3 Resolved")
    }, 7000);
})
        
let promise_all_1 = Promise.all([P_1, P_2, P_3])
promise_all_1.then((value) =>{
    console.log(value)
})
    
// (3) ['Promise-1 Resolved', 'Promise-2 Resolved', 'Promise-3 Resolved']
// 0: "Promise-1 Resolved"          <----- After 7 Seconds 
// 1: "Promise-2 Resolved"          <----- After 7 Seconds 
// 2: "Promise-3 Resolved"          <----- After 7 Seconds As promise-3 takes most 7 secs
// length: 3
    

    
    
    
    
let P_11 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-1 Resolved")
    }, 5000);
})

let P_22 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Promise-2 Rejected")
    }, 2000);
})

let P_33 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-3 Resolved")
    }, 7000);
})

let sadsa_dasdas;

let promise_all_2 = Promise.all([P_11, P_22, P_33])
promise_all_2.then((value) =>{
    console.log(value)
})

// Promises_API.html:1 Uncaught (in promise) Promise-2 Rejected    <---- Promise P_22 is rejected




// ---------------------------------------------------------------------------------------------------------------------------



// 2) Promise.allSetled([p1, p2, ..])



let P_12 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-1 Resolved")
    }, 5000);
})

let P_23 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Promise-2 Rejected")
    }, 2000);
})

let P_34 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-3 Resolved")
    }, 7000);
})

let promise_all_3 = Promise.allSettled([P_12, P_23, P_34])
promise_all_3.then((value) =>{
    console.log(value)
})

// (3) [{…}, {…}, {…}]
// 0: {status: 'fulfilled', value: 'Promise-1 Resolved'}        <---- After 7 Seconds 
// 1: {status: 'rejected', reason: 'Promise-2 Rejected'}        <---- After 7 Seconds 
// 2: {status: 'fulfilled', value: 'Promise-3 Resolved'}        <---- After 7 Seconds As Promise-34 takes max 7 seconds
// length: 3
// [[Prototype]]: Array(0)




// ---------------------------------------------------------------------------------------------------------------------------




// 3) Promise.race([p1, p2, ..])



let P_13 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-1 Resolved")
    }, 5000);
})

let P_24 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Promise-2 Rejected")
    }, 2000);
})

let P_35 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-3 Resolved")
    }, 7000);
})

let promise_all_4 = Promise.race([P_13, P_24, P_35])
promise_all_4.then((value) =>{
    console.log(value)
})

// Uncaught (in promise) Promise-2 Rejected     <----- Promise-24 takes min 2 seconds and it's rejected




let P_14 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-1 Resolved")
    }, 5000);
})

let P_25 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-2 Resolved")
    }, 2000);
})

let P_36 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-3 Resolved")
    }, 7000);
})

let promise_all_5 = Promise.race([P_14, P_25, P_36])
promise_all_5.then((value) =>{
    console.log(value)
})

// Promise-2 Resolved     <----- Promise-25 takes min 2 seconds and it's resolved




// ---------------------------------------------------------------------------------------------------------------------------




// 4) Promise.any([p1, p2, ..])



let P_15 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-1 Resolved")
    }, 5000);
})

let P_26 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Promise-2 Rejected")
    }, 2000);
})

let P_37 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-3 Resolved")
    }, 7000);
})

let promise_all_6 = Promise.any([P_15, P_26, P_37])
promise_all_6.then((value) =>{
    console.log(value)
})

// Promise-1 Resolved     <----- Promise-14 & Promise-26 both resolved, Promises-14 takes min 2 seconds




let P_16 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-1 Resolved")
    }, 5000);
})

let P_27 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-2 Resolved")
    }, 2000);
})

let P_38 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise-3 Resolved")
    }, 7000);
})

let promise_all_7 = Promise.any([P_16, P_27, P_38])
promise_all_7.then((value) =>{
    console.log(value)
})

// Promise-2 Resolved   <----- Promise-15, Promises-26 & Promise-26 all resolved, Promises-14 takes min 2 seconds




let P_17 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Promise-1 Rejected")
    }, 5000);
})

let P_28 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Promise-2 Rejected")
    }, 2000);
})

let P_39 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Promise-3 Rejected")
    }, 7000);
})

let promise_all_8 = Promise.any([P_17, P_28, P_39])
promise_all_8.then((value) =>{
    console.log(value)
})

// AggregateError: All promises were rejected   <----- All Promises is rejected, maximum time take is 7 secs




// ---------------------------------------------------------------------------------------------------------------------------




// 5) Promise.resolve(value)   :- Make a resolved promise with the given value




let promise_100 = Promise.resolve(56)
promise_100.then((value) =>{
    console.log(`promise_100 is resolved with vaue :- ${value}`)
}).catch((error) =>{
    console.log(`promise_100 is rejected with error :- ${error}`)
})

// promise_100 is resolved with vaue :- 56




// ---------------------------------------------------------------------------------------------------------------------------




// 6) Promise.reject(value)   :- Make a resolved promise with the given value




let promise_200 = Promise.reject(404)
promise_200.then((value) =>{
    console.log(`promise_200 is resolved with vaue :- ${value}`)
}).catch((error) =>{
    console.log(`promise_200 is rejected with error :- ${error}`)
})

// promise_200 is rejected with error :- 404


// ---------------------------------------------------------------------------------------------------------------------------