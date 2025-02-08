// Q1: Basic Array Operations Create an array called fruits with the following values: "apple", "banana", "cherry", "date".Add "elderberry" to the end of the fruits array.Remove the first item from the fruitsarray.Use a loop to print out each item in the fruits array on a new line.

let fruits = ["apple", "banana", "cherry", "date"]
console.log(fruits)




// Adding "elderberry" in an Array
fruits[fruits.length] = "elderberry"
console.log(fruits)


// Removing First Element present in an Array
fruits.shift()
console.log(fruits)





// Printing Elements in an Array by using Loop
for(let i=0;i<fruits.length;i++){
    console.log("Value at index " + i +" is:- " + fruits[i])
}






