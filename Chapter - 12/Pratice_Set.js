// --------------------------------------------------------------------------------------------------------------------------------

// Q.1. Write a Javascript Program to print the following after 2 Seconds Dealy
//   Hello
//   World

const a = async (text, n = 2) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text)
      }, 1000 * n)
    })
  }
  
(async () => {
    let text = await a("Hello")
    console.log(text)
    text = await a("World")
    console.log(text)
})()

// Hello            <----- After 2 Seconds
// World            <----- After 4 Seconds



// --------------------------------------------------------------------------------------------------------------------------------


// 2) Write a Javascript Program to find Average of numbers in an Array using Spread Operator

function totalSum(){
    let Sum = 0;
    for(const element of arguments){
        Sum += element
    }
    return Sum;
}

console.log(totalSum(10,20,30,40))             // 100
console.log(totalSum(10,20,30,40,50,60))       // 210


// --------------------------------------------------------------------------------------------------------------------------------


// 3) Write a Javascript Function which resolves a Promise after n seconds. The function takes n as the parameter. Use an
//    IIFE to execute the function with differnet values of n

( async function(){
    function resolveAfterNSeconds(n) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Promise resolved after ${n} seconds`);
            }, n * 1000);
        });
    }
    
    const result1 = await resolveAfterNSeconds(2);
    console.log(result1);       // Promise resolved after 2 seconds  :- 2
    
    const result2 = await resolveAfterNSeconds(4);
    console.log(result2);       // Promise resolved after 4 seconds  :- 2+4
    
    const result3 = await resolveAfterNSeconds(6);
    console.log(result3);       // Promise resolved after 6 seconds  :- 2+4+6
    
})();



// --------------------------------------------------------------------------------------------------------------------------------


// 4) Write a Simple Interest Calculator using Javascript

let simpleInterest = (p, r, t) =>{
    return (p * r * t) / 100;
}

let SimpleInterest = simpleInterest(100, 5, 1)
console.log(`Simple Interest is :- ${SimpleInterest}\nPrincipal Amount :- 100\nRate of Interest :- 5\nTime Duration :- 1`)
// Simple Interest is :- 5
// Principal Amount :- 100
// Rate of Interest :- 5
// Time Duration :- 1


// --------------------------------------------------------------------------------------------------------------------------------