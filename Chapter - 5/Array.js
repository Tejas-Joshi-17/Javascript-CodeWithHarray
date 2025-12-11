// Array can contain more than one data type

let arr = [7,true,undefined,"Tejas",null]
console.log(arr)     // [ 7, true, undefined, 'Tejas', null ]




/* ******** Array are mutable ******** */

let Game = [7,true,undefined,"Tejas",null]
console.log(Game[1])    // true
Game[1] = false
console.log(Game[1])    // false



/* ******** We can add new eleemnt in an Array later on ******** */

let Pame = [7,true,undefined,"Tejas",null]
console.log(Pame.length)    // 5
console.log(Pame[5])        // undefined <-- As there is no element in Pame aaray
Pame[5] = false
console.log(Pame)          // [ 7, true, undefined, 'Tejas', null, false ]
console.log(Pame[5])       // false




/* ******** Array are objects in JavaScript ******** */

let GTA_5 = [7,true,undefined,"Tejas",null]
console.log(typeof GTA_5)   // object




// 1) array.length   <--- print length of the array

let Full_Name = [7,true,undefined,"Tejas",null]
console.log(Full_Name.length)   // 5




// 2) array[i] <-- Returen value present at element 'i' in array

let Name = [7,true,undefined,"Tejas",null]
console.log(Name)
// [ 7, true, undefined, 'Tejas', null ]

console.log(Name[0])    // 7
console.log(Name[1])    // true
console.log(Name[2])    // undefined
console.log(Name[3])    // Tejas
console.log(Name[4])    // null

for(let i=0;i<Name.length;i++){
    console.log("Value at index " + i +" is:- " + Name[i])
}
// Value at index 0 is:- 7
// Value at index 1 is:- true
// Value at index 2 is:- undefined
// Value at index 3 is:- Tejas
// Value at index 4 is:- null

for(let key of Name){
    console.log(key)
}
// 7
// true
// undefined
// Tejas
// null