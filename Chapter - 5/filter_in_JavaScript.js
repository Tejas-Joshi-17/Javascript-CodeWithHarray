// filter()     <--- Filter an arrywith values that passes the test
//              <--- Create a new Array
//              <--- Does not modify the Original Array




let arr_1 = [45, 23, 21, 0, 3, 5]

let arr_2 = arr_1.filter((value) =>{
        return value<10
})

console.log(arr_1)      // [45, 23, 21, 0, 3, 5]
console.log(arr_2)      // [ 0, 3, 5 ]