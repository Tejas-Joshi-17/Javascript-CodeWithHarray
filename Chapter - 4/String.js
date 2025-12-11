/*  ***** String can be enclosed between ' ' OR " " ******* */


let shortName = `Tejas Joshi`
let fullName = `Tejas Dattatray Joshi`
let surName = "Teja's J'oshi"
let midName = 'Teja"s J"oshi'


console.log(shortName)   // Tejas Joshi
console.log(fullName)   // Tejas Joshi
console.log(surName)   // Teja's J'oshi
console.log(midName)   // Teja"s J"oshi





/*  ***** String.length gives length of the string  ******* */

console.log(shortName.length)    // 11   <--- Print length of the string



/*  ***** String[i] gives character present at index 'i' in the string  ******* */

console.log(shortName[0])    // T
console.log(shortName[1])    // e
console.log(shortName[2])    // j
console.log(shortName[4])    // s
console.log(shortName[5])    // 
console.log(shortName[6])    // J
console.log(shortName[7])    // s





// string is immutable i.e. we cannot change the string

let game = "GTA Vice City"
// game[2] = 'R'   <--- Cannot modify 'A' with 'R'
console.log(game)