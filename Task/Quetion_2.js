// Q 2: Array Methods
// Create an array called numbers with the following values: 3, 7, 12, 15, 18. Use the push() method to add the value 21 to the end of the numbers array.Use the pop() method to remove the last value from the numbers array.Use the splice() method to remove the value at index 2 from the numbers array.Use the indexOf() method to find the index of the value 15 in the numbers array.Use the slice() method to create a new array called numbersCopy that contains the values from index 1 to index 3 of the numbers array.


let number = [3, 7, 12, 15, 18]
console.log(number)



number.push(21)
console.log(number)




number.pop()
console.log(number)





number.splice(2,1)
console.log(number)





let index = number.indexOf(15)
console.log(index)





let numbersCopy = number.slice(1,4)
console.log(numbersCopy)