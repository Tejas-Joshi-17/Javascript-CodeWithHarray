// 1) Write a program to print the marks of a student in an object using for loop

const printer = (X) =>{
    for (let key in X){
        console.log(`${key} is:- ${X[key]}`) // Template Literals
    }
}

let PrinTer = (X) => {
    for(const element of Object.keys(X)){
        console.log(`${element} is:- ${X[element]}`) // Template Literals;
    }
}

let Info = {
    Harry : 98,
    Rohan : 70,
    Aakash : 7
}

printer(Info)
// Harry is:- 98
// Rohan is:- 70
// Aakash is:- 7

PrinTer(Info)
// Harry is:- 98
// Rohan is:- 70
// Aakash is:- 7







// 2) Write a program to print 'Try Again' until the user enter the correct number

let num = 24
let i
while(i!=num){
    let x = prompt("Enter the Number :- ")
    i = Number.parseInt(x);
    document.write("Please Enter Correct Number\n")
}
document.write("Congratulation, You Entered Corect number\n")

// Enter the Number :- 100
// Please Enter Coorect Number
// Enter the Number :- 50
// Please Enter Coorect Number
// Enter the Number :- 10
// Please Enter Coorect Number
// Enter the Number :- 100
// Congratulation, You Entered Corect number









// 4) Write a function to find mean of 5 number

let mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5
}

let Mean = (a,b,c,d,e) => {
    let ans = (a+b+c+d+e)/5
    console.log("Mean is :- " + ans)
}

let a = 1,b=2,c=3,d=4,e=5
let x = mean(a,b,c,d,e)

console.log("Mean is :- " + x)          // Mean is :- 3
Mean(a,b,c,d,e)                         // Mean is :- 3