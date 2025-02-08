// --------------------------------------- Destructing Assignment --------------------------------------------------------

let [a1, b1] = [10, 20]
console.log(`The Value of a1 is :- ${a1}`)          // The Value of a1 is :- 10
console.log(`The Value of b1 is :- ${b1}`)          // The Value of b1 is :- 20


let [a2, b2, ...rest1] = [1, 2, 3, 4, 5, 6]
console.log(`The Value of a2 is :- ${a2}`)          // The value of a2 is :- 1
console.log(`The Value of b2 is :- ${b2}`)          // The value of b2 is :- 2
console.log(`The Value of rest1 is :- ${rest1}`)    // The Value of rest1 is :- 3,4,5,6


let [a3, , c3, , ...rest2] = [100, 200, 300, 400, 500, 600, 700]
console.log(`The Value of a3 is :- ${a3}`)          // The value of a3 is :- 100
console.log(`The Value of c3 is :- ${c3}`)          // The value of c3 is :- 300
console.log(`The Value of rest2 is :- ${rest2}`)    // The Value of rest2 is :- 500,600,700


let Obj1 = {Name : "Tejas Joshi", Age : 22, CGPA : 9.12}
let {Name, Age, CGPA} = Obj1
console.log(`The Value of Name is :- ${Name}`)         // The Value of Name is :- Tejas Joshi
console.log(`The Value of Age is :- ${Age}`)           // The Value of Age is :- 22
console.log(`The Value of CGPA is :- ${CGPA}`)         // The Value of CGPA is :- 9.12




// --------------------------------------------- Rest Operator ----------------------------------------------------------------
// Note :- "arguments" is available only in regular function not in Arrow Function.


function Total_Sum(){
    let Sum = 0;
    for(let i=0; i<arguments.length; i++){
        Sum += arguments[i]
    }
    
    console.log(arguments)                                          // [Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 }
    console.log(`Type of arguments is :- ${typeof arguments}`)      // Type of arguments is :- object
    console.log(`Sum is :- ${Sum}`)                                 // Sum is :- 100
    
    return Sum;
}

console.log(Total_Sum(10,20,30,40))             // 100
console.log(Total_Sum(10,20,30,40,50,60))      // 210



// --------------------------------------------------------------------------------------------------------------------------------------



function Multiplication(First_Name, Last_Name, ...args){
    let Mul = 1;
    for(let i=0; i<args.length; i++){
        Mul *= args[i]
    }
    
    console.log("args is :- " + args)                           // args is :- 1,2,3,4,5
    console.log("Type of args is :- " + typeof args)            // Type of args is :- object
    
    console.log(`Good Morning ${First_Name} ${Last_Name}`)      // Good Morning Tejas Joshi
    return Mul;
}

console.log(`Multiplications is :- ${Multiplication("Tejas","Joshi",1,2,3,4,5)}`)       // Multiplications is :- 120



// --------------------------------------------- Spread Operator ----------------------------------------------------------------


function Sum(First_Name, Last_Name, ...args){
    let Sum = 0;
    for(let i=0; i<args.length; i++){
        Sum += args[i];
    }

    console.log("args is :- " + args)                       // args is :- 1,2,3,4,5
    console.log(`Hello ${First_Name} ${Last_Name}`)         // Hello Tejas Joshi

    return Sum;
}

let arr_1 = [1,2,3,4,5]
console.log("Total Sum :- " + Sum("Tejas","Joshi", arr_1))      // Total Sum :- 01,2,3,4,5


// --------------------------------------------------------------------------------------------------------------------------------------


function Sum(First_Name, Last_Name, ...args){
    let Sum = 0;
    for(let i=0; i<args.length; i++){
        Sum += args[i];
    }

    console.log("args is :- " + args)                       // args is :- 1,2,3,4,5
    console.log(`Hello ${First_Name} ${Last_Name}`)         // Hello Tejas Joshi

    return Sum;
}

let arr_2 = [1,2,3,4,5]
console.log("Total Sum :- " + Sum("Tejas","Joshi", ...arr_2))      // Total Sum :- 15


// --------------------------------------------------------------------------------------------------------------------------------------


let arr = [1, "Tejas Joshi", true, 20, 4.34, false]

console.log(arr)           // [ 1, 'Tejas Joshi', true, 20, 4.34, false ]
console.log(...arr)        // 1 Tejas Joshi true 20 4.34 false
console.log([...arr])      // [ 1, 'Tejas Joshi', true, 20, 4.34, false ]


// --------------------------------------------------------------------------------------------------------------------------------------


let arr_3 = [10,20,30,40]

let arr_4 = arr_3
let arr_5 = [...arr_3]
arr_3.push(100) 

console.log(`arr_3 is :- ${arr_3}`)                 // arr_3 is :- 10,20,30,40,100
console.log(`arr_4 is :- ${arr_4}`)                 // arr_4 is :- 10,20,30,40,100
console.log(`arr_5 is :- ${arr_5}`)                 // arr_5 is :- 10,20,30,40


// --------------------------------------------------------------------------------------------------------------------------------------


let arr_6 = [1,3,5,7]
let arr_7 = [100,200,300,400]

let arr_8 = [...arr_6, ...arr_7]
console.log(`arr_8 is :- ${arr_8}`)                 // arr_8 is :- 1,3,5,7,100,200,300,400

let arr_9 = ["Tejas", "Joshi", ...arr_7, ...arr_6, true]
console.log(`arr_9 is :- ${arr_9}`)                 // arr_9 is :- Tejas,Joshi,100,200,300,400,1,3,5,7,true


// --------------------------------------------------------------------------------------------------------------------------------------


let Obj_1 = {
    Name : "Tejas Joshi",
    Course : "B.Tech"
}

let Obj_2 = {
    CGPA : 9.16
}

let Obj_3 = {...Obj_1, ...Obj_2}
console.log(Obj_3)
// { Name: 'Tejas Joshi', Course: 'B.Tech', CGPA: 9.16 }


// --------------------------------------------------------------------------------------------------------------------------------------