// 1) Synchronous Actions :- Actions that are initiate and finish one-by-one according to sequence of initialization

let Name = prompt("What is Your Name :- ")
let Age = prompt("What is Your Age :- ")
let Contact_No = prompt("What is Your Contact Number :- ")
console.log(`Your Name :- ${Name} Age is :- ${Age} & Conatct No. :- ${Contact_No}`)

// What is Your Name :- Tejas joshi
// What is Your Age :- 21
// What is Your Contact Number :- 8485835616
// Your Name :- Tejas Joshi Age is :- 21 & Conatct No. :- 8485835616







// 2) Asynchronus Actions :- Actions that are we initiate now and they are finish later 

Hello =(a,b)=>{
    console.log("Calculation " + a + " + " + b + " is:- " + (a+b))
}

console.log("Start")
setTimeout(Hello, 4000, 10,20 )
console.log("End")

// Start
// End
// Calculation 10 + 20 is:- 30


























// 3) Callback Function :- Function passed into another function as an argument, which is then invoked inside the outer function to complete the action




/* ********************* Function Recap ******************** */


function fun1 (p,q) {   // Old way
    return p+q;
}

console.log("sum of 4 & 5 is :- "+ fun1(4,5));
// sum of 4 & 5 is :- 9




fun2 =(p,q) =>{     // Modern way
    return p+q;
}

console.log("sum of 10 & 20 is :- "+ fun2(10,20));
// sum of 10 & 20 is :- 30






/************************  without Callback **************************/
function loadScript(src){
    let script = document.createElement('script')
    script.src = src
    script.onload = () =>{
        console.log("script loaded :- " + src)
    }
    document.body.appendChild(script)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js")

// Console :-   script loaded :-https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js





/********************* with Callback with no argumnets ************************/ 
function loadScript(src , callback){
    let script = document.createElement('script')
    script.src = src
    script.onload = () =>{
        console.log("script loaded :- " + src)
        callback()
    }
    document.body.appendChild(script)
}

Morning = () =>{
    console.log("Good Morning EveryOne !!!!");
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", Morning)


// Console :-  script loaded :- https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js
//             Good Morning EveryOne !!!!



  
/************************* with Callback having one or more arguments  ************************/ 
function loadScript(src , callback){
    let script = document.createElement('script')
    script.src = src
    script.onload = () =>{
        console.log("script loaded :- " + src)
        callback(src)
    }
    document.body.appendChild(script)
}

Morning = (src) =>{
    console.log("script length is :- " + src.length);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", Morning)

// Console:-  script loaded :-https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js
//            script length is :- 76