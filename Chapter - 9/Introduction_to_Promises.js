let a = new Promise(function(resolve,reject){
    console.log("Hello")
})
// console = Hello




let b = new Promise(function(resolve,reject){
    console.log("Hello")
    resolve(56)
})
console.log(b)
// Promise {<fulfilled>: 56}
// [[Prototype]] :- Promise
// [[PromiseState]] :- "fulfilled"
// [[PromiseResult]] :- 56



let c = new Promise(function(resolve,reject){
    console.log("Hello")
    reject("Promises is Rejected")
})
console.log(c)
// Promise {<rejected>: 'Promises is Rejected'}
// [[Prototype]] :-  Promise
// [[PromiseState]] :-  "rejected"
// [[PromiseResult]] :-  "Promises is Rejected"






// Note :- Promises is used for Parallel Execution