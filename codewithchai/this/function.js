// ------------------------------------------------------------------------------------------------------------------------------------------------

let fullName = `Tejas Joshi`

function func1() {
    let name = "Tejas Joshi";
    console.log(this.name);             // undefined
    console.log(this.fullName);         // undefined
    console.log(this);
    // <ref *1> Object [global] {
    //     global: [Circular *1],
    //     clearImmediate: [Function: clearImmediate],
    //     setImmediate: [Function: setImmediate] {
    //         [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     clearInterval: [Function: clearInterval],
    //     clearTimeout: [Function: clearTimeout],
    //     setInterval: [Function: setInterval],
    //     setTimeout: [Function: setTimeout] {
    //         [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     queueMicrotask: [Function: queueMicrotask],
    //     structuredClone: [Function: structuredClone],
    //     atob: [Getter/Setter],
    //     btoa: [Getter/Setter],
    //     performance: [Getter/Setter],
    //     fetch: [Function: fetch],
    //     crypto: [Getter]
    // }
}

func1();

// ------------------------------------------------------------------------------------------------------------------------------------------------


let fun2 = () => {
    let name = "Tejas Joshi";
    console.log(this.name)          // undefined
    console.log(this.fullName)      // undefined
    console.log(this)               // {}
}

fun2();

// ------------------------------------------------------------------------------------------------------------------------------------------------