// Q4: Advanced Array Operations
// Create an array called matrix that is 3x3 (3 rows, 3 columns) and filled with random numbers between 1 and 10.Use a loop to calculate the sum of all the numbers in the matrix array.Use the reduce() method to calculate the sum of all the numbers in the matrix array.Use the filter() and map() methods to create a new array called doubledEvens that contains the doubled values of all even numbers in the matrix array.


var matrix = [
    [1, 2, 8],
    [9, 6, 4],
    [5, 3, 5]
]

let sum = 0
for(let i=0;i<matrix.length; i++){
    for(let j=0;j<matrix[i].length; j++){
        sum += matrix[i][j]
    }
}
console.log("Sum is :- " + sum)




let reduce_func = (h1,h2) =>{
    return h2+h1
}

let Total_Sum = 0
for(let i=0;i<matrix.length; i++){
    Total_Sum += matrix[i].reduce(reduce_func)
}
console.log("Total Sum is :- " + Total_Sum)






let Array_1 = matrix.filter((value) =>{
    for(let i=0; i<value.length; i++){
        for(let j=0; j<value[i].length; j++){
            if(value[i][j] % 2 == 0){
                return value[i][j]*2
            }
        }
    }
})
console.log(Array_1)