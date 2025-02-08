let Name = `Tejas Joshi`
let Age = 21
let Contact_No = 23.21







// 1) setTimeout()      <---- Allows us to run a  function once after the interval of time एकबार ही run होगा.
// clearTimeout(timerID)  <---- Used to cancel the execution of setTimeout

// let timerID = setTimeout( function, delay_time, <arg1, arg2, ...> ) 
// clearTimeout(timeID)

function_name_1 = (a,b) =>{
    alert(`The Sum of ` + a + ` & `+ b + ` is :- ` + (a+b))
}

let a = setTimeout(function_name_1,3000,20,10)

clearTimeout(a)        // <--- cancel the setTimeout function still 
console.log(a)            // 1   <--- a 












// 2) setInterval()     <--- Runs a function not only once, but repaditely after the given interval of time
//                      <--- बार-बार run होगा.
// clearInterval(timerID)  <---- Used to cancel the execution of setInterval

// let timerID = setTimeout( function, delay_time, <arg1, arg2, ...> ) 
// clearTimeout(timeID)


function_name_2 = (a,b) =>{
    console.log(`The Sum of ` + a + ` & `+ b + ` is :- ` + (a+b))
}

let b = setInterval(function_name_2,3000,20,10)

clearInterval(b)        // <--- cancel the setTimeout function still 
console.log(b)          // 2   <--- b   as 'a' will receive 1  otherwise b = 1 



