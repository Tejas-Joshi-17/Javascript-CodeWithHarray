// 1) arr.toString()    <<-- Convert an array to a string of comma separated values

let Name = [1, true, null, undefined, "Tejas"]
let a = Name.toString();
console.log(`${a} ${typeof a}`)  // 1,true,,,Tejas  string









// 2) arr.join("$")     <<-- joins all the array elements using '$' separater

let Game = [1,"Tejas",true,false,99]
let b = Game.join("-")
console.log(`${b} ${typeof b}`);  // 1-Tejas-true-false-99   string











// 3) arr.pop()     <<-- Removes last element from the array
//                  <<-- Updates the Original array
//                  <<-- Returns the poped value

let arr = [1,"Tejas",true,false,99]
console.log(`Length of array Before :- ${arr.length}`);
// Length of array Before :- 5

let c = arr.pop();
console.log(`${c} is Removes from array`)
// 99 is Removes from array

console.log(`Length of array After :- ${arr.length}`);
// Length of array After :- 4

console.log(`${c} ${typeof c}`)  // 99  number








// 4) arr.push(x)   <<-- Add a new element at the end of the array
//                  <<-- Modify the Original Array
//                  <<-- Returns the new Array length

let brr = [1,"Tejas",true,false,99]
console.log("Length of array Before :- " + brr.length);
// Length of array Before :- 5

let d = brr.push(100);      // d = 6

console.log("Length of array After :- " + brr.length);
// Length of array After :- 6

console.log(d + " " + typeof d)  // 6  number








// 5) arr.shift()   <<-- Removes the first element of an array
//                  <<-- Returns the Removed element

let pee = [1,"Tejas",true,false,99]
console.log(`Length of array Before :- ${pee.length}`);
// Length of array Before :- 5

let f = pee.shift();      // f = 1
console.log(`${f} is Removes from array`)
// 1 is Removes from array

console.log(`Length of array After :- ${pee.length}`);
// Length of array After :- 4

console.log(`${f} ${typeof f}`)  // 1  number










// 6) arr.unshift()   <<-- Add element to the Begining 
//                    <<-- Returns new Array length

let drr = [1,"Tejas",true,false,99]
console.log(`Length of array Before :- ${drr.length}`);
// Length of array Before :- 5

let e = drr.unshift(true);      // e = 6

console.log(`Length of array After :- ${e}`);
// Length of array After :- 6

console.log(`${e} ${typeof e}`)  // 6  number











// 7) arr.delete()   <<-- Array element can be deleted using delete operator
//                   <<-- Returns the deleted element
//                   <<-- Add <1 empty item> at place of deleted element
//                   <<-- length of the Array not changes

let kee = [1,"Tejas",true,false,99]
console.log(`Length of array Before :- ${kee.length}`);
console.log(kee)
// Length of array Before :- 5
// [ 1, 'Tejas', true, false, 99 ]

let t = delete kee[2];      // t = true

console.log("Length of array After :- " + kee.length);
console.log(kee)
// Length of array After :- 5
// [ 1, 'Tejas', <1 empty item>, false, 99 ]

console.log(t + " " + typeof kee)  // 6  number











// 8) arr.concat()   <<-- Used to join arrays to the given Array
//                   <<-- Returns the new Array.
//                   <<-- Does not change the existing Arrays

let arr_1 = [1,"Tejas",true,false,99]
let arr_2 = [2,"Joshi",false,true,100]
let arr_3 = [-1]
console.log("Length of array_1 Before :- " + arr_1.length);     // 5
console.log("Length of array_2 Before :- " + arr_2.length);     // 5
console.log("Length of array_3 Before :- " + arr_3.length);     // 1
console.log(arr_1)      // [ 1, 'Tejas', true, false, 99 ]
console.log(arr_2)      // [ 2, 'Joshi', false, true, 100 ]
console.log(arr_3)      // [ -1 ]

let arr_4 = arr_3.concat(arr_1,arr_2)

console.log("Length of array_1 After :- " + arr_1.length);      // 5
console.log("Length of array_2 After :- " + arr_2.length);      // 5
console.log("Length of array_3 After :- " + arr_3.length);      // 1
console.log(arr_1)
console.log(arr_2)
console.log(arr_3)
// Length of array After :- 5

console.log(arr_4)      // [ -1, 1. 'Tejas', true, false, 99, 2, 'Joshi', false, true, 100]
console.log(arr_4.length)       // 11











// 9) arr.sort()     <<-- Sort Array according Alphabetically order
//                   <<-- Modify the Original Array.
//                   <<-- Sorting done according ASCII Code

let Incresing_Sort = (a,b) =>{
        return a-b
}

let Decresing_Sort = (a,b) =>{
        return b-a
}

let brr_1 = [1,23,221,45,53,99,1011]
brr_1.sort();
console.log(brr_1)  // [ 1, 1011, 221, 23, 45, 53, 99]

brr_1.sort(Incresing_Sort)
console.log(brr_1)       // [ 1, 23, 45, 53, 99, 221, 1011]

brr_1.sort(Decresing_Sort)
console.log(brr_1)       // [ 1101, 221, 99, 53, 45, 34, 1]










// 10) arr.reverse()  <<-- Reverse the Elements present the Original Array
//                   <<-- Modify the Original Array.
//                   <<-- Reverse Order according ASCII Code


let crr = [1,23,221,45,53,99,1011]
crr.reverse();
console.log(crr)  // [ 1, 1011, 221, 23, 45, 53, 99]

let krr = ["Tejas",true,null,12,34,-99]
krr.reverse();
console.log(krr)  // [ -99, 34, 12, null, true, 'Tejas' ]










// 11) arr.splice()  <<-- Used to add new item to an Array
//                   <<-- Modify the Original Array.


let yrr = [1,23,221,45,53,99,1011]
console.log(yrr)          // [ 1, 1011, 221, 23, 45, 53, 99]

yrr.splice(2,3,"Tejas",true,null);      
// From index='2' to index='2+3' remove elements and add "Tejas",true,null insted of it

console.log(yrr)          // [ 1, 23, 'Tejas', true, null, 99, 1011 ]




let Frr = ["Tejas",true,null,12,34,-99]
console.log(Frr)        // [ 'Tejas', true, null, 12, 34, -99 ]

Frr.splice(2,3,"Joshi",10000,34.32,false,"Japan");
console.log(Frr)        // [ 'Tejas', true, 'Joshi', 10000, 34.32, false, 'Japan', -99 ]













// 12) arr.slice()   <<-- Slice out a piece from an Array 
//                   <<-- Create a New Array.

let wrr = [1,2,3,4,5,6,7]
console.log(wrr)        // [ 1, 2, 3, 4, 5, 6, 7]

let qrr = wrr.slice(2)    // <-- array qrr = array 'wrr' starting from index=2
console.log(qrr)        // [3, 4, 5, 6, 7]

let err = wrr.slice(2,5)   // <-- array err = array 'wrr' starting from index=2 to index=5
console.log(err)        // [3, 4, 5]