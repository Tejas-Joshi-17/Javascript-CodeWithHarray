// reduce()     <--- Reduces an array to a single value

let arr = [1,2,3,4,5,6]
let brr = arr.reduce((h1, h2) =>{
        return h1+h2
})


let reduce_func = (h1,h2) =>{
        return h2-h1
}
let crr = arr.reduce(reduce_func)

console.log(arr)        // [ 1, 2, 3, 4, 5, 6 ]

console.log(brr)        // 21
// 1+2 = 3
// 3+3 = 6
// 6+4 = 10
// 10+5 = 15
// 15+6 = 21

console.log(crr)        // 3
// 2-1 = 1
// 3-1 = 2
// 4-2 = 2
// 5-2 = 3
// 6-3 = 3 
