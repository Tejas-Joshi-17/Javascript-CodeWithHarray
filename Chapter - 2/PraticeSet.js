// ---------------------------------------- Practice Set - 2 -----------------------------------------------------------------------


// 1) Use logical operator to find whether the age of a person lies between 10 & 20

let Age = 17
if(Age>=10 && Age<=20)
    console.log("Pass");    // Pass
else
    console.log("Fail")


// ------------------------------------------------------------------------------------------------------------------------------------

// 2) Demonstrate use of switch-case Statement

let age = 14;
switch(age){
    case 10: console.log("Your Age is :- 10")
             break;
    case 11: console.log("Your Age is :- 11")
             break;
    case 12: console.log("Your Age is :- 12")
             break;
    case 13: console.log("Your Age is :- 13")
             break;
    case 14: console.log("Your Age is :- 14")
             break;
    default: console.log("None of these")
             break;
}
// Your Age is :- 14


// ------------------------------------------------------------------------------------------------------------------------------------



// 3) Writa a Javascript program to find whether a number is divisible by 2 and 3

let num = 12
if(num%2==0 && num%3==0)
    console.log(num + " is divisible by both 2 & 3")
// 12 is divisible by both 2 & 3


// ------------------------------------------------------------------------------------------------------------------------------------


// 4) Writa a Javascript program to find whether a number is divisible by either 2 or 3

let Num = 15
if(Num%2==0 || Num%3==0)
    console.log(Num + " is divisible by 2 or 3")
// 15 is divisible by 2 or 3


// ------------------------------------------------------------------------------------------------------------------------------------


// 5) Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator

let AGE = 17
let a = (AGE>=18)? "You can Drive" : "You cannot Drive"
console.log(a)
// You cannot Drive


// ------------------------------------------------------------------------------------------------------------------------------------