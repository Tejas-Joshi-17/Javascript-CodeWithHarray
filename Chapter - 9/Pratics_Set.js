// ---------------------------------------------------------------------------------------------------------------------------



// 1) Write a program to load a javascript File in a Browser using Promises, Use .then() to display an alert when the load is complete

const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve(src + " Done success")
        }
            document.head.append(script)
        })
    }
    
let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")

a.then((value) => {
    alert(`Script Loaded :- ${value}`)
})





// ---------------------------------------------------------------------------------------------------------------------------





// 2) Write the Same Program from previous question and use async/await syntax.

const main = async () => {
    let Script = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
    alert(`Script Loaded :- ${Script}`)
}

main()





// ---------------------------------------------------------------------------------------------------------------------------




// 3) Create a Promise which rejects after 3 seconds, Use an async/await to get its value, Use a try catch to handle its error


let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                reject(new Error("Please this is not acceptable"))
            }, 3000)
        })
    }
    
    let b = async () => {
    try {
        let c = await p()
        console.log(c)
    }
    catch (err) {
        console.log("This error has been handled")
    }
}

b()





// ---------------------------------------------------------------------------------------------------------------------------




// 4) Write a Program using Promise.all() inside an async/await to await 3 promises. Compare its result with the case where we await these promises one by one.


let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(10)
            }, 2000)
        })
    }
    let p2 = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(20)
            }, 1000)
        })
}
let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000)
    })
}

const run = async () => {
    
    console.time("run")
    // let a1 = await p1()      // Takes 2 secs to Fullfill Promise-1                Time = 2
    // let a2 = await p2()      // Takes another 1 secs to Fullfill Promise-2        Time = 2+1 = 3
    // let a3 = await p3()      // Takes another 3 secs to Fullfill Promise-3        Time = 3+3 =6
    console.timeEnd("run")      // Total Time taken = 6 seconds
    
    
    console.time("run")
    let a1 = p1()               // Takes 2 secs to Fullfill Promise-1  
    let a2 = p2()               // Takes 1 secs to Fullfill Promise-2  
    let a3 = p3()               // Takes 3 secs to Fullfill Promise-3  
    let a1a2a3 = await Promise.all([a1, a2, a3])        
    console.timeEnd("run")      // Takes only 3 seconds
}

run()





// ---------------------------------------------------------------------------------------------------------------------------