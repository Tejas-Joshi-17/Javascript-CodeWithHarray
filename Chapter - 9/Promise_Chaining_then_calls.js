let p1 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log(`Resolve After 2 seconds`)
        resolve(56)
    }, 2000);
})

p1.then((value) =>{
    console.log(`P1 Promise is resolved :- ${value}`)
    let p2 = new Promise((resolve, reject) =>{
        console.log(`Promise 2 Resolved`)
        resolve("Resolved")
    })
    return p2
}).then((value) =>{
    console.log(`Promise-2 resolve with :- ${value}`)
    return 2      // <---- Javascript takes return as promise
}).then((value) =>{
    console.log(`Promise-2 returns :- ${value}`)
})

// Resolve After 2 seconds
// P1 Promise is resolved :- 56
// Promise 2 Resolved
// Promise-2 resolve with :- Resolved
// Promise-2 returns :- 2