// map()   <--- Creates a new array by performing some operations on each array element
//         <--- Does not modify Original Array

let a = [10,40,20,50,30]
a.map((value) =>{
        console.log(value)
})
// 10
// 40
// 20
// 50
// 30



a.map((value,index)=>{
        console.log(index + " :- " + value)
})
// 0 :- 10
// 1 :- 40
// 2 :- 20
// 3 :- 50
// 4 :- 30






a.map((value,index,array) =>{
        console.log(index + " :- " + value + " && " + array)
})
// 0 :- 10 && 10,40,20,50,30
// 1 :- 40 && 10,40,20,50,30
// 2 :- 20 && 10,40,20,50,30
// 3 :- 50 && 10,40,20,50,30
// 4 :- 30 && 10,40,20,50,30








let brr = a.map((value) =>{
        console.log(value)
        return value+1
}) 
// 10
// 40
// 20
// 50
// 30
console.log(brr)        // [ 11, 41, 21, 51, 31 ]





let crr = a.map((value, index) =>{
        console.log(index + " :- " + value)
        return index+value
})
// 0 :- 10
// 1 :- 40
// 2 :- 20
// 3 :- 50
// 4 :- 30
console.log(crr)        // [ 10, 41, 22, 53, 34 ]





let drr = a.map((value) =>{
        return value*100
})
console.log(drr)        // [ 1000, 4000, 2000, 5000, 3000 ]
