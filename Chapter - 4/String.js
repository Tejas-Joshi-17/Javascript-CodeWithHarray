/*  ***** String can be enclosed between ' ' OR " " ******* */


let Name = "Tejas Joshi"
let Full_Name = 'Tejas Joshi'
let Surname = "Teja's J'oshi"
let Mid_Name = 'Teja"s J"oshi'


console.log(Name)   // Tejas Joshi
console.log(Full_Name)   // Tejas Joshi
console.log(Surname)   // Teja's J'oshi
console.log(Mid_Name)   // Teja"s J"oshi





/*  ***** String.length gives length of the string  ******* */

console.log(Name.length)    // 11   <--- Print length of the string



/*  ***** String[i] gives character present at index 'i' in the string  ******* */

console.log(Name[0])    // T
console.log(Name[1])    // e
console.log(Name[2])    // j
console.log(Name[4])    // s
console.log(Name[5])    // 
console.log(Name[6])    // J
console.log(Name[7])    // s





// string is immutable i.e. we cannot change the string

let Game = "GTA Vice City"
// Game[2] = 'R'   <--- Cannot modify 'A' with 'R'
console.log(Game)