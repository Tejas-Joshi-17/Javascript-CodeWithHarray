// ---------------------------------------------------------------------------------------------------------------------------
// 1) A function can be made async by using async keyword
// 2) An async function always returns a promise, Other values are wrapped in a promise automatically
// 3) "await" keyword works only inside async functions
// 4) "await" keyword makes javascript wait until the promise returns it's value
// ---------------------------------------------------------------------------------------------------------------------------


let Apple = async () =>{
    let P2 = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Promise-2 is Resolved")

            reject("No")
        }, 10000);
    })
    return P2;
}

Apple().then((value) => {
    console.log(`Apple Function resolve with value :- ${value}`)
}).catch((error) =>{
    console.log(`Apple Function rejected with error :- ${error}`)
})
// Apple Function resolve with value :- 7


// ---------------------------------------------------------------------------------------------------------------------------


let Banana = async() =>{
    a = 0
    b = 0

    let Promise_1 = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            a = 10
            resolve("200")
        }, 3000)
    })

    let Promise_2 = new Promise((resolve, reject) =>{
        setTimeout(() =>{
           b = 10
            resolve("201")
        }, 1000)
    })

    a1 =  Promise_1
    b1 =  Promise_2
    console.log(`Promise-1 solve with value :- ${a1}`)       // Promise-1 solve with value :- [object Promise]
    console.log(`Promise-2 solve with value :- ${b1}`)       // Promise-2 solve with value :- [object Promise]
    console.log(`Value of a is :- ${a}`)                     // Value of a is :- 0
    console.log(`Value of b is :- ${b}`)                     // Value of b is :- 0
}

Banana()


// ---------------------------------------------------------------------------------------------------------------------------


let Cat = async() =>{
    c = 0
    d = 0

    let Promise_3 = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            c = 10
            resolve("200")
        }, 3000)
    })

    let Promise_4 = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            d = 10
            resolve("201")
        }, 1000)
    })

    a2 =  await Promise_3    // Wait Until Promise_3 return either value/error
    b2 =  await Promise_4    // Wait Until Promise_4 return either value/error
    console.log(`Promise-1 solve with value :- ${a2}`)       // Promise-1 solve with value :- 200
    console.log(`Promise-2 solve with value :- ${b2}`)       // Promise-2 solve with value :- 201
    console.log(`Value of c is :- ${c}`)                     // Value of c is :- 10
    console.log(`Value of d is :- ${d}`)                     // Value of d is :- 10
}

Cat()


// ---------------------------------------------------------------------------------------------------------------------------