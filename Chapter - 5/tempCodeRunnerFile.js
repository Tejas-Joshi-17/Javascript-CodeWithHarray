let zee = [1,2,3,4,5,6]

let fact = zee.reduce((h1,h2) =>{
        return h1*h2
})

console.log("Factorial of " + zee.length + " is :- " + fact)
// Factorial of 6 is :- 720



let Calculate_Factorial = (h1,h2) =>{
        return h1*h2
}
let Factorial = zee.reduce(Calculate_Factorial)


console.log("Factorial of " + zee.length + " is :- " + Factorial)
// Factorial of 6 is :- 720