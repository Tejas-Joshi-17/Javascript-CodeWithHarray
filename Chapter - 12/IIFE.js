// IIFE :- An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
//         All varaible decleared inside IIFE are automatically destroyed after it's execution


// ---------------------------------------------------------------------------------------------------------------------------------------

let a = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(201)
        }, 4000)
    })
}

let Func_1 = async () =>{
    let a1 = await a()
    console.log(`The Value of a1 is :- ${a1}`)
    let b1 = await a()
    console.log(`The Value of b1 is :- ${b1}`)
    let c1 = await a()
    console.log(`The Value of c1 is :- ${c1}`)
}


console.log(`Start of the Program`)
Func_1()
console.log(`End of the Program`)

// Start of the Program
// End of the Program
// The Value of a1 is :- 201            <---- After 4  Seconds
// The Value of b1 is :- 201            <---- After 8  Seconds
// The Value of c1 is :- 201            <---- After 12 Seconds



// ---------------------------------------------------------------------------------------------------------------------------------------


let b = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(201)
        }, 4000)
    })
}

(async () =>{
    let a2 = await b()
    console.log(`The Value of a2 is :- ${a2}`)
    let b2 = await b()
    console.log(`The Value of b2 is :- ${b2}`)
    let c2 = await b()
    console.log(`The Value of c2 is :- ${c2}`)
})()


console.log(`Start of the Program`)
console.log(`End of the Program`)

// Start of the Program
// End of the Program
// The Value of a1 is :- 201            <---- After 4  Seconds
// The Value of b1 is :- 201            <---- After 8  Seconds
// The Value of c1 is :- 201            <---- After 12 Seconds


// ---------------------------------------------------------------------------------------------------------------------------------------



console.log(`Start of the Program`)

( async() =>{
    let d = () =>{
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(201)
            }, 4000)
        })
    }

    let a2 = await d()
    console.log(`The Value of a2 is :- ${a2}`)
    let b2 = await d()
    console.log(`The Value of b2 is :- ${b2}`)
    let c2 = await d()
    console.log(`The Value of c2 is :- ${c2}`)

})()

console.log(`End of the Program`)

// Start of the Program
// End of the Program
// The Value of a1 is :- 201            <---- After 4  Seconds
// The Value of b1 is :- 201            <---- After 8  Seconds
// The Value of c1 is :- 201            <---- After 12 Seconds


// ---------------------------------------------------------------------------------------------------------------------------------------
