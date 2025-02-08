// Q3: Array Sorting and Filtering
// Create an array called People with the following values and name: [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 20 },
//   { name: "Dave", age: 35 },
//   { name: "Emily", age: 27 },
//   { name: "Frank", age: 22 }
// ]]

// Use the filter() method to create a new array called over25 that contains only the people in the people array who are over the age of 25.
// Use the sort() method to sort the people array by age, in ascending order.
// Use the map() method to create a new array called names that contains only the names of the people in the people array.



let People = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "Dave", age: 35 },
  { name: "Emily", age: 27 },
  { name: "Frank", age: 22 }
]
console.log(People)




let over25 = People.filter((value) =>{
    return value.age > 25
})
console.log(over25)




People.sort()
console.log(People)


over25.sort()
console.log(over25)






let names = People.map((value) =>{
    return value.name
})
console.log(names)