// 1) Create an array of numbers and take input from the user to add numbers to this array

let arr = [1,2,3,4]
console.log(arr)
let num = prompt("Please Enter the Number :- ")
console.log(typeof num)  // string
num = Number.parseInt(num)
arr.push(num)

// arr Before = [ 1, 2, 3, 4 ]
// Please Enter the Number :- 45
// arr After = [ 1, 2, 3, 4, 45 ]










// 2) Keep adding numbers to the array util user entered 0

let crr = [1,2,3,4]
let a
do{
    a = prompt("Enter the Number :- ")
    a = Number.parseInt(a)
    crr.push(a)
}while(a!=0);

console.log(crr)


// crr Before = [ 1, 2, 3, 4]

// Enter the Number :- 100
// Enter the Number :- 50
// Enter the Number :- 25
// Enter the Number :- 12
// Enter the Number :- 6
// Enter the Number :- 3
// Enter the Number :- 1
// Enter the Number :- 0

// crr After = [ 1, 2, 3, 4, 100, 50, 25, 12, 6, 3, 1, 0]






















// 3) Filter for numbers divisible by 10 from the given array

let drr = [12,40,2,-4,-30,100,60,20]
let ans = drr.filter((value) =>{
        return value%10 == 0
})

console.log(drr)        // [ 12, 40, 2, -4, -30, 100, 60, 20 ]
console.log(ans)        // [ 40, -30, 100, 60, 20 ]







// 4) Create an array of squares of given numbers

let err = [12,40,2,-4,-30,100,60,20]
let frr = err.map((value) =>{
        return value*value
})

console.log(err)        // [ 12, 40, 2, -4, -30, 100, 60, 20 ]
console.log(frr)        // [ 144, 1600, 4, 16, 900, 10000, 3600, 400 ]









// 5)  Use reduce method to calculate factorial of a given number from an array of first n natural numbers( n bring a number whose factorail you have to calculate )

let zee = [1,2,3,4,5,6]

let fact = zee.reduce((h1,h2) =>{
        return h1*h2
})

console.log("Factorial of " + zee.length + " is :- " + fact)                    // Factorial of 6 is :- 720



let Calculate_Factorial = (h1,h2) =>{
        return h1*h2
}
let Factorial = zee.reduce(Calculate_Factorial)


console.log("Factorial of " + zee.length + " is :- " + Factorial)               // Factorial of 6 is :- 720